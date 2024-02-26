// Add
const fs = require("fs");
const addPerson = (id , fName , lName , age , city) => {

    const allData = loadData();

    const duplicateData = allData.filter((obj) => {
        return( obj.id === id )
    })

    if(duplicateData.length == 0){
        allData.push({
            id: id,
            fname: fName,
            lname: lName,
            age: age,
            city: city,
        })
    
        saveAllData(allData);
        console.log("You Already Add An Item");
    } else {
        console.log("ERROR DUPLICATE ID");
    }

}

// loadData ***********************************************************
const loadData = ()=>{
    try{
        const dataJson = fs.readFileSync("data.json").toString();
        return( JSON.parse(dataJson) )
    } catch {
        return []
    }
}
// saveAllData ***********************************************************
const saveAllData = (allData) => {
    const allDataJson = JSON.stringify(allData);
    fs.writeFileSync("data.json" , allDataJson);
}
// delete
const deleteData = (id) =>{

    const allData = loadData();

    const idFound = allData.filter((obj) => {
        return(obj.id === id)
    })

    if(idFound.length !== 0){
        const dataToKeep = allData.filter((obj) => {
            return( obj.id !== id )
        })
    
        saveAllData(dataToKeep)
        console.log("You Already Delete An Item");
    } else {
        console.log("That ID Isnot Found");
    }

}
// read 
const readData = (id) => {

    const allData = loadData();

    const readItem = allData.find((obj) => {
        return( obj.id === id )
    })

    if(readItem){
        console.log("ID" + " " +readItem.id , "name" + " " + readItem.fname , readItem.lname , "age" + " " + readItem.age , "city" + " " + readItem.city);
    } else {
        console.log("That Item Isnot Found To Read");
    }

}
// list
const listData = ()=>{

    const allData = loadData();

    allData.forEach((obj) => {
        return( console.log(obj.fname , obj.lname) )
    })
    
}
// export ***************************************************************
module.exports = {
    addPerson,
    deleteData,
    readData,
    listData
}