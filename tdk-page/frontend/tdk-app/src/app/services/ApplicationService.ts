import { Inject, Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { Application } from '../model/Application';

import { ApplicationStatus } from '../model/ApplicationStatus';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApplicationService {
    applications: Application[] = [];
    baseURL: string = 'http://localhost:3000';
    constructor(private http: HttpClient) {

    }

    addApplication(application: Application): Observable<Application> {
        return this.http.post<Application>(this.baseURL + '/applications', application);
    }
    updateApplication(application: Application): Observable<Application> {
        return this.http.put<Application>(this.baseURL + '/applications', application);
    }
    deleteApplication(application: Application): Observable<Application> {
        return this.http.delete<Application>(this.baseURL + '/applications/' + application._id);
    }
    listApplication(): Observable<Application[]> {
        return this.http.get<Application[]>(this.baseURL + '/applications');
    }

}
