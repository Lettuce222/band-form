import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { add, remove } from '../actions/makeform';
import MakeForm, { MakeFormProps } from '../components/MakeForm';
import { MakeFormState } from '../reducers/makeform';

interface StateProps {
  elements: string[];
}

interface DispatchProps {
  add: () => void;
  remove: (index: number) => void;
}

const mapStateToProps = (state: MakeFormState): StateProps => ({
  elements: state.elements,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  add: () => dispatch(add()),
  remove: index => dispatch(remove(index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MakeForm);
