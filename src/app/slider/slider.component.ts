import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'


@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  image_array: any[];    //Declare image array to store image paths.
  index: number;         //Declare index to loop through the array.

  constructor() { }

  //Initialize the image array and index.
  ngOnInit() {
  this.image_array = ["./assets/images/random1.jpg", "./assets/images/random2.jpg", "./assets/images/random3.jpg", "./assets/images/random4.jpg"];
  this.index = 0;
  }

  //Use viewchild to access the image container div with id "div1"
  @ViewChild('div1') div;

  //Function to display next image. If the index is at last image of array then set the index to -1.
  toggleNextImage()
  {
  if(this.index == this.image_array.length-1)
  {
    this.index = -1;
  }

  //Increment the index to display the next image and set the css backgroundImage style for div.
  this.index = this.index + 1;
  this.div.nativeElement.style.backgroundImage = 'url('+this.image_array[this.index]+')';
  }

  //Function to display previous image. If the index is at the 0 then set the index to image array length.
  togglePreviousImage()
  {
  if(this.index == 0)
  {
    this.index = this.image_array.length;
  }

  //Decrement the index to display the previous image and set the css backgroundImage style for div.
  this.index = this.index - 1 ;
  this.div.nativeElement.style.backgroundImage = 'url('+this.image_array[this.index]+')';
  }

}
