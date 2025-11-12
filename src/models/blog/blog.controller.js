import { createAsyncFn } from '../../utils/createAsyncFn.js';
import { sendResponse } from '../../utils/send.response.js';
import httpstatuscode from 'http-status-codes';
import { blogService } from './blog.services.js';
const createBlog = createAsyncFn(async (req, res) => {
  const result = await blogService.createBlog(req.body);
  sendResponse(res, {
    statusCode: httpstatuscode.CREATED,
    success: true,
    message: 'Blog created successfully',
    data: result,
  });
});

export const blogController = {
  createBlog,
};
