package mis.korean.words;

import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import mis.korean.asselect.BuildConfig;

import mis.korean.asselect.R;
import mis.korean.asselect.SelectWordActivity;

/**
 * Implements DictSet using dictionaries in resources
 * Created by misha on 10/12/17.
 */
public class ResDictSet implements DictSet {

    Context co;

    public ResDictSet(Context coa) {
        co = coa;
    }

    /**
     * reading list of dictionary from string resource dict_res_ids
     * @return - list of dictionary names
     */
    @Override
    public List<String> getDictNames() {
        String strDicts = co.getString(R.string.dict_res_ids);
        String []ss = strDicts.split(",");
        List<String> dictNames = new ArrayList<>();
        for (String s : ss) {
            s = s.trim();
            dictNames.add(s);
        }
        return dictNames;  // TODO
    }

    /**
     * read one of dictionaries from raw resources.
     * @param dictName - name of required dictionary
     * @return - string with word translations separated by LF
     */
    @Override
    public List<String> getOneDict(String dictName) {
        int resId = co.getResources().getIdentifier(dictName,  "raw", co.getPackageName());
        if (resId == 0) {
            throw new RuntimeException("Illegal dictionary name: " + dictName);
        }
        List<String> ls = new ArrayList<>();
        try {
            InputStream is = MisUtils.streamFromRes(co, resId);
            BufferedReader br = new BufferedReader(new InputStreamReader(is));
            String ln;
            while ((ln = br.readLine()) != null) {
                ls.add(ln.trim());
            }
            br.close();
        } catch (IOException ioe) {
            // exception, pring trace, return empty list - so no crashes later.
            ioe.printStackTrace();
            ls.clear();
            return ls;
        }
        return ls;
    }

    /**
     * return version from Android Manifest
     * @return
     */
    public long getDictSetVersion() {
        long currentVersion = 0;
        try {
            String packageName = SelectWordActivity.class.getPackage().getName();
            PackageInfo info = co.getPackageManager().getPackageInfo(packageName, 0);
            currentVersion = (long)info.versionCode;
            currentVersion = BuildConfig.VERSION_CODE;
        } catch (PackageManager.NameNotFoundException nnfe) {
            nnfe.printStackTrace();
            currentVersion = 0L;
        }
        return currentVersion;
    }
}
