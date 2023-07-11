// importing express for package.json
import express from "express";

// initialize express server
const app = express()
const port = process.env.PORT || 5000

// greeting api
app.get('/', (req, res) => {
  res.send("<h1 style='text-align: center; font-size: 40px; font-family: Verdana, Geneva, Tahoma, sans-serif; color: cornflowerblue; margin-top: 10%;'>"+ "Hello Fellows! 👋" +"</h1>")
})

// get username api
app.get('/name/:username', (req, res) => {
  const username = req.params.username
  console.log(username);
  res.json({ "message": `Welcome ${username} to my starter Api ` })
})

// get quran quotes api
app.get('/quran/quotes', (req, res) => {

  const quoteArray =
    ["ٱلْحَمْدُ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ", "قُلۡ اِنَّ هُدَى اللّٰهِ هُوَ الۡهُدٰى", "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ", "إِنَّ ٱللَّهَ مَعَ ٱلصَّبِرِينَ", "فَٱصْبِرْ صَبْرًا جَمِيلً", "وَمَا بِكُمْ مِنْ نِعْمَةٍ فَمِنَ اللَّهِ", "فَبِاَىِّ اٰلَاۤءِ رَبِّكُمَا تُكَذِّبٰنِۙ"]

  // showing random random array items
  let random = quoteArray[(Math.floor(Math.random() * (quoteArray.length)))];


  res.send("<div style='display: flex; justify-content: center; box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px; margin: 10% 90px; border-radius: 10px; background-color: black;' >" +
    "<h1 style='font-size: 60px; font-family: Verdana, Geneva, Tahoma, sans-serif; color: white; border: 3px solid white; padding: 20px;border-radius: 5px;'>" + random + "</h1>" + "</div>")
})


// our server is running on this port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})