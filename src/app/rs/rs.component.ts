import { Component, inject } from '@angular/core';
import { VideoComponent } from '../../shared/video/video.component';
import { LanguageService } from '../../services/language.service';

@Component({
    selector: 'app-rs',
    imports: [VideoComponent],
    templateUrl: './rs.component.html',
    styleUrl: './rs.component.css'
})
export class RsComponent {
    public translation = inject(LanguageService);
    github = "./assets/img/rs/github.png";
    linkedin = "./assets/img/rs/linkedin.png";
    bgImgUrl = "./assets/img/background2.mp4";
}
