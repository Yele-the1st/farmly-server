const jwt = require("jsonwebtoken");

module.exports = async(req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    const error = new Error("Not Authenticated.");
    error.statusCode = 403;
    throw error;
  }
  const token = authHeader.split(" ")[1];
  let verified;
  try {
    verified = jwt.verify(token, process.env.JWT_SECRET );
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }
  if (!verified) {
    const error = new Error("Not authenticated.");
    error.statusCode = 401;
    throw error;
  }
  req.user = verified;
  next();
};
