import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'Angular Component Interaction';
  imgUrl = 'https://picsum.photos/200';

  count = 0;

  name: string;
  userName: string;
  private _customerName: string;
  @ViewChild('nameRef', { static: false }) nameElementRef: ElementRef;

  ngAfterViewInit() {
    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef);
  }

  // getter (returns private variables)
  get customerName(): string {
    return this._customerName;
  }

  // setter (sets private variables)
  set customerName(value: string) {
    this._customerName = value;
    if (value === 'Bharath') {
      alert('Hi Bharath');
    }
  }

  incrementCount() {
    this.count += 1;
  }

  greetBharath(updatedValue) {
    this.userName = updatedValue;
    if (updatedValue === 'Bharath') {
      alert('Welcome back Bharath');
    }
  }
}
