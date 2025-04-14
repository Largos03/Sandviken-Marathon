import { writable, derived } from 'svelte/store';

// Default language
export const language = writable('en');

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
    register: 'Anmälan',
    results: 'Resultat',
    contact: 'Kontakt',
    
    // Hero section
    officialEvent: 'Officiellt Evenemang',
    marathon: 'Sandviken Marathon',
    eventDate: '1 apr, 2026',
    heroSubtitle: 'Upplev Sandvikens skönhet i detta oförglömliga löpevenemang',
    registerNow: 'Anmäl dig nu',
    viewCourse: 'Se banan',
    days: 'Dagar',
    hours: 'Timmar',
    minutes: 'Minuter',
    seconds: 'Sekunder',
    
    // Event details section
    premierEvent: 'Det Främsta Löpevenemanget i Sverige',
    joinThousands: 'Delta tillsammans med tusentals löpare från hela världen i detta prestigefyllda maraton genom Sandvikens vackraste vägar',
    raceCategories: 'Tävlingskategorier',
    raceDescription: 'Välj mellan Helmaraton (42,2 km), Halvmaraton (21,1 km) eller 10 km',
    viewCategories: 'Visa kategorier',
    scenicRoute: 'Natursköna Rutter',
    routeDescription: 'Spring genom pittoreska landskap och ikoniska landmärken i Sandviken',
    exploreRoute: 'Utforska banan',
    prizesAwards: 'Priser & Utmärkelser',
    prizesDescription: 'Exklusiva medaljer till alla som går i mål och specialpriser till toppresterande',
    learnMore: 'Läs mer',
    
    // Course section
    theCourse: 'Banan',
    courseIntro: 'Upplev en naturskön rutt som visar upp Sandvikens skönhet, passerar ikoniska landmärken och pittoreska landskap. Vår noggrant utformade bana erbjuder en perfekt balans mellan utmaning och njutning.',
    certifiedRoute: 'AIMS/IAAF-certifierad bana',
    hydrationStations: '8 vätskestationer längs banan',
    flatTerrain: 'Mestadels platt terräng med mjuk stigning',
    medicalSupport: 'Medicinsk support längs hela banan',
    viewDetailedMap: 'Visa detaljerad karta',
    
    // Inaugural event section
    inauguralEvent: 'Första Upplagan',
    bePartOf: 'Var med och skriv historia i det allra första Sandviken Marathon',
    historicOpportunity: 'Var med om något historiskt',
    joinUs: 'Delta i den allra första upplagan av Sandviken Marathon och bli en av våra grundande deltagare. Detta är din chans att skriva historia i Sandvikens första stora maratonevenemang.',
    premiumExperience: 'Premiumupplevelse',
    experienceDescription: 'Professionell tidtagning, live-tracking och fullt banstöd',
    foundingStatus: 'Grundande Deltagarstatus',
    foundingDescription: 'Exklusiv första-års medalj och minnesplakett',
    secureSpot: 'Mer Information',
    
    // CTA section
    limitedSpots: 'Tidig Anmälan',
    secureSpotToday: 'Var med 2026',
    earlyBird: 'Anmälan är öppen med early bird-priser till den 31 oktober 2025',
    learnMore: 'Läs Mer',
    
    // Footer
    privacyPolicy: 'Integritetspolicy',
    terms: 'Villkor',
    copyright: '© 2025 Sandviken Marathon. Alla rättigheter förbehållna.',
    
    // Language switcher
    switchToSwedish: 'English',
    
    // About page
    aboutTitle: 'Om Sandviken Marathon',
    aboutIntro: 'Välkommen till Sandviken Marathon, ett förstklassigt löpevenemang i hjärtat av Sverige. Vårt maraton erbjuder en vacker bana genom natursköna landskap och historiska områden.',
    aboutMission: 'Grundat 2023 har Sandviken Marathon snabbt blivit en favorit bland löpare från hela världen. Vår mission är att främja hälsa, fitness och gemenskap genom löparglädje.',
    eventDetailsTitle: 'Evenemangsdetaljer',
    eventDetailsDesc: 'Maratonet äger vanligtvis rum på sommaren, vilket erbjuder perfekta löpförhållanden med milda temperaturer och vackra omgivningar.',
    
    // Contact page
    contactTitle: 'Kontakta Oss',
    contactSubtitle: 'Vi finns här för att hjälpa till med alla frågor om Sandviken Marathon',
    getInTouch: 'Kontakta Oss',
    contactDesc: 'Har du frågor om Sandviken Marathon? Vi finns här för att hjälpa dig!',
    email: 'E-post',
    phone: 'Telefon',
    address: 'Adress',
    officeHours: 'Öppettider',
    monToFri: 'Måndag till fredag: 9:00 - 17:00',
    weekends: 'Lördag och söndag: Stängt',
    followUs: 'Följ Oss',
    sendMessage: 'Skicka ett Meddelande',
    messageDesc: 'Fyll i formuläret nedan så återkommer vi så snart som möjligt.',
    formName: 'Namn',
    formEmail: 'E-post',
    formSubject: 'Ämne',
    formMessage: 'Meddelande',
    sending: 'Skickar...',
    successMessage: 'Tack för ditt meddelande! Vi återkommer snart.',
    sendButton: 'Skicka Meddelande',
    
    // Course page
    coursePageTitle: 'Banan & Information',
    coursePageIntro: 'Utforska den natursköna rutten genom Sandviken och dess vackra omgivningar. Vår certifierade maratonbana tar dig genom stadens hjärta och längs pittoreska landskap.',
    courseDetailsTitle: 'Baninformation',
    distanceTitle: 'Distans',
    distanceDesc: 'Helmaraton: 42,195 km',
    elevationTitle: 'Höjdskillnad',
    elevationDesc: 'Banan har cirka 135m höjdskillnad.',
    surfaceTitle: 'Underlag',
    surfaceDesc: 'Blandat underlag inklusive asfaltvägar (80%) och kompakta grusvägar (20%).',
    cutoffTitle: 'Tidsgräns',
    cutoffDesc: '6 timmar från starttiden. Deltagare måste hålla en hastighet på minst 8:35 min/km.',
    
    // Results page
    resultsTitle: 'Tävlingsresultat',
    resultsYear: '2026',
    comingSoon: 'Resultat kommer att publiceras här efter det första evenemanget.',
    
    // Register page
    registerTitle: 'Anmälan',
    comingSoon: 'Kommer Snart',
    registrationInfo: 'Anmälan kommer att vara tillgänglig via vår officiella anmälningsplattform. Håll utkik!',
    registrationType: 'Anmälningstyp',
    fullMarathon: 'Helmaraton (42,2 km)',
    halfMarathon: 'Halvmaraton (21,1 km)',
    tenK: '10 km lopp',
    pricing: 'Priser',
    earlyBirdRates: 'Early Bird-priser (Till och med 31 oktober 2025)',
    fullPrice: 'Helmaraton: 750 SEK',
    halfPrice: 'Halvmaraton: 550 SEK',
    tenKPrice: '10 km lopp: 350 SEK',
    registerButton: 'Anmäl Dig Nu',
    
    // Results page
    selectYear: 'Välj år',
    position: 'Position',
    name: 'Namn',
    country: 'Land',
    category: 'Kategori',
    time: 'Tid',
    sweden: 'Sverige',
    menCategory: 'Män 30-39',
    womenCategory: 'Kvinnor 20-29',
    menCategoryYoung: 'Män 20-29',
    previousYears: 'Tidigare år',
    resultsDownload: 'Resultat från tidigare år finns tillgängliga för nedladdning i PDF-format.',
    resultsPdf: 'Resultat (PDF)',
    
    // Course page additional keys
    courseDescription: 'Banan är mestadels platt med några mjuka backar, vilket gör den lämplig för både nybörjare och erfarna löpare som siktar på personliga rekord.',
    courseHighlights: 'Banans höjdpunkter',
    startFinish: 'Start och mål i centrum',
    scenicWaterfront: 'Spring längs den natursköna strandpromenaden',
    historicNeighborhoods: 'Passera genom historiska stadsdelar',
    forestViews: 'Njut av utsikten över omgivande skogar',
    aidStations: 'Vätskestationer',
    aidStationDetails: 'Vätskestationer finns ungefär var 5:e kilometer längs banan och erbjuder vatten, sportdryck och energigel.',
    courseMap: 'Bansträckning',
    courseMapPlaceholder: 'Karta kommer snart',
    elevationProfile: 'Höjdprofil',
    elevationProfilePlaceholder: 'Höjdprofil kommer snart',
    raceDayInfo: 'Tävlingsdagsinformation',
    raceDayDetails: 'Maratonloppet startar kl 08:00 med en tidsgräns på 6 timmar. Deltagare bör anlända minst 1 timme före starttiden för incheckning och uppvärmning.',
    
    // Additional course page keys
    waterStations: 'Vattenstationer',
    waterStationDetails: 'Vattenstationer finns ungefär var 5:e kilometer längs banan',
    medicalStations: 'Medicinska stationer',
    medicalStationDetails: 'Medicinsk support och första hjälp tillgänglig vid utsedda stationer',
    courseMapAlt: 'Sandviken Marathon Course Map',
    startAnimation: 'Start Animation',
    pauseAnimation: 'Pause Animation',
    startTime: 'Start Time',
    startTimeDetails: '8:00 AM - Full Marathon',
    startLocation: 'Start Location',
    startLocationDetails: 'City Center, Sandviken',
    
    // Privacy page
    privacyLastUpdated: 'Senast uppdaterad:',
    privacyDate: '1 maj, 2025',
    privacyIntroTitle: 'Introduktion',
    privacyIntroText: 'Sandviken Marathon ("vi", "vår" eller "oss") respekterar din integritet och är engagerad i att skydda dina personuppgifter. Denna integritetspolicy informerar dig om hur vi hanterar dina personuppgifter när du besöker vår webbplats och berättar om dina integritetsrättigheter.',
    privacyHighlight: 'Detta dokument förklarar hur vi samlar in, använder och skyddar din personliga information. Genom att använda vår webbplats godkänner du villkoren som beskrivs i denna policy.',
    
    // Information We Collect
    infoCollectTitle: 'Information Vi Samlar In',
    infoCollectText: 'Vi kan samla in följande typer av information:',
    personalInfoTitle: 'Personlig Information',
    personalInfoText: 'Namn, e-postadress, telefonnummer när du registrerar dig för våra evenemang',
    contactInfoTitle: 'Kontaktinformation',
    contactInfoText: 'Uppgifter som lämnas när du fyller i vårt kontaktformulär',
    technicalDataTitle: 'Teknisk Data',
    technicalDataText: 'IP-adress, webbläsartyp, operativsystemsinformation',
    usageDataTitle: 'Användningsdata',
    usageDataText: 'Information om hur du interagerar med vår webbplats',
    
    // How We Use Your Information
    infoUseTitle: 'Hur Vi Använder Din Information',
    infoUseText: 'Vi använder dina uppgifter för följande ändamål:',
    eventRegTitle: 'Evenemangsregistrering',
    eventRegText: 'För att registrera dig som deltagare i våra maraton och evenemang',
    relationshipTitle: 'Relationshantering',
    relationshipText: 'För att upprätthålla vår relation med dig och ge support',
    communicationTitle: 'Kommunikation',
    communicationText: 'För att skicka dig information om våra evenemang och tjänster',
    websiteImprovementTitle: 'Webbplatsförbättring',
    websiteImprovementText: 'För att förbättra vår webbplats och tjänster baserat på användarupplevelse',
    securityTitle: 'Säkerhet',
    securityText: 'För att säkerställa säkerheten och korrekt funktion av vår webbplats',
    
    // Cookies section
    cookiesTitle: 'Cookies',
    cookiesText: 'Vår webbplats använder cookies för att skilja dig från andra användare. Detta hjälper oss att ge dig en bra upplevelse och låter oss förbättra vår webbplats.',
    essentialTitle: 'Nödvändiga',
    essentialText: 'Krävs för grundläggande funktionalitet',
    functionalTitle: 'Funktionella',
    functionalText: 'Kommer ihåg dina preferenser',
    analyticsTitle: 'Analys',
    analyticsText: 'Hjälper oss förstå hur besökare använder vår webbplats',
    marketingTitle: 'Marknadsföring',
    marketingText: 'Spårar besökare över webbplatser',
    
    // Terms page
    termsIntro: 'Vänligen läs våra villkor innan du använder vår webbplats eller anmäler dig till evenemang',
    lastUpdated: 'Senast uppdaterad:',
    termsDate: '1 maj, 2025',
    
    // Terms page sections
    agreementToTerms: 'Godkännande av villkor',
    termsAgreementText: 'Dessa villkor utgör ett juridiskt bindande avtal mellan dig och Sandviken Marathon gällande din användning av vår webbplats och deltagande i våra evenemang. Genom att använda vår webbplats eller registrera dig för våra evenemang, samtycker du till att vara bunden av dessa villkor.',
    termsReviewText: 'Vänligen läs dessa villkor noggrant. Genom att besöka denna webbplats eller registrera dig för våra evenemang, bekräftar du att du har läst, förstått och samtycker till att vara bunden av alla villkor som anges häri.',
    
    // Modifications section
    modifications: 'Ändringar',
    modificationsText: 'Vi förbehåller oss rätten att ändra dessa villkor när som helst. Vi kommer att meddela om eventuella ändringar genom att uppdatera datumet "Senast uppdaterad".',
    modificationNotice: 'Notice of Changes',
    modificationPoint1: 'We will notify registered users of any material changes to these Terms via email at least 30 days before they take effect.',
    modificationEffect: 'Effect of Changes',
    modificationPoint2: 'Changes will not apply retroactively and will only affect future use of our services. Previous versions of the Terms will remain available upon request.',
    modificationAcceptance: 'Your Acceptance',
    modificationPoint3: 'If you do not agree with the updated Terms, you should discontinue using our services. Continued use after modifications indicates acceptance of the new Terms.',
    modificationDisclaimer: 'It is your responsibility to review these Terms periodically. Your continued use of the website constitutes acceptance of any modifications.',
    
    // Event Registration
    eventRegistration: 'Evenemangsregistrering',
    registrationText: 'Genom att registrera dig för Sandviken Marathons evenemang, bekräftar och godkänner du följande:',
    physicalFitness: 'Fysisk kondition',
    physicalFitnessText: 'Du är fysiskt vältränad och har inga medicinska tillstånd som skulle förhindra säkert deltagande',
    riskAcceptance: 'Riskacceptans',
    riskAcceptanceText: 'Du förstår att deltagande i idrottsevenemang innebär risk för allvarlig skada',
    nonRefundableFees: 'Icke återbetalningsbara avgifter',
    nonRefundableFeesText: 'Registreringsavgifter är inte återbetalningsbara om inte annat anges i vår återbetalningspolicy',
    scheduleChanges: 'Schemaändringar',
    scheduleChangesText: 'Evenemangsdatum och tider kan ändras på grund av olika omständigheter',
    ruleCompliance: 'Regelefterlevnad',
    ruleComplianceText: 'Du samtycker till att följa alla regler, föreskrifter och anvisningar från evenemangsarrangörer',
    
    // Intellectual Property
    intellectualProperty: 'Immateriella rättigheter',
    intellectualPropertyText: 'Innehållet på vår webbplats, inklusive men inte begränsat till text, grafik, logotyper, bilder, ljudklipp och programvara, ägs av Sandviken Marathon och skyddas av upphovsrätt och andra lagar om immateriell egendom.',
    copyright: 'Upphovsrätt',
    copyrightText: 'Allt innehåll skyddas av upphovsrättslagar och fördrag runt om i världen',
    limitedLicense: 'Begränsad licens',
    limitedLicenseText: 'Du får endast visa och använda vårt innehåll för personligt, icke-kommersiellt bruk',
    restrictions: 'Begränsningar',
    restrictionsText: 'Du får inte reproducera, distribuera, modifiera eller skapa derivatverk från något innehåll',
    ipConclusion: 'All obehörig användning av vår immateriella egendom kan bryta mot upphovsrätt, varumärke och andra lagar och kan leda till rättsliga åtgärder.',
    
    // User Conduct
    userConduct: 'Användaruppförande',
    userConductText: 'När du använder vår webbplats samtycker du till att inte delta i någon av följande förbjudna aktiviteter:',
    conductRule1: 'Använda webbplatsen på något sätt som bryter mot någon tillämplig lag',
    conductRule2: 'Försöka få obehörig åtkomst till någon del av webbplatsen',
    conductRule3: 'Använda webbplatsen för att överföra virus, maskar eller annan skadlig kod',
    conductRule4: 'Utge dig för att vara eller försöka utge dig för att vara Sandviken Marathon',
    
    // Limitation of Liability
    limitationOfLiability: 'Ansvarsbegränsning',
    liabilityText: 'Under inga omständigheter ska Sandviken Marathon, eller dess direktörer, anställda, partners, agenter eller leverantörer, vara ansvariga för indirekta, tillfälliga, särskilda, följdskador eller straffskador, inklusive men inte begränsat till, förlust av vinst, data, användning, goodwill eller andra immateriella förluster, som härrör från:',
    liabilityItem1: 'Din åtkomst till eller användning av eller oförmåga att få åtkomst till eller använda webbplatsen',
    liabilityItem2: 'Något uppträdande eller innehåll från tredje part på webbplatsen',
    liabilityItem3: 'Något innehåll som erhålls från webbplatsen',
    liabilityItem4: 'Obehörig åtkomst, användning eller ändring av dina överföringar eller innehåll',
    liabilityItem5: 'Deltagande i Sandviken Marathons evenemang',
    
    // Data Security
    dataSecurity: 'Datasäkerhet',
    dataSecurityText: 'Vi har vidtagit lämpliga säkerhetsåtgärder för att skydda dina personuppgifter:',
    secureStorage: 'Säker lagring',
    secureStorageText: 'Data lagras säkert med kryptering',
    accessControl: 'Åtkomstkontroll',
    accessControlText: 'Strikta åtkomstbegränsningar till dina data',
    regularUpdates: 'Regelbundna uppdateringar',
    regularUpdatesText: 'Frekventa säkerhetsuppdateringar och patchar',
    dataMinimization: 'Dataminimering',
    dataMinimizationText: 'Vi samlar endast in vad som är nödvändigt',
    
    // Contact Section
    termsContactUs: 'Kontakta oss',
    termsContactText: 'Om du har några frågor om dessa villkor, kontakta oss på:',
    termsEmail: 'E-post:',
    termsEmailAddress: 'terms@sandvikenmarathon.com',
    termsAddress: 'Adress:',
    termsAddressText: 'Sandviken Marathon, Box 123, Sandviken, Sverige',
    termsContactBtn: 'Kontakta oss',
    
    // Contact form validation messages
    nameRequired: 'Namn krävs',
    nameMinLength: 'Namnet måste vara minst 2 tecken',
    emailRequired: 'E-post krävs',
    emailInvalid: 'Ange en giltig e-postadress',
    subjectRequired: 'Ämne krävs',
    subjectMinLength: 'Ämnet måste vara minst 5 tecken',
    messageRequired: 'Meddelande krävs',
    messageMinLength: 'Meddelandet måste vara minst 10 tecken',
    sendButton: 'Skicka meddelande',
    
    // Privacy
    privacyTitle: 'Integritetspolicy',
    privacyIntro: 'Din integritet är viktig för oss. Denna policy förklarar hur vi hanterar dina data.',
    informationCollected: 'Information vi samlar in',
    informationCollectedText: 'Vi samlar in personuppgifter när du registrerar dig för våra evenemang eller använder vår webbplats:',
    personalInfo: 'Personlig information',
    personalInfoText: 'Namn, e-post, telefonnummer och kontaktinformation för nödsituationer för loppregistrering',
    demographicInfo: 'Demografisk information',
    demographicInfoText: 'Ålder, kön och nationalitet för loppkategorier och resultat',
    fitnessInfo: 'Fitness-information',
    fitnessInfoText: 'Tidigare lopptider och medicinska tillstånd relevanta för deltagande',
    paymentInfo: 'Betalningsinformation',
    paymentInfoText: 'Kortuppgifter när du gör ett köp (behandlas säkert av vår betalningsleverantör)',
    usageItems: 'Hur vi använder din information',
    howWeUseInfo: 'Vi använder din information på olika sätt för att tillhandahålla och förbättra våra tjänster:',
    contactCard: 'Kontakt och kommunikation',
    contactCardText: 'För att kommunicera med dig om evenemanget, din registrering och viktiga uppdateringar',
    improvementsCard: 'Tjänsteförbättringar',
    improvementsCardText: 'För att analysera användningsmönster och förbättra vår webbplats och tjänster',
    raceManagementCard: 'Lopphantering',
    raceManagementCardText: 'För att skapa startlistor, registrera lopptider och publicera resultat',
    cookiesTitle: 'Cookies',
    cookiesText: 'Vår webbplats använder cookies för att förbättra din upplevelse och tillhandahålla vissa funktioner.',
    essentialCookies: 'Nödvändiga cookies',
    essentialCookiesText: 'Nödvändiga för grundläggande webbplatsfunktionalitet',
    functionalCookies: 'Funktionella cookies',
    functionalCookiesText: 'Kommer ihåg dina preferenser och inställningar',
    analyticsCookies: 'Analyscookies',
    analyticsCookiesText: 'Hjälper oss förstå hur besökare interagerar med vår webbplats',
    marketingCookies: 'Marknadsföringscookies',
    marketingCookiesText: 'Används för att visa relevanta annonser',
    
    // Add the new translation keys here:
    dataRetentionTitle: 'Datalagring',
    dataRetentionText: 'Vi behåller endast dina personuppgifter så länge som är nödvändigt för att uppfylla de ändamål vi samlade in dem för.',
    retentionPeriodsTitle: 'Lagringsperioder',
    accountInfoTitle: 'Kontoinformation',
    accountInfoText: 'Lagras medan ditt konto är aktivt',
    eventRegRetentionTitle: 'Evenemangsregistrering',
    eventRegRetentionText: 'Sparas i 2 år efter evenemanget',
    marketingPrefsTitle: 'Marknadsföringspreferenser',
    marketingPrefsText: 'Behålls tills du väljer bort',
    paymentInfoTitle: 'Betalningsinformation',
    paymentInfoText: 'Lagras aldrig på våra servrar',
    dataMinimizationTagline: 'Dataminimering är vår prioritet',
    
    yourRightsTitle: 'Dina rättigheter',
    yourRightsText: 'Enligt dataskyddslagar har du rättigheter relaterade till dina personuppgifter:',
    accessTitle: 'Tillgång',
    accessText: 'Begär tillgång till dina personuppgifter',
    correctionTitle: 'Korrigering',
    correctionText: 'Begär korrigering av felaktiga uppgifter',
    deletionTitle: 'Radering',
    deletionText: 'Begär radering av dina personuppgifter',
    restrictionTitle: 'Begränsning',
    restrictionText: 'Begär begränsning av behandling',
    rightsNoteText: 'Du behöver inte betala någon avgift för att få tillgång till dina personuppgifter. Vi kan dock ta ut en rimlig avgift om din begäran är uppenbart ogrundad, repetitiv eller överdriven.',
    
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
    privacyContactTitle: 'Kontakta oss',
    privacyContactText: 'Om du har några frågor om denna integritetspolicy eller våra integritetspraxis, kontakta oss på:',
    privacyContactEmail: 'E-post:',
    privacyContactEmailAddress: 'privacy@sandvikenmarathon.com',
    privacyContactAddress: 'Adress:',
    privacyContactAddressText: 'Sandviken Marathon, PO Box 123, Sandviken, Sweden',
    privacyContactBtn: 'Kontakta oss',
    cookieNoticeText: 'Cookies är aktiverade som standard. Du kan hantera dina inställningar i Integritetspolicyn.',
  }
};

// Helper function to get translation
export function t(key, lang) {
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

// Create a derived store that provides the current translation function
export const tStore = derived(
  language,
  ($language) => (key) => translations[$language]?.[key] || key
);

// Helper to detect browser language
export function detectBrowserLanguage() {
  if (typeof window === 'undefined') return 'en';
  
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang && browserLang.startsWith('sv')) {
    return 'sv';
  }
  return 'en';
} 