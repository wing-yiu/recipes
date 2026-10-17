(() => {
  const recipes = window.recipes || [];
  const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const asset = path => encodeURI(path);
  const categoryLabels = { cake: 'Cake', bread: 'Bread' };
  const card = recipe => `
    <a class="recipe-card" href="recipe.html?recipe=${encodeURIComponent(recipe.id)}" aria-label="Open ${escapeHTML(recipe.title)} recipe">
      <div class="card-image-wrap"><img class="card-image" src="${asset(recipe.image)}" alt="${escapeHTML(recipe.imageAlt)}" style="object-position:${recipe.imagePosition || 'center'}"><span class="card-number">${recipe.number}</span><span class="card-arrow" aria-hidden="true">↗</span></div>
      <div class="card-content"><div class="card-meta"><span>${escapeHTML(recipe.tag)}</span><span>· &nbsp;${escapeHTML(categoryLabels[recipe.category] || 'Recipe')}</span></div><h3>${escapeHTML(recipe.shortTitle || recipe.title)}</h3><p>${escapeHTML(recipe.description)}</p><span class="card-link">View recipe <span aria-hidden="true">→</span></span></div>
    </a>`;

  const grid = document.querySelector('#recipe-grid');
  if (grid) {
    const search = document.querySelector('#search');
    const filters = [...document.querySelectorAll('.filter')];
    const count = document.querySelector('#recipe-count');
    const empty = document.querySelector('#empty-state');
    let activeFilter = 'all';
    const render = () => {
      const query = search.value.trim().toLowerCase();
      const visible = recipes.filter(recipe => (activeFilter === 'all' || recipe.category === activeFilter) && `${recipe.title} ${recipe.description} ${recipe.tag}`.toLowerCase().includes(query));
      grid.innerHTML = visible.map(card).join('');
      count.textContent = `${visible.length} ${visible.length === 1 ? 'recipe' : 'recipes'}`;
      empty.hidden = visible.length !== 0;
    };
    search.addEventListener('input', render);
    filters.forEach(button => button.addEventListener('click', () => {
      activeFilter = button.dataset.filter;
      filters.forEach(item => item.classList.toggle('active', item === button));
      render();
    }));
    document.addEventListener('keydown', event => {
      if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) { event.preventDefault(); search.focus(); }
    });
    render();
  }

  const detail = document.querySelector('#recipe-detail');
  if (detail) {
    const recipe = recipes.find(item => item.id === new URLSearchParams(location.search).get('recipe'));
    if (!recipe) {
      document.title = 'Recipe not found — At the Table';
      detail.innerHTML = '<div class="not-found"><p class="eyebrow">A little mix-up</p><h1>That recipe is not in this box.</h1><a class="text-link" href="index.html#collection">Back to all recipes →</a></div>';
      return;
    }
    document.title = `${recipe.title} — At the Table`;
    document.querySelector('meta[name="description"]').content = recipe.description;
    const list = values => values.map(value => `<li>${escapeHTML(value)}</li>`).join('');
    const ingredientMarkup = recipe.ingredientGroups
      ? recipe.ingredientGroups.map(group => `<li class="ingredient-group-heading">${escapeHTML(group.title)}</li>${list(group.items)}`).join('')
      : list(recipe.ingredients);
    const steps = recipe.steps.map((step, index) => `<li class="step-item"><span class="step-number">${String(index + 1).padStart(2, '0')}</span><div class="step-copy"><p>${escapeHTML(step.text)}</p>${step.image ? `<figure class="step-image"><img src="${asset(step.image)}" alt="${escapeHTML(step.alt || '')}" loading="lazy"></figure>` : ''}</div></li>`).join('');
    const references = recipe.references.map(ref => `<a href="${escapeHTML(ref.url)}" target="_blank" rel="noreferrer">${escapeHTML(ref.label)} <span aria-hidden="true">↗</span></a>`).join('');
    detail.innerHTML = `
      <section class="detail-hero"><a class="back-link" href="index.html#collection">← &nbsp;All recipes</a><div class="detail-heading"><p class="eyebrow">Recipe No. ${recipe.number} <span class="eyebrow-dot">·</span> ${escapeHTML(recipe.tag)}</p><h1>${escapeHTML(recipe.title)}</h1><p class="detail-intro">${escapeHTML(recipe.description)}</p></div><div class="detail-hero-image"><img src="${asset(recipe.image)}" alt="${escapeHTML(recipe.imageAlt)}" style="object-position:${recipe.imagePosition || 'center'}"></div></section>
      <div class="detail-layout"><aside class="ingredients-panel"><p class="eyebrow">Gather around</p><h2>Ingredients</h2><p class="panel-note">A short list for a very good thing.</p><ul class="ingredient-list">${ingredientMarkup}</ul><div class="ingredient-foot">✳ &nbsp;${escapeHTML(recipe.yieldLine || 'Makes one lovely cake')}</div></aside>
      <article class="method"><div class="method-heading"><p class="eyebrow">Take your time</p><h2>How to make it</h2></div><ol class="step-list">${steps}</ol>${recipe.tips?.length ? `<section class="tips-panel"><span class="tips-star" aria-hidden="true">✳</span><div><p class="eyebrow">A few little notes</p><h2>Tips from my kitchen</h2><ul>${list(recipe.tips)}</ul></div></section>` : ''}${references ? `<section class="references"><p class="eyebrow">Keep exploring</p><h2>Sources & inspiration</h2><div class="reference-links">${references}</div></section>` : ''}</article></div>
      <nav class="detail-bottom"><a href="index.html#collection">← Back to the recipe box</a><span>Made slowly, shared gladly.</span></nav>`;
  }
})();
