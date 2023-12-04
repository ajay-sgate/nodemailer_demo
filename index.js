require('dotenv').config()

// step 1. install nodemailer library 


// step 2. import nodemailer library 
const nodemailer = require("nodemailer");

// step 3. configure mail and send it 
async function sendMail(){
    // 1. create an email transporter. 

    // SMTP (Simple Mail Transfer Protocol)

   const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.mail,
            pass: process.env.password
        }
    })

    //2. Configure email content.

    const mailOptions = {
        // from: 'xxxxx.xxxx@gmail.com',          this is not compulsory to provide
        to: 'ajay9679339@gmail.com',
        subject: "Learning nodemailer",
        text: 'This is a test email using nodemailer in node.js'
    }


    // 3. send email

    try {
        const result = await transporter.sendMail(mailOptions)  
        console.log('Email sent success');      
    } catch (error) {
        console.log('Email sent failed', error);
    }
    
}

sendMail();