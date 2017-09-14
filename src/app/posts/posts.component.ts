import { subscribeOn } from 'rxjs/operator/subscribeOn';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { 
    http.get(this.url)
    .subscribe(response => {
      /* console.log(response.json()); */
      this.posts = response.json();
    });
  }

  createPost(input: HTMLInputElement){
    let post = { title: input.value}
    input.value='';

    this.http.post(this.url, JSON.stringify(post))
    .subscribe(response => {
      post['id'] = response.json().id;
      this.posts.splice(0, 0, post)
     /*  console.log(response.json()); */
    });
  }

  ngOnInit() {
  }

}