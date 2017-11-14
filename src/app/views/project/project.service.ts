import {Project} from './projectsData';

export class DataService{

   private data: Project[] = [
       { id: 1, name:"First project"},
       { id: 2, name: "Second project"},
       { id: 3, name: "Third project"}
   ];
   getData(): Project[] {
       return this.data;
   }

   addData(id: number, name: string){
       this.data.push(new Project(id, name));
   }
}