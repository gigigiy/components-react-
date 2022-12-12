import React, { Component } from 'react';

class Main_item extends Component {
    render() {
        return (
            <div class="main_item">
                <h1>
                    Corporate Legal <br />
                    Representation
                </h1>
                <p>
                    We understand the difficulties and stress that your <br />
                    legal issue bring.Our team is committed to <br />
                    providing you with the individal attention,<br />
                    communication, and dedicate you deserve.
                </p>
                <button class="btn" onclick="alert('hello')">Request Consultation</button>
            </div>
        );
    }
}

export default Main_item;