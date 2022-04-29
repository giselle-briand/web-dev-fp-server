import tuitsModel from './tuits-model.js';

export const findTuit = (tid) => tuitsModel.findById(tid);
export const findAllTuits = () => tuitsModel.find();
export const findPopularTuits = () => {
    const sort = {likes: -1}
    return tuitsModel.find().sort(sort);
}
export const createTuit = async (userId ,tuit) => {
    tuit.creator = userId
    return await tuitsModel.create(tuit)
}
export const deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});
export const updateTuit = (tid, tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit});
export const findTuitsByUserId = (userId) => tuitsModel.find({creator: userId});

