import React, { Component } from 'react';
import Main_igm from './Main_igm';
import Main_item from './Main_item';

class Main_html extends Component {
    render() {
        return (
            <div class="main">
                < Main_item />
                < Main_igm />
            </div>
        );
    }
}

export default Main_html;