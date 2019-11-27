import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'semantic-ui-react';
import MakeFormModule from '../modules/MakeForm';
import { FormElementState } from '../modules/FormElement';
import { RootState } from '../store';

const MakeForm: FC = () => {
  const dispatch = useDispatch();
  const elems = useSelector(
    (state: RootState): FormElementState[] => state.MakeForm.list,
  );

  const add = () => dispatch(MakeFormModule.actions.add());
  const remove = (index: number) =>
    dispatch(MakeFormModule.actions.remove(index));

  const options = [
    { key: 0, text: '記述式', value: 'input' },
    { key: 1, text: '段落', value: 'textarea' },
    { key: 2, text: 'ラジオボタン', value: 'radiobutton' },
    { key: 3, text: 'チェックボックス', value: 'checkbox' },
    { key: 4, text: 'プルダウン', value: 'pulldown' },
  ];

  const renderElement = (elem: FormElementState) => {
    switch (elem.attr) {
      case 'input':
        return (
          <Form.Field>
            <input defaultValue="無題の質問" value={elem.title} />
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

  const formElements = () => {
    const result = [];
    elems.forEach((elem, index) => {
      result.push(
        <Form.Field>
          <Form.Select options={options} placeholder="記述式" />
          {renderElement(elem)}
          <Form.Button color="red" onClick={() => remove(index)}>
            削除
          </Form.Button>
        </Form.Field>,
      );
    });
  };

  return (
    <Form>
      {formElements()}
      <Form.Button onClick={add}>追加</Form.Button>
    </Form>
  );
};

export default MakeForm;
