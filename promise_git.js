const printingData = async () => {
    try {
        const responseData = getData("GIT");
        console.log(responseData);
    }
    catch (err) {
        console.err(err);
    }
}

function getData(passName) {
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