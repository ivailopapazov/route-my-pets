export const login = (email, password) => {
    return fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })  
        .then(res => res.json())
};

export const logout = () => {
    localStorage.removeItem('username');
}

export const getUser = () => {
    let username = localStorage.getItem('username');

    return username;
};

export const isAuthenticated = () => {
    return Boolean(getUser())
};