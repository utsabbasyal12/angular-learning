import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1: string[] = ['john mathew','E120','jm@gmail.com']
  info2: string[] = ['Rob william','E220','rw@gmail.com']
  info3: string[] = ['Rose adams','E320','ra@gmail.com']

  getInfo1():string[]{
    return this.info1
  }
  getInfo2():string[]{
    return this.info2
  }
  getInfo3():string[]{
    return this.info3
  }

  addInfo(info: any){
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
    return this.info1
  }

  constructor() { }
}
