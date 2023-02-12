const mogoose = require('mongoose');

async function Conn() {
  try {
    mogoose.set('strictQuery', true);
    await mogoose.connect('mongodb+srv://leusiojosefilimone:Qa7irV3znk-czuT@api.epy1pnc.mongodb.net/?retryWrites=true&w=majority');
    console.log('connectado ao banco');
  } catch (error) {
    console.log(error);
  }
}
module.exports = Conn;
