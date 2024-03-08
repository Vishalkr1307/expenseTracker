const Task=require("..//module/task")


const getTasks = async (req, res, next) => {
    try {
        const tasks = await Task.findAll({
            attributes: ['id', 'title', 'description', 'price'] // Specify the attributes you want to retrieve
        });
        console.log(tasks);
        return res.status(200).send(tasks);
    } catch (err) {
        return res.status(400).send("Bad Request");
    }
}


const singleTask = async (req, res, next) => {
    try {
        const taskId = req.params.id;
        const task = await Task.findByPk(taskId);
        if (!task) {
            return res.status(404).send("Task not found");
        }
        console.log(task);
        return res.status(200).send(task);
    } catch (err) {
        return res.status(400).send("Bad Request");
    }
}

const deleteTask = async (req, res, next) => {
    try {
        const taskId = req.params.id;
        const task = await Task.findByPk(taskId);
        if (!task) {
            return res.status(404).send("Task not found");
        }
        await task.destroy();
        return res.status(200).send("Task deleted successfully");
    } catch (err) {
        return res.status(400).send("Bad Request");
    }
}

const addTask = async (req, res, next) => {
    try {
        console.log(req.body)
        const task = await Task.create(req.body);
        console.log(task);
        return res.status(200).json(task);
    } catch (err) {
        return res.status(400).send("Bad Request");
    }
}

const updateTask = async (req, res, next) => {
    try {
        const taskId = req.params.id;
        let task = await Task.findByPk(taskId);
        if (!task) {
            return res.status(404).send("Task not found");
        }
        // Update task properties
        task = await task.update(req.body);
        console.log(task);
        return res.status(200).send(task);
    } catch (err) {
        return res.status(400).send("Bad Request");
    }
}

module.exports = { addTask, getTasks, singleTask, updateTask, deleteTask };

