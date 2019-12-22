import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showButton = false;
  showButton2 = false;
  buttonName: any;

  constructor(private _location: Location,
              private router: Router) {
  }

  back() {
    this._location.back();
  }

  navigateRoute() {
    this.router.navigateByUrl('');
  }

  navigateDiffrentPage(url: string, data: object) {
    console.log(data);
    this.router.navigate([url], {state: {data: {data}}});
  }

  toggle() {
    this.showButton = !this.showButton;
    if (this.showButton) {
      this.buttonName = 'Show';
    } else {
      this.buttonName = 'Hide';
    }
  }

}
