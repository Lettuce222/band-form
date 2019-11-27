import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'semantic-ui-react';
import MakeFormModule from '../modules/MakeForm';
import { FormElementState } from '../modules/FormElement';
import { RootState } from '../store';

const MakeForm: FC = props => {
  const dispatch = useDispatch();
  const elems = useSelector(
    (state: RootState): FormElementState[] => state.MakeForm.elements,
  );

  const add = () => dispatch(MakeFormModule.actions.add());
  const remove = (index: number) =>
    dispatch(MakeFormModule.actions.remove(index));
  const changeAttr = (index: number, attr: string) =>
    dispatch(MakeFormModule.actions.changeAttr({ index, str: attr }));
  const changeTitle = (index: number, title: string) =>
    dispatch(MakeFormModule.actions.changeTitle({ index, str: title }));
  const changeText = (index: number, text: string) =>
    dispatch(MakeFormModule.actions.changeText({ index, str: text }));

  const options = [
    { key: 0, text: '記述式', value: 'input' },
    { key: 1, text: '段落', value: 'textarea' },
    { key: 2, text: 'ラジオボタン', value: 'radiobutton' },
    { key: 3, text: 'チェックボックス', value: 'checkbox' },
    { key: 4, text: 'プルダウン', value: 'pulldown' },
  ];

  const renderElement = (elem: FormElementState, index: number) => {
    switch (elem.attr) {
      case 'input':
        return <input value="記述式テキスト（短文回答）" disabled />;
      case 'textarea':
        return <textarea value="記述式テキスト（長文回答）" disabled />;
      case 'radiobutton':
        return <textarea value="記述式テキスト（長文回答）" disabled />;
      case 'checkbox':
        return <textarea value="記述式テキスト（長文回答）" disabled />;
      case 'pulldown':
        return <textarea value="記述式テキスト（長文回答）" disabled />;
      default:
        return <div />;
    }
  };

  const renderFormElements = () =>
    elems.map((elem, index) => (
      <Form.Field>
        <Form.Select
          options={options}
          value={elem.attr}
          onChange={(e, data) =>
            changeAttr(
              index,
              typeof data.value === 'string' ? data.value : 'input',
            )
          }
        />
        <input
          placeholder="タイトル"
          value={elem.title}
          onChange={e => changeTitle(index, e.target.value)}
        />
        {renderElement(elem, index)}
        <Form.Button color="red" onClick={() => remove(index)}>
          削除
        </Form.Button>
      </Form.Field>
    ));

  return (
    <Form>
      {renderFormElements()}
      <Form.Button onClick={add}>追加</Form.Button>
    </Form>
  );
};

export default MakeForm;
