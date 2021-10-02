import Recipe from "./Recipe";
import React from 'react';

export default function Menu({ recipes }) {
    return (
        <article>
            <header>
                <h1>Delicious Recipes</h1>
            </header>

            <div className="recipies">
                {
                    recipes.map((recipe, i) => (<Recipe key={i} {...recipe} />))
                }
            </div>
        </article>
    );
}