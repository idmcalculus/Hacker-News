import { Component, OnInit } from '@angular/core';
/* import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag'; */

import { StoriesService } from '../stories.service';
import { Story } from '../stories';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  topStories: Story[];
  today: number = Date.now();

  constructor(private storiesService: StoriesService) { }

  ngOnInit(): void {
    this.storiesService.getStories()
      .subscribe(
        (data: Story[]) => this.topStories = data,
        (err: any) => console.log(err),
        () => console.log('All done getting stories')
      );
    /* this.topStories = this.apollo.watchQuery<Query>({
      query: gql `
        query topStories {
          hn {
            topStories {
            title
            url
            score
            descendants
            timeISO
          }
        }
        }
      `
    }).valueChanges
      .pipe(
        map(result => result.data.topStories)
      ); */
  }
}

export class DatePipeComponent {
  today: number = Date.now();
}
