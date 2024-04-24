import webpack from "webpack";
import { buildConfig } from "./config/webpack/config";
import { BuildPaths, IEnv } from "./config/webpack/types/config";
import path from "path";

export default (env: IEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const mode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 3000;

  const config: webpack.Configuration = buildConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });
  return config;
};
