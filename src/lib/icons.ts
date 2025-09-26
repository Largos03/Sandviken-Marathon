// FontAwesome icon exports and groupings for the Sandviken Half-marathon website
// Purpose: Centralize icon management to ensure consistency and reduce bundle size
// Why grouped: Allows selective importing and easier maintenance of icon sets
// Intent: Provide semantic icon choices that enhance user understanding of interface elements

// Import solid icons for general UI elements - chosen for their clarity and recognition
import {
	faHome,
	faInfoCircle,
	faMapMarkerAlt,
	faClipboard,
	faMedal,
	faPhone,
	faRunning,
	faCalendarAlt,
	faMapMarkedAlt,
	faUsers,
	faChevronRight,
	faArrowRight,
	faStar,
	faClock
} from '@fortawesome/free-solid-svg-icons';

// Import brand icons for social media links - official brand representations
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

// Icons for main navigation menu - ensures consistent iconography across pages
// Why specific icons: Home for landing, Info for about, Map for course, etc.
export const navigationIcons = {
	home: faHome,
	about: faInfoCircle,
	course: faMapMarkerAlt,
	register: faClipboard,
	results: faMedal,
	contact: faPhone
};

// Social media platform icons - used in footer and contact sections
// Intent: Enable easy social media integration and brand recognition
export const socialIcons = {
	facebook: faFacebookF,
	twitter: faTwitter,
	instagram: faInstagram
};

// Frequently used icons for various UI elements like buttons and cards
// Why included: These icons appear in multiple components, so grouping reduces duplication
export const commonIcons = {
	running: faRunning, // Represents the sport/activity
	calendar: faCalendarAlt, // For dates and schedules
	mapMarked: faMapMarkedAlt, // For location/course details
	users: faUsers, // For participant/audience references
	chevronRight: faChevronRight, // For navigation arrows
	arrowRight: faArrowRight, // Alternative arrow style
	star: faStar, // For ratings or highlights
	clock: faClock, // For time-related information
	mapMarker: faMapMarkerAlt, // Alternative map icon
	medal: faMedal // For achievements/results
};

// Specific icons for tab navigation in detailed sections
// Intent: Provide visual cues for different content sections
export const tabIcons = {
	overview: faUsers, // General information
	course: faMapMarkedAlt, // Course details
	details: faCalendarAlt, // Event specifics
	register: faMedal // Registration/achievement
};
