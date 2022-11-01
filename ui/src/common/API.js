"use strict";

/**
 * Adds a key-value pair to the search args
 * @param search
 * @param key
 * @param value
 */
function appendValue(search, key, value) {
    if (typeof value === "undefined") {
        // do nothing
    } else if (value === null) {
        search.append(key, '');
    } else {
        search.append(key, value);
    }
}

/**
 * Simplified way to encode an object of key-value pairs to a query string
 * @param obj
 * @return {string}
 */
function encodeQuery(obj) {
    const search = new URLSearchParams();

    Object.keys(obj).forEach((key) => {
        const value = obj[key];
        if (Array.isArray(value)) {
            value.forEach(val => {
                appendValue(search, key, val);
            });
        } else {
            appendValue(search, key, value);
        }
    });

    return search.toString();
}

function startFetch(method, path, payload, query) {
    const fetchArgs = {
        method,
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json'
        }
    };

    if (payload) {
        fetchArgs.body = JSON.stringify(payload);
        fetchArgs.headers['Content-Type'] = 'application/json';
    }

    if (query) {
        path += `?${encodeQuery(query)}`; // TODO Does your app need a more robust way to serialize an object as a query string?
    }

    return fetch(path, fetchArgs);
}

export function doApiCall(method, path, payload, query) {
    return new Promise((resolve, reject) => {
        startFetch(method, path, payload, query)
            .then(res => res.json())
            .then(body => {
                if (body.statusCode === 401) {
                    if (/(session cookie)|(Missing authentication)/.test(body.message)) {
                        // Session ended, reload page
                        // TODO Decide if your app requires this logic
                        window.location.reload();
                    } else {
                        reject(body);
                    }
                } else {
                    if (body.error) {
                        reject(body);
                    } else {
                        resolve(body);
                    }
                }
            })
            .catch(err => {
                // If something failed (e.g. parsing json, request failed to send, etc)
                console.warn('API Error', err); // eslint-disable-line no-console
                reject({
                    statusCode: 500,
                    error: 'Request Failed',
                    message: err.message || err.toString()
                });
            })
        ;
    });

}

export function doApiDownload(method, path, payload, query) {
    return new Promise((resolve, reject) => {
        let filename;
        startFetch(method, path, payload, query)
            .then(res => {
                const disp = res.headers.get('content-disposition');
                filename = disp && disp.split('=')[1] || 'unknown-filename'; // TODO Set a default filename for downloads
                return res.blob();
            })
            .then(blob => {
                const file = window.URL.createObjectURL(blob);
                resolve({ file, filename });
            })
            .catch(err => {
                // If something failed
                console.warn('API Download Error', err); // eslint-disable-line no-console
                reject({
                    statusCode: 500,
                    error: 'Request Failed',
                    message: err.message || err.toString()
                });
            })
        ;
    });

}

export function apiGet(path, query=null) {
    return doApiCall('GET', path, null, query);
}

export function apiPut(path, payload, query=null) {
    return doApiCall('PUT', path, payload, query);
}

export function apiPost(path, payload, query=null) {
    return doApiCall('POST', path, payload, query);
}

export function apiDelete(path, query=null) {
    return doApiCall('DELETE', path, null, query);
}

export const ENDPOINTS = {
    // TODO Add app API endpoints here
    version: '/version'
};