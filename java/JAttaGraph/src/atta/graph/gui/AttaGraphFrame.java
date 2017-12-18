package atta.graph.gui;

import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;
import java.io.IOException;
import java.net.URL;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JScrollPane;
import javax.swing.JToolBar;

import atta.graph.data.FsaData;

/**
 * Frame for showing graphics of one FSA file. Close in function to
 * FactorialProView.
 * 
 * @author Misha
 * @version 1.0
 */
public class AttaGraphFrame extends JFrame {
	
	static final long serialVersionUID = 9876543000L;

    /**
     * FsaData instance containing data for currnet FSA file
     */
    FsaData fdata = null;

    AttaGraphPanel panel = null;

    /**
     * public constructor.
     * 
     * @param fileName
     *            filename of FSA file we deal with
     * @throws IOException
     *             if readFsaData failed
     */
    AttaGraphFrame(String fileName) throws IOException {
        fdata = new FsaData();
        if (fileName.toLowerCase().endsWith(".fsa")) {
        	fdata.readFsaData(fileName);
        } else {
        	fdata.readFsaDataAtg(fileName);
        }
        this.setTitle("JAttaGraph " + fileName);
        panel = new AttaGraphPanel(fdata, this);
        // Put the drawing area in a scroll pane.
        JScrollPane scroller = new JScrollPane(panel);
        panel.setScroller(scroller);
        getContentPane().add(scroller, BorderLayout.CENTER);
        //this.getContentPane().add(scroller, BorderLayout.CENTER);
        JToolBar toolBar = createToolBar();
        this.getContentPane().add(toolBar, BorderLayout.NORTH);
        this.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
        
        this.addWindowListener(new WindowListener() {
            public void windowActivated(WindowEvent e) {
                MainFrame.getInstance().onFsaWindowOpen(AttaGraphFrame.this);
            }

            public void windowClosed(WindowEvent e) {
                MainFrame.getInstance().onFsaWindowClose(AttaGraphFrame.this);
            }

            public void windowClosing(WindowEvent e) {
                // TODO Auto-generated method stub                
            }

            public void windowDeactivated(WindowEvent e) {
            }

            public void windowDeiconified(WindowEvent e) {
                // TODO Auto-generated method stub                
            }

            public void windowIconified(WindowEvent e) {
                // TODO Auto-generated method stub                
            }

            public void windowOpened(WindowEvent e) {
            }
        });
    }

    JButton[] colorButton = new JButton[4];

    /**
     * Up and down image icons
     */
    ImageIcon[][] colorIcons = new ImageIcon[2][4];

    void defineColorIcons() {
        String[] names = new String[] { "Blue", "Green", "Black", "Red" };
        colorIcons[0] = new ImageIcon[4];
        colorIcons[1] = new ImageIcon[4];

        // Up icons
        for (int col = 0; col < 4; col+=3) {
            String name = "/images/myicons/" + names[col] + "Up.GIF";
            URL imageUrl = AttaGraphFrame.class.getResource(name);
            colorIcons[0][col] = new ImageIcon(imageUrl, "");
        }
        // Down icons
        for (int col = 0; col < 4; col+=3) {
            String name = "/images/myicons/" + names[col] + "Down.GIF";
            URL imageUrl = AttaGraphFrame.class.getResource(name);
            colorIcons[1][col] = new ImageIcon(imageUrl, "");
        }
    }

    JToolBar createToolBar() {
        JToolBar toolBar = new JToolBar();
        defineColorIcons();

        // show copy peaks
        toolBar.add(MyGuiUtils.createToolbarItem(
                "/images/myicons/CopyPeaks.GIF",
                "Show Peaks Data Dialog", toolBar, new ActionListener() {
                    public void actionPerformed(ActionEvent ae) {
                        copyPeaks();
                    }
                }));

        // show Radar Graph
        toolBar.add(MyGuiUtils.createToolbarItem(
                "/images/myicons/RadarGraph.GIF",
                "Show Radar Graph", toolBar, new ActionListener() {
                    public void actionPerformed(ActionEvent ae) {
                        drawRadarGraph();
                    }
                }));

        // horizontal scale
        toolBar.add(MyGuiUtils.createToolbarItem(
                "/images/myicons/ScaleHorizontal.GIF",
                "Double Horizontal Scale", toolBar, new ActionListener() {
                    public void actionPerformed(ActionEvent ae) {
                        panel.doubleScaleX();
                    }
                }));

        // vertical scale
        toolBar.add(MyGuiUtils.createToolbarItem(
                "/images/myicons/ScaleVertical.GIF",
                "Double Vertical Scale", toolBar, new ActionListener() {
                    public void actionPerformed(ActionEvent ae) {
                        panel.doubleScaleY();
                    }
                }));

        // reset scale
        toolBar.add(MyGuiUtils.createToolbarItem(
                "/images/myicons/ScaleReset.GIF",
                "Reset Scales", toolBar, new ActionListener() {
                    public void actionPerformed(ActionEvent ae) {
                        panel.resetScales();
                    }
                }));

        // show Radara Graph
        colorButton[0] = MyGuiUtils.createToolbarItem(
                "/images/myicons/BlueDown.GIF", "Hide Blue color", toolBar,
                new ActionListener() {
                    public void actionPerformed(ActionEvent ae) {
                        toggleColor(0);
                    }
                });
        toolBar.add(colorButton[0]);
//
//        colorButton[1] = MyGuiUtils.createToolbarItem(
//                "/images/myicons/GreenUp.GIF", "Show Green color", toolBar,
//                new ActionListener() {
//                    public void actionPerformed(ActionEvent ae) {
//                        toggleColor(1);
//                    }
//                });
//        toolBar.add(colorButton[1]);
//
//        colorButton[2] = MyGuiUtils.createToolbarItem(
//                "/images/myicons/BlackUp.GIF", "Show Black color", toolBar,
//                new ActionListener() {
//                    public void actionPerformed(ActionEvent ae) {
//                        toggleColor(2);
//                    }
//                });
//        toolBar.add(colorButton[2]);

        // show Blue
        colorButton[3] = MyGuiUtils.createToolbarItem(
                "/images/myicons/RedDown.GIF", "Hide Red color",
                toolBar, new ActionListener() {
                    public void actionPerformed(ActionEvent ae) {
                        toggleColor(3);
                    }
                });
        toolBar.add(colorButton[3]);

        return toolBar;
    }

    void copyPeaks() {
        CopyPeaksDialog.callCopyPeaksDialog(this);
    }

    void drawRadarGraph() {
        RadarFrame rf = new RadarFrame(fdata);
        rf.pack();
        rf.setVisible(true);
    }

    void toggleColor(int col) {
    	String []colName = new String[]{"Blue", "Green", "Black", "Red"};
        panel.showColors[col] = !panel.showColors[col];
        if (panel.showColors[col]) {
            colorButton[col].setIcon(colorIcons[1][col]);
            String tt = "Hide " + colName[col] + " Color";
            colorButton[col].setToolTipText(tt);
        } else {
            colorButton[col].setIcon(colorIcons[0][col]);
            String tt = "Show " + colName[col] + " Color";
            colorButton[col].setToolTipText(tt);
        }
//        Graphics g = this.getGraphics();
//        this.update(g);
        panel.resize();
    }
}
