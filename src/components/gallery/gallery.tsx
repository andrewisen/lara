import React from "react";
/**
 * Plugins
 */
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
/**
 * SCSS
 */
import "./gallery.scss";
/**
 * Data
 */
import { dummyNames } from "./dummyNames";
interface Props {}
interface State {}
class Gallery extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const getDummyTime = () => Math.ceil(Math.random() * 10) * 15;
        const getDummyRating = () => Math.ceil(Math.random() * 10);
        const getDummyReviews = () => Math.floor(Math.random() * 200);
        const getDummyName = () =>
            dummyNames[Math.floor(Math.random() * dummyNames.length)];

        const getDummyRecipies = (_recipies: number = 9) => {
            const recipies = [];
            for (let index = 0; index < _recipies; index++) {
                const name = getDummyName();
                recipies.push(getDummyRecipie(name, index));
            }
            return recipies;
        };
        const getDummyRecipie = (
            name: string = "Lorem Ipsum",
            key: number = 0
        ) => (
            <li className="recipe" key={key}>
                <a
                    className="recipe-link"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                >
                    <div className="recipe-image">
                        <picture className="picture">
                            <LazyLoadImage
                                alt={name}
                                effect="blur"
                                wrapperClassName="image"
                                className="image"
                                src={`https://source.unsplash.com/345x215/?food/${key}`}
                            />
                        </picture>
                    </div>
                    <div className="recipe-information">
                        <h3 className="recipe-information-heading">
                            <span className="heading">{name}</span>
                        </h3>
                        <div className="recipe-information-text">
                            <span className="preparation-time">
                                <img
                                    className="preparation-time-icon"
                                    src="https://www.arla.se/UI/img/prep-icon.6fbeaab6.svg"
                                    alt="preparation icon"
                                />
                                {getDummyTime()}+ min
                            </span>
                            <div className="recipe-rating">
                                <div className={`rating-${getDummyRating()}`}>
                                    <div className="wrapper">
                                        <div className="stars"></div>
                                    </div>
                                </div>
                                <span className="info">
                                    {getDummyReviews()} reviews
                                </span>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        );
        return <ul className="gallery">{getDummyRecipies(1000)}</ul>;
    }
}

export { Gallery };
