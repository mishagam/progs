package mis.olf.data;

public class OlExpression {
    
    final double []xyz;
    String []lex;  // array of lexems
    int lexIdx;
    Op rootOp;
    
    class Op {
        char op;
        int idx;  // in case of variable
        double val;
        Op a;
        Op b;
        
        public Op(String s, Op aa, Op ba) {
            a = aa;
            b = ba;
            idx = -1;
            if        (s.equals("x")) {
                idx = 0;
            } else if (s.equals("y")) {
                idx = 1;
            } else if (s.equals("z")) {
                idx = 2;
            } else if (isNumber(s)) {
                val = Double.parseDouble(s);
                idx = -2;
            } else {
            	op = s.charAt(0);
            }
        }
        
        public double apply() {
            double ret = 0;
            if (idx >= 0) {
                ret = xyz[idx];
            } else if (idx == -2) {
                ret = val;
            } else {
                double va = a.apply();
                double vb = b.apply();
                if (op == '+') {
                    ret = va+vb;
                } else if (op == '-') {
                    ret = va - vb;
                } else if (op == '*') {
                    ret = va * vb;
                } else if (op == '/') {
                    ret = va / vb;
                } else {
                	throw new IllegalStateException("Illegal operation " + op);
                }
            }
            return ret;
        }
    }
    
    public OlExpression(String se, double []xyza) {
        xyz = xyza;
        se = se.toLowerCase().trim();
        rootOp = parseExpression(se);        
    }
    
    public boolean isNumber(String s) {
        char c = s.charAt(0);
        if (c == '-' && s.length() > 1) {
            c = s.charAt(1);
        }
        return Character.isDigit(c);
    }
    
    String nextLex() {
        if (lexIdx >= lex.length) {
            return null;
        }
        return lex[lexIdx++];
    }
    boolean lastLex() {
        return lexIdx >= lex.length;
    }
    
    Op parseVal() {
        String s = nextLex();
        return new Op(s, null, null);
    }
    
    Op parseTerm() {
        Op a = parseVal();
        while (!lastLex()) {
            String o = nextLex();
            if (o.equals("+") || o.equals("-")) {
            	lexIdx--;
                return a;
            }
            Op b = parseVal();
            a = new Op(o, a, b);            
        }
        return a;        
    }
    
    Op parseEx() {
        Op a = parseTerm();
        while (!lastLex()) {
            String o = nextLex();
            if (!(o.equals("+") || o.equals("-"))) {
                throw new IllegalStateException("Illegal operation " + o);
            }
            Op b = parseTerm();
            a = new Op(o, a, b);            
        }
        return a;        
    }    
    
    public Op parseExpression(String ex) {
        lex = ex.split(" ");
        lexIdx = 0;
        Op a = parseEx();
        return a;       
    }
    
    public double estimate(double []vv) { 
        for (int i=0; i<3; i++) {
            xyz[i] = vv[i];
        }
        double v = rootOp.apply();
        return v;
    }
    
    public double estimate() {
        double v = rootOp.apply();
        return v;
    }

}
