#Copyright Jon Berg , turtlemeat.com

import string,cgi,time
from os import curdir, sep
from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer
import os
import commands
import cgitb; cgitb.enable()

#import pri

class MyHandler(BaseHTTPRequestHandler):

    def do_GET(self):
        try:
            qplace = self.path.find('?')
            path = ''
            querys = ''
            if qplace > 0:
                path = self.path[0:qplace]
                querys = self.path[qplace+1:]
            else:
                path = self.path
                
            if path.endswith(".html"):
                flpath = curdir + sep + path
                # print 'request for ' + flpath
                f = open(flpath) #self.path has /test.html
                 #note that this potentially makes every file on your computer readable by the internet

                self.send_response(200)
                self.send_header('Content-type',	'text/html')
                self.end_headers()
                self.wfile.write(f.read())
                f.close()
            elif path.endswith(".esp"):   #our dynamic content
                self.send_response(200)
                self.send_header('Content-type',    'text/html')
                self.end_headers()
                self.wfile.write("hey, today is the" + str(time.localtime()[7]))
                self.wfile.write(" day in the year " + str(time.localtime()[0]))
            elif path.endswith(".tst"):   
                # cgi testing
                self.send_response(200)
                self.send_header('Content-type',    'text/html')
                self.end_headers()
                form = cgi.parse_qs(querys)
                self.wfile.write("<p>aaa: " + form["aaa"][0])
                self.wfile.write("<p>bbb: " + form["bbb"][0])
            elif path.endswith(".mrun"):   #our dynamic content
                self.send_response(200)
                self.send_header('Content-type',    'text/html')
                self.end_headers()
                ( stat, output ) = commands.getstatusoutput( "./mtest" )
                if( stat == 0 ):
                    print "Command succeeded, here is the output: %s" % output
                else:
                    print "Command failed, here is the output: %s" % output
                self.wfile.write(output)
            elif path.endswith(".php"):   
                #substitute $_REQUEST['parm'] with parm value
                flpath = curdir + sep + path
                f = open(flpath) #self.path has /test.html
                self.send_response(200)
                self.send_header('Content-type',    'text/html')
                self.end_headers()
                sphp = f.read()
                f.close()
                form = cgi.parse_qs(querys)
                for k in form.keys():
                    key = '<?= $_REQUEST["' + k + '"] ?>'
                    val = form[k][0]
                    print 'key, val=', key, val
                    sphp = sphp.replace(key, val)
                self.wfile.write(sphp)
            elif path.endswith("proxy.json"):   
                #substitute $_REQUEST['parm'] with parm value
                f = open(flpath) #self.path has /test.html
                self.send_response(200)
                self.send_header('Content-type',    'text/html')
                self.end_headers()
                form = cgi.parse_qs(querys)
                for k in form.keys():
                    key = '<?= $_REQUEST["' + k + '"] ?>'
                    val = form[k][0]
                    print 'key, val=', key, val
                    sphp = sphp.replace(key, val)
                self.wfile.write(sphp)
            else:
                self.send_error(404,'Unknown file type: %s' % self.path)
                print "Command failed, Unknown file type"
            return
                
        except IOError:
            self.send_error(404,'File Not Found: %s' % self.path)
     

    def do_POST(self):
        global rootnode
        try:
            ctype, pdict = cgi.parse_header(self.headers.getheader('content-type'))
            if ctype == 'multipart/form-data':
                query=cgi.parse_multipart(self.rfile, pdict)
            self.send_response(301)
            self.end_headers()
            upfilecontent = query.get('upfile')
            print "filecontent", upfilecontent[0]
            self.wfile.write("<HTML>POST OKle app engine web framework.<BR><BR>");
            self.wfile.write(upfilecontent[0]);
            
        except :
            passls
            

def main():
    try:
        port=8004
        server = HTTPServer(('', port), MyHandler)
        print 'started httpserver on port ' + str(port) + ' ...'
        server.serve_forever()
    except KeyboardInterrupt:
        print '^C received, shutting down server'
        server.socket.close()

if __name__ == '__main__':
    main()

