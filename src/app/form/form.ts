import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { AddContact } from './add-contact/add-contact';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, AddContact],
  templateUrl: './form.html',
  styleUrls: ['./form.css']
})
export class Form {
  contacts = signal<any[]>([]);
  showForm = signal(false);
  selectedContact = signal<any>(null);
  editIndex = signal<number | null>(null);

  openForm(index: number | null = null) {
    this.showForm.set(true);
    if (index !== null) {
      this.selectedContact.set({ ...this.contacts()[index] });
      this.editIndex.set(index);
    } else {
      this.selectedContact.set(null);
      this.editIndex.set(null);
    }
  }

  closeForm() {
    this.showForm.set(false);
    this.selectedContact.set(null);
    this.editIndex.set(null);
  }

  addContactToParent(contact: any) {
    const updated = [...this.contacts()];
    if (this.editIndex() !== null) {
      updated[this.editIndex()!] = contact;
    } else {
      updated.push(contact);
    }
    this.contacts.set(updated);
    this.closeForm();
  }

  deleteContact(index: number) {
    const updated = [...this.contacts()];
    updated.splice(index, 1);
    this.contacts.set(updated);
  }

  editContact(contact: any, index: number) {
    this.openForm(index);
  }
}
