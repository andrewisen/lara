import React from "react";
/**
 * Plugins
 */
import { StaticImage } from "gatsby-plugin-image";
/**
 * SCSS
 */
import "../../styles/lara.scss";
import "./header.scss";
/**
 * Dummy Data
 */
const links: { [key: string]: string }[] = [
    {
        text: "Discover",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        text: "Recipies",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        text: "Products",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        text: "Sustainability",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
        text: "About Lara",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];

class Header extends React.Component<{}, { [key: string]: number | boolean }> {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.state = { showMobileHeader: false };
    }
    handleOnClick() {
        this.setState({
            showMobileHeader: this.state.showMobileHeader ? false : true,
        });
    }
    /**
     * https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
     */
    hideHeaderOnScroll() {
        const headerHeight: number = 60;
        if (typeof window !== `undefined`) {
            var prevScrollpos = window.pageYOffset;

            window.onscroll = function () {
                var currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos) {
                    document.getElementById("header").style.top = "0";
                } else {
                    document.getElementById(
                        "header"
                    ).style.top = `-${headerHeight}px`;
                }
                prevScrollpos = currentScrollPos;
            };
        }
    }
    render() {
        this.hideHeaderOnScroll();
        const showMobileHeader = this.state.showMobileHeader;
        /**
         * Simple unordered list with links
         */
        const navbar = (
            <nav className="navbar">
                <button className="mobile-button" onClick={this.handleOnClick}>
                    {showMobileHeader ? "≡" : "x"}
                </button>
                <ul className="navbar-links">
                    {showMobileHeader === false
                        ? links.map((link) => (
                              <li key={link.text} className="navbar-link">
                                  <a className="link" href={`${link.url}`}>
                                      {link.text}
                                  </a>
                              </li>
                          ))
                        : null}
                </ul>
            </nav>
        );

        return (
            <header id="header" className="header flex">
                <a className="header-logo" href="/">
                    <StaticImage src="../../images/logo.svg" alt="Lara" />
                </a>
                {navbar}
            </header>
        );
    }
}

export { Header };
