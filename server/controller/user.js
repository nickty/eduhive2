/** @format */

const User = require('../model/user');

exports.createUser = async (req, res) => {
  console.log('request comething to server', req.body.data);
  // const { username } = req.body.data.username;
  // console.log(username);
  // if (!username)
  //   return res.status(400).send({ ok: false, message: 'Name is required' });
  // let userExist = await User.findOne({ username: username }).exec();
  // if (userExist)
  //   return res.status(400).send({ ok: false, message: 'Username is taken' });

  res.send('hello');

  // register
  // const user = await new User(username).save();

  // return res.json({ ok: true, user });
};
