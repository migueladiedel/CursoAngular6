import { Component, OnInit } from '@angular/core';
import { BlogVMService } from './blog-vm.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private vm: BlogVMService) { }
  public get VM() { return this.vm; }

  ngOnInit() {
    this.vm.list();
  }
}

@Component({
  selector: 'app-blog-list',
  templateUrl: './tmpl-list.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlobListComponent implements OnInit {

  constructor(private vm: BlogVMService) { }
  public get VM() { return this.vm; }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-blog-add',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlobAddComponent implements OnInit {

  constructor(private vm: BlogVMService) { }
  public get VM() { return this.vm; }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-blog-edit',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlobEditComponent implements OnInit {

  constructor(private vm: BlogVMService) { }
  public get VM() { return this.vm; }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-blog-view',
  templateUrl: './tmpl-view.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlobViewComponent implements OnInit {

  constructor(private vm: BlogVMService) { }
  public get VM() { return this.vm; }

  ngOnInit() {
  }

}

export const BLOG_COMPONENT = [BlogComponent, BlobListComponent, BlobAddComponent,
  BlobEditComponent, BlobViewComponent, ];
