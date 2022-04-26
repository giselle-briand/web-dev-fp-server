import * as usersDao from "../users/users-dao.js";
import * as tuitsDao from "../tuits/tuits-dao.js";

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
        res.send(user)
    } else {
        res.send(403)
    }
}

const createUser = async (req, res) => {
    const newUser = req.body;
    const insertedUser = await usersDao.createUser(newUser);
    res.json(insertedUser);
}

const signup = async (req, res) => {
    const user = req.body
    const existingUser = await usersDao.findUserByEmail(user.email)
    if (existingUser) {
        console.log("oh no!")
        res.sendStatus(403)
    } else {
        const actualUser = await usersDao.createUser(user)
        res.json(actualUser)
    }
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
    req.session['currentUser'] = updatedUser;
    res.send(status);
}

const profile = (req, res) => {
    const currentUser = req.session['currentUser']
    //const existingUser = await usersDao.findUserByCredentials(req.body.email, req.body.password)
    if(currentUser ) {
        //req.session['currentUser'] = currentUser
        res.json(currentUser )
    } else {
        res.sendStatus(503)
    }
}

const login = async (req, res) => {
    const existingUser = await usersDao
        .findUserByCredentials(req.body.email, req.body.password)
    if(existingUser) {
        req.session['currentUser'] = existingUser
        return res.send(existingUser)
    } else {
        return res.sendStatus(503)
    }
}

const logout = (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
}

const findLikedTuits = async (req, res) => {
    const userId = req.params.uid;
    const user = await usersDao.findUser(userId);
    const liked_tuits = user.liked_tuits;
    console.log(user)
    const tuits = [];
    for (let i = 0; i < liked_tuits.length; i++) {
        const newTuit = await tuitsDao.findTuit(liked_tuits[i]);
        tuits.push(newTuit);
    }
    res.json(tuits);
}

const findBookmarks = async (req, res) => {
    const userId = req.params.uid;
    const user = await usersDao.findUser(userId);
    const bookmarks = user.bookmarks;
    const tuits = [];
    for (let i = 0; i < bookmarks.length; i++) {
        const newTuit = await tuitsDao.findTuit(tuits[i]);
        tuits.push(newTuit);
    }
    res.json(tuits);
}

const findFollowers = async (req, res) => {
    const userId = req.params.uid;
    const user = await usersDao.findUser(userId);
    const followers = user.followers;
    const fs = [];
    for (let i = 0; i < followers.length; i++) {
        const newUser = await usersDao.findUser(followers[i]);
        fs.push(newUser);
    }
    res.json(fs);
}

const findFollowing = async (req, res) => {
    const userId = req.params.uid;
    const user = await usersDao.findUser(userId);
    const following = user.following;
    const fs = [];
    for (let i = 0; i < following.length; i++) {
        const newUser = await usersDao.findUser(following[i]);
        fs.push(newUser);
    }
    res.json(fs);
}

export default (app) => {
    app.post('/api/signup', signup)
    app.post('/api/login', login)
    app.post('/api/logout', logout)
    app.post('/api/profile', profile)
    app.get('/api/users/:uid', findUser);
    app.get('/api/users/:uid/likes', findLikedTuits);
    app.get('/api/users/:uid/bookmarks', findBookmarks);
    app.get('/api/users/:uid/followers', findFollowers);
    app.get('/api/users/:uid/following', findFollowing);
    app.post('/api/users/credentials', findUserByCredentials);
    app.delete('/api/users/:uid', deleteUser);
    app.put('/api/users/:uid', updateUser);
}