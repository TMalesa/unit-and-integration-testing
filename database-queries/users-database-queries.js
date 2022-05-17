const { UserModel } = require("../database-models/user-models");

const createUser = async ({ name, surname, age }) => {
    await UserModel.create({
        name: name,
        surname: surname,
        age: age
    });

    return `Operation created successfully`

}
const getAllUsers = async () => {
    const users = await UserModel.find();

    return users;
}
const getUserById = async (userId) => {
    const user = await UserModel.findById({ _id: userId })

    return user;
}
const deleteUserById = async (userId) => {
    await UserModel.deleteOne({ _id: userId });

    return `Operation deleted successfully`;
}

const updateUserById = async (userId, { name, surname, age }) => {
    await UserModel.updateOne({ _id: userId }, { name: name, surname: surname, age: age });

    return `Operation updated successfully`
}
module.exports = { createUser, getAllUsers, getUserById, deleteUserById, updateUserById }