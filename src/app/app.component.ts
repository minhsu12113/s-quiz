import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 's-quiz';
  nodeVersion = (window as any).versions.node();

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


