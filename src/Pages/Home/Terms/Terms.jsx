import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi id suscipit odio ipsa rem eligendi porro cumque magnam officia dolore. Labore alias laborum id odit commodi nihil sapiente voluptates vel.</p>
            <p>Go back to <Link to='/register'>Register</Link> </p>
        </div>
    );
};

export default Terms;