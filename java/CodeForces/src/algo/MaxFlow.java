package algo;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
	
	Map<Integer,Vertex> adj = new HashMap<>();
	ArrayList<Edge> path = new ArrayList<>();
	int source, sink;
	
	boolean findPath(int source, int sink) {
		if (source == sink) {
			return true;
		}
		List<Edge> edges = adj.get(source).e;
        for (Edge edge : edges) {
        	int residual = edge.capacity - edge.flow;
        	if (residual>0 && !edge.inPath) {
        		edge.inPath = true;
        		path.add(edge);
        		boolean bret = findPath(edge.sink, sink);
        		if (bret) {
        			return bret;
        		}
        	}
        }
        return false;
	}

	public void addVertex(int c) {
		adj.put(c, new Vertex());
	}
	
	public void addVertex(char ch) {
		int c = ch-'a';
		adj.put(c, new Vertex());
	}
	
	public void addEdge(char cu, char cv, int w) {
		int u = cu-'a';
		int v = cv-'a';
		addEdge(u, v, w);
	}
	
	public void addEdge(int u, int v, int w) {
        if (u == v) {
        	throw new IllegalArgumentException("u == v in addEdge");
        }
        Edge edge = new Edge(u,v,w);
        Edge redge = new Edge(v,u,0);
        edge.redge = redge;
        redge.redge = edge;
        adj.get(u).addE(edge);
        adj.get(v).addE(redge);
	}
	boolean findPath(int source, int sink, int dep) {
		if (source == sink) {
			return true;
		}
		List<Edge> edges = adj.get(source).e;
        for (Edge edge : edges) {
        	int residual = edge.capacity - edge.flow;
        	if (residual>0 && !edge.inPath) {
        		edge.inPath = true;
        		path.add(edge);
        		boolean bret = findPath(edge.sink, sink, dep+1);
        		if (bret) {
        			return bret;
        		}
        		path.remove(dep);
        		edge.inPath = false;
        	}
        }
        return false;
	}
	
	public int maxFlow(char soCh, char siCh) {
		return maxFlow(soCh-'a', siCh-'a');
	}
	
	public int getPathFlow() {
		int maxf = 1000000000;
		for (Edge e : path) {
			int res = e.capacity - e.flow;
			if (res < maxf) {
				maxf = res;
			}
		}
		return maxf;
	}
	
	
	public int maxFlow(int source, int sink) {
		boolean bret = findPath(source, sink,0);
		while (bret) {
			int flow = getPathFlow();
			for (Edge e : path) {
				e.flow += flow;
				e.redge.flow -= flow;
			}
			path.clear();
			bret = findPath(source, sink,0);
		}
		int sumf = 0;
		for (Edge e : adj.get(source).e) {
			sumf += e.flow;
		}
		return sumf;
	}
	
	public static void main(String []args) {
		System.out.println("MaxFlow working on");
		MaxFlow mf = new MaxFlow();
		for (char c : "sbct".toCharArray()) {
			mf.addVertex(c);			
		}
        mf.addEdge('s', 'b',5);
        mf.addEdge('s', 'c', 1);
        mf.addEdge('b', 't',2);
        mf.addEdge('c', 't', 4);
        int maxf = mf.maxFlow('s', 't');
        System.out.println("maxf = " + maxf);
	}

}
