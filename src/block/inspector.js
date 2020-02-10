import {Component, Fragment} from '@wordpress/element';
import {PanelBody, CheckboxControl, TextControl} from '@wordpress/components';

const {InspectorControls} = wp.blockEditor;
//const {__} = wp.i18n;


/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this)
    }

    handleSave(attributes) {
        this.props.setAttributes(attributes);
    };

    render() {
        const {attributes: {urlImage}} = this.props;
        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody
                        title={"Layout options"}
                        initialOpen={true}>
                        <TextControl
                            style={{padding: '0 7px'}}
                            label="Link"
                            value={urlImage}
                            onChange={(value) => {
                                this.handleSave({urlImage: value})
                            }}
                        />
                    </PanelBody>
                </InspectorControls>
            </Fragment>
        );
    }
}
