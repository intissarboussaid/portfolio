
import emailjs from '@emailjs/browser';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form:FormGroup = this.fb.group({
    from_name: '',
    to_name: 'BOUSSAID',
    from_email: '',
    phone: '',
    message: '',
  })
  constructor(private fb:FormBuilder, private router: Router) { }

  ngOnInit() {
  }
  async send() {
    emailjs.init('Fn4dLkUuLVYkRIfBD');
    let response = await emailjs.send("service_pox3urd","template_opgu7tx",{
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      phone: this.form.value.phone,
      message: this.form.value.message,
      });
      alert('message has been send.'); 
      this.form.reset();
      console.log('message has been send.');
  }

}