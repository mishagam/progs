#include <stdio.h>
#include <stdlib.h>

int sx,sy;
double x0,y0,scale;
short *rep;
const int MAX_COL = 255;

int writeRep(const char *fn);
void calcRep(); 

int main(int cc, char **vv) {
    if (cc<5) {
        printf("*** Not enough arguments cc < 5\n");
        return 101;
    }
    const char *outFn = "mandel_rep.out";
    printf("Hello from C,sx,sy,x0,y0,scale= %s %s %s %s %s\n", vv[1], vv[2], vv[3],vv[4],vv[5]);
    sx = atoi(vv[1]); 
    sy = atoi(vv[2]); 
    x0 = atof(vv[3]);
    y0 = atof(vv[4]);
    scale = atof(vv[5]);
    printf("Read x0,y0,scale = %10.6f %10.6f %15.8f\n", x0,y0,scale);
    if (sx==0 || sy==0 || scale <= 0) {
        printf("*** illegal arguments\n");
        return 102;
    }
    rep = new short[sx*sy];
    calcRep();
    writeRep(outFn);
    printf("written rep to file %s\n", outFn);
    delete []rep;
    return 0;
}

int writeRep(const char *fn) {
    FILE *f = fopen(fn, "wb");
    if (f==NULL) {
        printf("*** cannot open file %s for writing\n", fn);
        return 0;
    }
    fwrite(rep, 2, sx*sy, f);
    fclose(f);
    return 1;
}

int countDep(double xa, double ya) {
    int k;
    double cx = xa;
    double cy = ya;
    double x = 0;
    double y = 0;
    for (k = 0; k < MAX_COL+4; k++) {
        double xx = x * x;
        double yy = y * y;
        double xy = x * y;
        x = xx - yy + cx;
        y = 2.0 * xy + cy;
        if (xx + yy > 4) {
            break;
        }
    }
    return k;
}

void calcRep() {
    double sx2 = sx/2.0;
    double sy2 = sy/2.0;           
    for (int i=0; i<sy; i++) {
        for (int j=0; j<sx; j++) {
            double x = x0 + scale*(j-sx2);
            double y = y0 + scale*(i-sy2);
            rep[i*sx+j] = countDep(x, y);
        }
    }
}
