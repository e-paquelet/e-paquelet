import { Component } from '@angular/core';
import { VideoComponent } from '../../shared/video/video.component';

@Component({
    selector: 'app-rs',
    imports: [VideoComponent],
    templateUrl: './rs.component.html',
    styleUrl: './rs.component.css'
})
export class RsComponent {
    github = "./assets/img/rs/github.png";
    linkedin = "./assets/img/rs/linkedin.png";
    bgImgUrl = "./assets/img/background2.mp4";
}
