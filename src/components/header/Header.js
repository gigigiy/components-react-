import React, { Component } from 'react';
import Block from './Block';
import Head from './Head';

class Header extends Component {
    render() {
        return (
            <div>
                < Head />
                < Block />
            </div>
        );
    }
}

export default Header;