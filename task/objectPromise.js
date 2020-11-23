let user = {
    'name': 'Angel',
    'age': 21,
    'address': 'Kumbheswor, Lalitpur'
}

function promiseObject(user){
    return new Promise((res, rej)=>{
        if(user){
            res(user)
        }
        else{
            rej("User not found");
        }
    })
}

promiseObject(user)
    .then(result=>console.log(result))
    .catch(error=>console.log(error));