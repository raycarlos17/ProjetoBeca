import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Coordinate }from '../model/coordinate.model'
@Injectable({
  providedIn: 'root'
})
export class MapsService {
  public coordenadasBroadcast = new Subject<Coordinate>();
constructor() { }

}
