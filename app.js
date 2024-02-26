// Add
const fs = require("fs");
const yargs = require("yargs");
const data = require("./data.js");


yargs.command({
    command: "add",
    describe: "To Add An Item",
    builder: {
        id: {
            describe: "ID Of Person",
            demandOption: true,
            type: "string"
        },
        fName: {
            describe: "First Name Of Person",
            demandOption: true,
            type: "string"
        },
        lName: {
            descibe: "Last Name Of Person",
            demandOption: true,
            type: "string"
        },
        age: {
            describe: "Age Of Person",
            demandOption: true,
            type: "string"
        },
        city: {
            describe: "City Of Person",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        data.addPerson(x.id, x.fName, x.lName, x.age, x.city)
    }
})

// delete
yargs.command({
    command: "delete",
    describe: "to delete data",
    builder: {
        id: {
            descibe: "delete id",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        data.deleteData(x.id)
    }
})
// read
yargs.command({
    command: "read",
    describe: "read an Item",
    builder: {
        id: {
            describe: "to read data",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        data.readData(x.id)
    }
})
// list
yargs.command({
    command: "list",
    describe: "to list data",
    handler: ()=>{
        data.listData();
    }
})

yargs.parse();