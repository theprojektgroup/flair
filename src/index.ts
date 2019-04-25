// tslint:disable-next-line: no-reference
///<reference path="./domain/types/index.d.ts"/>

import {Lexer} from './domain/lexer';
import {FlairStatement} from './domain/types';
import workflow = require('./domain/workflow');

const l: Lexer = new Lexer();

const {statement, props}: FlairStatement = workflow`
  start MyRestInput, MySecondInput every 1 hour
  do ApplyPresenter
  end MyPublisher
`({prop: null});


// TODO: remove console.log
console.log(props);
l.apply(statement);