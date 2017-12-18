package mis.olf.data;

import java.io.IOException;
import java.util.Arrays;

/**
 * class for holding and comparing 2 sets of alldata.dat like data
 * 
 * @author Misha
 */
public class FieldModel {
	OlExpression xe, ye, ze;
	public double []xyz;
	public FieldModel(String exprX, String exprY, String exprZ) throws IOException {
	    xyz = new double[3];
        xe = new OlExpression(exprX, xyz);
        ye = new OlExpression(exprY, xyz);
        ze = new OlExpression(exprZ, xyz);
	}
	
	public void updateExpressions(String eX, String eY, String eZ) {
        xe = new OlExpression(eX, xyz);
        ye = new OlExpression(eY, xyz);
        ze = new OlExpression(eZ, xyz);
        CommonValues comv = CommonValues.getInstance();
        comv.exprX = eX;
        comv.exprY = eY;
        comv.exprZ = eZ;
	}
	
	public void apply(double []xyz, double []o) {
	    for (int i=0; i<3; i++) {
	        this.xyz[i] = xyz[i];
	    }
        o[0] = xe.estimate();
        o[1] = ye.estimate();
        o[2] = ze.estimate();
	}
}
