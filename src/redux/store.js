import {compose, applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers'

const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__})

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    )
  )
  return createStore(reducers, initialState, enhancer)
}

export default configureStore({})
