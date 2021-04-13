import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profit',
  templateUrl: './profit.component.html',
  styleUrls: ['./profit.component.css']
})
export class ProfitComponent implements OnInit {
  profitForm: FormGroup;
  lossForm: FormGroup;
  listData:any;
  list2Data:any;
  constructor(private fb:FormBuilder){
    this.listData = [];
    this.profitForm = this.fb.group({
      cp: [''],
      exp: ['']
    })
    this.list2Data = [];
    this.lossForm = this.fb.group({
      cp: [''],
      exp: ['']
    })
  }

  
  
  ngOnInit(): void {
  }
  public calc() : void{
    this.listData.push(this.profitForm.value);
  }
  public calc2() : void{
    this.list2Data.push(this.lossForm.value);
  }
  rst2(){
    this.lossForm.reset();
  }
  rst(){
    this.profitForm.reset();
  }
  rmv(element){
    this.listData.forEach((value,index)=> {
      if(value == element){
        this.listData.splice(index,1);
      }
          });
        }
  rmv2(element){
            this.list2Data.forEach((value,index)=> {
              if(value == element){
                this.list2Data.splice(index,1);
              }
                  });

      }


}
