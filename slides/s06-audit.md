---
theme: seriph
favicon: ./favicon-mse.png
layout: center
title: "Séance 6 : L’audit d’une vraie API"
info: |
  ## Développement Web · ISMIN 3A
  Full-Stack TypeScript, DevOps & AI-Assisted Coding
class: text-center
highlighter: shiki
fonts:
  sans: Roboto
  serif: Roboto
  mono: JetBrains Mono
  weights: '300,400,500,700'
drawings:
  persist: false
transition: slide-left
mdc: true

---

<CourseCover :sprint="2" :seance="6" />

# L’audit

## Une vraie API, un regard critique

<div class="pt-4 op-75">Séance 6&nbsp;: Sprint 2, Sécurité & UI</div>

<div class="pt-10 text-sm op-75">
📱 <b>gaetanmaisse.github.io/ismin-web-2026-tps</b>
</div>

---

# La mission

<div class="pt-2 text-lg">

<v-clicks>

- Cette application est **complète.** Auth, organisations, models, 25 tests verts. C’est le corrigé du TP4.
- **MAIS** Elle n’est pas prête pour la production.
- Vous la recevez en **héritage**, comme un développeur qui arrive sur un projet. Vous la lisez, vous trouvez ce qu’il faut améliorer, vous le classez.
- **L'utilisation de l'IA**, pour lire et pour lister. Choisir, classer et répondre aux questions, c’est vous.
- **En binôme**, sur le thème de votre choix. **Quatre slides**, cinq à dix minutes.

</v-clicks>

</div>

---

# Six thèmes, à choisir en binôme

| Thème                              | Par où commencer                                                                   |
|------------------------------------|------------------------------------------------------------------------------------|
| **Sécurité de l’authentification** | `src/auth/`, `src/users.ts`, `.env.example`                                        |
| **Intégrité des données**          | `models.service.ts`, `schema.prisma`                                               |
| **Contrat d’API et documentation** | les controllers, le README, la réponse de chaque route, la collection Bruno du TP2 |
| **Validation des entrées**         | les `dto/`, `model.ts`                                                             |
| **Configuration et démarrage**     | `.env.example`, `main.ts`, les scripts npm, le seed, le `Dockerfile`               |
| **Qualité et tests**               | `test/`, `vitest.config.ts`, ce que les tests ne couvrent pas                      |

<div class="pt-3 text-sm op-75">
Un thème est une lentille, pas une frontière. Deux binômes peuvent prendre le même thème, pas le même sujet&nbsp;: dites-moi ce que vous creusez.
</div>

---

# Quatre slides, le même gabarit pour tous

<div class="grid grid-cols-2 gap-6 pt-2">
<div>

### 1 · Le constat

Votre thème, et en trois lignes ce que vous avez trouvé en lisant le code, avec les fichiers.

### 2 · L’amélioration prioritaire

Le problème. Le risque en production. La solution. L’effort&nbsp;: petit, moyen, grand. **Une seule.**

</div>
<div>

### 3 · Les deux suivantes

Deux lignes chacune, classées.

### 4 · Une question

**Ce que l’assistant a proposé et que vous avez écarté**, et pourquoi.

</div>
</div>

<div class="pt-4 text-sm op-75">
Depuis votre portable, cinq à dix minutes. Le PDF par mail avant 15 h.
</div>

---

# La séance

<div class="grid grid-cols-2 gap-8 pt-2">
<div>

| Heure | Quoi |
|---|---|
| 13:15 | Les six thèmes, les binômes choisissent |
| 13:25 | Recherche, 1 h 20 |
| 14:45 | Pause |
| 15:00 | Présentations, cinq à dix minutes par binôme |
| 16:20 | Synthèse au tableau |

</div>
<div>

```sh
git pull --no-edit upstream main
cd tp05
cp .env.example .env
npm install
npm run db:migrate
npm run db:seed
npm test
```

<div class="pt-2 text-sm op-75">
Cinq à dix minutes chacun, questions comprises. Ce que vous ne savez pas expliquer sort de vos slides, devant tout le monde.
</div>

</div>
</div>

---
layout: center
---

# Lundi

## Séance 7&nbsp;: React

<div class="pt-6 op-75">
Trois séances côté serveur. Lundi, l’API que vous venez d’auditer a un visage.
</div>

<div class="pt-10 text-sm op-60">
Slides&nbsp;: gaetanmaisse.github.io/ismin-web-2026-tps
</div>
