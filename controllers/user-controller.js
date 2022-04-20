import * as usersDao from "../users/users-dao.js";

const findUser = async (req, res) => {
    const userId = req.params.uid;
    const user = await usersDao.findUser(userId);
    res.json(user);
}

const findUserByCredentials = async (req, res) => {
    const crendentials = req.body
    const email = crendentials.email
    const password = crendentials.password
    const user = await usersDao.findUserByCredentials(email, password)
    if(user) {
        res.send(200)
    } else {
        res.send(403)
    }
}

const signup = async (req, res) => {
    const user = req.body
    const existingUser = await usersDao.findUserByEmail(user.email)
    if (existingUser) {
        res.sendStatus(403)
    } else {
        const actualUser = await usersDao.createUser(user)
        res.json(actualUser)
    }
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
    app.post('/api/users/credentials', findUserByCredentials)
    app.post('/api/users', signup);
    app.delete('/api/users/:uid', deleteUser);
    app.put('/api/users/:uid', updateUser);
}