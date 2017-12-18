package com.mismav.app;

/**
 * Hello world!
 *
 */
public class App 
{
	public int doub(int a) {
		return a+a;
	}
	
    public static void main( String[] args )
    {
    	App a = new App();
        System.out.println( "Hello World!, a2 = " + a.doub(1) );
    }
}
