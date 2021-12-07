export const request = (url) => {
    return fetch(url).then(responseHandler)
};

async function responseHandler(res) {
    let jsonData = await res.json();
    
    if (res.ok) {
        return Object.values(jsonData);
    } else {
        throw jsonData;
    }
}