export function commonPost(url, data) {
    return fetch(url,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )
        .then(a => a.json())
}



export function commonGet(url) {
    return fetch(url).then(a => a.json())
}

