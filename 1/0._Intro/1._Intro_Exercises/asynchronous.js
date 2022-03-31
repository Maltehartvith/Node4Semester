//Javascript is single-threaded
// Javascript run in order, meaning from line to line. But there's some exceptions, such as setTimeout or setInterval, 
// But also in our express app, where we use the app.listen. 
//We dont want to block our application

// When do we need async
// We have to use async when we are fetching, because when we fetch, we are doing it over network. Therefore, it can take some
// time, and it is not instant. Therefore we can use the async, so we can wait for a response for the data we are fetching.
// It is also important when we are file handeling, because it can also take time. Such as saving to files, reading from files. 
// We also need it for databases aswell. Otherwise it could block other people from getting the information at the same time as you. 

// Promise can be in two states. It can be in pending state and in a fulfilled state. In the fulfilled state have two states aswell:
// it has resolved state and rejected state. 


new Promise((resolve, reject) => {
    
    try{
        //throw new Error("Bomb!");
        resolve("Everything went well");
        //resolve({ key: "Value" }, "cannot give it multiple resolves");
    } catch (errorMessage) {
        reject("Something went wrong " + errorMessage)
    }
})
.then(message => console.log(message))
.catch(errorMessage => console.log(errorMessage));

function somethingGoodSomethingBad(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                //throw new Error();
                resolve("it's time")
            } catch {
                reject("it's NOT time")
            }
        }, 4000);
    });
}

//somethingGoodSomethingBad()
//.then(message => console.log(message)) 

//we can do this below instead of the above.

(async function callMyCustomPromise() {

    try {
        const message = await somethingGoodSomethingBad();
        console.log(message);
    } catch (errorMessage) {
        console.log(errorMessage);
    }
})()
//This is an immideatly called function when we wrap it in paranteses and use the paranteses at the end. it is called an IIFE

//When we use the async keyword infrom of the function, we clearify that the function is wrapped in a promise. 
