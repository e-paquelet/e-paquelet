import { Component, Input } from '@angular/core';
import { RouterLink, Router, UrlTree, UrlSegment, UrlSegmentGroup } from '@angular/router';

@Component({
    selector: 'app-video',
    imports: [RouterLink],
    templateUrl: './video.component.html',
    styleUrl: './video.component.css'
})
export class VideoComponent {
  @Input() bgImgUrl: string = "";
  @Input() titre: string = "Titre du component";
  @Input() lienFleche: string = "";

  tree: string;
  constructor(router: Router) {
    // TODO voir: https://stackoverflow.com/questions/46658522/how-to-smooth-scroll-to-page-anchor-in-angular-4-without-plugins-properly
    this.tree = router.parseUrl(this.lienFleche).toString();
  }
}
