require("express-async-errors");
const cors = require("cors");
const express = require("express");
const customResponse = require("./customResponse/customResponse");
const errorHandler = require("./errorHandler/errorHandler");
const rateLimiter = require("express-rate-limit");
const xss = require("xss-clean");
const helmet = require("helmet");
const { default: axios } = require("axios");
const app = express();
const countries = {};

// app.set("trust proxy", 1);
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(xss());
// app.use(helmet());
app.use(cors());
app.use(express.static("public"));
// app.use(
//   rateLimiter({
//     windowMs: 15 * 60 * 1000,
//     max: 10000,
//   })
// );
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const api_key =
  "9aaba082-1461-11ed-8cb3-0242ac130002-9aaba15e-1461-11ed-8cb3-0242ac130002";
app.get("/:country", async (req, res) => {
  const { country } = req.params;
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  if (!countries[country]) {
    console.log("fetch");
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${country}?unitGroup=metric&include=current&key=ZZ7LNBCMJ9SBUCFAG864ARP3S&contentType=json`;
    const response = await axios.get(url);
    const data = response.data;
    countries[country] = data;
    const today_weather = countries[country].days.find(
      (day) => new Date(day.datetime).getTime() == date.getTime()
    );
    return res.json(today_weather);
  }
  const today_weather = countries[country].days.find((day) => {
    day_date = new Date(day.datetime);
    day_date.setHours(0, 0, 0, 0);

    console.log(day_date.getTime());
    date.setHours(0, 0, 0, 0);
    console.log(date.getTime());
    console.log("****************************");

    return day_date.getTime() == date.getTime();
  });
  if (!today_weather) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${country}?unitGroup=metric&include=current&key=ZZ7LNBCMJ9SBUCFAG864ARP3S&contentType=json`;
    const data = await axios.get(url);
    countries[country] = data.data;
    console.log("fetch second");
    return res.status(200).json(data.data);
  }

  res.status(200).json(today_weather);
});

app.get("/refresh", async (req, res) => {
  const { country } = req.params;
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${country}?unitGroup=metric&include=current&key=ZZ7LNBCMJ9SBUCFAG864ARP3S&contentType=json`;
  const data = await axios.get(url);
  countries[country] = data.data;
});

app.use(customResponse);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
