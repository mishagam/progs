package mis.animsto;

import java.util.Set;

import mis.animsto.figures.ImageSelection;
import mis.animsto.figures.Turtle;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.GridView;
import android.widget.Toast;

/**
 * An example full-screen activity that shows and hides the system UI (i.e.
 * status bar and navigation/system bar) with user interaction.
 *
 * @see SystemUiHider
 */
public class SelectImageActivity extends Activity {
    private final String TAG = this.getClass().getSimpleName();

    GridView gridView = null;
    public static ImageSetEnum selectType = ImageSetEnum.ALL;
    private SelectImageAdapter selAdapter = null;
    ImageSelection imgSel = ImageSelection.getInstance();
    boolean oneImageFlag = true;
    MenuItem oneImageItem;
    MenuItem manyImagesItem;
    MenuItem selectItem;
    // menu items for figure types
    MenuItem selTypeMItem;  // shows current type of images
    MenuItem allMItem;
    MenuItem animalsMItem;
    MenuItem backMItem;
    MenuItem figureMItem;
    MenuItem suitsMItem;
    MenuItem movingMItem;
    MenuItem peopleMItem;
    MenuItem pairsMItem;
    ImageSetEnum startImageSet = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Log.d(TAG, "OnCreate started");
        setContentView(R.layout.activity_select_image);
        Log.d(TAG, "setContentView passed");
        gridView = (GridView) findViewById(R.id.gridview);
        setImageSet(selectType, null);
        startImageSet = selectType;
        Log.d(TAG, "OnCreate done");
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        String tuName = "";
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.select_image_menu, menu);
        MenuItem turtNameItem = menu.findItem(R.id.menu_turtle_name);
        Turtle tu = imgSel.getSelectedTurtle();
        if (tu != null) {
            tuName = imgSel.getSelectedTurtle().getName();
        }
        turtNameItem.setTitle(tuName);
        oneImageItem = menu.findItem(R.id.menu_one_image);
        manyImagesItem = menu.findItem(R.id.menu_many_images);
        selectItem = menu.findItem(R.id.menu_ok);
        selTypeMItem = menu.findItem(R.id.menu_sel_type);
        allMItem = menu.findItem(R.id.menu_fig_all);
        animalsMItem = menu.findItem(R.id.menu_fig_animals);
        figureMItem = menu.findItem(R.id.menu_fig_figures);
        movingMItem = menu.findItem(R.id.menu_fig_moving);
        peopleMItem = menu.findItem(R.id.menu_fig_people);
        pairsMItem = menu.findItem(R.id.menu_fig_pairs);
        updateMenu();
        return true;
    }

    public void updateMenu() {
        if (startImageSet == ImageSetEnum.BACKGROUND || startImageSet == ImageSetEnum.SUITS) {
            // remove all menus
            selectItem.setVisible(false);
            allMItem.setVisible(false);
            animalsMItem.setVisible(false);
            figureMItem.setVisible(false);
            movingMItem.setVisible(false);
            peopleMItem.setVisible(false);
            pairsMItem.setVisible(false);
            oneImageItem.setVisible(false);
            manyImagesItem.setVisible(false);
            oneImageFlag = true;
        } else {
            selectItem.setVisible(true);
            allMItem.setVisible(true);
            animalsMItem.setVisible(true);
            figureMItem.setVisible(true);
            movingMItem.setVisible(true);
            peopleMItem.setVisible(true);
            pairsMItem.setVisible(true);
            // oneImageFlag = startImageSet != ImageSetEnum.MOVING_FIGURES;
            oneImageItem.setVisible(!oneImageFlag);
            manyImagesItem.setVisible(oneImageFlag);
        }
        selTypeMItem.setTitle("" + selectType);
    }

    public void setImageSet(ImageSetEnum selectType, Turtle tu) {
        selAdapter = new SelectImageAdapter(this, selectType);
        gridView.setAdapter(selAdapter);
        Log.d(TAG, "setAdapter passed, gridView: " + gridView);
        gridView.setOnItemClickListener(new OnItemClickListener() {
            public void onItemClick(AdapterView<?> parent, View v, int position, long id) {
                Toast.makeText(SelectImageActivity.this, "" + position, Toast.LENGTH_SHORT).show();
                String imageName = selAdapter.getImageName(position);
                if (SelectImageActivity.this.oneImageFlag) {
                    imgSel.setOneImage(imageName);
                    SelectImageActivity.this.setResult(RESULT_OK);
                    SelectImageActivity.this.finish();
                } else {
                    // imgSel.addImage(imageName);
                    Set<Integer> ss = selAdapter.selectedSet;
                    if (ss.contains(position)) {
                        ss.remove(position);
                    } else {
                        ss.add(position);
                    }
                    Log.d(TAG, "changed " + position + " in selected");
                    updateTable();
                }
                Log.d(TAG, "Clicked on Image, pos: " + position);
            }
        });
    }

    public void updateTable() {
        selAdapter.updateImageSet(selectType);
        gridView.invalidateViews();
        updateMenu();
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int menuId = item.getItemId();
        Log.d(TAG, "onOptionsItemSelected(), id = " +
                String.format("%08X", menuId));
        oneImageFlag = true;
        switch (menuId) {
            case R.id.menu_one_image:
                Log.d(TAG, "Menu one image selected");
                updateMenu();
                break;

            case R.id.menu_many_images:
                Log.d(TAG, "Menu many_images selected");
                oneImageFlag = false;
                updateMenu();
                break;

            case R.id.menu_fig_moving:
                Log.d(TAG, "Menu menu_fig_moving selected");
                selectType = ImageSetEnum.MOVING_FIGURES;
                oneImageFlag = false;
                updateTable();
                break;

            case R.id.menu_fig_animals:
                Log.d(TAG, "Menu menu_fig_animals selected");
                selectType = ImageSetEnum.ANIMALS;
                updateTable();
                break;

            case R.id.menu_fig_figures:
                Log.d(TAG, "Menu menu_fig_figures selected");
                selectType = ImageSetEnum.FIGURE;
                updateTable();
                break;

            case R.id.menu_fig_pairs:
                Log.d(TAG, "Menu menu_fig_pairs selected");
                selectType = ImageSetEnum.PAIRS;
                updateTable();
                break;

            case R.id.menu_fig_people:
                Log.d(TAG, "Menu menu_fig_people selected");
                selectType = ImageSetEnum.PEOPLE;
                updateTable();
                break;

            case R.id.menu_ok:
                Log.d(TAG, "Menu menu_fig_people selected");
                imgSel.clear();
                for (int pos : selAdapter.selectedSet) {
                    String imgName = selAdapter.getImageName(pos);
                    imgSel.addImage(imgName);
                }
                this.setResult(RESULT_OK);
                this.finish();
                break;
        }
        return super.onOptionsItemSelected(item);
    }
}
