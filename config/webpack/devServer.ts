import { Configuration as DevConfigServer } from 'webpack-dev-server';
import { IConfig } from './types/config';

export function builDevServer(opt: IConfig): DevConfigServer {
    return {
        port: opt.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
