<?php
/**
 * Plugin Name:       Experience Block
 * Description:       Showcase professional experience with a custom WordPress block featuring job titles, company names, dates, descriptions, and media uploads, inspired by LinkedIn's experience section.
 * Version:           1.0.0
 * Requires at least: 6.6
 * Requires PHP:      7.4
 * Author:            Bunty
 * Author URI:        https://biliplugins.com
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
 * Registers the blocks using the metadata loaded from their `block.json`
 * files. Behind the scenes, it registers also all assets so they can be
 * enqueued through the block editor in the corresponding context, and
 * sets up translations for each block's editor script.
 *
 * @since 1.0.0
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 * @see https://developer.wordpress.org/reference/functions/wp_set_script_translations/
 */
function buntywp_experience_block_block_init() {

	register_block_type( __DIR__ . '/build/experience-box' );
	register_block_type( __DIR__ . '/build/experience-item' );

	wp_set_script_translations( 'buntywp-experience-box-editor-script', 'experience-block' );
	wp_set_script_translations( 'buntywp-experience-item-editor-script', 'experience-block' );
}

add_action( 'init', 'buntywp_experience_block_block_init' );
