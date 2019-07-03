import { Component, OnInit } from '@angular/core';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.sass']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];

  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const userName = this.route.snapshot.params.userName;

    this.photoService
      .listFromUser(userName)
      .subscribe(photos => (this.photos = photos));
  }
}
