// csv writer project

import { appendFileSync } from "fs";

export class CSVWriter<T> {
  constructor(private columns: (keyof T)[]) {
    this.csv = this.columns.join(",") + "\n";
  }

  private csv: string;

  save(fileName: string): void {
    appendFileSync(fileName, this.csv);
    this.csv = "\n";
    console.log("saved to", fileName);
  }

  addRows(values: T[]): void {
    let rows = values.map((v) => this.formattRow(v));

    this.csv += rows.join("\n");
    console.log(this.csv);
  }

  private formattRow(value: T): string {
    return this.columns.map((col) => value[col]).join(",");
  }
}
