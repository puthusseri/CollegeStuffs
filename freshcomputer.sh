echo "Installing git and configure it for u"
sudo apt-get install git-core #Install git and config it
git config --global user.email "vyshakputhusseri@gmail.com"
git config --global user.name "Vyshak Puthusseri"



echo "Installing google chrome"
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome-stable_current_amd64.deb


echo "installing  pip"
sudo apt install curl
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
sudo apt-get install python3-distutils
python3 get-pip.py

echo "Installing visual studio code"
sudo apt update
sudo apt install software-properties-common apt-transport-https wget
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
sudo apt update
sudo apt install code




