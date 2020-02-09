import jwt from 'jsonwebtoken';
import sessionSchemaValidation from '../validations/session';
import User from '../models/User';
import appConfig from '../../config/app';

const { secret, expiresIn } = appConfig.auth;

class SessionController {
  async store(req, res) {
    try {
      if (!sessionSchemaValidation.isValid(req.body)) {
        return res.status(400).json({ error: 'Validation failed' });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }

      if (!(await user.checkPassword(password))) {
        return res.status(401).json({ error: 'Password does not match' });
      }

      const { id, name } = user;

      return res.json({
        user: {
          id,
          name,
          email,
        },
        token: jwt.sign({ id }, secret, { expiresIn }),
      });
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  }
}

export default new SessionController();
