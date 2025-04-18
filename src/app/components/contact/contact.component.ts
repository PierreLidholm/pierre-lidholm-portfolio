import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../../src/environments/environment';

type Field = 'email' | 'name' | 'message' | 'company';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, NgClass, NgIf],
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly USER_ID = environment.EMAIL_USER_ID;
  private readonly SERVICE_ID = environment.EMAIL_SERVICE_ID;
  private readonly TEMPLATE_ID = environment.EMAIL_TEMPLATE_ID;

  emailStatusMessage = '';
  contactForm: FormGroup;
  inputIsValid = false;
  enableButton = false;
  messageIsSent = false;
  emailIsLoading: boolean = false;
  btnPressed: boolean = false;
  focusedFields: Record<Field, boolean> = {
    email: false,
    name: false,
    message: false,
    company: false
  };

  showSpinner: boolean = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      name: ['', Validators.required],
      message: ['', Validators.required],
      company: ['']
    });

    this.contactForm.valueChanges.subscribe(() => {
      if (!this.inputIsValid) {
        this.updateValidityStatus();
      }
    });

    emailjs.init(this.USER_ID);
  }

  getControl(field: Field) {
    return this.contactForm.get(field);
  }

  private updateValidityStatus(): void {
    this.inputIsValid =
      this.email?.valid &&
      this.email?.value &&
      this.name?.valid &&
      this.name?.value &&
      this.message?.valid &&
      this.message?.value;
  }

  get email() {
    return this.contactForm.get('email');
  }

  get name() {
    return this.contactForm.get('name');
  }

  get message() {
    return this.contactForm.get('message');
  }

  get company() {
    return this.contactForm.get('company');
  }

  onFocus(field: Field) {
    this.focusedFields[field] = true;
  }

  onBlur(field: Field) {
    this.focusedFields[field] = false;
  }

  onSubmit() {
    this.btnPressed = true;
    this.updateValidityStatus();

    if (!this.inputIsValid) {
      return;
    }

    this.emailIsLoading = true;
    this.showSpinner = true;
    emailjs
      .send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        {
          name: this.contactForm.value.name,
          email: this.contactForm.value.email,
          message: this.contactForm.value.message,
          company: this.contactForm.value.company
        },
        this.USER_ID
      )
      .then(
        (response) => {
          this.showSpinner = false;
          this.emailStatusMessage =
            'Thank you for reaching out! I will get back to you as soon as possible.';
          this.emailIsLoading = false;
          this.messageIsSent = true;
          this.contactForm.reset();
          this.inputIsValid = false;
        },
        (err) => {
          this.showSpinner = false;
          this.emailStatusMessage = 'Something went wrong. Please try again!';
          this.emailIsLoading = false;
          this.messageIsSent = false;
        }
      );
  }
}
