import React, { Component } from 'react';
import ArrowImage from "../../assets/arrow.png"

class Arrow extends Component {
    render() {
        return (
            <div class="arrow">
                <img src={ArrowImage} alt="arrow.png" />
            </div>
        );
    }
}

export default Arrow;