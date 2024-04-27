"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pizza = void 0;
const dataResource_1 = require("../services/dataResource");
exports.pizza = new dataResource_1.DataResource("http://localhost:3000/pizzas");
