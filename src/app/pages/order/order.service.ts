import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import orders from './orders.json';
import { Order } from './order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders: Order[] = [];
  constructor() {
    this.orders = orders as any;
  }
  public GetOrders(): Order[] {
    return this.orders;
  }
  public AddOrder(order: any): void {
    this.orders.push(order);
  }
  public UpdateOrder(order: any): void {
    var oldOrder = this.orders.find(x=> x.OrderNumber === order.OrderNumber);
    if(oldOrder){
      oldOrder.CustomerAddress = order.CustomerAddress;
      oldOrder.CustomerBuyerName = order.CustomerBuyerName;
      oldOrder.CustomerPhone = order.CustomerPhone;
      oldOrder.OrderDueDate = order.OrderDueDate;
      oldOrder.OrderTotal = order.OrderTotal;
    }
  }
  public DeleteOrder(order: Order): void {
    this.orders = this.orders.filter(x=>x != order);
  }
}
