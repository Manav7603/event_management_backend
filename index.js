const cors = require("cors");
const { events } = require("../events");
const { allEventsData } = require("../allEventsData");

const corsMiddleware = cors({
    origin: ['http://localhost:5173', 'https://event-management-backend-mauve.vercel.app/'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
});

module.exports = (req, res) => {
    return new Promise((resolve, reject) => {
        corsMiddleware(req, res, async () => {
            if (req.method === "GET") {
                if (req.url === "/events") {
                    return res.json(events);
                }
                if (req.url === "/participants") {
                    return res.json(allEventsData);
                }
                return res.send("<h1> Hello from Backend!! </h1>");
            }

            res.status(405).json({ error: "Method Not Allowed" });
            resolve();
        });
    });
};
