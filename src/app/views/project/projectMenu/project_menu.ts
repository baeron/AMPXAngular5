import { Component} from '@angular/core';

@Component({
  selector: 'project-menu',
  styles: [`
  #cover {
    background-size: cover;
    height: 60%;
    text-align: center;
    display: flex;
    align-items: center;
  }
  #cover-caption {width: 100%;}
  `],
  template: `<section id="cover">
              <div id="cover-caption">
                <div id="container" class="container">
                  <div class="row justify-content-center">
                    <h1>Project</h1>
                  </div>
                  <div class="row justify-content-center">
                    <p>To start working<p>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-12 col-md-3 col lg-2">
                      <a href="#">Electrical Load List</a>
                    </div>
                    <div class="col-12 col-md-4 col lg-2">
                      <a href="#">Electrical Equipment List</a>
                    </div>
                  </div>
                  `
/*                  <div class="row justify-content-center">
                    <span>To start working<span>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-12">
                      <a href="#">Electrical Load List</a>
                    </div>
                    <div class="col-12">
                      <a href="#">Electrical Equipment List</a>
                    </div>
                  </div>*/
                +`</div>
              </div>
            </section>
              `
})
export class ProjectMenuComponent { }