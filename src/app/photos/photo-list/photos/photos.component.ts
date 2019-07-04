import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from 'app/photos/photo/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.sass']
})
export class PhotosComponent implements OnChanges {
  @Input() photos: Photo[] = [];
  rows: [Photo[]?];

  constructor() {}

  ngOnChanges({ photos }: SimpleChanges): void {
    if (photos) {
      this.rows = this.groupColumns(this.photos);
    }
  }

  groupColumns(photos: Photo[]): [Photo[]?] {
    const newRows: [Photo[]?] = [];

    for (let index = 0; index < photos.length; index += 3) {
      newRows.push(photos.slice(index, index + 3));
    }

    return newRows;
  }
}
