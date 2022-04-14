import usersModel from "./users-model.js";
export const findUser = (uid) => usersModel.find({_id: uid});
export const createUser = (user) => usersModel.create(user);
export const deleteUser = (uid) => usersModel.deleteOne({_id: uid});
export const updateUser = (uid, user) => usersModel.updateOne({_id: uid}, {$set: user});