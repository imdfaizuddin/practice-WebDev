// const  apple = require("./apple");
// const  banana = require("./banana");
// const  mango = require("./mango");



// Import won't work because npm donsen't have type: module
import {objapple} from "./apple.js";
const arr = [objapple];
import {objbanana} from "./banana.js";
arr.push(objbanana);
import {objmango} from "./mango.js";
arr.push(objmango);


export let index = arr;
