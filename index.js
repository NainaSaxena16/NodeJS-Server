const http=require('http')
const path=require('path')
const fs=require('fs')

const server=http.createServer((req,res)=>{
     if(req.url==='/') //url will be taken after 3001 //localhost:3001/
     {
        fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
            if(err)
                console.log(err)
                //res.writeHead(200,{'Content-Type':"text/html"})   //displays the html page content only
                res.writeHead(200,{'Content-Type':"text/plain"})  //displays the whole code in html format
                res.end(content)
        })
     }
     else if(req.url==='/about')
     {
        fs.readFile(path.join(__dirname,'public','about.html'),(err,content)=>{
            if(err)
                console.log(err)
                res.writeHead(200,{'Content-Type':"text/html"})     //displays the html page content only
                //res.writeHead(200,{'Content-Type':"text/plain"})  //displays the whole code in html format
                res.end(content)
        })
     }
     else if(req.url==='/services')
     {
        fs.readFile(path.join(__dirname,'public','services.html'),(err,content)=>{
            if(err)
                console.log(err)
                res.writeHead(200,{'Content-Type':"text/html"})     //displays the html page content only
                //res.writeHead(200,{'Content-Type':"text/plain"})  //displays the whole code in html format
                res.end(content)
        })
     }else if(req.url==="/application"){
        const users=[{name:"Ram",age:21}]
        res.writeHead(200,{'Content-Type':"application/json"})
        res.end(JSON.stringify(users))
     }
})
server.listen(3001,()=>{
    console.log("Server is running at port 3001")
})