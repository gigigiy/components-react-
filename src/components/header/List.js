import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <div class="list">
                <h2>McKinley</h2>
                <ol class="nav">
                    <li>Service</li>
                    <li>About</li>
                    <li>Article</li>
                    <li>Contact</li>
                </ol>
            </div>
        );
    }
}

export default List;