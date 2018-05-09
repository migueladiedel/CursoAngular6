import { Injectable, InjectionToken, Inject } from "@angular/core";

export const ERROR_LEVEL = new InjectionToken<number>("ERROR_LEVEL");

@Injectable({
  providedIn: "root"
})
export class LoggerService {
  private nivel = 5;

  constructor(@Inject(ERROR_LEVEL) nivel: number) {
    if (nivel) {
      this.nivel = nivel;
    }
  }

  log(msg: string): void {
    if (this.nivel > 3) {
      console.log(msg);
    }
  }
  info(msg: string): void {
    if (this.nivel > 2) {
      console.info(msg);
    } else {
      this.log(msg);
    }
  }
  warn(msg: string): void {
    if (this.nivel > 0) {
      console.error(msg);
    }
  }
  error(msg: string): void {
    if (this.nivel > 0) {
      console.error(msg);
    }
  }
}
