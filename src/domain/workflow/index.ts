import {FlairStatement, Statement} from '../types';

// tslint:disable-next-line: no-any
function workflow(values: any): Function {
  const statement: Statement = values[0];

  // tslint:disable-next-line: no-any
  return (props: any): FlairStatement => {
    return {statement, props};
  };
}


export = workflow;