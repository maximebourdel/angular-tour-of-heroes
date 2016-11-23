angular-tour-of-heroes
===================

#### Version
1.0

Ceci est l'aboutissement de ma formation sur le Framework **Angular 2** réalisé avec **TypeScript**.
Source : https://angular.io

----------

## Table des matières
  * [1. Je n'ai encore rien de configuré](#je_n_ai_encore_rien_configure)
  * [2. J'ai déjà tous les outils](#j_ai_deja_tout_les_outils)


Si vous avez déjà installé tous les composants nécessaires à Angular, merci de passer au point [2. J'ai déjà tous les outils](#j_ai_deja_tout_les_outils)

1. Je n'ai encore rien de configuré <a id="je_n_ai_encore_rien_configure"></a>
-------------

Vous aurez besoin des outils suivants :

* Curl
* Git
* npm
* NodeJs

###curl

```
$ sudo apt-get install curl
```

###git

```
$ sudo apt-get install git
```


###npm
npm permet entre autres d'installer les librairies à importer dans le fichier **package.json** situé à la racine.

Pour installer npm lancer simplement la commande :

```
$ sudo apt-get install npm
```

###NodeJS
NodeJS va permettre d'utiliser la commande **tsc** (Typescript).

 Afin d'installer NodeJS lancer la commande suivante :
 
```bash
 $ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
$ sudo apt-get install -y nodejs
$ sudo apt-get install -y build-essential
```
Une fois tout ce la effectué, vous pouvez passer à la partie suivante.

2. J'ai déjà tous les outils <a id="j_ai_deja_tout_les_outils"></a>
-------------

###Installation 

####Importer le projet
```
$ git clone https://github.com/maximebourdel/angular-tour-of-heroes.git
```
####Installer les librairies
Se positionner dans le projet :
```bash
$ cd angular-tour-of-heroes
```
Installer les librairies :
```bash
$ npm install
```


