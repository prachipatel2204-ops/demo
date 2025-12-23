import { Component, input, output, signal, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-contact.html',
  styleUrls: ['./add-contact.css']
})
export class AddContact {
  // Signals for form fields
  name = signal('');
  phone = signal('');
  email = signal('');

  // Input signal for edit mode
  editContactData = input<any>(null);

  // Output signal to parent
  contactAdded = output<any>();

  constructor() {
    // Populate fields when editing
    effect(()=>{
      console.log("Add the data");
      console.log("Name",this.name());
      console.log("Phone",this.phone());
      console.log("Email",this.email());
    })
    effect(() => {
      const data = this.editContactData();
      if (data) {
        this.name.set(data.name);
        this.phone.set(data.phone);
        this.email.set(data.email);
      } else {
        this.reset();
      }
    });
  }

  submit() {
    this.contactAdded.emit({
      name: this.name(),
      phone: this.phone(),
      email: this.email()
    });
    this.reset();
  }

  reset() {
    this.name.set('');
    this.phone.set('');
    this.email.set('');
  }
}
