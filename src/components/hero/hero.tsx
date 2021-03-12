import React from "react";
/**
 * Plugins
 */
import { StaticImage } from "gatsby-plugin-image";
/**
 * SCSS
 */

import "./hero.scss";

class Hero extends React.Component<{}, { [key: string]: boolean }> {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section className="hero-section text-white ">
                <div
                    className="hero-background"
                    style={{
                        backgroundImage: `url(https://source.unsplash.com/2400x1000/?food)`,
                    }}
                ></div>

                <div className="hero-content-container ">
                    <div className="hero-content">
                        <h1>
                            <span className="hero-title">Recipies</span>
                            <strong className="hero-subtitle text-uppercase">
                                Recipies we love
                            </strong>
                        </h1>

                        <span className="hero-text">
                            Recipes for all occasions! Use the search function
                            below or the filter menu to easily find recipes
                            based on what you have at home. Write one word at a
                            time and combine different suggested categories for
                            best results.
                        </span>
                    </div>
                </div>
            </section>
        );
    }
}

export { Hero };
