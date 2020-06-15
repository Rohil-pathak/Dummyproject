import { Component, OnInit,ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'APteaches';
  constructor(
    private elementRef: ElementRef
  ){}
  ngOnInit(){

  }
  // ngAfterViewInit(){
  //   var style= document.createElement('link');
  //   style.type='text/css';
  //   style.href='assets/styles/bootstrap4/bootstrap.min.css';
  //   style.rel='stylesheet';
  //   this.elementRef.nativeElement.appendChild(style);
  // }
  // ngAfterViewInit(){
  //   var style= document.createElement('link');
  //   style.type='text/css';
  //   style.href='assets/plugins/fontawesome-free-5.0.1/css/fontawesome-all.css';
  //   style.rel='stylesheet';
  //   this.elementRef.nativeElement.appendChild(style);
  // }
  // ngAfterViewInit(){
  //   var style= document.createElement('link');
  //   style.type='text/css';
  //   style.href='assets/plugins/OwlCarousel2-2.2.1/owl.carousel.css';
  //   style.rel='stylesheet';
  //   this.elementRef.nativeElement.appendChild(style);
  // }
  // ngAfterViewInit(){
  //   var style= document.createElement('link');
  //   style.type='text/css';
  //   style.href='assets/plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
  //   style.rel='stylesheet';
  //   this.elementRef.nativeElement.appendChild(style);
  // }
  // ngAfterViewInit(){
  //   var style= document.createElement('link');
  //   style.type='text/css';
  //   style.href='assets/plugins/OwlCarousel2-2.2.1/animate.css';
  //   style.rel='stylesheet';
  //   this.elementRef.nativeElement.appendChild(style);
  // }
  ngAfterViewInit(){
    var style= document.createElement('link');
    style.type='text/css';
    style.href='assets/styles/main_styles.css';
    style.rel='stylesheet';
    this.elementRef.nativeElement.appendChild(style);
  }
  // ngAfterViewInit(){
  //   var style= document.createElement('link');
  //   style.type='text/css';
  //   style.href='assets/styles/responsive.css';
  //   style.rel='stylesheet';
  //   this.elementRef.nativeElement.appendChild(style);
  // }
}
