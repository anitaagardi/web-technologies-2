import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Application } from '../model/Application';
import { ApplicationService } from '../services/ApplicationService';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ApplicationStatus } from '../model/ApplicationStatus';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-administrator-menu-conference-list-participants',
  templateUrl: './administrator-menu-conference-list-participants.component.html',
  styleUrls: ['./administrator-menu-conference-list-participants.component.css']
})
export class AdministratorMenuConferenceListParticipantsComponent implements OnInit {
  applications: Application[];

  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
    this.getApplications();
    this.dataSource = new MatTableDataSource(this.applications);

  }
  displayedColumns: string[] = ['operations', 'status', 'tdkTitle', 'facultySectionName', 'facultyName', 'equipments', 'supervisors', 'authors'];
  dataSource = new MatTableDataSource(this.applications);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log('itt');
  }
  getApplications() {
    this.applicationService.listApplication().subscribe(applications => {
      this.applications = applications;
      this.dataSource.paginator = this.paginator;
      this.dataSource = new MatTableDataSource(this.applications);
    }, () => {
      alert("Hiba történt a konferencia listázás során");
    }
    );
  }
  setStatusAccepted(application: Application) {
    application.status = ApplicationStatus.ACCEPTED;

    this.applicationService.updateApplication(application).subscribe(() => {
      alert("A jelentkezés módosítása sikeres");
      this.getApplications();

    }, () => {
      alert("Hiba történt a jelentkezés módosítása során");
      this.getApplications();
    }
    );

  }
  setStatusRejected(application: Application) {
    application.status = ApplicationStatus.REJECTED;
    this.applicationService.updateApplication(application).subscribe(() => {
      alert("A jelentkezés módosítása sikeres");
      this.getApplications();

    }, () => {
      alert("Hiba történt a jelentkezés módosítása során");
      this.getApplications();
    }
    );
  }
  deleteApplication(application: Application) {
    this.applicationService.deleteApplication(application).subscribe(() => {
      alert("A jelentkezés törlése sikeres");
      this.getApplications();

    }, () => {
      alert("Hiba történt a jelentkezés törlése során");
      this.getApplications();
    }
    );

  }




}
