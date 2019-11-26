import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FormElementState {
  id: number;
  attr: string;
  title: string;
}

const FormElementInitialState: FormElementState = {
  id: 0,
  attr: 'input',
  title: '',
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
  },
});

export default FormElementModule;
