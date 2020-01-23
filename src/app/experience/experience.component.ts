import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ExperienceModalComponent} from '../experience-modal/experience-modal.component';
import {ExperienceService} from '../experience.service';
import {Experience} from '../experience.model';
import {Education} from '../education.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experienceList: Experience[] = [];

  constructor(private modalService: NgbModal, private experienceService: ExperienceService) { }

  ngOnInit() {
    this.getExperience();
  }

  getExperience(){
    this.experienceService.getExperience().subscribe(response => {
      console.log(response);
      for(const key in response){
        if(this.experienceList.indexOf(response[key]) == -1){
          this.experienceList.push(response[key]);
        }
      }
    },error => {
      console.log(error.message);
    });
  }

  delete(experience: Experience){
    this.experienceService.deleteExperience(experience.id).subscribe(response => {
      console.log(response['message']);
      this.experienceList.splice(this.experienceList.indexOf(experience), 1);
    }, error => {

    });
  }

  open(experience?: Experience){
    const modalRef = this.modalService.open(ExperienceModalComponent);
    modalRef.componentInstance.experience = experience;
    modalRef.result.then((result) => {
      this.experienceService.saveExperience(result).subscribe(response => {
        console.log(response);
        this.experienceList.splice(0, this.experienceList.length);
        for(const key in response){
          if(this.experienceList.indexOf(response[key]) == -1){
            this.experienceList.push(response[key]);
          }
        }
      })
    }, error => {
      console.log(error.message);
    })
  }
}
