const http=require('http')

//CREATE SERVER
//const httpHandler=(req,res)=>{
//}
//http.createServer(httpHandler)

const server=http.createServer((req,res)=>{
    //console.log("hello")                           //diplays the content when we run local host
    //console.log("hi",req.url)                      //takes input from the url       //use ctrl+c for refresh of the terminal
    res.write("<h1>HELLO NODE<h1>")
    res.end();
})
server.listen(5001,()=>{
    console.log("Server is started at the port 5001")
})

