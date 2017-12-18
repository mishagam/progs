package mis.animsto;
/**
 * Created by misha on 1/6/17.
 */


import org.junit.Test;

import static org.junit.Assert.*;
import mis.animsto.story.LogoList;

/** Unit tests for LogoList class */
public class LogoListUnitTest {
    @Test
    public void empty_list_empty_size() throws Exception {
        LogoList ll = new LogoList();
        String ss = ll.toString();
        LogoList lo = new LogoList();
        lo.parseString(ss);
        assertEquals(0, ll.size());
        assertEquals(0, lo.size());
    }

    @Test
    public void empty_list_string() throws Exception {
        LogoList ll = new LogoList();
        String ss = ll.toString();
        assertEquals("[]", ss);
    }

    @Test
    public void aa_list_string() throws Exception {
        LogoList ll = new LogoList();
        ll.add("aa");
        String ss = ll.toString();
        assertEquals("[aa]", ss);
    }

    @Test
    public void aa_list_string_back() throws Exception {
        LogoList ll = new LogoList();
        ll.add("aa");
        String ss = ll.toString();
        assertEquals("[aa]", ss);
        LogoList lo = new LogoList();
        lo.parseString(ss);
        assertEquals(1, ll.size());
        assertEquals(1, lo.size());
        assertEquals(lo.get(0), ll.get(0));
    }
}
