
const commonDao = require('../dao/common.dao')
const { faker } = require('@faker-js/faker')



const init = async (sizeOfData) => {
    try {
        let userData = [];
        for (let i = 0; i < sizeOfData; i++) {
            userData.push({ name: faker.person.fullName() })
        }
        console.log("🍾🍾 ~ init ~ userData:", userData)
        await commonDao.createUsers(userData)

    } catch (error) {
        console.log(error, '<<<<<<<<<error=')
    }

}

init(100000)



