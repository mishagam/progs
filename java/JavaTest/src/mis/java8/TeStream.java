package mis.java8;

import java.util.stream.IntStream;

public class TeStream {
	public static void main(String[] args) {
		IntStream.range(1, 7).map(i -> i*(i+1)/2).forEach(i -> System.out.println(i));
	}

}
