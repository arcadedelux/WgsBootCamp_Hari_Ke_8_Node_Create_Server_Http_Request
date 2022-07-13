const http = require('http')
const fs = require('fs')


//Membuat Fungsi Untuk Membaca File Yang Akan Ditampilkan 
const readFiles =(file,res)=>{

    fs.readFile(file,(err,data)=>{
        if(err){
            res.writeHead(404)
            res.write('Error : page not found')
        }else{
            res.write(data)
        }
        res.end()
    })
}

//Inisiasi Membuat Server
http
//Node Create Server Module
.createServer((req,res)=>{

    const url =req.url
    console.log(url)
    res.writeHead(200,{
        'Content-Type' : 'text/html'
    })


//Barikode Untuk Percabangan Site Address
   if(url ==='/about'){
    readFiles('./about.html',res)
   }else if(url ==='/contact'){
    readFiles('./contact.html',res)
   }else{
    readFiles('./index.html',res)
   }
    
  // res.write('Hello World!')
    
})

//Baris Kode Untuk Membuat Alamat Port Http Servernya
.listen(3000,()=>{
    console.log('Server is listening on port 3000')
})



