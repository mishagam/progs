#!/usr/bin/python

from Tkinter import *

from box import Box
from colors import Colors
from geom import Rect
from geom import Point
import os
from xml.dom import minidom 

class Room(Box):
    def __init__(self, canvas, rect, color):
        "Construct new box with given rect, color"
        Box.__init__(self, canvas, "room", rect, color)
        self.cols = Colors()
        self.lastId = 2;
        self.currentSelected = None

    def add_box(self):
        "Add box to the room"
        rect = Rect(10, 10, 100, 100)
        col = self.cols.next_color()
        bname = "box" + str(self.lastId)
        self.lastId += 1
        b = Box(self.canvas, bname, rect, col)
        b.parent = self
        self.children += [b]
        return b
    
    def select_box(self, pt):
        "change selection to box pointed by point pt"
        b = self.target(pt)        
        if self.currentSelected:
            self.currentSelected.select(False)
        b.select()
        self.currentSelected = b
        return b
    
    def move_box(self, bx, a, b):
        "move box and find place for it"
        np = self.target(b)
        bx.rect.x += (b.x - a.x)
        bx.rect.y += (b.y - a.y)
        np.place(bx)   
        
    def open(self, filename):
        "read boxes configuration from XML file"
        dom = minidom.parse(filename)
        boxes = {}
        nodes = dom.getElementsByTagName("box")
        for node in nodes:
            bid = node.getAttribute('id')
            color = node.getAttribute('color')
            if not self.cols.has_color(color):
                color = self.cols.next_color()
            sx = node.getAttribute('x')
            sy = node.getAttribute('y')
            sw = node.getAttribute('width')
            sh = node.getAttribute('height')
            x = int(sx)
            y = int(sy)
            w = int(sw)
            h = int(sh)
            r = Rect(x,y,w,h)
            bx = Box(None, bid, r, color)
            boxes[bid] = bx
            
        #setting children
        self.lastid = 0
        for node in nodes:
            bid = node.getAttribute('id')
            bx = boxes[bid]
            
            #update lastId
            id = int(bid)
            if id > self.lastId:
                self.lastId = id            
            parel = node.getElementsByTagName("parent")[0]
            boxref = parel.getElementsByTagName("boxref")[0]
            parid = boxref.getAttribute(u'idref')
            bx.parent = (boxes[parid] if boxes.has_key(parid) else None)                            
            # 
            chel = node.getElementsByTagName("children")[0]
            boxref = chel.getElementsByTagName("boxref")
            for ch in boxref:
                chid = ch.getAttribute("idref")
                bx.children += [boxes[chid]] 
        #copy boxes[0] to self
        bxroom = boxes["1"]
        self.col = bxroom.col
        self.rect = bxroom.rect
        self.parent = None
        self.children = bxroom.children
        self.selected =False
        
    def box_ref(self, doc, b):
        "create boxref element with reference to box b"
        boxRef = doc.createElement("boxref")
        bid = (b.tag if b is not None else "0")
        boxRef.setAttribute("idref", bid)  
        return boxRef
        
    def save(self, filename):
        "save configuration as XML file with given filename"
        f = open(filename, "w")
        xml = self.prepare_xml()
        f.write(xml)
        f.close()
        
    def prepare_xml(self):
        "prepare XML string with configuration"
        doc = minidom.Document()
        allBoxes = []
        self.add_to_list(allBoxes)
        
        # setting sequential ids
        lastId = 1;
        for bx in allBoxes:
            bx.tag = str(lastId)
            lastId += 1
        
        # add root element
        root = doc.createElement("room")
        doc.appendChild(root)
        
        # adding boxes
        for bx in allBoxes:
            boxe = doc.createElement("box")
            boxe.setAttribute("id", bx.tag)
            boxe.setAttribute("color", bx.col)
            boxe.setAttribute("x", str(bx.rect.x))
            boxe.setAttribute("y", str(bx.rect.y))
            boxe.setAttribute("width", str(bx.rect.w))
            boxe.setAttribute("height", str(bx.rect.h))
            
            #parent
            pare = doc.createElement("parent")
            boxe.appendChild(pare)
            boxref = self.box_ref(doc, bx.parent)
            pare.appendChild(boxref)
            
            # children
            childrene = doc.createElement("children");
            boxe.appendChild(childrene);
            for ch in bx.children:
                che = self.box_ref(doc, ch)
                childrene.appendChild(che)
            
            # adding box element to root
            root.appendChild(boxe)
     
        # return XML string
        xml = doc.toprettyxml(indent="  ")
        return xml

def test():
    print "working in " + os.getcwd()
    print "Testing room"

if __name__ == '__main__':
    test()
