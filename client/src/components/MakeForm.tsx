import React, { FC } from 'react';
import { Form } from 'semantic-ui-react';

import FormElement from './FormElement';

export interface MakeFormProps {
  elements?: string[];
  add?: () => void;
  remove?: (index: number) => void;
}

const MakeForm: FC<MakeFormProps> = ({
  elements = [],
  add = () => {},
  remove = () => {},
}) => (
  <Form>
    <Form.Field>
      {elements.map((elem: string, index: number) => (
        <FormElement attr={elem} remove={() => remove(index)} />
      ))}
    </Form.Field>
    <Form.Button onClick={add}>追加</Form.Button>
  </Form>
);

export default MakeForm;
