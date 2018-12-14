#!/bin/sh

start-pulseaudio-x11 &
xbacklight -set 30 &

xsetroot -cursor_name left_ptr &
setxkbmap -layout fr -variant bepo -option caps:escape &

xrdb -merge ~/.Xresources &
compton -b &
redshift &
unclutter &
exec bspwm
