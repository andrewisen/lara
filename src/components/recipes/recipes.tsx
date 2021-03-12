import React from "react";
/**
 * Components
 */
import { Promo } from "../promo/promo";
import { Carousel } from "../carousel/carousel";
import { Gallery } from "../gallery/gallery";
/**
 * SCSS
 */
import "./recipes.scss";

interface Props {}
interface State {}
class Recipes extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="recipes-container ">
                <div className="recipes">
                    {/* Promo #1 */}
                    <Promo
                        heading="Finally weekday!"
                        description="The dinner in the middle of the week should be quick to cook, suitable for the whole family and easy to vary."
                        link="The best everyday food"
                        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        img="https://source.unsplash.com/2400x1000/?food/1"
                    />
                    {/* Carousel #1 */}
                    <Carousel
                        heading="Pasta"
                        readMore="More recipes"
                        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        recipes={[
                            {
                                url:
                                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                                text: "Pasta bolognese",
                                img:
                                    "https://source.unsplash.com/345x215/?bolognese",
                            },
                            {
                                url:
                                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                                text: "Pasta carbonara",
                                img:
                                    "https://source.unsplash.com/345x215/?carbonara",
                            },
                            {
                                url:
                                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                                text: "Lasagna",
                                img:
                                    "https://source.unsplash.com/345x215/?lasagna",
                            },
                            {
                                url:
                                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                                text: "Quick green pasta",
                                img:
                                    "https://source.unsplash.com/345x215/?pasta",
                            },
                        ]}
                        relatedRecipesHeading="Similar recipes"
                        relatedRecipes={[
                            {
                                text: "Creamy Salmon Pasta ",
                                url:
                                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                            },
                            {
                                text: "Homemade Pasta",
                                url:
                                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                            },
                            {
                                text: "One Pot Chicken Parmesan Pasta",
                                url:
                                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                            },
                            {
                                text: "Macaroni",
                                url:
                                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                            },
                            {
                                text: "Pasta Salad",
                                url:
                                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                            },
                            {
                                text: "Creamy Pasta ",
                                url:
                                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                            },
                            {
                                text: "Halloumi Pasta",
                                url:
                                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                            },
                        ]}
                    />
                    {/* Carousel #2 */}
                    <Carousel
                        heading="Cookies &amp; Cakes"
                        readMore="More recipes"
                        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        recipes={[
                            {
                                url:
                                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                                text: "Chocolate Chip",
                                img:
                                    "https://source.unsplash.com/345x215/?chocolate,chip",
                            },
                            {
                                url:
                                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                                text: "Swedish Kladdkaka",
                                img:
                                    "https://source.unsplash.com/345x215/?cake/1",
                            },
                            {
                                url:
                                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                                text: "Brownie",
                                img:
                                    "https://source.unsplash.com/345x215/?brownie",
                            },
                            {
                                url:
                                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                                text: "Non-traditional Kladdkaka",
                                img:
                                    "https://source.unsplash.com/345x215/?cake/2",
                            },
                        ]}
                        relatedRecipesHeading="Similar recipes"
                        relatedRecipes={[
                            {
                                text: "Non-swedish kladdkaka",
                                url:
                                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                            },
                            {
                                text: "Christmas Cake",
                                url:
                                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                            },
                            {
                                text: "Chili Cake",
                                url:
                                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                            },
                            {
                                text: "Cake without gluten",
                                url:
                                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                            },
                            {
                                text: "Cake without egg",
                                url:
                                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                            },
                            {
                                text: "Lemon cake",
                                url:
                                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                            },
                            {
                                text: "Chocolate cake",
                                url:
                                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                            },
                        ]}
                    />
                    {/* Promo #2 */}
                    <Promo
                        heading="Empty your fridge"
                        description="Helps you when you want to cook with what you have at home. Enter your ingredients and get good suggestions. Both environmentally and wallet smart!"
                        link="Try it here"
                        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        img="https://source.unsplash.com/2400x1000/?fridge"
                    />
                    <Gallery />
                </div>
            </div>
        );
    }
}

export { Recipes };
