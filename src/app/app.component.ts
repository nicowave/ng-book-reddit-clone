// AppComponent

import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular 2', 
                'http://angular.io', 
                  'lorem, some ipsum', 3),
      new Article('Fullstack', 
                    'http://fullstack.io', 
                      'lorem, some ipsum', 2),
      new Article('Angular Homepage',
                   'http://angular.io', 
                    'lorem, some ipsum, ipsum, ipsum', 1)
    ];
  }

  
  addArticle(title: HTMLInputElement, link: HTMLInputElement, body: HTMLInputElement): boolean {

    // console log user's input
    console.log(`Adding article 
                  title: ${title.value}, 
                  link: ${link.value},
                  body: ${body.value}`);

    this.articles.push(new Article(title.value, link.value, body.value,  0));

    // 'clean-up' form elements after input values have been pushed to array
    title.value = '';
    link.value = '';
    body.value = '';

    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
