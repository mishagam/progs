package com.mismav.app;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

/**
 * Unit test for simple App.
 */
public class AppTest 
    extends TestCase
{
    /**
     * Create the test case
     *
     * @param testName name of the test case
     */
    public AppTest( String testName )
    {
        super( testName );
    }

    /**
     * @return the suite of tests being tested
     */
    public static Test suite()
    {
        return new TestSuite( AppTest.class );
    }

    /**
     * Rigourous Test :-)
     */
    public void testAppDoub()
    {
    	App ap = new App();
        assertEquals(6, ap.doub(3));
    }

    /**
     * Rigourous Test :-)
     */
    public void testAppDoubNeg()
    {
    	App ap = new App();
        assertEquals(-4, ap.doub(-2));
    }
}
