import 'zone.js/dist/zone-node';
import { enableProdMode } from '@angular/core';
import { AppServerModuleNgFactory } from '../../aot/src/uni/app.server.ngfactory';
import * as express from 'express';
import * as cors from 'cors';
import * as proxy from 'express-http-proxy';
import { ngUniversalEngine } from './universal-engine';
import * as compression from 'compression';
import * as fs from 'fs';
import * as path from 'path';
import { createServer, Server } from 'spdy';

enableProdMode();

const server = express();
const serverOptions = {
  key: fs.readFileSync('config/server.key'),
  cert: fs.readFileSync('config/server.crt'),
};
server.use(compression());
// server.use('/graphql', (req, res) => {
//   return res.redirect('https://localhost:3000/graphql');
// });
server.use(cors());
// server.use('/graphql', proxy('https://localhost:3000/graphql'));

// set our angular engine as the handler for html files, so it will be used to render them.
server.engine('html', ngUniversalEngine({
    bootstrap: [AppServerModuleNgFactory]
}));

// set default view directory
server.set('views', 'src');

// handle requests for routes in the app.  ngExpressEngine does the rendering.
server.get(['/', 'presentation', 'publications', 'agenda'], (req, res) => {
    res.render('index-aot.html', {req});
});

// handle requests for static files
server.get(['/*.(js|css|svg|png|jpg)'], (req, res, next) => {
    const fileName: string = req.originalUrl;
    console.log('[GET] ' + fileName);
    const root = fileName.startsWith('/node_modules/') ? '.' : 'src';
    res.sendFile(fileName, { root: root }, function (err) {
        if (err) {
            next(err);
        }
    });
});
const http2server = createServer(serverOptions, server as any);
http2server.listen(3200, (error: Error) => {
    if (error) {
      console.error(error);
      return process.exit(1);
    } else {
      console.log('listening on port 3200');
    }
  });
