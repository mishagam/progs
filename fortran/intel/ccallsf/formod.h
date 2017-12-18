#define FORTRANNAME_IN_MOD( MOD_NAME, NAME )      MOD_NAME##_mp_##NAME##_

#define f2s FORTRANNAME_IN_MOD(formod, for2s)

extern "C" {

void f2s(char*sa, int la, char *sb, int lb);
// void f2s(char*sa, int la);
int MAIN__();

}
