import React, { use } from "react";
import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from "../slug.module.css";
const client = createClient({
  space: process.env.CONTENT_SPACE,
  accessToken: process.env.CONTENT_TOKEN,
});

export const fetchFromContent = async (slug) => {
  const res = await client.getEntries({
    content_type: "recipe",
    "fields.slug": slug,
  });
  return res.items[0].fields;
};

export const generateStaticParams = async () => {
  const res = await client.getEntries({
    content_type: "recipe",
  });

  return res.items.map((item) => {
    return { slug: item.fields.slug };
  });
};

const RecipeDetails = (params) => {
  const itemsList = use(fetchFromContent(params.slug));
  const { featuredImage, title, cookingTime, ingredients, methods } = itemsList;
  return (
    <div className={styles.content}>
      {itemsList ? (
        <>
          <div className={styles.banner}>
            <Image
              src={`https:${featuredImage.fields?.file?.url}`}
              width={900}
              height={300}
              style={{
                width: "100%",
              }}
              alt={featuredImage.filed?.title}
            />
          </div>
          <div className={styles.info}>
            <p>Take about {cookingTime} min to Cook.</p>
            <h3>Ingredients:</h3>
            {ingredients.map((ing) => (
              <span key={ing}> {ing} </span>
            ))}
          </div>
          <div className={styles.methods}>
            <h3>Methods:</h3>
            <div>{documentToReactComponents(methods)}</div>
          </div>
        </>
      ) : (
        <strong>Loading...</strong>
      )}
    </div>
  );
};

export default RecipeDetails;
