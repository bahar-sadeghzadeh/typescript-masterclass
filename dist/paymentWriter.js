"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csv_1 = require("./csv");
const paymentWriter = new csv_1.CSVWriter(["id", "amount", "to", "notes"]);
paymentWriter.addRows([
    { id: 1, amount: 50, to: "bahar", notes: "web dev work" },
    { id: 2, amount: 100, to: "peach", notes: "birthday present" },
]);
paymentWriter.save("./data/payments.csv");
