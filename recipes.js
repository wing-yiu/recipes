/* Recipe content mirrors the Markdown files in this repository. */
window.recipes = [
  {
    id: 'pandan-cake', title: 'Pandan Chiffon Cake', shortTitle: 'Pandan Chiffon', category: 'cake', tag: 'A little patience', number: '01',
    description: 'Cloud-soft chiffon scented with fresh pandan and coconut. A gentle green cake for slow afternoons.', yieldLine: 'Makes one lovely cake',
    image: 'images/pandancake/invert_cool.jpg', imageAlt: 'Pandan chiffon cake cooling upside down in its tin', imagePosition: 'center 48%',
    ingredients: ['40g cake flour', '1/8 tsp salt', '3/4 tsp baking powder', '2 eggs', '35g sugar (10g for cake batter, 25g for meringue)', '30ml pandan juice (made from 7 pandan leaves)', '13g oil', '25ml coconut milk', 'Pinch of cream of tartar, lemon juice, or vinegar'],
    steps: [
      { text: 'Make pandan juice from the pandan leaves. Cut the leaves into small pieces, blend with 3 tbsp of water, then strain and set the juice aside.', image: 'images/pandancake/pandan_juice.jpg', alt: 'Fresh pandan juice' },
      { text: 'Prepare the cake batter. Sift together the cake flour, salt, and baking powder. Separate the egg yolks and whites into two bowls. Whisk the yolks with 10g sugar and the oil, then whisk in the coconut milk and pandan juice. Gradually add the flour mixture and whisk until smooth.' },
      { text: 'Prepare the meringue. This is a good time to preheat the oven to 165°C. Beat the egg whites until frothy. Add the cream of tartar, lemon juice, or vinegar and whip until whitish. Gradually add the remaining sugar while beating until stiff peaks form.', image: 'images/pandancake/meringue.jpg', alt: 'Whipped meringue' },
      { text: 'Gently fold the meringue into the cake batter until evenly mixed, taking care not to knock out the air.', image: 'images/pandancake/folding.jpg', alt: 'Folding meringue into pandan cake batter' },
      { text: 'Pour the batter into an UNGREASED chiffon cake pan and smooth the surface. Gently drop the pan onto the counter several times to pop large bubbles.' },
      { text: 'Bake for 30 minutes. Check around the 25-minute mark; if needed, lower the temperature to 150°C. Avoid opening the oven door too early or the cake may deflate.' },
      { text: 'Remove the cake from the oven and drop the pan onto the counter several times to prevent shrinkage. Invert the pan to cool.' , image: 'images/pandancake/invert_cool.jpg', alt: 'Chiffon cake inverted to cool' },
      { text: 'Let the cake cool completely in the pan for 1–2 hours before removing it.' }
    ],
    tips: ['It is easier to separate egg yolks when the eggs are cold.', 'Use room-temperature eggs and coconut milk for a fluffier texture.'],
    references: [{ label: 'Original recipe', url: 'https://whattocooktoday.com/pandan-chiffon-cake.html' }, { label: 'Pandan juice recipe', url: 'https://whattocooktoday.com/how-to-make-pandan-juice-and-pandan-extract.html' }]
  },
  {
    id: 'burnt-cheesecake', title: 'Burnt Cheesecake', shortTitle: 'Burnt Cheesecake', category: 'cake', tag: 'Deeply golden', number: '02',
    description: 'Creamy in the middle, boldly bronzed on top, and wonderfully simple to bring together.', yieldLine: 'Makes one 5-inch cake',
    image: 'images/cheesecake.jpg', imageAlt: 'A homemade burnt cheesecake', imagePosition: 'center center',
    ingredients: ['226g cream cheese (Philadelphia is the best!)', '2 eggs', '30g sugar', '200ml whipping cream', '15g cake flour or cornstarch', '1/2 tsp vanilla extract', '1/2 tsp apple cider vinegar'],
    steps: [
      { text: 'Preheat the oven to 230°C.' },
      { text: 'Blend all the ingredients together until smooth.' },
      { text: 'Drop the pan onto the counter to remove air bubbles from the batter.' },
      { text: 'Transfer to a 5-inch cake pan and bake at 230°C for 22–25 minutes.' }
    ],
    tips: ['Blend the eggs, flour, and sugar first, followed by the cheese, then the cream and remaining ingredients.', 'Do not cut the cake while it is warm, or oil may ooze out.', 'Whipping cream gives a lighter texture than heavy cream.'],
    references: [{ label: 'Basque Burnt Cheesecake', url: 'https://norecipes.com/burnt-basque-cheesecake/' }]
  },
  {
    id: 'banana-cake', title: 'Banana Cake', shortTitle: 'Banana Cake', category: 'cake', tag: 'A cosy classic', number: '03',
    description: 'A tender, buttery loaf that makes excellent use of ripe bananas. Lovely with tea, even better the next day.', yieldLine: 'Makes one lovely loaf cake',
    image: 'images/bananacake_thermomix_recipe.png', imageAlt: 'Banana cake recipe reference', imagePosition: 'center center',
    ingredients: ['125g banana', '2 eggs (125g)', '50g sugar', '100g butter, melted', '90g plain flour or cake flour', '1/2 tsp baking soda', '1/2 tsp baking powder'],
    steps: [
      { text: 'Preheat the oven to 150°C.' },
      { text: 'Melt the butter in the microwave for about 30 seconds. Microwave intermittently on low heat and cover the container to avoid the cold butter from exploding in the microwave.' },
      { text: 'Whisk the eggs, sugar, and melted butter together evenly.' },
      { text: 'Add the mashed bananas and whisk evenly.' },
      { text: 'Add the flour, baking soda, and baking powder. Whisk until evenly combined.' },
      { text: 'Transfer the batter to a loaf tin and bake at 150°C for 25–30 minutes. The cake is ready when a skewer inserted in the centre comes out clean.' }
    ],
    tips: ['Use room-temperature eggs for a fluffier texture.', 'Try adding walnuts or chocolate chips on top.'],
    references: [{ label: 'Banana Cake — Rasa Malaysia', url: 'https://rasamalaysia.com/banana-cake/' }]
  },
  {
    id: 'sourdough-focaccia', title: 'Sourdough Focaccia', shortTitle: 'Sourdough Focaccia', category: 'bread', tag: 'Overnight rise', number: '04',
    description: 'Olive-oil rich focaccia with a pillowy centre, crisp golden base, and a simple rosemary and sea-salt top.', yieldLine: 'Makes one 9 × 13 in focaccia',
    image: 'images/focaccia.svg', imageAlt: 'Illustration of golden focaccia topped with rosemary and tomatoes', imagePosition: 'center center',
    ingredientGroups: [
      { title: 'Feed the starter', items: ['25g leftover sourdough starter', '50g bread flour', '50g water'] },
      { title: 'Dough', items: ['450g bread flour', '325g water', '100g active sourdough starter', '25g extra-virgin olive oil', '10g salt'] },
      { title: 'Pan & topping', items: ['25g extra-virgin olive oil, for the pan', '25g extra-virgin olive oil, for dimpling', '5g salt (about 1 tsp)', '1g dried rosemary (about 2 tsp)'] }
    ],
    steps: [
      { text: 'Feed the starter. Mix the leftover starter with the bread flour and water. Cover loosely and leave at room temperature for 6–8 hours, until doubled and bubbly.' },
      { text: 'Mix the dough. Stir the active starter and salt into the water until the starter breaks up. Add the flour and mix until no dry flour remains. Cover and rest for 30 minutes.' },
      { text: 'Work in the olive oil. Add 25g oil and squeeze it through the dough with your hands until it is absorbed and the dough gathers together.' },
      { text: 'Build strength with three sets of stretch and folds. For the first set, stretch and fold the dough around its edges 10–20 times, until it starts to resist. Cover and rest 30 minutes. Repeat a gentler set, rest another 30 minutes, then do one final set. Turn the dough smooth-side up.' },
      { text: 'Bulk ferment overnight. Cover the bowl and leave the dough at room temperature for 6–8 hours, or until doubled. A cooler kitchen may take longer.' },
      { text: 'Oil a 9 × 13 in non-stick metal pan with 25g olive oil. Transfer the dough to the pan, turn it to coat both sides, then leave it smooth-side up. Gently stretch it into a rectangle; it can finish filling the pan during the next rise.' },
      { text: 'Cover and proof for 3–5 hours, until puffy and spread to the edges of the pan. It may need 6–8 hours depending on room temperature. If you are not ready to bake, refrigerate the proofed dough for up to 12 hours.' },
      { text: 'Heat the oven to 232°C (450°F) about 30 minutes before baking. Pour the remaining 25g olive oil over the dough. Oil your fingertips and gently press dimples down to the pan without tearing the dough.' },
      { text: 'Scatter the salt and dried rosemary over the top. Bake on the middle rack for 30–35 minutes, until deeply golden.' },
      { text: 'Lift the focaccia out of the pan onto a wire rack. Let it cool for at least 30 minutes before slicing.' }
    ],
    tips: ['The rise times are guides; follow the dough. It should double during the first rise and look puffy and fill the pan after the final proof.', 'Use a generous, even coating of olive oil in the pan for a crisp, golden base.', 'After the final proof, the covered pan can wait in the fridge for up to 12 hours before topping and baking.', 'For other toppings, try olives, sun-dried tomatoes, or fresh herbs.'],
    references: [{ label: 'Watch: The BEST Sourdough Focaccia Tutorial — Grant Bakes', url: 'https://youtu.be/Yn07jD7q4a0' }, { label: 'Grant Bakes written recipe', url: 'https://grantbakes.com/easy-sourdough-focaccia/' }]
  }
];
