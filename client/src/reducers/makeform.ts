import { Reducer } from 'redux';
import {
  MakeFormAction,
  MakeFormActionType,
  remove,
} from '../actions/makeform';

export interface MakeFormState {
  elements: string[];
}

export const initialState: MakeFormState = { elements: [] };

const MakeFormReducer: Reducer<MakeFormState, MakeFormAction> = (
  state: MakeFormState = initialState,
  action: MakeFormAction,
): MakeFormState => {
  switch (action.type) {
    case MakeFormActionType.ADD:
      return {
        ...state,
        elements: [...state.elements, 'input'],
      };
    case MakeFormActionType.REMOVE:
      return {
        ...state,
        elements: state.elements.filter((elem, i) => i !== action.index),
      };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action.type;

      return state;
    }
  }
};

export default MakeFormReducer;
