#!/usr/bin/env sh

# Author: James William Balcomb; M.B.A., Ph.D, Esq.

# echo "#!/usr/bin/env sh" > deploy_scp_commands.sh
# find $PWD -maxdepth 1 -mindepth 1 -type f | awk '{ print "scp" " " $1 " " "jbalcomb@172.81.134.163:/opt/llu-www/"}' >> deploy_scp_commands.sh
# find $PWD -maxdepth 1 -mindepth 1 -type d | awk '{ print "scp -r" " " $1 " " "jbalcomb@172.81.134.163:/opt/llu-www/"}'  >> deploy_scp_commands.sh

scp /c/Development/LLU-WWW/llu-www/.env.development jbalcomb@172.81.134.163:/opt/llu-www/
scp /c/Development/LLU-WWW/llu-www/.env.production jbalcomb@172.81.134.163:/opt/llu-www/
scp /c/Development/LLU-WWW/llu-www/.gitignore jbalcomb@172.81.134.163:/opt/llu-www/
scp /c/Development/LLU-WWW/llu-www/deploy.sh jbalcomb@172.81.134.163:/opt/llu-www/
scp /c/Development/LLU-WWW/llu-www/deploy_scp_commands.sh jbalcomb@172.81.134.163:/opt/llu-www/
scp /c/Development/LLU-WWW/llu-www/favicon.ico jbalcomb@172.81.134.163:/opt/llu-www/
scp /c/Development/LLU-WWW/llu-www/next.config.js jbalcomb@172.81.134.163:/opt/llu-www/
scp /c/Development/LLU-WWW/llu-www/package-lock.json jbalcomb@172.81.134.163:/opt/llu-www/
scp /c/Development/LLU-WWW/llu-www/package.json jbalcomb@172.81.134.163:/opt/llu-www/
scp /c/Development/LLU-WWW/llu-www/README.md jbalcomb@172.81.134.163:/opt/llu-www/
# scp -r /c/Development/LLU-WWW/llu-www/.git jbalcomb@172.81.134.163:/opt/llu-www/
# scp -r /c/Development/LLU-WWW/llu-www/.idea jbalcomb@172.81.134.163:/opt/llu-www/
# scp -r /c/Development/LLU-WWW/llu-www/.next jbalcomb@172.81.134.163:/opt/llu-www/
scp -r /c/Development/LLU-WWW/llu-www/components jbalcomb@172.81.134.163:/opt/llu-www/
# scp -r /c/Development/LLU-WWW/llu-www/node_modules jbalcomb@172.81.134.163:/opt/llu-www/
scp -r /c/Development/LLU-WWW/llu-www/pages jbalcomb@172.81.134.163:/opt/llu-www/
scp -r /c/Development/LLU-WWW/llu-www/static jbalcomb@172.81.134.163:/opt/llu-www/
# scp -r /c/Development/LLU-WWW/llu-www/tmp jbalcomb@172.81.134.163:/opt/llu-www/

# ssh
# ssh -t [user]@[remote-server] vim [file]
# The -t option in the ssh -t command force pseudo-tty allocation.
# https://www.cyberciti.biz/faq/linux-unix-osx-bsd-ssh-run-command-on-remote-machine-server/
# ssh -t vivek@server1.cyberciti.biz << EOF
#  sync
#  sync
#  sudo /sbin/shutdown -h 0
# EOF
# ssh vivek@server1.cyberciti.biz 'bash -s' < /path/to/test.sh
# 
# cd /opt/llu-www/
# npm install --production
# npm run build
# sudo systemctl restart llu-www-1
# sudo systemctl restart llu-www-2
# 
# ssh -t jbalcomb@172.81.134.163 "cd /opt/llu-www/ && npm install --production"
# ssh -t jbalcomb@172.81.134.163 "cd /opt/llu-www/ && npm run build"
# ssh -t jbalcomb@172.81.134.163 sudo systemctl restart llu-www-1
# ssh -t jbalcomb@172.81.134.163 sudo systemctl restart llu-www-2
# ssh -t jbalcomb@172.81.134.163 sudo systemctl status llu-www-1
# ssh -t jbalcomb@172.81.134.163 sudo systemctl status llu-www-2
# 
ssh -t jbalcomb@172.81.134.163 "cd /opt/llu-www/ && npm install --production && npm run build && sudo systemctl restart llu-www-1 && sudo systemctl restart llu-www-2"
