import React from "react";

class FeaturesItem extends React.Component {
    render() {
        const { icon, alt, title, text } = this.props
        return (
            <div className="feature-item">
                <img src={icon} alt={alt} className="feature-icon" />
                <h3 className="feature-item-title">{title}</h3>
                <p>
                    {text}
                </p>
            </div>
        )
    }
}

export default FeaturesItem;