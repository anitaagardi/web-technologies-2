export class Supervisor {
    _id: string;
    name: string;
    position: string;
    faculty: string;
    institute: string;
    constructor(supervisor: any) {
        this._id = supervisor._id;
        this.name = supervisor.name;
        this.position = supervisor.position;
        this.faculty = supervisor.faculty;
        this.institute = supervisor.institute;
    }
}