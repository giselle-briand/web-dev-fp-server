import usersModel from "./users-model.js";
export const findUser = (uid) => usersModel.findById(uid);
export const findUserByCredentials = (email, password) => usersModel.findOne({email, password});
export const findUserByEmail = (email) => usersModel.findOne({email});
export const findAllUsers = () => usersModel.find();
export const createUser = (user) => usersModel.create(user);
export const deleteUser = (uid) => usersModel.deleteOne({_id: uid});
export const updateUser = (uid, user) => usersModel.updateOne({_id: uid}, {$set: user});