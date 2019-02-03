import { Component, OnInit} from '@angular/core';
import { SearchService } from './SearchService';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  ,
  providers: [SearchService]
})
export class AppComponent {
  results: any = [];
  searchTerm$ = new Subject<string>();

    constructor(private searchService: SearchService) {
      this.searchService.search(this.searchTerm$)
       .subscribe(results => {
           this.results = results['results'];
         });
   }
  title = 'app';
}


