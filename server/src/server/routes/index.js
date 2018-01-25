import todos from "./todos";

const API_VERSION = process.env.npm_package_version.split(".")[0];

export default app => {
  const use = (path, handler) => app.use(`/v${API_VERSION}${path}`, handler);

  use("/todos", todos);

  // // Catch all 404s
  use("*", (req, res) => {
    res.status(404).json({
      message: "Endpoint does not exist"
    });
  });

  // Catch all wrong api versions
  app.use("/*", (req, res) => {
    res.status(406).json({
      message: "Api version is not supported, Please update."
    });
  });
};
