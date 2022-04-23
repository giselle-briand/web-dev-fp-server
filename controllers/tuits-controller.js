import * as tuitsDao from "../tuits/tuits-dao.js";
import * as usersDao from "../users/users-dao.js";
import mongoose from "mongoose";

const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits();
    res.json(tuits);
}

const createTuit = async (req, res) => {
    const newTuit = req.body;
    const userId = req.params.userId;
    const user = await usersDao.findUser(userId);
    const date = new Date();
    console.log(user.username)
    newTuit.username = user.username;
    newTuit.name = user.name;
    newTuit.likes = 0;
    newTuit.disliked = 0;
    newTuit.comments = 0;
    newTuit.liked = false;
    newTuit.disliked = false;
    newTuit.verified = false;
    newTuit.time = "Just now";
    newTuit["avatar-image"] =  user["avatar-image"];
    newTuit.retuits = 0;
    newTuit["api-post-id"] = "";
    newTuit.date = {};
    newTuit.date.day = date.getDate();
    newTuit.date.month = date.getUTCMonth() + 1;
    newTuit.date.year = date.getUTCFullYear();
    newTuit.date.time = date.toISOString().split('T')[1].substring(0,5);
    const insertedTuit = await tuitsDao.createTuit(userId, newTuit);
    res.json(insertedTuit);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.send(status);
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
    res.send(status);
}

const findCommentsByUserId = async (req, res) => {
    const userId = req.params.userId
    const comments = await tuitsDao.findTuitsByUserId(userId)
    res.json(comments)
}

export default (app) => {
    app.post('/api/tuits/users/:userId', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.get('/api/users/:userId/tuits', findCommentsByUserId);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
