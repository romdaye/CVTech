import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  //todos: Todo[] = [];
  constructor() {}
  log(message: unknown): void {
    console.log('Ma variable est', message);
  }
}
