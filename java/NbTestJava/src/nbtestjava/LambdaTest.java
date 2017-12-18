/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package nbtestjava;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

class Person {
    String name;
    int age;
    
    Person(String na, int aa) {
        name = na;
        age = aa;
    }
    void printPerson() {
        System.out.println(name + " " + age);
    }
            
}
/**
 *
 * @author misha
 */
public class LambdaTest {
    List<Person> lp = new ArrayList<>();
    
    public void printPred(Predicate<Person> tester) {
        for (Person p : lp) {
            if (tester.test(p)) {
                p.printPerson();
            }
        }
    }
    
    public static void main(String []args) {
        LambdaTest lt = new LambdaTest();
        lt.lp.add(new Person("Mis", 92));
        lt.lp.add(new Person("Tis", 82));
        lt.lp.add(new Person("Nick", 16));
        lt.printPred(p -> p.age < 20);
        // now the same for older
        System.out.println("Now older persons");
        lt.lp
                .stream()
                .filter(p -> p.age >= 20)
                .map(p -> p.name) 
                .forEach(name -> System.out.println(name));        
    }    
}
