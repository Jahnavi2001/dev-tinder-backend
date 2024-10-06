const adminAuth = (req, res, next) => {
  console.log("Admin auth is getting checked");
  // Logic of checking if the request is authorized
  const token = "abc";
  const isAdminAuthorized = token === "abc";
  if (isAdminAuthorized) {
    next();
  } else {
    res.status(401).send("Unauthorized request");
  }
};

const userAuth = (req, res, next) => {
  console.log("User auth is getting checked");
  // Logic of checking if the request is authorized
  const token = "abc";
  const isAdminAuthorized = token === "abc";
  if (isAdminAuthorized) {
    next();
  } else {
    res.status(401).send("Unauthorized request");
  }
};

module.exports = {
  adminAuth,
  userAuth
};
