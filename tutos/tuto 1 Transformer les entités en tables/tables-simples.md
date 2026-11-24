@'
# MLD — Tables simples du Blog

## Table : VILLE
-------------
id_ville (PK)
nom_ville

## Table : AUTEUR
--------------
id_auteur (PK)
nom_auteur
prenom_auteur
email_auteur

## Table : CATEGORIE
-----------------
id_categorie (PK)
nom_categorie

## Table : ARTICLE
---------------
id_article (PK)
titre_article
contenu_article
date_publication
statut_article
image_article
'@ | Set-Content -Path "conception\mld\transformer-entites-tables\tables-simples.md" -Encoding UTF8