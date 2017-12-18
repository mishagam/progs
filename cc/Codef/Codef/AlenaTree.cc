#include<bits/stdc++.h>
using namespace std;

typedef long long ll;
const int maxn = 2e5 + 5;

int n;
int a[maxn],pu[maxn],pw[maxn];

int no[maxn];
int lower[maxn];

ll dep[maxn];

int L[maxn];
int f[maxn][20];

ll dis[maxn][20];

int ans[maxn];


vector<int> child[maxn];
bool visited[maxn];

int dfs( int r, int l ){
    L[r] = l; visited[r] = true;
    
    for( int i = 1; (l>>i) ; i++ ){
        f[r][i] = f[ f[r][i-1] ][i-1];
    }
    
    int low = 0;
    for( int i = 0; i < child[r].size(); i++ ){
        int next = child[r][i];
        if( !visited[next] ){
            f[next][0] = r;
            dep[next] = dep[r] + pw[next];
            low += 1 + dfs( next,l+1 );
        }
    }
    lower[r] = low;

    return low;
}

void query( int r ){
    int t = r;
    for( int i = 19; i >= 0; i-- ){
        int tn = f[t][i];
        ll tl = dep[r] - dep[tn];
        if( tl <= a[r] )
            t = tn;
    }
    //cout << r << "___find___" << t << endl;
    if( t > 1 )
        no[ f[t][0] ] ++;
    else
        no[0] ++;
}

int dfs2(int r){
    visited[r] = false;
    int ta = 0;
    for( int i = 0; i < child[r].size(); i++ ){
        int next = child[r][i];
        if( visited[next] ){
            ta += 1+dfs2( next );
        }
    }
    ans[r] = ta - no[r];
    return ans[r];
}


int main(){
    ios_base::sync_with_stdio( false ); cin.tie( nullptr );
    cin >> n;
    for( int i = 1; i <= n; i++ ) cin >> a[i];
    
    for( int i = 1; i <= n-1; i++ ){
        cin >> pu[i+1] >> pw[i+1];
        child[pu[i+1]].push_back(i+1);
    }
    
    f[1][0] = 1; L[1] = 0; dep[1] = 0; 
    dep[0] = -1e9-10;
    lower[1] = dfs( 1,0 );
    
    //for( int i= 1; i <= n; i++ ){
    //    for( int j = 1; j <= 19; j++ )
    //        cout << f[i][j] << "__";
    //    cout << endl;
    //}

    for( int i = 2; i <= n; i++ )
        query(i);
    
    //for( int i = 1; i <= n; i++ )
    //    cout << no[i] << endl;

    //ans[1] = lower[1] - no[0];
    ans[1] = dfs2(1);

    for( int i = 1; i <= n; i++ )
        cout << ans[i] << ' ';
    cout << endl;
    return 0;
}