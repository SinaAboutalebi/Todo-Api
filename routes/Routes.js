//---------------------------💔🚬 'Zer0Power 💔🚬---------------------------//
var express = require("express"),
  router = express.Router(),
  todos = require("../src/schemas/todoSchema");

router.post("/add", async function (req, res) {

  try {
    const newTodo = new todos({
      Title: req.body.title,
      Description: req.body.desc,
    });
    let savenewTodo = await newTodo.save();
    console.log("[📓]New Item Saved.", req.body.title);
    res.status(201).json({ message: "OK" });
  } catch (error) {
    console.log("[❌]Failed To Save New Item.", error);
    res.send(500).json({ message: "ERR" });
  }
});

router.post("/delete", async function (req, res) {
  try {
    await todos.deleteById(req.body.id);
    res.status(200).json({ message: "OK" });
  } catch (error) {
    res.status(500).json({ message: "ERR" });
  }
});

router.post("/edit", async function (req, res) {
  try {
    await todos.findByIdAndUpdate(req.body.id, {
      ...(req.body.title && { Title: req.body.title }),
      ...(req.body.desc && { Description: req.body.desc }),
      ...(req.body.completed && { Completed: req.body.completed })
    });
    res.status(200).json({ message: "OK" });
  } catch (error) {
    res.status(500).json({ message: "ERR" });
  }
});

router.get("/todos", async function (req, res) {
  const data = await todos.find({});
  res.json(data);
});

module.exports = router;
//---------------------------💔🚬 'Zer0Power 💔🚬---------------------------//