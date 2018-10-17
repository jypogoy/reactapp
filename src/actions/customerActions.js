export function fetchCustomers() {
    return {
        type: 'FETCH_CUSTOMERS',
        payload: {
            name: 'Jeff',
            age: 38
        }
    }
}

export function setCustomerName(name) {
    return {
        type: 'SET_CUSTOMER_NAME',
        payload: name
    }
}

export function setCustomerAge(age) {
    return {
        type: 'SET_CUSTOMER_AGE',
        payload: age
    }
}