const express = require('express');
const bodyParser = require('body-parser');

const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

const app = express();
const cors = require("cors");
const corsOption = {
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(cors());


// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use(express.json());
// app.use("/admin", adminRouter)
app.use("/user", userRouter)
app.use("/admin", adminRouter)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
