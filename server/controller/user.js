/** @format */

const User = require('../model/user');

exports.createUser = async (req, res) => {
  console.log("request comething to server", req.body.data.hey);
  // const { username } = req.body;
  // if (!req.body.data)
  //   return res.status(400).send({ ok: false, message: 'Name is required' });
  // let userExist = await User.findOne( req.body.data ).exec();
  // if (userExist)
  //   return res.status(400).send({ ok: false, message: 'Username is taken' });

  res.send("hello")

  //register
  // const user = await new User(
  //   req.body.data,
  // ).save();

  // return res.json({ ok: true, user });
};
