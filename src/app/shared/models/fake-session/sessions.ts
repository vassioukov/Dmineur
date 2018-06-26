import { Session } from './session';

export const SESSIONITEMS: Session[] = [
  //A conserver pour le moment
  {
    _id: -2,
    email: 'guest',
    password: 'guest',
    profile: 'guest'
  },
  //A conserver pour le moment
  {
    _id: -1,
    email: 'admin',
    password: 'admin',
    profile: 'admin'
  },
  //A supprimer lorsqu'il y aura un back-end
  {
    _id: 2,
    email: 'agent',
    password: 'agent',
    profile: 'agent'
  },
  //A supprimer lorsqu'il y aura un back-end
  {
    _id: 3,
    email: 'client',
    password: 'client',
    profile: 'client'
  }
];
