// Site-wide constants
export const SITE_CONFIG = {
  name: 'Chance for Souls Foundation',
  description:
    'The foundation seeks to help individuals lead fuller lives by offering them new-found strength and purpose through mental health support, counseling, and community empowerment.',
  email: 'info@chanceforsouls.org',
  phone: '+1 (555) 123-4567',
  address: '123 Foundation St, City, State 12345',
};

export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '/About' },
  { id: 'donation', label: 'Donate', href: '/Donate' },
  { id: 'blog', label: 'Blog', href: '/Blog' },
  { id: 'contact', label: 'Contact', href: '/ContactUs' },
];

export const DONATION_AMOUNTS = [25, 50, 100, 250];

export const DONATION_TYPES = {
  ONE_TIME: 'one-time',
  MONTHLY: 'monthly',
};

export const BREAKPOINTS = {
  MOBILE_SM: 200,
  MOBILE: 375,
  MOBILE_MD: 768,
  NORMAL: 480,
  MAX_NOM: 700,
  MEDIA_LG: 1020,
  MEDIA_XLG: 1440,
};

export const COLORS = {
  DARK_BLUE: 'hsl(233, 26%, 24%)',
  LIME_GREEN: 'hsl(136, 65%, 51%)',
  BRIGHT_CYAN: 'hsl(192, 70%, 51%)',
  GRAYISH_BLUE: 'hsl(233, 8%, 62%)',
  LIGHT_GRAYISH_BLUE: 'hsl(220, 16%, 96%)',
  VERY_LIGHT_GRAY: 'hsl(0, 0%, 98%)',
  WHITE: 'hsl(0, 0%, 100%)',
};

export const SERVICES = [
  {
    id: 'partnerships',
    title: 'Partnerships',
    image: 'images/business-partnership.svg',
    description:
      'To provide platform where institutions and Community Based Organizations come together to work with people for prevention of acts that have the tendency to instigate Mental Health deficits in people, especially children and women; as well as foster effective management and restoration of hope and healing for those already affected.',
  },
  {
    id: 'awareness',
    title: 'Awareness creation Campaigns and Advocacies',
    image: 'images/announcement.svg',
    description:
      'Work with stakeholders to step up campaigns against threats to sound mind as we create awareness for prevention of practices that generate Mental Health challenges.',
  },
  {
    id: 'counselling',
    title: 'Counselling',
    image: 'images/Counseling.svg',
    description:
      'To offer counselling where needed for prevention, management and recovery of persons suffering from depression/trauma.',
  },
  {
    id: 'support',
    title: 'Support',
    image: 'images/charity.svg',
    description:
      'Emotional, financial and material support to identified individuals, persons or groups in need after recovery from Mental Health/emotional brokenness to re-settle them academically, economically and socially for positive productive living.',
  },
];

export const ARTICLES = [
  {
    id: 'video-article',
    type: 'video',
    src: 'videos/CFS_video.mp4',
    author: 'Claire Robinson',
    title: 'The Need support to Children',
    brief:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    id: 'article-2',
    type: 'image',
    src: 'images/image-restaurant.jpg',
    author: 'Wilson Hutton',
    title: 'Treat yourself without worrying about money Our',
    brief:
      'simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
  },
  {
    id: 'article-3',
    type: 'image',
    src: 'images/image-plane.jpg',
    author: 'Wilson Hutton',
    title: 'Take your Easybank card wherever you go',
    brief:
      "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you …",
  },
  {
    id: 'article-4',
    type: 'image',
    src: 'images/image-confetti.jpg',
    author: 'Claire Robinson',
    title: 'Our invite-only Beta accounts are now live!',
    brief:
      "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...",
  },
];

export const SOCIAL_LINKS = [
  { name: 'Facebook', icon: 'images/icon-facebook.svg', url: 'https://web.facebook.com/chanceforsouls' },
  { name: 'Instagram', icon: 'images/icon-instagram.svg', url: 'https://www.instagram.com/chance_for_souls/' },
  { name: 'LinkedIn', icon: 'images/icon-linkedin.svg', url: 'https://www.linkedin.com/company/chance-for-souls-foundation/' },
  { name: 'Twitter', icon: 'images/icon-twitter.svg', url: '#' },
  { name: 'Pinterest', icon: 'images/icon-pinterest.svg', url: '#' },
  { name: 'YouTube', icon: 'images/icon-youtube.svg', url: '#' },
];

export const FOOTER_LINKS = {
  primary: [
    { label: 'About Us', href: 'about.html' },
    { label: 'Contact', href: 'contact.html' },
    { label: 'Blogs', href: 'blogs.html' },
  ],
  secondary: [
    { label: 'Careers', href: 'career.html' },
    { label: 'Support', href: 'suport.html' },
    { label: 'Privacy Policy', href: 'policy.html' },
  ],
};
