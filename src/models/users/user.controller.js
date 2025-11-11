import { createAsyncFn } from "../../utils/createAsyncFn.js";
import httpStatusCode from "http-status-codes";
import { userServices } from "./user.services.js";
import { sendResponse } from "../../utils/send.response.js";

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
