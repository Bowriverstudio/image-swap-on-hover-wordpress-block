/**
 * Internal block libraries
 */
import {Component, Fragment} from '@wordpress/element';


/**
 *
 */

export default class Edit extends Component {

    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this)
    }

    handleSave(attributes) {
        this.props.setAttributes(attributes);
    };


    render() {
        const {attributes, isSelected, setAttributes} = this.props;

        return (<Fragment>
            </Fragment>
        );
    }
}
