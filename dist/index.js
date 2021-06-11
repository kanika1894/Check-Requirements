/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __nccwpck_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nccwpck_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";/************************************************************************/
var __webpack_exports__ = {};
__nccwpck_require__.r(__webpack_exports__);
const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const filePath = core.getInput('path')
fs.readdir(filePath, (err, files) => {
    if (err)
        console.log(err);
    else {
        const includesReadme = files.includes('Readme.md');
        if(includesReadme){
            $.get(filePath, function(contents){
                var hasString = contents.includes("Example"); //boolean
                if(!hasString)
                    console.log(err);
                else console.log("yess");
             })


      }	
        else{
            console.log(err);
      }
        
      }
    core.setOutput("cool",cool);
    }
  )

module.exports = __webpack_exports__;
/******/ })()
;