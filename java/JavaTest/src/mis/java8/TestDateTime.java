package mis.java8;

import java.time.Clock;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

public class TestDateTime {
	public static void main(String[] args) {
		LocalDateTime ldt = LocalDateTime.now();
		System.out.println(ldt);
		Clock clock = Clock.systemDefaultZone();
		LocalDateTime after5 = ldt.plus(6, ChronoUnit.HOURS);
		System.out.println("after.hours = " + after5.getHour());
		System.out.println("after.days = " + after5.getDayOfMonth());
	}

}
