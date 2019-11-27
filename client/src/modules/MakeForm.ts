import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormElementState, FormElementInitialState } from './FormElement';

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
      const elem: FormElementState = FormElementInitialState;

      return {
        nextElemId: state.nextElemId + 1,
        list: state.list.concat(elem),
      };
    },

    remove: (state, action: PayloadAction<number>) => ({
      ...state,
      list: state.list.filter((elem, index) => index !== action.payload),
    }),

    // FormElementの変更
    changeAttr: (
      state,
      action: PayloadAction<{ index: number; str: string }>,
    ) => ({
      ...state,
      list: state.list.map((elem, index) => {
        if (index === action.payload.index) return elem;

        return { ...elem, attr: action.payload.str };
      }),
    }),
    changeTitle: (state, action: PayloadAction<string>) => ({
      ...state,
      title: action.payload,
    }),
    changeText: (state, action: PayloadAction<string>) => ({
      ...state,
      text: action.payload,
    }),
  },
});

export default MakeFormModule;
