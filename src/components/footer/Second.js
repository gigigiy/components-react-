import React, { Component } from 'react';
import Button from "../../assets/button.png"

class Second extends Component {
    render() {
        return (
            <div class="second">
                <h1>
                    Get legal news, advice, and <br/>
                    best practices delivered to your <br/>
                    inbox.
                </h1>
                
                    {/* <!-- <div class="button"></div> --> */}
                    <form action="https://ocs.alatoo.edu.kg/login/index.php" target="_blank"/>
                    <button>Email Address</button>  
                    <div class="image">
                    
                    <img src={Button} alt="button.png"/>
                    </div>

                </div>
        );
    }
}

export default Second;