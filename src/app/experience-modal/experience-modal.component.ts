import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Experience} from '../experience.model';

@Component({
  selector: 'app-experience-modal',
  templateUrl: './experience-modal.component.html',
  styleUrls: ['./experience-modal.component.css']
})
export class ExperienceModalComponent implements OnInit {
  experience: Experience;
  experienceForm= this.fb.group({
    id: [null],
    userId: [null],
    title: [null, Validators.required],
    companyName: [null],
    location: [null],
    startDate: [null],
    endDate: [null],
    description: [null]
  });

  constructor(private activeModal: NgbActiveModal,private fb: FormBuilder) { }

  ngOnInit() {
    if (this.experience != null) {
      this.experienceForm.patchValue(this.experience);
    }
  }

  onSave() {
    console.log('title control', this.experienceForm.get('title'))
    // this.experienceForm.controls.userId.setValue(sessionStorage.getItem('userId'));
    // this.activeModal.close(this.experienceForm.value);
  }

}
