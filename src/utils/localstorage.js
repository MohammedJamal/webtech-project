/* Save an item to localstorage */
export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const removeFromLocalStorage = (key) => {
    return localStorage.removeItem(key)
}

/* Get an item from localstorage */
export const getFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

