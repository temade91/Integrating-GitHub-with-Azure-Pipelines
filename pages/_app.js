import React from 'react';  // 👈 add this
import './globals.css';

export default function App({ Component, pageProps }) {
    return (
        <Component {...pageProps} />
    );
}

