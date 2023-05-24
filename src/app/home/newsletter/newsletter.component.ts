import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/data/api.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  userFullNamePanel: boolean = true;
  userContactPanel: boolean = false;
  messageSentPanel: boolean = false;

  formGroup: any;

  wasEmailSent: boolean = false;
  emailSentStatusLabel: string = '';

  isSendEmailLoading: boolean = false;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      'email': new FormControl('', [Validators.email, Validators.required]),
    });
  }

  submitForm(){
    const formData = new FormData();

    formData.append('name', 'Novo subscritor');
    formData.append('email', this.formGroup.get('email').value);
    // formData.append('contact', this.formGroup.get('contact').value);
    formData.append('subject', 'Subscrição à Newsletter');
    formData.append('message', `As minhas cordiais saudações à Orlando Residencial, concluo a minha subscrição com o meu email: ${this.formGroup.get('email').value}`);

    this.isSendEmailLoading = true;

    this.api.scheduleVisit(formData).subscribe((response: any) => {
      // console.log(response);
      if(response.code !== 200){
        this.isSendEmailLoading = false;
        this.wasEmailSent = false;
        this.emailSentStatusLabel = 'Ocorreu um erro ao efectuar a subscrição';
        return;
      }

      this.wasEmailSent = true;
      this.isSendEmailLoading = false;
      this.emailSentStatusLabel = 'Subscrição efectuada';
      this.formGroup.reset();

      this.resetEmailSentStatusLabel(4); // minutes

    }, (error: any) => {
      // console.log(error);
      this.isSendEmailLoading = false;
      this.wasEmailSent = false;
      this.emailSentStatusLabel = error.error.mensagem ?? 'Alguma coisa não correu como o esperado ao efectuar a subscrição';

      
      this.resetEmailSentStatusLabel(4); // minutes
    });


    // this.link.openWhatsapp
  }

  resetEmailSentStatusLabel(timer: number){
    setTimeout(() => {
      this.emailSentStatusLabel = '';
    }, timer * 1000);
  }

}
