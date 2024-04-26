"use strict";
// csv writer project
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVWriter = void 0;
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
    formattRow(value) {
        return this.columns.map((col) => value[col]).join(",");
    }
}
exports.CSVWriter = CSVWriter;
