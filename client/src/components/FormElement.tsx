import React, { FC } from 'react';
import { Form } from 'semantic-ui-react';

const options = [
  { key: 0, text: '記述式', value: 'input' },
  { key: 1, text: '段落', value: 'textarea' },
  { key: 2, text: 'ラジオボタン', value: 'radiobutton' },
  { key: 3, text: 'チェックボックス', value: 'checkbox' },
  { key: 4, text: 'プルダウン', value: 'pulldown' },
];

const renderElements = (attr: string) => {
  switch (attr) {
    case 'input':
      return (
        <Form.Field>
          <input value="無題の質問" />
          <input value="記述式テキスト（短文回答）" disabled />
        </Form.Field>
      );
    case 'textarea':
      return (
        <Form.Field>
          <input value="無題の質問" />
          <textarea value="記述式テキスト（長文回答）" disabled />
        </Form.Field>
      );
    default:
      return <div />;
  }
};

export interface FormElementProps {
  attr?: string;
  remove?: () => void;
}

const MakeForm: FC<FormElementProps> = ({
  attr = 'input',
  remove = () => {},
}) => (
  <Form.Field>
    <Form.Select options={options} placeholder="フォーム種類" />
    {renderElements(attr)}
    <Form.Button color="red" onClick={remove}>
      削除
    </Form.Button>
  </Form.Field>
);

export default MakeForm;
