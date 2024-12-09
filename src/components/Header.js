import React from 'react';

function Header() {
return (
    <header style={headerStyle}>
    <h1>"Doces Real"</h1>
    <h3>Debora Rafaelle</h3>
    </header>
);
}

const headerStyle = {
backgroundColor: '#FF1493',
color: '#D8BFD8t',
textAlign: 'center',
padding: '10px',
};

export default Header;
