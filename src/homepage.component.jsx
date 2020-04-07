import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Electric Guitars</h1>
                    <span className="subtitle">Shop NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Headphones</h1>
                    <span className="subtitle">Shop NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Laptops</h1>
                    <span className="subtitle">Shop NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Acoustic Guitars</h1>
                    <span className="subtitle">Shop NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Books</h1>
                    <span className="subtitle">Shop NOW</span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;