
import { Injectable } from '@angular/core';
// import { Post } from './post';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
export interface Post {
  id: number,
  title: string, 
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class AutocompleteFilterService {

  public searchOption=[]
  public postsData: Post[]
  postUrl : string = "https://jsonplaceholder.typicode.com/posts"; 

  constructor(
    private http: HttpClient
  ) { }


  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.postUrl);
    
  }

  filteredListOptions() {
    let posts = this.postsData;
        let filteredPostsList = [];
        for (let post of posts) {
            for (let options of this.searchOption) {
                if (options.title === post.title) {
                  filteredPostsList.push(post);
                }
            }
        }
        console.log(filteredPostsList);
        return filteredPostsList;
  }
}