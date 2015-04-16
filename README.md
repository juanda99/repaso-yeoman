# repaso-yeoman
## Objetivos
- Aprender como se usa yeoman
- Realizar una aplicación ajax
## Requisitos previos: instalación de yeoman

- Instalar control de versiones
sudo apt-get install git

- Instalar node
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs

- Desinstalar, si hiciera falta:
sudo apt-get remove nodejs

- Comprobamos:

~~~
➜  ~  git --version
git version 1.9.1
➜  ~  
➜  ~  
➜  ~  node --version
v0.10.36
➜  ~  npm --version
1.4.28
~~~

Actualizo versión de npm:
sudo npm install -g npm
[sudo] password for juanda: 
/usr/bin/npm -> /usr/lib/node_modules/npm/bin/npm-cli.js
npm@2.7.5 /usr/lib/node_modules/npm
➜  ~  npm --version
2.7.5

Instalamos gestor de paquetes de frontend
-----------------------------------------
➜  ~  sudo npm install -g bower
➜  ~  bower --version
1.3.12

Para yeoman (además de bower)
--------------------
sudo npm install -g yo grunt-cli

Comprobamos versiones:
➜  ajax  grunt --version
grunt-cli v0.1.13
➜  ajax  yo --version
1.4.6

Instalamos el generador que necesitemos
sudo npm install -g generator-webapp


Ejecutar yeoman
---------------
- Dentro de la carpeta de nuestro proyecto
yo webapp
