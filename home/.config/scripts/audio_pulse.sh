#!/bin/bash

#Picks a file name for the output file based on availability:
while [[ -f $HOME/audio$n.flac ]]
do
	n=$((n+1))
done
filename="$HOME/audio$n.flac"

#The actual ffmpeg command:
ffmpeg \
-f alsa -i default \
-c:a flac \
$filename
