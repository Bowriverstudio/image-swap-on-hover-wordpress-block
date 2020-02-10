import {Component, Fragment} from '@wordpress/element';
import PropTypes from 'prop-types';


// Local Imports

import defaultImageSrc from './default-image-src'

/**
 * FrontEnd
 */
class SaveComponent extends Component {
    render() {
        const {attributes, attributes: {urlImage}, className} = this.props;
        const defaultImage = attributes.defaultImage.url || defaultImageSrc
        const hoverImage = attributes.hoverImage.url || defaultImageSrc


        return (
            <div className={`  ${className ? className : ''}`} style={{width: '100%'}}>
                <a className="foo" href={urlImage ? urlImage : '#'}>
                    <img src={defaultImage}/>
                    <img src={hoverImage}/>
                </a>
            </div>
        );
    }
}

SaveComponent.propTypes = {
    attributes: PropTypes.object.isRequired
}

export default SaveComponent