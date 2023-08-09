//require express
const express = require('express');


//connects express instance to variable app
const app = express();

//sets engine
app.set('view engine', 'jsx');

//starts engine
app.engine('jsx', require('express-react-views').createEngine());

//set port
const PORT = 3000;

// Routes
app.get("/greeting", (req, res) => {
  res.render("GenericHello");
  
});
// ----Render is a way to display the jsx
// ---- Send just display whatever is placed inside the quote

// ------another way to display on the page
// app.get("/greeting", (req, res) => {
//   res.send("<h3>Bawo ni Stranger</h3>");
// });

app.get("/greeting/:name", (req, res)=>{
  res.render("Name",{Joe:req.params.name});

})

app.get("/tip/:total/:percentage", (req, res)=>{
  res.render("TipCalculator",{total:req.params.total,percentage:req.params.percentage});

})

app.get("/magic/:question", (req, res)=>{
  res.render("Magic8ball",{question:req.params.question})
})


//sets server and displays message if working
app.listen(PORT,(req, res)=>{
  console.log(`server is now listening on port ${PORT}`);
})