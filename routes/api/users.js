const express = require('express');
const usersRouter = express.Router();
const { tryCatchWrapper } = require('../../middlwares');
const { auth, validateBody } = require('../../middlwares');
const { upload, avatarResize } = require('../../middlwares/avatar');
const {
  register,
  //   login,
  logout,
  updateAllData,
  getCurrentUser,
  updateAvatar,
  verifyEmail,
  repeatVerifyEmail,
} = require('../../controllers/auth.controller');

const {
  userRegistration,
  userLogin,
  getUserInfo,
} = require('../../controllers/auth.controller');

const {
  validateRegistration,
  loginValidation,
  updateUserValidate,
} = require('../../validation');

usersRouter.post('/register', tryCatchWrapper(register));
// usersRouter.post('/login', tryCatchWrapper(login));
usersRouter.post('/logout', tryCatchWrapper(logout));
usersRouter.put('/update', auth, tryCatchWrapper(updateAllData));
usersRouter.get('/current', auth, tryCatchWrapper(getCurrentUser));
usersRouter.post(
  '/avatars',
  auth,
  upload.single('avatar'),
  avatarResize,
  tryCatchWrapper(updateAvatar),
);
usersRouter.get('/verify/:verificationToken', tryCatchWrapper(verifyEmail));
usersRouter.get('/verify', tryCatchWrapper(repeatVerifyEmail));

usersRouter.post(
  '/register',
  validateBody(validateRegistration),
  tryCatchWrapper(userRegistration),
);
usersRouter.post(
  '/login',
  validateBody(loginValidation),
  tryCatchWrapper(userLogin),
);
usersRouter.get('/userinfo/:userId', auth, tryCatchWrapper(getUserInfo));
usersRouter.patch(
  '/userinfo/:userId',
  validateBody(updateUserValidate),
  tryCatchWrapper(updateUser),
);

module.exports = usersRouter;
