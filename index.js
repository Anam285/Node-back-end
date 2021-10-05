require ("dotenv").config();
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
const {add,edit,list,remove} = require('./utils')




// console.log("hello world")

// const main = () => {
//     process.argv.includes("Code Nation")? "Found" :"Not Found";
// }

// console.log(main())


// const main = () => {
//     for (let arg of process.argv){
//         if (arg === "add"){
//         console.log("adding song");    }
//     else if (arg === "list"){
//         console.log("listing song");    }
// }}

// // main();
// console.log(argv);



const main=()=>{
    if (argv.add){
       add(argv.title, argv.artist,argv.album)
    } else if (argv.edit){
        edit(argv.id, argv.title, argv.artist,argv.album)
    }else if (argv.list){
        list()
    }    if (argv.remove){
        remove(argv.id)
    }
}


// }

// main();
// const main = () => {
//     console.log(argv.text)
//     let str= argv.text.split(' ')
//     console.log(str)
    

// }

main();