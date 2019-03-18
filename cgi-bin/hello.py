#!/usr/bin/python3

import cgi, sys
import cgitb; cgitb.enable()
sys.stderr = sys.stdout

name=""
message = ""

form = cgi.FieldStorage()
if "name" in form:
	name = form["name"].value

if "text" in form:
	message = form["text"].value

if "name" and "text":
	f = open("msgs.txt", "a")
	f.write(name + ": " + message + "<br>" + "\n")
	f.close()

redirectURL="../p3.html"
 
print('Content-type:text/html\n\n')
print('<html>')
print('  <head>')
print('    <meta http-equiv="refresh" content="0;url='+str(redirectURL)+'" />') 
print('  </head>')
print('</html>')
