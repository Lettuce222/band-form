import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FormElementState {
  id: number;
  attr: string;
  title: string;
  text: string;
}

export const FormElementInitialState: FormElementState = {
  id: 0,
  attr: 'input',
  title: '',
  text: '',
};

// actions と reducers の定義
const FormElementModule = createSlice({
  name: 'FormElement',
  initialState: FormElementInitialState,
  reducers: {
    changeAttr: (state, action: PayloadAction<string>) => ({
      ...state,
      attr: action.payload,
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

export default FormElementModule;
