import { IObject, Statement } from "../../../../types";
import Expression = require("../");

export class StartExpression extends Expression  {
    expression: Statement;
    regex: RegExp;
    rate: string = "";

    constructor(expression: Statement) {
        super();
        this.expression = expression;
        this.regex = new RegExp(/[A-z]+/);
    }

    cleanExpression(expression: Statement): Statement {
        let rate = this.rate;
        let cleansedExpression = expression.replace(new RegExp(`${rate}`, "gi"), "");
        return cleansedExpression
    }


    getProps() : IObject {
        console.log("StartExpression getProps()");
        console.log("expression: ", this.expression);
        let rate = this.getRate(this.expression) || {fullRate: ""};
        this.rate = rate.fullRate;
        let expression = this.cleanExpression(this.expression);
        let protocols = this.getProtocols(expression);
        return {
            rate,
            protocols
        }
    }
}
