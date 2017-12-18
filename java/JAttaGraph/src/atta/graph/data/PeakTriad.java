package atta.graph.data;

public class PeakTriad {
	double aveSize;

	double aveHeight;

	double avePe;

	int np;

	public PeakTriad() {
	}

	public int init(String names, PeakSet ps) {
		np = 0;
		aveSize = aveHeight =  avePe = 0.0;
		String []nms = names.split(",");
		for (String nm : nms) {
			nm = nm.trim();
			int idx = ps.iFromName(nm);
			if (idx == -1) {
				//String err = "Peaks triade. Connot find peak with name: " + nm;
				return 0;
			}
			Peak p = ps.getPeak(idx);
			aveSize += p.size;
			aveHeight += p.relHeight;
			avePe += p.powerExpr;
			np++;
		}
		if (np > 0) {
			aveSize /= np;
			aveHeight /= np;
			avePe /= np;
		}
		return 1;
	}

	double getAveSize() {
		return aveSize;
	}

	double getAveHeight() {
		return aveHeight;
	}

	double getAvePe() {
		return avePe;
	}
}
