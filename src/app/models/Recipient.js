import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        abbreviation: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Recipient;
