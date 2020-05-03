import { Supervisor } from './Supervisor';
import { Author } from './Author';

export class Application {
    _id: string;
    status: string;
    tdkTitle: string;
    facultySectionName: string;
    facultyName: string;
    equipments: string;
    supervisors: Supervisor[];
    authors: Author[];
    constructor(application: any) {
        this._id = application._id;
        this.status = application.status
        this.tdkTitle = application.tdkTitle;
        this.facultySectionName = application.facultySectionName;
        this.facultyName = application.facultyName;
        this.equipments = application.equipments;
        if (application.supervisors) {
            this.supervisors = [];
            for (let i = 0; i < application.supervisors.length; i++) {
                this.supervisors.push(new Supervisor(application.supervisors[i]));
            }
        }
        if (application.authors) {
            this.authors = [];
            for (let i = 0; i < application.authors.length; i++) {
                this.authors.push(new Author(application.authors[i]));
            }
        }
    }
}