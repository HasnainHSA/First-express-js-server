import express from "express";
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello Fellows! 👋')
})

app.get('/name/:username', (req, res) => {
  const username = req.params.username
  console.log(username);
  res.json({"message": `Welcome ${username} to my starter Api `})
})


app.get('/quran/quotes', (req, res) => {

  const quoteArray = 
  ["ٱلْحَمْدُ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ", "قُلۡ اِنَّ هُدَى اللّٰهِ هُوَ الۡهُدٰى", "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ", "إِنَّ ٱللَّهَ مَعَ ٱلصَّبِرِينَ", "فَٱصْبِرْ صَبْرًا جَمِيلً","وَمَا بِكُمْ مِنْ نِعْمَةٍ فَمِنَ اللَّهِ", "فَبِاَىِّ اٰلَاۤءِ رَبِّكُمَا تُكَذِّبٰنِۙ"]

  let random = quoteArray[(Math.floor(Math.random()*(quoteArray.length)))];

  // res.json({"Quotes From Quran": random});
  res.send("<div style='display: flex; justify-content: center; box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px; margin: 10% 90px; border-radius: 10px; background-color: black;' >"+
  "<h1 style='font-size: 60px; font-family: Verdana, Geneva, Tahoma, sans-serif; color: white; border: 3px solid white; padding: 20px;border-radius: 5px;'>"+random+"</h1>"+"</div>")
  })

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})