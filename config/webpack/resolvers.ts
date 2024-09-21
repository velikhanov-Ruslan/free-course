import { ResolveOptions } from 'webpack';
import { IConfig } from './types/config';

export function buildResolvers(opt: IConfig): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [opt.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    };
}
