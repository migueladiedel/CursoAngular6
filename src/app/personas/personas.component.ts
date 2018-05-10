import { Component, OnInit } from '@angular/core';
import { PersonasVMService } from './personas-vm.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  constructor(private vm: PersonasVMService) { }
  public VM() { return this.vm; }
  ngOnInit() {
    this.vm.list();
  }

}

@Component({
  selector: 'app-personas-list',
  templateUrl: './tmp-list.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasListComponent implements OnInit {

  constructor(private vm: PersonasVMService) { }
  public VM() { return this.vm; }
  ngOnInit() {
  }

}

@Component({
  selector: 'app-personas-tmp-form.component',
  templateUrl: './tmp-form.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasAddComponent implements OnInit {

  constructor(private vm: PersonasVMService) { }
  public VM() { return this.vm; }
  ngOnInit() {
  }

}

@Component({
  selector: 'app-personas-tmp-edit',
  templateUrl: './tmp-form.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasEditComponent implements OnInit {

  constructor(private vm: PersonasVMService) { }
  public VM() { return this.vm; }
  ngOnInit() {
  }

}

@Component({
  selector: 'app-personas-view',
  templateUrl: './tmp-view.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasViewComponent implements OnInit {

  constructor(private vm: PersonasVMService) { }
  public VM() { return this.vm; }
  ngOnInit() {
  }

}
export const PERSONAS_COMPONENT = [PersonasComponent, PersonasListComponent, PersonasAddComponent,
  PersonasEditComponent, PersonasViewComponent, ];
