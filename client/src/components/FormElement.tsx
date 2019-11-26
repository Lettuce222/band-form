import React, { FC } from 'react';
import { Form } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { FormElementState } from '../modules/FormElement';
import { RootState } from '../store';

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

const FormElement: FC<FormElementProps> = ({ index, remove }) => {
  const elems = useSelector(
    (state: RootState): FormElementState[] => state.MakeForm.list,
  );

  const element = elems[index];

  const renderElements = (elem: FormElementState) => {
    switch (elem.attr) {
      case 'input':
        return (
          <Form.Field>
            <input defaultValue="無題の質問" />
            <input value="記述式テキスト（短文回答）" disabled />
          </Form.Field>
        );
      case 'textarea':
        return (
          <Form.Field>
            <input defaultValue="無題の質問" value={elem.title} />
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
      {renderElements(element)}
      <Form.Button color="red" onClick={remove}>
        削除
      </Form.Button>
    </Form.Field>
  );
};

export default FormElement;
