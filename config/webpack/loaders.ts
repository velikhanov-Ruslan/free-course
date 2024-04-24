import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { IConfig } from "./types/config";

export function buildLoaders({ isDev }: IConfig): webpack.RuleSetRule[] {
  const stylesLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => !!resPath.includes(".module."),
            localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };
  const tsLoaders = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: "/node_modules/",
  };

  return [tsLoaders, stylesLoaders];
}
