import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styles: [ ],
})
export class CheckoutComponent implements OnInit {

  checkoutForm : FormGroup;

  constructor(private fb : FormBuilder,
    private accountService: AccountService) { }

  ngOnInit(): void {
    this.createCheckoutForm();
    this. getAddress();
  }

  createCheckoutForm(){
    this.checkoutForm =   this.fb.group({
      addressForm :  this.fb.group({
        firstName : [null , Validators.required],
        lastName : [null , Validators.required],
        street :   [null , Validators.required],
        city : [null , Validators.required],
        state : [null , Validators.required],
        zipCode : [null , Validators.required],
      }),

      deliveryForm : this.fb.group({
        deliveryMethod : [null, Validators.required]
      }),

      paymentForm : this.fb.group({
        nameOnCard : [null, Validators.required]
      })
    })
  };

  getAddress(){
    this.accountService.getAddress().subscribe(address=> {
      this.checkoutForm.get('addressForm').patchValue(address);
    },
    error =>{
      console.log(error);
    });
  }
}
