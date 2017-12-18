package mistest;

import java.util.function.Function;
import java.util.stream.IntStream;

public class Tja {
	
	static Function<Integer,Integer> myfun;
	
	static Function<Integer,Integer> myAddConst(int a) {
		int cc = 10;
		int ccc = cc + a;
		myfun = x -> x - cc;
		return x -> x + ccc;
	}

	public static void main(String[] args) {
		int xx,yy;
		Function<Integer,Integer> add25 = myAddConst(10);
		xx = 4;
		yy = add25.apply(xx);
		System.out.println("Mis Hello add1(4) = " + yy);
		IntStream.range(1,10).filter(x -> x < 5).forEach(x -> System.out.print(x + " "));
		System.out.println();
		IntStream.iterate(0, x -> x+2).map(x -> x*x).limit(10).forEach(x -> System.out.print(x + " "));
		System.out.println();
	}
}
