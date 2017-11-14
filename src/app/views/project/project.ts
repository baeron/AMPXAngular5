import { Component, OnInit} from '@angular/core';
import { DataService } from './project.service';
import { Project } from './projectsData';

@Component({
  selector: 'project-app',
  template: `<div>
              <div class="row justify-content-center mt-5">
                <div class="panel panel-default">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th class="text-center">Id</th>
                        <th class="text-center">Name</th>
                        <th class="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr *ngFor="let item of items">
                        <td>{{item.id}}</td>
                        <td><a href="/project/{{item.id}}">{{item.name}}</a></td>
                        <td class="text-center">
                          <a href="#"><i class="fa fa-pencil p-1" aria-hidden="true"></i></a>
                          <a href="#"><i class="fa fa-trash p-1" aria-hidden="true"></i></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>`,
            providers: [DataService]
})
export class ProjectComponent implements OnInit {
  items: Project[] = [];
  constructor(private dataService: DataService){}

  addItem(id: number, name: string) {
    this.dataService.addData(id, name);
  }

  ngOnInit(){
    this.items = this.dataService.getData();
  }
 }