import React, { Component } from 'react';

import '../../assets/sass/components/image/image.scss'

class Image extends Component {
    render() {
    return (
    <div>
        <div className="header-icon">
            <div className="header-icon_centered">
                <a href="https://www.linkedin.com/in/giotto-thays/">
                    <img src={require('../../assets/images/icon.jpg')} alt="Thays Giotto" className="header-icon-img"/>
                </a>
            </div>
            <h1 className="header-icon_heading">thays giotto</h1>
        </div>
        <div className="header-heading_centered">
            {/* <h2 className="header-heading_centered">Front-End Developer</h2> */}
        </div>
    </div>
    )}
}

export default Image;
