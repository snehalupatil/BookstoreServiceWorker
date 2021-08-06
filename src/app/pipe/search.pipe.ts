import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: any): any[] {
   
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    
    // searchText = searchText.toLocaleLowerCase();
    // console.log(searchText)
    return items.filter(it => {
      return it.bookName.toLowerCase().includes(searchText.toLowerCase());
    });
  }
}