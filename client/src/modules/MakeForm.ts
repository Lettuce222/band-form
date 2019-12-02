import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormElementState, FormElementInitialState } from './FormElement';

// state
export interface MakeFormState {
  elements: FormElementState[];
}

// state の初期値
const MakeFormInitialState: MakeFormState = {
  elements: [FormElementInitialState],
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

        return { ...elem, attr: action.payload.str, text: '' };
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

    addOptions: (
      state,
      action: PayloadAction<{ index: number; str: string }>,
    ) => ({
      ...state,
      elements: state.elements.map((elem, index) => {
        if (index !== action.payload.index) return elem;

        return { ...elem, options: [...elem.options, action.payload.str] };
      }),
    }),

    deleteOptions: (
      state,
      action: PayloadAction<{ index: number; optionIndex: number }>,
    ) => ({
      ...state,
      elements: state.elements.map((elem, index) => {
        if (index !== action.payload.index) return elem;

        return {
          ...elem,
          options: elem.options.filter(
            (option: string, optionIndex: number) =>
              optionIndex !== action.payload.optionIndex,
          ),
        };
      }),
    }),

    changeOptions: (
      state,
      action: PayloadAction<{
        index: number;
        optionIndex: number;
        str: string;
      }>,
    ) => ({
      ...state,
      elements: state.elements.map((elem, index) => {
        if (index !== action.payload.index) return elem;

        return {
          ...elem,
          options: elem.options.map((option: string, optionIndex: number) =>
            optionIndex !== action.payload.optionIndex
              ? option
              : action.payload.str,
          ),
        };
      }),
    }),
  },
});

export default MakeFormModule;
