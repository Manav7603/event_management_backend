const express = require("express");
const cors = require("cors");
const { events } = require("./events");
const { allEventsData } = require("./allEventsData");
const app = express();

app.use(cors({
    origin: ['http://localhost:5173', 'https://eventlyworld.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));


app.get('/events', (req, res) => {
    // console.log(events)
    res.json(events)
})

app.get('/participants', (req, res) => {
    // console.log(allEventsData)
    res.json(allEventsData)
})

app.listen(5000, () => {
    console.log("Server is listening at port - 5000");
})