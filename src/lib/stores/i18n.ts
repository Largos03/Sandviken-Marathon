import { writable, derived } from 'svelte/store';

// Define types
export type Language = 'en' | 'sv';
export type TranslationKey = string;
export type TranslationRecord = Record<string, string>;

// Default language
export const language = writable<Language>('en');

// Translations for the site
export const translations = {
  en: {
    // Navbar
    home: 'Home',
    about: 'About',
    course: 'Course',
    register: 'Register',
    results: 'Results',
    contact: 'Contact',
    
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
    premierEvent: 'The Premier Running Event in Sweden',
    joinThousands: 'Join thousands of runners from around the world in this prestigious marathon through Sandviken\'s most scenic routes',
    raceCategories: 'Race Categories',
    raceDescription: 'Choose from Full Marathon (42.2km), Half Marathon (21.1km), or 10K Race',
    viewCategories: 'View Categories',
    scenicRoute: 'Scenic Route',
    routeDescription: 'Run through picturesque landscapes and iconic landmarks in Sandviken',
    exploreRoute: 'Explore Route',
    prizesAwards: 'Prizes & Awards',
    prizesDescription: 'Exclusive medals for all finishers and special prizes for top performers',
    learnMore: 'Learn More',
    
    // Course section
    theCourse: 'The Course',
    courseIntro: 'Experience a scenic route that showcases the beauty of Sandviken, passing iconic landmarks and picturesque landscapes. Our carefully designed course offers a perfect balance of challenge and enjoyment.',
    certifiedRoute: 'AIMS/IAAF certified route',
    hydrationStations: '8 hydration stations along the route',
    flatTerrain: 'Mostly flat terrain with gentle elevation',
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
    terms: 'Terms',
    copyright: '© 2025 Sandviken Marathon. All rights reserved.',
    
    // Language switcher
    switchToSwedish: 'Svenska',
    
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
    eventDetailsDesc: 'The marathon typically takes place in the summer, offering perfect running conditions with mild temperatures and beautiful surroundings.',
    
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
    coursePageIntro: 'Explore the scenic route through Sandviken and its beautiful surroundings. Our certified marathon course takes you through the heart of the city and along picturesque landscapes.',
    courseDetailsTitle: 'Course Details',
    distanceTitle: 'Distance',
    distanceDesc: 'Full Marathon: 42.195 km (26.2 miles)',
    elevationTitle: 'Elevation',
    elevationDesc: 'The course features approximately 135m of elevation gain.',
    surfaceTitle: 'Surface',
    surfaceDesc: 'Mixed surfaces including asphalt roads (80%) and compact gravel paths (20%).',
    cutoffTitle: 'Cut-off Time',
    cutoffDesc: '6 hours from the start time. Participants must maintain a pace of at least 8:35 min/km.',
    
    // Results page
    resultsTitle: 'Race Results',
    resultsYear: '2026',
    comingSoon: 'Results will be posted here after the inaugural event.',
    
    // Register page
    registerTitle: 'Registration',
    comingSoon: 'Coming Soon',
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
    courseDescription: 'The course is mostly flat with some gentle hills, making it suitable for both beginners and experienced runners aiming for personal bests.',
    courseHighlights: 'Course Highlights',
    startFinish: 'Start and finish in the city center',
    scenicWaterfront: 'Run along the scenic waterfront',
    historicNeighborhoods: 'Pass through historic neighborhoods',
    forestViews: 'Enjoy views of surrounding forests',
    aidStations: 'Aid Stations',
    aidStationDetails: 'Aid stations are positioned approximately every 5km along the course, providing water, sports drinks, and energy gels.',
    courseMap: 'Course Map',
    courseMapPlaceholder: 'Course map placeholder',
    elevationProfile: 'Elevation Profile',
    elevationProfilePlaceholder: 'Elevation profile placeholder',
    raceDayInfo: 'Race Day Information',
    raceDayDetails: 'The marathon starts at 8:00 AM with a time limit of 6 hours. Participants should arrive at least 1 hour before the start time for check-in and warm-up.',
    
    // Additional course page keys
    waterStations: 'Water Stations',
    waterStationDetails: 'Water stations are available every 5km along the course',
    medicalStations: 'Medical Stations',
    medicalStationDetails: 'Medical support and first aid available at designated stations',
    courseMapAlt: 'Sandviken Marathon Course Map',
    startAnimation: 'Start Animation',
    pauseAnimation: 'Pause Animation',
    startTime: 'Start Time',
    startTimeDetails: '8:00 AM - Full Marathon',
    startLocation: 'Start Location',
    startLocationDetails: 'City Center, Sandviken',
    
    // Privacy page
    privacyLastUpdated: 'Last updated:',
    privacyDate: 'May 1, 2025',
    privacyIntroTitle: 'Introduction',
    privacyIntroText: 'Sandviken Marathon ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.',
    privacyHighlight: 'This document explains how we collect, use, and protect your personal information. By using our website, you agree to the terms outlined in this policy.',
    
    // Information We Collect
    infoCollectTitle: 'Information We Collect',
    infoCollectText: 'We may collect the following types of information:',
    personalInfoTitle: 'Personal Information',
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
    cookiesTitle: 'Cookies',
    cookiesText: 'Our website uses cookies to distinguish you from other users. This helps us provide you with a good experience and allows us to improve our site.',
    essentialTitle: 'Essential',
    essentialText: 'Required for basic functionality',
    functionalTitle: 'Functional',
    functionalText: 'Remember your preferences',
    analyticsTitle: 'Analytics',
    analyticsText: 'Help us understand how visitors use our site',
    marketingTitle: 'Marketing',
    marketingText: 'Track visitors across websites',
    
    // Terms page
    termsIntro: 'Please read our terms and conditions before using our website or registering for events',
    lastUpdated: 'Last updated:',
    termsDate: 'May 1, 2025',
    
    // Terms page sections
    agreementToTerms: 'Agreement to Terms',
    termsAgreementText: 'These Terms and Conditions constitute a legally binding agreement made between you and Sandviken Marathon concerning your use of our website and participation in our events. By using our website or registering for our events, you agree to be bound by these Terms.',
    termsReviewText: 'Please review these terms carefully. By accessing this website or registering for our events, you acknowledge that you have read, understood, and agree to be bound by all terms stated herein.',
    
    // Modifications section
    modifications: 'Modifications to Terms',
    modificationsText: 'We reserve the right to modify these Terms at any time. Your continued use of the website following any changes indicates your acceptance of the modified Terms.',
    modificationNotice: 'Notice of Changes',
    modificationPoint1: 'We will notify registered users of any material changes to these Terms via email at least 30 days before they take effect.',
    modificationEffect: 'Effect of Changes',
    modificationPoint2: 'Changes will not apply retroactively and will only affect future use of our services. Previous versions of the Terms will remain available upon request.',
    modificationAcceptance: 'Your Acceptance',
    modificationPoint3: 'If you do not agree with the updated Terms, you should discontinue using our services. Continued use after modifications indicates acceptance of the new Terms.',
    modificationDisclaimer: 'It is your responsibility to review these Terms periodically. Your continued use of the website constitutes acceptance of any modifications.',
    
    // Event Registration
    eventRegistration: 'Event Registration',
    registrationText: 'By registering for Sandviken Marathon events, you acknowledge and agree to the following:',
    physicalFitness: 'Physical Fitness',
    physicalFitnessText: 'You are physically fit and have no medical conditions that would prevent safe participation',
    riskAcceptance: 'Risk Acceptance',
    riskAcceptanceText: 'You understand that participating in athletic events involves risk of serious injury',
    nonRefundableFees: 'Non-Refundable Fees',
    nonRefundableFeesText: 'Registration fees are non-refundable unless stated otherwise in our refund policy',
    scheduleChanges: 'Schedule Changes',
    scheduleChangesText: 'Event dates and times may be subject to change due to various circumstances',
    ruleCompliance: 'Rule Compliance',
    ruleComplianceText: 'You agree to follow all rules, regulations, and instructions of event organizers',
    
    // Intellectual Property
    intellectualProperty: 'Intellectual Property Rights',
    intellectualPropertyText: 'The content on our website, including without limitation text, graphics, logos, images, audio clips, and software, is owned by Sandviken Marathon and is protected by copyright and other intellectual property laws.',
    copyright: 'Copyright',
    copyrightText: 'All content is protected by copyright laws and treaties around the world',
    limitedLicense: 'Limited License',
    limitedLicenseText: 'You may view and use our content for personal, non-commercial purposes only',
    restrictions: 'Restrictions',
    restrictionsText: 'You may not reproduce, distribute, modify, or create derivative works from any content',
    ipConclusion: 'Any unauthorized use of our intellectual property may violate copyright, trademark, and other laws and could result in legal action.',
    
    // User Conduct
    userConduct: 'User Conduct',
    userConductText: 'When using our website, you agree not to engage in any of the following prohibited activities:',
    conductRule1: 'Use the website in any way that violates any applicable law',
    conductRule2: 'Attempt to gain unauthorized access to any portion of the website',
    conductRule3: 'Use the website to transmit any virus, worm, or other malicious code',
    conductRule4: 'Impersonate or attempt to impersonate Sandviken Marathon',
    
    // Limitation of Liability
    limitationOfLiability: 'Limitation of Liability',
    liabilityText: 'In no event shall Sandviken Marathon, nor its directors, employees, partners, agents, or suppliers, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:',
    liabilityItem1: 'Your access to or use of or inability to access or use the website',
    liabilityItem2: 'Any conduct or content of any third party on the website',
    liabilityItem3: 'Any content obtained from the website',
    liabilityItem4: 'Unauthorized access, use or alteration of your transmissions or content',
    liabilityItem5: 'Participation in any Sandviken Marathon events',
    
    // Data Security
    dataSecurity: 'Data Security',
    dataSecurityText: 'We have put in place appropriate security measures to protect your personal data:',
    secureStorage: 'Secure Storage',
    secureStorageText: 'Data is stored securely with encryption',
    accessControl: 'Access Control',
    accessControlText: 'Strict access restrictions to your data',
    regularUpdates: 'Regular Updates',
    regularUpdatesText: 'Frequent security updates and patches',
    dataMinimization: 'Data Minimization',
    dataMinimizationText: 'We only collect what\'s necessary',
    
    // Contact Section
    termsContactUs: 'Contact Us',
    termsContactText: 'If you have any questions about these Terms, please contact us at:',
    termsEmail: 'Email:',
    termsEmailAddress: 'terms@sandvikenmarathon.com',
    termsAddress: 'Address:',
    termsAddressText: 'Sandviken Marathon, PO Box 123, Sandviken, Sweden',
    termsContactBtn: 'Contact Us',
    
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
    personalInfo: 'Personal Information',
    personalInfoText: 'Name, email, phone number, and emergency contact information for race registration',
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
    cookiesTitle: 'Cookies',
    cookiesText: 'Our website uses cookies to enhance your experience and provide certain features.',
    essentialCookies: 'Essential Cookies',
    essentialCookiesText: 'Necessary for basic site functionality',
    functionalCookies: 'Functional Cookies',
    functionalCookiesText: 'Remember your preferences and settings',
    analyticsCookies: 'Analytics Cookies',
    analyticsCookiesText: 'Help us understand how visitors interact with our site',
    marketingCookies: 'Marketing Cookies',
    marketingCookiesText: 'Used to show relevant advertisements',
    
    // Add the new translation keys here:
    dataRetentionTitle: 'Data Retention',
    dataRetentionText: 'We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for.',
    retentionPeriodsTitle: 'Retention Periods',
    accountInfoTitle: 'Account information',
    accountInfoText: 'Stored while your account is active',
    eventRegRetentionTitle: 'Event registration',
    eventRegRetentionText: 'Kept for 2 years after the event',
    marketingPrefsTitle: 'Marketing preferences',
    marketingPrefsText: 'Retained until you opt-out',
    paymentInfoTitle: 'Payment information',
    paymentInfoText: 'Never stored on our servers',
    dataMinimizationTagline: 'Data minimization is our priority',
    
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
    privacyContactEmail: 'Email:',
    privacyContactEmailAddress: 'privacy@sandvikenmarathon.com',
    privacyContactAddress: 'Address:',
    privacyContactAddressText: 'Sandviken Marathon, PO Box 123, Sandviken, Sweden',
    privacyContactBtn: 'Contact Us',
    cookieNoticeText: 'Cookies are enabled by default. You can manage your preferences in the Privacy Policy.',
  },
  sv: {
    // Navbar
    home: 'Hem',
    about: 'Om',
    course: 'Bana',
    register: 'Anmäl',
    results: 'Resultat',
    contact: 'Kontakt',
    
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
    premierEvent: 'Det främsta löpevenemanget i Sverige',
    joinThousands: 'Gå med tusentals löpare från hela världen i detta prestigefyllda maraton genom Sandvikens mest pittoreska rutter',
    raceCategories: 'Loppkategorier',
    raceDescription: 'Välj mellan Full Maraton (42,2km), Halvmaraton (21,1km) eller 10K-lopp',
    viewCategories: 'Visa Kategorier',
    scenicRoute: 'Pittoresk rutt',
    routeDescription: 'Spring genom pittoreska landskap och ikoniska landmärken i Sandviken',
    exploreRoute: 'Utforska Rutt',
    prizesAwards: 'Priser & Utmärkelser',
    prizesDescription: 'Exklusiva medaljer för alla målgångare och specialpriser för topputförare',
    learnMore: 'Läs Mer',
    
    // Course section
    theCourse: 'Banan',
    courseIntro: 'Upplev en pittoresk rutt som visar fram Sandvikens skönhet, passerar ikoniska landmärken och pittoreska landskap. Vår noggrant utformade bana erbjuder en perfekt balans mellan utmaning och njutning.',
    certifiedRoute: 'AIMS/IAAF certifierad rutt',
    hydrationStations: '8 vätskestationer längs rutten',
    flatTerrain: 'Mestadels platt terräng med milda höjder',
    medicalSupport: 'Medicinskt stöd genom hela banan',
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
    terms: 'Villkor',
    copyright: '© 2025 Sandviken Marathon. Alla rättigheter förbehållna.',
    
    // Language switcher
    switchToSwedish: 'Svenska',
    
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
    eventDetailsDesc: 'Maratonet äger vanligtvis rum på sommaren, med perfekta löpförhållanden med milda temperaturer och vacker omgivning.',
    
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
    coursePageTitle: 'Banan & Information',
    coursePageIntro: 'Utforska den pittoreska rutten genom Sandviken och dess vackra omgivningar. Vår certifierade maratonbana tar dig genom stadens hjärta och längs pittoreska landskap.',
    courseDetailsTitle: 'Banedetaljer',
    distanceTitle: 'Distans',
    distanceDesc: 'Full Maraton: 42,195 km',
    elevationTitle: 'Höjdförändring',
    elevationDesc: 'Banan har cirka 135m höjdförändring.',
    surfaceTitle: 'Yta',
    surfaceDesc: 'Blandade ytor inklusive asfalterade vägar (80%) och kompakt grusväg (20%).',
    cutoffTitle: 'Tidsgräns',
    cutoffDesc: '6 timmar från starttid. Deltagare måste hålla en tempo på minst 8:35 min/km.',
    
    // Results page
    resultsTitle: 'Loppresultat',
    resultsYear: '2026',
    comingSoon: 'Resultat kommer att publiceras här efter inaugureringsevenemanget.',
    
    // Register page
    registerTitle: 'Anmälan',
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
    courseDescription: 'Banan är mestadels platt med några milda backar, vilket gör den lämplig för både nybörjare och erfarna löpare som siktar på personbästa.',
    courseHighlights: 'Bana Höjdpunkter',
    startFinish: 'Start och mål i stadens centrum',
    scenicWaterfront: 'Spring längs den pittoreska vattenfronten',
    historicNeighborhoods: 'Passera genom historiska stadsdelar',
    forestViews: 'Njut av utsikt över omgivande skogar',
    aidStations: 'Stödstationer',
    aidStationDetails: 'Stödstationer är placerade ungefär var 5:e kilometer längs banan, med vatten, sportdryck och energigel.',
    courseMap: 'Banan',
    courseMapPlaceholder: 'Bana platshållare',
    elevationProfile: 'Höjdprofil',
    elevationProfilePlaceholder: 'Höjdprofil platshållare',
    raceDayInfo: 'Loppdagsinformation',
    raceDayDetails: 'Maratonet startar kl 8:00 med en tidsgräns på 6 timmar. Deltagare bör ankomma minst 1 timme före starttid för incheckning och uppvärmning.',
    
    // Additional course page keys
    waterStations: 'Vattenstationer',
    waterStationDetails: 'Vattenstationer finns tillgängliga var 5:e kilometer längs banan',
    medicalStations: 'Medicinstationer',
    medicalStationDetails: 'Medicinsk support och första hjälp finns tillgängligt vid utsedda stationer',
    courseMapAlt: 'Sandviken Marathon Bana',
    startAnimation: 'Starta Animation',
    pauseAnimation: 'Pausa Animation',
    startTime: 'Starttid',
    startTimeDetails: '8:00 - Full Maraton',
    startLocation: 'Startplats',
    startLocationDetails: 'Stadscentrum, Sandviken',
    
    // Privacy page
    privacyLastUpdated: 'Senast uppdaterad:',
    privacyDate: '1 maj 2025',
    privacyIntroTitle: 'Introduktion',
    privacyIntroText: 'Sandviken Marathon ("vi," "vår," eller "oss") respekterar din integritet och är engagerade i att skydda dina personuppgifter. Denna integritetspolicy informerar dig om hur vi tar hand om dina personuppgifter när du besöker vår webbplats och berättar om dina integritetsrättigheter.',
    privacyHighlight: 'Detta dokument förklarar hur vi samlar in, använder och skyddar din personliga information. Genom att använda vår webbplats godkänner du villkoren som anges i denna policy.',
    
    // Information We Collect
    infoCollectTitle: 'Information Vi Samlar In',
    infoCollectText: 'Vi kan samla in följande typer av information:',
    personalInfoTitle: 'Personlig Information',
    personalInfoText: 'Namn, e-postadress, telefonnummer när du registrerar dig för våra evenemang',
    contactInfoTitle: 'Kontaktinformation',
    contactInfoText: 'Uppgifter som anges när du fyller i vårt kontaktformulär',
    technicalDataTitle: 'Teknisk Data',
    technicalDataText: 'IP-adress, webbläsartyp, operativsystemsinformation',
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
    cookiesTitle: 'Cookies',
    cookiesText: 'Vår webbplats använder cookies för att förbättra din upplevelse och tillhandahålla vissa funktioner.',
    essentialTitle: 'Nödvändiga',
    essentialText: 'Krävs för grundläggande funktionalitet',
    functionalTitle: 'Funktionella',
    functionalText: 'För att komma ihåg dina preferenser',
    analyticsTitle: 'Analys',
    analyticsText: 'Hjälp oss förstå hur besökare använder vår webbplats',
    marketingTitle: 'Marknadsföring',
    marketingText: 'Spåra besökare över webbplatser',
    
    // Terms page
    termsIntro: 'Vänligen läs våra villkor innan du använder vår webbplats eller registrerar dig för evenemang',
    lastUpdated: 'Senast uppdaterad:',
    termsDate: '1 maj 2025',
    
    // Terms page sections
    agreementToTerms: 'Godkännande av Villkor',
    termsAgreementText: 'Dessa villkor utgör ett juridiskt bindande avtal mellan dig och Sandviken Marathon angående din användning av vår webbplats och deltagande i våra evenemang. Genom att använda vår webbplats eller registrera dig för våra evenemang godkänner du att vara bunden av dessa villkor.',
    termsReviewText: 'Vänligen granska dessa villkor noggrant. Genom att använda denna webbplats eller registrera dig för våra evenemang erkänner du att du har läst, förstått och godkänt att vara bunden av alla här angivna villkor.',
    
    // Modifications section
    modifications: 'Ändringar i Villkoren',
    modificationsText: 'Vi förbehåller oss rätten att ändra dessa villkor när som helst. Din fortsatta användning av webbplatsen efter eventuella ändringar indikerar ditt godkännande av de ändrade villkoren.',
    modificationNotice: 'Meddelande om Ändringar',
    modificationPoint1: 'Vi kommer att meddela registrerade användare om eventuella väsentliga ändringar i dessa villkor via e-post minst 30 dagar innan de träder i kraft.',
    modificationEffect: 'Effekt av Ändringar',
    modificationPoint2: 'Ändringar kommer inte att tillämpas retroaktivt och kommer endast att påverka framtida användning av våra tjänster. Tidigare versioner av villkoren kommer att finnas tillgängliga på begäran.',
    modificationAcceptance: 'Ditt Godkännande',
    
    // Data Security section
    dataSecurityTitle: 'Datasäkerhet',
    dataSecurityText: 'Vi har vidtagit lämpliga säkerhetsåtgärder för att skydda dina personuppgifter:',
    secureStorageTitle: 'Säker lagring',
    secureStorageText: 'Data lagras säkert med kryptering',
    accessControlTitle: 'Åtkomstkontroll',
    accessControlText: 'Strikta åtkomstbegränsningar till dina data',
    regularUpdatesTitle: 'Regelbundna uppdateringar',
    regularUpdatesText: 'Frekventa säkerhetsuppdateringar och patchar',
    dataMinimizationTitle: 'Dataminimering',
    dataMinimizationText: 'Vi samlar endast in det som är nödvändigt',
    
    // Privacy Contact Us section
    privacyContactTitle: 'Kontakta Oss',
    privacyContactText: 'Om du har frågor om vår integritetspolicy eller hur vi hanterar dina personuppgifter, vänligen kontakta oss:',
    privacyEmail: 'E-post: privacy@sandvikenmarathon.se',
    privacyPhone: 'Telefon: +46 123 456 789',
    privacyAddress: 'Adress: Sandviken Marathon, Storgatan 1, 811 80 Sandviken, Sverige',
    
    // Data Retention section
    dataRetentionTitle: 'Datalagring',
    dataRetentionText: 'Vi behåller dina personuppgifter endast så länge som det är nödvändigt för de ändamål för vilka de samlades in.',
    registrationDataRetention: 'Registreringsdata',
    registrationDataRetentionText: 'Behålls i 2 år efter evenemanget',
    contactDataRetention: 'Kontaktdata',
    contactDataRetentionText: 'Behålls i 1 år efter senaste kontakten',
    marketingDataRetention: 'Marknadsföringsdata',
    marketingDataRetentionText: 'Behålls tills du väljer bort',
    paymentInfoTitle: 'Betalningsinformation',
    paymentInfoText: 'Lagras aldrig på våra servrar',
    
    // Data Minimization section
    dataMinimizationTagline: 'Dataminimering är vår prioritet'
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