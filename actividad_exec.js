const { exec } = require('child_process')

// 1
exec('git branch', (err, stdout, stderr) => {
    console.log(stdout)
}) 

// 2
 const command = 'git branch'
 const handle = (err, stdout, stderr) => {
    console.log(stdout)
 }
 exec(command, handle)

 // 3
 exec('git branch', function(err,stdout, stderr){
     console.log(stdout)
 })
