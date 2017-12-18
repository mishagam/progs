// codeforces 289 b Not fast enough
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class BalMaxFlow {
	public class MaxFlow {
		
		class Edge {
			int source;
			int sink;
			int capacity;
			int flow = 0;
			Edge redge = null;
			boolean inPath=false;
			
			Edge(int a, int b, int w) {
				source = a;
				sink = b;
				capacity = w;
				
			}
			
			public String toString() {
				String sret = String.format("%d->%d:%d", source, sink, capacity);
				return sret;
			}
		}
		
		class Vertex {
			private ArrayList<Edge> e = new ArrayList<>();
			void addE(Edge ed) {
				e.add(ed);
			}
			public ArrayList<Edge> getEdges() {
				return e;
			}
		}
		
		Vertex []adj = null;
		Edge []path = null;
		int source, sink;
		int numEdges=0;
		
		MaxFlow(int maxv) {
			adj = new Vertex[maxv];
		}
		
		public void addVertex(int c) {
			adj[c] =  new Vertex();
		}
		
		public void addEdge(int u, int v, int w) {
	        if (u == v) {
	        	throw new IllegalArgumentException("u == v in addEdge");
	        }
	        Edge edge = new Edge(u,v,w);
	        Edge redge = new Edge(v,u,0);
	        edge.redge = redge;
	        redge.redge = edge;
	        adj[u].addE(edge);
	        adj[v].addE(redge);
	        numEdges += 2;
		}
		
		boolean findPath(int source, int sink, int dep) {
			if (source == sink) {
				path[dep] = null;
				return true;
			}
			ArrayList<Edge> edges = adj[source].e;
	        for (Edge edge : edges) {
	        	int residual = edge.capacity - edge.flow;
	        	if (residual>0 && !edge.inPath) {
	        		path[dep] = edge;
	        		edge.inPath = true;
	        		edge.redge.inPath = true;
	        		boolean bret = findPath(edge.sink, sink, dep+1);
	        		edge.inPath = false;
	        		edge.redge.inPath = false;
	        		if (bret) {
	        			return bret;
	        		}
	        		path[dep] = null;
	        	}
	        }
	        return false;
		}
		
		public int getPathFlow() {
			int maxf = 1000000000;
			for (Edge e : path) {
				if (e==null) {
					break;
				}
				int res = e.capacity - e.flow;
				if (res < maxf) {
					maxf = res;
				}
			}
			return maxf;
		}
		
		void printPath(int flow, int sink) {
			System.out.println("added flow " + flow + " to path:");
			for (Edge e : path) {
				if (e==null) {
					break;
				}
				System.out.print(e.source + " ");
			}	
			System.out.println(sink);
		}
		public int maxFlow(int source, int sink) {
			path = new Edge[numEdges];
			boolean bret = findPath(source, sink,0);
			while (bret) {
				int flow = getPathFlow();
				// printPath(flow, sink);
				for (Edge e : path) {
					if (e==null) {
						break;
					}
					e.flow += flow;
					e.redge.flow -= flow;
				}
				bret = findPath(source, sink,0);
			}
			int sumf = 0;
			for (Edge e : adj[source].e) {
				sumf += e.flow;
			}
			return sumf;
		}
	}
	
	int n; // number of men
	int m; // number of women
	int []a;  // men
	int []b;  // women
	int maxPairs;
	
	void readData(BufferedReader bin) throws IOException {
		// read men
		n = Integer.parseInt(bin.readLine());
		a = new int[n];
		String sss = bin.readLine();
		String []ss = sss.split(" ");
		for (int i=0; i<n; i++) {
			a[i] = Integer.parseInt(ss[i]);
		}		
		// read women
		m = Integer.parseInt(bin.readLine());
		b = new int[m];
		sss = bin.readLine();
		ss = sss.split(" ");
		for (int i=0; i<m; i++) {
			b[i] = Integer.parseInt(ss[i]);
		}		
		bin.close();
	}
	
	// we need to use max flow algorithm
	void calculate() {
		// compose max flow
		MaxFlow mf = new MaxFlow(n+m+2);
		int source = 0;
		int sink = n+m+1;
		for (int i=0; i<n+m+2; i++) {
			mf.addVertex(i);
		}
		for (int i=0; i<n; i++) {
			mf.addEdge(source, i+1, 1);			
		}
		for (int j=0; j<m; j++) {
			mf.addEdge(n+1+j, sink, 1);			
		}
		for (int i=0; i<n; i++) {
			for (int j=0; j<m; j++) {
				if (Math.abs(a[i] - b[j]) <= 1) {
					mf.addEdge(i+1,  j+n+1, 1);
				}
			}
		}
		// looking for max flow
		maxPairs = mf.maxFlow(source, sink);
	}
	
	void writeRes() throws IOException {
		System.out.println(maxPairs);
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException {
		BufferedReader bin = new BufferedReader(new InputStreamReader(System.in));
		BalMaxFlow p = new BalMaxFlow();
		p.readData(bin);
		p.calculate();
		p.writeRes();
	}
}
