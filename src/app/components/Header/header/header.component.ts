import { Component, OnInit } from '@angular/core';
import {AOS} from 'aos';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

  toHome(){
    document.getElementById("home").scrollIntoView({behavior:'smooth'});
  }
  toAbout(){
    document.getElementById("about").scrollIntoView({behavior:'smooth'});
  }

  toContact(){
    document.getElementById("contact").scrollIntoView({behavior:'smooth'});
  }

  toGallery(){
    document.getElementById("gallery").scrollIntoView({behavior:'smooth'});
  }
}

