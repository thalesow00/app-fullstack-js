const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Voici les données"});
});

router.post("/", (req, res) => {
    res.json({ message: req.body.message });
});

router.put("/:id", (req, res) => {
    res.json({messageId: req.params.id });
});

//faire le CRUD
router.delete("/:id", (req, res) => {
    res.json({ message: "Post supprimé id : " + req.params.id });
});
// pour faire les like sur les contenue 

router.patch("/like-post/:id", (req, res) => {
    res.json({ message: "Post liké : id : " + req.params.id});
})

router.patch("/dislike-post/:id", (req, res) => {
    res.json({ message: "Post disliké : id : " + req.params.id});
})
module.exports = router;