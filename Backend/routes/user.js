const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/middleware");



router.post('/courses', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const username = req.username;
    console.log(username);

});


module.exports = router














