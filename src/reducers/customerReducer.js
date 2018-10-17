const initialState = {
    customers: [],
    fetching: false,
    fetched: false,
    error: null
}

export default (state = initialState, action) => {
  switch (action.type) {

  case "FETCH_CUSTOMERS":
    return { ...state, fetching: true }

  case "FETCH_CUSTOMERS_REJECTED":
    return { ...state, fetching: false, error: action.payload }

  case "FETCH_CUSTOMERS_FULFILLED":
    return { ...state, fetching: false, fetched: true, orders: action.payload }    

  case "SET_CUSTOMER_NAME":
    return { ...state, orders: [...state.orders, action.payload] }

  case "SET_CUSTOMER_AGE":
    return { ...state, orders: [...state.orders, action.payload] }  

  default:
    return state
  }
}
