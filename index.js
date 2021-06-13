const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const filePath = core.getInput('path')
const { request } = require('@octokit/request');
fs.readdir('./', (err, files) => {
  console.log("entered");
  if (err)
    console.log(err);
  else {
    for(let i = 0; i < files.length; i++)
      console.log(files[i]);
    const includesReadme = files.includes('README.md');

    if(includesReadme){

      console.log("Found readme");
      fs.readFile('./README.md', function (err, data) {
      //check example
      if(data.includes('Example'))
        console.log("found example");
      else
        console.log("Example not found");
                
      //check contribution
      if(data.includes('Contribution'))
        console.log("found contribution");
                 
      else
        console.log("Contribution not found");
      });


      }
    else
      console.log("No Readme");

      //code owners in .github

    fs.readdir('./.github', (err, files) => {
      const includesCodeOwners = files.includes('CODEOWNERS');
      if(includesCodeOwners)
        console.log("Code owners present");
      else
        console.log("code owners file absent");
    })



    //check commit protection in branch
    async function run(){
    try{

    const protectionOptions = {
      url: 'https://api.github.com/repos/ishitachawla/Requirement-testing/branches/main/protection/required_signatures',
      headers: {
        Accept: "application/vnd.github.zzzax-preview+json",
        Authorization: 'Bearer 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',
      },
    };
    let protection = await request.get(protectionOptions);
    let result = JSON.parse(protection);
    console.log(result);
    console.log("sip");
  }
  catch(error){console.log("error");}
  }
  run();
  //   async function start() {
  //     console.log("check commit entered");
  //     const promise = new Promise((resolve, reject) => {
  //     request('GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures', {
  //     owner: 'ishitachawla',
  //     repo: 'Requirement-testing',
  //     branch: 'main',
  //     mediaType: {
  //       previews: [
  //         'zzzax'
  //       ]
  //     }
  //   })
    
  //   .catch(reject);
  //   console.log(promise);
  // })

  // start();
  
//     async function start(){
//       console.log("entered start");
//     try{
//     const result = await request('GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures',{
//     owner: 'ishitachawla',
//     repo: 'Requirement-testing',
//     branch: 'main',
//     mediaType: {
//       previews: [
//         'zzzax'
//       ]
//     }
//   }); 
//     console.log(result);
//     console.log("yo");
//     return result;
// }
//     catch(err){
//       console.log("error");
//       return "error";
//     }
// }

//   console.log(start());
    //end check commit
    
      }
    
    })
