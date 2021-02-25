import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-clientele-create',
  templateUrl: './clientele-create.component.html',
  styleUrls: ['./clientele-create.component.css']
})
export class ClienteleCreateComponent implements OnInit {
  submitted = false;
  clienteleForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.clienteleForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      address: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  // Getter to access form control
  get myForm() {
    return this.clienteleForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log('Form submitted!');
    if (!this.clienteleForm.valid) {
      console.log('Form data invalid');
      return false;

    } else {
      console.log('Form data valid, attempting to create vehicle');
      this.apiService.createClientele(this.clienteleForm.value).subscribe(
        (res) => {
          console.log('Vehicles successfully created!');
          this.ngZone.run(() => this.router.navigateByUrl('/clientele-list'));
        }, (error) => {
          console.log(error);
        });
    }
    console.log('If skipped');
  }
}
