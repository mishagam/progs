package mis.java8;

import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

public class TestLambda {
	
	static class Person {
		String name;
		int age;
		
		Person(String namea, int agea) {
			name = namea;
			age = agea;
		}
	}	
	
	void printPersons(List<Person> roster, Predicate<Person> q) {
		for (Person p : roster) {
			if (q.test(p)) {
				System.out.println("p: " + p.name + " " + p.age);
			}
		}		
	}
	
	public static void main(String[] args) {
		Person []pa = new Person[]{new Person("Mis", 12),
				new Person("tis",13), new Person("Petia", 92)};
		TestLambda ta = new TestLambda();
		ta.printPersons(Arrays.asList(pa), per -> per.age<20);
	
	}

}
