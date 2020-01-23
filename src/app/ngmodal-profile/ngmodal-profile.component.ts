import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ngmodal-profile',
  templateUrl: './ngmodal-profile.component.html',
  styleUrls: ['./ngmodal-profile.component.css']
})
export class NgmodalProfileComponent implements OnInit {
  profileForm = new FormGroup({
    userId: new FormControl(null),
    designation: new FormControl(null),
    address: new FormControl(null),
    about: new FormControl(null)
  });
  constructor(private  activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  onSave() {
    this.profileForm.controls.userId.setValue(sessionStorage.getItem('userId'));
    this.activeModal.close(this.profileForm.value);
  }

}
