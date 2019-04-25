import Tokens = require("../enum/tokens");
import Lines = require("../enum/lines");
import TokenExpression = require("../expression/token");
import { IObject } from "../types";

export class Lexer {

    private getExpression() : RegExp {
        let expression: RegExp = new RegExp(Object.keys(Tokens).join('|'), 'gi');
        return expression;
    }

    // TODO: implement own type
    private getLines(statement: String): String[] {
        return statement.split(Lines.next);
    }

    // TODO: implement own type
    private getType(line: String) : IObject {
        let expression: RegExp = this.getExpression();
        let lineType = line.match(expression);
        if (lineType && lineType.length > 0) {
            let typeOf: string = lineType[0];
            if (TokenExpression.hasOwnProperty(typeOf)) {
                return TokenExpression[typeOf];
            }
        }
        return {};
    }

    private getTokens(line: String, index: Number) {
        if (line !== '') {
            let typeOfLine = this.getType(line);
            let expression = typeOfLine.expression(line);
            console.log(typeOfLine);
            let tokens = typeOfLine.apply(expression);
            console.log(tokens);
        }
    }

    public apply(statement: String) {
        let lines: String[] = this.getLines(statement);
        let expressions = lines.map(this.getTokens.bind(this));


        // console.log(lines);
    }
}