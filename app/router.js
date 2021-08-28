'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const _jwt = middleware.jwtErr(app.config.jwt.secret); // 传入加密字符串

  router.post('/api/cost/user/register', controller.user.register);
  router.post('/api/cost/user/login', controller.user.login);
  router.get('/api/cost/user/test', _jwt, controller.user.test);
  router.get('/api/cost/user/get_userInfo', _jwt, controller.user.getUserInfo); // 获取用户信息
  router.post('/api/cost/user/edit_userInfo', _jwt, controller.user.editUserInfo); // 修改用户个性签名
  router.post('/api/cost/upload', controller.upload.upload);
  router.post('/api/cost/bill/add', _jwt, controller.bill.add); // 添加账单
  router.get('/api/cost/bill/list', _jwt, controller.bill.list); // 获取账单列表
  router.get('/api/cost/bill/detail', _jwt, controller.bill.detail); // 获取详情
  router.post('/api/cost/bill/update', _jwt, controller.bill.update); // 账单更新
  router.post('/api/cost/bill/delete', _jwt, controller.bill.delete); // 删除账单
  router.get('/api/cost/bill/data', _jwt, controller.bill.data); // 获取数据
};
