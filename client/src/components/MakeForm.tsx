import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Icon, Button, Divider, Label } from 'semantic-ui-react';
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

  const addOptions = (index: number, text: string) =>
    dispatch(MakeFormModule.actions.addOptions({ index, str: text }));

  const deleteOptions = (index: number, optionIndex: number) =>
    dispatch(MakeFormModule.actions.deleteOptions({ index, optionIndex }));

  const changeOptions = (index: number, optionIndex: number, text: string) =>
    dispatch(
      MakeFormModule.actions.changeOptions({ index, optionIndex, str: text }),
    );

  const options = [
    { key: 0, text: '記述式', value: 'input' },
    { key: 1, text: '段落', value: 'textarea' },
    { key: 2, text: 'ラジオボタン', value: 'radiobutton' },
    { key: 3, text: 'チェックボックス', value: 'checkbox' },
    { key: 4, text: 'プルダウン', value: 'pulldown' },
  ];

  const renderElement = (elem: FormElementState, index: number) => {
    const addButton = () => {
      addOptions(index, `無題のボタン`);
    };

    const addPulldown = () => {
      addOptions(index, `無題の選択肢`);
    };

    const deleteButton = (optionIndex: number) => {
      deleteOptions(index, optionIndex);
    };

    const handleChange = (optionIndex: number, text: string) => {
      changeOptions(index, optionIndex, text);
    };

    switch (elem.attr) {
      case 'input':
        return (
          <Form.Field>
            <input value="記述式テキスト（短文回答）" disabled />
          </Form.Field>
        );
      case 'textarea':
        return (
          <Form.Field>
            <textarea value="記述式テキスト（短文回答）" disabled />
          </Form.Field>
        );
      case 'radiobutton':
        if (elem.options.length === 0) addButton();

        return (
          <Form.Field>
            {elem.options.map((option, optionIndex) => (
              <Form.Group>
                <Form.Field
                  control={Form.Radio}
                  label=""
                  value=""
                  checked={false}
                />
                <input
                  value={option}
                  onChange={e => handleChange(optionIndex, e.target.value)}
                />
                <Button
                  icon
                  color="red"
                  onClick={() => deleteButton(optionIndex)}
                  disabled={elem.options.length === 1}
                >
                  <Icon name="trash" />
                </Button>
              </Form.Group>
            ))}
            <Button icon onClick={addButton}>
              <Icon name="plus" />
            </Button>
          </Form.Field>
        );
      case 'checkbox':
        if (elem.options.length === 0) addButton();

        return (
          <Form.Field>
            {elem.options.map((option, optionIndex) => (
              <Form.Group>
                <Form.Field
                  control={Form.Checkbox}
                  label=""
                  value=""
                  checked={false}
                />
                <input
                  value={option}
                  onChange={e => handleChange(optionIndex, e.target.value)}
                />
                <Button
                  icon
                  color="red"
                  onClick={() => deleteButton(optionIndex)}
                  disabled={elem.options.length === 1}
                >
                  <Icon name="trash" />
                </Button>
              </Form.Group>
            ))}
            <Button icon onClick={addButton}>
              <Icon name="plus" />
            </Button>
          </Form.Field>
        );
      case 'pulldown':
        if (elem.options.length === 0) addPulldown();

        return (
          <Form.Field>
            {elem.options.map((option, optionIndex) => (
              <Form.Group>
                {optionIndex}.
                <input
                  value={option}
                  onChange={e => handleChange(optionIndex, e.target.value)}
                />
                <Button
                  icon
                  color="red"
                  onClick={() => deleteButton(optionIndex)}
                  disabled={options.length === 1}
                >
                  <Icon name="trash" />
                </Button>
              </Form.Group>
            ))}
            <Button icon onClick={addPulldown}>
              <Icon name="plus" />
            </Button>
          </Form.Field>
        );
      default:
        return <div />;
    }
  };

  const renderFormElements = () =>
    elems.map((elem, index) => (
      <Form.Field>
        <Divider />
        <Form.Group>
          <input
            placeholder="タイトル"
            value={elem.title}
            onChange={e => changeTitle(index, e.target.value)}
          />
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
        </Form.Group>
        {renderElement(elem, index)}
        <Form.Button color="red" onClick={() => remove(index)}>
          削除
        </Form.Button>
        <Divider />
      </Form.Field>
    ));

  const renderBaseElements = () => (
    <Form.Field>
      <Form.Field>
        <Label>バンド名</Label>
        <input defaultValue="バンド名" disabled />
      </Form.Field>
      <Form.Field>
        <Label>代表者名</Label>
        <Form.Group>
          <input defaultValue="姓" disabled />
          <input defaultValue="名" disabled />
        </Form.Group>
      </Form.Field>
      <Form.Field>
        <Label>メンバー</Label>
        <Form.Group>
          <input defaultValue="姓" disabled />
          <input defaultValue="名" disabled />
        </Form.Group>
        <Button icon disabled>
          <Icon name="plus" />
        </Button>
      </Form.Field>
    </Form.Field>
  );

  return (
    <Form>
      <Form.Field left>
        <Button primary>作成</Button>
      </Form.Field>
      {renderBaseElements()}
      {renderFormElements()}
      <Form.Button onClick={add}>追加</Form.Button>
    </Form>
  );
};

export default MakeForm;
