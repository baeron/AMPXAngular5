import { Component} from '@angular/core';

@Component({
  selector: 'about-app',
  styles: [`
  .carousel-item.active,
  .carousel-item-next,
  .carousel-item-prev {
    display: block;
  }
  `],
  template: `<div>
              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <img class="d-block img-fluid" src="https://i.imgur.com/yx13iCb.jpg">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block img-fluid" src="https://i.imgur.com/SWxfstN.jpg">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block img-fluid" src="https://i.imgur.com/A4PwfKj.jpg">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block img-fluid" src="https://i.imgur.com/70ewSk1.jpg">
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
              <div class="container">
              </div>
            </div>`
})
export class AboutComponent { }