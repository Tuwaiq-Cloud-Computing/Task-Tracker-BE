const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// 1. read all tasks
router.get("/tasks", async (req, res) => {
  try {
    const allTasks = await prisma.tasks.findMany();
    res.json(allTasks);
    res.status(200);
  } catch (e) {
    res.json("There was an error getting the tasks.");
    res.status(500);
  }
});
// 2. delete all tasks
router.delete("/tasks", async (req, res) => {
  try {
    const deleteTasks = await prisma.tasks.deleteMany();
    res.json(deleteTasks);
    res.status(200);
  } catch (e) {
    res.json("There was an error deleting the tasks.");
    res.status(500);
  }
});
// 3. create a new task
router.post("/task", async (req, res) => {
  const { task, isDone } = req.body;
  try {
    const newTask = await prisma.tasks.create({
      data: {
        task,
        isDone,
      },
    });
    res.json(newTask);
    res.status(200);
  } catch (e) {
    res.json("There was an error creating the task.");
    res.status(500);
  }
});
// 4. read a single task
router.get("/task/:id", async (req, res) => {
  userid = req.params.id;
  try {
    const getTask = await prisma.tasks.findUnique({
      where: {
        ID: parseInt(userid),
      },
    });
    res.json(getTask);
    res.status(200);
  } catch (e) {
    res.json("There was an error getting the task.");
    res.status(500);
  }
});
// 5. update a task
router.put("/task/:id", async (req, res) => {
  userid = req.params.id;
  try {
    const updateTask = await prisma.tasks.update({
      where: {
        ID: parseInt(userid),
      },
      data: {
        task: req.body.task,
        isDone: req.body.isDone,
      },
    });
    res.json(updateTask);
    res.status(200);
  } catch (e) {
    res.json("There was an error updating the task.");
    res.status(500);
  }
});
// 6. delete a task
router.delete("/task/:id", async (req, res) => {
  userid = req.params.id;
  try {
    const deleteTask = await prisma.tasks.delete({
      where: {
        ID: parseInt(userid),
      },
    });
    res.json(deleteTask);
    res.status(200);
  } catch (e) {
    res.json("There was an error deleting the task.");
    res.status(500);
  }
});

module.exports = router;
