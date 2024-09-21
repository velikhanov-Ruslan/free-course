export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string
}

export interface IEnv {
  mode: BuildMode,
  port: number,
}

export interface IConfig {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number,
}
