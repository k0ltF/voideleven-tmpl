#!/bin/bash

for kbd in $(setxkbmap -query | grep layout)
do
	if echo "$kbd" | grep -q 'fr' ; then
		setxkbmap -layout us -variant altgr-intl -option caps:escape
	else 
		setxkbmap -layout fr -variant bepo -option caps:escape
	fi
done

