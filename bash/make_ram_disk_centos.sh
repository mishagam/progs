#!/bin/bash

# plus look: http://crazytoon.com/2007/06/01/ 
# ramdisk-how-do-you-install-and-set-up-ramdisk-under-linux-centos-rhel-fedora/
/sbin/mke2fs -m 0 /dev/ram0
mkdir /home/ramdisk
mount /dev/ram0 /home/ramdisk