import React, { Component } from 'react';
import Face from "../../assets/face.png"
import Link from "../../assets/link.png"
import Twit from "../../assets/twit.png" 

class Social extends Component {
    render() {
        return (
            <div class="social">
                <div>
                    <img src={Face} alt="face.png" />
                </div>
                <div>
                    <img src={Link} alt="link.png" />
                </div>
                <div>
                    <img src={Twit} alt="twit.png" />
                </div>
            </div>
        );
    }
}

export default Social;