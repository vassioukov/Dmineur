import { Injectable } from '@angular/core';
import {SESSIONITEMS} from './sessions';

export class FakeSessionService {
	constructor() { }
		get() { return SESSIONITEMS; }
		getSession(id: number) {
		return SESSIONITEMS[id - 1];
	}
	
	login(session) {
		session.id = SESSIONITEMS.length + 1;
		SESSIONITEMS.push(session);
	}
	/*
	delete(sessionItem) {
		let index;
		index = SESSIONITEMS.indexOf(sessionItem);
		if (SESSIONITEMS.indexOf(sessionItem) >= 0) {
		  SESSIONITEMS.splice(index, 1);
		}
	}
	*/

}
