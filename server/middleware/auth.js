import jwt from 'jsonwebtoken';

// check if token is valid while using app features

const secret = 'test';
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split('')[1];

    const isCustomAuth = token.length < 500;

    if(token && isCustomAuth) {
      // same secret used when creating specific token
      decodedData = jwt.verify(token, secret);
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }

    next();
  } catch(error) {
    console.log(error);
  }
}

export default auth;