import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditPage } from './editorder.page';
import { Order } from './order';
import { OrderService } from './order.service';

@Component({
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage {
  public orders: Order[] = [];
  public deleteOrder: any;
  constructor(
    private orderservice: OrderService,
    private modalService: NgbModal
  ) {
    this.orders = this.orderservice.GetOrders();
  }
  public Edit(order: Order) {
    const modalRef = this.modalService.open(EditPage);
    modalRef.componentInstance.order = {...order};
    modalRef.componentInstance.isEdit = true;
    modalRef.result.then((data) => {
      this.orders = this.orderservice.GetOrders();
    }, (reason) => {
      // on dismiss
    });

  }
  public Delete() {
    this.orderservice.DeleteOrder(this.deleteOrder);
    this.orders = this.orderservice.GetOrders();
    this.modalService.dismissAll();
  }
  public DeletePopupOpen(order: Order, content: any) {
    this.deleteOrder = order;
    this.modalService.open(content);
  }
  public AddNew() {
    const modalRef = this.modalService.open(EditPage);
    modalRef.componentInstance.order = new Order();
    modalRef.componentInstance.isEdit = false;
  }
}
