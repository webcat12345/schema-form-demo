import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GenerateMethod } from '../_statics/generate-method.enum';

@Injectable()
export class FormBuildService {

  constructor() { }

  getSchema(method: number, schema) {
    if (method === GenerateMethod.normal_way) {
      return Observable.of({data: schema});
    } else if (method === GenerateMethod.async_way) {
      return Observable.of({data: schema}).delay(1000);
    } else {
      return Observable.of({data: null});
    }
  }

}
