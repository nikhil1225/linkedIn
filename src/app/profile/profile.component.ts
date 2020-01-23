import { Component, OnInit } from '@angular/core';
import {ProfileServiceService} from '../profile-service.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgmodalProfileComponent} from '../ngmodal-profile/ngmodal-profile.component';
import {error} from 'util';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile = {
    about: '',
    designation: '',
    address: ''
  };

  constructor(private profileServiceService: ProfileServiceService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.profileServiceService.getProfile().subscribe(value => {
      console.log(value);
      this.profile.about = value['about'];
      this.profile.designation = value['designation'];
      this.profile.address = value['address'];
    }, error => {
      console.log(error);
      alert('profile component error');
    });
  }
  getName(): string{
      return this.profileServiceService.getName();
  }
  open() {
    const modalRef = this.modalService.open(NgmodalProfileComponent);
    modalRef.result.then(result => {
     this.profileServiceService.saveProfile(result).subscribe(value => {
       this.profile.about = value['about'];
       this.profile.designation = value['designation'];
       this.profile.address = value['address'];
         console.log(value);
       });

       }, error => {
        console.log('Profile Modal Error');
    });
  }

}
