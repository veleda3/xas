import {compose, applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers'
import reducers from './reducers'

const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__})
const navigationMiddleware = createReactNavigationReduxMiddleware('root', state => state.nav)

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      navigationMiddleware,
      loggerMiddleware,
    )
  )
  return createStore(reducers, initialState, enhancer)
}

export default configureStore({})
