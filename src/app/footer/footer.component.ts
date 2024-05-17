import { Component, OnInit } from '@angular/core';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  animal: string | undefined;
  name: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  
 

}
