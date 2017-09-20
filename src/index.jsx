import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostNew from './components/post_new';
import PostShow from './components/post_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route path="/posts/new" component={PostNew} />
            <Route path="/posts/:id" component={PostShow} />
            <Route path="/" component={PostsIndex} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>,
    document.querySelector('#app'),
  );
});
