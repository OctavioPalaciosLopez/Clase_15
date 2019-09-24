const { spawn } = require('child_process');
const result = spawn('git', ['branch'])

result.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

//opcion resumida
const callback = (data) => {
    console.log(`stdout: ${data}`)
}
result.stdout.on('data', callback);

//opcion c/arrow
result.stdout.on('data',(data) => {
    console.log(`stdout: ${data}`)
})

//opcion detallada
result.stdout.on('data', function(data) {
    console.log(`stdout: ${data}`)
})