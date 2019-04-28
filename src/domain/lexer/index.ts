import Tokens = require('../enum/tokens');
import Lines = require('../enum/lines');
import TokenExpression = require('../expression/token');
import {IObject, Statement} from '../types';

export class Lexer {
  apply(statement: Statement) {
    const lines: string[] = this.getLines(statement);
    const expressions = lines.map(this.getTokens.bind(this));
  }
  private getExpression(): RegExp {
    const expression: RegExp = new RegExp(Object.keys(Tokens).join('|'), 'gi');

    return expression;
  }

  // TODO: implement own type
  private getLines(statement: Statement): string[] {
    return statement.split(Lines.next);
  }

  private getTokens(line: string, index: number) {
    if (line !== '') {
      const typeOfLine = this.getType(line);
      const expression = typeOfLine.expression(line);
      // TODO: remove console.log
      console.log(typeOfLine);
      const tokens = typeOfLine.apply(expression);
      // TODO: remove console.log
      console.log(tokens);
    }
  }

  // TODO: implement own type
  private getType(line: Statement): IObject {
    const expression: RegExp = this.getExpression();
    const lineType = line.match(expression);
    if (lineType && lineType.length > 0) {
      const typeOf: string = lineType[0];
      if (TokenExpression.hasOwnProperty(typeOf)) {
        return TokenExpression[typeOf];
      }
    }

    return {};
  }
}