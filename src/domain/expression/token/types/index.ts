import { IExpression, Statement, Rate, Protocol } from "../../../types";
import ratesEnum = require("../../../enum/rates");

class Expression implements IExpression {
    getProps(){
        return {}
    }

    cleanExpression(expression: Statement) : Statement{
        return ""
    }

    getProtocols(expression: Statement) : Protocol[] {
        let protocols = expression.split(",").map((e) => ({name: e.trim()}));
        
        return protocols;
    }

    getRate(expression: Statement) : Rate | null {
        const rates = ratesEnum.rateExpression.exec(expression);
        let fullRate = rates.shift();
        if(rates.length === ratesEnum.requiredLength) {
            return {
                at: rates[0] === ratesEnum.at,
                quantity: rates[1],
                repeat: rates[0] === ratesEnum.every,
                unit: rates[2],
                fullRate
            }
        } else {
            return null;
        }
    }
}

export = Expression;