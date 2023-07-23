function buildResponse(res, code, message): void {
  res.status(code);
  res.send(message);
}

export default buildResponse;
