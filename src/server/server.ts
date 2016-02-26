import * as path from 'path';
import * as express from 'express';
import * as fs from 'fs';

let app = express();
let root = path.join(path.resolve(__dirname, '../..'));

// Serve static files
app.use(express.static(path.join(root, 'dist/client')));

app.use('/static',express.static(path.join(root, 'static')));

// Server
app.listen(3000, () => {
  console.log('Listen on http://localhost:3000');
});
