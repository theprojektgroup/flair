import Tokens = require("../../enum/tokens");
import { IObject } from "../../types";
import { StartExpression } from "./types/start";
import { DoExpression } from "./types/do";
import { EndExpression } from "./types/end";


const TokenExpression : IObject = {
    [Tokens.do]: {
        expression: (value: String) => new DoExpression(value.replace(new RegExp(`${Tokens.do} `, 'gi'), '')),
        type: Tokens.do,
        apply: (value: DoExpression) => {
            return value.getProps();
        }
    },
    [Tokens.start]: {
        expression: (value: String) => new StartExpression(value.replace(new RegExp(`${Tokens.start} `, 'gi'), '')),
        type: Tokens.start,
        apply: (value: StartExpression) => {
            return value.getProps();
        }
    },
    [Tokens.end]: {
        expression: (value: String) => new EndExpression(value.replace(new RegExp(`${Tokens.end} `, 'gi'), '')),
        type: Tokens.end,
        apply: (value: EndExpression) => {
            return value.getProps();
        }
    },
}

export = TokenExpression