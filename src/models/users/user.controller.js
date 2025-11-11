const createUser = createAsyncFn(async (req, res) => {
  const user = await userServices.createUser(req.body);
  sendResponse(res, {
    success: true,
    message: 'User created successfully',
    statusCode: httpStatusCode.CREATED,
    data: user,
  });
});

export const userController = {
  createUser,
};
