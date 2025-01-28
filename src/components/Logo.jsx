import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
        {/* Les images importées depuis la balise img sont accessibles dans "public" */}
            <img src="./logo-3.png" alt="logo prisme" />
            <h3>World</h3>
        </div>
    );
};

export default Logo;