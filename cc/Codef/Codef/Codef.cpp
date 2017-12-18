#include<cstdio>
#include<cstring>
#include<algorithm>
#include<iostream>
using namespace std;
#define rep(i,n) for (int i=0;i<n;i++)
#define N 66
int a[N+N][N+N+1],flag=1,n,m,x,y;
int main()
{
	scanf("%d%d",&n,&m),a[N][N]=n;
	while (flag){
		flag=0;
		rep(i,N+N) rep(j,N+N) if (a[i][j]>=4){
			x=a[i][j]/4,flag=1;
			a[i-1][j]+=x,a[i][j-1]+=x,a[i+1][j]+=x,a[i][j+1]+=x;
			a[i][j]-=x*4;
			}
		}
	FILE *f = fopen("codef.out", "w");
	for (int i=0; i<N+N; i++)
	{
		for (int j=0; j<=N+N; j++) {
			fprintf(f, " %d", a[i][j]);
		}
		fprintf(f,"\n");
	}
	fclose(f);

	rep(i,m) scanf("%d%d",&x,&y),printf("%d\n",abs(x)<N && abs(y)<N?a[N+x][N+y]:0);
	return 0;
}