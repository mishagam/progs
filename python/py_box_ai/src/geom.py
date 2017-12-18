'''
Created on Dec 29, 2009
@author: Misha
'''

class Point:
    
    def __init__(self, x, y):
        "initialize point and set dimensions"
        self.x, self.y = x, y
        
    def __add__(self, o):
        "add other point"
        x = self.x + o.x;
        y = self.y + o.y
        return Point(x,y)
        
    def __sub__(self, o):
        "add other point"
        x = self.x - o.x;
        y = self.y - o.y
        return Point(x,y)
        
            
    

class Rect:
    
    def __init__(self, x, y, w, h):
        "initialize rect and set dimensions"
        self.x, self.y, self.w, self.h = x, y, w, h
        
    def contains(self, pt):
        "point pt is inside this rect"
        if pt.x < self.x or self.x + self.w < pt.x:
            return False
        if pt.y < self.y or self.y + self.h < pt.y:
            return False
        return True
        
    def contains_rect(self, r):
        "rect r is inside this rect"
        if r.x < self.x or self.x + self.w < r.x + r.w:
            return False
        if r.y < self.y or self.y + self.h < r.y + r.h:
            return False
        return True
    
    def intersects(self, r):
        if self.x + self.w < x.x  or r.x + r.w < self.x:
            return False
        if self.y + self.w < r.y or r.y + r.h < self.y:
            return False
        return True
    
    def __isub__(self, pt):
        "`add` point"
        self.x -= pt.x
        self.y -= pt.y
        return self
    
    def __iadd__(self, pt):
        "`add` point"
        self.x += pt.x
        self.y += pt.y
        return self
    
    def copy(self):
        "returns shallow copy of rect"
        r = Rect(self.x, self.y, self.w, self.h)
        return r
        
 