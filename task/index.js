let userNames = ["Angel", "Mohit", "Alish"];

function promiseArray(userName){
    return new Promise((res, rej)=>{
        if (userName.length > 0){
            res(userName)
        }
        else{
            rej("Data not found")
        }
    })
}

promiseArray(userNames).then(result => {
    console.log('The names in data are: ');
    let time = 1000;
    result.forEach((r,i)=>{
        setTimeout(()=>{
            console.log(i+1 + ')'+ '  ' + r);  
        }, time);
        time += 3000;
    })
}).catch(error=>{
    console.log(error);
})

let async_await_array = async (userName) => {
    try {
        let readArray = await promiseArray(userName);
        console.log('Using async and await...')  
        let time = 1000;
        readArray.forEach((r,i)=>{
            setTimeout(()=>{
                console.log(i+1 + ')'+ '  ' + r)
            }, time);
            time += 3000;
        })
    } catch (error) {
        console.log("Error is: ");
        console.log(error);
    }
    
}

async_await_array(userNames);

