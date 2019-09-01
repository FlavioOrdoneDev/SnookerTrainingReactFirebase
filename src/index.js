import React from 'react';
import ReactDOM from 'react-dom';

// import './Resources/css/app.css';

import { BrowserRouter } from 'react-router-dom';
import Rotas from './rotas';
import './firebase';

const App = () => {
    return (
        <BrowserRouter>
            <Rotas/>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));