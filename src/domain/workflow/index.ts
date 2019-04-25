import { Statement, FlairStatement } from "../types";

function workflow (values: any) : Function {
    let statement : Statement = values[0];

    return function (props: any) : FlairStatement {
        return {
            statement,
            props
        }
    }
}


export = workflow;