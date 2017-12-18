#include <stdio.h>
#include <string>
#include <vector>

using namespace std;

class Aa {
    public:
       char *s;
       Aa() { s = "AaaAAaa"; }
       char *c_str() { return s; }
};

int main(int cc, char **vv) {
    string a("AAAaaAAA");
    string b("Baobab");
    
    a = b;
    printf("A is %s\n", a.c_str());
    Aa aa;
    printf("A is %s\n", aa.c_str());
    
    return 0;
}
