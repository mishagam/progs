package atta.graph.data;

import java.io.File;

public class FileGroup {
    
    String dirName = "";
    
    FsaData fdata = null;
    
    File []files = new File[0];
    
    public FileGroup() {
        // do nothing
    }
    
    public File [] getFiles() {
        return files;
    }
    
    public void setFsaData(FsaData fdata) {
        this.fdata = fdata;
    }
    
    public void setFiles(File []files) {
        this.files = files;
    }

}
