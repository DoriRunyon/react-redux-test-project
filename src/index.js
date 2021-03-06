import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import PokemonSearch from './components/pokemon_search';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
   <div>
    <Switch>
        <Route path="/" component={PokemonSearch} />
    </Switch>
   </div>
  </BrowserRouter>

  </Provider>
  , document.querySelector('.container'));
