function sendResponse(code, repsonse) {
  return {
    statusCode: code,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(repsonse),
  };
}

module.exports = { sendResponse }
