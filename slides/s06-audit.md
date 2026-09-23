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

- **Cette application est complète.** Auth, organisations, models, 25 tests verts. C’est le corrigé du TP4.
- **Elle n’est pas prête pour la production.** Personne ne vous dira où ça pèche.
- **Vous la recevez en héritage**, comme un développeur qui arrive sur un projet. Vous la lisez, vous trouvez ce qu’il faut améliorer, vous le classez.
- **L’assistant IA est permis**, pour lire et pour lister. Choisir, classer et répondre aux questions, c’est vous.
- **Dix minutes devant la salle**, quatre slides, pas une de plus.

</v-clicks>

</div>

---

# Six thèmes, six trinômes

| Thème | Par où commencer |
|---|---|
| **Sécurité de l’authentification** | `src/auth/`, `src/users.ts`, `.env.example` |
| **Intégrité des données** | `models.service.ts`, `schema.prisma` |
| **Contrat d’API et documentation** | les controllers, le README, la réponse de chaque route, la collection Bruno du TP2 |
| **Validation des entrées** | les `dto/`, `model.ts` |
| **Exploitation** | `main.ts`, `prisma.config.ts`, ce qui manque pour tourner sur un serveur |
| **Qualité et tests** | `test/`, `vitest.config.ts`, ce que les tests ne couvrent pas |

<div class="pt-3 text-sm op-75">
Un thème est une lentille, pas une frontière. Ce que vous trouvez ailleurs va sur la quatrième slide.
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

### 4 · Deux réponses

**Si vous ne pouviez faire qu’une seule chose dans toute l’application**, thème ou pas, laquelle&nbsp;?

**Ce que l’assistant a proposé et que vous avez écarté**, et pourquoi.

</div>
</div>

<div class="pt-4 text-sm op-75">
Depuis votre portable. Et le PDF dans votre fork, <code>tp05/audit.pdf</code>, avant 15 h.
</div>

---

# La séance

<div class="grid grid-cols-2 gap-8 pt-2">
<div>

| Heure | Quoi |
|---|---|
| 13:15 | Tirage des trinômes et des thèmes |
| 13:25 | Recherche, 1 h 20 |
| 14:45 | Pause |
| 15:00 | Six présentations de dix minutes |
| 16:00 | Synthèse au tableau |

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
Six minutes de présentation, quatre de questions. Ce que vous ne savez pas expliquer sort de vos slides, devant tout le monde.
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
