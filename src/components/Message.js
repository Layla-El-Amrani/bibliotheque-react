import React from 'react';

const Message = ({ type, text }) => {
    const alertClass = `alert ${type === 'success' ? 'alert-success' : 'alert-danger'} alert-dismissible fade show`;

    return (
        <div className={alertClass} role="alert">
            {text}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
};

export default Message;
