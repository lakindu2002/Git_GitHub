const printingData = async () => {
    try {
        const responseData = await getData("GIT");
        console.log(responseData);
    }
    catch (err) {
        console.err(err);
    }
}

function getData(passName) {
    //actually fetch data from the API
    let promise = new Promise((resolve, reject) => {
        if (passName === "GIT") {
            resolve("Entered Name Correctly")
        } else {
            reject("Bad Name");
        }
    });

    return promise;
}

printingData();
console.log("Function End");