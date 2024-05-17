import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as SendGrid from '@sendgrid/mail';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {
  

// SendGrid.setApiKey('YOUR_SENDGRID_API_KEY');

private url = "https://api.sendgrid.com/v3/mail/send";
  constructor(private http: HttpClient) { }
  PostMessage(message: any) {
    const data = {
      to: message.to,
      from: 'intissarboussaid2@gmail.com',
      subject: message.subject,
      text: message.body,
      html: message.body
    };
  
    return this.http.post(this.url, data);
  }
}
