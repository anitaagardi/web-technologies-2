import { Component, OnInit, ElementRef, ViewChild, ViewChildren, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Application } from '../model/Application';
import { studies } from '../model/Studies';
import { faculties } from '../model/Faculties';
import { taxations } from '../model/Taxations';
import { employees } from '../model/Employees';
import { Supervisor } from '../model/Supervisor';
import { Author } from '../model/Author';
import { FormControl, Validators } from '@angular/forms';
import { ApplicationStatus } from '../model/ApplicationStatus';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';
import { ApplicationService } from '../services/ApplicationService';
import { Observable, from } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY.MM.DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-user-appyling-tdk',
  templateUrl: './user-appyling-tdk.component.html',
  styleUrls: ['./user-appyling-tdk.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],

})
export class UserAppylingTdkComponent implements OnInit {
  application: Application = new Application();

  supervisor: Supervisor = new Supervisor();
  createdSupervisors: Supervisor[] = [];
  createdSupervisorsSource: MatTableDataSource<Supervisor> = new MatTableDataSource([]);
  createdAuthorsSource: MatTableDataSource<Author> = new MatTableDataSource([]);
  author: Author = new Author();
  createdAuthors: Author[] = [];

  studies = studies;
  faculties = faculties;
  taxation = taxations;
  typeOfTheSpecialization = studies;
  authorTaxation = taxations[0];
  actualDate = new Date();

  employees = employees;
  @ViewChild('applyingTDKForm', { static: false, read: ElementRef }) applyingTDKForm: ElementRef;
  @ViewChild('supervisorForm', { static: false, read: ElementRef }) supervisorForm: ElementRef;
  @ViewChild('authorForm', { static: false, read: ElementRef }) authorForm: ElementRef;
  @ViewChild('supervisorsTable', { static: false }) supervisorsTable: MatTable<any>;
  displayedColumnsSupervisors: string[] = ['name', 'position', 'faculty', 'institute', 'deleteSupervisor'];
  dataSourceSupervisors = new MatTableDataSource(this.createdSupervisors);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumnsAuthors: string[] = ['name', 'facultyName', 'specialization', 'year', 'neptunCode', 'idNumber', 'typeOfTheSpecialization', 'taxStatus', 'isEmployee', 'taxIdentificationNumber', 'birthPlace', 'birthDate', 'nameOfTheMother', 'zipCode', 'town', 'streetAndNumber', 'telephoneNumber', 'email', 'bankAccountNumber', 'deleteAuthor'];
  dataSourceAuthors = new MatTableDataSource(this.createdAuthors);
  @ViewChild(MatPaginator, { static: true }) paginatorAuthors: MatPaginator;
  @ViewChild('TableSupervisorPaginator', { static: true }) tableSupervisorPaginator: MatPaginator;
  @ViewChild('TableAuthorPaginator', { static: true }) tableAuthorPaginator: MatPaginator;
  constructor(private applicationService: ApplicationService) {
    //this.author.birthDate = new Date();
    // this.employees = employees;
    this.initApplicationValues();

  }

  ngOnInit() {
    console.log(studies);
  }
  initApplicationValues() {
    this.application = new Application();
    this.supervisor = new Supervisor();
    this.author = new Author();
    this.createdAuthors = [];
    this.createdSupervisors = [];

    this.application.facultyName = faculties[0].value;
    this.supervisor.faculty = faculties[0].value;
    this.author.taxStatus = taxations[0];
    this.author.isEmployee = employees[0];
    this.author.facultyName = faculties[0].value;
    this.author.typeOfTheSpecialization = studies[0].value;
  }

  applyingTDK() {
    if (this.createdAuthors.length > 0 && this.createdSupervisors.length > 0) {
      this.application.supervisors = this.createdSupervisors;
      this.application.authors = this.createdAuthors;
      this.application.status = ApplicationStatus.APPLIED.toString();

    }
    else if (this.createdAuthors.length == 0) {
      alert('Adjon meg legalább egy szerzőt');
      return;
    }
    else if (this.createdSupervisors.length == 0) {
      alert('Adjon meg legalább egy témavezetőt')
      return;
    }
    console.log(this.application);
    this.applicationService.addApplication(this.application).subscribe(
      () => {
        this.initApplicationValues();
        this.applyingTDKForm.nativeElement.reset();
        this.createdSupervisorsSource.data = [...this.createdSupervisors];
        this.createdAuthorsSource.data = [...this.createdAuthors];
      }, (error) => {
        alert('Hiba a jelentkezés során');
      }
    );




  }
  addNewSupervisor() {
    this.createdSupervisors.push(this.supervisor);
    this.supervisor = new Supervisor();
    this.supervisorForm.nativeElement.reset();
    //this.dataSourceSupervisors.data = this.createdSupervisors;
    console.log(this.createdSupervisors);
    this.createdSupervisorsSource.data = [...this.createdSupervisors];
    //this.supervisorsTable.renderRows();
  }
  removeSupervisor(supervisor: Supervisor) {
    this.createdSupervisors = this.createdSupervisors.filter(actualSupervisor => actualSupervisor != supervisor);
    this.createdSupervisorsSource.data = [...this.createdSupervisors];
  }
  addNewAuthor() {

    this.createdAuthors.push(this.author);
    this.author = new Author();
    this.authorForm.nativeElement.reset();
    //this.dataSourceAuthors.data = this.createdAuthors;
    this.createdAuthorsSource.data = [...this.createdAuthors];
  }
  removeAuthor(author: Author) {
    this.createdAuthors = this.createdAuthors.filter(actualAuthor => actualAuthor != author);
    console.log(this.createdAuthors);
    this.createdAuthorsSource.data = [...this.createdAuthors];
  }

}

