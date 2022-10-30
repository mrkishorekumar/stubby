import { PrismaClient } from "@prisma/client";
import express from "express";

const router = express.Router()
const prisma = new PrismaClient() 


router.get('/',(req,res)=>{
    res.status(200).render('login')
})


router.post('/',async (req,res)=>{
    const {email, password} = req.body

    if (!email || !password) return res.render('meassage',{meassage : "Please enter all the fields"});

    try {
        const query = await prisma.User.findUnique({
            where : {
                email : email
            }
        })

        if(query===null){
            return res.render("meassage",{meassage : `${req.body.email} is not Found!`})
        }

        else {
            if (query.password===password){
                return res.render("meassage",{meassage : "Login!"})
            }
            else {
                return res.render("meassage",{meassage : "Password Wrong!"})
            }
        }
    }

    catch(err) {
        console.log(err)
    }


})

export default router