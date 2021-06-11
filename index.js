const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const filePath = core.getInput('path')
fs.readdir(filePath, (err, files) => {
    console.log("entered");
    if (err)
        console.log(err);
    else {
        console.log("first if");
        const includesReadme = files.includes('Readme.md');
        if(includesReadme){
            console.log("second if");
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
    console.log("cool");
    }
  )
