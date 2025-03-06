import { useBlockProps } from '@wordpress/block-editor';
import Experience from './component/experience';

export default function save( { attributes } ) {
	return (
		<div { ...useBlockProps.save() }>
			<Experience experience={ attributes } />
		</div>
	);
}
