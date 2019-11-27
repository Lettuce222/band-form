import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'semantic-ui-react';
import FormElementModule, { FormElementState } from '../modules/FormElement';

const options = [
  { key: 0, text: '記述式', value: 'input' },
  { key: 1, text: '段落', value: 'textarea' },
  { key: 2, text: 'ラジオボタン', value: 'radiobutton' },
  { key: 3, text: 'チェックボックス', value: 'checkbox' },
  { key: 4, text: 'プルダウン', value: 'pulldown' },
];

export interface FormElementProps {
  index: number;
  remove?: () => void;
}

const FormElement: FC<FormElementProps> = ({
  index = 0,
  remove = () => {},
}) => {
  const dispatch = useDispatch();

  // const elems = useSelector(
  //   (state: RootState): FormElementState[] => state.MakeForm.list
  // );
  const elems: FormElementState[] = [];
  const elem = elems[index];

  // const changeAttr = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   dispatch(FormElementModule.actions.changeAttr(e.target.value));
  // };
  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(FormElementModule.actions.changeAttr(e.target.value));
  };
  // const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   dispatch(FormElementModule.actions.changeAttr(e.target.value));
  // }

  const renderElements = (att: string) => {
    switch (att) {
      case 'input':
        return (
          <Form.Field>
            <input
              defaultValue="無題の質問"
              value={elem.title}
              onChange={changeTitle}
            />
            <input value="記述式テキスト（短文回答）" disabled />
          </Form.Field>
        );
      case 'textarea':
        return (
          <Form.Field>
            <input defaultValue="無題の質問" />
            <textarea value="記述式テキスト（長文回答）" disabled />
          </Form.Field>
        );
      default:
        return <div />;
    }
  };

  return (
    <Form.Field>
      <Form.Select options={options} placeholder="記述式" />
      {renderElements(elem.attr)}
      <Form.Button color="red" onClick={remove}>
        削除
      </Form.Button>
    </Form.Field>
  );
};

export default FormElement;
