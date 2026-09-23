# TP5 : l'audit d'une vraie API

*Développement Web, ISMIN 3A, séance 6.*

## 🎯 La mission

Cette application est complète : c'est le corrigé du TP4, avec l'authentification, les organisations, les models, et tous ses tests verts. Elle fonctionne. Elle n'est pas prête pour la production.

Votre travail, en trinômes et sur un thème tiré au sort : la lire comme un développeur qui la reçoit en héritage, trouver ce qu'il faudrait améliorer avant de la mettre devant de vrais utilisateurs, et le présenter à la salle en dix minutes et quatre slides.

L'assistant IA est permis, et même conseillé, pour lire et pour lister. Ce qu'il ne fera pas à votre place : choisir, classer, et répondre aux questions.

## 🚀 Démarrer

```sh
git pull --no-edit upstream main
cd tp05
cp .env.example .env
npm install
npm run db:migrate
npm run db:seed
npm test                   # 25 tests verts, c'est le point de départ
npm run start:dev
```

Deux comptes : `alice`, admin, et `bob`, user, mot de passe `secret`. `POST /auth/login` pour un token.

## 🧭 Les six thèmes

| Thème | Par où commencer |
|---|---|
| Sécurité de l'authentification | `src/auth/`, `src/users.ts`, `.env.example` |
| Intégrité des données | `src/models/models.service.ts`, `prisma/schema.prisma` |
| Contrat d'API et documentation | `src/models/models.controller.ts`, ce README, la réponse de chaque route, la collection Bruno du TP2 |
| Validation des entrées | `src/**/dto/`, `src/models/model.ts` |
| Exploitation | `src/main.ts`, `prisma.config.ts`, ce qui manque pour tourner sur un serveur |
| Qualité et tests | `test/`, `vitest.config.ts`, ce que les tests ne couvrent pas |

Un thème est une lentille, pas une frontière : si vous trouvez quelque chose en dehors, notez-le, la quatrième slide est faite pour ça.

## 📝 Le livrable : quatre slides, pas une de plus

1. **Le constat.** Votre thème, et en trois lignes ce que vous avez trouvé en lisant le code, avec les fichiers.
2. **L'amélioration prioritaire.** Le problème. Le risque en production. La solution. L'effort, petit, moyen ou grand. Une seule.
3. **Les deux suivantes**, deux lignes chacune, classées.
4. **Deux réponses.** Si vous ne pouviez faire qu'une seule chose dans toute l'application, thème ou pas, laquelle ? Et : ce que l'assistant a proposé et que vous avez écarté, et pourquoi.

Les slides se présentent depuis votre portable. Déposez aussi le PDF dans votre fork, `tp05/audit.pdf`, avant 15 h.

## ⏱ La séance

| Heure | Quoi |
|---|---|
| 13:15 | Lancement, tirage des trinômes et des thèmes |
| 13:25 | Recherche, 1 h 20 |
| 14:45 | Pause |
| 15:00 | Six présentations de dix minutes : six de présentation, quatre de questions |
| 16:00 | Synthèse, l'audit complet au tableau |

## 🤖 IA

Faites-lui lire un fichier et demandez-lui ce qui cloche. Puis vérifiez chaque point dans le code : un assistant trouve des problèmes qui n'existent pas, et en rate qui existent. Ce que vous présentez, vous devez le défendre.

> ⚠️ **Règle d'or** : tout ce que vous ne savez pas expliquer, on le retire de vos slides devant tout le monde.
