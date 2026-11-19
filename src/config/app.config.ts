import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config();

export interface AppConfig {
  nodeEnv: string;
  port: number;
  publicDir: string;
}

const nodeEnv = process.env.NODE_ENV ?? 'development';
const port = Number.parseInt(process.env.PORT ?? '3000', 10);
const publicDir = process.env.PUBLIC_DIR ?? 'public';

export const appConfig: AppConfig = {
  nodeEnv,
  port: Number.isFinite(port) ? port : 3000,
  publicDir,
};

export const publicPath = path.resolve(process.cwd(), publicDir);
