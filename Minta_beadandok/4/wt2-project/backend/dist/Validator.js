"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
var Error_1 = require("./Model/Error");
var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.watchPostError = function (watch) {
        var errors = [];
        if (!watch) {
            errors.push(new Error_1.Error("watch", "The watch object must be valid."));
            return errors;
        }
        if (!watch.price) {
            errors.push(new Error_1.Error("watch.price", "The watch price is required."));
        }
        if (watch.price < 1) {
            errors.push(new Error_1.Error("watch.price", "The watch price must be greater than 0."));
        }
        if (!watch.brand) {
            errors.push(new Error_1.Error("watch.brand", "The watch brand is required."));
        }
        if (!watch.model) {
            errors.push(new Error_1.Error("watch.model", "The watch model is required."));
        }
        if (!watch.gender) {
            errors.push(new Error_1.Error("watch.gender", "The watch gender is required."));
        }
        if (!watch.movement) {
            errors.push(new Error_1.Error("watch.movement", "The watch movement is required."));
        }
        if (!watch.caseMaterial) {
            errors.push(new Error_1.Error("watch.caseMaterial", "The watch case material is required."));
        }
        return errors;
    };
    return Validator;
}());
exports.Validator = Validator;
