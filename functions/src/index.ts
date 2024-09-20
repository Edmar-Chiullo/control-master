import * as functions from 'firebase-functions';
import next from 'next';
import { Request, Response } from 'firebase-functions';

const app = next({
  dev: false, // true se estiver em ambiente de desenvolvimento
  conf: { distDir: '.next' }
});

const handle = app.getRequestHandler();

export const nextApp = functions.https.onRequest((req: Request, res: Response) => {
  return app.prepare().then(() => handle(req, res));
});