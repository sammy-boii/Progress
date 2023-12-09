
const myPromise = (resolve, reject) => {    // resolve and reject are conventions.
    let a = 1 + 1;
    if (a === 2) {
        resolve("Success");
    }
    else {
        reject("Failed");
    }
}

/*

The resolve parameter is a function that is called when the asynchronous operation succeeds and fulfills the promise. The reject parameter is a function that is called when the operation fails and the promise needs to be rejected.

*/

myPromise.then(result => {
    console.log(result);
})
myPromise.catch(error => {
    console.error(error);
});


// .then is for resolve and .catch is for reject


function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const noError = true;
            if (noError) {
                const data = { name: "John Doe", age: 30 };
                resolve(data);
            } else {
                reject("Error occurred while fetching data.");
            }
        }, 2000);
    });
}

fetchData()
    .then((data) => {
        console.log("Data:", data);
    })
    .catch((error) => {
        console.log("Error:", error);
    });


/*

not to brag but i got it first try :> aight the promise is returned when fetchData() is called. so when noError = true = truthy value it'll store the data in 'data' and pass to .then else that error msg will be passed to .catch.

*/

/*

also if (isTrue) will execute if isTrue is a truthy value. if falsey value else will execute

Truthy values: true, non empty arrays, non nun objects, non zero numbers, non empty strings....
Falsey values: false, 0, null, undefined, "", NaN...

*/