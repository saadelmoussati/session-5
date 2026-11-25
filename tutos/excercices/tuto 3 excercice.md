Table : CLIENT
--------------
code_client (PK)
nom_client
prenom_client
telephone_client
email_client

Table : REPAS
-------------
code_repas (PK)
nom_repas
description_repas
prix_repas
categorie_repas

Table : COMMANDE
----------------
code_commande (PK)
date_commande
heure_commande
statut_commande
code_client (FK)

Table : LIGNE_COMMANDE
----------------------
code_commande (PK, FK)
code_repas (PK, FK)
quantite_commandee
prix_unitaire_commande