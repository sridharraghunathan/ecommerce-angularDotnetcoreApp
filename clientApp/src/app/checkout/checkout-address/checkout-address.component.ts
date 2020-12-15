import { ToastrService } from 'ngx-toastr';
import { IAddress } from './../../shared/models/IAddress';
import { AccountService } from 'src/app/account/account.service';
import { FormGroup } from '@angular/forms';
import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.scss']
})
export class CheckoutAddressComponent   {

  @Input() checkoutForm: FormGroup

  constructor(private accountService : AccountService,
    private toastrService : ToastrService) { }

saveAddress( ){
  this.accountService.updateAddress(this.checkoutForm.get('addressForm').value)
  .subscribe(address =>{
    this.toastrService.success('Address has been saved Successfully');
  },
  error=>{
    this.toastrService.error(error.message);
    console.log(error);
  })
}

}
