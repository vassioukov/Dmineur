import { Injectable } from '@angular/core';

@Injectable() 
export class Session {
  constructor(
    public _id: number,
    public login: string,
    public password: string,
    ) {  }
  static fromJson(json) {
    return new Session(json._id, json.login, json.password);
  }
}

