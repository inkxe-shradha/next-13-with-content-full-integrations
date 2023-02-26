"use client";

import Image from "next/image";
import Link from "next/link";

const RecipeCard = ({ item }) => {
  const {
    nonvegItems: title,
    slug,
    thumbnail,
    featuredImage,
    intgredients,
    cookingTime,
    methods,
  } = item;
  return (
    <div className="card py-2">
      <div className="featured">
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          alt={thumbnail.fields.file.title}
          width={1200}
          height={200}
        />
      </div>
      <div className="content">
        <div className="info">
          <h4 className="font-bold leading-tight text-gray-900 font-2xl">
            {title}
          </h4>
          <p>Takes approximate {cookingTime} mins to make.</p>
        </div>
        <div className="actions">
          <Link
            className="text-white bg-magneto-pink py-[16px] px-[24px]"
            href={`/recipes/${slug}`}
          >
            Cook this
          </Link>
        </div>
      </div>
      <style jsx>{`
        .card {
          transform: rotateZ(-1deg);
          display: block;
        }
        .featured {
          width: 100%;
        }
        .content {
          background: #fff;
          box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
          margin: 0;
          position: relative;
          top: -40px;
          left: -10px;
        }
        .info {
          padding: 16px;
        }
        .info h4 {
          margin: 4px 0;
          text-transform: uppercase;
        }
        .info p {
          margin: 0;
          color: #777;
        }
        .actions {
          margin-top: 20px;
          display: flex;
          justify-content: flex-end;
        }
      `}</style>
    </div>
  );
};

export default RecipeCard;
