import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentSignal } from './parent-signal/parent-signal'; // Correct path

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ParentSignal],// ParentSignal
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App { }
