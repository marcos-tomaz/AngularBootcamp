import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  public list;
  public itemName = '';

  constructor(private shoppingListService: ShoppingListService) {
   this.list = this.shoppingListService.listItemsFirebase;
  //  this.shoppingListService.get();
  }

  ngOnInit() {
  }

  addItem(): void{
    let addItem = {
      name: this.itemName,
      amount: 1,
      checked: false
    };

    this.shoppingListService.add(
      addItem
    );
    // .subscribe(
    //   response => {
    //     addItem['id'] = response['name'];
    //     this.shoppingListService.listItems.push(addItem);
    //   },
    //   error => {
    //     console.log('erro');
    //   }
    // );

    this.itemName = '';
  }

}
