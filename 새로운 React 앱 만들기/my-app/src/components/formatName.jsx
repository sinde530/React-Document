import React from 'react';

function FormatName() {
    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }

    const user = {
        firstName: 'Harper',
        lastName: 'Perez'
    };

    const element = (
        <h1>
            Hello, {formatName(user)}!
        </h1>
    );
    return (
        <div>
            {element}
        </div>
    )
}

export default FormatName;
