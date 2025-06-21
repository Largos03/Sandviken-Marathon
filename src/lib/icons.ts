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

import {
	faFacebookF,
	faTwitter, 
	faInstagram
} from '@fortawesome/free-brands-svg-icons';

// Common icon groups for reuse
export const navigationIcons = {
	home: faHome,
	about: faInfoCircle,
	course: faMapMarkerAlt,
	register: faClipboard,
	results: faMedal,
	contact: faPhone
};

export const socialIcons = {
	facebook: faFacebookF,
	twitter: faTwitter,
	instagram: faInstagram
};

export const commonIcons = {
	running: faRunning,
	calendar: faCalendarAlt,
	mapMarked: faMapMarkedAlt,
	users: faUsers,
	chevronRight: faChevronRight,
	arrowRight: faArrowRight,
	star: faStar,
	clock: faClock,
	mapMarker: faMapMarkerAlt,
	medal: faMedal
};

// Commonly used icon combinations
export const tabIcons = {
	overview: faUsers,
	course: faMapMarkedAlt,
	details: faCalendarAlt,
	register: faMedal
};
