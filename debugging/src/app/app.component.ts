import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers:string[]=[];

  onAddServer(){
    this.servers.push("Another server");
  }

  onRemoveServer(id: number){
    const position= id;
    this.servers.splice(position,1);
  }
  


}