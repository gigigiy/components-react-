import React, { Component } from 'react';
import Text from './Text';
import Man from "../../assets/man.png"

class Main_html4 extends Component {
    render() {
        return (
            <div class="man">
                <img src={Man} alt="man.png" width="139%" />
                < Text />
            </div>
        );
    }
}

export default Main_html4;