import express from "express";
import hbs from "hbs";
import path from "path";

const app = express();
const PORT = 5001;
app.set("view engine", "hbs");
app.set("views","views");

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to GlowDerma</h1>");
});

app.get("/doctors",(req,res)=>{
    res.render("doctors")
})
app.get("/services",(req,res)=>{
    let name = req.query.category
    res.render("services",{name:"Our services"})
})

app.post('/submit-appointment', (req, res) => {
    const { name, email, service, preferredDate, preferredTime } = req.body;
    res.render('appointmentDetails', {
      name,
      email,
      service,
      preferredDate,
      preferredTime
    });
  });

  app.get('/submit-appointment', (req, res) => {
    res.render('appointmentDetails',{
  "name": "Neeti Darji",
  "email": "neeti@example.com",
  "service": "Nothing",
  "preferredDate": "2024-01-24",
  "preferredTime": "10:00 AM"
}
); 
});

  app.get('/offerings', (req, res) => {
    const offerings = [
      {
        name: "Anti-Aging Treatment",
        price: 5000,
        duration: "60 mins",
        description: "Advanced treatment to reduce fine lines and wrinkles",
        available: true
      },
      {
        name: "Acne Treatment",
        price: 3000,
        duration: "45 mins",
        description: "Specialized treatment for acne-prone skin",
        available: true
      },
      {
        name: "Chemical Peel",
        price: 4000,
        duration: "30 mins",
        description: "Skin resurfacing treatment for even tone",
        available: false
      }
    ];
    res.render('offerings', { offerings });
  }); 
  
  app.get('/testimonials', (req, res) => {
    const testimonials = [
      {
        name: "John Doe",
        rating: 5,
        comment: "Excellent service!",
        date: "2024-01-20"
      },
      {
        name: "Jane Smith",
        rating: 4,
        comment: "Very professional staff",
        date: "2024-01-18"
      }
    ];
    res.render('testimonials', { testimonials });
  });  

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
