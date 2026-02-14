import React from 'react';

const bearImage = 'https://i.pinimg.com/1200x/8a/62/e6/8a62e60b8cbe40550e3d1e323758d3ff.jpg';

const WelcomeDialog = () => {
    return (
        <div>
            <h1>Welcome!</h1>
            <img src={bearImage} alt="Bear" />
        </div>
    );
};

export default WelcomeDialog;