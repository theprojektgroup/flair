import Tokens = require("../enum/tokens");
import Workflow = require("../workflow");

/**
 * interface IObject
 */
declare interface IObject {
    [key: string]: any;
}

/**
 * interface IToken
 */
declare interface IToken {
    expression: RegExp,
    value: any,
    type: Tokens
}

/**
 * interface IExpression
 */
declare interface IExpression {
    getProps(): IObject
    cleanExpression(expression: Statement): Statement
}

/**
 * interface ITokenExpression
 */
declare interface ITokenExpression extends IObject {
    [key: string]: IToken
}

/**
 * type Statement
 */
declare type Statement = String | string;


/**
 * type FlairStatement
 */
declare type FlairStatement = {
    statement: Statement,
    props: IObject
}

// TODO: finish this type
/**
 * type FlairObject
 */
declare type FlairObject = {}


declare type Rate = {
    quantity: string
    repeat : boolean
    at: boolean
    unit: string,
    fullRate: string
}

declare type Protocol = {
    name: string
}