import {Component, Fragment} from '@wordpress/element';
import PropTypes from 'prop-types';


// Local Imports

import defaultImageSrc from './default-image-src'

/**
 * FrontEnd
 */
class SaveComponent extends Component {
    render() {
        const {attributes, className} = this.props;
        const image = attributes.image.url || defaultImageSrc
        const imageHover = attributes.imageHover.url || defaultImageSrc

        return (
            <div className={`${className}`}>
                <img src={image}/>
                <img src={imageHover}/>
            </div>
        );
    }
}

SaveComponent.propTypes = {
    attributes: PropTypes.object.isRequired
}

export default SaveComponent