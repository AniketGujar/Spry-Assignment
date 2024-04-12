import { createAction, props } from '@ngrx/store';

export const updateString = createAction('[String] Update', props<{ value: string }>());
