import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  template: ` <div #dropdownMenu class="toggle_btn" >
  <i class="fa-solid fa-bars" (click)="toggleDropdown()"></i>
</div>  `,
})
export class NavbarComponent implements OnInit {
 
  toggleBtn = document.querySelector('.togglt_btn') as HTMLElement;
  toggleBtnIcon = document.querySelector('.togglt_btn i') as HTMLElement;
 
  isScrolled = false;
  isOpen = false

  constructor(private router : Router, private viewportscroller:ViewportScroller) { }
 

  ngOnInit(): void {
    
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 300) {
      console.log("scrolled > 300");
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
      console.log("scrolled < 300");
    }
  }
  toggleDropdown():void{
    this.isOpen = !this.isOpen;
    const toggleBtnIcon = document.querySelector('.toggle_btn i') as HTMLElement;
    const dropdownMenu = document.querySelector('.dropdown_menu') as HTMLElement;
    if (this.isOpen) {
      toggleBtnIcon.classList.add('fa-xmark');
      toggleBtnIcon.classList.remove('fa-bars');
    
      dropdownMenu.classList.toggle('open');
      dropdownMenu.classList.contains('open');
    } else {
      toggleBtnIcon.classList.add('fa-bars');
      toggleBtnIcon.classList.remove('fa-xmark');
      const dropdownMenu = document.querySelector('.dropdown_menu') as HTMLElement;
      dropdownMenu.classList.remove('open');
      
    }
    
  }
  contactBtn() {
    this.viewportscroller.scrollToAnchor('contact-section');
  }
  HomeBtn() {
    this.viewportscroller.scrollToAnchor('home-section');
  }
  serviceBtn() {
   this.viewportscroller.scrollToAnchor('service-section');
  }
  AboutMeBtn() {
    this.viewportscroller.scrollToAnchor('about-me');
  }
  SkillsBtn() {
    this.viewportscroller.scrollToAnchor('skills-section');
  }
}

