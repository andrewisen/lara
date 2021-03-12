import React from "react";
import Promo from "../promo/promo";
/**
 * Plugins
 */

/**
 * SCSS
 */
import "./carousel.scss";
/**
 * Images
 */

interface Recipe {
    [key: string]: string;
}
interface Props {
    [key: string]: string | Recipe[];
}
interface State {}
class Carousel extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const {
            heading,
            readMore,
            url,
            recipes,
            relatedRecipesHeading,
            relatedRecipes,
        } = this.props;

        return (
            <div className="carousel">
                <div className="recipes-container">
                    <div className="recipes">
                        <div className="heading">
                            <a
                                href={url as string}
                                title="Pasta"
                                className="heading-link"
                                data-tags="pasta"
                            >
                                {heading}
                            </a>
                        </div>
                        <div className="gallery">
                            {(recipes as Recipe[]).map((recipe: Recipe) => (
                                <div className="recipe" key={`${recipe.text}`}>
                                    <a href={`${recipe.url}`} className="link">
                                        <picture className="recipe-picture">
                                            <img
                                                src={`${recipe.img}`}
                                                className="recipe-image"
                                                alt={`${recipe.text}`}
                                            />
                                        </picture>
                                        <strong>{recipe.text}</strong>
                                    </a>
                                </div>
                            ))}
                        </div>
                        <a
                            href="{url as string}"
                            title="Pasta"
                            className="recipes-button"
                            data-type="button"
                            data-tags="pasta"
                        >
                            {readMore}
                        </a>
                    </div>
                    <div className="related-recipes">
                        <strong className="related-recipes-heading">
                            {relatedRecipesHeading}
                        </strong>
                        <ul className="related-recipes-list">
                            {(relatedRecipes as Recipe[]).map(
                                (recipe: Recipe) => (
                                    <li
                                        key={recipe.text}
                                        className="related-recipes-list-item"
                                    >
                                        <a
                                            href={`${recipe.url}`}
                                            className="related-recipes-list-item-link"
                                        >
                                            {recipe.text}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export { Carousel };
