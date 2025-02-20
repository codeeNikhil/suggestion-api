const nodeCache = require('node-cache');
const cache = new nodeCache({ stdTTL: 60 }); 

const getFromCache = (key) => {
    return cache.get(key);
};

const setCache = (key, data) => {
    cache.set(key, data);
};

const resetCache = (key, data) => {
    cache.flushAll();
};

module.exports = { getFromCache, setCache,resetCache };