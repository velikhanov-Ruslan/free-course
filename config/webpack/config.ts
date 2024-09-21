import webpack from 'webpack';
import { IConfig } from './types/config';
import { buildLoaders } from './loaders';
import { buildPlugins } from './plugins';
import { buildResolvers } from './resolvers';
import { builDevServer } from './devServer';

export function buildConfig(opt: IConfig): webpack.Configuration {
    const { mode, paths, isDev } = opt;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        module: {
            rules: buildLoaders(opt),
        },
        plugins: buildPlugins(opt),
        resolve: buildResolvers(opt),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? builDevServer(opt) : undefined,
    };
}
