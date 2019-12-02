export interface FormElementState {
  id: number;
  attr: string;
  title: string;
  options: string[];
}

export const FormElementInitialState: FormElementState = {
  id: 0,
  attr: 'input',
  title: '',
  options: [],
};
