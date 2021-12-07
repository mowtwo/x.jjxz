import { hooks, createConfiguration } from '@midwayjs/hooks';
import bodyParser from 'koa-bodyparser';
import * as orm from "@midwayjs/orm"

export default createConfiguration({
  imports: [
    hooks({
      middleware: [bodyParser()],
    }),
    orm
  ],
  importConfigs: [
    './config.default'
  ]
});
