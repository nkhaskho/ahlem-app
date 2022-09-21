import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  BLOGS = [
    {
      id: 1,
      title: "Blog title 1",
      views: 0,
      comments: [],
      image: "assets/images/blog-01.jpg",
      author: "Jane Dao",
      date: new Date("2022-07-15T17:30"),
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
    },
    {
      id: 2,
      title: "Blog title 2",
      views: 0,
      comments: [],
      image: "assets/images/blog-02.jpg",
      author: "Jane Dao",
      date: new Date("2022-07-15T17:30"),
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
    },
    {
      id: 2,
      title: "Blog title 3",
      views: 0,
      comments: [],
      image: "assets/images/blog-03.jpg",
      author: "Jane Dao",
      date: new Date("2022-07-15T17:30"),
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
    }
  ]

  constructor() { }
}
