import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 's-quiz';
  nodeVersion = ''
  versionAPI : any = (window as any).versions

  ngOnInit(): void {
    if(this.versionAPI != null){
      this.nodeVersion = this.versionAPI.node();
    }
  }


  minizedWindow() {
    (window as any).elecApi.mainWindowMinimize()
  }

  maxinizedWindow() {
    (window as any).elecApi.mainWindowMaximizedOrUnMaximized()
  }

  closeWindow() {
    (window as any).elecApi.closeWindow()
  }

}


