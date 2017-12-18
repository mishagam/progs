#! /bin/bash

# it works, also for usintu need use advice from:
# http://www.linuxreaders.com/2011/01/11/firefox-chrome-cache-on-ram-drive-fedora-ubuntu/
# =========== On UBUNTU after 10.10 =================
# vi /etc/default/grub
#   change line GRUB_CMDLINE_LINUX="" to:
# GRUB_CMDLINE_LINUX=”ramdisk_size=512000″
#   Save the file and run
# update-grub

# sudo mkfs -t ext3 -q /dev/ram1 65536
sudo mkfs -t ext3 -q /dev/ram1 1000000
sudo mkdir -p /tmp/ramfs
sudo mount /dev/ram1 /tmp/ramfs -o defaults,rw