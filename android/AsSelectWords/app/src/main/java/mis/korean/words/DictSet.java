package mis.korean.words;

import java.io.InputStream;
import java.util.List;

/**
 * Created by misha on 10/11/17.
 */

public interface DictSet {
    /** get list of available dictionaries */
    List<String> getDictNames();

    /** read content of one dictionary */
    List<String> getOneDict(String dictName);

    /** get version to determine, if we need to refresh dictionaries */
    long getDictSetVersion();

}
