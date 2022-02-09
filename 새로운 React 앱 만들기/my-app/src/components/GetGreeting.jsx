import React from 'react';
import FormatName from './formatName';

function GetGreeting(user) {
    if (user) {
        return (
            <>
                <h1>{FormatName(user)}</h1>
                <h1>Hello, Stranger.</h1>
                {/* <Welcome name = "Sara"/> */}
            </>
        )
    }
}

export default GetGreeting;
