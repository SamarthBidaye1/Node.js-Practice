// Node Js run time env..
const { error } = require("console");
const fs = require("fs");

const file = fs.writeFile("details.txt", "Hello this is backend dev", (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("File Created")
    }
})

const Readfile = fs.readFile('details.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data, " : File Read")
    }
});


const appendfile = fs.appendFile("details.txt", " This is Appended Data", (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Append Success')
    }
})

const rename = fs.rename("details.txt", "Text.txt", (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('File Name Update')
    }
});
console.log(rename)

const deletefile = fs.unlink('Text.txt', (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('File Delete')
    }
})

//http
const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.end(`Home Page Loged `)
    } else {
        res.end('404 Page not Found !')
    }
})
server.listen(3000)

//npm 
// motivational Quotes
const Quotes = require("success-motivational-quotes");
console.log('Quotes are : ', Quotes.getTodaysQuote());