import React, { Component } from 'react';
import First from './First';
import Second from './Second';
import Social from './Social';

class Finish extends Component {
    render() {
        return (
            <div class="finish">
                < First />
                < Second />
                < Social />
            </div>
        );
    }
}

export default Finish;