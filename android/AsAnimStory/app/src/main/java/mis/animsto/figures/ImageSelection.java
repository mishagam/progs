package mis.animsto.figures;

import java.util.ArrayList;
import java.util.List;

/**
 * singleton class to hold selection of image names
 * @author misha
 *
 */
public class ImageSelection {
	List<String> imageNames = new ArrayList<String>();
	int numImages;
	Turtle selectedTurtle = null;
	/**
	 * Singleton pattern private constructor
	 */
	private ImageSelection() {
		// do nothing
	}
	private static ImageSelection instance;
	public static synchronized ImageSelection getInstance() {
		if (instance == null) {
			instance = new ImageSelection();
		}
		return instance;
	}
	public List<String> getImageNames() {
		return imageNames;
	}
	public void setImageNames(List<String> imageNames) {
		this.imageNames = imageNames;
	}
	public int getNumImages() {
		return imageNames.size();
	}
	
	public void setOneImage(String iname) {
		imageNames.clear();
		imageNames.add(iname);
	}
	
	public void addImage(String iname) {
		imageNames.add(iname);
	}
	
	public String getOneImage() {
		return imageNames.get(0);
	}
	public Turtle getSelectedTurtle() {
		return selectedTurtle;
	}
	public void setSelectedTurtle(Turtle selectedTurtle) {
		this.selectedTurtle = selectedTurtle;
	}
	
	public void clear() {
		imageNames.clear();
	}
	

}
