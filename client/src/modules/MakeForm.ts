import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormElementState, FormElementInitialState } from './FormElement';

// state
export interface MakeFormState {
  elements: FormElementState[];
}

// state の初期値
const MakeFormInitialState: MakeFormState = {
  elements: [],
};

// actions と reducers の定義
const MakeFormModule = createSlice({
  name: 'MakeForm',
  initialState: MakeFormInitialState,
  reducers: {
    // todo を追加
    add: state => {
      const elem: FormElementState = FormElementInitialState;
      state.elements.push(elem);
    },

    remove: (state, action: PayloadAction<number>) => ({
      ...state,
      elements: state.elements.filter(
        (elem, index) => index !== action.payload,
      ),
    }),

    // FormElementの変更
    changeAttr: (
      state,
      action: PayloadAction<{ index: number; str: string }>,
    ) => ({
      ...state,
      elements: state.elements.map((elem, index) => {
        if (index !== action.payload.index) return elem;

        return { ...elem, attr: action.payload.str };
      }),
    }),
    changeTitle: (
      state,
      action: PayloadAction<{ index: number; str: string }>,
    ) => ({
      ...state,
      elements: state.elements.map((elem, index) => {
        if (index !== action.payload.index) return elem;

        return { ...elem, title: action.payload.str };
      }),
    }),
    changeText: (
      state,
      action: PayloadAction<{ index: number; str: string }>,
    ) => ({
      ...state,
      elements: state.elements.map((elem, index) => {
        if (index !== action.payload.index) return elem;

        return { ...elem, text: action.payload.str };
      }),
    }),
  },
});

export default MakeFormModule;
