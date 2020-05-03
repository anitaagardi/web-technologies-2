"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Supervisor_1 = require("./Supervisor");
var Author_1 = require("./Author");
var Application = /** @class */ (function () {
    function Application(application) {
        this._id = application._id;
        this.status = application.status;
        this.tdkTitle = application.tdkTitle;
        this.facultySectionName = application.facultySectionName;
        this.facultyName = application.facultyName;
        this.equipments = application.equipments;
        if (application.supervisors) {
            this.supervisors = [];
            for (var i = 0; i < application.supervisors.length; i++) {
                this.supervisors.push(new Supervisor_1.Supervisor(application.supervisors[i]));
            }
        }
        if (application.authors) {
            this.authors = [];
            for (var i = 0; i < application.authors.length; i++) {
                this.authors.push(new Author_1.Author(application.authors[i]));
            }
        }
    }
    return Application;
}());
exports.Application = Application;
