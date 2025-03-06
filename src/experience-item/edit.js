import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import {
	CheckboxControl,
	SelectControl,
	TextControl,
	__experimentalSpacer as Spacer,
	__experimentalDivider as Divider,
	Button,
	Icon,
} from '@wordpress/components';
import { edit, arrowLeft } from '@wordpress/icons';
import './editor.scss';
import Experience from './component/experience';

export default function Edit( { attributes, setAttributes, isSelected } ) {
	const {
		title,
		company,
		employmentType,
		startDate,
		endDate,
		location,
		locationType,
		currentlyWorking,
		description,
		isEditing,
	} = attributes;

	const marginBottom = 0;

	return (
		<div { ...useBlockProps() }>
			{ isSelected && isEditing ? (
				<>
					<Button
						icon={ <Icon icon={ arrowLeft } /> }
						iconPosition="right"
						className="exp-edit-button"
						onClick={ () => setAttributes( { isEditing: false } ) }
					></Button>
					<RichText
						tagName="h4"
						placeholder={ __( 'Job Title', 'experience-block' ) }
						value={ title }
						onChange={ ( val ) => setAttributes( { title: val } ) }
					/>
					<Spacer marginBottom={ marginBottom } />
					<SelectControl
						__next40pxDefaultSize
						__nextHasNoMarginBottom
						label={ __( 'Employment type', 'experience-block' ) }
						options={ [
							{
								disabled: true,
								label: __(
									'Select an Option',
									'experience-block'
								),
								value: { employmentType },
							},
							{
								label: __( 'Full-time', 'experience-block' ),
								value: 'Full-time',
							},
							{
								label: __( 'Part-time', 'experience-block' ),
								value: 'Part-time',
							},
							{
								label: __(
									'Self-employed',
									'experience-block'
								),
								value: 'Self-employed',
							},
							{
								label: __( 'Freelance', 'experience-block' ),
								value: 'Freelance',
							},
							{
								label: __( 'Internship', 'experience-block' ),
								value: 'Internship',
							},
							{
								label: __( 'Trainee', 'experience-block' ),
								value: 'Trainee',
							},
						] }
						onChange={ ( val ) =>
							setAttributes( { employmentType: val } )
						}
					/>
					<Spacer marginBottom={ marginBottom } />
					<TextControl
						label={ __( 'Company Name', 'experience-block' ) }
						value={ company }
						onChange={ ( val ) =>
							setAttributes( { company: val } )
						}
					/>
					<Spacer marginBottom={ marginBottom } />
					<CheckboxControl
						label={ __( 'Currently Working', 'experience-block' ) }
						value="present"
						checked={ currentlyWorking }
						onChange={ ( val ) =>
							setAttributes( { currentlyWorking: val } )
						}
					/>
					<Spacer marginBottom={ marginBottom } />
					<TextControl
						label={ __( 'Start Date', 'experience-block' ) }
						type="month"
						value={ startDate }
						onChange={ ( val ) =>
							setAttributes( { startDate: val } )
						}
					/>
					<Spacer marginBottom={ marginBottom } />
					{ ! currentlyWorking && (
						<>
							<TextControl
								label={ __( 'End Date', 'experience-block' ) }
								type="month"
								value={ endDate }
								onChange={ ( val ) =>
									setAttributes( { endDate: val } )
								}
							/>
							<Spacer marginBottom={ marginBottom } />
						</>
					) }
					<TextControl
						label={ __( 'Location', 'experience-block' ) }
						value={ location }
						onChange={ ( val ) =>
							setAttributes( { location: val } )
						}
					/>
					<Spacer marginBottom={ marginBottom } />
					<SelectControl
						__next40pxDefaultSize
						__nextHasNoMarginBottom
						label={ __( 'Location type', 'experience-block' ) }
						options={ [
							{
								disabled: true,
								label: __(
									'Select an Option',
									'experience-block'
								),
								value: { locationType },
							},
							{
								label: __( 'On-site', 'experience-block' ),
								value: 'On-site',
							},
							{
								label: __( 'Hybrid', 'experience-block' ),
								value: 'Hybrid',
							},
							{
								label: __( 'Remote', 'experience-block' ),
								value: 'Remote',
							},
						] }
						onChange={ ( val ) =>
							setAttributes( { locationType: val } )
						}
					/>
					<Spacer marginBottom={ marginBottom } />
					<RichText
						tagName="p"
						placeholder={ __( 'Description', 'experience-block' ) }
						value={ description }
						onChange={ ( val ) =>
							setAttributes( { description: val } )
						}
					/>
					<Divider margin="2" />
				</>
			) : (
				<>
					<Button
						icon={ <Icon icon={ edit } /> }
						iconPosition="right"
						className="exp-edit-button"
						onClick={ () => setAttributes( { isEditing: true } ) }
					></Button>
					<Experience experience={ attributes } />
				</>
			) }
		</div>
	);
}
