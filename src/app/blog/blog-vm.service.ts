import { Injectable } from '@angular/core';
import { NotifyService } from '../services/notify.service';
import { LoggerService } from '../../agio-core';

export class VMServiceBase {
  protected modo: 'list' | 'add' | 'edit' | 'view' | 'delete' = 'list';
  protected listado: Array<any> = [];
  protected elemento: any = {};
  protected idOriginal = null;

  constructor(protected nsrv: NotifyService, protected out: LoggerService, protected pk = 'id') { }

  public get Modo() { return this.modo; }
  public get Listado() { return this.listado; }
  public get Elemento() { return this.elemento; }

  public list() {
    this.modo = 'list';
  }

  public add() {
    this.modo = 'add';
    this.elemento = {};
  }

  public edit(key: any) {
    // tslint:disable-next-line:triple-equals
    const rslt = this.listado.find(item => item[this.pk] == key);
    if (rslt) {
      this.modo = 'edit';
      this.elemento = Object.assign({}, rslt);
      this.idOriginal = key;
    } else {
      this.nsrv.add('Elemento no encontrado.');
    }
  }

  public view(key: any) {
    // tslint:disable-next-line:triple-equals
    const rslt = this.listado.find(item => item[this.pk] == key);
    if (rslt) {
      this.modo = 'view';
      this.elemento = Object.assign({}, rslt);
    } else {
      this.nsrv.add('Elemento no encontrado.');
    }
  }

  public remove(key: any) {
    if (!window.confirm('¿Seguro?')) { return; }
    // tslint:disable-next-line:triple-equals
    const indice = this.listado.findIndex(item => item[this.pk] == key);
    if (indice !== -1) {
      this.listado.splice(indice, 1);
      this.list();
    } else {
      this.nsrv.add('Elemento no encontrado.');
    }
  }

  public cancel() {
    this.elemento = {};
    this.idOriginal = null;
    this.list();
  }

  public send() {
    switch (this.modo) {
      case 'add':
        this.listado.push(this.elemento);
        this.cancel();
        break;
      case 'edit':
          // tslint:disable-next-line:triple-equals
          const indice = this.listado.findIndex(item => item[this.pk] == this.idOriginal);
          if (indice !== -1) {
            this.listado[indice] = this.elemento;
            this.list();
          } else {
            this.nsrv.add('Elemento no encontrado.');
          }
          break;
      case 'view':
          this.cancel();
          break;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class BlogVMService extends VMServiceBase {
  constructor(nsrv: NotifyService, out: LoggerService) {
    super(nsrv, out, 'id');
  }
  public list() {
    this.modo = 'list';
    if (this.listado.length === 0 ) {
      this.listado = [
        {
            'id': 1,
            'titulo': 'Saludo',
            // tslint:disable-next-line:max-line-length
            'texto': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eveniet eum nisi expedita ab dolorum labore similique provident officia ipsa, aliquam recusandae dicta id, praesentium quasi consequatur minus laborum perferendis?',
            'autor': 'Javier',
            'fecha': '2016-02-29',
            'megusta': 0,
            'fotourl': 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png'
        },
        {
            'id': 2,
            'titulo': 'Angular 4.3 Now Available',
            // tslint:disable-next-line:max-line-length
            'texto': '<p>Angular version 4.3 has been released. This is a minor release following our announced adoption of Semantic Versioning, meaning that it contains no breaking changes and that it is a drop-in replacement for 4.x.x.</p><h2>What’s new?</h2><ul><li>We are introducing HttpClient, a smaller, easier to use, and more powerful library for making HTTP Requests. Learn more about it from our docs.</li><li>New router life cycle events for Guards and Resolvers. Four new events: GuardsCheckStart, GuardsCheckEnd, ResolveStart, ResolveEnd join the existing set of life cycle event such as NavigationStart.</li><li>Conditionally disable animations via a new attribute, [@.disabled]</li><li>Support for the emulated /deep/ CSS Selector (the Shadow-Piercing descendant combinator aka >>>) has been deprecated to match browser implementations and Chrome’s intent to remove. ::ng-deep has been added to provide a temporary workaround for developers currently using this feature.</li></ul>',
            'autor': 'Stephen Fluin',
            'fecha': '2017-07-18',
            'megusta': 0,
            'fotourl': 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png'
        }
    ];
    }
  }

}
