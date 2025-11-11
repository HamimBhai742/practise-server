const createUser = async (data) => {
  const user = await User.create(data);
  return user;
};
export const userServices = {
  createUser,
};