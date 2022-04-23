import tuitsModel from './tuits-model.js';

export const findTuit = (tid) => tuitsModel.findById(tid);
export const findAllTuits = () => tuitsModel.find();
export const createTuit = async (userId ,tuit) => {
    tuit.creator = userId
    const actualTuit = await tuitsModel.create(tuit);
    return actualTuit
}
export const deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});
export const updateTuit = (tid, tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit});
export const findTuitsByUserId = (userId) => tuitsModel.find({creator: userId});

