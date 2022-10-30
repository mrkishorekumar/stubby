import express from "express";
import bcrypt from 'bcrypt'
import { PrismaClient } from "@prisma/client";

const router = express.Router()
const prisma = new PrismaClient() 

router.get('/',(req,res)=>{
    res.status(200).render('signup')
})

router.post('/', async (req,res)=>{

    const {name, email, password} = req.body

    if (!name || !email || !password) return res.render('meassage',{meassage : "Please enter all the fields"});


    try {
        const query = await prisma.User.findUnique({
            where :{
                email : email
            }
        }) 

        if (query===null) {
            const hashedPassword = await bcrypt.hash(password,12)
            await prisma.User.create({
                data : {
                    name : name,
                    email : email,
                    password : hashedPassword,
                    accountType : "free"
                }
            })

            return res.render("meassage",{meassage : "Account Created!"})
        }
        else {
            return res.render("meassage",{meassage : `${email} is already in Use!`})
        }
    }

    catch(err) {
        console.log("Error")
    }

})


export default router