import { User } from './user.model.js';

const createUser = async (data) => {
  const user = await User.create(data);
  return user;
};

const getAllUsers = async () => {
  const users = await User.find();
  return users;
};

const getSingleUser = async (id) => {
  const user = await User.findById(id);
  return user;
}

export const userServices = {
  createUser,
  getAllUsers,
  getSingleUser,
};
