/**
 * Internal block libraries
 */
const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;

import Edit from './block-edit';
import Save from './block-save';

/**
 * Register block
 */
export default registerBlockType(
    'image/hover',
    {
        title: __('Image Hover', 'image-swap-on-hover'),
        description: __('Image Swap on Hover .', 'image-hover'),
        category: 'common',
        icon: 'format-gallery',
        keywords: [
            __('image', 'image-hover'),
        ],
        attributes: {
            defaultImage: {
                url: '',
                default: '',
            },
            hoverImage: {
                url: '',
                default: '',
            },
            urlImage: {
                url: '',
                default: '',
            },
        },
        edit: props => {
            const {setAttributes} = props;
            return (
                <Edit {...{setAttributes, ...props}} />
            );
        },
        save: props => {
            return (
                <Save attributes={props.attributes}/>
            );
        },
    },
);
