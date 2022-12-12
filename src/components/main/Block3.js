import React, { Component } from 'react';
import Book from "../../assets/book.png"

class Block3 extends Component {
    render() {
        return (
            <div class="block3">
                <img src={Book} alt="book.png" />
                <h1>Tax Law</h1>
                <p>
                    Tax law cover income, corporate,<br />
                    excise, luxury, estate and <br />
                    property taxes, to name a few. <br />
                </p>
                <form action="https://ocs.alatoo.edu.kg/login/index.php" target="_blank" />
                <button>Learn More</button>
            </div>
        );
    }
}

export default Block3;