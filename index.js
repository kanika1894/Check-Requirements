const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const filePath = core.getInput('path')
fs.readdir('./', (err, files) => {
    console.log("entered");
    if (err)
        console.log(err);
    else {

        console.log("first if");
        for(let i = 0; i < files.length; i++){
            console.log(files[i]);
          }
        const includesReadme = files.includes('Readme.md');
        console.log(includesReadme);
        if(includesReadme){
            console.log("second if");
            fs.readFile('./Readme.md', function (err, data) {
                if (err) throw err;
                if(data.includes('search string')){
                 console.log(data)
                }
              });


      }	
        else{
            console.log(err);
      }
        
      }
    console.log("cool");
    }
  )
