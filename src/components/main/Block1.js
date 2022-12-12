import React, { Component } from 'react';
import WWW from "../../assets/www.png"
class Block1 extends Component {
    render() {
        return (
            <div class="block1">
                <img src={WWW} alt="www.png" />
                    <h1>Intellectual Property</h1>
                    <p>
                        Intellectual Property law deals with <br />
                        laws to protect creators and <br />
                        owners of inventions, writing, <br />
                        music, designs and other works.
                    </p>
                    <form action="https://ocs.alatoo.edu.kg/login/index.php" target="_blank" />
                    <button>Learn More</button>
            </div>
        );
    }
}

export default Block1;