# At the Table

A personal collection of favourite recipes, with a small, responsive website for browsing them on any device.

## Browse the site

Open [`index.html`](./index.html) to see the recipe catalog. Choose a card to view its ingredients, method, tips, sources, and photos.

## Publish with GitHub Pages

This is a plain static site; it does not need a build step or dependencies.

1. In the repository on GitHub, open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select the `main` branch and the `/ (root)` folder, then save.
4. GitHub will show the published site URL in the Pages settings.

## Editing recipes

The Markdown files (`banana_cake.md`, `burnt_cheesecake.md`, `pandan_cake.md`, and `sourdough_focaccia.md`) are the recipe notes. The site content is in [`recipes.js`](./recipes.js); update the matching recipe there when changing a recipe so the web version stays in sync. Add image files under `images/` and point the recipe's `image` or step image to the relative path.

The pages are built from `index.html`, `recipe.html`, `styles.css`, and `app.js`. Recipe links use a query string, which works directly on GitHub Pages without server configuration.
