// asynchronous-testing/src/asyncFucntion.js
function fetchData(callback){
    setTimeout(()=>{
        const data = {name:'Aqsa'};
        callback(null,data); //function calling
    },1000)
}

module.exports = fetchData;