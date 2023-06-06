function getCurrentRoute() {
  const req = new Request();
  return req.path;
}
export { getCurrentRoute };
