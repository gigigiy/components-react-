import React, { Component } from 'react';
import Const from './Const';
import List from './List';

class Block extends Component {
    render() {
        return (
            <div class="block">
                < List />
                < Const />
            </div>
        );
    }
}

export default Block;