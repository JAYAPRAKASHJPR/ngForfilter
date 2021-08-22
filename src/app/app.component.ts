import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  ages: number = 68;
  genders: string = 'm';

  userlist = [
    { sno: 1, name: 'jp', age: 26, gender: 'm' },
    { sno: 2, name: 'jp1', age: 27, gender: 'f' },
    { sno: 3, name: 'jp2', age: 28, gender: 'm' },
    { sno: 4, name: 'jp3', age: 29, gender: 'f' },
    { sno: 5, name: 'jp4', age: 40, gender: 'm' },
    { sno: 6, name: 'jp5', age: 67, gender: 'f' }
  ];

  get filterByAge() {
    return this.userlist.filter(x => x.age > this.ages && x.gender == this.genders);
  }
}
