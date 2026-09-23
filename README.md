# Site catalogue Akaross

Version du 23 septembre 2026. Ouvrir `index.html` ou servir ce dossier avec un serveur web statique. Les images, logos SVG et fichiers Inter sont inclus localement dans `assets/`.

## Contenu

20 fiches avec les visuels validés « TEMPLATE 1 », 8 catégories avec icônes, recherche par nom/catégorie/référence, aperçu agrandi et téléchargement de photo. Inter est la seule famille utilisée pour les textes de l’interface. Les logos vectoriels et le texte déjà intégré aux visuels fournis sont conservés.

## Commandes WhatsApp

Destination : +223 75 32 66 28 (Mali). Chaque bouton ouvre WhatsApp avec le nom du produit et sa référence catalogue. Le client valide l’envoi dans WhatsApp ; le site n’envoie aucun message automatiquement.

Sur un domaine public HTTP/HTTPS, le message contient aussi un lien vers la fiche et un lien vers la photo. En aperçu local, ces liens sont omis puisqu’ils ne seraient pas consultables par le destinataire. Une photo ne peut pas être jointe automatiquement via un simple lien WhatsApp : un téléchargement est proposé dans la fiche pour l’ajouter manuellement au message.

Les références AK-001 à AK-020 sont des identifiants internes créés pour ce catalogue, pas des références constructeur. Les prix et la disponibilité sont à confirmer lors de l’échange.

| Référence catalogue | Produit |
|---|---|
| AK-001 | Machine à laver |
| AK-002 | Réfrigérateur VIP |
| AK-003 | Réfrigérateur moyen format |
| AK-004 | Rafraîchisseur d’air |
| AK-005 | Cuisinière à gaz |
| AK-006 | Micro-ondes |
| AK-007 | Vitrine réfrigérée |
| AK-008 | Fontaine à eau blanche |
| AK-009 | Fontaine à eau noire |
| AK-010 | Coffre-fort 105 kg |
| AK-011 | Coffre-fort 55 kg |
| AK-012 | Réfrigérateur inox |
| AK-013 | Barre de son W80 |
| AK-014 | Climatiseur 12 000 BTU |
| AK-015 | Réfrigérateur grand format · 01 |
| AK-016 | Réfrigérateur grand format · 02 |
| AK-017 | Réfrigérateur vertical |
| AK-018 | Réfrigérateur graphite |
| AK-019 | Machine à laver graphite |
| AK-020 | Réfrigérateur grand format · 03 |

## Livraison et vérifications

Le site est publié sur Vercel à l’adresse https://akaross-catalogue.vercel.app et son code source est disponible sur https://github.com/Mahamane04/Akaross. Le projet Vercel suit la branche `main` : chaque nouvelle version envoyée sur cette branche est automatiquement redéployée. La version précédente du site est conservée dans `index-avant-catalogue.html`.

Un nom de domaine personnalisé pourra être ajouté plus tard depuis la rubrique **Domains** du projet Vercel. Vercel indiquera alors les enregistrements DNS à configurer chez le fournisseur du domaine.

Contrôles réalisés dans Chrome : catégories, recherche, état sans résultat, aperçu produit, fermeture clavier, téléchargement configuré, référence unique dans chacun des 20 liens WhatsApp, génération des liens photo sur un domaine public simulé, chargement Inter, absence de débordement horizontal de 320 à 1440 px, respect du réglage de réduction des animations. Aucun message n’a été envoyé.

Les aperçus sont dans `previews/`. Les fichiers `prepare-assets.cjs` et `verify-site.cjs` servent à la préparation et au contrôle dans cet environnement ; ils ne sont pas nécessaires pour consulter ou héberger le site.
