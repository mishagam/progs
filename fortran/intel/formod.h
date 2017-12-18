#define FORTRANNAME( NAME )                       NAME##_
#define FORTRANNAME_IN_MOD( MOD_NAME, NAME )      MOD_NAME##_mp_##NAME##_

// #define forstruct FORTRANNAME_IN_MOD(formod, forstruct)
#define forproc FORTRANNAME_IN_MOD(formod, forproc)
// #define forproc FORTRANNAME_IN_MOD(formod, forproc)
// #define forproc FORTRANNAME(forproc)
// #define forproc formod_mp_forproc_
#define frombuf formod_mp_frombuf_
#define tobuf formod_mp_tobuf_
#define f2s FORTRANNAME_IN_MOD(formod, for2s)

struct forstruct {
        int aaa;
        float fff;
        double ddd;
};

extern "C" {

void forproc( forstruct *fors0,  forstruct *fors0, int *ii, double *aa);
void frombuf( forstruct *fors, void *fors);
void tobuf  ( forstruct *fors, void *fors);
int cmainnnn_();
void getarg_(int *idx, char*args, int lena, int*err);
void subtex_();
void f2s(char*sa, char *sb, int la, int lb);

}
