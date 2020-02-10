/**
 * Internal block libraries
 */
import {Component, Fragment} from '@wordpress/element';

import Form from './image-form.js'
import Preview from './block-save'
import Inspector from './inspector'

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

        return (
            <Fragment>
                <Inspector attributes={attributes} setAttributes={setAttributes}/>
                {
                    isSelected &&
                    <Form attributes={attributes} handleSave={this.handleSave}/>
                }
                {
                    !isSelected &&
                    <Preview attributes={attributes}/>
                }

            </Fragment>
        );
    }
}
