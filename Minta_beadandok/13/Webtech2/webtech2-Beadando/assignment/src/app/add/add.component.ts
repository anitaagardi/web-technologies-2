import { Component, NgZone, OnInit } from '@angular/core';
import { User } from '../model/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  user = new User();
  username: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private appService: AppService
  )
  {
    this.mainForm();
    this.getUser();
  }

  get myForm() {
    return this.createForm.controls;
  }

  submitted = false;
  createForm: FormGroup;

  ngOnInit(): void {
  }

  mainForm() {
    this.createForm = this.formBuilder.group({
      lakeName: ['', [Validators.required]],
      lakeCode: ['', [Validators.required, Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$')]],
      fish: ['', [Validators.required]],
      weight: ['', [Validators.required, Validators.pattern('^[-+]?[0-9]+(\\.[0-9]+)?$')]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.createForm.valid) {
      alert('Nem megfelelőek az adatok! Minden mezőt ki kell tölteni, a hal súlya pedig csak szám lehet.');
      return false;
    } else {
      this.appService.createLakee(this.createForm.value).subscribe(
        (res) => {
          alert('Hozzáadva.');
          this.ngZone.run(() => this.router.navigateByUrl('/list'));
        }, (error) => {
          alert('Hiba' + error);
        });
    }
  }

  getUser() {
    if (this.appService.getLoggedInUser().uname == null) {
      this.router.navigate(['/login']);
    }

    this.user = this.appService.getLoggedInUser();
    this.username = JSON.stringify(this.user.uname);
  }

  logout(){
    this.user = new User();
    this.appService.setLoggedInUser(this.user);
    this.router.navigate(['/login']);
  }
}
