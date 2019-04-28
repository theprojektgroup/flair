import {IExpression, Protocol, Rate, Statement} from '../../../types';

import ratesEnum = require('../../../enum/rates');

class Expression implements IExpression {
  getProps() {
    return {};
  }

  cleanExpression(expression: Statement): Statement {
    return '';
  }

  getProtocols(expression: Statement): Protocol[] {
    const protocols =
        expression.split(',').map((statement) => ({name: statement.trim()}));

    return protocols;
  }

  getRate(expression: Statement): Rate|null {
    const rates = ratesEnum.rateExpression.exec(expression) || [];
    const fullRate = rates.shift();
    if (rates.length === ratesEnum.requiredLength) {
      return {
        at: rates[0] === ratesEnum.at,
        quantity: rates[1],
        repeat: rates[0] === ratesEnum.every,
        unit: rates[2],
        fullRate
      };
    } else {
      return null;
    }
  }
}

export = Expression;