import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {StoreService} from "../../../../services/store.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})
export class FiltersComponent implements OnInit, OnDestroy{
  @Output()
  showCategory = new EventEmitter<string>();
  categories : Array<string> | undefined;
  categoriesSubscription: Subscription | undefined;

  constructor(private storeService: StoreService) {
  }
  ngOnInit():void{
    this.categoriesSubscription = this.storeService.getAllCategories()
        .subscribe((response) =>{
          this.categories = response;
        });
  }
  ngOnDestroy() {
    if (this.categoriesSubscription){
      this.categoriesSubscription.unsubscribe();
    }
  }

  onShowCategory(category: string): void{
    this.showCategory.emit(category);
  }

}
