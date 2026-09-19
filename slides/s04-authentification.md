---
theme: seriph
favicon: ./favicon-mse.png
layout: center
title: "Séance 4 : L’authentification : JWT & guards"
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

<CourseCover :sprint="1" :seance="3" />

<CourseCover :sprint="2" :seance="4" />

# L’authentification

## JWT & guards

<div class="pt-4 op-75">Séance 4&nbsp;: Sprint 2, Sécurité & UI</div>

<div class="pt-10 text-sm op-75">
📱 <b>gaetanmaisse.github.io/ismin-web-2026-tps</b>
</div>

---

# Aujourd’hui, le cours, c’est vous

<div class="grid grid-cols-2 gap-8 pt-2">
<div>

| Heure | Quoi |
|---|---|
| 0:00 | Tirage des binômes, puis des cartes |
| 0:10 | Préparation à deux, 30 min |
| 0:40 | Présentations, cartes 1 à 4 |
| 1:05 | Pause |
| 1:15 | Présentations, cartes 5 à 8 |
| 1:40 | TP, en binômes |
| 2:40 | Soutenance blanche |

</div>
<div>

<v-clicks>

- **Une carte par binôme**&nbsp;: un concept, et une question à laquelle votre exemple répond
- **Cinq minutes** au vidéoprojecteur, minuteur visible
- **Pile ou face** au moment de passer&nbsp;: l’un explique, l’autre tape
- **Le tableau** se remplit d’un mot par carte&nbsp;: à midi, c’est votre cours
- **Le TP** de l’après-midi utilise les huit cartes, dans le même ordre

</v-clicks>

</div>
</div>

---

# Les règles

<v-clicks>

1. **Préparation à deux, 30 minutes**, avec les sources de la carte. L’assistant IA est permis pour préparer, pas pour présenter.
2. **Pile ou face** devant la salle&nbsp;: l’un explique, l’autre tape l’exemple en commentant chaque ligne. Préparez les deux rôles.
3. **On annonce sa source**, on tape, on ne colle pas. À 5:00, c’est fini, terminé ou pas.
4. **Avant de commencer**, répondez à la question du binôme précédent. **Terminez** par votre question à la salle.
5. **Votre carte dépend d’une autre&nbsp;?** Le playground contient déjà la brique. Le binôme d’amont peut être consulté, cinq minutes au plus.

</v-clicks>

---

# Les huit cartes

<div class="text-sm">

| N° | Carte | La question à laquelle l’exemple répond |
|---|---|---|
| 1 | Le mot de passe | Que voit un attaquant qui vole la base, et pourquoi ça ne lui sert à rien&nbsp;? |
| 2 | Le JWT | Comment le serveur se souvient de qui vous êtes sans rien stocker&nbsp;? |
| 3 | Vérifier un JWT | Que se passe-t-il à la seconde où le token expire, et si le secret change&nbsp;? |
| 4 | Faire voyager le token | Où voyage le token, et pourquoi jamais dans l’URL&nbsp;? |
| 5 | Le guard | Comment une route sait-elle qui l’appelle, avant même d’être exécutée&nbsp;? |
| 6 | `@CurrentUser()` et 401 ou 403 | Comment éviter `req.user` partout, et quelle différence entre 401 et 403&nbsp;? |
| 7 | Les rôles | Comment un guard lit-il ce que la route déclare sur elle-même&nbsp;? |
| 8 | Tester une route protégée | Comment un test obtient-il un token, et prouve-t-il qu’une route est fermée&nbsp;? |

</div>

<div class="pt-3 text-sm op-75">
L’ordre de passage est celui des cartes&nbsp;: du mot de passe au test.
</div>

---

# Préparation&nbsp;: 30 minutes

<div class="grid grid-cols-2 gap-6 pt-2">
<div>

```sh
git pull --no-edit upstream main
cd tp04
cp .env.example .env
npm install
npm run db:migrate
npm run db:seed
npm run start:dev
```

<div class="pt-2 text-sm op-75">
Scripts hors Nest&nbsp;: <code>npx tsx playground/nom.ts</code>.<br/>
Routes de démonstration&nbsp;: <code>src/playground/</code>, jamais <code>src/auth/</code>.
</div>

</div>
<div>

### Déjà dans le playground

<div class="text-sm">

- Deux comptes, `alice` admin et `bob` user, mot de passe `secret`
- `POST /auth/login` qui renvoie un token
- Un guard qui vérifie le token et remplit `request.user`
- `GET /auth/whoami`, protégée par ce guard
- Le squelette du test `test/auth.e2e-spec.ts`

</div>

<div class="pt-4 text-sm op-75">
1 et 2 sont autonomes. 3 et 4 s’appuient sur 2. 5 sur 2 et 4. 6 et 7 sur 5. 8 sur 4 et 5.
</div>

</div>
</div>

---
layout: center
---

# Présentations, cartes 1 à 4

<Countdown :minutes="5" />

<div class="pt-8 text-sm op-75">
Sa source · l’exemple tapé · la question à la salle
</div>

---
layout: center
---

# Pause

<div class="pt-4 op-75">Dix minutes. Cartes 5 à 8 au retour.</div>

---
layout: center
---

# Présentations, cartes 5 à 8

<Countdown :minutes="5" />

<div class="pt-8 text-sm op-75">
Sa source · l’exemple tapé · la question à la salle
</div>

---
layout: section
---

# TP

<div class="op-75 pt-2"><code>tp04/README.md</code>, étapes 1 à 5</div>

<div class="pt-8 text-sm inline-block text-left">

1. Lire la fondation&nbsp;: login, puis `whoami` avec et sans token
2. Protéger les écritures avec le guard, carte 5
3. Signer ses models&nbsp;: `@CurrentUser()`, une colonne `createdBy`, cartes 6 et 3
4. Réserver la suppression aux admins&nbsp;: `@Roles`, `RolesGuard`, carte 7
5. Écrire les quatre tests du login, carte 8

</div>

<div class="pt-8 text-sm op-75">
🖐 Bloqué&nbsp;? Levez la main. Le binôme de la carte concernée est aussi une ressource.
</div>

---

# Soutenance blanche

<div class="pt-2 text-lg">Ce qui vous attend au projet final, en vingt minutes, cinq fois.</div>

<v-clicks>

- **Un nom tiré au sort.** Vous venez au vidéoprojecteur avec votre TP du jour.
- **J’ouvre un fichier**, je pointe une ligne&nbsp;: « pourquoi celle-là&nbsp;? »
- **Une modification à faire en direct**, en cinq minutes, sans assistant. Par exemple&nbsp;: interdire à bob de créer des models.
- **La règle d’or s’applique** comme au projet&nbsp;: ce qu’on ne sait pas expliquer est retiré, devant tout le monde.

</v-clicks>

<v-click>

<div class="mt-8 p-4 rounded border-l-4 border-blue-500 bg-blue-500 bg-opacity-5">
Rien n’est noté aujourd’hui. Au projet, tout le sera, exactement comme ça.
</div>

</v-click>

---
layout: center
---

# Demain

## Séance 5&nbsp;: React, composants & JSX

<div class="pt-6 op-75">
Votre API a un cadenas. Demain, elle a un visage.
</div>

<div class="pt-10 text-sm op-60">
Slides&nbsp;: gaetanmaisse.github.io/ismin-web-2026-tps
</div>
