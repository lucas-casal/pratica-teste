"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var conflict_error_1 = require("../errors/conflict-error");
var notfound_error_1 = require("../errors/notfound-error");
var fruits_repository_1 = __importDefault(require("../repositories/fruits-repository"));
function getFruits() {
    return fruits_repository_1["default"].getFruits();
}
function getSpecificFruit(id) {
    var fruit = fruits_repository_1["default"].getSpecificFruit(id);
    if (!fruit) {
        throw (0, notfound_error_1.notFoundError)();
    }
    return fruit;
}
function createFruit(fruit) {
    var fruitAlreadyRegistered = fruits_repository_1["default"].getSpecificFruitByName(fruit.name);
    if (fruitAlreadyRegistered) {
        throw (0, conflict_error_1.conflictError)();
    }
    fruits_repository_1["default"].insertFruit(fruit);
}
var fruitsService = {
    getFruits: getFruits,
    getSpecificFruit: getSpecificFruit,
    createFruit: createFruit
};
exports["default"] = fruitsService;
