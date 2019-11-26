import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'semantic-ui-react';
import MakeFormModule from '../modules/MakeForm';
import { FormElementState } from '../modules/FormElement';
import { RootState } from '../store';

import FormElement from './FormElement';

const MakeForm: FC = () => {
  const dispatch = useDispatch();
  const elems = useSelector(
    (state: RootState): FormElementState[] => state.MakeForm.list,
  );

  const add = () => dispatch(MakeFormModule.actions.add());
  const remove = (index: number) =>
    dispatch(MakeFormModule.actions.remove(index));

  return (
    <Form>
      <Form.Field>
        {elems.map((elem: FormElementState, index: number) => (
          <FormElement index={index} remove={() => remove(index)} />
        ))}
      </Form.Field>
      <Form.Button onClick={add}>追加</Form.Button>
    </Form>
  );
};

export default MakeForm;
