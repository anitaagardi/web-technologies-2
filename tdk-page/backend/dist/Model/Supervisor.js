"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Supervisor = /** @class */ (function () {
    function Supervisor(supervisor) {
        this._id = supervisor._id;
        this.name = supervisor.name;
        this.position = supervisor.position;
        this.faculty = supervisor.faculty;
        this.institute = supervisor.institute;
    }
    return Supervisor;
}());
exports.Supervisor = Supervisor;
