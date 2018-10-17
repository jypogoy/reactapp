export function fetchOrders() {
    return {
        type: 'FETCH_ORDERS_FULFILLED',
        payload: {
            orderNumber: 1,
            description: 'Canned Tuna',
            quantity: 5
        }
    }
}

export function addOrder(order) {
    return {
        type: 'ADD_ORDER',
        payload: order
    }
}