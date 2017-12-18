// you call "rdmd hello.d" to compile and run this

import core.stdc.stdio;

int main(char[][] args)
{
    printf("hello world from D, fix Oct 24, 1\n");
    printf("args.length = %d\n", args.length);
    for (int i = 0; i < args.length; i++) {
        printf("args[%d] = '%s'\n", i, cast(char *)args[i]);
    }
    return 0;
}
