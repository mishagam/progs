package mis.animsto;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;

import mis.animsto.StoryNameDialogFragment.StoryNameListener;
import mis.animsto.figures.ImageSelection;
import mis.animsto.figures.Turtle;
import mis.animsto.story.AnimStory;
import mis.animsto.story.Cadr;
import mis.animsto.story.LogoList;
import mis.pentamino.PentaSolveActivity;

import android.app.Activity;
import android.app.Dialog;
import android.app.FragmentManager;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;

public class AnimEditActivity extends Activity implements
        ReplicaDialogFragment.NewReplicaListener,
        RecordAudioDialogFragment.RecordAudioDialogListener,
        StoryNameListener {

    private final String TAG = this.getClass().getSimpleName();

    final int REQUEST_NEW_TURTLE = 111;
    final int REQUEST_TURTLE_SUIT = 112;
    final int REQUEST_SELECT_BACK = 113;
    final int REQUEST_TURTLE_SETTINGS = 114;

    MenuItem cadrIdxItem = null;
    MenuItem stopMenuItem;
    // MenuItem saveMenuItem;
    MenuItem newTurtleMenuItem;
    MenuItem addSuitMenuItem;
    MenuItem storyNameItem;
    MenuItem selectBackMenuItem;
    MenuItem recordSoundMenuItem;
    MenuItem replicaMenuItem;
    MenuItem prevMenuItem;
    MenuItem nextMenuItem;
    MenuItem playMenuItem;
    MenuItem insertCadrMenuItem;
    MenuItem removeCadrMenuItem;
    MenuItem submenuEditMenuItem;
    MenuItem showStoryMenuItem;

    private StoryEditView editView;
    static int storyCount = 1;
    private AnimStoryConf conf = AnimStoryConf.getInstance();
    ImageSelection imgSel = ImageSelection.getInstance();
    RecordAudioDialogFragment recPlayDialog = new RecordAudioDialogFragment();
    String recordingCadrSound = "";
    // MisSound mSound = MisSound.getInstance();
    MisAudioRecorder mSound = MisAudioRecorder.getInstance();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        editView = new StoryEditView(conf.getCurrentStory(), this);
        setContentView(editView);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.activity_anim_edit, menu);
        storyNameItem = menu.findItem(R.id.menu_story_name);
        storyNameItem.setTitle(conf.getCurrentStory());
        cadrIdxItem = menu.findItem(R.id.menu_cadr_index);
        stopMenuItem = menu.findItem(R.id.menu_stop);
        // saveMenuItem = menu.findItem(R.id.menu_save);
        newTurtleMenuItem = menu.findItem(R.id.menu_new_turtle);
        addSuitMenuItem = menu.findItem(R.id.menu_add_suit);
        selectBackMenuItem = menu.findItem(R.id.menu_select_back);
        recordSoundMenuItem = menu.findItem(R.id.menu_record_sound);
        replicaMenuItem = menu.findItem(R.id.menu_replica);
        prevMenuItem = menu.findItem(R.id.menu_prev);
        nextMenuItem = menu.findItem(R.id.menu_next);
        playMenuItem = menu.findItem(R.id.menu_play);
        insertCadrMenuItem = menu.findItem(R.id.menu_insert_cadr);
        removeCadrMenuItem = menu.findItem(R.id.menu_remove_cadr);
        submenuEditMenuItem = menu.findItem(R.id.submenu_edit);
        showStoryMenuItem = menu.findItem(R.id.menu_show_story);
        updateMenu();
        return true;
    }

    public void updateMenu() {
        // visible while playing
        stopMenuItem.setVisible(isNowPlaying());

        // visible while editing only
        newTurtleMenuItem.setVisible(!isNowPlaying());
        addSuitMenuItem.setVisible(!isNowPlaying());
        selectBackMenuItem.setVisible(!isNowPlaying());
        recordSoundMenuItem.setVisible(!isNowPlaying());
        replicaMenuItem.setVisible(!isNowPlaying());
        prevMenuItem.setVisible(!isNowPlaying());
        nextMenuItem.setVisible(!isNowPlaying());
        playMenuItem.setVisible(!isNowPlaying());
        insertCadrMenuItem.setVisible(!isNowPlaying());
        insertCadrMenuItem.setVisible(!isNowPlaying());
        removeCadrMenuItem.setVisible(!isNowPlaying());
        submenuEditMenuItem.setVisible(!isNowPlaying());
        cadrIdxItem.setTitle((editView.getCurrentCadrIndex() + 1) + "/" + editView.story.maxCadr());
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        final AnimEditActivity act = AnimEditActivity.this;
        Intent intent;
        ImageSelection imgSel = ImageSelection.getInstance();
        int menuId = item.getItemId();
        Log.d(TAG, "onOptionsItemSelected(), id = " +
                String.format("%08X", menuId));
        switch (menuId) {
            case R.id.menu_prev:
                Log.d(TAG, "Menu back selected");
                editView.toPrevCadr();
                break;

            case R.id.menu_next:
                Log.d(TAG, "Menu forward selected");
                editView.toNextCadr();
                break;

            case R.id.menu_play:
                Log.d(TAG, "menu_play selected");
                editView.startPlay(true);
                break;

            case R.id.menu_play_page:
                Log.d(TAG, "menu_play_page selected");
                editView.startPlay(false);
                break;

            case R.id.menu_new_page:
                Log.d(TAG, "menu_new_page selected");
                editView.toNextCadr();
                Cadr cadr = editView.story.getCadr(editView.story.getCurrentCadr());
                int page = cadr.getPage();
                cadr.setPage(page+1);
                editView.curPage = page+1;
                break;
//
//            case R.id.menu_save:
 //               Log.d(TAG, "menu_save selected");
 //               editView.saveAddCadr();
 //               updateMenu();
 //               break;

            case R.id.menu_insert_cadr:
                Log.d(TAG, "menu_insert_cadr selected");
                editView.dublicateCadr();
                break;

            case R.id.menu_remove_cadr:
                Log.d(TAG, "menu_remove_card selected");
                editView.removeCadr();
                break;

            case R.id.menu_stop:
                Log.d(TAG, "menu_stop selected");
                editView.stopPlay();
                break;

            case R.id.menu_new_turtle:
                Log.d(TAG, "menu_new_turtle selected");
                // select image and create new turtle
                SelectImageActivity.selectType = ImageSetEnum.ALL;
                imgSel.setSelectedTurtle(editView.curTurtle);
                intent = new Intent(act, SelectImageActivity.class);
                act.startActivityForResult(intent, REQUEST_NEW_TURTLE);
                break;

            case R.id.menu_add_suit:
                Log.d(TAG, "menu_add_suit selected");
                // select suit for turtle
                SelectImageActivity.selectType = ImageSetEnum.SUITS;
                imgSel.setSelectedTurtle(editView.curTurtle);
                intent = new Intent(act, SelectImageActivity.class);
                act.startActivityForResult(intent, REQUEST_TURTLE_SUIT);
                break;

            case R.id.menu_select_back:
                Log.d(TAG, "menu_select_back selected");
                // select image and create new turtle
                // select image
                intent = new Intent(act, SelectImageActivity.class);
                SelectImageActivity.selectType = ImageSetEnum.BACKGROUND;
                act.startActivityForResult(intent, REQUEST_SELECT_BACK);
                break;

            case R.id.menu_settings:
                Log.d(TAG, "menu_settings selected");
                // all deals on selecting submenu
                break;

            case R.id.select_story:
                Log.d(TAG, "menu select_story selected");
                // switching to select story activity
                conf.setDefaultCurrentStory();
                intent = new Intent(act, ChooseStoryActivity.class);
                act.startActivity(intent);
                break;

            case R.id.menu_play_pentamino:
                Log.d(TAG, "menu menu_play_pentamino selected");
                // switching to select story activity
                intent = new Intent(act, PentaSolveActivity.class);
                act.startActivity(intent);
                break;

            case R.id.menu_replica:
                Log.d(TAG, "menu replica selected");
                // edit replica
                startReplicaDialog();
                break;

            case R.id.menu_record_sound:
                Log.d(TAG, "menu replica selected");
                // edit replica
                startRecordSoundDialog();
                break;

            case R.id.menu_story_name:
                Log.d(TAG, "menu Story Name selected");
                startStoryNameDialog();
                break;

            case R.id.menu_edit_turtle:
                Log.d(TAG, "menu edit turtle selected");
                if (editView.getCurTurtle() != null) {
                    intent = new Intent(act, TurtlePropsActivity.class);
                    TurtlePropsActivity.workTurtle = editView.getCurTurtle();
                    act.startActivityForResult(intent, REQUEST_TURTLE_SETTINGS);
                }
                break;

            case R.id.menu_remove_turtle:
                Log.d(TAG, "menu remove turtle selected");
                if (editView.getCurTurtle() != null) {
                    editView.removeTurtle();
                }
                break;

            case R.id.menu_show_story:
                Log.d(TAG, "menu Show Story selected");
                intent = new Intent(act, ShowStoryActivity.class);
                act.startActivity(intent);
                break;

            default:
                Log.e(TAG, "*** Unknown menu option");

        }
        return super.onOptionsItemSelected(item);
    }

    private void startReplicaDialog() {
        ReplicaDialogFragment dialog = ReplicaDialogFragment.newInstance(editView.curReplica);
        dialog.show(getFragmentManager(), "ReplicaDialogFragment");
    }

    private void startStoryNameDialog() {
        StoryNameDialogFragment dialog =
                StoryNameDialogFragment.newInstance(editView.story.getStoryName());
        dialog.show(getFragmentManager(), "StoryNameDialogFragment");
    }

    private void startRecordSoundDialog() {
        String sname = editView.getCurrentSoundName();
        // mSound.setCadrSoundName(sname);
        mSound.setCadrFileName(sname);
        recPlayDialog.show(getFragmentManager(), "RecordSoundDialog");
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == REQUEST_NEW_TURTLE) {
            if (resultCode == RESULT_OK) {
                int ni = imgSel.getNumImages();
                if (ni == 1) {
                    String imageName = imgSel.getOneImage();
                    String tuName = "tu_" + imageName;
                    Turtle tu = new Turtle(tuName, imageName, this);
                    editView.addTurtle(tu);
                } else if (ni > 1) {
                    String tuname = "tu" + editView.figures.size();
                    Turtle tu = new Turtle(tuname, this);
                    tu.addImages(imgSel.getImageNames());
                    editView.addTurtle(tu);
                }
            }
        } else if (requestCode == REQUEST_SELECT_BACK) {
            if (resultCode == RESULT_OK) {
                String imageName = imgSel.getOneImage();
                int page = editView.getCurPage();
                editView.story.setBackground(imageName, page);
                editView.setBackgound(imageName);
            }
        } else if (requestCode == REQUEST_TURTLE_SUIT) {
            if (resultCode == RESULT_OK) {
                String imageName = imgSel.getOneImage();
                Turtle tu = imgSel.getSelectedTurtle();
                if (tu != null) {
                    tu.setSuit(imageName);
                }
            }
        } else if (requestCode == REQUEST_TURTLE_SETTINGS) {
            if (resultCode == RESULT_OK) {
                Log.d(TAG, "Turtle was updated Ok");
            } else if (resultCode == RESULT_CANCELED) {
                Log.d(TAG, "Turtle update was canceled");
            } else {
                Log.e(TAG, "*** Illegal results code for turtle settings code = " +
                        resultCode);
            }
        }
        super.onActivityResult(requestCode, resultCode, data);
    }

    @Override
    protected void onPause() {
        Log.d(TAG, "onPause() called");
        savePreferences();
        this.saveStory();
        super.onPause();
    }

    @Override
    protected void onStop() {
        Log.d(TAG, "onStop() called");
        super.onStop();
    }

    protected void saveStory() {
        editView.saveCadr();
        LogoList ll = editView.story.toList();
        String sll = ll.toString();
        String[] files = this.fileList();
        if (editView.story.getStoryName().equals(AnimStoryConf.DEFAULT_STORY_NAME)) {
            storyCount = files.length + 1;
            editView.story.setStoryName("story_" + storyCount);
        }
        String fn = editView.story.getFileName();
        try {
            FileOutputStream fos = this.openFileOutput(fn, MODE_PRIVATE);
            OutputStreamWriter writer = new OutputStreamWriter(fos);
            writer.write(sll);
            writer.close();
            Log.d(TAG, "Story: |" + sll + "|");
            Log.d(TAG, "Story written OK to " + fn);
        } catch (IOException ioe) {
            String exs = Log.getStackTraceString(ioe);
            Log.e(TAG, exs);
        }
    }

    public boolean isNowPlaying() {
        return editView.nowPlaying;
    }

    public void setNowPlaying(boolean nowPlaying) {
        this.editView.nowPlaying = nowPlaying;
        updateMenu();
    }

    @Override
    public void onNewReplica(String rep) {
        editView.curReplica = rep;
    }

    @Override
    public String getOldReplica() {
        return editView.curReplica;
    }

    @Override
    public void onSoundRecorded(String soundFn) {
        editView.curSoundFn = soundFn;
    }

    void savePreferences() {
        String prefn = AnimStoryConf.PREFS_NAME;
        SharedPreferences prefs = this.getSharedPreferences(prefn, MODE_PRIVATE);
        conf.confToPrefs(prefs);
        Log.d(TAG, "AnimStoryConf savePreferences done");
    }

    @Override
    public void onStoryName(String storyName) {
        storyNameItem.setTitle(storyName);
        editView.story.setStoryName(storyName);
        conf.setCurrentStory(storyName);
    }
}
