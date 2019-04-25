import { IObject } from "../types";

const rates : IObject = {
    at: "at",
    every: "every",
    requiredLength: 3,
    frequency: ["every", "at"],
    unit: ["hours","minutes","days"] // has to be in plural
}


const ratesExpression = new RegExp(`(${rates.frequency.join("|")}) ([0-9]+) (${rates.unit.join("?|")})`, "gi");


rates.rateExpression = ratesExpression;

export = rates;