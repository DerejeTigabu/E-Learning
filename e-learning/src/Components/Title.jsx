import React from 'react';

const Title = ({ text, classes }) => {
    return (
        <h1 className={classes}>
            {text}
        </h1>
    );
};

export default Title;