import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormElementState } from './FormElement';

// state
export interface MakeFormState {
  nextElemId: number;
  list: FormElementState[];
}

// state の初期値
const MakeFormInitialState: MakeFormState = {
  nextElemId: 0,
  list: [],
};

// actions と reducers の定義
const MakeFormModule = createSlice({
  name: 'MakeForm',
  initialState: MakeFormInitialState,
  reducers: {
    // todo を追加
    add: state => {
      const elem: FormElementState = {
        id: state.nextElemId,
        attr: 'input',
      };

      return {
        nextElemId: state.nextElemId + 1,
        list: state.list.concat(elem),
      };
    },

    // completed のトグル
    remove: (state, action: PayloadAction<number>) => ({
      ...state,
      list: state.list.filter((elem, index) => index !== action.payload),
    }),
  },
});

export default MakeFormModule;
