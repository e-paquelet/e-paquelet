import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-prog1',
  standalone: true,
  imports: [],
  templateUrl: './prog1.component.html',
  styleUrl: './prog1.component.css'
})
export class Prog1Component implements AfterViewInit {
    bgImgUrl = "/assets/img/background.jpg";
    bgImgUrl1 = "/assets/img/linkedin.png";
    bgImgUrl2 = "/assets/img/mail.png";
    ngAfterViewInit(): void {
        
        const imageContainer:any = 
            document.querySelector('.image-container');
        const prevBtn:any = 
            document.getElementById('prev');
        const nextBtn:any = 
            document.getElementById('next');
        const overlay:any = 
            document.getElementById('overlay');
        const popupImg:any = 
            document.getElementById('popup-img');
        const images = 
            document.querySelectorAll('.image-container span img');
        
        let x = 0;
        prevBtn.addEventListener('click', () => {
            x = x + 45;
            rotate();
        });
        nextBtn.addEventListener('click', () => {
            x = x - 45;
            rotate();
        });
        
        images.forEach(image => {
            image.addEventListener('click', () => {
                const src = image.getAttribute('src');
                popupImg.setAttribute('src', src);
                overlay.classList.add('active');
            });
        });
        
        overlay.addEventListener('click', () => {
            overlay.classList.remove('active');
        });
        
        function rotate() {
            imageContainer.style.transform = 
                `perspective(1000px) rotateY(${x}deg)`;
        }

        (function() {

            'use strict';
          
            // define variables
            var items = document.querySelectorAll(".fadeup");
          
            // check if an element is in viewport
            function isElementInViewport(el:any) {
              var rect = el.getBoundingClientRect();
              return (
                rect.top >= 0 &&
                rect.top + (rect.height/2) <= (window.innerHeight || document.documentElement.clientHeight)
              );
            }
          
          
              function callbackFunc() {
                for (var i = 0; i < items.length; i++) {
                  if (isElementInViewport(items[i])) {
                    items[i].classList.add("in-view");
                  }
                }
              }
          
              // listen for events
              window.addEventListener("load", callbackFunc);
              window.addEventListener("resize", callbackFunc);
              window.addEventListener("scroll", callbackFunc);
          
            })();
    }

    makeImgUrl(str: string): string {
      return "url('" + str + "')"
    }

}
