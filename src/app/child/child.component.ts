import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  // alias as loggedFlag
  // @Input('loggedIn')
  // loggedFlag :boolean;

  // we can give default value also for input
  // @Input('loggedIn')
  // loggedFlag = true;

  @Input()
  loggedIn: boolean;

  constructor() {}

  ngOnInit(): void {}
}
