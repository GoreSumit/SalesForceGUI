import { ShiptoAddressService } from './shipto-address.service';
import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InfiniteScrollCustomEvent, IonicModule, ToastController } from '@ionic/angular';
import { AddressInfo } from '../customer/customer.model';
import { CustomerService } from '../customer/customer.service';

@Component({
  selector: 'app-shipto-address',
  templateUrl: './shipto-address.page.html',
  styleUrls: ['./shipto-address.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterLink,
    NgFor,
    NgIf,
    FormsModule],
})
export class ShiptoAddressPage implements OnInit {

  constructor(public shiptoAddressService: ShiptoAddressService, private toastCtrl: ToastController, public customerService: CustomerService) { }

  ngOnInit() {
    // this.shiptoAddressService.searchTerm = "";
    // this.fetchexpenseHeadList(this.shiptoAddressService.pageIndex, this.shiptoAddressService.pageSize, this.shiptoAddressService.searchTerm);
    // this.shiptoAddressService.pageIndex += 1;
    this.shiptoAddressService.availableAddressList = this.customerService.customerForm.controls.shiptoBPAddresses.value as AddressInfo[]
  }

  public async fetchexpenseHeadList(pageIndex, pageSize, searchTerm) {

    //this.loader.present();

    await this.shiptoAddressService.refreshShipToAddrsList(pageIndex, pageSize, searchTerm);

  }


  public async onScrollLoadData(ev) {

    if (this.shiptoAddressService.ShipToAddrsList.length !== this.shiptoAddressService.totalCount) {

      this.fetchexpenseHeadList(this.shiptoAddressService.pageIndex, this.shiptoAddressService.pageSize, this.shiptoAddressService.searchTerm);
      this.shiptoAddressService.pageIndex += 1;

    }

    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);

  }

  // ---------------For SeachBar---------------
  toggleSearchBar() {
    this.shiptoAddressService.showSearchBar = !this.shiptoAddressService.showSearchBar;
  }

  public async cancelSearch() {
    this.shiptoAddressService.showSearchBar = false;
    this.shiptoAddressService.searchTerm = "";
    this.shiptoAddressService.pageIndex = 1;
    this.shiptoAddressService.ShipToAddrsList = [];
    await this.fetchexpenseHeadList(this.shiptoAddressService.pageIndex, this.shiptoAddressService.pageSize, this.shiptoAddressService.searchTerm);
    this.shiptoAddressService.pageIndex += 1;
  }

  public async search(searchTerm) {
    this.shiptoAddressService.pageIndex = 1;
    this.shiptoAddressService.ShipToAddrsList = [];
    await this.fetchexpenseHeadList(this.shiptoAddressService.pageIndex, this.shiptoAddressService.pageSize, searchTerm);
    this.shiptoAddressService.pageIndex += 1;

  }


  async showToast(ToastMsg, colorType) {
    await this.toastCtrl.create({
      message: ToastMsg,
      duration: 2000,
      position: 'top',
      color: colorType,
      buttons: [{
        text: 'ok',
        handler: () => {
          //console.log("ok clicked");
        }
      }]
    }).then(res => res.present());
  }

  public checkAvailableAddress(data: AddressInfo): boolean {
    return this.customerService.customerForm.controls.shiptoBPAddresses.value.includes(data)
  }

  public addAddressToCustomer(event: any, address: AddressInfo) {
    console.log(event.target.checked);

    if (event.target.checked) {
      this.customerService.customerForm.controls.shiptoBPAddresses.value.push(address)
    }
    else {
      let alist = this.customerService.customerForm.controls.shiptoBPAddresses.value.filter(i => {
        return i.addressName != address.addressName
      })

      this.customerService.customerForm.controls.shiptoBPAddresses.clear()
      this.customerService.customerForm.controls.shiptoBPAddresses.value.push(...alist)
    }

  }
}

