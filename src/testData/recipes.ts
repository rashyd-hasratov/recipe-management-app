import { Recipe } from "../types/Recipe";

export const recipes: Recipe[] = [
  {
    id: String(1),
    title: 'Fried eggs',
    description: 'The easiest dish to prepare, which does not require special culinary skills, but satisfies hunger well.',
    ingredients: 'eggs, vegetable oil, sault',
    instructions: 'In a bowl or other container, beat the eggs with a fork or whisk. You can add salt now or after the mass goes to the pan. Heat the oil in a pan over low heat. Pour the beaten eggs into it. When the mass begins to seize on both sides, use a spatula from the middle of the circle line to its center in several places. Eggs will gather in lumps. Continue slowly and do not overmix the eggs. Due to this, the bun turns out to be heterogeneous, unlike an omelet. The finished bun should be slightly liquid.',
    imageUrl: 'https://grillonadime.com/wp-content/uploads/2022/05/blackstone-fried-eggs-5-2-500x375.jpg',
  },
  {
    id: String(2),
    title: 'Buckwheat',
    description: 'Buckwheat porridge is useful, tasty, dietary, prepared simply.',
    ingredients: 'buckwheat, water, oil, sault',
    instructions: 'Pour buckwheat groats with cold water 1:2.5 (buckwheat:water). Optional! - add salt, oil or butter, fried onions, 1-2 dried porcini mushrooms ground in a coffee grinder, or anything else that your kitchen is rich in and with which, it is predicted, the finished buckwheat porridge will taste. Cover, bring to a boil, reduce the heat to a minimum (you can simply turn off the electric stove, and leave the pot with buckwheat on the hot burner) and keep it for another 10 minutes. under the lid',
    imageUrl: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325042/dried-buckwheat-grains-on-a-wooden-spoon.jpg',
  }
];