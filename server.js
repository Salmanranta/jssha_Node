const express = require('express')
const app = express()
const cors = require('cors')  
var jsSHA = require('jssha');

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","build")
    res.header("Access-Control-Allow-Methods",
    "GET,POST,PUT,DELETE,PATCH,OPTIONS HEAD"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next()
})
const PORT = process.env.PORT || 8000;

var jsSHA = require('jssha');

app.get('/jssha', async (req, res) => {
    try
    {
          let secret = "4RmaZGjocZxUeVckmTR+X7FKdUrvUyRCqmhALCSsR3o=";
         
          const sha = new jsSHA('SHA-256', 'TEXT');
          const nonce = new Date().getTime();
         await sha.setHMACKey(secret, 'TEXT');
          sha.update(nonce.toString());
          var data = {}
          data = {
              nonce,
              signature: sha.getHMAC('HEX')
          }
        res.status(200).json({data})
    }
    catch(err)
    {
        res.status(400).send(err.stack)
    }
    

});

app.listen(PORT, () => {
  
            console.log('Server is running at http://localhost:' + PORT)
           
         
})