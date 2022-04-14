import * as usersDao from "../users/users-dao.js";

const findUser = async (req, res) => {
    const userId = req.params.uid;
    const user = await usersDao.findUser(userId);
    res.json(user);
}

const createUser = async (req, res) => {
    const newUser = req.body;
    const insertedUser = await usersDao.createUser(newUser);
    res.json(insertedUser);
}

const deleteUser = async (req, res) => {
    const userId = req.params.uid;
    const status = await usersDao.deleteUser(userId);
    res.send(status);
}

const updateUser = async (req, res) => {
    const userId = req.params.uid;
    const updatedUser = req.body;
    const status = await usersDao.updateUser(userId, updatedUser);
    res.send(status);
}

export default (app) => {
    app.get('/api/users/:uid', findUser);
    app.post('/api/users', createUser);
    app.delete('/api/users/:uid', deleteUser);
    app.put('/api/users/:uid', updateUser);
}