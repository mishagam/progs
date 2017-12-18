#!/usr/bin/python

# File: hello2.py

from Tkinter import *
from geom import Rect
from geom import Point

class Box:
    def __init__(self, canvas, tag, rect, color):
        "Construct new box with given rect, color"
        self.tag = tag
        self.rect = rect
        self.col = color
        self.parent = None
        self.children = []
        self.selected = False
        self.parentOfSelected = False
        self.wid = 1
        self.canvas = canvas
        
    def move(self, dxy):       
        pass
    
    def show(self):
        "show box on canvas. Recursively call children"
        x1 = self.rect.x + self.rect.w
        y1 = self.rect.y + self.rect.h
        self.canvas.create_rectangle(self.rect.x, self.rect.y, x1, y1, tags=self.tag, fill=self.col)
        for ch in self.children:
            ch.show()
            
    def move(self):
        "set item coords to current box coords"
        x1 = self.rect.x + self.rect.w
        y1 = self.rect.y + self.rect.h
        self.canvas.coords(self.tag, self.rect.x, self.rect.y, x1, y1)        
        self.canvas.itemconfigure(self.tag, width=self.wid)     
            
    def target(self, pt):
        "find box pointed to by pt"
        if not self.rect.contains(pt):
            return None
        for ch in self.children:
            ret = ch.target(pt)
            if ret:
                return ret
        return self
    
    def select(self, selected=True):
        "this box is selected"
        self.selected = selected
        if selected:
            self.wid = 3
            if self.parent:
                self.canvas.tag_raise (self.tag, self.parent.tag)
        else:
            self.wid = 1
        self.move()
        
    def add_child(self, bx):
        "add bx to children of self"
        if not self.rect.contains_rect(bx.rect):
            raise Exception("has no place in add_child") 
        if bx.parent:
            bx.parent.children.remove(bx)
        self.children += [bx]
        bx.parent = self        
        
    def place(self, bx):
        "place other box over this if it has place"
        # first if we have place already
        if self.rect.contains_rect(bx.rect):
            self.add_child(bx)
            return True
        # XXX later we will try to find place
        xx=[self.rect.x]
        yy=[self.rect.y]
        for ch in self.children:
            xx += [ch.rect.x + ch.rect.w]
            yy += [ch.rect.y + ch.rect.h]
        r = Rect(0,0,bx.rect.w, bx.rect .h)
        for x in xx:
            for y in yy:
                r.x = x
                r.y = y
                ok = True;
                for ch in self.children:
                    if r.intersects(ch.rect):
                        ok = False
                        break
                if ok:
                    bx.rect = r
                    bx.move()
                    return True; 
        return False   
    
    def set_canvas(self, canvas):
        "set canvas for box and it's children"
        self.canvas = canvas
        for ch in self.children:
            ch.set_canvas(canvas)  
            
    def add_to_list(self, boxes):
        "add box and children to list of boxes"
        boxes += [self]
        for ch in self.children:
            ch.add_to_list(boxes) 

    
def test():
    print "Testing boxes"

if __name__ == '__main__':
    test()
