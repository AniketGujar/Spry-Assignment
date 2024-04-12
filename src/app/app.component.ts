import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

interface ThemeState {
  theme: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedTheme: Observable<string>;
  employeeForm!: FormGroup;
  positions = ['Manager', 'Developer', 'Designer', 'HR'];

  constructor(private store: Store<ThemeState>, private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.selectedTheme = this.store.select('theme');
  }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      address: ['', Validators.required],
      position: ['', Validators.required],
      joiningDate: ['', Validators.required]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.employeeForm.controls;
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.value);
      this.openSnackBar("Details saved!!");
    } else {
      this.openSnackBar("Invalid Details!");
      console.log("Form is invalid details");
    }
  }


  openSnackBar(message:string) {
    this._snackBar.open(message, 'close', {
      duration: 5000
    });
  }
}
