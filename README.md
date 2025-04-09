# Chef AI 🤖🧑‍🍳

Stuck on what to cook for dinner? Just enter the ingredients you have, and get instant recipe suggestions!

<strong><a href="https://sarahhannes.github.io/chef-ai/"> 🍳 Click here to try it out!</a></strong>

## Table of contents

- [Overview](#overview)
- [Screenshot](#screenshot)
- [Built with](#built-with)
- [What I learnt](#what-i-learnt)
- [Possible improvements](#possible-improvements)

## Overview

Users should be able to:
- Enter ingredients.
- See recommended recipes for the ingredients.
- Click Redo button to start again.
- See animation when loading.

### Screenshot

|Tablet 768px|
| ---------------------------------------------- |
|     <a href="screenshots/Tablet768-1-prompt.png">![Tablet screenshot (Showing user input prompt)](screenshots/Tablet768-1-prompt.png)</a>   |
|     <a href="screenshots/Tablet768-2-loading.png">![Tablet screenshot (Showing loading animation)](screenshots/Tablet768-2-loading.png)</a> |
|     <a href="screenshots/Tablet768-3-recipe.png">![Tablet screenshot (Showing recipe)](screenshots/Tablet768-3-recipe.png)</a>   |


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learnt
1. How to get value from .env

   [Reference](https://stackoverflow.com/a/74683249)

    Save secrets in .env in root directory:
   ```.env
   // Must prefix key with `VITE_`
   // No need quotes

   VITE_MY_ACCESS_TOKEN=a_very_secret_key
   ```

   Accessing from JSX:
   ```jsx
   const hf = new HfInference(import.meta.env.VITE_MY_ACCESS_TOKEN);
   ```


# What I Learned

1. How to get value from `.env`

[Reference](https://stackoverflow.com/a/74683249)

```.env
// must prefix key with VITE_
// no need quotes
VITE_MY_ACCESS_TOKEN=a_very_secret_key
```

Accessing from JSX:
```jsx
const hf = new HfInference(import.meta.env.VITE_MY_ACCESS_TOKEN);
```

2. Steps to deploy Vite React apps on GitHub Pages with access to repository secrets

[Reference](https://dev.to/dwtoledo/deploying-a-vite-app-on-github-pages-using-github-actions-with-github-secrets-1hn0)

   - Go to **Settings > Secrets and Variables > Actions > New Repository secret**
   - Add your secret key-value pair (without quotes)
      - Example:
      - Key: `VITE_MY_ACCESS_TOKEN`
      - Value: `a_very_secret_key`
   - Go to **Settings > Pages > Build and deployment > Source dropdown** and select `GitHub Actions`
   - Create `deploy.yml` file in `/.github/workflows/deploy.yml`
   - Copy and paste the `deploy.yml` file from [Vite docs](https://vite.dev/guide/static-deploy#github-pages).
   - Add your environment secrets above the `jobs` section in `deploy.yml`
   ```
   # Simple workflow for deploying static content to GitHub Pages
   name: Deploy static content to Pages

   on:
   # Runs on pushes targeting the default branch
   push:
      branches: ['main']

   # Allows you to run this workflow manually from the Actions tab
   workflow_dispatch:

   # Sets the GITHUB_TOKEN permissions to allow deployment to GitHub Pages
   permissions:
   contents: read
   pages: write
   id-token: write

   # Allow one concurrent deployment
   concurrency:
   group: 'pages'
   cancel-in-progress: true

   env:
   VITE_HF_ACCESS_TOKEN: ${{ secrets.VITE_HF_ACCESS_TOKEN }}

   
   ###### HERE! Allow repo secrets ######
   env:
      VITE_MY_ACCESS_TOKEN: ${{ secrets.VITE_MY_ACCESS_TOKEN }}
   ######################################

   jobs:
   # Single deploy job since we're just deploying
   deploy:
      environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
      runs-on: ubuntu-latest
      steps:
         - name: Checkout
         uses: actions/checkout@v4
         - name: Set up Node
         uses: actions/setup-node@v4
         with:
            node-version: 20
            cache: 'npm'
         - name: Install dependencies
         run: npm ci
         - name: Build
         run: npm run build
         - name: Setup Pages
         uses: actions/configure-pages@v4
         - name: Upload artifact
         uses: actions/upload-pages-artifact@v3
         with:
            # Upload dist folder
            path: './dist'
         - name: Deploy to GitHub Pages
         id: deployment
         uses: actions/deploy-pages@v4

   ```


### Possible improvements
- Share recipes to Whatsapp/ Telegram etc.
- Save recipe to local storage.
- Toggle to different language.




# Credits
- The course: <a href="https://scrimba.com/learn-react-c0e">Scrimba React course</a>
- The Chef logo: <a href="https://www.freepik.com/icons/chef">Icon by Freepik</a>