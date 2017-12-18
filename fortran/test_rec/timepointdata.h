// header for structure /TimePointData/

struct TimePointData {
          // int lenA;
          // double variables first - so less problems with alignment
          double endh;  // time of start of this step
          double time;  // length of step
          double timeCalSec;
          // flag many files + konec in hours
          int idx;     // index from start of series
          int int_inc; // 0 - first, 1 - continue with reading 1.DAT
          int int_temp;
          float timestep; // step in time
          float ql;
          float fn;
          float pressT;
          float pressG;
          float tempIn;
          float tempOut;
          // layer data
          float qlkoef[16];
          float temp[16];
          float sl[16];  // burnout if passed with input data
          float fql[16];  // neutron fluence by layers
          // int lenB;
          };

struct RecData {
    int lenA;
    TimePointData td;
    int lenB;
    };

