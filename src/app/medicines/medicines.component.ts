import { Component, OnInit } from '@angular/core';
import { Drug } from '../drug'; //Class of the medicines input 
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'; //Modal
import { DataFlowService } from '../data-flow.service'; ////Connection to Service component 

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})

export class MedicinesComponent implements OnInit {
  closeResult = '';
  public imagePath: any;
  imgURL: any;
  res: any;

  //Only for demostration purpose I'm including 3 pre-registered medicines to be displayed

  medColection: any[] = [
    { genName: 'gen1', brandName: 'brand1', strength: 'strength1', dosageFrom: 'Dosage1', img: "../../assets/Picture/drug1.jpg" },
    { genName: 'gen2', brandName: 'brand2', strength: 'strength2', dosageFrom: 'Dosage2', img: "../../assets/Picture/drug2.jpg" },
    { genName: 'gen3', brandName: 'brand3', strength: 'strength3', dosageFrom: 'Dosage3', img: "../../assets/Picture/drug3.jpg" },
  ];

  //Instance class Drug to a variable medArray

  medArray: any = new Drug('', '', '', '', null);


  /* 
  Through this constructor we can get the mais services sat on 'data-flow.service.ts':
  modalService -> Allow Modal to pop on the screen when the button "NEW DRUG" is clicked.
  _medDataService -> Enable sharing main Array between the components drug-list and medicines.
  _sendToDataBase -> Access to Data-Flow Service to allow send data to DB.
  _getFromDataBase -> Access to Data-Flow Service to allow retrieve data from DB.

  */
  constructor(private modalService: NgbModal, private _medDataService: DataFlowService, private _sendToDataBase: DataFlowService, private _getFromDataBase: DataFlowService) { }

  //When the componet is rendered medColection array starts being sharing
  ngOnInit(): void {
    this._medDataService.setMessage(this.medColection);
    this.showMedicines();
  }

  //Event when the ADD button on Modal is clicked 
  onSubmit() {
    this.medColection.push(this.medArray);
    console.log(this.medColection);

    this._sendToDataBase.insert(this.medArray)
    .subscribe(
      data => {
        this.res = data;
        console.log('Registered - ID: ' + this.res);
      },
      error => console.error('Error!', error)
    );

      this.showMedicines();

  }

  //Method called to present the medicines registered in DB
  showMedicines(){
    this._getFromDataBase.retrieve()
    .subscribe(data => {this.res = data;
      console.log(this.res);
    });
  }

  //HANDLE IMAGE - In progress...
  image: any = '';
  onFileSelect(imageInput: any) {
    var reader = new FileReader();
    this.imagePath = imageInput;
    reader.readAsDataURL(imageInput.target.files[0]);
    reader.onload = () => {
      this.imgURL = reader.result;

      console.log(this.imagePath);
    }

  }

  //NG-BOOTSTRAP MODAL RESOURCE


  //NG-Bootstrap modal style when pop on the screen
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  //NG-Bootstrap modal style allows us to close the modal either clicking anywhere out of the Modal form or pressing ESC. On HTML file is the click event to also close the modal clicking X button on the right corner
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
