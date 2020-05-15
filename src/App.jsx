import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Compenents/Main';

const rootEl = document.getElementById('root');


const renderApp = () => {
    ReactDOM.render(
        <Main />, rootEl
    );
}

renderApp();


// This checks for local changes and automatically refreshes the browser (hot-reloading)
if (module.hot) {
    module.hot.accept('./components/App.jsx', () => renderApp());
}