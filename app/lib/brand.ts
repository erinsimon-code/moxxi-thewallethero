// Central brand/content constants for The Wallet Hero.
// Keep every page in sync by importing from here instead of hardcoding copy.

export const BRAND = "The Wallet Hero";
export const DOMAIN = "thewallethero.com";
export const SITE_URL = `https://${DOMAIN}`;

// --- Legal / contact details -------------------------------------------
export const LEGAL_NAME = "LifeCycleLoop LLC";
export const ADDRESS = "3 Germay Dr, Unit 4 #3226, Wilmington, DE 19804, United States";
export const PHONE = "+13022080355"; // E.164, used in tel: links
export const PHONE_DISPLAY = "(302) 208-0355";
export const EMAIL = "support@thewallethero.com";

// Used on /privacy, /sms-terms and /terms where the operator must be named explicitly.
export const OPERATOR_LINE = "The Wallet Hero, operated by LifeCycleLoop LLC";

// Required addition to the /sms-terms program description section.
export const TOLL_FREE_NOTE = "Messages are sent from a toll-free number.";

export const TAGLINE = "Be the hero of your own wallet.";

// Broader positioning paragraph used on the homepage and similar overview copy.
export const POSITIONING_PARAGRAPH =
  "The Wallet Hero is an employer-sponsored financial wellness program. Employers offer it to their own employees, who join with a company ID to get 5-minute money lessons, simple budgeting and savings-goal tools, and live workshops on everyday money topics. The program is for current employees of participating employers only and is never open to the public.";

// Word-for-word program description, required on /how-it-works, /sms-terms,
// /privacy and /terms.
export const PROGRAM_DESCRIPTION =
  "The Wallet Hero is an employer-sponsored financial wellness education program operated by LifeCycleLoop LLC. Current employees of participating employers join using a company ID and can choose to receive account notification texts (lesson reminders, learning track due dates, monthly savings-goal check-ins and one-time verification codes) and/or promotional texts (new money lessons, money challenges and live workshops offered by their employer). The Wallet Hero provides general education only and never offers loans, credit, investment products or third-party offers. Participation is voluntary and not a condition of employment.";

// Education-only disclaimer required in the footer of every page except
// /verify, and on /lessons, /tools and /faq.
export const EDUCATION_DISCLAIMER =
  "The Wallet Hero provides general financial education only and does not provide financial, tax, investment or legal advice. The Wallet Hero is not a bank, lender or financial adviser.";

export const POSITIONING_BULLETS = [
  "Education only: The Wallet Hero provides general financial education. It is not a bank, lender, credit counselor, investment adviser or financial planner, and does not provide financial, tax, investment or legal advice.",
  "No loans, credit, debt relief, credit repair, investment products, insurance or third-party offers or ads, ever.",
  "The Wallet Hero never asks for bank account, card or Social Security numbers. Texts never include balances, pay or account details. They only link to the site.",
  "Employers never see an individual employee's budgets, goals or lesson answers, only aggregated participation.",
  "Phone numbers and opt-in consent are never sold, rented or shared with third parties.",
  "Participation is voluntary and not a condition of employment.",
];

export const NO_SHARING_CLAUSE =
  "Phone numbers and opt-in consent are never sold, rented or shared with third parties.";

// Word-for-word legal clause required on /privacy, /sms-terms and /terms.
export const PRIVACY_NO_SHARING_CLAUSE =
  "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.";

export type MessageType = {
  title: string;
  description: string;
};

// Account notifications — 4 items, used word for word everywhere message
// types are listed.
export const ACCOUNT_MESSAGE_TYPES: MessageType[] = [
  {
    title: "Lesson reminders",
    description: "Nudges to start or finish your next 5-minute money lesson.",
  },
  {
    title: "Learning track due dates",
    description: "A heads-up before a learning track your employer assigned is due.",
  },
  {
    title: "Monthly savings-goal check-ins",
    description: "A monthly reminder to review the savings goal you set for yourself.",
  },
  {
    title: "Verification codes",
    description: "One-time verification codes to confirm your mobile number.",
  },
];

// Promotional messages — 3 items, optional and separate from account
// notifications.
export const PROMOTIONAL_MESSAGE_TYPES: MessageType[] = [
  {
    title: "New money lessons",
    description: "Announcements when a new 5-minute money lesson is added.",
  },
  {
    title: "Money challenges",
    description: "Invitations to join short money challenges offered by your employer.",
  },
  {
    title: "Live workshops",
    description: "Invitations to live workshops on everyday money topics.",
  },
];

// Combined list — used wherever the site needs every message type together
// (e.g. /sms-terms, /privacy message-type sections).
export const MESSAGE_TYPES: MessageType[] = [
  ...ACCOUNT_MESSAGE_TYPES,
  ...PROMOTIONAL_MESSAGE_TYPES,
];

// Samples 1–4: account notification examples.
export const ACCOUNT_SAMPLE_MESSAGES: string[] = [
  "The Wallet Hero: Your next 5-minute lesson, Building an Emergency Fund, is ready. Start it at thewallethero.com/lessons. Reply HELP for help, STOP to opt out.",
  "The Wallet Hero: Reminder: finish Budgeting Basics by Fri 12/4 to complete your learning track. Continue at thewallethero.com/my-wallet. Reply STOP to opt out.",
  "The Wallet Hero: Monthly check-in: take 2 minutes to review your savings goal at thewallethero.com/my-wallet. Reply STOP to opt out.",
  "The Wallet Hero: Your verification code is 518362. Enter it at thewallethero.com/verify to confirm your number. Reply HELP for help, STOP to opt out.",
];

// Samples 5–6: promotional examples.
export const PROMOTIONAL_SAMPLE_MESSAGES: string[] = [
  "The Wallet Hero: New lesson added: Smart Holiday Spending in 5 minutes. Watch it at thewallethero.com/lessons. Reply STOP to opt out.",
  "The Wallet Hero: Join your employer's live workshop, Planning for the New Year, on Wed 12/9. Save your spot at thewallethero.com/workshops. Reply STOP to opt out.",
];

// Combined list (1–6) — used wherever the site needs every sample together.
export const SAMPLE_MESSAGES: string[] = [
  ...ACCOUNT_SAMPLE_MESSAGES,
  ...PROMOTIONAL_SAMPLE_MESSAGES,
];

// Box 1 — account notifications consent (optional, unchecked by default).
export const ACCOUNT_CONSENT_LABEL =
  "Account notifications: I agree to receive recurring text messages from The Wallet Hero about my financial wellness program, including lesson reminders, learning track due dates, monthly savings-goal check-ins and one-time verification codes, at the number provided. Consent is not a condition of employment. Message frequency varies. Msg & data rates may apply. Reply HELP for help, STOP to opt out.";

// Box 2 — promotional messages consent (optional, unchecked by default).
export const PROMOTIONAL_CONSENT_LABEL =
  "Promotional messages: I agree to receive recurring promotional text messages from The Wallet Hero about new money lessons, money challenges and live workshops offered by my employer, at the number provided. Consent is not a condition of employment. Up to 4 msgs/month. Msg & data rates may apply. Reply HELP for help, STOP to opt out.";

export const STOP_KEYWORDS = ["STOP", "END", "CANCEL", "UNSUBSCRIBE", "QUIT"];

// /sms-terms, section 3 — frequency note.
export const FREQUENCY_NOTE =
  "Account notification frequency varies based on your learning track. Promotional messages: up to 4 msgs/month.";

// /sms-terms, section 3 — added after the opt-out keywords.
export const DUAL_OPT_OUT_NOTE =
  "You can opt in to account notifications, promotional messages, or both. Replying STOP ends all messages from The Wallet Hero. To stop only promotional messages, contact support@thewallethero.com or (302) 208-0355.";

export const CONSENT_MOBILE_REQUIRED_ERROR =
  "Please enter your mobile number to receive texts, or uncheck the boxes.";

export const CONSENT_MOBILE_INVALID_ERROR =
  "Please enter a valid 10-digit mobile number, or uncheck the boxes.";

export const DEFAULT_TITLE = "The Wallet Hero: Financial Wellness for Employees";
export const DEFAULT_DESCRIPTION =
  "The Wallet Hero is an employer-sponsored financial wellness program with 5-minute money lessons, simple budgeting tools and live workshops for employees.";

// --- /verify copy ---------------------------------------------------------
export const VERIFY_TITLE = "Verify Your Number | The Wallet Hero";

export const VERIFY_PHONE_EMPTY_ERROR = "Please enter your mobile number.";
export const VERIFY_PHONE_INVALID_ERROR = "Please enter a valid 10-digit mobile number.";
export const VERIFY_CODE_EMPTY_ERROR = "Please enter the 6-digit code we texted you.";
export const VERIFY_CODE_INVALID_ERROR = "The code must be 6 digits.";

export const VERIFY_RESEND_SECONDS = 30;

// --- /lessons copy ----------------------------------------------------------
export type LessonItem = {
  title: string;
  topic: string;
};

export const LESSON_ITEMS: LessonItem[] = [
  { title: "Budgeting Basics", topic: "Budgeting" },
  { title: "Building an Emergency Fund", topic: "Saving" },
  { title: "Understanding Your Paycheck", topic: "Paycheck" },
  { title: "Smart Holiday Spending", topic: "Spending" },
  { title: "Setting a Savings Goal", topic: "Goals" },
];

// --- /workshops copy ---------------------------------------------------------
export type WorkshopExample = {
  title: string;
  date: string;
};

export const WORKSHOP_EXAMPLES: WorkshopExample[] = [
  {
    title: "Planning for the New Year",
    date: "Wednesday, December 9, 2026",
  },
  {
    title: "Budgeting for Big Purchases",
    date: "Thursday, January 14, 2027",
  },
];

// --- /faq copy ---------------------------------------------------------
export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Who can join?",
    answer: "The Wallet Hero is for current employees of participating employers only. It is never open to the public.",
  },
  {
    question: "Is it required?",
    answer: "No. Participation is voluntary and not a condition of employment.",
  },
  {
    question: "Is this financial advice?",
    answer: "No, it's general education. The Wallet Hero does not provide financial, tax, investment or legal advice, and is not a bank, lender or financial adviser.",
  },
  {
    question: "Will you ask for my bank or card info?",
    answer: "Never. The Wallet Hero never asks for bank account, card or Social Security numbers.",
  },
  {
    question: "Can my employer see my budget?",
    answer: "No, only aggregated participation. Employers never see an individual employee's budgets, goals or lesson answers.",
  },
  {
    question: "How do I stop texts?",
    answer: "Reply STOP at any time to end all messages from The Wallet Hero. To stop only promotional messages, contact support@thewallethero.com or (302) 208-0355.",
  },
];
