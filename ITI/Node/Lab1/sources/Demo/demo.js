// var x = 10;
// x
// setTimeout(()=>{console.log("Hiiii")},3000)
// function abc(){console.log(x)}
// abc()
// function abc2(){
// return x;
// }
// abc2();

// var x = 10;
// console.log(x);

/** 4 Main Objects [Front]
 * 1-Built-In Objects
 * 2-BOM
 * 3-DOM
 * 4-Custome Obj
 */


//Global Module ===> global
// console.log(global);
/** 4 Main Modules [Node]
 *  1- Global Modules ===> [Not Need require===> [requier - setTimeout - setInterval - ...]]
 *  2-Built-In Module ==> [Need require ---> [http-filesystme - ...]]
 *  3-third Party Module ==> [need Install --> [nodemon - express - ....]]
 *  4-Custom Module ==> 2,3
 */



//ES ==> imoort {Mahmoud as Ahmed} from './asa'
//Node ===> var x = require('./asdas')

//[setTimeOut - console - require - ]


/**
 * require("http") ===> Built-In  Module
 * require("./Folder/file.js") ====> Custom Module
 */


/**1- Global  */
// console.log(process);
// process.stdout.write("Hello World\n");
// process.stdout.write("Hello World\n");
// console.log("Hello World")
// console.log("Hello World")

// console.log(process.argv[2]);
// console.log(process.argv);
// if(process.argv[2]==="xyz"){
//     console.log("xyz()")
// }

//2-Built-In [os - http - fs]
// let os = require("os");
// console.log(os.hostname());

/** 3- third party Module [nodemon] ==> npm i nodemon -g */ 

// console.log("Hi")


//FileSystem [Create - read - delete - update]
//built-In
var fs = require("fs")
// fs.readFile("file.txt",(err, data)=>{
//     if(err){
//         console.log("7asal Error");
//     }else{
//         console.log(data)
//     }
// })

// fs.readFile("file.txt",(err, data)=>{
//     if(err){
//         console.log("7asal Error");
//     }else{
//         console.log(data.toString());
//     }
// })


// fs.readFile("file.txt","utf-8",(err, data)=>{
//     if(err){
//         console.log("7asal Error");
//     }else{
//         console.log(data);
//     }
// })

// console.log("After Read");
// var myFile = fs.readFileSync("file.txt","utf-8",(err)=>{console.log(err)});
// console.log(myFile);
// console.log(myFile.toString());
// console.log("Hi");

// fs.readFile("file2.txt",(err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data.toString())
//     }
// })


//write File
// fs.writeFile("file.txt","Hi",()=>{})
// fs.writeFile("file.txt","Hi2\n",()=>{})
// fs.writeFileSync("file2.txt","Hi2")

//Update File
// fs.appendFileSync("file.txt"," Hello",()=>{})

//delete File
// fs.unlinkSync("file2.txt");

//Create Folder
// fs.mkdirSync("NewFolder")
// process.chdir("NewFolder");
// fs.writeFileSync("file3.txt","Hi")
// process.chdir("../");
// var path = require("path");
// console.log(path.join(__dirname,"/file.txt"))
// fs.writeFileSync(path.join(__dirname,"/file.txt"),"Hi")

// for(let i =0; i<5000; i++){
//     fs.appendFileSync("file.txt"," Hello");
// }


//Read File ==> Chunks
var myFile = fs.createReadStream("file.txt",{encoding:"utf-8", highWaterMark:16*1024})
// myFile.on("open",()=>{console.log("File Opend")})
// myFile.on("end",()=>{console.log("File Ended")})
// myFile.on("error",()=>{console.log("7asal Error")})
// myFile.on("data",(data)=>{console.log(data.toString())})
// var myFilewrite = fs.createWriteStream("file2.txt")
// myFile.on("data",(data)=>{
//     //console.log(data)
//     // console.log("Shrouq")
//     myFilewrite.write(data)
// })



