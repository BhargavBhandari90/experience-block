<?php
/**
 * Plugin Name:       Experience Block
 * Description:       Showcase professional experience with a custom WordPress block featuring job titles, company names, dates, descriptions, and media uploads, inspired by LinkedIn's experience section.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       experience-block
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function buntywp_experience_block_block_init() {

	register_block_type( __DIR__ . '/build/experience-box', array( 'editor_script' => 'xperience-block-script' ) );
	register_block_type( __DIR__ . '/build/experience-item', array( 'editor_script' => 'xperience-block-script' ) );

	wp_set_script_translations( 'experience-block-script', 'experience-block' );
}

add_action( 'init', 'buntywp_experience_block_block_init' );
