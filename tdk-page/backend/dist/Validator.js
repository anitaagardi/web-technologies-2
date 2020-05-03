"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Error_1 = require("./Model/Error");
var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.applicationsPostError = function (application) {
        var errors = [];
        console.log(application);
        if (!application) {
            errors.push(new Error_1.Error("application", "A jelentkezést kötelező megadni!"));
            return errors;
        }
        if (!application.status) {
            errors.push(new Error_1.Error("application.status", "A jelentkezés státuszát kötelező megadni!"));
        }
        if (!application.tdkTitle) {
            errors.push(new Error_1.Error("application.tdkTitle", "A tdk címét kötelező megadni!"));
        }
        if (!application.facultySectionName) {
            errors.push(new Error_1.Error("application.facultySectionName", "A kari szekciót kötelező megadni!"));
        }
        if (!application.facultyName) {
            errors.push(new Error_1.Error("application.facultyName", "A kart kötelező megadni!"));
        }
        if (!application.supervisors) {
            errors.push(new Error_1.Error("application.supervisors", "A témavezetőt kötelező megadni!"));
        }
        if (!application.authors) {
            errors.push(new Error_1.Error("application.authors", "A szerzőt kötelező megadni!"));
        }
        if (application.supervisors) {
            errors.push.apply(errors, this.supervisorsPostError(application.supervisors));
        }
        if (application.authors) {
            errors.push.apply(errors, this.authorsPostError(application.authors));
        }
    };
    Validator.supervisorsPostError = function (supervisors) {
        var errors = [];
        if (!supervisors) {
            errors.push(new Error_1.Error("supervisors", "A témavezetőt kötelező megadni!"));
            return errors;
        }
        for (var i = 0; i < supervisors.length; i++) {
            if (!supervisors[i]) {
                errors.push(new Error_1.Error("supervisors", "A témavezetőt kötelező megadni!"));
            }
            else {
                if (!supervisors[i].name) {
                    errors.push(new Error_1.Error("supervisors.name", "A témavezető nevét kötelező megadni!"));
                }
                if (!supervisors[i].position) {
                    errors.push(new Error_1.Error("supervisors.position", "A témavezető beosztását kötelező megadni!"));
                }
                if (!supervisors[i].faculty) {
                    errors.push(new Error_1.Error("supervisors.faculty", "A kart kötelező megadni!"));
                }
                if (!supervisors[i].institute) {
                    errors.push(new Error_1.Error("supervisors.institute", "Az intézetet kötelező megadni!"));
                }
            }
        }
        return errors;
    };
    Validator.authorsPostError = function (authors) {
        var errors = [];
        if (!authors) {
            errors.push(new Error_1.Error("authors", "A szerzőt kötelező megadni!"));
            return errors;
        }
        for (var i = 0; i < authors.length; i++) {
            if (!authors[i]) {
                errors.push(new Error_1.Error("authors", "A szerzőt kötelező megadni!"));
            }
            else {
                if (!authors[i].name) {
                    errors.push(new Error_1.Error("authors.name", "A szerző nevét kötelező megadni!"));
                }
                if (!authors[i].facultyName) {
                    errors.push(new Error_1.Error("authors.facultyName", "A kart kötelező megadni!"));
                }
                if (!authors[i].specialization) {
                    errors.push(new Error_1.Error("authors.specialization", "A szakot kötelező megadni!"));
                }
                if (!authors[i].year) {
                    errors.push(new Error_1.Error("authors.year", "A szerző születési évét kötelező megadni!"));
                }
                if (!authors[i].neptunCode) {
                    errors.push(new Error_1.Error("authors.neptunCode", "A szerző neptun kódját kötelező megadni!"));
                }
                if (!authors[i].idNumber) {
                    errors.push(new Error_1.Error("authors.idNumber", "A szerző személyi igazolvány számát kötelező megadni!"));
                }
                if (!authors[i].typeOfTheSpecialization) {
                    errors.push(new Error_1.Error("authors.typeOfTheSpecialization", "A képzés típusát kötelező megadni!"));
                }
                if (!authors[i].taxStatus) {
                    errors.push(new Error_1.Error("authors.taxStatus", "Az adózási státuszt kötelező megadni!"));
                }
                if (!authors[i].isEmployee) {
                    errors.push(new Error_1.Error("authors.isEmployee", "Azt, hogy a szerző dolgozó-e kötelező megadni!"));
                }
                if (!authors[i].taxIdentificationNumber) {
                    errors.push(new Error_1.Error("authors.taxIdentificationNumber", "Az adóazonosító jelet kötelező megadni!"));
                }
                if (!authors[i].birthPlace) {
                    errors.push(new Error_1.Error("authors.birthPlace", "A szerző születés helyét kötelező megadni!"));
                }
                if (!authors[i].nameOfTheMother) {
                    errors.push(new Error_1.Error("authors.nameOfTheMother", "A szerző anyja nevét kötelező megadni!"));
                }
                if (!authors[i].zipCode) {
                    errors.push(new Error_1.Error("authors.zipCode", "A szerző lakcíménél az irányítószámot kötelező megadni!"));
                }
                if (!authors[i].town) {
                    errors.push(new Error_1.Error("authors.town", "A szerző lakcíménél a várost kötelező megadni!"));
                }
                if (!authors[i].streetAndNumber) {
                    errors.push(new Error_1.Error("authors.streetAndNumber", "A szerző lakcíménél az utcát és házszámot kötelező megadni!"));
                }
                if (!authors[i].telephoneNumber) {
                    errors.push(new Error_1.Error("authors.telephoneNumber", "A szerző telefonszámát kötelező megadni!"));
                }
                if (!authors[i].email) {
                    errors.push(new Error_1.Error("authors.email", "A szerző email címét kötelező megadni!"));
                }
                if (!authors[i].bankAccountNumber) {
                    errors.push(new Error_1.Error("authors.bankAccountNumber", "A szerző bankszámla számát kötelező megadni!"));
                }
            }
        }
        return errors;
    };
    return Validator;
}());
exports.Validator = Validator;
