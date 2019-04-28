import {IObject, Statement} from '../../../../types';
import Expression = require('../');

export class StartExpression extends Expression {
  expression: Statement;
  rate = '';
  regex: RegExp;

  constructor(expression: Statement) {
    super();
    this.expression = expression;
    this.regex = new RegExp(/[A-z]+/);
  }

  cleanExpression(expression: Statement): Statement {
    const rate = this.rate;
    const cleansedExpression =
        expression.replace(new RegExp(`${rate}`, 'gi'), '');

    return cleansedExpression;
  }


  getProps(): IObject {
    // TODO: remove console.log
    console.log('StartExpression getProps()');
    // TODO: remove console.log
    console.log('expression: ', this.expression);
    const rate = this.getRate(this.expression) || {fullRate: ''};
    this.rate = rate.fullRate;
    const expression = this.cleanExpression(this.expression);
    const protocols = this.getProtocols(expression);

    return {rate, protocols};
  }
}
