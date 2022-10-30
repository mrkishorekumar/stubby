import express from "express";

const router = express.Router()

let currentdate = new Date(); 
let datetime =  + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

const arr = [
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "Google", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "last3", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "last2", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "last1", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
    {name : "last", full : "https://www.google.com/", short : "nsgfsi", clicks : 12, CreatedAt : datetime, Expireby : datetime },
   

]

router.get('/',(req,res)=>{
    res.status(200).render('dashboard',{shortUrls : arr})
})


export default router