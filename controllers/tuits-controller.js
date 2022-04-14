import * as tuitsDao from "../tuits/tuits-dao.js";

const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits();
    res.json(tuits);
}

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    newTuit.comments = 0;
    newTuit.retuits = 0;
    newTuit.liked = false;
    newTuit.disliked = false;
    newTuit.verified = false;
    newTuit.handle = "webdev";
    newTuit.username = "Web Dev";
    newTuit.time = "Just now";
    newTuit["avatar-image"] = "../media/profileimage.jpg";
    const insertedTuit = await tuitsDao.createTuit(newTuit);
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

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
