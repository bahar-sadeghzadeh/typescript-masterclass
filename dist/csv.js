"use strict";
// csv writer project
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class CSVWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(",") + "\n";
    }
    save(fileName) {
        (0, fs_1.appendFileSync)(fileName, this.csv);
        this.csv = "\n";
        console.log("saved to", fileName);
    }
    addRows(values) {
        let rows = values.map((v) => this.formattRow(v));
        this.csv += rows.join("\n");
        console.log(this.csv);
    }
    formattRow(p) {
        return this.columns.map((col) => p[col]).join(",");
    }
}
const writer = new CSVWriter(["id", "amount", "to", "notes"]);
writer.addRows([
    { id: 1, amount: 50, to: "bahar", notes: "web dev work" },
    { id: 2, amount: 100, to: "peach", notes: "birthday present" },
]);
writer.save("./data/payments.csv");
