import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  contactBtn() {
    this.router.navigate(['contact']);
  }
  HomeBtn() {
    this.router.navigate(['home']);
  }
  serviceBtn() {
    this.router.navigate(['service']);
  }
  AboutMeBtn() {
    this.router.navigate(['aboutme']);
  }

}
