import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
})
export class ProductsHeaderComponent {
  @Output()
  columnsCountChange = new EventEmitter<number>();
  sort = 'Desc';
  itemShowCount = 12;
  onSortUpdated(newSort: string): void{
    this.sort = newSort;
  }
  onItemUpdated(count: number): void{
    this.itemShowCount = count;
  }
  onColumnsUpdated(columns: number): void{
    this.columnsCountChange.emit(columns);
  }

}
