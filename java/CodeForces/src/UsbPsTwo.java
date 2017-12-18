// CodeForces Round #762 B done, with error.

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class UsbPsTwo {
	
	int a,b,c,m;  // number vertices, max cats
	ArrayList<Long> usbm = new ArrayList<>();
	ArrayList<Long> psm = new ArrayList<>();
	int nComp;
	long price;

	private void readData(BufferedReader bin) throws IOException {
		String s = bin.readLine();
		String []ss = s.split(" ");
		a = Integer.parseInt(ss[0]);
		b = Integer.parseInt(ss[1]);
		c = Integer.parseInt(ss[2]);
		// reading m
		s = bin.readLine();
		ss = s.split(" ");
		m = Integer.parseInt(ss[0]);		// reading mouses
		
		for (int i=0; i<m; i++) {
			s = bin.readLine();
			ss = s.split(" ");
			long prc = Long.parseLong(ss[0]);
			if (ss[1].equals("USB")) {
				usbm.add(prc);
			} else {
				psm.add(prc);
			}
		}
	}

	void printRes() {
		System.out.println(nComp + " " + price);
	}	

	private void calculate() {
		Collections.sort(usbm);
		Collections.sort(psm);
		int idxUsb = 0, idxPs=0;
		// allocate usb
		for (int i=0; i<a && idxUsb<usbm.size(); i++) {
			price += usbm.get(idxUsb);
			idxUsb++;
		}
		// allocate ps2
		for (int i=0; i<b && idxPs<psm.size(); i++) {
			price += psm.get(idxPs);
			idxPs++;
		}
		// allocate common
		for (int i=0; i<c && (idxPs<psm.size() || idxUsb<usbm.size()); i++) {
			long prcUsb = (idxUsb<usbm.size() ? usbm.get(idxUsb) : 2000111222);
			long prcPs = (idxPs<psm.size() ? psm.get(idxPs) : 2000111222);
			if (prcUsb < prcPs) {
				price += usbm.get(idxUsb);
				idxUsb++;
			} else {
				price += psm.get(idxPs);
				idxPs++;
			}
		}
		nComp = idxPs + idxUsb;
	}

	public static void main(String[] args) throws IOException {
		// BufferedReader bin = new BufferedReader(new FileReader("cactus.in"));
		BufferedReader bin = new BufferedReader(
				new InputStreamReader(System.in));
		UsbPsTwo l = new UsbPsTwo();
		l.readData(bin);
		l.calculate();
		l.printRes();
	}
}
