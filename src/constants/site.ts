import aboutConsultationsImg from '@/assets/images/about-consultations.jpg';
import articleDiabetesImg from '@/assets/images/article-diabetes.jpg';
import articleHeartHealthImg from '@/assets/images/article-heart-health.jpg';
import articleKidneyHealthImg from '@/assets/images/article-kidney-health.jpg';
import articleWomensHealthImg from '@/assets/images/article-womens-health.jpg';
import articleChildHealthImg from '@/assets/images/article-child-health.jpg';
import articleNutritionImg from '@/assets/images/article-nutrition.jpg';
import doctorPriyaSharmaImg from '@/assets/images/doctor-priya-sharma.jpg';
import doctorRahulVermaImg from '@/assets/images/doctor-rahul-verma.jpg';
import doctorAnjaliDesaiImg from '@/assets/images/doctor-anjali-desai.jpg';
import doctorKavithaIyerImg from '@/assets/images/doctor-kavitha-iyer.jpg';
import doctorNishaAgarwalImg from '@/assets/images/doctor-nisha-agarwal.jpg';

export const SITE_NAME = 'MyDoctorCapsule';
export const SITE_TAGLINE =
  "India's trusted all-in-one healthcare platform for people who value comfort, credibility, and affordability.";

export const VIEWPORT_ANIMATION = {
  once: true,
  amount: 0.2,
} as const;

export const STATS = [
  { value: 2400, suffix: '+', label: 'Healthcare Providers', icon: 'building' as const },
  { value: 180, suffix: 'K+', label: 'Patient Appointments', icon: 'calendar' as const },
  { value: 4.9, suffix: '★', label: 'Average Platform Rating', icon: 'star' as const, decimals: 1 },
  { value: 67, suffix: '%', label: 'Avg. Practice Growth', icon: 'trending' as const },
] as const;

export const HERO_HIGHLIGHTS = [
  {
    title: 'Real-Time Health Insights',
    description: 'Monitor healthcare insights and performance in real time.',
  },
  {
    title: 'Effortless Booking',
    description: 'Discover, book, and manage healthcare services effortlessly.',
  },
  {
    title: 'DISHA Compliance',
    description: 'Secure healthcare services built around compliance and trust.',
  },
] as const;

export const SPECIALTIES = [
  { name: 'Pediatrics', icon: 'baby' as const },
  { name: 'Pathology', icon: 'flask' as const },
  { name: 'Dentistry', icon: 'smile' as const },
  { name: 'Ophthalmology', icon: 'eye' as const },
  { name: 'General Medicine', icon: 'activity' as const },
  { name: 'Cardiothoracic', icon: 'heart' as const },
  { name: 'Gynecology', icon: 'users' as const },
  { name: 'Dermatology', icon: 'shield' as const },
] as const;

export const WORKFLOW_STEPS = [
  {
    id: 'create',
    title: 'Create',
    stepLabel: 'Step 1 of 5',
    description:
      'From signing up to receiving care at home, every step is designed to be fast, clear, and completely stress-free. No waiting rooms. No paperwork. No confusion.',
  },
  {
    id: 'choose',
    title: 'Choose',
    stepLabel: 'Step 2 of 5',
    description:
      'Select the service you need, find a specialist, order medicine, book a lab test, or request emergency support.',
  },
  {
    id: 'connect',
    title: 'Connect',
    stepLabel: 'Step 3 of 5',
    description:
      'Get matched instantly with a verified doctor, pharmacy partner, or lab — based on your location and availability.',
  },
  {
    id: 'receive-care',
    title: 'Receive Care',
    stepLabel: 'Step 4 of 5',
    description:
      'Consult face-to-face via video, get medicines at your door, or have a sample collector visit your home.',
  },
  {
    id: 'manage',
    title: 'Manage',
    stepLabel: 'Step 5 of 5',
    description:
      'Track all your appointments, prescriptions, lab reports, and health records in one organised dashboard.',
  },
] as const;

export const SERVICES = [
  {
    id: 'consultations',
    title: 'Consultations',
    description: 'Find doctors & book video consultations.',
    detailDescription:
      'Connect with 800+ verified specialists across all medical fields. Book in-clinic or video appointments, receive digital prescriptions, and get second opinions from the comfort of home.',
    tags: [
      'In-clinic booking',
      'Video consultations 24/7',
      'Specialist referrals',
      'Digital prescriptions',
    ],
    image: aboutConsultationsImg,
  },
  {
    id: 'medicines',
    title: 'Medicines',
    description: 'Order medicines & upload prescriptions.',
    detailDescription:
      'Upload a prescription or reorder in one tap. Genuine medicines from verified pharmacy partners, delivered to your door with real-time order tracking.',
    tags: ['Prescription upload', 'Same-day delivery', 'Genuine medicines', 'Order tracking'],
    image:
      'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1000&fit=crop',
  },
  {
    id: 'diagnostics',
    title: 'Diagnostics',
    description: 'Book lab tests & home sample collections.',
    detailDescription:
      'Choose from a wide range of lab tests and health packages. Free home sample collection with reports delivered securely to your dashboard.',
    tags: ['Home sample collection', 'Digital reports', 'Health packages', 'Trusted labs'],
    image:
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1000&fit=crop',
  },
  {
    id: 'emergency',
    title: 'Emergency',
    description: 'Access ambulance & emergency doctor support.',
    detailDescription:
      'One tap to request an ambulance or connect with an emergency doctor. Real-time dispatch tracking so help is never far away.',
    tags: ['24/7 dispatch', 'Live tracking', 'Emergency doctors', 'Rapid response'],
    image:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1000&fit=crop',
  },
  {
    id: 'healthcare-network',
    title: 'Healthcare Network',
    description: 'Discover hospitals & clinics near you.',
    detailDescription:
      'Explore a verified network of hospitals, clinics, and diagnostic centres near you, complete with ratings, specialities, and directions.',
    tags: ['Verified network', 'Ratings & reviews', 'Nearby search', 'Specialities'],
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1000&fit=crop',
  },
] as const;

export const ABOUT_FEATURES = [
  {
    id: 'doctors',
    title: 'Doctors',
    description: 'Find and consult with verified doctors across specialities.',
  },
  {
    id: 'clinics-hospitals',
    title: 'Clinics & Hospitals',
    description: 'Locate and connect with trusted clinics and hospitals near you.',
  },
  {
    id: 'medicines',
    title: 'Medicines',
    description: 'Order medicines and upload prescriptions from your home.',
  },
  {
    id: 'lab-tests',
    title: 'Lab Tests',
    description: 'Book lab tests and home sample collections with ease.',
  },
  {
    id: 'video-consultations',
    title: 'Video Consultations',
    description: 'Consult licensed doctors face-to-face from anywhere.',
  },
  {
    id: 'emergency-support',
    title: 'Emergency Support',
    description: 'Access ambulance services and emergency care promptly.',
  },
] as const;

export const SERVICES_FEATURES = [
  {
    id: 'doctor-consultations',
    title: 'Doctor Consultations',
    description:
      'Connect with healthcare professionals and get medical guidance when you need it.',
  },
  {
    id: 'health-wellness',
    title: 'Health & Wellness',
    description:
      'Support your everyday health with accessible wellness-focused solutions.',
  },
  {
    id: 'medical-assistance',
    title: 'Medical Assistance',
    description: 'Get help navigating healthcare needs and finding the right support.',
  },
  {
    id: 'health-management',
    title: 'Health Management',
    description:
      'Keep your healthcare journey organised with convenient digital solutions.',
  },
  {
    id: 'specialist-support',
    title: 'Specialist Support',
    description: 'Access the right expertise based on your healthcare requirements.',
  },
  {
    id: 'personalised-care',
    title: 'Personalised Care',
    description: 'Healthcare experiences designed around your individual needs.',
  },
] as const;

export const PLATFORM_FEATURES = [
  {
    id: 'doctors',
    title: 'Doctors',
    description: 'Find and consult verified doctors across all specialities.',
  },
  {
    id: 'clinics-hospitals',
    title: 'Clinics & Hospitals',
    description: 'Locate trusted clinics and hospitals near you.',
  },
  {
    id: 'medicines',
    title: 'Medicines',
    description: 'Order medicines and upload prescriptions from home.',
  },
  {
    id: 'lab-tests',
    title: 'Lab Tests',
    description: 'Book lab tests and home sample collections with ease.',
  },
  {
    id: 'video-consultations',
    title: 'Video Consultations',
    description: 'Consult licensed doctors face-to-face from anywhere.',
  },
  {
    id: 'emergency-support',
    title: 'Emergency Support',
    description: 'Access ambulance and emergency care services promptly.',
  },
] as const;

export const HOW_IT_WORKS_FEATURES = [
  {
    id: 'choose-need',
    number: '01',
    title: 'Choose your healthcare need',
    description:
      'Explore the healthcare service or support you need from finding a doctor and booking lab tests to ordering medicines or requesting a video consultation.',
  },
  {
    id: 'connect-professional',
    number: '02',
    title: 'Connect with the right professional',
    description:
      'Connect instantly with a verified healthcare professional or service provider matched to your need, location and availability.',
  },
  {
    id: 'receive-guidance',
    number: '03',
    title: 'Receive guidance and support',
    description:
      'Get the consultation, prescription, test results or medical support you need in person, at home or via video call.',
  },
  {
    id: 'manage-ongoing',
    number: '04',
    title: 'Manage your ongoing healthcare',
    description:
      'Continue managing your healthcare journey with convenient digital access to records, follow-ups, prescriptions and test history.',
  },
] as const;

export const JOURNEY_STEPS = [
  {
    id: 'your-need',
    title: 'Your Need',
    stepLabel: 'Step 1 of 5',
    description:
      'Tell us what you need help with, from everyday health concerns to consultations, tests, medicines, or ongoing care.',
  },
  {
    id: 'find-the-right-care',
    title: 'Find the Right Care',
    stepLabel: 'Step 2 of 5',
    description:
      'Explore relevant healthcare services, specialists, clinics, labs, and care options based on your specific needs.',
  },
  {
    id: 'connect-with-experts',
    title: 'Connect With Experts',
    stepLabel: 'Step 3 of 5',
    description:
      'Choose the right healthcare professional and connect with trusted, verified providers based on availability and care requirements.',
  },
  {
    id: 'receive-support',
    title: 'Receive Support',
    stepLabel: 'Step 4 of 5',
    description:
      'Get the care you need through consultations, diagnostic tests, prescriptions, medicines, or convenient at-home healthcare services.',
  },
  {
    id: 'continue-your-care',
    title: 'Continue Your Care',
    stepLabel: 'Step 5 of 5',
    description:
      'Keep your healthcare journey organized with easy access to medical records, prescriptions, test results, follow-ups, and ongoing support.',
  },
] as const;

export const SERVICES_HIGHLIGHTS = [
  {
    id: 'easy-access',
    title: 'Easy Access',
    description: 'Find and book healthcare services in minutes, from any device.',
  },
  {
    id: 'convenient-experience',
    title: 'Convenient Experience',
    description: 'Everything in one place — no more switching between apps or services.',
  },
  {
    id: 'trusted-professionals',
    title: 'Trusted Professionals',
    description: 'Every doctor and specialist on the platform is fully verified.',
  },
  {
    id: 'digital-first-healthcare',
    title: 'Digital-first Healthcare',
    description: 'Modern tools to manage your health from consultation to follow-up.',
  },
] as const;

export const CONTACT_HELP_TOPICS = [
  'Doctor Consultation',
  'Lab Tests',
  'Medicines',
  "Women's Health",
  "Men's Health",
  'Child Healthcare',
  'Mental Health',
  'Preventive Care',
  'Home Healthcare',
  'Health Records',
  'Insurance & Billing',
  'Other',
] as const;

export const HEALTH_ARTICLES = [
  {
    slug: 1,
    id: 'how-to-control-diabetes',
    tag: 'Diabetes',
    tagBg: '#ffede0',
    tagText: '#ff6200',
    readTime: '5 Min Read',
    title: 'How to Control Diabetes',
    excerpt:
      '5 effective lifestyle changes that make a real difference to blood sugar management.',
    author: 'Dr. Priya Sharma',
    authorPhoto: doctorPriyaSharmaImg,
    date: 'Aug 15, 2026',
    image: articleDiabetesImg,
    content: {
      intro: [
        'Diabetes affects how your body manages blood sugar, and small daily choices can make a significant difference to long-term outcomes. Understanding your numbers and building sustainable habits is often more effective than short-term fixes.',
        'Regular monitoring and working closely with your healthcare provider can help you catch changes early and adjust your routine before small issues become bigger ones.',
      ],
      highlight: 'Consistency in daily habits matters more than any single dramatic change.',
      sections: [
        {
          heading: 'Know Your Blood Sugar Numbers',
          body: 'Understanding your fasting glucose, post-meal levels and HbA1c gives you and your doctor a clear picture of how well your diabetes is managed over time.',
        },
        {
          heading: 'Everyday Habits That Help',
          body: 'Regular meal timing, portion awareness, daily movement and consistent sleep all support steadier blood sugar levels. Small, sustainable changes tend to outlast strict short-term diets.',
        },
        {
          heading: 'When to Seek Professional Care',
          body: 'If you notice frequent thirst, fatigue, blurred vision or wounds that heal slowly, speak with a healthcare professional. Regular check-ups help catch complications early.',
        },
        {
          heading: 'Final Thoughts',
          body: 'Managing diabetes well is a long-term partnership between you and your care team. With the right habits and regular monitoring, most people manage it successfully while living full, active lives.',
        },
      ],
    },
  },
  {
    slug: 2,
    id: 'heart-health-tips',
    tag: 'Heart health',
    tagBg: '#ffe6e6',
    tagText: '#e60000',
    readTime: '5 Min Read',
    title: 'Heart health tips',
    excerpt:
      'Keep your heart pumping strong with these evidence backed habits and lifestyle choices.',
    author: 'Dr. Rahul Verma',
    authorPhoto: doctorRahulVermaImg,
    date: 'Aug 15, 2026',
    image: articleHeartHealthImg,
    content: {
      intro: [
        'Your heart works around the clock, and the habits you build over years matter more than any single lifestyle change. Small, consistent choices around movement, diet and stress can meaningfully lower your long-term risk.',
        'Understanding your key numbers — blood pressure, cholesterol and resting heart rate — gives you and your doctor a clearer picture of your cardiovascular health.',
      ],
      highlight: 'Heart health is built through daily habits, not occasional effort.',
      sections: [
        {
          heading: 'Know Your Numbers',
          body: 'Blood pressure, cholesterol levels and resting heart rate are useful markers your healthcare provider can track over time to flag risk early.',
        },
        {
          heading: 'Everyday Habits That Help',
          body: 'Regular physical activity, a balanced diet lower in processed foods, quality sleep and stress management all support long-term heart health.',
        },
        {
          heading: 'When to Seek Professional Care',
          body: 'Chest discomfort, shortness of breath, irregular heartbeat or unusual fatigue should always be discussed with a healthcare professional promptly.',
        },
        {
          heading: 'Final Thoughts',
          body: 'Small, sustainable changes to daily habits, paired with regular check-ups, go a long way toward protecting your heart for the years ahead.',
        },
      ],
    },
  },
  {
    slug: 3,
    id: 'understanding-kidney-health',
    tag: 'Kidney Health',
    tagBg: '#e4e6ff',
    tagText: '#001eff',
    readTime: '5 Min Read',
    title: 'Understanding Kidney Health',
    excerpt: 'Simple, practical ways to support healthy kidneys and catch warning signs early.',
    author: 'Dr. Priya Sharma',
    authorPhoto: doctorPriyaSharmaImg,
    date: 'Aug 15, 2026',
    image: articleKidneyHealthImg,
    content: {
      intro: [
        'Your kidneys quietly filter waste and balance fluids in your body every day, often without any noticeable symptoms until a problem has progressed. Understanding the basics can help you catch changes early.',
        'Routine blood and urine tests are often the easiest way to monitor kidney function, especially if you have risk factors like diabetes or high blood pressure.',
      ],
      highlight: 'Kidney issues often develop silently, which is why routine checks matter.',
      sections: [
        {
          heading: 'Signs Your Kidneys Need Attention',
          body: 'Changes in urination, persistent swelling, fatigue or unexplained back pain can sometimes signal kidney concerns worth discussing with a doctor.',
        },
        {
          heading: 'Everyday Habits That Help',
          body: 'Staying hydrated, managing blood pressure and blood sugar, and limiting excess salt intake all support healthy kidney function over time.',
        },
        {
          heading: 'When to Seek Professional Care',
          body: 'If you have diabetes, high blood pressure, or a family history of kidney disease, regular screening is especially important, even without symptoms.',
        },
        {
          heading: 'Final Thoughts',
          body: 'Simple daily habits and routine screening can help protect kidney function for the long term, particularly for those at higher risk.',
        },
      ],
    },
  },
  {
    slug: 4,
    id: 'womens-wellness-guide',
    tag: "Women's Health",
    tagBg: '#ffddc5',
    tagText: '#ff6200',
    readTime: '5 Min Read',
    title: "Women's Wellness Guide",
    excerpt:
      'Essential health checks, hormonal milestones and preventive care every woman should know.',
    author: 'Dr. Anjali Desai',
    authorPhoto: doctorAnjaliDesaiImg,
    date: 'Aug 15, 2026',
    image: articleWomensHealthImg,
    content: {
      intro: [
        "Women's health changes throughout every stage of life. From menstrual health and hormonal changes to nutrition, mental wellbeing and preventive care, understanding your body can help you make more informed healthcare decisions.",
        'Regular check-ups and paying attention to changes in your body are important parts of maintaining long-term wellness.',
      ],
      highlight: 'Small concerns are often easier to address when identified early.',
      sections: [
        {
          heading: 'Know Your Body & Hormonal Changes',
          body: "Hormonal changes are a natural part of a woman's life and can affect energy, mood, sleep, skin, menstrual cycles and overall wellbeing. Tracking your cycle can help you notice patterns and changes over time.",
        },
        {
          heading: 'Essential Health Checks',
          body: 'Regular healthcare visits can help you stay informed about menstrual and reproductive health, blood pressure, age-appropriate screenings, nutrition and mental wellbeing.',
        },
        {
          heading: 'Everyday Wellness Matters',
          body: 'Eating well, staying active, prioritizing sleep and looking after your mental wellbeing are everyday habits that support long-term health, not just occasional check-ups.',
        },
        {
          heading: 'When to Seek Professional Care',
          body: "If you notice a persistent or unusual change, don't ignore it. The right guidance can help you understand what your body is telling you.",
        },
        {
          heading: 'Final Thoughts',
          body: "Women's wellness is about understanding your body, staying informed and having access to the right healthcare support at every stage of life.",
        },
      ],
    },
  },
  {
    slug: 5,
    id: 'healthy-eating-for-children',
    tag: 'Child Health',
    tagBg: '#dafffd',
    tagText: '#0090ff',
    readTime: '5 Min Read',
    title: 'Healthy Eating for Children',
    excerpt: 'Building lifelong healthy habits through good nutrition in the early years.',
    author: 'Dr. Kavitha Iyer',
    authorPhoto: doctorKavithaIyerImg,
    date: 'Aug 15, 2026',
    image: articleChildHealthImg,
    content: {
      intro: [
        'Good nutrition in early childhood shapes lifelong eating habits and supports healthy growth and development. What children eat during these formative years matters as much as how much they eat.',
        'Building a positive relationship with food early on can make healthy choices feel natural rather than restrictive as children grow.',
      ],
      highlight: 'Habits formed in early childhood tend to last a lifetime.',
      sections: [
        {
          heading: 'Building Balanced Meals',
          body: 'Aim for a mix of fruits, vegetables, whole grains, protein and healthy fats at meals, offering variety so children get a broad range of nutrients.',
        },
        {
          heading: 'Everyday Habits That Help',
          body: "Regular meal times, limiting sugary snacks and drinks, and involving children in meal preparation can all support healthier eating patterns over time.",
        },
        {
          heading: 'When to Seek Professional Care',
          body: "If you have concerns about your child's growth, appetite or eating habits, a pediatrician or nutritionist can offer guidance tailored to their needs.",
        },
        {
          heading: 'Final Thoughts',
          body: 'Small, consistent efforts around family meals and variety can set children up with healthy habits that last well into adulthood.',
        },
      ],
    },
  },
  {
    slug: 6,
    id: 'nutrition-fundamentals',
    tag: 'Diabetes',
    tagBg: '#fff1f9',
    tagText: '#ff0073',
    readTime: '5 Min Read',
    title: 'Nutrition Fundamentals',
    excerpt: 'What your body actually needs and how to give it consistently without fad diets.',
    author: 'Dr. Nisha Agarwal',
    authorPhoto: doctorNishaAgarwalImg,
    date: 'Aug 15, 2026',
    image: articleNutritionImg,
    content: {
      intro: [
        "Good nutrition isn't about strict rules or fad diets, it's about consistently giving your body what it actually needs. Understanding the basics can help you make sustainable choices that fit your life.",
        'A balanced approach that includes a variety of whole foods tends to serve long-term health far better than short-term restrictive diets.',
      ],
      highlight: 'Consistency with whole foods beats any short-term fad diet.',
      sections: [
        {
          heading: 'What Your Body Actually Needs',
          body: 'A balanced diet includes carbohydrates, protein, healthy fats, vitamins and minerals, each playing a distinct role in how your body functions and repairs itself.',
        },
        {
          heading: 'Everyday Habits That Help',
          body: 'Cooking more meals at home, reading labels, staying hydrated and eating mindfully all support consistent, sustainable nutrition without extreme restriction.',
        },
        {
          heading: 'When to Seek Professional Care',
          body: 'If you have specific health conditions, allergies or are considering major dietary changes, a registered dietitian can help tailor a plan to your needs.',
        },
        {
          heading: 'Final Thoughts',
          body: 'Sustainable nutrition is built on everyday consistency, not perfection. Small, lasting changes to your regular diet tend to outperform any short-term fad.',
        },
      ],
    },
  },
] as const;

export const FEATURED_ARTICLES = HEALTH_ARTICLES.slice(0, 3);
export const ALL_ARTICLES = HEALTH_ARTICLES.slice(3, 6);

export function getArticleBySlug(slug: number) {
  return HEALTH_ARTICLES.find((article) => article.slug === slug);
}

export const MOBILE_FEATURES = [
  {
    label: 'Get instant notifications for every confirmed appointment.',
    icon: 'bell' as const,
  },
  {
    label:
      'Stay updated on your appointment status with timely WhatsApp & SMS alerts.',
    icon: 'message' as const,
  },
  {
    label: 'Digitally view all your medical reports — anytime, anywhere.',
    icon: 'chart' as const,
  },
  {
    label:
      'Protect your sensitive medical data with end-to-end encryption.',
    icon: 'lock' as const,
  },
  {
    label: 'Access your account securely with biometric login.',
    icon: 'sync' as const,
  },
] as const;

export const FOOTER_LINKS = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact Us', href: '/contact' },
  ],
  legal: [
    { label: 'DISHA Compliance', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
} as const;

export const CTA_META = [
  'Setup in under 10 minutes',
  'DISHA Compliant',
  'Cancel anytime',
] as const;
