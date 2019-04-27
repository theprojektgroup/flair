// import { IObject, Statement } from "../../../../types";
import Expression = require('../');

export class DoExpression extends Expression {
  expression: string;
  regex: RegExp;

  constructor(expression: string) {
    super();
    this.expression = expression;
    this.regex = new RegExp(/[A-z]/);
  }

  getProps() {
    return {};
  }
}
