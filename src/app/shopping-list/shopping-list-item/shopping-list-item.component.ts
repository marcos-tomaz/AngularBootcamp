import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.scss']
})
export class ShoppingListItemComponent implements OnInit {
  
  @Input() shoppingItem: any = {};
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  removeItem(): void{
    this.shoppingListService.remove(this.shoppingItem.id);
  }

  checkItem(): void{
    this.shoppingListService.check(this.shoppingItem).subscribe(
      response => {
        console.log('Item atualizado com sucesso');
        this.shoppingItem.checked = true;
        this.shoppingItem.amout = 0;
      }
    );
  }

}
