const initialState = {
    orders: [],
    fetching: false,
    fetched: false,
    error: null
}

export default (state = initialState, action) => {
  switch (action.type) {

  case "FETCH_ORDERS":
    return { ...state, fetching: true }

  case "FETCH_ORDERS_REJECTED":
    return { ...state, fetching: false, error: action.payload }

  case "FETCH_ORDERS_FULFILLED":
    return { ...state, fetching: false, fetched: true, orders: action.payload }    

  case "ADD_ORDER":
    return { ...state, orders: [...state.orders, action.payload] }

  default:
    return state
  }
}
