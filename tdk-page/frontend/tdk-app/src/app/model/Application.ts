import { Supervisor } from './Supervisor';
import { Author } from './Author';


export class Application {
    // tslint:disable-next-line: variable-name
    _id: string;
    tdkConference: string;
    status: string;
    tdkTitle: string;
    facultySectionName: string;
    facultyName: string;
    equipments: string;
    supervisors: Supervisor[] = [];
    authors: Author[] = [];
}
