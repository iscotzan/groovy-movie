import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { PaginatorModel } from '../../models/paginator.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  popularMoviesList: Array<PaginatorModel> = [];

  constructor(private apiService: ApiService,
  ) { }

  ngOnInit() { }

}
