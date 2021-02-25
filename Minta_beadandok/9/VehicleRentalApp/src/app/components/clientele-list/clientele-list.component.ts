import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-clientele-list',
  templateUrl: './clientele-list.component.html',
  styleUrls: ['./clientele-list.component.css']
})
export class ClienteleListComponent implements OnInit {
  Clientele: any = [];

  constructor(private apiService: ApiService) {
    this.readClientele();
  }

  ngOnInit() {}

  readClientele() {
    this.apiService.getAllClientele().subscribe((data) => {
      this.Clientele = data;
    });
  }

  removeClientele(clientele, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteClientele(clientele._id).subscribe((data) => {
          this.Clientele.splice(index, 1);
        }
      );
    }
  }
}
