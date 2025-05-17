import { writable, derived } from 'svelte/store';

// Define types
export type Language = 'en' | 'sv';
export type TranslationKey = string;
export type TranslationObject = Record<TranslationKey, string>;

// Default language
export const language = writable<Language>('en');

// Translations for the site
export const translations: Record<Language, TranslationObject> = {
  en: {
    // Navigation section tabs
    overviewTab: 'Overview',
    courseTab: 'The Course',
    detailsTab: 'Event Details',
    registerTab: 'Registration',
    
    // Race Day Schedule
    raceDaySchedule: 'Race Day Schedule',
    raceDayDate: 'April 1, 2026',
    raceVillageOpens: '6:00 AM',
    raceVillageOpensText: 'Race village opens with registration, packet pickup, and vendor booths',
    warmupSession: '7:30 AM',
    warmupSessionText: 'Group warm-up session with professional trainer',
    marathonStart: '8:00 AM',
    marathonStartText: 'Marathon start from Sandviken Town Square',
    halfMarathonStart: '8:15 AM',
    halfMarathonStartText: 'Half marathon start',
    tenKStart: '8:30 AM',
    tenKStartText: '10K race start',
    awardsCeremony: '2:00 PM',
    awardsCeremonyText: 'Awards ceremony and closing celebration',
    eventDetailsLink: 'Event Details',
    
    // Course Tab
    scenicRouteTitle: 'SCENIC ROUTE • 42.195 KM',
    breathtakingJourney: 'A <span class="text-red-600">Breathtaking</span> Journey',
    courseDescription2: 'Experience Sandviken\'s most beautiful landscapes in a single day as you challenge yourself on our meticulously designed route featuring lakeside views, forest trails, and historic landmarks.',
    iaafCertified: 'Our IAAF-certified marathon route takes you through the most scenic parts of Sandviken, offering a perfect balance of challenge and beauty.',
    routeHighlights: 'Route Highlights',
    lakesideStart: 'Lakeside Start (0-10km)',
    lakesideStartText: 'Begin your journey with breathtaking views of Lake Storsjön\'s crystal waters.',
    forestTrail: 'Forest Trail (10-25km)',
    forestTrailText: 'Run through shaded pine forests with soft terrain and natural beauty.',
    historicDistrict: 'Historic District (25-35km)',
    historicDistrictText: 'Pass by centuries-old landmarks and soak in Sandviken\'s rich heritage.',
    victoryBoulevard: 'Victory Boulevard (35-42km)',
    victoryBoulevardText: 'The final stretch through downtown with cheering crowds leading to the finish.',
    exploreDetailedMap: 'Explore Detailed Course Map',
    iaafCertifiedLabel: 'IAAF Certified • Minor Elevation',
    
    // Course Features
    timeLimit: 'Time Limit',
    timeLimitText: '6 hours to complete the full marathon course',
    aidStationsFeature: 'Aid Stations',
    aidStationsFeatureText: '8 fully-equipped stations with hydration, nutrition, and medical support',
    paceGroups: 'Pace Groups',
    paceGroupsText: 'Professional pacers for finish times from 3:00 to 5:30',
    finisherMedal: 'Finisher Medal',
    finisherMedalText: 'Exclusive inaugural design crafted by renowned Swedish artist',
    
    // Event Details Tab
    eventDetailsSectionTitle: 'Event Details',
    eventDetailsSubtitle: 'Everything you need to know about race day',
    eventSchedule: 'Event Schedule',
    preRaceDay: 'March 31, 2026',
    preRaceDayText: 'Pre-race expo and packet pickup (10:00 AM - 8:00 PM)',
    raceDayFull: 'April 1, 2026',
    raceDayFullText: 'Race day with multiple start times (see race day schedule)',
    locationDetails: 'Location Details',
    startFinishArea: 'Start/Finish Area',
    startFinishAreaText: 'Sandviken Town Square, Main Street',
    raceExpo: 'Race Expo',
    raceExpoText: 'Sandviken Convention Center, 123 Center Street',
    raceCategoriesDetails: 'Race Categories',
    marathonLabel: 'Marathon',
    halfMarathonLabel: 'Half Marathon',
    tenKRunLabel: '10K Run',
    importantInfo: 'Important Information',
    packetPickupInfo: 'All participants must pick up their race packets before race day',
    idRequired: 'Bring valid ID for packet pickup',
    noRaceDayRegistration: 'No race day registration will be available',
    timingChips: 'Timing chips must be returned after the race',
    
    // Registration Promo
    secureYourSpot: 'Secure Your Spot Today',
    earlyBirdPromo: 'Early bird registration opens soon with exclusive benefits for founding participants. Don\'t miss your chance to be part of history.',
    registrationOpens: 'Registration Opens: January 2025',
    limitedParticipants: 'Limited to 5,000 Participants',
    
    // Navbar
    home: 'Home',
    about: 'About',
    course: 'Course',
    register: 'Register',
    results: 'Results',
    contact: 'Contact',
    navigation: 'Navigation',
    
    // Hero section
    officialEvent: 'Official Event',
    marathon: 'Sandviken Marathon',
    eventDate: 'Apr 01, 2026',
    heroSubtitle: 'Experience the beauty of Sandviken in this unforgettable running event',
    registerNow: 'Register Now',
    viewCourse: 'View Course',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    
    // Event details section
    premierEvent: 'The Premier Running Event in Sandviken',
    joinThousands: 'Join runners from around the world in this marathon through Sandviken\'s most scenic routes and nature trails',
    raceCategories: 'Race Categories',
    raceDescription: 'Full Marathon (42.195km) through the beautiful landscapes of Sandviken',
    viewCategories: 'View Categories',
    scenicRoute: 'Scenic Route',
    routeDescription: 'Run through picturesque landscapes, along waterfront areas, and iconic landmarks in Sandviken',
    exploreRoute: 'Explore Route',
    prizesAwards: 'Prizes & Awards',
    prizesDescription: 'Exclusive medals for all finishers and special prizes for top performers',
    learnMore: 'Learn More',
    
    // Course section
    theCourse: 'The Course',
    courseIntro: 'Experience a scenic route that showcases the beauty of Sandviken, passing through walking paths, waterfront areas, and lesser-traveled roads with water stations every 5km along the route.',
    certifiedRoute: 'Carefully designed marathon route',
    hydrationStations: 'Water stations every 5km along the route',
    flatTerrain: 'Mostly flat terrain with walking paths and minor roads',
    medicalSupport: 'Medical support throughout the course',
    viewDetailedMap: 'View Detailed Map',
    
    // Inaugural event section
    inauguralEvent: 'Inaugural Event',
    bePartOf: 'Be part of history in the first-ever Sandviken Marathon',
    historicOpportunity: 'Be Part of Something Historic',
    joinUs: 'Join us for the inaugural Sandviken Marathon and become one of our founding participants. This is your chance to make history in Sandviken\'s first major marathon event.',
    premiumExperience: 'Premium Experience',
    experienceDescription: 'Professional timing, live tracking and full route support',
    foundingStatus: 'Founding Participant Status',
    foundingDescription: 'Exclusive first-year medal and commemorative certificate',
    secureSpot: 'More Information',
    
    // CTA section
    limitedSpots: 'Early Bird Registration',
    secureSpotToday: 'Join Us in 2026',
    earlyBird: 'Registration is open with early bird prices until October 31, 2025',
    
    // Footer
    privacyPolicy: 'Privacy Policy',
    terms: 'Terms and Conditions',
    copyright: '© 2025 Sandviken Marathon. All rights reserved.',
    
    // Language switcher
    switchToSwedish: 'Svenska',
    switchToEnglish: 'English',
    
    // About page
    aboutTitle: 'About Sandviken Marathon',
    aboutIntro: 'Welcome to the Sandviken Marathon, a premier running event in the heart of Sweden. Our marathon offers a beautiful course through scenic landscapes and historic areas.',
    aboutMission: 'Our Mission',
    aboutHistoryTitle: 'Our History',
    aboutHistoryDesc: 'The Sandviken Marathon was established in 2023 with a vision to bring the community together through the power of running.',
    aboutValuesTitle: 'Our Values',
    aboutValuesDesc: 'We believe in promoting health, fitness, and community spirit through the joy of running.',
    aboutCommunityTitle: 'Our Community',
    aboutCommunityDesc: 'The Sandviken Marathon brings together runners, volunteers, and spectators from all walks of life.',
    aboutFutureTitle: 'Our Future',
    aboutFutureDesc: 'We are committed to growing the Sandviken Marathon while maintaining its community spirit and commitment to excellence.',
    eventDetailsTitle: 'Event Details',
    eventDetailsDesc: 'The marathon starts and finishes at Stadsparken (City Park) in central Sandviken, offering a beautiful route through walking paths and lesser-traveled roads with water stations every 5km.',
    
    // Contact page
    contactTitle: 'Contact Us',
    contactSubtitle: 'We\'re here to help with any questions about the Sandviken Marathon',
    getInTouch: 'Get in Touch',
    contactDesc: 'Have questions about the Sandviken Marathon? We\'re here to help!',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    officeHours: 'Office Hours',
    monToFri: 'Monday to Friday: 9:00 - 17:00',
    weekends: 'Saturday and Sunday: Closed',
    followUs: 'Follow Us',
    sendMessage: 'Send Us a Message',
    messageDesc: 'Fill out the form below and we\'ll get back to you as soon as possible.',
    formName: 'Name',
    formEmail: 'Email',
    formSubject: 'Subject',
    formMessage: 'Message',
    sending: 'Sending...',
    successMessage: 'Thank you for your message! We\'ll get back to you soon.',
    
    // Course page
    coursePageTitle: 'Course Map & Information',
    coursePageIntro: 'Explore the scenic route through Sandviken and its beautiful surroundings. Our marathon course takes you through the heart of the city and along picturesque landscapes with water stations every 5km.',
    courseDetailsTitle: 'Course Details',
    distanceTitle: 'Distance',
    distanceDesc: 'Full Marathon: 42.195 km (26.2 miles)',
    elevationTitle: 'Elevation',
    elevationDesc: 'The course features a mostly flat terrain with some gentle climbs.',
    surfaceTitle: 'Surface',
    surfaceDesc: 'Mixed surfaces including walking paths (60%), minor roads (30%), and urban areas (10%).',
    cutoffTitle: 'Cut-off Time',
    cutoffDesc: '6 hours from the start time.',
    
    // Results page
    resultsTitle: 'Race Results',
    resultsYear: '2026',
    comingSoon: 'Results will be posted here after the inaugural event.',
    
    // Register page
    registerTitle: 'Registration',
    registerComingSoon: 'Coming Soon',
    registrationInfo: 'Registration will be available through our official registration platform. Stay tuned!',
    registrationType: 'Registration Type',
    fullMarathon: 'Full Marathon (42.2km)',
    halfMarathon: 'Half Marathon (21.1km)',
    tenK: '10K Race',
    pricing: 'Pricing',
    earlyBirdRates: 'Early Bird Rates (Until October 31, 2025)',
    fullPrice: 'Full Marathon: 750 SEK',
    halfPrice: 'Half Marathon: 550 SEK',
    tenKPrice: '10K Race: 350 SEK',
    registerButton: 'Register Now',
    
    // Results page
    selectYear: 'Select Year',
    position: 'Position',
    name: 'Name',
    country: 'Country',
    category: 'Category',
    time: 'Time',
    sweden: 'Sweden',
    menCategory: 'Men 30-39',
    womenCategory: 'Women 20-29',
    menCategoryYoung: 'Men 20-29',
    previousYears: 'Previous Years',
    resultsDownload: 'Results from previous years are available for download in PDF format.',
    resultsPdf: 'Results (PDF)',
    
    // Course page additional keys
    courseDescription: 'The course starts and finishes in central Sandviken at Stadsparken. The route runs towards COOP and ÅB, continues past BJ Arena, down to Säljan and along Trebo golf course. It then follows the walking path beside Trebo illuminated track before reaching the beautiful area of Bångs. From there, the route passes through Bovik near Storsjon lake, then through a cottage area along the water before reaching Forsbacka. After the "Northern entrance" roundabout, runners will pass Sandvik/Cormant and run through Klangberget residential area. The final stretch follows the scenic Gästrikeleden/Health path all the way back to Stadsparken.',
    courseHighlights: 'Course Highlights',
    startFinish: 'Start and finish at Stadsparken',
    scenicWaterfront: 'Run along lakes and waterfront areas',
    historicNeighborhoods: 'Pass through residential neighborhoods and cottage areas',
    forestViews: 'Enjoy forest views along Trebo illuminated track',
    aidStations: 'Aid Stations',
    aidStationDetails: 'Water stations are positioned every 5km along the course.',
    courseMap: 'Course Map',
    courseMapPlaceholder: 'Course map placeholder',
    elevationProfile: 'Elevation Profile',
    elevationProfilePlaceholder: 'Elevation profile placeholder',
    raceDayInfo: 'Race Day Information',
    raceDayDetails: 'Stadsparken is the center of race activities, with changing rooms, toilets, and bib pickup at Bessemer Hall. Children\'s activities will be available in the playground area, and the finish area will have food trucks, sponsor booths, and massage services.',
    
    // Additional course page keys
    waterStations: 'Water Stations',
    waterStationDetails: 'Water stations are available every 5km along the course',
    medicalStations: 'Medical Stations',
    medicalStationDetails: 'Medical support and first aid available at designated stations throughout the course',
    courseMapAlt: 'Sandviken Marathon Course Map',
    startAnimation: 'Start Animation',
    pauseAnimation: 'Pause Animation',
    startTime: 'Start Time',
    startTimeDetails: '8:00 AM - Full Marathon',
    startLocation: 'Start Location',
    startLocationDetails: 'Stadsparken, Sandviken',
    
    // Privacy page
    privacyLastUpdated: 'Last updated:',
    privacyDate: 'May 1, 2025',
    privacyIntroTitle: 'Introduction',
    privacyIntroText: 'Sandviken Marathon ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.',
    privacyHighlight: 'This document explains how we collect, use, and protect your personal information. By using our website, you agree to the terms outlined in this policy.',
    
    // Information We Collect
    infoCollectTitle: 'Information We Collect',
    infoCollectText: 'We may collect the following types of information:',
    personalInfoDetails: 'Personal Information',
    personalInfoText: 'Name, email address, phone number when you register for our events',
    contactInfoTitle: 'Contact Information',
    contactInfoText: 'Details provided when you fill out our contact form',
    technicalDataTitle: 'Technical Data',
    technicalDataText: 'IP address, browser type, operating system information',
    usageDataTitle: 'Usage Data',
    usageDataText: 'Information about how you interact with our website',
    
    // How We Use Your Information
    infoUseTitle: 'How We Use Your Information',
    infoUseText: 'We use your data for the following purposes:',
    eventRegTitle: 'Event Registration',
    eventRegText: 'To register you as a participant in our marathons and events',
    relationshipTitle: 'Relationship Management',
    relationshipText: 'To maintain our relationship with you and provide support',
    communicationTitle: 'Communication',
    communicationText: 'To send you information about our events and services',
    websiteImprovementTitle: 'Website Improvement',
    websiteImprovementText: 'To improve our website and services based on user experience',
    securityTitle: 'Security',
    securityText: 'To ensure the security and proper functioning of our website',
    
    // Cookies section
    cookiesSectionTitle: 'Cookies',
    cookiesSectionText: 'Our website uses cookies to distinguish you from other users. This helps us provide you with a good experience and allows us to improve our site.',
    essentialCookies: 'Essential',
    essentialCookiesText: 'Required for basic functionality',
    functionalCookies: 'Functional',
    functionalText: 'Remember your preferences',
    analyticsTitle: 'Analytics',
    analyticsText: 'Help us understand how visitors use our site',
    marketingTitle: 'Marketing',
    marketingText: 'Track visitors across websites',
    
    // Terms page
    lastUpdated: 'Last updated:',
    termsDate: 'June 15, 2025',
    termsIntro: 'Please read our terms and conditions before using our website or registering for events',
    
    // Terms Overview section
    agreementToTerms: 'Agreement to Terms',
    termsAgreementText: 'These Terms and Conditions constitute a legally binding agreement made between you and Sandviken Marathon concerning your use of our website and participation in our events. By using our website or registering for our events, you agree to be bound by these Terms.',
    termsReviewText: 'Please review these terms carefully. By accessing this website or registering for our events, you acknowledge that you have read, understood, and agree to be bound by all of these Terms and Conditions.',
    
    // Event Registration section
    eventRegistration: 'Event Registration',
    registrationText: 'When you register for an event organized by Sandviken Marathon, you agree to the following terms:',
    physicalFitness: 'Physical Fitness',
    physicalFitnessText: 'You confirm that you are physically fit and have no medical conditions that would make participation in the event dangerous to your health.',
    riskAcceptance: 'Risk Acceptance',
    riskAcceptanceText: 'You understand and acknowledge that participation in running events involves inherent risks and dangers of accidents, personal injury, and property loss or damage.',
    nonRefundableFees: 'Non-Refundable Fees',
    nonRefundableFeesText: 'Registration fees are non-refundable, except in specific circumstances as outlined in our Refund Policy.',
    scheduleChanges: 'Schedule Changes',
    scheduleChangesText: 'Organizers reserve the right to modify, cancel or postpone the event due to unforeseen circumstances. In such cases, our Cancellation Policy will apply.',
    ruleCompliance: 'Rule Compliance',
    ruleComplianceText: 'You agree to comply with all event rules, regulations, and instructions provided by event organizers and staff.',
    
    // Intellectual Property section
    intellectualProperty: 'Immateriella rättigheter',
    ipIntro: 'Allt innehåll på vår webbplats skyddas av upphovsrätt och andra immaterialrättsliga lagar',
    ipText: 'Sandviken Marathons webbplats och dess originalinnehåll, funktioner och funktionalitet ägs av Sandviken Marathon och skyddas av internationell upphovsrätt, varumärke, patent, affärshemlighet och andra immaterialrättsliga lagar.',
    copyrightTitle: 'Upphovsrätt',
    copyrightTextContent: 'Allt innehåll, inklusive men inte begränsat till text, bilder, grafik, logotyper och videoklipp, är Sandviken Marathons egendom och skyddas av upphovsrättslagar.',
    limitedLicenseTitle: 'Begränsad licens',
    limitedLicenseTextContent: 'Vi beviljar dig en begränsad, icke-exklusiv, icke-överförbar och återkallelig licens att komma åt och använda vår webbplats för personliga, icke-kommersiella ändamål.',
    restrictions: 'Begränsningar',
    restrictionsText: 'Du får inte reproducera, distribuera, modifiera, skapa härledda verk av, offentligt visa, offentligt utföra, publicera på nytt, ladda ner, lagra eller överföra något innehåll på vår webbplats utan vårt uttryckliga skriftliga tillstånd.',
    ipConclusion: 'All obehörig användning av materialet på denna webbplats kan bryta mot upphovsrätt, varumärke och andra tillämpliga lagar och kan leda till straffrättsliga eller civilrättsliga påföljder.',
    
    // User Conduct section
    userConduct: 'User Conduct',
    userConductIntro: 'When using our website and participating in our events, you agree to conduct yourself appropriately',
    userConductText: 'As a user of our website and participant in our events, you agree not to engage in any of the following prohibited activities:',
    conductRule1: 'Using the website in any way that violates any applicable local, national, or international law or regulation',
    conductRule2: 'Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the website',
    conductRule3: 'Engaging in any conduct that restricts or inhibits anyone\'s use or enjoyment of the website, or which may harm Sandviken Marathon or users of the website',
    conductRule4: 'Uploading or transmitting viruses, malware, or other types of malicious code that will or may impact the functionality of the website',
    
    // Limitation of Liability section
    limitationOfLiability: 'Limitation of Liability',
    liabilityIntro: 'Understanding our liability limitations is important for all participants and website users',
    liabilityText: 'To the maximum extent permitted by law, Sandviken Marathon and its affiliates shall not be liable for:',
    liabilityItem1: 'Any injuries, losses, or damages of any kind arising from participation in our events',
    liabilityItem2: 'Any indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profits',
    liabilityItem3: 'Any issues related to the accuracy, reliability, timeliness, or performance of the website',
    liabilityItem4: 'Any viruses, malware, or other malicious code that may be transmitted to or through the website',
    liabilityItem5: 'Any content of any third-party websites linked to our website',
    
    // Modifications section
    modifications: 'Modifications to Terms',
    modificationsIntro: 'We may update our terms and conditions from time to time',
    modificationsText: 'Sandviken Marathon reserves the right to modify these Terms and Conditions at any time. When we make changes:',
    modificationNotice: 'Notice',
    modificationPoint1: 'We will update the "last updated" date at the top of this page',
    modificationEffect: 'Effect',
    modificationPoint2: 'Any changes will be effective immediately upon posting the updated terms on this website',
    modificationAcceptance: 'Acceptance',
    modificationPoint3: 'Your continued use of the website and/or participation in our events after we post changes to these terms means that you accept the revised terms',
    modificationDisclaimer: 'It is your responsibility to periodically check this page for any changes to the Terms and Conditions',
    
    // Contact Us section for Terms
    termsContactUs: 'Contact Us',
    termsContactIntro: 'If you have questions about our Terms and Conditions, please reach out',
    termsContactText: 'If you have any questions about these Terms and Conditions, please contact us:',
    termsEmail: 'Email',
    termsEmailAddress: 'terms@sandvikenmarathon.se',
    termsAddress: 'Mailing Address',
    termsAddressText: 'Sandviken Marathon, Storgatan 1, 811 80 Sandviken, Sweden',
    termsContactBtn: 'Send Us a Message',
    
    // Contact form validation messages
    nameRequired: 'Name is required',
    nameMinLength: 'Name must be at least 2 characters',
    emailRequired: 'Email is required',
    emailInvalid: 'Please enter a valid email address',
    subjectRequired: 'Subject is required',
    subjectMinLength: 'Subject must be at least 5 characters',
    messageRequired: 'Message is required',
    messageMinLength: 'Message must be at least 10 characters',
    sendButton: 'Send Message',
    
    // Privacy
    privacyTitle: 'Privacy Policy',
    privacyIntro: 'Your privacy is important to us. This policy explains how we handle your data.',
    informationCollected: 'Information We Collect',
    informationCollectedText: 'We collect personal data when you register for our events or use our website:',
    demographicInfo: 'Demographic Information',
    demographicInfoText: 'Age, gender, and nationality for race categories and results',
    fitnessInfo: 'Fitness Information',
    fitnessInfoText: 'Previous race times and medical conditions relevant to participation',
    paymentInfo: 'Payment Information',
    paymentInfoText: 'Card details when you make a purchase (processed securely by our payment provider)',
    usageItems: 'How We Use Your Information',
    howWeUseInfo: 'We use your information in various ways to provide and improve our services:',
    contactCard: 'Contact and Communication',
    contactCardText: 'To communicate with you about the event, your registration, and any important updates',
    improvementsCard: 'Service Improvements',
    improvementsCardText: 'To analyze usage patterns and improve our website and services',
    raceManagementCard: 'Race Management',
    raceManagementCardText: 'To create start lists, record race times, and publish results',
    
    // Add the new translation keys here:
    // About Page additional translations
    aboutMissionSubtitle: 'Our core purpose and values',
    aboutMissionText1: 'Welcome to the Sandviken Marathon, a premier running event that brings together athletes, enthusiasts, and the community in a celebration of endurance, determination, and achievement. Our mission is to promote health, fitness, and community spirit through the power of running.',
    aboutMissionHighlight: 'Join us as we build a community of runners who inspire and challenge each other to reach new heights.',
    
    aboutHistorySubtitle: 'Our journey from the beginning',
    aboutHistoryText: 'Since our inception, the Sandviken Marathon has grown from a small local event to a nationally recognized race. We\'ve welcomed thousands of runners, created countless memories, and supported numerous charitable causes.',
    
    aboutHistoryFirstEvent: 'First Event',
    aboutHistoryFirstEventText: 'Our inaugural marathon brought together 500 runners from across the region.',
    aboutHistoryGrowingCommunity: 'Growing Community',
    aboutHistoryGrowingCommunityText: 'We expanded our race categories and welcomed more participants each year.',
    aboutHistoryNationalRecognition: 'National Recognition',
    aboutHistoryNationalRecognitionText: 'Sandviken Marathon is now a key event in the Swedish running calendar.',
    
    aboutValuesSubtitle: 'What makes our marathon special',
    aboutValuesCommunity: 'Community',
    aboutValuesCommunityText: 'Building connections and fostering a supportive environment for all participants.',
    aboutValuesExcellence: 'Excellence',
    aboutValuesExcellenceText: 'Striving for the highest standards in event organization and participant experience.',
    aboutValuesInclusivity: 'Inclusivity',
    aboutValuesInclusivityText: 'Welcoming runners of all abilities and backgrounds to join our community.',
    
    eventDetailsSubtitle: 'Everything you need to know about our event',
    eventDetailsDateTitle: 'Date & Time',
    eventDetailsDateText: 'Join us on the first Saturday of June for a day of running, celebration, and community spirit.',
    eventDetailsStartTime: 'Start time:',
    eventDetailsStartTimeText: '8:00 AM',
    eventDetailsRegistrationOpens: 'Registration opens:',
    eventDetailsRegistrationOpensText: '6:30 AM',
    
    eventDetailsLocationTitle: 'Location',
    eventDetailsLocationText: 'The race takes place in the beautiful city of Sandviken, featuring scenic routes through parks and along the waterfront.',
    eventDetailsStartFinish: 'Start/Finish:',
    eventDetailsStartFinishText: 'Sandviken City Park',
    eventDetailsParking: 'Parking:',
    eventDetailsParkingText: 'Available at City Center',
    
    aboutCommunitySubtitle: 'More than just a race',
    aboutCommunityText: 'The Sandviken Marathon is more than just a race—it\'s a celebration of our community. We bring together runners, volunteers, spectators, and local businesses to create an unforgettable experience.',
    aboutCommunityEngagement: 'Community engagement throughout the year',
    aboutCommunitySupport: 'Support for local businesses and organizations',
    aboutCommunityVolunteer: 'Volunteer opportunities for all ages',
    
    aboutFutureSubtitle: 'Building our tomorrow',
    aboutFutureText: 'As we look to the future, our vision is to continue growing the Sandviken Marathon while maintaining its community spirit and commitment to excellence. We aim to introduce new race categories, enhance the participant experience, and expand our charitable impact.',
    aboutFutureLegacy: 'Join Our Legacy',
    aboutFutureLegacyText: 'Be part of our growing story. Register for our next event today!',
    aboutFutureRegisterNow: 'Register Now',
    
    dataRetentionPolicy: 'Data Retention',
    dataRetentionPolicyText: 'We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for.',
    retentionPeriodsTitle: 'Retention Periods',
    accountInfoTitle: 'Account information',
    accountInfoText: 'Stored while your account is active',
    eventRegRetentionTitle: 'Event registration',
    eventRegRetentionText: 'Kept for 2 years after the event',
    marketingPrefsTitle: 'Marketing preferences',
    marketingPrefsText: 'Retained until you opt-out',
    paymentInfoSecurity: 'Payment information',
    paymentInfoSecurityText: 'Never stored on our servers',
    dataMinimizationPriority: 'Data minimization is our priority',
    
    yourRightsTitle: 'Your Rights',
    yourRightsText: 'Under data protection laws, you have rights related to your personal data:',
    accessTitle: 'Access',
    accessText: 'Request access to your personal data',
    correctionTitle: 'Correction',
    correctionText: 'Request correction of inaccurate data',
    deletionTitle: 'Deletion',
    deletionText: 'Request erasure of your personal data',
    restrictionTitle: 'Restriction',
    restrictionText: 'Request restriction of processing',
    rightsNoteText: 'You will not have to pay a fee to access your personal data. However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive.',
    
    dataSecurityTitle: 'Data Security',
    dataSecurityText: 'We have put in place appropriate security measures to protect your personal data:',
    secureStorageTitle: 'Secure Storage',
    secureStorageText: 'Data is stored securely with encryption',
    accessControlTitle: 'Access Control',
    accessControlText: 'Strict access restrictions to your data',
    regularUpdatesTitle: 'Regular Updates',
    regularUpdatesText: 'Frequent security updates and patches',
    dataMinimizationTitle: 'Data Minimization',
    dataMinimizationText: 'We only collect what\'s necessary',
    
    // Privacy Contact Us section
    privacyContactTitle: 'Contact Us',
    privacyContactText: 'If you have any questions about this privacy policy or our privacy practices, please contact us at:',
    privacyEmail: 'Email: privacy@sandvikenmarathon.com',
    privacyPhone: 'Phone: +46 123 456 789',
    privacyAddress: 'Address: Sandviken Marathon, Storgatan 1, 811 80 Sandviken, Sweden',
    
    // Terms page additions
    enIntellectualPropertyTermsIntro: 'Our content is protected by law',
    enLiabilityTermsIntro: 'Understanding our liability limitations',
    enModificationsTermsIntro: 'How we may update these terms',
    enUserConductTermsIntro: 'Guidelines for using our platforms',
    enTermsContactIntro: 'Contact us regarding our terms',
    
    // Home page additional translations
    raceStartingIn: 'Race Starting In',
    introText: 'Experience Sweden\'s premier running event — where breathtaking landscapes meet the spirit of endurance in the heart of Sandviken.',
    inauguralEventTitle: 'INAUGURAL EVENT • 2026',
    bePartOfHistory: 'Be Part of <span class="text-red-600">Running History</span>',
    inauguralDescription: 'The Sandviken Marathon isn\'t just a race — it\'s a landmark moment for Sweden\'s running community. Join us as we establish what will become one of Scandinavia\'s most prestigious running events.',
    
    // Course page additional translations
    courseLength: 'Course Length',
    elevationGain: 'Elevation Gain',
    courseMapNote: 'Interactive map will be available closer to the event date',
    courseMapInteractive: 'Click to view interactive map',
    scenicRoads: 'Scenic roads',
    supportAvailable: 'Support Available',
    supportDetails: 'Water, energy gels, and first aid',
    moreInfo: 'More Information',
    contactOrganizers: 'Contact our organizers',
    
    // Terms page additional translations
    termsAndConditions: 'Terms and Conditions',
    termsMainNavigation: 'Terms navigation',
    termsDocumentSections: 'Document Sections',
    termsNavigation: 'Terms and conditions navigation'
  },
  sv: {
    // Navigation section tabs
    overviewTab: 'Översikt',
    courseTab: 'Banan',
    detailsTab: 'Evenemangsdetaljer',
    registerTab: 'Anmälan',
    
    // Race Day Schedule
    raceDaySchedule: 'Tidsschema för loppdag',
    raceDayDate: '1 april 2026',
    raceVillageOpens: '6:00',
    raceVillageOpensText: 'Tävlingsområdet öppnar med registrering, nummerlappsutdelning och utställare',
    warmupSession: '7:30',
    warmupSessionText: 'Gemensam uppvärmning med professionell tränare',
    marathonStart: '8:00',
    marathonStartText: 'Maratonstart från Sandvikens torg',
    halfMarathonStart: '8:15',
    halfMarathonStartText: 'Halvmaratonstart',
    tenKStart: '8:30',
    tenKStartText: '10K-loppstart',
    awardsCeremony: '14:00',
    awardsCeremonyText: 'Prisceremoni och avslutningsfirande',
    eventDetailsLink: 'Evenemangsdetaljer',
    
    // Course Tab
    scenicRouteTitle: 'NATURSKÖN RUTT • 42,195 KM',
    breathtakingJourney: 'En <span class="text-red-600">Fantastisk</span> Resa',
    courseDescription2: 'Upplev Sandvikens vackraste landskap på en enda dag när du utmanar dig själv på vår noggrant utformade bana med utsikt över sjöar, skogsstigar och historiska landmärken.',
    iaafCertified: 'Vår IAAF-certifierade maratonbana tar dig genom de mest natursköna delarna av Sandviken och erbjuder en perfekt balans mellan utmaning och skönhet.',
    routeHighlights: 'Banans höjdpunkter',
    lakesideStart: 'Sjöstart (0-10km)',
    lakesideStartText: 'Börja din resa med hisnande vyer över sjön Storsjöns kristallklara vatten.',
    forestTrail: 'Skogsstig (10-25km)',
    forestTrailText: 'Spring genom skuggade tallskogar med mjuk terräng och naturlig skönhet.',
    historicDistrict: 'Historiskt distrikt (25-35km)',
    historicDistrictText: 'Passera sekelgamla landmärken och ta del av Sandvikens rika arv.',
    victoryBoulevard: 'Segerbulevarden (35-42km)',
    victoryBoulevardText: 'Den sista sträckan genom centrala staden med jublande folkmassa som leder till målet.',
    exploreDetailedMap: 'Utforska detaljerad bana',
    iaafCertifiedLabel: 'IAAF-certifierad • Mindre höjdskillnad',
    
    // Course Features
    timeLimit: 'Tidsgräns',
    timeLimitText: '6 timmar för att slutföra hela maratonbanan',
    aidStationsFeature: 'Vätskestationer',
    aidStationsFeatureText: '8 fullutrustade stationer med vätska, näring och medicinskt stöd',
    paceGroups: 'Farthållare',
    paceGroupsText: 'Professionella farthållare för måltider från 3:00 till 5:30',
    finisherMedal: 'Medalj för målgång',
    finisherMedalText: 'Exklusiv design för första året, utformad av välkänd svensk konstnär',
    
    // Event Details Tab
    eventDetailsSectionTitle: 'Evenemangsdetaljer',
    eventDetailsSubtitle: 'Allt du behöver veta om tävlingsdagen',
    eventSchedule: 'Evenemangsschema',
    preRaceDay: '31 mars 2026',
    preRaceDayText: 'Expo före tävling och nummerlappsutdelning (10:00 - 20:00)',
    raceDayFull: '1 april 2026',
    raceDayFullText: 'Tävlingsdag med flera starttider (se schema för tävlingsdagen)',
    locationDetails: 'Platsdetaljer',
    startFinishArea: 'Start/Målområde',
    startFinishAreaText: 'Sandvikens torg, Huvudgatan',
    raceExpo: 'Tävlingsexpo',
    raceExpoText: 'Sandvikens konferenscenter, Centergatan 123',
    raceCategoriesDetails: 'Tävlingskategorier',
    marathonLabel: 'Maraton',
    halfMarathonLabel: 'Halvmaraton',
    tenKRunLabel: '10K-lopp',
    importantInfo: 'Viktig information',
    packetPickupInfo: 'Alla deltagare måste hämta sina tävlingspaket före tävlingsdagen',
    idRequired: 'Ta med giltig legitimation för hämtning av tävlingspaket',
    noRaceDayRegistration: 'Ingen registrering kommer att finnas tillgänglig på tävlingsdagen',
    timingChips: 'Tidtagningschip måste återlämnas efter loppet',
    
    // Registration Promo
    secureYourSpot: 'Säkra din plats idag',
    earlyBirdPromo: 'Early bird-registrering öppnar snart med exklusiva förmåner för grundande deltagare. Missa inte din chans att bli en del av historien.',
    registrationOpens: 'Registrering öppnar: Januari 2025',
    limitedParticipants: 'Begränsat till 5 000 deltagare',
    
    // Navbar
    home: 'Hem',
    about: 'Om',
    course: 'Bana',
    register: 'Anmäl',
    results: 'Resultat',
    contact: 'Kontakt',
    navigation: 'Navigation',
    
    // Hero section
    officialEvent: 'Officiellt evenemang',
    marathon: 'Sandviken Marathon',
    eventDate: '1 apr 2026',
    heroSubtitle: 'Upplev Sandvikens skönhet i detta oförglömliga löpevenemang',
    registerNow: 'Anmäl Nu',
    viewCourse: 'Visa Bana',
    days: 'Dagar',
    hours: 'Timmar',
    minutes: 'Minuter',
    seconds: 'Sekunder',
    
    // Event details section
    premierEvent: 'Det främsta löpevenemanget i Sandviken',
    joinThousands: 'Anslut dig till löpare från hela världen i detta maraton genom Sandvikens mest natursköna vägar och naturleder',
    raceCategories: 'Loppkategorier',
    raceDescription: 'Full Maraton (42,195km) genom Sandvikens vackra landskap',
    viewCategories: 'Visa Kategorier',
    scenicRoute: 'Naturskön rutt',
    routeDescription: 'Spring genom pittoreska landskap, längs vattenområden och ikoniska landmärken i Sandviken',
    exploreRoute: 'Utforska Rutten',
    prizesAwards: 'Priser & Utmärkelser',
    prizesDescription: 'Exklusiva medaljer för alla målgångare och specialpriser för topputförare',
    learnMore: 'Läs Mer',
    
    // Course section
    theCourse: 'Banan',
    courseIntro: 'Upplev en naturskön bana som visar upp Sandvikens skönhet, på gångbanor, längs vattenområden och mindre vägar med vätskestationer var 5:e kilometer.',
    certifiedRoute: 'Noggrant utformad maratonbana',
    hydrationStations: 'Vätskestationer var 5:e kilometer längs banan',
    flatTerrain: 'Mestadels platt terräng med gångbanor och mindre vägar',
    medicalSupport: 'Medicinskt stöd längs hela banan',
    viewDetailedMap: 'Visa Detaljerad Karta',
    
    // Inaugural event section
    inauguralEvent: 'Inaugureringsevenemang',
    bePartOf: 'Var med och skapa historia i det första Sandviken Marathon',
    historicOpportunity: 'Var Med i Något Historiskt',
    joinUs: 'Gå med oss för det första Sandviken Marathon och bli en av våra grundande deltagare. Detta är din chans att göra historia i Sandvikens första stora maraton.',
    premiumExperience: 'Premiumupplevelse',
    experienceDescription: 'Professionell tidtagning, live-tracking och fullständigt ruttstöd',
    foundingStatus: 'Grundande Deltagarstatus',
    foundingDescription: 'Exklusiv förstaårsmedalj och minnescertifikat',
    secureSpot: 'Mer Information',
    
    // CTA section
    limitedSpots: 'Early Bird-anmälan',
    secureSpotToday: 'Var med 2026',
    earlyBird: 'Anmälan är öppen med early bird-priser till den 31 oktober 2025',
    
    // Footer
    privacyPolicy: 'Integritetspolicy',
    terms: 'Användarvillkor',
    copyright: '© 2025 Sandviken Marathon. Alla rättigheter förbehållna.',
    
    // Language switcher
    switchToSwedish: 'Svenska',
    switchToEnglish: 'Engelska',
    
    // About page
    aboutTitle: 'Om Sandviken Marathon',
    aboutIntro: 'Välkommen till Sandviken Marathon, ett främsta löpevenemang i hjärtat av Sverige. Vårt maraton erbjuder en vacker bana genom pittoreska landskap och historiska områden.',
    aboutMission: 'Vårt Uppdrag',
    aboutHistoryTitle: 'Vår Historia',
    aboutHistoryDesc: 'Sandviken Marathon grundades 2023 med en vision att föra samman gemenskapen genom löpandets kraft.',
    aboutValuesTitle: 'Våra Värderingar',
    aboutValuesDesc: 'Vi tror på att främja hälsa, fitness och gemenskapens anda genom löpandets glädje.',
    aboutCommunityTitle: 'Vår Gemenskap',
    aboutCommunityDesc: 'Sandviken Marathon förenar löpare, volontärer och åskådare från alla samhällsskikt.',
    aboutFutureTitle: 'Vår Framtid',
    aboutFutureDesc: 'Vi är engagerade i att utveckla Sandviken Marathon samtidigt som vi behåller dess gemenskapssinne och engagemang för excellens.',
    eventDetailsTitle: 'Evenemangsdetaljer',
    eventDetailsDesc: 'Maratonet startar och avslutas vid Stadsparken i centrala Sandviken, och erbjuder en vacker bana på gångbanor och mindre vägar med vätskestationer var 5:e kilometer.',
    
    // Contact page
    contactTitle: 'Kontakta Oss',
    contactSubtitle: 'Vi är här för att hjälpa till med alla frågor om Sandviken Marathon',
    getInTouch: 'Kontakta Oss',
    contactDesc: 'Har du frågor om Sandviken Marathon? Vi är här för att hjälpa till!',
    email: 'E-post',
    phone: 'Telefon',
    address: 'Adress',
    officeHours: 'Kontorstider',
    monToFri: 'Måndag till fredag: 9:00 - 17:00',
    weekends: 'Lördag och söndag: Stängt',
    followUs: 'Följ Oss',
    sendMessage: 'Skicka Ett Meddelande',
    messageDesc: 'Fyll i formuläret nedan så återkommer vi till dig så snart som möjligt.',
    formName: 'Namn',
    formEmail: 'E-post',
    formSubject: 'Ämne',
    formMessage: 'Meddelande',
    sending: 'Skickar...',
    successMessage: 'Tack för ditt meddelande! Vi återkommer till dig snart.',
    
    // Course page
    coursePageTitle: 'Bana & Information',
    coursePageIntro: 'Utforska den natursköna rutten genom Sandviken och dess vackra omgivningar. Vår maratonbana tar dig genom hjärtat av staden och längs pittoreska landskap med vätskestationer var 5:e kilometer.',
    courseDetailsTitle: 'Bandetaljer',
    distanceTitle: 'Sträcka',
    distanceDesc: 'Full Maraton: 42,195 km (26,2 miles)',
    elevationTitle: 'Höjdskillnad',
    elevationDesc: 'Banan har mestadels platt terräng med några mjuka uppförsbackar.',
    surfaceTitle: 'Underlag',
    surfaceDesc: 'Blandade underlag inklusive gångbanor (60%), mindre vägar (30%) och stadsområden (10%).',
    cutoffTitle: 'Tidsgräns',
    cutoffDesc: '6 timmar från starttiden.',
    
    // Results page
    resultsTitle: 'Loppresultat',
    resultsYear: '2026',
    comingSoon: 'Resultat kommer att publiceras här efter det första evenemanget.',
    
    // Register page
    registerTitle: 'Anmälan',
    registerComingSoon: 'Kommer Snart',
    registrationInfo: 'Anmälan kommer att vara tillgänglig via vår officiella anmälningsplattform. Håll utkik!',
    registrationType: 'Anmälningstyp',
    fullMarathon: 'Full Maraton (42,2km)',
    halfMarathon: 'Halvmaraton (21,1km)',
    tenK: '10K-lopp',
    pricing: 'Priser',
    earlyBirdRates: 'Early Bird-priser (Till 31 oktober 2025)',
    fullPrice: 'Full Maraton: 750 SEK',
    halfPrice: 'Halvmaraton: 550 SEK',
    tenKPrice: '10K-lopp: 350 SEK',
    registerButton: 'Anmäl Nu',
    
    // Results page
    selectYear: 'Välj År',
    position: 'Position',
    name: 'Namn',
    country: 'Land',
    category: 'Kategori',
    time: 'Tid',
    sweden: 'Sverige',
    menCategory: 'Herrar 30-39',
    womenCategory: 'Damer 20-29',
    menCategoryYoung: 'Herrar 20-29',
    previousYears: 'Föregående År',
    resultsDownload: 'Resultat från föregående år finns tillgängliga för nedladdning i PDF-format.',
    resultsPdf: 'Resultat (PDF)',
    
    // Course page additional keys
    courseDescription: 'Banan startar och avslutas i centrala Sandviken vid Stadsparken. Loppet inleds med en sträcka upp mot Stora COOP och ÅB, fortsätter förbi BJ Arena, ned mot Säljan och längs Trebo golfbana. Därefter följer vi gångbanan bredvid Trebo elljusspår innan vi når Bångs som är mycket vackert om vädret tillåter. Banan fortsätter längs vägen mot Bovik, sedan genom ett stugområde längs vattnet innan vi når Forsbacka. Efter rondellen "Norra infarten" får deltagarna se Sandvik/Cormant och springa genom Klangberget i villaområdet. Slutligen går loppet på den natursköna Gästrikeleden/Hälsans stig hela vägen tillbaka till Stadsparken.',
    courseHighlights: 'Banans höjdpunkter',
    startFinish: 'Start och mål vid Stadsparken',
    scenicWaterfront: 'Spring längs sjöar och vattenområden',
    historicNeighborhoods: 'Passera genom bostadsområden och stugområden',
    forestViews: 'Njut av skogsvyer längs Trebo elljusspår',
    aidStations: 'Vätskestationer',
    courseMap: 'Bana Karta',
    courseMapPlaceholder: 'Bankarta platshållare',
    elevationProfile: 'Höjdprofil',
    elevationProfilePlaceholder: 'Höjdprofil platshållare',
    raceDayInfo: 'Information om tävlingsdagen',
    raceDayDetails: 'Stadsparken är centrum för tävlingsaktiviteter, med omklädningsrum, toaletter och nummerlappsutdelning vid Bessemerhallen. Barnaktiviteter kommer att finnas tillgängliga i lekplatsområdet, och målområdet kommer att ha matbilar, sponsorbås och massagetjänster.',
    
    // Additional course page keys
    waterStations: 'Vattenstationer',
    waterStationDetails: 'Vattenstationer finns tillgängliga var 5:e kilometer längs banan',
    medicalStations: 'Medicinstationer',
    medicalStationDetails: 'Medicinsk support och första hjälp finns tillgängligt vid utsedda stationer längs banan',
    courseMapAlt: 'Sandviken Marathon Bana',
    startAnimation: 'Starta Animation',
    pauseAnimation: 'Pausa Animation',
    startTime: 'Starttid',
    startTimeDetails: '8:00 - Full Maraton',
    startLocation: 'Startplats',
    startLocationDetails: 'Stadsparken, Sandviken',
    
    // Privacy page
    privacyLastUpdated: 'Senast uppdaterad:',
    privacyDate: '1 maj 2025',
    privacyIntroTitle: 'Introduktion',
    privacyHighlight: 'Detta dokument förklarar hur vi samlar in, använder och skyddar din personliga information. Genom att använda vår webbplats godkänner du villkoren som beskrivs i denna policy.',
    
    // Information We Collect
    infoCollectTitle: 'Information Vi Samlar In',
    infoCollectText: 'Vi kan samla in följande typer av information:',
    personalInfoDetails: 'Personlig Information',
    personalInfoText: 'Namn, e-postadress, telefonnummer när du registrerar dig för våra evenemang',
    contactInfoTitle: 'Kontaktinformation',
    contactInfoText: 'Uppgifter som anges när du fyller i vårt kontaktformulär',
    technicalDataTitle: 'Tekniska Data',
    technicalDataText: 'IP-adress, webbläsartyp, information om operativsystem',
    usageDataTitle: 'Användningsdata',
    usageDataText: 'Information om hur du interagerar med vår webbplats',
    
    // How We Use Your Information
    infoUseTitle: 'Hur Vi Använder Din Information',
    infoUseText: 'Vi använder dina data för följande ändamål:',
    eventRegTitle: 'Evenemangsregistrering',
    eventRegText: 'För att registrera dig som deltagare i våra maraton och evenemang',
    relationshipTitle: 'Relationshantering',
    relationshipText: 'För att upprätthålla vår relation med dig och tillhandahålla stöd',
    communicationTitle: 'Kommunikation',
    communicationText: 'För att skicka dig information om våra evenemang och tjänster',
    websiteImprovementTitle: 'Webbplatsförbättring',
    websiteImprovementText: 'För att förbättra vår webbplats och tjänster baserat på användarupplevelse',
    securityTitle: 'Säkerhet',
    securityText: 'För att säkerställa säkerheten och korrekt funktion av vår webbplats',
    
    // Cookies section
    cookiesSectionTitle: 'Cookies',
    cookiesSectionText: 'Vår webbplats använder cookies för att förbättra din upplevelse och tillhandahålla vissa funktioner.',
    essentialCookies: 'Nödvändiga',
    essentialCookiesText: 'Krävs för grundläggande funktionalitet',
    functionalCookies: 'Funktionella',
    functionalText: 'För att komma ihåg dina preferenser',
    analyticsTitle: 'Analys',
    analyticsText: 'Hjälp oss förstå hur besökare använder vår webbplats',
    marketingTitle: 'Marknadsföring',
    marketingText: 'Spåra besökare över webbplatser',
    
    // Terms page
    lastUpdated: 'Senast uppdaterad:',
    termsDate: '15 juni 2025',
    termsIntro: 'Vänligen läs våra användarvillkor innan du använder vår webbplats eller registrerar dig för evenemang',
    
    // Terms Overview section
    agreementToTerms: 'Godkännande av villkor',
    termsAgreementText: 'Dessa användarvillkor utgör ett juridiskt bindande avtal mellan dig och Sandviken Marathon gällande din användning av vår webbplats och deltagande i våra evenemang. Genom att använda vår webbplats eller registrera dig för våra evenemang godkänner du att vara bunden av dessa villkor.',
    termsReviewText: 'Vänligen granska dessa villkor noggrant. Genom att besöka denna webbplats eller registrera dig för våra evenemang bekräftar du att du har läst, förstått och samtycker till att vara bunden av alla dessa användarvillkor.',
    
    // Event Registration section
    eventRegistration: 'Evenemangsregistrering',
    registrationText: 'När du registrerar dig för ett evenemang som anordnas av Sandviken Marathon godkänner du följande villkor:',
    physicalFitness: 'Fysisk kondition',
    physicalFitnessText: 'Du bekräftar att du är fysiskt frisk och inte har några medicinska tillstånd som skulle göra deltagande i evenemanget farligt för din hälsa.',
    riskAcceptance: 'Riskacceptans',
    riskAcceptanceText: 'Du förstår och erkänner att deltagande i löpevenemang innebär inneboende risker och faror för olyckor, personskador och förlust eller skada på egendom.',
    nonRefundableFees: 'Icke återbetalningsbara avgifter',
    nonRefundableFeesText: 'Registreringsavgifter återbetalas inte, förutom under specifika omständigheter som beskrivs i vår återbetalningspolicy.',
    scheduleChanges: 'Schemaändringar',
    scheduleChangesText: 'Arrangörerna förbehåller sig rätten att ändra, avbryta eller skjuta upp evenemanget på grund av oförutsedda omständigheter. I sådana fall gäller vår avbokningspolicy.',
    ruleCompliance: 'Regelefterlevnad',
    ruleComplianceText: 'Du samtycker till att följa alla evenemangsregler, förordningar och instruktioner från evenemangsarrangörer och personal.',
    
    // Intellectual Property section
    intellectualProperty: 'Immateriella rättigheter',
    ipIntro: 'Allt innehåll på vår webbplats skyddas av upphovsrätt och andra immaterialrättsliga lagar',
    ipText: 'Sandviken Marathons webbplats och dess originalinnehåll, funktioner och funktionalitet ägs av Sandviken Marathon och skyddas av internationell upphovsrätt, varumärke, patent, affärshemlighet och andra immaterialrättsliga lagar.',
    copyrightTitle: 'Upphovsrätt',
    copyrightTextContent: 'Allt innehåll, inklusive men inte begränsat till text, bilder, grafik, logotyper och videoklipp, är Sandviken Marathons egendom och skyddas av upphovsrättslagar.',
    limitedLicenseTitle: 'Begränsad licens',
    limitedLicenseTextContent: 'Vi beviljar dig en begränsad, icke-exklusiv, icke-överförbar och återkallelig licens att komma åt och använda vår webbplats för personliga, icke-kommersiella ändamål.',
    restrictions: 'Begränsningar',
    restrictionsText: 'Du får inte reproducera, distribuera, modifiera, skapa härledda verk av, offentligt visa, offentligt utföra, publicera på nytt, ladda ner, lagra eller överföra något innehåll på vår webbplats utan vårt uttryckliga skriftliga tillstånd.',
    ipConclusion: 'All obehörig användning av materialet på denna webbplats kan bryta mot upphovsrätt, varumärke och andra tillämpliga lagar och kan leda till straffrättsliga eller civilrättsliga påföljder.',
    
    // User Conduct section
    userConduct: 'Användaruppförande',
    userConductIntro: 'När du använder vår webbplats och deltar i våra evenemang samtycker du till att uppföra dig korrekt',
    userConductText: 'Som användare av vår webbplats och deltagare i våra evenemang samtycker du till att inte delta i någon av följande förbjudna aktiviteter:',
    conductRule1: 'Använda webbplatsen på något sätt som bryter mot tillämpliga lokala, nationella eller internationella lagar eller förordningar',
    conductRule2: 'Försöka störa, äventyra systemets integritet eller säkerhet, eller avkoda eventuella överföringar till eller från de servrar som driver webbplatsen',
    conductRule3: 'Engagera sig i något uppförande som begränsar eller hämmar någons användning eller njutning av webbplatsen, eller som kan skada Sandviken Marathon eller användare av webbplatsen',
    conductRule4: 'Ladda upp eller överföra virus, malware, eller andra typer av skadlig kod som kommer eller kan påverka webbplatsens funktion',
    
    // Limitation of Liability section
    limitationOfLiability: 'Ansvarsbegränsning',
    liabilityIntro: 'Att förstå våra ansvarsbegränsningar är viktigt för alla deltagare och webbplatsanvändare',
    liabilityText: 'I den utsträckning som är tillåten enligt lag, är Sandviken Marathon och dess dotterbolag inte ansvariga för:',
    liabilityItem1: 'Några skador, förluster eller skador av något slag som uppstår från deltagande i våra evenemang',
    liabilityItem2: 'Några indirekta, följdmässiga, exemplariska, tillfälliga, speciella eller straffskadestånd, inklusive förlorade vinster',
    liabilityItem3: 'Eventuella problem relaterade till webbplatsens noggrannhet, tillförlitlighet, aktualitet eller prestanda',
    liabilityItem4: 'Eventuella virus, malware, eller annan skadlig kod som kan överföras till eller genom webbplatsen',
    liabilityItem5: 'Innehåll på eventuella tredjepartswebbplatser som är länkade till vår webbplats',
    
    // Modifications section
    modifications: 'Ändringar av villkor',
    modificationsIntro: 'Vi kan uppdatera våra användarvillkor från tid till annan',
    modificationsText: 'Sandviken Marathon förbehåller sig rätten att ändra dessa användarvillkor när som helst. När vi gör ändringar:',
    modificationNotice: 'Meddelande',
    modificationPoint1: 'Vi kommer att uppdatera datumet för "senast uppdaterad" överst på denna sida',
    modificationEffect: 'Effekt',
    modificationPoint2: 'Alla ändringar träder i kraft omedelbart efter att de uppdaterade villkoren har publicerats på denna webbplats',
    modificationAcceptance: 'Godkännande',
    modificationPoint3: 'Din fortsatta användning av webbplatsen och/eller deltagande i våra evenemang efter att vi publicerar ändringar av dessa villkor innebär att du accepterar de reviderade villkoren',
    modificationDisclaimer: 'Det är ditt ansvar att regelbundet kontrollera denna sida för eventuella ändringar av användarvillkoren',
    
    // Contact Us section
    termsContactUs: 'Kontakta oss',
    termsContactIntro: 'Om du har frågor om våra användarvillkor, vänligen kontakta oss',
    termsContactText: 'Om du har några frågor om dessa användarvillkor, vänligen kontakta oss:',
    termsEmail: 'E-post',
    termsEmailAddress: 'terms@sandvikenmarathon.se',
    termsAddress: 'Postadress',
    termsAddressText: 'Sandviken Marathon, Storgatan 1, 811 80 Sandviken, Sverige',
    termsContactBtn: 'Skicka oss ett meddelande',
    
    // Contact form validation messages
    nameRequired: 'Namn krävs',
    nameMinLength: 'Namn måste vara minst 2 tecken',
    emailRequired: 'E-post krävs',
    emailInvalid: 'Vänligen ange en giltig e-postadress',
    subjectRequired: 'Ämne krävs',
    subjectMinLength: 'Ämne måste vara minst 5 tecken',
    messageRequired: 'Meddelande krävs',
    messageMinLength: 'Meddelande måste vara minst 10 tecken',
    sendButton: 'Skicka meddelande',
    
    // Privacy
    privacyTitle: 'Integritetspolicy',
    privacyIntro: 'Din integritet är viktig för oss. Denna policy förklarar hur vi hanterar dina uppgifter.',
    informationCollected: 'Information Vi Samlar In',
    informationCollectedText: 'Vi samlar in personuppgifter när du registrerar dig för våra evenemang eller använder vår webbplats:',
    demographicInfo: 'Demografisk information',
    demographicInfoText: 'Ålder, kön och nationalitet för loppkategorier och resultat',
    fitnessInfo: 'Träningsinformation',
    fitnessInfoText: 'Tidigare löptider och medicinska tillstånd relevanta för deltagande',
    paymentInfo: 'Betalningsinformation',
    paymentInfoText: 'Kortdetaljer när du gör ett köp (behandlas säkert av vår betalningsleverantör)',
    usageItems: 'Hur Vi Använder Din Information',
    howWeUseInfo: 'Vi använder din information på olika sätt för att tillhandahålla och förbättra våra tjänster:',
    contactCard: 'Kontakt och kommunikation',
    contactCardText: 'För att kommunicera med dig om evenemanget, din registrering och viktiga uppdateringar',
    improvementsCard: 'Tjänsteförbättringar',
    improvementsCardText: 'För att analysera användningsmönster och förbättra vår webbplats och tjänster',
    raceManagementCard: 'Lopphantering',
    raceManagementCardText: 'För att skapa startlistor, registrera löptider och publicera resultat',
    
    // Add the new translation keys here:
    dataRetentionPolicy: 'Datalagring',
    dataRetentionPolicyText: 'Vi behåller endast dina personuppgifter så länge som det är nödvändigt för att uppfylla de syften för vilka de samlades in.',
    retentionPeriodsTitle: 'Lagringsperioder',
    accountInfoTitle: 'Kontoinformation',
    accountInfoText: 'Lagras medan ditt konto är aktivt',
    eventRegRetentionTitle: 'Evenemangsregistrering',
    eventRegRetentionText: 'Behålls i 2 år efter evenemanget',
    marketingPrefsTitle: 'Marknadsföringspreferenser',
    marketingPrefsText: 'Behålls tills du väljer bort',
    paymentInfoSecurity: 'Betalningsinformation',
    paymentInfoSecurityText: 'Lagras aldrig på våra servrar',
    dataMinimizationPriority: 'Dataminimering är vår prioritet',
    
    yourRightsTitle: 'Dina rättigheter',
    yourRightsText: 'Enligt dataskyddslagarna har du rättigheter relaterade till dina personuppgifter:',
    accessTitle: 'Tillgång',
    accessText: 'Begära tillgång till dina personuppgifter',
    correctionTitle: 'Korrigering',
    correctionText: 'Begära korrigering av felaktiga uppgifter',
    deletionTitle: 'Radering',
    deletionText: 'Begära radering av dina personuppgifter',
    restrictionTitle: 'Begränsning',
    restrictionText: 'Begära begränsning av behandling',
    rightsNoteText: 'Du behöver inte betala någon avgift för att få tillgång till dina personuppgifter. Vi kan dock ta ut en rimlig avgift om din begäran är uppenbart ogrundad, repetitiv eller överdriven.',
    
    dataSecurityTitle: 'Datasäkerhet',
    dataSecurityText: 'Vi har infört lämpliga säkerhetsåtgärder för att skydda dina personuppgifter:',
    secureStorageTitle: 'Säker lagring',
    secureStorageText: 'Data lagras säkert med kryptering',
    accessControlTitle: 'Åtkomstkontroll',
    accessControlText: 'Strikta åtkomstbegränsningar till dina uppgifter',
    regularUpdatesTitle: 'Regelbundna uppdateringar',
    regularUpdatesText: 'Frekventa säkerhetsuppdateringar och korrigeringar',
    dataMinimizationTitle: 'Dataminimering',
    dataMinimizationText: 'Vi samlar bara in det som är nödvändigt',
    
    // Privacy Contact Us section
    privacyContactTitle: 'Kontakta oss',
    privacyContactText: 'Om du har några frågor om denna integritetspolicy eller våra integritetsprinciper, vänligen kontakta oss på:',
    privacyEmail: 'E-post: privacy@sandvikenmarathon.com',
    privacyPhone: 'Telefon: +46 123 456 789',
    privacyAddress: 'Adress: Sandviken Marathon, Storgatan 1, 811 80 Sandviken, Sverige',
    
    // Data Retention section - Swedish version
    svDataRetentionTitle: 'Datalagring',
    svDataRetentionText: 'Vi behåller dina personuppgifter endast så länge som det är nödvändigt för de ändamål för vilka de samlades in.',
    svRegistrationDataRetention: 'Registreringsdata',
    svRegistrationDataRetentionText: 'Behålls i 2 år efter evenemanget',
    svContactDataRetention: 'Kontaktdata',
    svContactDataRetentionText: 'Behålls i 1 år efter senaste kontakten',
    svMarketingDataRetention: 'Marknadsföringsdata',
    svMarketingDataRetentionText: 'Behålls tills du väljer bort',
    svPaymentInfoTitle: 'Betalningsinformation',
    svPaymentInfoText: 'Lagras aldrig på våra servrar',
    
    // Terms page additions - Swedish version
    svIntellectualPropertyTermsIntro: 'Vårt innehåll är skyddat av lag',
    svLiabilityTermsIntro: 'Förståelse för våra ansvarsbegränsningar',
    svModificationsTermsIntro: 'Hur vi kan uppdatera dessa villkor',
    svUserConductTermsIntro: 'Riktlinjer för användning av våra plattformar',
    svTermsContactIntro: 'Kontakta oss angående våra villkor',
    
    // Home page additional translations
    raceStartingIn: 'Loppet Startar Om',
    introText: 'Upplev Sveriges främsta löpevenemang — där hisnande landskap möter uthållighetens anda i hjärtat av Sandviken.',
    inauguralEventTitle: 'FÖRSTA EVENEMANGET • 2026',
    bePartOfHistory: 'Var med i <span class="text-red-600">löphistoria</span>',
    inauguralDescription: 'Sandviken Marathon är inte bara ett lopp — det är en milstolpe för Sveriges löpargemenskap. Följ med oss när vi etablerar vad som kommer att bli ett av Skandinaviens mest prestigefyllda löpevenemang.',
    
    // Course page additional translations
    courseLength: 'Banans Längd',
    elevationGain: 'Höjdskillnad',
    courseMapNote: 'Interaktiv karta kommer att finnas tillgänglig närmare evenemangsdatumet',
    courseMapInteractive: 'Klicka för att visa interaktiv karta',
    scenicRoads: 'Natursköna vägar',
    supportAvailable: 'Tillgängligt Stöd',
    supportDetails: 'Vatten, energigel och första hjälpen',
    moreInfo: 'Mer Information',
    contactOrganizers: 'Kontakta våra arrangörer',
    
    // Terms page additional translations
    termsAndConditions: 'Användarvillkor',
    termsMainNavigation: 'Navigering av användarvillkor',
    termsDocumentSections: 'Dokumentsektioner',
    termsNavigation: 'Användarvillkor navigation'
  }
};

/**
 * Helper function to get translation with proper type safety
 * @param key The translation key to look up
 * @param lang Optional language override (defaults to current store value)
 * @returns The translated string or the key if not found
 */
export function t(key: TranslationKey, lang?: Language): string {
  if (!key) return '';
  
  const currentLang = lang || 'en';
  
  // Try to get translation in current language
  if (translations[currentLang] && translations[currentLang][key]) {
    return translations[currentLang][key];
  }
  
  // Fallback to English if current language is not English
  if (currentLang !== 'en' && translations['en'] && translations['en'][key]) {
    return translations['en'][key];
  }
  
  // Return the key as last resort
  return key;
}

/**
 * A derived store that provides the current translation function
 * This allows components to access translations reactively
 */
export const tStore = derived(
  language,
  ($language) => (key: TranslationKey) => translations[$language]?.[key] || translations['en']?.[key] || key
);

/**
 * Detect the browser language and return a supported language code
 * @returns The detected language code (en or sv)
 */
export function detectBrowserLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'en'; // Default to English on the server
  }

  // Get browser language
  const browserLang = navigator.language.split('-')[0].toLowerCase();
  
  // Check if it's one of our supported languages
  if (browserLang === 'sv') {
    return 'sv';
  }
  
  // Default to English
  return 'en';
} 