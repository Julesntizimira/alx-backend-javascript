const http = require('http')
const countStudents = require('./3-read_file_async.js');
const {spawn} = require('child_process');


const arg = process.argv[2]

const port = 1245;

const app = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (req.url === '/') res.end('Hello Holberton School!');
    
    else if (req.url === '/students') {
        const child = spawn('node', [countStudents, arg])
        const result = ['This is the list of our students']
        child.on('error', (error) => {
                result.push(error.message)
                res.end(result.join('\n'));
        });
        child.stderr.on('data', (data) => {
            result.push(`${data}`)
            res.end(result.join('\n'));
        });
        child.stdout.on('data', (data) => {
                result.push(`${data}`)
                res.end(result.join('\n'));
        })
    }   
})
app.listen(port, () => {});
module.exports = app