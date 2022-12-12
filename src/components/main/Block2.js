import React, { Component } from 'react';
import House from "../../assets/house.png"
class Block2 extends Component {
    render() {
        return (
            <div class="block2">
                <img src={House} alt="house.png" />
                <h1>Real Estate</h1>
                <p>
                    Real estate law is a branch of <br />
                    civil law that covers the right to <br />
                    possess, use, and enjoy land.
                </p>
                <form action="https://ocs.alatoo.edu.kg/login/index.php" target="_blank" />
                <button>Learn More</button>
            </div>
        );
    }
}

export default Block2;