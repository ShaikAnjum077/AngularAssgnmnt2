import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  content: Content[] =[{
    id: 1,
    title: "Tom&Jerry",
    description: "SDE",
    creator: "Anjum",
    imgURL: "https://wallpapercave.com/wp/wp2632109.jpg",
    type: "",
    tags: ["Anjum"]
  },
  {
    id: 2,
    title: "Hippopotamas",
    description: "wild animal",
    creator: "Anjum",
    imgURL: "https://secure.img1-fg.wfcdn.com/im/78902078/resize-h445%5Ecompr-r85/3705/37057945/Hippo+Portrait+Paper+Print.jpg",
    type: "Animal",
    tags: ["Mukesh"]
  },
  {
    id: 3,
    title: "Tom",
    description: "Animation",
    creator: "Anjum",
    imgURL: "https://mystickermania.com/cdn/stickers/tom-and-jerry/tom-jerry-hugs-512x512.png",
    type: "CuteToy",
    tags: ["Anjum"]
  },
  {
    id: 4,
    title: "Dog",
    description: "Animal",
    creator: "Anjum",
    imgURL: "https://secure.img1-fg.wfcdn.com/im/83376873/resize-h445%5Ecompr-r85/7348/73482524/Caughfield+Labrador+Pup+Canvas+Art.jpg",
    type: "Animal",
    tags: ["Anjum"]
  }, 
  {
    id: 5,
    title: "Elephant",
    description: "Animal",
    creator: "Anjum",
    imgURL: "https://cdn.shopify.com/s/files/1/0588/5647/2754/products/elephant_1024x1024@2x.jpg?v=1637533768",
    type: "Animal",
    tags: ["Anjum"]
  }, 
  {
    id: 6,
    title: "Cat",
    description: "Cute cats",
    creator: "Anjum",
    imgURL: "https://da.lowes.ca/webassets/images/330614050_MainImage_001.jpg",
    type: "Wild Animal",
    tags: ["Anjum"]
  }, 
  {
    id: 7,
    title: "Monkey",
    description: "Animal",
    creator: "Anjum",
    imgURL: "https://thumbs.dreamstime.com/z/vervet-monkey-chlorocebus-pygerythrus-5204587.jpg",
    type: "Jungle",
    tags: ["Anjum"]
  }, 
  {
    id: 8,
    title: "TomJerrry",
    description: "SDE",
    creator: "Anjum",
    imgURL: "https://www.facebook.com/tomandjerrychaseasia/photos/a.103309651046038/241399770570358/",
    type: "Cuties",
    tags: ["Anjum"]
  }];
  constructor() { }

  ngOnInit(): void {
  }
  

}
