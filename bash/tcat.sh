#!/bin/bash

kernel="2.6.39"
distro="xyz"
cat > myconfig.conf <<EOL
line 1, ${kernel}
line 2, 
line 3, ${distro}
line 4 line
... 
EOL

delay=3
echo Sleeping ${delay} seconds
sleep ${delay}

cat myconfig.conf