const {Users}=require('../db/models')
const { genrandomusername } = require('../utils/username')

async function createanonuser(){
    const user =await Users.create({
        username:genrandomusername(),
    })

    return user;
}

module.exports={
    createanonuser,
}

async function task(){
    console.log(await createanonuser());
    console.log('-------------');
    console.log(await createanonuser());
    console.log('-------------');
    console.log(await createanonuser());
    console.log('-------------')
}

task()