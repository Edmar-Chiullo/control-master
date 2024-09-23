/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

//import {onRequest} from "firebase-functions/v2/https";
//import * as logger from "firebase-functions/logger";
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

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
