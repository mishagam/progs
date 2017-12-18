#!/usr/bin/python

# File: hello2.py

from Tkinter import *

from box import *
from room import Room
from geom import Rect
from geom import Point
import os

class MisCanvas:
    
    MOVE_STATE, SELECT_STATE, SIZE_STATE = (1,2,3)
    CANV_WIDTH, CANV_HEIGHT = (400, 400)
    CONF_FILENAME = "../data/room.xml";
    CONF_OFILENAME = "../data/roomo.xml";

    def __init__(self, master):

        frame = Frame(master)
        frame.pack()
        menufr = Frame(frame);

        self.mis_bt = Button(menufr, text="TestBtn",  command=self.test_vals, anchor=W)
        self.mis_bt.pack(side=TOP, expand=1, fill=X)
        self.mis_bt = Button(menufr, text="Save",  command=self.save_room, anchor=W)
        self.mis_bt.pack(side=TOP, expand=1, fill=X)
        self.mis_bt = Button(menufr, text="Add",  command=self.add_box, cursor="circle")
        self.mis_bt.pack(side=TOP, expand=1, fill=X)
        self.mis_bt = Button(menufr, text="Select",  command=self.select_box)
        self.mis_bt.pack(side=TOP, fill=X)
        self.mis_bt = Button(menufr, text="Move",  command=self.move_box, cursor="spider")
        self.mis_bt.pack(side=TOP, fill=X)
        self.mis_bt = Button(menufr, text="ChangeSize",  command=self.change_size)
        self.mis_bt.pack(side=TOP, fill=X)
        self.mis_bt = Button(menufr, text="Clean",  command=self.clean_box)
        self.mis_bt.pack(side=TOP, fill=X)
        self.button = Button(menufr, text="QUIT", fg="red", command=frame.quit)
        self.button.pack(side=BOTTOM, fill=X)
        menufr.pack(side=RIGHT, expand=1)
        
        #reading configuration
        self.room = Room(None, None, "white")
        self.room.open(MisCanvas.CONF_FILENAME)
        MisCanvas.CANV_WIDTH = self.room.rect.w + 6
        MisCanvas.CANV_HEIGHT = self.room.rect.h + 6

        #initializing canvas
        self.canv = Canvas(frame,width=MisCanvas.CANV_WIDTH, height=MisCanvas.CANV_HEIGHT, bg="white")
        self.canv.bind("<Button-1>", self.canvas_clicked);
        self.canv.bind("<Button-3>", self.canvas_clicked_R);
        self.canv.bind('<ButtonRelease-1>', self.canvas_released)
        self.canv.pack(side=LEFT)

        self.room.set_canvas(self.canv)
        self.room.show()
        self.state = MisCanvas.SELECT_STATE
        self.last_box = None
        self.last_point = None

    def test_vals(self):
        print self.mis_bt
        print self.canv.find_withtag("uno")
        two =  self.canv.find_withtag("two")
        self.canv.coords("three",10,10,150,50)
        self.canv.pack()

    def canvas_clicked(self, event):
        "mouse clicked"
        print "clicked ", event.x, event.y
        pt = Point(event.x, event.y)
        bx = self.room.target(pt)
        if bx == self.room:
            bx = None
            self.last_box = None

        if self.state == MisCanvas.SELECT_STATE:
            if bx:
                bx = self.room.select_box(pt)
                bx.move()
        elif self.state == MisCanvas.MOVE_STATE:
            if bx:
                self.room.select_box(pt)
                self.last_box = bx
                self.last_point = pt
        elif self.state == MisCanvas.SIZE_STATE:
            if bx:            
                self.room.select_box(pt)
                self.last_box = bx
                self.last_point = pt

    def canvas_clicked_R(self, event):
        print "right mouse button clicked ", event.x, event.y

    def canvas_released(self, event):
        "mouse released"
        print "right mouse button clicked ", event.x, event.y
        pt = Point(event.x, event.y)
        if self.state == MisCanvas.SELECT_STATE:
            pass
        elif self.state == MisCanvas.MOVE_STATE:
            if self.last_box and self.last_point:
                bx = self.last_box
                self.room.move_box(bx, self.last_point, pt)
                bx.move()
                self.last_Box = None
                self.last_point = None                
        elif self.state == MisCanvas.SIZE_STATE:
            if self.last_box:
                bx = self.last_box
                dp = pt - self.last_point
                r = bx.rect.copy()
                r.w += dp.x
                r.h += dp.y
                if bx.parent.rect.contains_rect(r):
                    bx.rect = r
                    bx.move()
                self.last_Box = None
                self.last_point = None
                

    def save_room(self):
        "add box to world"
        self.room.save(MisCanvas.CONF_OFILENAME)

    def add_box(self):
        "add box to world"
        b = self.room.add_box()
        b.show()

    def select_box(self):
        "add box to world"
        self.state = MisCanvas.SELECT_STATE

    def move_box(self):
        "add box to world"
        self.state = MisCanvas.MOVE_STATE

    def change_size(self):
        "add box to world"
        self.state = MisCanvas.SIZE_STATE

    def clean_box(self):
        "clean box from children"
        return



root = Tk()
app = MisCanvas(root)
root.mainloop()

