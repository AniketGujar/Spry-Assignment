import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface ThemeState {
  theme: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  selectedClient = 'Client A';
  clientsList = ['Client A', 'Client B', 'Client C'];

  selectedTheme: Observable<string>;

  constructor(private store: Store<ThemeState>) {
    this.selectedTheme = this.store.select('theme')
  }

  ngOnInit(): void {}

  updateClient() {
    this.store.dispatch({ type: this.selectedClient });
  }

}
