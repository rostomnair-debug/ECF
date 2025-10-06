# EcoRide

EcoRide est un prototype front-end d'un service de covoiturage écologique réalisé dans le cadre d'un projet pratique Formation Studi. Le dépôt rassemble des pages statiques, des ressources et des scripts JavaScript qui illustrent les principaux parcours utilisateurs du produit.

## Vue d'ensemble du projet
- Page d'accueil (`index.html`) avec un formulaire de recherche de trajets relié à la page de résultats.
- Liste des trajets (`covoiturages.html`) qui lit des données simulées pour afficher les trajets à venir et les informations des conducteurs.
- Pages de détail conducteur (`detail_*.html`) présentant le profil, le véhicule et quelques avis.
- Espaces compte pour passagers, chauffeurs et employés (`my_space*.html`, `employee_space.html`) ainsi que des maquettes d'authentification (`login.html`, `sign_in.html`).
- Pages d'assistance comme les formulaires de contact, la publication de trajets et les téléchargements de documentation.

## Technologies utilisées
- HTML5 avec Bootstrap 5 fourni via CDN.
- Styles personnalisés regroupés dans `css/style.css` et classes spécifiques directement dans les pages.
- Modules JavaScript natifs pour les comportements (`js/script.js`, `js/villes.js`, `js/trajets.js`, `js/employee.js`).
- Ressources statiques dans `img/` et `assets/`, avec des documents complémentaires dans `pdf/`.

## Structure du dépôt
- `index.html` – point d'entrée de la page d'accueil.
- `covoiturages.html` – résultats de recherche alimentés par `js/trajets.js`.
- `detail_*.html` – fiches conducteurs accessibles depuis la page des résultats.
- `publish_ride.html`, `form_chauffeur.html` – parcours de soumission pour les nouveaux conducteurs et trajets.
- `my_space.html`, `my_space_chauffeur.html`, `employee_space.html` – maquettes d'espaces comptes.
- `js/`, `css/`, `img/`, `assets/`, `pdf/` – code et médias de support pour l'interface.

## Prise en main
1. Clonez ou téléchargez ce dépôt.
2. Servez le dossier avec un serveur de fichiers statiques (par exemple `php -S 127.0.0.1:8080`) ou ouvrez directement `index.html` dans un navigateur.
3. Conservez la structure des dossiers afin que les chemins relatifs vers les styles, scripts et médias restent valides.

## Données et scripts
- `js/trajets.js` initialise l'application avec des métadonnées de conducteurs et de trajets utilisées sur les pages de résultats et de détail.
- `js/script.js` et `js/villes.js` remplissent le formulaire de recherche, gèrent la validation et redirigent l'utilisateur vers les résultats correspondants.
- `js/employee.js` affiche les files de modération et les incidents dans les maquettes du tableau de bord employé.
- Vous pouvez ajouter d'autres scripts ou jeux de données dans le répertoire `js/` et les référencer depuis la page HTML concernée.

## Conseils de développement
- La mise en page partagée repose sur les composants Bootstrap ; privilégiez `css/style.css` pour les modifications communes au site.
- Il n'y a ni pipeline de build ni gestionnaire de dépendances : modifiez les fichiers statiques puis rechargez votre navigateur pour tester.
- Le dossier `php/` contient pour l'instant des éléments factices ; vous pouvez l'étendre en véritable backend si le prototype évolue.

## Pistes d'amélioration
- Remplacer les tableaux codés en dur par des données récupérées via une API REST ou un fichier JSON.
- Ajouter une validation côté client, des audits d'accessibilité et des tests automatisés à mesure que le prototype grandit.
- Introduire un bundler, du linting ou un système de composants si le front-end devient plus complexe.
