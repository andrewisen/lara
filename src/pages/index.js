import React from "react";
import { Header } from "../components/header/header.tsx";
import { Hero } from "../components/hero/hero.tsx";
import { Recipes } from "../components/recipes/recipes.tsx";
import "../styles/lara.scss";
export default function About() {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <Recipes />
            </main>
        </div>
    );
}
