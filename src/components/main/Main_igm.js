import React, { Component } from 'react';
import Cube from "../../assets/cube.png"
import Building from "../../assets/building.png"

class Main_igm extends Component {
    render() {
        return (
            <div class="main_igm">
                <img class="image1" src={Cube} alt="cube.png" />
                <img class="image2" src={Building} alt="building.png" />
            </div>
        );
    }
}

export default Main_igm;