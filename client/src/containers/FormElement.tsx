import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { remove } from '../actions/formelement';
import FormElement, { FormElementProps } from '../components/FormElement';
import { FormElementState } from '../reducers/formelement';

interface StateProps {
  attr: string;
}

interface DispatchProps {
  remove: () => void;
}

const mapStateToProps = (state: FormElementState): StateProps => ({
  attr: state.attr,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  remove: () => dispatch(remove()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormElement);
