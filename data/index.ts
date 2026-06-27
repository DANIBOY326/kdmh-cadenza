import type {
  Stat,
  FeatureCard,
  BenefitCard,
  Step,
  Testimonial,
  FaqItem,
} from "@/types";

// ─── About Stats ───────────────────────────────────────────────────────────────
export const stats: Stat[] = [
  { value: 200, suffix: "+", label: "Contestants" },
  { value: 12, suffix: "", label: "Expert Judges" },
  { value: 2, suffix: "", label: "Seasons Held" },
  { value: 8, suffix: "+", label: "Winners Produced" },
];

// ─── Why Join ─────────────────────────────────────────────────────────────────
export const whyJoinCards: FeatureCard[] = [
  {
    icon: "Mic2",
    title: "Discover Your Talent",
    description:
      "Uncover the full depth of your God-given musical gift in a supportive, professional environment built to push you further.",
  },
  {
    icon: "Globe",
    title: "Gain Exposure",
    description:
      "Perform before a live audience, industry judges, and a growing online community that celebrates musical excellence.",
  },
  {
    icon: "Users",
    title: "Professional Mentorship",
    description:
      "Learn directly from seasoned music professionals who will sharpen your artistry, stage presence, and creative vision.",
  },
  {
    icon: "TrendingUp",
    title: "Build Confidence",
    description:
      "Step out of your comfort zone, overcome stage fear, and emerge as a bold, assured performer ready for any stage.",
  },
  {
    icon: "Music",
    title: "Connect With Musicians",
    description:
      "Build lasting friendships and creative partnerships with like-minded musicians who share your faith and passion.",
  },
  {
    icon: "Sparkles",
    title: "Grow Spiritually",
    description:
      "Experience a competition rooted in faith where your artistry and spiritual growth walk hand in hand toward excellence.",
  },
];

// ─── Winner Benefits ──────────────────────────────────────────────────────────
export const benefits: BenefitCard[] = [
  {
    icon: "Trophy",
    title: "Cash Prize",
    description: "Win a substantial cash reward that recognises and celebrates your musical excellence.",
    highlight: true,
  },
  {
    icon: "Radio",
    title: "Music Promotion",
    description:
      "Get your music amplified across digital platforms, playlists, and our growing audience network.",
  },
  {
    icon: "Star",
    title: "Professional Exposure",
    description:
      "Be featured in media spotlights, interviews, and press coverage that positions you for your next chapter.",
  },
  {
    icon: "BookOpen",
    title: "Mentorship Program",
    description:
      "Access ongoing guidance from industry veterans committed to accelerating your musical journey.",
  },
  {
    icon: "Award",
    title: "Official Recognition",
    description:
      "Receive a prestigious Cadenza certificate and award that validates your talent to the world.",
  },
  {
    icon: "Mic",
    title: "Performance Opportunities",
    description:
      "Unlock invitations to headline events, concerts, and collaborative performances beyond the competition.",
  },
];

// ─── Participation Steps ──────────────────────────────────────────────────────
export const steps: Step[] = [
  {
    step: 1,
    title: "Pay Registration Fee",
    description:
      "Transfer ₦500 to the designated King D Music Hub account at Moniepoint Microfinance Bank.",
    icon: "CreditCard",
  },
  {
    step: 2,
    title: "Complete Registration Form",
    description:
      "Fill out the online registration form with your details and attach proof of payment.",
    icon: "ClipboardList",
  },
  {
    step: 3,
    title: "Attend Virtual Audition",
    description:
      "Join your scheduled audition session via Google Meet and perform before our panel of judges.",
    icon: "Video",
  },
  {
    step: 4,
    title: "Await Results",
    description:
      "Results are announced through our official channels. Shortlisted contestants proceed to the next round.",
    icon: "Bell",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Salami Elizabeth Oyiza",
    role: "Season 2 - Stage 4",
    content:
      "Amazing! Amazing! Platform called Cadenza. This platform brings together a lot of people across world to compete & share ideas. If you think you know music, please join us in Cadenza, you'll learn, unlearn, learn alot more about music.",
        season: "Season 2",
  },
  {
    id: "2",
    name: "Ogbonyomi Zion Anuoluwapo",
    role: "Season 2 - Stage 4",
    content:
      "This competition has brought me to the understanding that i need to come out of my shell to the limelight. I was able to face the camera, sing wonderfully and express myself confidently.",
        season: "Season 2",
  },
  {
    id: "3",
    name: "Peace Kanyinsola Odofin",
    role: "Season 2 - 3rd Place Winner 2025",
    content:
      "I almost didn't sign up because I didn't think I was good enough. Cadenza proved me wrong. Speaking about my progress, my musical aspect, i have improved so well due to the consistency, music mentorship, even when it does not look easy, but the challenge was worth it.",
        season: "Season 2",
  },
  {
    id: "4",
    name: "Baba Ashira",
    role: "Season 2 - Winner 2025",
    content:
      "This has taught me to be more discipline when it comes to keeping to time, it helped me to know and understand my voice better and songs that fits my voice and vocal range. Also, it gave me an opportunity to grow in music with vocal coaches offerings that are rare.",
       season: "Season 2",
  },
  {
    id: "5",
    name: "Praise Mackson",
    role: "Season 2 Contestant",
    content:
      "I'm priviledged to be part of this amazing platform - Cadenza Gospel Singing Contest. It has been an amazing journey so far from stage 1 through stage.",
   
    season: "Season 2",
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export const faqItems: FaqItem[] = [
  {
    question: "Who can participate in Cadenza Music Season 3.0?",
    answer:
      "Cadenza is open to all vocalists and musicians who are passionate about music and faith. Whether you're a solo vocalist, instrumentalist, or both — if you have a gift and the desire to grow, you are welcome. There is no strict age limit, but participants should be 16 years and above.",
  },
  {
    question: "Is participation fully virtual?",
    answer:
      "Yes. Cadenza Music Season 3.0 is entirely virtual. All auditions and subsequent rounds are conducted via Google Meet, meaning you can participate from anywhere in Nigeria or abroad.",
  },
  {
    question: "How much is the registration fee?",
    answer:
      "The registration fee is ₦500. This fee covers the cost of processing your application and scheduling your audition session. Payment is made via bank transfer to the designated King D Music Hub account.",
  },
  {
    question: "How will auditions be conducted?",
    answer:
      "Auditions are held virtually via Google Meet. After completing your registration and payment, you will receive a scheduled audition time. During the audition, you will perform before a panel of 2–3 professional judges who will evaluate your vocal quality, stage presence, creativity, and musicality.",
  },
  {
    question: "Can I participate from outside my state?",
    answer:
      "Absolutely. Because the competition is fully virtual, your physical location within Nigeria — or even outside the country — does not affect your eligibility. All you need is a stable internet connection and a device with a camera and microphone.",
  },
  {
    question: "When does registration open and close?",
    answer:
      "Registration opens on July 1, 2026 and closes on July 31, 2026. We strongly encourage you to register early to secure your spot, as slots are limited and allocated on a first-come, first-served basis.",
  },
  {
    question: "What happens after I register?",
    answer:
      "Once your registration and payment are confirmed, you will receive an email with your audition schedule. Ensure you check your spam folder. On the day of your audition, simply join the Google Meet link provided at your scheduled time and perform your piece.",
  },
  {
    question: "What genres of music are accepted?",
    answer:
      "Cadenza celebrates a wide range of musical expressions rooted in faith and creativity. Gospel, contemporary Christian music, Afro-gospel, worship, and faith-inspired originals are all welcomed. What matters most is the authenticity and excellence of your performance.",
  },
];
