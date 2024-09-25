import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrudComponent } from './components/crud/crud.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CrudComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'crud-angular';
}
