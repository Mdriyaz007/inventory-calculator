import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  productForm: FormGroup;
  listData:any;
  constructor(private fb:FormBuilder){
    this.listData = [];
    this.productForm = this.fb.group({
      pname: [''],
      qty: [''],
      price: ['']
    })
  }

  public add() : void{
    this.listData.push(this.productForm.value);
    
  }
  reset(){
    this.productForm.reset();
  }
  rmv(element){
    this.listData.forEach((value,index)=> {
      if(value == element){
        this.listData.splice(index,1);
      }
          });

      }

  prin() : void{
    window.print();
    
  }

  ngOnInit(): void {
    
  }
  
}
