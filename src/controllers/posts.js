const {Posts,Users} = require('../db/models')

async function createnewpost(id,title,body){
    const post=await Posts.create({
        title:title,
        body:body,
        id:id,
    })

    return post;
}

async function showallposts(query){
//todo hande query
    const posts=await Posts.findAll({
        include : [Users]
    })
    return posts;
}

/*test code */

async function task(){
   /* console.log(await createnewpost(1,"new post","body 1"));
    console.log('-------------');
    console.log(await createnewpost(2,"new post 2","body 2"));
    console.log('-------------');
    console.log(await createnewpost(3,"new post 3","body 3"));
    console.log('-------------')*/
    const posts = await showallposts()
    for (let p of posts) {
      console.log(`${p.title}\nauthor: ${p.users.username}\n${p.body}\n==========\n`)
    }
   
    
}

task();
