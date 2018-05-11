import { Component, OnInit } from '@angular/core';
import { BlobVMService } from './blob-vm.service';

@Component({
  selector: 'app-blob',
  templateUrl: './blob.component.html',
  styleUrls: ['./blob.component.css']
})
export class BlobComponent implements OnInit {

  constructor(private vm: BlobVMService) { }
  public get VM() { return this.vm; }

  ngOnInit() {
    this.vm.list();
  }
}

@Component({
  selector: 'app-blob-list',
  templateUrl: './tmpl-list.component.html',
  styleUrls: ['./blob.component.css']
})
export class BlobListComponent implements OnInit {

  constructor(private vm: BlobVMService) { }
  public get VM() { return this.vm; }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-blob-add',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./blob.component.css']
})
export class BlobAddComponent implements OnInit {

  constructor(private vm: BlobVMService) { }
  public get VM() { return this.vm; }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-blob-edit',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./blob.component.css']
})
export class BlobEditComponent implements OnInit {

  constructor(private vm: BlobVMService) { }
  public get VM() { return this.vm; }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-blob-view',
  templateUrl: './tmpl-view.component.html',
  styleUrls: ['./blob.component.css']
})
export class BlobViewComponent implements OnInit {

  constructor(private vm: BlobVMService) { }
  public get VM() { return this.vm; }

  ngOnInit() {
  }

}

export const BLOB_COMPONENT = [BlobComponent, BlobListComponent, BlobAddComponent,
  BlobEditComponent, BlobViewComponent, ];
