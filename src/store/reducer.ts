import { Action } from '@ngrx/store';

export function clientReducer(state: string = 'client-a', action: Action) {

  switch (action.type) {

    case 'Client A':
      return state = 'client-a'

    case 'Client B':
      return state = 'client-b'

    case 'Client C':
      return state = 'client-c'

    default:
      return state;
  }
}