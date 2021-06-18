import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Order } from './order';
import { OrderService } from './order.service';

@Component({
  selector: 'edit-order',
  templateUrl: './edit.page.html',
})
export class EditPage {
  @Input()
  public order: Order | any;
  @Input()
  public isEdit: boolean | any;
  constructor(
    public activeModal: NgbActiveModal,
    private orderService: OrderService
  ) {}
  close() {
    this.activeModal.close();
  }
  save() {
    if (this.isEdit) {
      this.orderService.UpdateOrder(this.order);
    } else {
      this.orderService.AddOrder(this.order);
    }
    this.activeModal.close();
  }
}
