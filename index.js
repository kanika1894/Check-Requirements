const core = require('@actions/core');
const github = require('@actions/github');
const module = require('module');
const fs = require('fs');
const module = require('module');
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
