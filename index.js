import express from "express";
import home from "./routes/home.js"
import login from './routes/login.js'
import signup from './routes/signup.js'
import pricing from './routes/pricing.js'
import contact from './routes/contact.js'
import about from './routes/about.js'
import dashboard from './routes/dashboard.js'

const app = express()

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))
app.set('view engine','ejs')

app.use('/',home)
app.use('/login',login)
app.use('/signup',signup)
app.use('/pricing',pricing)
app.use('/contact',contact)
app.use('/about',about)
app.use('/dashboard',dashboard)



app.listen(process.env.PORT || 5000, ()=>{
    console.log("Running on http://localhost:5000")
})