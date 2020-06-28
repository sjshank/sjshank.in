import React from 'react';

const ErrorHandler = (props) => {
    return (
        <div className="container mt-2">
            <div className="alert alert-danger error-cls" role="alert">
                <i className="fa fa-exclamation-triangle fa-1x pr-1" aria-hidden="true"></i>Something went wrong ! Please try after sometime.
            </div>
        </div>
    );
};

export default ErrorHandler;