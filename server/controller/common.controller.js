const commonDao = require('../dao/common.dao')
const cacheHelper=require('../helper/cache.helper')


const userSuggestion = async (req, res) => {
    try {
        let { key,limit } = req.query;
        if (!key) return res.status(400).json({ status: false, message: 'Search key is required' });

        if(!limit){limit=100}
        let cachedData = cacheHelper.getFromCache(`${key}${limit}`); //check from cache data
        if (cachedData) {
            console.log('from chase')
            return res.status(200).json({ status: true, suggestions: JSON.parse(cachedData) });
        }

        let users = await commonDao.findUserSuggestions(key,limit);

        cacheHelper.setCache(`${key}${limit}`, JSON.stringify(users));  //save data in cache for prevent db hit 

        res.status(200).json({ status: true, suggestions:users });

    } catch (error) {
        console.error("~ userSuggestion ~ error:", error);
        res.status(500).json({ status: false, message: 'Something went wrong' });
    }
};
const createUser = async (req, res) => {
    try {
        let { name } = req.body;

        if (!name) {
            return res.status(400).json({ status: false, message: 'Name is required' });
        }

        await commonDao.createUsers([{ name }]);  
        cacheHelper.resetCache();  

        res.status(200).json({ status: true, message: 'User created successfully' });

    } catch (error) {
        console.error("~ createUser ~ error:", error);
        res.status(500).json({ status: false, message: 'Something went wrong' });
    }
};

const selectUser = async (req, res) => {
    try {
        let { id } = req.query;
        if (!id) return res.status(400).json({ status: false, message: 'User id  is required' });

        let user = await commonDao.findUser({id:id}) 

        if (user) {
            let search_frequency=user.search_frequency += 1;
            await user.save();
            await commonDao.updateUser({search_frequency},{id:user.id})
            cacheHelper.resetCache();  
        }

        res.status(200).json({ status: true, message: 'Search frequency updated' });

    } catch (error) {
        console.error("~ selectUser ~ error:", error);
        res.status(500).json({ status: false, message: 'Something went wrong' });
    }
}

module.exports = {
    userSuggestion,
    createUser,
    selectUser
}