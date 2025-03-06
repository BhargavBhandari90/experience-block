import { RichText } from '@wordpress/block-editor';
export default function Experience( props ) {
	const data = props.experience;

	if ( typeof data === 'undefined' ) {
		return null;
	}

	const formatDate = ( dateString ) => {
		if ( ! dateString ) { return '' };
		const date = new Date( dateString + '-01' ); // Add day for parsing
		return date.toLocaleDateString( 'en-US', {
			year: 'numeric',
			month: 'short',
		} );
	};

	return (
		<div className="experience-item">
			<div className="experience-header">
				<div className="experience-info">
					<h4 className="experience-title">{ data.title }</h4>
					<p className="experience-company">
						{ data.company } · { data.employmentType }
					</p>
					<p className="experience-date">
						{ formatDate( data.startDate ) } -{ ' ' }
						{ data.currentlyWorking
							? 'Present'
							: formatDate( data.endDate ) }
					</p>
					<p className="experience-location">
						{ data.location } · { data.locationType }
					</p>
				</div>
			</div>
			<div className="experience-description">
				<RichText.Content value={ data.description } />
			</div>
		</div>
	);
}
