export default function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if(handlers.hasOwnActions(action.type)) {
      return handlers[action.type](state, action)
    }
    return state
  }
}
