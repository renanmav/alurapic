import { Component, Input } from "@angular/core";

@Component({
  selector: "app-photo",
  templateUrl: "./photo.component.html",
  styleUrls: ["./photo.component.sass"]
})
export class PhotoComponent {
  @Input() url: string;
  @Input() description: string;

  constructor() {}
}
