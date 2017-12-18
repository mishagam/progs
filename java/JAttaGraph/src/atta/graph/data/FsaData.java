package atta.graph.data;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.RandomAccessFile;
import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.swing.JFrame;

public class FsaData {

	class AbiHeaderName {
		String name;

		byte[] ooo = new byte[14];

		void read() throws IOException {
			name = readString4();
			file.read(ooo, 0, 14);
		}
	}

	class AbiHeaderValues {
		int numRecords;

		int ooo;

		int offset;

		public void read() throws IOException {
			numRecords = readInt();
			ooo = readInt();
			offset = readInt();
		}
	}

	class AbiRecord {
		String name;
		int tagNumber;
		short dataType;
		short elementSize;
		int numElements;
		int recordLength;
		int dataOffset;
		int unknown;

		public void read() throws IOException {
			name = readString4();
			tagNumber = readInt();
			dataType = readShort();
			elementSize = readShort();
			numElements = readInt();
			recordLength = readInt();
			dataOffset = readInt();
			unknown = readInt();
		}
	}

	class AbiPeakRecord {
		int pos;
		short height;
		short[] oo = new short[10];
		float size;

		public void read() throws IOException {
			pos = readInt();
			height = readShort();
			for (int i = 0; i < 10; i++) {
				oo[i] = readShort();
			}
			size = readFloat();
		}
	}

	public static final int MAX_COLORS = 4;

	// attributes
	/**
	 * We use this peak set give names to peaks in other peak sets read from FSA
	 * files
	 */
	Factorial fact = new Factorial();
	public String fsaFileName = "";
	public int numColors;
	public int numRows;
	public short[][] data = new short[MAX_COLORS][];
	public short[][] baseLine = new short[MAX_COLORS][];
	public PeakSet peaks = new PeakSet();
	public PeakSet reds = new PeakSet();

	/** Peaks threshold. heights above this are considered in peak */
	public int threshold;
	/** minimal size of peak to be included in table */
	public double minPeakSize;
	/** maximum size of peak to be included in table */
	public double maxPeakSize;

	// properties from common values
    /** max distance between peaks (in size) so they are still assumed one peak */
    double peaksSpan;
    /** max number ov values below threshold so we still assume it is one peak */
    int interPeaksInterval;
    /** Minimum width of peak on threshold leve to be accepted as peak.*/
    int minPeakWidth;
    /** we should use peaks data with baseline substracted*/
    boolean substractBaseline;
    /** maximum height of peak, after which we have to issue warning*/
    int maxPeakHeight;
    /** show peaks with no names from factorial */
    boolean showUnnamedPeaks;    
    /** Threshold for Red Peaks, copy */
    public int redPeaksThreshold;
	/** used for peaks caching */
	boolean[] lastColors = new boolean[MAX_COLORS];
	boolean needPeaksUpdate = true;
	
	/** stream used in reading FSA files */
	RandomAccessFile file = null;
	CommonValues comv = CommonValues.getInstance();	
	private JFrame myFrame = null;	
	String error = "";

	public FsaData() {
		comv = CommonValues.getInstance();
		this.threshold = comv.defaultThreshold;
		this.minPeakSize = comv.defaultMinSize;
		this.maxPeakSize = comv.defaultMaxSize;
	    this.peaksSpan = comv.peaksSpan;
	    this.interPeaksInterval = comv.interPeaksInterval;
	    this.minPeakWidth = comv.minPeakWidth;
	    this.substractBaseline = comv.substractBaseline;
	    this.maxPeakHeight = comv.maxPeakHeight;
	    this.showUnnamedPeaks = comv.showUnnamedPeaks;
	    this.redPeaksThreshold = comv.redPeaksThreshold;
	}

	/**
	 * read int from stream in inverted order
	 * 
	 * @return
	 */
	int readInt() throws IOException {
		int ret = 0;
		for (int i = 0; i < 4; i++) {
			byte b = (byte) file.read();
			ret = (ret << 8) | (b & 0xFF);
		}

		return ret;
	}

	/**
	 * read short in inverted order
	 */
	short readShort() throws IOException {
		short ret = 0;
		for (int i = 0; i < 2; i++) {
			byte b = (byte) file.read();
			ret = (short) ((ret << 8) | (b & 0xFF));
		}

		return ret;
	}

	/**
	 * read 4 chars in string.
	 * 
	 * @return
	 * @throws IOException
	 */
	String readString4() throws IOException {
		String sr = "";
		for (int i = 0; i < 4; i++) {
			byte b = (byte) file.read();
			char c = (char) b;
			sr += c;
		}
		return sr;
	}

	/**
	 * read float
	 * 
	 * @return
	 * @throws IOException
	 */
	float readFloat() throws IOException {
		// for now just skip 4 bytes and return 0
		for (int i = 0; i < 4; i++) {
			file.read();
		}
		return (float) 0.0;
	}

	public void readFsaData(String fileName) throws IOException {
		if (!fileName.endsWith(".fsa")) {
			throw new IllegalArgumentException("should be FSA file " + fileName);
		}
		AbiHeaderName headerName = new AbiHeaderName();
		AbiHeaderValues header = new AbiHeaderValues();
		AbiRecord record = new AbiRecord();
		int[] dataOffset = new int[MAX_COLORS];
		int[] dataLen = new int[MAX_COLORS];
		int[] peaksOffset = new int[MAX_COLORS];
		int[] peaksLen = new int[MAX_COLORS];
		numColors = 4;
		int idata = 0;
		int nData = 0; // number of DATA records
		int nPeaks = 0; // number of PEAKS records

		// preparing data
		for (int i = 0; i < MAX_COLORS; i++) {
			dataLen[i] = 0;
			data[i] = null;
			peaksOffset[i] = 0;
			peaksLen[i] = 0;
		}

		// now starting reading file
		this.fsaFileName = fileName;
		file = new RandomAccessFile(fileName, "r");
		headerName.read();
		if (!headerName.name.equals("ABIF")) {
			file.close();
			throw new IOException("Illegal file, starts with "
					+ headerName.name + " Instead of ABIF");
		}
		file.seek(18);
		header.read();
		// first count peaks and data records
		file.seek(header.offset);
		for (int i = 0; i < header.numRecords; i++) {
			record.read();
			if (record.name.equals("DATA")) {
				nData++;
			} else if (record.name.equals("PEAK")) {
				nPeaks++;
			}
		}
		// determining groups of data to load
		int firstData = (substractBaseline && nData > 8 ? 8 : 0);

		// now reading Data and peaks records
		file.seek(header.offset);
		for (int i = 0; i < header.numRecords; i++) {
			// reading record
			record.read();
			if (record.name.equals("DATA")) {
				if (idata++ < firstData) {
					continue;
				}
				int nc = record.tagNumber - firstData - 1;
				if (nc < MAX_COLORS) {
					dataOffset[nc] = record.dataOffset;
					dataLen[nc] = record.numElements;
					if (numRows < dataLen[nc]) {
						numRows = dataLen[nc];
					}
				}
			} else if (record.name.equals("PEAK")) {
				// reading peakset - for now skip
			}
		}

		// allocatind data
		for (int i = 0; i < numColors; i++) {
			if (dataLen[i] > 0) {
				data[i] = new short[numRows + 10];
				baseLine[i] = new short[numRows + 10];
			}
		}

		// reading data
		for (int i = 0; i < numColors; i++) {
			file.seek(dataOffset[i]);
			for (int j = 0; j < numRows; j++) {
				if (j < dataLen[i]) {
					data[i][j] = readShort();
				} else {
					data[i][j] = 0;
				}
			}
		}

		// reading red peaks
		if (peaksOffset[3] > 0) {
			// we rarely have FSA files with peaks
			// reds = readReds(peaksOffset[3], peaksLen[3], fin);
		} else {
			calculateReds();
		}

		// calculate and substract baseline
		if (firstData == 0 && substractBaseline) {
			for (int col = 0; col < 4; col++) {
				// counting baseline
				this.countBaseline(col);
				// substracting baseline
				for (int i = 0; i < numRows; i++) {
					data[col][i] -= baseLine[col][i];
				}
			}
		}

		// close file
		file.close();
	}

	// / counting averages ignoring too far off values
	void countBaseline(int color) {
		int baseline_span = 20;
		double ave = 0.0;
		double suma = 0.0;
		int na = 0;
		int lena = 500;
		// several scans with average
		int nscans = 4;
		short[] ds = data[color];
		int maxBase = threshold;
		// int minBase = -threshold;

		if (ds == null) {
			return; // calculation not possible
		}
		boolean[] used = new boolean[numRows];
		for (int i = 0; i < numRows; i++) {
			used[i] = (ds[i] < maxBase); // && (ds[i] > minBase);
		}
		boolean[] usedCopy = new boolean[numRows];
		for (int is = 0; is < nscans; is++) {
			// calc averageof used items
			suma = 0;
			for (int i = 0; i < numRows + lena; i++) {
				int i0 = i - lena;
				int i1 = i;
				if (i < numRows) {
					if (used[i]) {
						suma += ds[i];
						na++;
					}
				} else {
					i1 = numRows - 1;
				}
				if (i >= lena) {
					if (used[i - lena]) {
						suma -= ds[i - lena];
						na--;
					}
				} else {
					i0 = 0;
				}
				ave = suma / na;
				int idx = (i0 + i1) / 2;
				baseLine[color][idx] = (short) ave;
				if (!used[idx] || (Math.abs(ds[idx] - ave) > baseline_span)) {
					usedCopy[idx] = false;
				} else {
					usedCopy[idx] = true;
				}
			}
			for (int i = 0; i < numRows; i++) {
				used[i] = usedCopy[i];
			}
		}
	}

	// / checking that colors are the same as lastColors.
	boolean sameColors(boolean[] colors) {
		if (needPeaksUpdate) {
			needPeaksUpdate = false;
			return false;
		}
		boolean same = true;
		for (int i = 0; i < 4; i++) {
			if (colors[i] != lastColors[i]) {
				same = false;
				break;
			}
		}

		return same;
	}

	/**
	 * select peaks from data.
	 * 
	 * @param colors -
	 *            colors for which we select peaks
	 * @return number of found peaks
	 */
	int getPeaks(boolean[] colors) {
		int peakWid = 0;
		boolean onlyRed = true;

		if (sameColors(colors) && peaks.v.size() > 0) {
			return peaks.v.size(); // return cached peaks, no new
			// calculations
		}
		peaks.clear();
		// attempt to read namedPeaks if it id not red peaks
		for (int i = 0; i < 3; i++) {
			if (colors[i]) {
				onlyRed = false;
			}
		}
		// first attempt to read factorial from AttaInput
		if (!onlyRed) {
			if (this.fact.size() == 0 && comv.useWebFactorial) {
				MyInternet mint = MyInternet.getInstance();
				// reading factorial from web
				long sampleId = mint.readFactorial(this.fact, this.fsaFileName);
				if (sampleId == 0) {
					//MyUtils.MyMessage("readFactorial from AttaInput failed, Try to read peaks from peak namesfile");
					this.fact.clear();
				}
			}
			if (this.fact.size() == 0 && comv.factorialFileName != "") {
				try {
					this.fact.readFactorial(comv.factorialFileName);
				} catch (IOException ioe) {
					ioe.printStackTrace();
					fact.clear();
				}
			}
		}
		short[] ndata = new short[numRows];
		for (int iCol = 0; iCol < this.numColors; iCol++) {
			if (!colors[iCol] || data[iCol] == null) {
				continue;
			}
			PeakSet cpeaks = new PeakSet(); // peakset for this color
			short trs = (short) (iCol == 3 ? redPeaksThreshold
					: this.threshold);
			boolean inPeak = false;
			Peak cp = new Peak(); // current peak
			int inColNum = 0;
			data[iCol][this.numRows - 1] = 0;
			cleanInterpeaks(data[iCol], ndata, trs);
			for (int i = 0; i < this.numRows; i++) {
				short v = ndata[i];
				if (v > trs) {
					if (inPeak) {
						cp.area += v;
						peakWid++;
						if (v > cp.height) {
							cp.height = v;
							cp.pos = i;
						}
					} else {
						// new peak
						cp = new Peak();
						cp.height = v;
						// cp.pos = i;
						cp.area = v;
						cp.num = inColNum++;
						inPeak = true;
						peakWid = 0;
						cp.pos = i;
					}
				} else {
					if (inPeak) {
						if (peakWid >= minPeakWidth) {
							// adding new peak to peaks
							cp.size = posToSize(cp.pos);
							cpeaks.add(cp);
						} else {
							System.err
									.println("getPeaks(), Peak is too narrow, peakWid = "
											+ peakWid);
						}
						inPeak = false;
					}
				}
			}
			PeakSet cnamedPeaks = null;
			if (iCol == 0) {
				// blue peaks
				cnamedPeaks = this.fact;
			} else if (iCol == 3) {
				// red peaks
				cnamedPeaks = comv.redPeaks;
			}

			if (cnamedPeaks != null && cnamedPeaks.size() > 0
					&& reds.size() > 0) {
				cpeaks.joinWithNamedPeaks(cnamedPeaks, peaksSpan,
						showUnnamedPeaks);
			}
			

			peaks.addAll(cpeaks);
		}
		boolean onlyBlue = true;
		for (int i = 0; i < MAX_COLORS; i++) {
			if (onlyBlue) {
				if ((i==0 && !colors[i]) || (i!=0 && colors[i])) {
					onlyBlue = false;
				}
			}
			lastColors[i] = colors[i];
		}

		return peaks.v.size();
	}	

	boolean checkFL() {
		// we return 1 if we cannot do tests
		PeakTriad ff = new PeakTriad();
		int bret = ff.init(fact.firstPeak, peaks);
		if (bret == 0) {
			this.error += "Illegal first peak\n";
			return true;
		}
		PeakTriad ll = new PeakTriad();
		bret = ll.init(fact.lastPeak, peaks);
		if (bret == 0) {
			this.error += "Illegal last peak\n";
			return true;
		}

		if (ff.np == 0 || ll.np == 0 || peaks.size() == 0 || reds.size() == 0) {
			//errors.add("*** We cannot do tests in FsaData::checkFL()");
			return true;
		}
		double first = ff.aveHeight;
		double last = ll.aveHeight;
		if (first / last > 1.0 + (fact.maxFLRatioError / 100.0)) {
			//errors.add("First / Last ratio check failed, F/L sizes: " + first + " " + last);
			return false;
		}
		if (last / first > 1.0 + (fact.maxFLRatioError / 100.0)) {
			//errors.add("First / Last ratio check failed, F/L sizes: " + first + " " + last);
			return false;
		}

		return true;
	}


	boolean calculateReds() {
		boolean bret;
		double POS_ERR_LIMIT = 0.005; // max relative error of pos
		boolean[] colors = new boolean[] { false, false, false, true };
		int nPeaks = getPeaks(colors);
		if (nPeaks < 5) {
			return false; // reading red peaks failed
		}
		if (comv.redPeaks.size() == 0) {
			if (comv.redPeaksFileName == "") {
				return false; // no file to read from
			}
			bret = comv.redPeaks.readNamedPeaks(comv.redPeaksFileName);
			if (!bret) {
				return bret;
			}
		}
		final int ASIZE = 60;
		final int MAXD = 12;
		if (ASIZE + MAXD < peaks.size() || ASIZE + MAXD < peaks.size()) {
			MyUtils.MyMessage("Too big peakset sizes in calculateReds");
			return false;
		}

		// initilize pos, sz - copy to double arrays
		double[] pos = new double[ASIZE]; // positions
		double[] sz = new double[ASIZE];
		int nPos = peaks.size();
		int nSz = comv.redPeaks.size();
		if (nPos > 63)
			nPos = 63; // we anyway work with 64 bit masks
		for (int i = 0; i < nPos; i++) {
			pos[i] = peaks.getPeak(i).pos;
		}
		for (int i = 0; i < nSz; i++) {
			sz[i] = comv.redPeaks.getPeak(i).size;
		}

		// now combining peaks with comv->redPeaks
		int maxComb = -1000;
		int lnOpt = 0;
		long maskOpt = 0;
		int iSz0opt = 0; // start of equivalent portion
		int iPos0opt = 0;
		for (int iSz0 = 0; iSz0 < 10; iSz0++) {
			for (int iPos0 = 0; iPos0 < 10; iPos0++) {
				int comb = 0;
				long mask = -1; // mask of valid peaks
				double pos0 = -1;
				double pos1 = -1;
				int dPos = 0;
				for (int i = 0; i < ASIZE; i++) {
					int iPos = i + iPos0 + dPos;
					if (iPos < 0 || iPos >= nPos - 2) {
						break;
					}
					int iSz = i + iSz0;
					if (iSz < 0 || iSz >= nSz - 2) {
						break;
					}
					// initializing pos0, pos1
					if (pos0 < 0) {
						pos0 = pos[iPos];
						pos1 = pos[iPos + 1];
					}
					// checking precision of interpolation
					// checking pos prediction - pred pos[iPos + 1]
					double ratio = (pos[iPos + 2] - pos0)
							/ (sz[iSz + 2] - sz[iSz]);
					double pred = pos0 + ratio * (sz[iSz + 1] - sz[iSz]);
					double err = Math.abs(pred - pos1);
					// checking peak
					if ((err / (1000 + pos1)) >= POS_ERR_LIMIT) {
						// exclude pos[iPos + 2] from mask
						long rm = ((long) 1) << (iPos + 2 - iPos0);
						mask &= (~rm);
						dPos++;
						i--;
					} else {
						pos0 = pos1;
						pos1 = pos[iPos + 2];
						comb++;
					}
				}
				if (comb > maxComb) {
					maxComb = comb;
					lnOpt = comb + 2;
					maskOpt = mask;
					iSz0opt = iSz0;
					iPos0opt = iPos0;
				}
			}
		}

		if (maxComb < 5) {
			MyUtils
					.MyMessage("calculateReds failed, we will be unable\n to calculate peaks sizes\n"
							+ " max compatible peaks = " + 5);
			return false;
		}
		// now preparing our reds - just copy size from rp
		reds.clear();
		int ip = iPos0opt;
		for (int i = 0; i < lnOpt; i++) {
			while ((maskOpt & ((long) 1 << (ip - iPos0opt))) == 0) {
				ip++;
			}
			Peak p = peaks.getPeak(ip);
			int iSz = i + iSz0opt;
			p.size = sz[iSz];
			reds.v.add(p);
			ip++;
		}

		return true;
	}

	/**
	 * Cleans narrow interpeaks intervals making data in them trs+1. Copies
	 * cleaned data to ndata.
	 * 
	 * @param data -
	 *            source data
	 * @param ndata
	 *            data after work with cleaned interpeaks intervals.
	 * @param trs -
	 *            threshold
	 */
	void cleanInterpeaks(short[] cdata, short[] ndata, short trs) {
		int ip0 = -1;
		for (int i = 0; i < numRows; i++) {
			ndata[i] = cdata[i];
			if (cdata[i] > trs) {
				int ipLen = i - ip0;
				if (ip0 >= 0 && ipLen < interPeaksInterval) {
					for (int j = ip0; j < i; j++) {
						ndata[j] = (short) (trs + 1);
					}
				}
				ip0 = -1;
			} else {
				if (ip0 < 0) {
					ip0 = i;
				}
			}
		}
	}

	/**
	 * Converting peak position in raw data to size of nucleotides represented
	 * in this peak. Uses linear interpokation of sizes aqnd positions of red
	 * peaks (optained directly from FSA file, not calculated) for calculation.
	 * Data outside range of red peaks ore calculated using linear estimation
	 * 
	 * @param pos -
	 *            integer position of peak in raw data
	 * @return estimated size of nucleotides that give this peak
	 */
	public double posToSize(int pos) {
		if (reds.size() == 0) {
			return 0;
		}
		double sz = reds.interpolateSize(pos);

		return sz;
	}

	/**
	 * we use binary search for inverting posToSize function
	 */
	public int sizeToPos(double size) {
		if (reds.size() == 0) {
			return 0;
		}
		int i0 = 0;
		int i1 = numRows - 2;
		while (i1 - i0 > 0) {
			int ii = (i0 + i1) / 2;
			double s = posToSize(ii);
			if (s < size) {
				i0 = ii + 1;
			} else {
				i1 = ii - 1;
			}
		}
		return i0;
	}

	/**
	 * setting colors to false so getPeaks recalcullates next time
	 */
	public void resetColors() {
		for (int i = 0; i < MAX_COLORS; i++) {
			lastColors[i] = false;
		}
	}

	/**
	 * returning string with filename and peaks info in table.
	 * 
	 * @return
	 */
	public String getTextData(boolean[] showColors) {
		StringBuffer vcs = new StringBuffer();

		if (this.fsaFileName.length() > 0) {
			// vcs.append(fsaFileName + "\n");
		}

		vcs.append("Num.\tSize\theight\tArea\tPos.\tRelative Peak Height\tSpecific TF Activity\tTF Name\n");
		this.needPeaksUpdate = true;
		this.preparePeaks(lastColors, false);

		NumberFormat form = NumberFormat.getInstance();
		form.setMaximumFractionDigits(2);
		for (int i = 0; i < peaks.size(); i++) {
			Peak p = peaks.getPeak(i);
			if (p.size < minPeakSize || p.size > maxPeakSize) {
				continue;
			}
			if (p.pos == 0) {
				p.pos = sizeToPos(p.size);
			}

			vcs.append(p.num + "\t");
			vcs.append(form.format(p.size) + "\t");
			vcs.append(p.height + "\t");
			vcs.append(p.area + "\t");
			vcs.append(p.pos + "\t");
			vcs.append(MyUtils.convertDoubleValue(p.relHeight) + "\t\t");
			vcs.append(MyUtils.convertDoubleValue(p.powerExpr) + "\t\t");
			vcs.append(p.name + "\n");
		}
		return vcs.toString();
	}
	/**
	 * returning string with filename and peaks info in table 
	 * in HTML format for demonstrating in copy peaks dialog
	 * 
	 * @return
	 */
	public String getTextHtmlData(boolean[] showColors) {
		StringBuffer vcs = new StringBuffer();

		if (this.fsaFileName.length() > 0) {
			// vcs.append(fsaFileName + "\n");
		}

		vcs.append("<table cellpadding=2><thead><tr>");
		vcs.append("<th><b>Num.</b></th><th>Size</th><th>height</th><th>Area</th><th>Pos.</th>");
		vcs.append("<th>Relative Peak Height</th><th>Specific TF Activity</th><th>TF Name</th></tr>\n");
		this.needPeaksUpdate = true;
		this.preparePeaks(lastColors, false);

		NumberFormat form = NumberFormat.getInstance();
		form.setMaximumFractionDigits(2);
		for (int i = 0; i < peaks.size(); i++) {
			Peak p = peaks.getPeak(i);
			if (p.size < minPeakSize || p.size > maxPeakSize) {
				continue;
			}
			if (p.pos == 0) {
				p.pos = sizeToPos(p.size);
			}

			vcs.append("<tr><td>" + p.num + "</td><td>\n");
			vcs.append(form.format(p.size) + "</td><td>\n");
			vcs.append(p.height + "</td><td>\n");
			vcs.append(p.area + "</td><td>\n");
			vcs.append(p.pos + "</td><td>\n");
			vcs.append(MyUtils.convertDoubleValue(p.relHeight) + "</td><td>\n");
			vcs.append(MyUtils.convertDoubleValue(p.powerExpr) + "</td><td>\n");
			vcs.append(p.name + "</td></tr>\n");
		}
		vcs.append("</table>");
		return vcs.toString();
	}

	void countRelativeHeights(boolean[] colors, double minSize, double maxSize) {
		boolean[] cols = new boolean[4];
		PeakSet relHpeaks = new PeakSet();
		for (int col = 0; col < MAX_COLORS; col++) {
			if (!colors[col]) {
				continue;
			}
			for (int i = 0; i < MAX_COLORS; i++) {
				cols[i] = false;
			}
			cols[col] = true;
			this.getPeaks(cols);
			this.peaks.countRelativeHeights(minSize, maxSize);
			relHpeaks.addAll(peaks);
		}
		for (int i = 0; i < MAX_COLORS; i++) {
			lastColors[i] = colors[i];
		}
		peaks = relHpeaks;
	}

	String[] getPeaksNames() {
		return peaks.getPeaksNames(minPeakSize, maxPeakSize);
	}

	double[] getPeakValues() {
		int np = peaks.size();
		double[] dat = new double[np];
		for (int i = 0; i < peaks.size(); i++) {
			Peak p = peaks.getPeak(i);
			// replace height to PowerOfExpressions
			double v;
			if (fact.usePowerExpression) {
				v = p.powerExpr;
			} else {
				v = p.relHeight;
			} 
			dat[i] = v;
		}

		return dat;
	}
	
	double linearInterpolation(PeakTriad ff, PeakTriad ll, double size, double len, double mid) {
		double linear = ff.getAveHeight() + 
				(size - ff.getAveSize()) * 
				(ll.getAveHeight() - ff.getAveHeight())/len;
		linear /= mid;
		return linear;
	}

	/**
	 * compensate for first/ last ratio. compensate values of relative height,
	 * power expression for ratio of heights of first and last peaks.
	 */
	boolean compensateFL() {
		if (fact.useFLCompensation) {
			// we work from center between F and L
			PeakTriad ff = new PeakTriad();
			int bret = ff.init(fact.firstPeak, peaks);
			if (bret == 0) {
				return false;
			}
			PeakTriad ll = new PeakTriad();
			bret = ll.init(fact.lastPeak, peaks);
			if (bret == 0) {
				return false;
			}

			double len = (ll.getAveSize() - ff.getAveSize());
			double mid = (ff.getAveHeight() + ll.getAveHeight())/2;
			if (linearInterpolation(ff, ll, minPeakSize, len, mid) < 0 || 
					linearInterpolation(ff, ll, maxPeakSize, len, mid) < 0) {
				error += "F / L compensation failed, negative linear est values values";
				return false;
			}
					
			// check linear
			for (int i=0; i<peaks.v.size(); i++) {
				Peak pp = peaks.getPeak(i);
				if (pp.color != 0) {
					continue;
				}
				// calculate linear estimation
				double linear = linearInterpolation(ff, ll, pp.size, len, mid);
				if (linear < 0) {
					error += "F / L compensation failed, negative linear est values values";
					return false;
				}
				// compensating
				pp.relHeight = pp.height / linear;
			}
		} 
		return true;
	}
	
	boolean checkLinearity(List<String> errors) {
		// we return 1 if we cannot do tests
		int iLin1 = peaks.iFromName(fact.linearPeak1);
		int iLin2 = peaks.iFromName(fact.linearPeak2);
		int iLin3 = peaks.iFromName(fact.linearPeak3);
		if (!fact.useLinearityCheck || iLin1 < 0 || iLin2 < 0 
				|| iLin3 < 0 || peaks.size() == 0 || reds.size() == 0) {
			System.out.println("*** We cannot do tests in FsaData::checkLinearity()");
			return true;
		}
		double s1 = peaks.getPeak(iLin1).size;
		double h1 = peaks.getPeak(iLin1).height;
		double s2 = peaks.getPeak(iLin2).size;
		double h2 = peaks.getPeak(iLin2).height;
		double s3 = peaks.getPeak(iLin3).size;
		double h3 = peaks.getPeak(iLin3).height;
		double h2e = h1 + (s2 - s1) * (h3 - h1) / (s3 - s1);
		if (h2e / h2 > 1.0 + (fact.maxLinearityError / 100.0)) {
			String error = "Linearity check failed\n heights = " + h1 + " " + h2 + " " + h3 +
				" Estimated second height = " + h2e;
			errors.add(error);
			return false;
		}
		if (h2 / h2e > 1.0 + (fact.maxLinearityError / 100.0)) {
			String error = "Linearity check failed\n heights = " + h1 + " " + h2 + " " + h3 +
					" Estimated second height = " + h2e;
			errors.add(error);
			return false;
		}

		return true;
	}


	void clearLastColors() {
		Arrays.fill(lastColors, false);
	}

	public Factorial getFact() {
		return fact;
	}

	public void setFact(Factorial fact) {
		this.fact = fact;
	}

	public JFrame getMyFrame() {
		return myFrame;
	}

	public void setMyFrame(JFrame myFrame) {
		this.myFrame = myFrame;
	}
	
	public void readFsaDataAtg(String fileName) throws IOException {
		BufferedReader bf = null;
		try {
			bf = new BufferedReader(new FileReader(fileName));
		
			List<String> slt = new ArrayList<String>();
			List<String> slf = new ArrayList<String>();
			String s;
			// reading FsaData properties
			while (true) {
				s = bf.readLine();
				if (s == null) {
					throw new IOException("bad ATG format, unexpected end of FILE in FsaData properties");
				}
				s = s.trim();
				if (s.equals("")) {
					break;
				}
				slt.add(s);
			}
			this.parseProperties(slt);
	
			// read factorial
			s = bf.readLine().trim();
			if (!s.equals("Factorial:")) {
				throw new IOException("Factorial: was expected");
			}
			// read factorial properties
			while (true) {
				s = bf.readLine();
				if (s == null) {
					throw new IOException("bad ATG format, unexpected end of FILE in FsaData properties");
				}
				s = s.trim();
				if (s.equals("")) {
					break;
				}
				slf.add(s);
			}
			fact.parseProperties(slf);
	
			// read factorial peaks
			s = bf.readLine().trim();
			if (!s.equals("FactorialPeaks:")) {
				throw new IOException("FactorialPeaks: were expected");
			}
			fact.v.clear();
			while (true) {
				s = bf.readLine();
				if (s == null) {
					throw new IOException("bad ATG format, unexpected end of FILE in FsaData properties");
				}
	
				Peak p = new Peak();
				int br = p.fromNamedString(s);
				if (br == 0) {
					break;
				}
				p.name.trim();
				fact.v.add(p);
			}
	
			// read red peaks
			s = bf.readLine().trim();
			if (!s.equals("RedPeaks:")) {
				throw new IOException("RedPeaks: were expected");
			}
	
			// read red names peaks
			comv.redPeaks.clear();
			while (true) {
				s = bf.readLine();
				if (s == null) {
					throw new IOException("bad ATG format, unexpected end of FILE in FsaData properties");
				}
				Peak p = new Peak();
				int br = p.fromNamedString(s);
				if (br == 0) {
					break;
				}
				p.name = p.name.trim();
				comv.redPeaks.v.add(p);
			}
	
			// read fsa data peaks
			s = bf.readLine().trim();
			if (!s.equals("Peaks:")) {
				throw new IOException("Peaks: were expected");
			}
	
			// read peaks
			peaks.v.clear();
			while (true) {
				s = bf.readLine();
				if (s == null) {
					throw new IOException("bad ATG format, unexpected end of FILE in FsaData properties");
				}
				Peak p = new Peak();
				int br = p.fromString(s);
				if (br == 0) {
					break;
				}
				p.name = p.name.trim();
				peaks.v.add(p);
			}
	
			// read data
			for (int iCol =0; iCol < numColors; iCol++) {
				s = bf.readLine();
				s = s.trim();
				String exp = "Data" + iCol + ":";
				if (!exp.equals(s)) {
					throw new IOException("PeaksN: were expected");
				}
				readData(bf, iCol);
			}

		} finally {
			if (bf != null) {
				bf.close();
			}
		}

	    // reading red peaks
	    calculateReds();
	}

	void readData(BufferedReader br, int iCol) throws IOException {
		data[iCol] = new short[numRows];
		String s = null;
		int last = 0;
		int il =  0;
		for (int i = 0; i<numRows; i++) {
			if (i % 100 == 0) {
				s = br.readLine();
				il = 0;
			}
			if (s == null) {
				throw new IOException("Unexpected EOF in reading data");
			}
			char c = s.charAt(il++);
			int d = 0;
			if (c == '0') {
				d = 0; 
			} else if ('a' <= c && c<= 'z') {
				d = (c-'a') + 1; 
			} else if ('A' <= c && c<= 'Z') {
				d = (c-'A') + 1; d = -d; 
			} else {
				StringBuilder sr = new StringBuilder();
				while (c != ',') {
					if (c != '-' && (c<'0' || '9'<c)) {
						throw new IOException("Unexpected number character in readData");
					}
					if (sr.length() >=9) {
						throw new IOException("Unexpected too long number in readData");
					}
					sr.append(c);
					c = s.charAt(il++);
				}
				//il++;
				d = Integer.parseInt(sr.toString());
			}
			data[iCol][i] = (short)(last + d);
			last = data[iCol][i];
		}
		br.readLine();
	}
	
	public void writeFsaDataAtg(String fileName) throws IOException {
		PrintWriter out = null;
		try {
			out = new PrintWriter(fileName);
			
			// write this properties
			List<String> props = this.getProperties();
			for (String s : props) {
				out.println(s);
			}
			
			// writing factorial properties
			out.println("\nFactorial:");
			List<String> factProps = fact.getPropsList();
			for (String s : factProps) {
				out.println(s);
			}
			out.println();
			
			// writing factorial peaks
			out.println("FactorialPeaks:");
			for (Peak p : fact.v) {
				out.println(p.toNamedString());
			}
			
			// writing Red Peaks names
			out.println();
			out.println("RedPeaks:");
			for (Peak p : comv.redPeaks.v) {
				out.println(p.toNamedString());
			}
			
			// writing peaks
			out.println();
			out.println("Peaks:");
			for (Peak p : peaks.v) {
				out.println(p.toString());
			}

			// writing data
			for (int iCol=0; iCol<MAX_COLORS; iCol++) {
				out.println("\nData" + iCol + ":");
				writeData(out, iCol);
			}
			
        } finally {
            if (out != null) {
                out.close();
            }
        }
	}
	
	public void writeFsaDataCsv(String fileName) throws IOException {
		PrintWriter out = null;
		try {
			out = new PrintWriter(fileName);
			// writing data
			for (int i=0; i<this.numRows; i++) {
				for (int j=0; j<numColors; j++) {
					out.print(data[j][i]);
					if (j < numColors - 1) {
						out.print(",");
					}
				}
				out.println();
			}			
        } finally {
            if (out != null) {
                out.close();
            }
        }
	}
	
	int writeData(PrintWriter out, int iCol) {
		short []pd = data[iCol];
		if (pd == null) {
			return 0;
		}
		StringBuilder sb = new StringBuilder();
		short prev = 0;
		for (int i = 0; i<this.numRows; i++) {
			short d = (short)(pd[i] - prev);
			prev = pd[i];
			if (d == 0) {
				sb.append('0');
			} else if (0 < d && d < 26) {
				char c = (char)('a' + (d-1));
				sb.append(c);
			} else if (-26 < d && d < 0) {
				char c = (char)('A' + (-1-d));
				sb.append(c);
			} else {
				sb.append("" + d + ",");
			}
			if (i%100 == 99) {
				out.println(sb.toString());
				sb.setLength(0);  // clear buffer
			}
		}
		out.println(sb.toString());
		return 1;
	}
	
	/**
	 * compose properties like 
	 * name=value
	 * in CStringList
	 */
	void parseProperties(List<String> sl) {
		for (String s : sl) {
			String []ss = s.split("=");
			if (ss.length < 2) {
				continue;
			}
			String name = ss[0].trim();
			String val = ss[1].trim();
			if (name.equals("fsaFileName")) {
				fsaFileName = val;
			} else if (name.equals("maxPeakSize")) {
				maxPeakSize = Double.parseDouble(val);
			} else if (name.equals("minPeakSize")) {
				minPeakSize = Double.parseDouble(val);
			} else if (name.equals("threshold")) {
				threshold = Integer.parseInt(val);
			} else if (name.equals("numColors")) {
				numColors = Integer.parseInt(val);
			} else if (name.equals("numRows")) {
				numRows = Integer.parseInt(val);
			} else if (name.equals("peaksSpan")) {
				peaksSpan = Double.parseDouble(val);
			} else if (name.equals("interPeaksInterval")) {
				interPeaksInterval = Integer.parseInt(val);
			} else if (name.equals("minPeakWidth")) {
				minPeakWidth = Integer.parseInt(val);
			} else if (name.equals("showUnnamedPeaks")) {
				showUnnamedPeaks = Integer.parseInt(val) != 0;
			} else if (name.equals("substractBaseline")) {
				substractBaseline = Integer.parseInt(val) != 0;
			} else if (name.equals("redPeaksThreshold")) {
				redPeaksThreshold = Integer.parseInt(val);
			}
		}
	}
	
	List<String> getProperties() {
		List<String> props = new ArrayList<String>();
		props.add("fsaFileName=" + fsaFileName);
		props.add("maxPeakSize=" + maxPeakSize);
		props.add("minPeakSize=" + minPeakSize);
		props.add("threshold=" + threshold);
		props.add("numColors=" + numColors);
		props.add("numRows=" + numRows);
		// copied properties from common values
		props.add("peaksSpan=" + peaksSpan);
		props.add("interPeaksInterval=" + interPeaksInterval);
		props.add("minPeakWidth=" + minPeakWidth);
		props.add("showUnnamedPeaks=" + (showUnnamedPeaks ? "1" : "0"));
		props.add("substractBaseline=" + (substractBaseline ? "1" : "0"));
		props.add("redPeaksThreshold=" + this.redPeaksThreshold);

		return props;
	}
	
	int removeOutOfRangePeaks() {
		PeakSet nps = new PeakSet();
		for (int i=0; i<peaks.v.size(); i++) {
			Peak p = peaks.getPeak(i);
			if (minPeakSize <= p.size && p.size <= maxPeakSize) {
				nps.add(p);
			}
		}
		peaks.clear();
		peaks.addAll(nps);
		return 1;
	}

	int divideByBasePeak() {
		if (fact.basePeak.equals("")) {
			// no base peak defined
			return 0;
		}
		PeakTriad bp = new PeakTriad();;
		int bret = bp.init(fact.basePeak, peaks);
		if (bret == 0) {
			error += "we cannot divide without correct base peak";
			return 0;
		}
		double baseH = bp.getAveHeight();
		double basePE = bp.getAvePe();
		if (baseH < 0.001) {
			error += "base peak has practically zero height\n";
			return 0;
		}
		for (int i=0; i<peaks.size(); i++) {
			Peak p = peaks.getPeak(i);
			p.relHeight = p.relHeight / bp.getAveHeight();
			p.powerExpr /= basePE;    //?????
		}

		return 1;
	}
	
	void initRelHeight() {
		for (Peak p : peaks.v) {
			p.relHeight = p.height;
		}
	}

	/** prepare peaks for other parts of program. Steaps performed:
	 * a) validate F/L
	 * b) compensate F / L
	 * c) validate linearity
	 * d) check peaks on man / min size
	 * e) calculate relative heighs
	 * f) calculate PE
	 * g) divide by base peak.
	 * In case of error show error message boxes.
	 *
	 * @param colors - colors for which we calcullate peaks
	 * @param factOnly - if true, we take only peaks from factorial - blue and named
	 * @return - number of found peaks
	 */
	public int preparePeaks(boolean []colors, boolean factOnly) {
		String error = "";
		// get peaks using getPeks() method
		int ret = getPeaks(colors);
		if (ret == 0) {
			error += "getPeaks failed\n";
			return ret;
		}
		initRelHeight();
		// validate F/L
		boolean bret = checkFL();
		if (!bret) {
			error += "checking F/L ratio failed\n";
			//return 0;
		}
		// compensate F / L
		bret = compensateFL();
		if (!bret) {
			error += "F / L compensation failed\n";
			//return 0;
		}
		// remove peaks outside of min / max range
		ret = removeOutOfRangePeaks();
		if (ret == 0) {
			error += "Remove out of range peaks failed\n";
			return 0;
		}

		// calculate Power Expression
		peaks.calculatePowerExpression();
//		if (ret == 0) {
//			error += "calculatePowerExpression failed\n";
//			return 0;
//		}

		// divide by base peak 
		if (!fact.basePeak.equals("")) {
			ret = divideByBasePeak();
			if (ret == 0) {
				error += "divide by Base Peak failed\n";
				return 0;
			}
		} else {
			peaks.calculateRelativeHeightsPE();
		}

		return peaks.size();
	}

}
