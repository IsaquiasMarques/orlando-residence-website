import { Component, OnInit } from '@angular/core';
import { NavService } from '../shared/services/navigation/nav.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LinkService } from '../shared/services/links/link.service';
import { ApiService } from '../core/data/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userFullNamePanel: boolean = true;
  userContactPanel: boolean = false;
  messageSentPanel: boolean = false;

  formGroup: any;

  wasEmailSent: boolean = false;
  emailSentStatusLabel: string = '';

  formLabelMessage: string = 'Voltar à página inicial';

  isSendEmailLoading: boolean = false;

  constructor(
    private api: ApiService,
    public nav: NavService,
    private link: LinkService
  ) { }

  ngOnInit(): void {

    this.formGroup = new FormGroup({
      'fullname': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.email, Validators.required]),
      'contact': new FormControl('', [Validators.required]),
      'message': new FormControl('', [Validators.required])
    });

  }

  goOneStepBback(){
    if(this.userFullNamePanel){
      this.hideModal();

    }else if(this.userContactPanel){
      this.back_one_step();

    }else if(this.messageSentPanel){
      if(!this.wasEmailSent){
        this.back_one_step();
        return;
      }
      
      this.hideModal();
      this.continue();
    }
  }

  continue(){
    if(this.userFullNamePanel){
      this.userFullNamePanel = false;
      this.userContactPanel = true;
      this.messageSentPanel = false;

    }else if(this.userContactPanel){
      this.userContactPanel = false;
      this.messageSentPanel = true;
      this.userContactPanel = false;

    }else if(this.messageSentPanel){
      this.userFullNamePanel = true;
      this.userContactPanel = false;
      this.messageSentPanel = false;

    }
  }
  back_one_step(){

    if(this.userFullNamePanel){
      this.hideModal();

    }else if(this.userContactPanel){

      this.userFullNamePanel = true;
      this.userContactPanel = false;
      this.messageSentPanel = false;

    }else if(this.messageSentPanel){
      this.userFullNamePanel = false;
      this.userContactPanel = true;
      this.messageSentPanel = false;

    }
  }

  hideModal(){
    this.nav.hideScheduleVisit();
  }

  submitForm(){
    const formData = new FormData();

    formData.append('name', this.formGroup.get('fullname').value);
    formData.append('email', this.formGroup.get('email').value);
    // formData.append('contact', this.formGroup.get('contact').value);
    formData.append('subject', 'Agendamento de visita à Orlando Residecial');
    formData.append('message', this.formGroup.get('message').value);

    this.isSendEmailLoading = true;

    this.api.scheduleVisit(formData).subscribe((response: any) => {
      // console.log(response);
      if(response.code !== 200){
        this.isSendEmailLoading = false;
        this.wasEmailSent = false;
        this.emailSentStatusLabel = 'Ocorreu um erro ao agendar a visita';
        this.formLabelMessage = 'Voltar';

        // this.resetEmailSentStatusLabel(4); // minutes
        this.continue();
        return;
      }

      this.wasEmailSent = true;
      this.isSendEmailLoading = false;
      this.emailSentStatusLabel = 'Email enviado com êxito';
      this.formLabelMessage = 'Voltar à página inicial';
      this.formGroup.reset();

      this.resetEmailSentStatusLabel(4); // minutes

      this.continue();

    }, (error: any) => {
      // console.log(error);
      this.isSendEmailLoading = false;
      this.wasEmailSent = false;
      this.formLabelMessage = 'Voltar';
      this.emailSentStatusLabel = error.error.mensagem ?? 'Alguma coisa não correu como o esperado ao agendar a visita';

      // this.resetEmailSentStatusLabel(4); // minutes
      this.continue();
        
    });


    // this.link.openWhatsapp
  }

  resetEmailSentStatusLabel(timer: number){
    setTimeout(() => {
      this.emailSentStatusLabel = '';
    }, timer * 1000);
  }

  openWhatsapp(number: string, body: string){
    this.link.openWhatsapp(number, body);
  }

}
