sudo sed -i 's/saucy/trusty/' /etc/apt/sources.list
sudo sed -i 's/petra/qiana/' /etc/apt/sources.list
sudo sed -i 's/saucy/trusty/' /etc/apt/sources.list.d/official-package-repositories.list
sudo sed -i 's/petra/qiana/' /etc/apt/sources.list.d/official-package-repositories.list

## For Package Sources only if they are enabled ##
sudo sed -i 's/saucy/trusty/' /etc/apt/sources.list.d/official-source-repositories.list
sudo sed -i 's/petra/qiana/' /etc/apt/sources.list.d/official-source-repositories.list

## For Getdeb Sources only if they are enabled ##
sudo sed -i 's/saucy/trusty/' /etc/apt/sources.list.d/getdeb.list
sudo sed -i 's/petra/qiana/' /etc/apt/sources.list.d/getdeb.list

sudo apt-get update
sudo apt-get dist-upgrade
sudo apt-get upgrade

sudo cat /etc/issue
sudo cat /etc/issue.net
sudo cat /etc/lsb_release
sudo cat /etc/os-release
