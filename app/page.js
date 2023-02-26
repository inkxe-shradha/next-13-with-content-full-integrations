import RecipeCard from "@/components/RecipeCard";
import style from "./page.module.css";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENT_SPACE,
  accessToken: process.env.CONTENT_TOKEN,
});

const fetchFromContent = async () => {
  const res = await client.getEntries({
    content_type: "recipe",
  });
  return res.items;
};

const Home = async () => {
  const recipeItems = await fetchFromContent();

  return (
    <div className={style["recipe-list"]}>
      {recipeItems.map((recipe) => (
        <RecipeCard key={recipe.sys.id} item={recipe.fields} />
      ))}
    </div>
  );
};

export default Home;
