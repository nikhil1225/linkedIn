import {Component, Input, OnInit} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Education} from '../education.model';

@Component({
  selector: 'app-ngb-modal',
  templateUrl: './ngb-modal.component.html',
  styleUrls: ['./ngb-modal.component.css']
})
export class NgbModalComponent implements OnInit{
  education: Education;
  educationForm = this.fb.group({
    id: [null],
    userId: [null],
    organisation: [null],
    startDate: [null],
    endDate: [null],
    degree: [null],
    fieldOfStudy: [null]
  });

  constructor(private activeModal: NgbActiveModal, private fb: FormBuilder) {
    //
  }
  ngOnInit(): void {
    if (this.education != null) {
      this.educationForm.patchValue({
        organisation: this.education.organisation,
        startDate: this.education.startDate,
        endDate: this.education.endDate,
        degree: this.education.degree,
        fieldOfStudy: this.education.fieldOfStudy
      });
      this.educationForm.controls.id.setValue(this.education.id);
    }
  }

  onSave() {
    this.educationForm.controls.userId.setValue(sessionStorage.getItem('userId'))
    this.activeModal.close(this.educationForm.value)
  }

}
