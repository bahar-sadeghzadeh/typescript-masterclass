"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pizza_1 = require("./models/pizza");
const form = document.querySelector(".create");
form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    const data = new FormData(form);
    const newPizza = {
        title: data.get("title"),
        description: data.get("description"),
        toppings: data.getAll("toppings"),
        price: parseInt(data.get("price")),
    };
    const response = yield pizza_1.pizza.save(newPizza);
    if (!response.ok) {
        console.log("Not able to save the pizza");
    }
    if (response.ok) {
        window.location.href = "/";
    }
}));
