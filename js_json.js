const loginReq = {
    emailID: "bijay,xyz@test.com",
    password: "Password"
}

// CONVERTING OBJECT TO JSON

const jsonReq = JSON.stringify(loginReq);

console.log(jsonReq, typeof jsonReq);

const dummyJSON = '{"name": "Bijay", "age": 32}';

const resObj = JSON.parse(dummyJSON);
console.log("#####################");
console.log(resObj, typeof resObj);