import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';
import App from './components/app';
import PostsIndex from './components/posts_index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


document.addEventListener('DOMContentLoaded', ()=>{
    ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Route path='/' component={PostsIndex} />
        </BrowserRouter>
    </Provider>,
    document.querySelector('#app')
    )
})