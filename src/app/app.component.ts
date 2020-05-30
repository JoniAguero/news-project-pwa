import { Component, OnInit } from '@angular/core';
import { GoogleNewsService } from './core/services/google-news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'news-project-pwa';
  news: any;

  constructor(private googleNewsService: GoogleNewsService) {}

  ngOnInit() {
    this.getNews()
  }

  getNews() {
    this.googleNewsService.getGoogleNewsEnglish().subscribe(res => {
      if(res.status === 'ok') this.news = res.articles;
    });
  }

}
