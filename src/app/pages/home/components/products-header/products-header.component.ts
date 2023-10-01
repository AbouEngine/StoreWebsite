import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
})
export class ProductsHeaderComponent {
  @Output()
  columnsCountChange = new EventEmitter<number>();
  @Output()
  itemsCountChange = new EventEmitter<number>();
  @Output()
  sortChange = new EventEmitter<string>();
  sort = 'Desc';
  itemShowCount = 12;
  onSortUpdated(sort: string): void{
    this.sort = sort;
    this.sortChange.emit(sort);
  }
  onItemUpdated(count: number): void{
    this.itemShowCount = count;
    this.itemsCountChange.emit(count);
  }
  onColumnsUpdated(columns: number): void{
    this.columnsCountChange.emit(columns);
    this.columnsCountChange.emit(columns);
  }

}
