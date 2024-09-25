import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Person } from '../../models/Person';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css',
})
export class CrudComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl(null, [
      Validators.required,
      Validators.min(0),
      Validators.max(120),
    ]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  isVisibledRegisterButton: boolean = true;
  personsData: Person[] = [];
  index: number = -1;

  handleRegister() {
    this.personsData.push(this.form.value as Person);

    this.form.reset();

    console.table(this.personsData);
  }
  handleSelectPerson(index: number) {
    this.index = index;
    this.form.setValue({
      name: this.personsData[index].name,
      age: this.personsData[index].age,
      city: this.personsData[index].city,
    });

    this.isVisibledRegisterButton = false;
  }
  handleChangeInformation() {
    this.personsData[this.index] = this.form.value as Person;

    this.form.reset();

    this.isVisibledRegisterButton = true;
  }

  handleDeletePerson() {
    if (this.index < 0) return;

    this.personsData.splice(this.index, 1);

    this.form.reset();

    this.isVisibledRegisterButton = true;
  }

  handleCancel() {
    this.form.reset();
    this.isVisibledRegisterButton = true;
  }
}
