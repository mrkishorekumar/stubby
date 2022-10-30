import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router()
const prisma = new PrismaClient() 

router.get('/',(req,res)=>{
    res.status(200).render('signup')
})

router.post('/', async (req,res)=>{

    if (!req.body.name || !req.body.email || !req.body.password) return res.render('meassage',{meassage : "Please enter all the fields"});


    try {
        const email = await prisma.User.findUnique({
            where :{
                email : req.body.email
            }
        })

        if (email==null) {
            await prisma.User.create({
                data : {
                    name : req.body.name,
                    email : req.body.email,
                    password : req.body.password,
                    accountType : "free"
                }
            })

            return res.render("meassage",{meassage : "Account Created!"})
        }
        else {
            return res.render("meassage",{meassage : `${req.body.email} is already in Use!`})
        }
    }

    catch(err) {
        console.log("Error")
    }

})


export default router