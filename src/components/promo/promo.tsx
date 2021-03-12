import React from "react";
/**
 * Plugins
 */

/**
 * SCSS
 */
import "./promo.scss";
/**
 * Images
 */

interface Props {
    [key: string]: string;
}
interface State {
    [key: string]: boolean;
}
class Promo extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { heading, description, link, url, img } = this.props;
        return (
            <div className="promo">
                <div className="promo-text">
                    <div className="promo-heading">
                        <strong>
                            <a
                                className="top-promo-link"
                                href={url}
                                title={heading}
                            >
                                {heading}
                            </a>
                        </strong>
                    </div>
                    <div className="promo-description">
                        <p>{description}</p>
                    </div>
                    <div className="promo-link">
                        <a className="" href={url} title="Äntligen vardag!">
                            {link}
                        </a>
                    </div>
                </div>
                <div className="promo-image">
                    <picture>
                        <img src={img} alt="" />
                    </picture>
                </div>
            </div>
        );
    }
}

export { Promo };
