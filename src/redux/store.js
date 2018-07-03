import {compose, applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';

const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__})
const navigationMiddleware = createReactNavigationReduxMiddleware('root', state => state.nav)

const store = createStore(reducers, {}, compose(
  applyMiddleware(
    thunkMiddleware,
    navigationMiddleware,
    loggerMiddleware,
    )
  )
)

export default store
