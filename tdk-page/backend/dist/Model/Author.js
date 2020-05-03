"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Author = /** @class */ (function () {
    function Author(author) {
        this._id = author._id;
        this.name = author.name;
        this.facultyName = author.facultyName;
        this.specialization = author.specialization;
        this.year = author.year;
        this.neptunCode = author.neptunCode;
        this.idNumber = author.idNumber;
        this.typeOfTheSpecialization = author.typeOfTheSpecialization;
        this.taxStatus = author.taxStatus;
        this.isEmployee = author.isEmployee;
        this.taxIdentificationNumber = author.taxIdentificationNumber;
        this.birthPlace = author.birthPlace;
        this.birthDate = author.birthDate;
        this.nameOfTheMother = author.nameOfTheMother;
        this.zipCode = author.zipCode;
        this.town = author.town;
        this.streetAndNumber = author.streetAndNumber;
        this.telephoneNumber = author.telephoneNumber;
        this.email = author.email;
        this.bankAccountNumber = author.bankAccountNumber;
    }
    return Author;
}());
exports.Author = Author;
