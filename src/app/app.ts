import { NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  userdetails:any;

  adddetails(val:NgForm){
    console.log(val);
    this.userdetails=val;
  }
}
