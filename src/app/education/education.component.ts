import { Component, OnInit } from '@angular/core';
import {NgbModalComponent} from '../ngb-modal/ngb-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EducationService} from '../education.service';
import {Education} from '../education.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  providers: [NgbModalComponent]
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [];


  constructor(private modalService: NgbModal, private educationService: EducationService) { }

  ngOnInit() {
    this.getEducation();
  }

  getEducation(){
    this.educationService.getEducation().subscribe(response => {
      for(const key in response){
        if(this.educationList.indexOf(response[key]) == -1){
          this.educationList.push(response[key]);
        }
      }
    });
  }

  delete(education: Education) {
    this.educationService.deleteEducation(education.id).subscribe(response => {
      console.log(response);
      this.educationList.splice(this.educationList.indexOf(education), 1);
    }, error => {
      console.log(error.message);
    });
  }

  open(education?: Education){
    const modalRef = this.modalService.open(NgbModalComponent);
    modalRef.componentInstance.education = education;
    console.log(this.educationList);
    console.log(this.educationList.indexOf(education));
    console.log(this.educationList);
    modalRef.result.then((result) => {
      this.educationService.saveEducation(result).subscribe(response => {
        console.log(response);
          this.educationList.splice(0, this.educationList.length );
          for(const key in response){
            if(this.educationList.indexOf(response[key]) == -1){
              this.educationList.push(response[key]);
            }
          }
      },error => {
        console.log(error.message)
        }
      );
    }, error => {

    });
  }

}
