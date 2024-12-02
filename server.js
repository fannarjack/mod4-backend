const express = require("express")
const cors = require('cors')
const app = express()
const port = process.env.PORT || 8080;
app.use(cors())
app.get("/odin",(req,res)=>{
  fetch("https://mythopedia.com/_next/data/Gq-h2_6Lxzt7XraQFkOT0/topics/odin.json?slug=odin", ).then(r=>r.json()).then(data=>{
    console.log(data)

    res.json(data)
    
  })  
})
app.get("/frigg",(req,res)=>{
  fetch("https://mythopedia.com/_next/data/Gq-h2_6Lxzt7XraQFkOT0/topics/frigg.json?slug=frigg", ).then(r=>r.json()).then(data=>{
    console.log(data)

    res.json(data)
    
  })  
})

app.get("/thor",(req,res)=>{
  fetch("https://mythopedia.com/_next/data/Gq-h2_6Lxzt7XraQFkOT0/topics/thor.json?slug=thor", ).then(r=>r.json()).then(data=>{
    console.log(data)

    res.json(data)
    
  })  
})

app.get("/loki",(req,res)=>{
  fetch("https://mythopedia.com/_next/data/Gq-h2_6Lxzt7XraQFkOT0/topics/loki.json?slug=loki", ).then(r=>r.json()).then(data=>{
    console.log(data)

    res.json(data)
    
  })  
})

app.get("/freya",(req,res)=>{
  fetch("https://mythopedia.com/_next/data/Gq-h2_6Lxzt7XraQFkOT0/topics/freya.json?slug=freya", ).then(r=>r.json()).then(data=>{
    console.log(data)

    res.json(data)
    
  })  
})

app.get("/baldur",(req,res)=>{
  fetch("https://mythopedia.com/_next/data/Gq-h2_6Lxzt7XraQFkOT0/topics/baldur.json?slug=baldur", ).then(r=>r.json()).then(data=>{
    console.log(data)

    res.json(data)
    
  })  
})

app.get("/heimdall",(req,res)=>{
  fetch("https://mythopedia.com/_next/data/Gq-h2_6Lxzt7XraQFkOT0/topics/heimdall.json?slug=heimdall", ).then(r=>r.json()).then(data=>{
    console.log(data)

    res.json(data)
    
  })  
})

app.get("/freyr",(req,res)=>{
  fetch("https://mythopedia.com/_next/data/Gq-h2_6Lxzt7XraQFkOT0/topics/freyr.json?slug=freyr", ).then(r=>r.json()).then(data=>{
    console.log(data)

    res.json(data)
    
  })  
})

app.get("/tyr",(req,res)=>{
  fetch("https://mythopedia.com/_next/data/Gq-h2_6Lxzt7XraQFkOT0/topics/tyr.json?slug=tyr", ).then(r=>r.json()).then(data=>{
    console.log(data)

    res.json(data)
    
  })  
})

app.get("/njord",(req,res)=>{
  fetch("https://mythopedia.com/_next/data/Gq-h2_6Lxzt7XraQFkOT0/topics/njord.json?slug=njord", ).then(r=>r.json()).then(data=>{
    console.log(data)

    res.json(data)
    
  })  
})

app.get("/nerthus",(req,res)=>{
  fetch("https://mythopedia.com/_next/data/Gq-h2_6Lxzt7XraQFkOT0/topics/nerthus.json?slug=nerthus", ).then(r=>r.json()).then(data=>{
    console.log(data)

    res.json(data)
    
  })  
})

app.get("/idun",(req,res)=>{
  fetch("https://mythopedia.com/_next/data/Gq-h2_6Lxzt7XraQFkOT0/topics/idun.json?slug=idun", ).then(r=>r.json()).then(data=>{
    console.log(data)

    res.json(data)
    
  })  
})
app.listen(port)

