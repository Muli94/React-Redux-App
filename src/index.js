import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostNew from './components/post_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


document.addEventListener('DOMContentLoaded', ()=>{
    ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
        <div>
            <Switch>
                <Route exact path='/' component={PostsIndex} />
                <Route path='/posts' component={PostNew} />
            </Switch>
        </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#app')
    )
})