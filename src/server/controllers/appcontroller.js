export function initialize(req, res) {
  res.send("OK");
}

export function requestValidation(req, res, next) {
  let authToken = req.headers["authtoken"];
  if (!req.headers.authtoken) {
    res.status(403).send({
      status: "success",
      payload: {
        message: "No credentials sent"
      }
    });
  } else if (authToken === undefined || authToken != process.env.AUTH_TOKEN) {
    res.status(401).send({
      status: "success",
      payload: {
        message: "Not valid access token"
      }
    });
  } else {
    next();
  }
}

export function getMe(req, res) {
  res.json({
    status: "success",
    payload: {
      message: "Message from Backend Express JS"
    }
  });
}
