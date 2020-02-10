import {MediaUpload, MediaUploadCheck} from "@wordpress/block-editor";
import {Component, Fragment} from '@wordpress/element';
import {Button, PanelBody, TextControl} from "@wordpress/components";
import PropTypes from "prop-types"
import defaultImageSrc from "./default-image-src";

const ALLOWED_MEDIA_TYPES = ['image'];

class FormImageHover extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ...props.attributes
        };

        this.handleFieldChange = this.handleFieldChange.bind(this)
    }

    handleFieldChange(value, field) {
        const tmpState = {...this.state};
        tmpState[field] = value;
        this.setState(tmpState);
        this.props.handleSave(tmpState)
    };

    render() {
        const {defaultImage, hoverImage} = this.state
        return (
            <Fragment>
                <MediaUploadCheck fallback="You don't have permissions to upload images.">
                    <div className="header-image-hover">
                        <h4>Image Swap on Hover</h4>
                    </div>
                    <div className="image-hover-row">
                        <MediaUpload
                            title={'Default Image'}
                            onSelect={media => this.handleFieldChange({url: media.url}, "defaultImage")}
                            allowedTypes={ALLOWED_MEDIA_TYPES}
                            value={defaultImage}
                            render={({open}) => (
                                <Button className="editor-post-image-toggle"
                                        onClick={open}>
                                    {
                                        defaultImage &&
                                        <img src={defaultImage.url}/>
                                    }
                                    {
                                        !defaultImage &&
                                        'Default Image'
                                    }
                                </Button>
                            )}
                        />

                        <MediaUpload
                            title={'Default Image'}
                            onSelect={media => this.handleFieldChange({url: media.url}, "hoverImage")}
                            allowedTypes={ALLOWED_MEDIA_TYPES}
                            value={hoverImage}
                            render={({open}) => (
                                <Button className="editor-post-image-toggle"
                                        onClick={open}>
                                    {
                                        hoverImage &&
                                        <img src={hoverImage.url}/>
                                    }
                                    {
                                        !hoverImage &&
                                        'Hover Image'
                                    }
                                </Button>
                            )}
                        />
                    </div>
                </MediaUploadCheck>
            </Fragment>
        )
    }
}

FormImageHover.propTypes = {
    attributes: PropTypes.object.isRequired,
    handleSave: PropTypes.func.isRequired
};

export default FormImageHover;