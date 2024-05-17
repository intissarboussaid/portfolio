import { ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  viewportHeight: number | undefined;
  url = "./docs/intissar resume.pdf";
  constructor(private router : Router,private viewportScroller: ViewportScroller, private http: HttpClient) { }

  ngOnInit(): void {
    this.viewportHeight = window.innerHeight;
  }
  downloadMyFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/docs/intissar resume.pdf');
    link.setAttribute('download', `boussaid's resume.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
}
scrollToKnowMore() {
  this.viewportScroller.scrollToAnchor('about-me');
}

downloadFile(fileUrl: string) {
  this.http.get(fileUrl, { responseType: 'blob' }).subscribe((data) => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(data as Blob);
    a.download = 'intissar-boussaid-resume.pdf';
    a.click();
  });
}
downloadBtn() {
  window.open('https://drive.google.com/file/d/1WYpdiYg6jaWzvmKqePfoN0dTfgjO66S_/view', '_blank');
}
}
