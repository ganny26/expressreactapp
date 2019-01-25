import Sequelize from 'Sequelize'
module.exports = (sequelize) => {
  let User = sequelize.define('User', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  })

  return User;
};