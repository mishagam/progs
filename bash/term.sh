#!/bin/sh

WID=$(xprop -root | grep "_NET_ACTIVE_WINDOW(WINDOW)"| awk '{print $5}')
xdotool windowfocus $WID
xdotool key ctrl+shift+t
xdotool set_window --name MishaWind $WID
wmctrl -i -a $WID

