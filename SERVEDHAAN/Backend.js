const http = require('http');


app.post('/',function(){

    
});


var app=express();
const hostname = '127.0.0.1';
const port = 3000;
app.get('/',function(req,res){
     res.setHeader('200','Content-Type:text/html')
    res.send(`<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="stylesheet" href="./RegisterStyles.css">
        <script src="https://kit.fontawesome.com/eeca99e7c9.js"></script>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Register</title>
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        #donation{
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
        .container{
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-top: 0px;
            width: 500px;
            height: max-content;
            padding: 50px;
            border-radius: 10px;
        }
        .register{
            position: relative;
            margin-top: 40px;
        }
        label{
            /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
           font-family: poppins;
            font-size: 25px;
            color: rgb(61, 60, 60);
        }
        input{
            margin-top: 20px;
            width: 100%;
            border-bottom: 1px solid rgb(71, 71, 71);
            border-top: none;
            border-left: none;
            border-right: none;
            font-size: 20px;
            transition: .3s;
        }
        input:hover{
            outline: none;
            border-bottom: 2px solid black;
        }
        input:focus{
            outline: none;
            border-bottom: 2px solid black;
        }
        .submit{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            height: 50px;
            margin-top: 50px;
            border: none;
            color: white;
            border-radius: 5px;
            cursor: pointer;
            background-color: rgb(30, 57, 97);
        }
        h2{
            font-family: poppins;
            font-size: 38px;
            color: rgb(31, 31, 31);
        }
        .back{
            font-size: 28px;
            color:rgb(71, 71, 71) ;
            -webkit-text-stroke: 1px rgb(253, 252, 252);
            cursor: pointer;
            margin: 20px;
        }
        .back:hover{
            color: rgb(54, 54, 54);
            -webkit-text-stroke: 0px;
        }
        @media screen and (max-width: 500px) {
            .container{
                box-shadow: none;
            }
        }
        @media screen and (min-width: 700px) {
            #donation{
                margin-top: 20px;
                transform: scale(1.2);
            }
        }
        @media screen and (min-width: 900px) {
            #donation{
                position: absolute;
                top: 50%;
                left: 130px;
                transform: translateY(-50%) scale(1.5);
            }
            .container{
                float: right;
                margin-right: 20px;
            }
        }
        @media screen and (min-width: 900px) and (max-width:1355px){
            #donation{
                position: absolute;
                top: 50%;
                left: 10px;
                transform: translateY(-50%) scale(1.3);
            }
        }
        
        
        </style>
    </head>
    <body>
        <a href="Servedhaan.html" class="back"><i class="fas fa-arrow-left back"></i></a>
        <div class="image">
            <img src="images/Donation1.jpg" alt="Donation1" id="donation">
        </div>
        <div class="container">
            <h2>Login</h2>
            <div class="register">
                <label for="email"><h5>Email</h5></label>
                <input type="email" id="email" name="email"><br><br><br>
                <label for="pwd"><h5>Password</h5></label>
                <input type="password" id="pwd" name="pwd"><br>
                <button class="submit">Login</button>
            </div>
        </div>
    </body>
    </html>`)


})

app.listen(port,() => {
  console.log(`Server running at http://${hostname}:${port}/`);
});