"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Watch = void 0;
var Watch = /** @class */ (function () {
    function Watch(watch) {
        this._id = watch._id;
        this.price = watch.price;
        this.brand = watch.brand;
        this.model = watch.model;
        this.gender = watch.gender;
        this.movement = watch.movement;
        this.caseMaterial = watch.caseMaterial;
    }
    return Watch;
}());
exports.Watch = Watch;
