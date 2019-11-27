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
