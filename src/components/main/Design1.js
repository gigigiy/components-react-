import React, { Component } from 'react';
import Image1 from "../../assets/1.png"

class Design1 extends Component {
    render() {
        return (
            <div class="design1">
                <img src={Image1} alt="1.png" />  
                <p>
                    December 13, 2020
                </p>
                <h2>
                    12 Things About Web Design <br />
                    Your Boss Wants To Know
                </h2>
                <form action="https://ocs.alatoo.edu.kg/login/index.php" target="_blank" />
                <button>Learn More</button>
        </div>
        );
    }
}

export default Design1;