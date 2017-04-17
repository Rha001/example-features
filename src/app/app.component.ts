import { Component, OnInit, ElementRef, AfterContentInit } from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterContentInit {
  title = 'app works!';
  $element: any;
  constructor(private el: ElementRef) {
  }

  ngAfterContentInit() {
    $('#mainSlide').slick();
  }
}
