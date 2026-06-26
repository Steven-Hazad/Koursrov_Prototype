import { useState, useEffect, createContext, useContext } from "react";
import {
  Home,
  BarChart2,
  Plus,
  MessageCircle,
  User,
  Search,
  Bell,
  TrendingUp,
  TrendingDown,
  MapPin,
  Shield,
  Star,
  ChevronRight,
  ArrowLeft,
  Send,
  FileText,
  CheckCircle,
  AlertCircle,
  Package,
  X,
  Check,
  Phone,
  Sprout,
  Image as ImageIcon,
  Paperclip,
  Trash2,
  Loader2,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/* ─── TRANSLATIONS ───────────────────────────────────────── */

const translations = {
  en: {
    // General
    farmerView: "Farmer View",
    buyerView: "Buyer View",
    prototype: "Prototype",
    tagline: "Rice Market Platform · Cambodia",
    tapNav: "Tap the nav to explore · Switch Farmer / Buyer above",
    // Nav
    home: "Home",
    prices: "Prices",
    post: "Post",
    messages: "Messages",
    profile: "Profile",
    findRice: "Find Rice",
    trace: "Trace",
    // Splash
    splashLine: "Fair prices, straight from the field",
    // Login
    loginAs: "Continue as",
    phoneNumber: "Phone Number",
    phoneHint: "We'll send a 6-digit code to verify it's you",
    continueBtn: "Continue",
    enterCode: "Enter the code",
    codeHint: "Code sent to",
    changeNumber: "Change number",
    resendCode: "Resend code",
    resendIn: "Resend in",
    verifyBtn: "Verify & Continue",
    or: "or",
    continueGuest: "Continue as Guest",
    newHere: "New to SrovChlart? Just enter your number — we'll set up your account.",
    // Farmer Home
    goodMorning: "Good morning,",
    verifiedFarmer: "Verified Farmer",
    todayPrices: "Today's Market Prices",
    viewAll: "View all →",
    myListings: "My Active Listings",
    add: "+ Add",
    buyerMessages: "Buyer Messages",
    seeAll: "See all →",
    priceAlertActive: "Price Alert Active",
    priceAlertDesc: "Jasmine ≥ 2,500 KHR/kg · monitoring daily",
    live: "Live",
    inquiries: "inquiries",
    inquiry_one: "inquiry",
    // Prices
    marketPrices: "Market Prices",
    updatedToday: "Updated today · Jun 25, 2026",
    thirtyDayTrend: "30-Day Trend",
    provincePrices: "Province Prices",
    setPriceAlert: "Set price alert",
    vsYesterday: "vs yesterday",
    // Post
    postHarvest: "Post Harvest",
    postSubtitle: "List your rice for buyers to find",
    riceVariety: "Rice Variety",
    quantity: "Quantity",
    askingPrice: "Asking Price",
    marketRateToday: "Market rate today: 2,450 KHR/kg",
    province: "Province",
    availableFrom: "Available From",
    photoOptional: "Photo (Optional)",
    tapToUpload: "Tap to upload rice photo",
    changePhoto: "Tap to change photo",
    removePhoto: "Remove",
    uploading: "Uploading...",
    photoAdded: "Photo added",
    postListing: "Post Listing",
    listingLive: "Listing is Live!",
    listingLiveDesc: "Your harvest listing is now visible to buyers across Cambodia.",
    backToHome: "Back to Home",
    // Messages
    conversations: "conversations",
    negotiating: "Negotiating",
    confirmed: "Confirmed",
    confirmDeal: "Confirm Deal",
    decline: "Decline",
    typeMessage: "Type a message...",
    attachPhoto: "Attach photo",
    typing: "typing...",
    delivered: "Delivered",
    sent: "Sent",
    online: "Online",
    lastSeen: "Last seen",
    dealConfirmedMsg: "Deal confirmed! 🎉",
    declinedMsg: "Offer declined.",
    // Profile
    transactions: "Transactions",
    tonsSold: "Tons Sold",
    buyersRated: "Buyers Rated",
    transactionHistory: "Transaction History",
    buyerReviews: "Buyer Reviews",
    // Buyer Home
    welcomeBack: "Welcome back,",
    verifiedBuyer: "Verified Buyer",
    newToday: "New Today",
    activeOrders: "Active Orders",
    savedFarmers: "Saved Farmers",
    pickup: "Pickup",
    // Find Rice
    listingsFound: "listings found",
    verifiedOnly: "Verified sellers only",
    allProvinces: "All Provinces",
    all: "All",
    // Listing detail
    listingDetail: "Listing Detail",
    priceVsMarket: "Price vs Market",
    askingPriceLabel: "Asking Price",
    marketRateLabel: "Market Rate",
    belowMarket: "below market rate — good deal",
    aboveMarket: "above market rate",
    openChat: "Open In-App Chat",
    viewTraceability: "View Traceability Report",
    // Traceability
    traceabilityReport: "Traceability Report",
    traceSubtitle: "Supply chain record for export & audit",
    reportId: "Report ID",
    variety: "Variety",
    quantityLabel: "Quantity",
    harvestDate: "Harvest Date",
    transaction: "Transaction",
    farmOrigin: "Farm Origin",
    farmer: "Farmer",
    farmSize: "Farm Size",
    verification: "Verification",
    transactionChain: "Transaction Chain",
    downloadPdf: "Download PDF Report",
    // Provinces
    phonmPenh: "Phnom Penh",
    kampongCham: "Kampong Cham",
    preyVeng: "Prey Veng",
    battambang: "Battambang",
    kandal: "Kandal",
    kampongThom: "Kampong Thom",
    siemReap: "Siem Reap",
  },
  km: {
    // General
    farmerView: "ទស្សនៈកសិករ",
    buyerView: "ទស្សនៈអ្នកទិញ",
    prototype: "គំរូ",
    tagline: "វេទិកាទីផ្សារអង្ករ · កម្ពុជា",
    tapNav: "ចុចរបាររុករក · ប្ដូររវាងកសិករ / អ្នកទិញ",
    // Nav
    home: "ផ្ទះ",
    prices: "តម្លៃ",
    post: "ប្រកាស",
    messages: "សារ",
    profile: "គណនី",
    findRice: "រកអង្ករ",
    trace: "តាមដាន",
    // Splash
    splashLine: "តម្លៃយុត្តិធម៌ ផ្ទាល់ពីចម្ការ",
    // Login
    loginAs: "បន្តក្នុងនាមជា",
    phoneNumber: "លេខទូរស័ព្ទ",
    phoneHint: "យើងនឹងផ្ញើលេខកូដ៦ខ្ទង់ ដើម្បីផ្ទៀងផ្ទាត់",
    continueBtn: "បន្ត",
    enterCode: "បញ្ចូលលេខកូដ",
    codeHint: "កូដបានផ្ញើទៅ",
    changeNumber: "ប្ដូរលេខទូរស័ព្ទ",
    resendCode: "ផ្ញើកូដម្ដងទៀត",
    resendIn: "ផ្ញើម្ដងទៀតក្នុង",
    verifyBtn: "ផ្ទៀងផ្ទាត់ & បន្ត",
    or: "ឬ",
    continueGuest: "បន្តជាភ្ញៀវ",
    newHere: "ថ្មីលើ SrovChlart? គ្រាន់តែបញ្ចូលលេខទូរស័ព្ទ — យើងនឹងរៀបចំគណនីឲ្យលោកអ្នក។",
    // Farmer Home
    goodMorning: "អរុណសួស្ដី,",
    verifiedFarmer: "កសិករបានផ្ទៀងផ្ទាត់",
    todayPrices: "តម្លៃទីផ្សារថ្ងៃនេះ",
    viewAll: "មើលទាំងអស់ →",
    myListings: "បញ្ជីដំណូរសកម្ម",
    add: "+ បន្ថែម",
    buyerMessages: "សារពីអ្នកទិញ",
    seeAll: "មើលទាំងអស់ →",
    priceAlertActive: "ការជូនដំណឹងតម្លៃសកម្ម",
    priceAlertDesc: "ម្លិះ ≥ ២,៥០០ រៀល/គ.ក្រ · ត្រួតពិនិត្យប្រចាំថ្ងៃ",
    live: "សកម្ម",
    inquiries: "សំណួរ",
    inquiry_one: "សំណួរ",
    // Prices
    marketPrices: "តម្លៃទីផ្សារ",
    updatedToday: "ធ្វើបច្ចុប្បន្នភាព · ២៥ មិថុនា ២០២៦",
    thirtyDayTrend: "និន្នាការ ៣០ ថ្ងៃ",
    provincePrices: "តម្លៃតាមខេត្ត",
    setPriceAlert: "កំណត់ការជូនដំណឹងតម្លៃ",
    vsYesterday: "បើប្រៀបធៀបម្សិលមិញ",
    // Post
    postHarvest: "ប្រកាសដំណូរ",
    postSubtitle: "ប្រកាសអង្ករដើម្បីឲ្យអ្នកទិញរក",
    riceVariety: "ប្រភេទអង្ករ",
    quantity: "បរិមាណ",
    askingPrice: "តម្លៃស្នើ",
    marketRateToday: "តម្លៃទីផ្សារថ្ងៃនេះ: ២,៤៥០ រៀល/គ.ក្រ",
    province: "ខេត្ត",
    availableFrom: "ចាប់ពី",
    photoOptional: "រូបថត (ស្រេចចិត្ត)",
    tapToUpload: "ចុចដើម្បីផ្ទុករូបថតអង្ករ",
    changePhoto: "ចុចដើម្បីប្ដូររូបថត",
    removePhoto: "លុប",
    uploading: "កំពុងផ្ទុក...",
    photoAdded: "បានបន្ថែមរូបថត",
    postListing: "ប្រកាស",
    listingLive: "បញ្ជីដំណូរបានប្រកាស!",
    listingLiveDesc: "បញ្ជីដំណូររបស់អ្នកឥឡូវនេះអ្នកទិញទូទាំងប្រទេសអាចមើលឃើញ។",
    backToHome: "ត្រឡប់ទៅផ្ទះ",
    // Messages
    conversations: "ការសន្ទនា",
    negotiating: "កំពុងចរចា",
    confirmed: "បានបញ្ជាក់",
    confirmDeal: "បញ្ជាក់កិច្ចព្រមព្រៀង",
    decline: "បដិសេធ",
    typeMessage: "វាយសារ...",
    attachPhoto: "ភ្ជាប់រូបថត",
    typing: "កំពុងវាយ...",
    delivered: "បានទទួល",
    sent: "បានផ្ញើ",
    online: "កំពុងប្រើ",
    lastSeen: "ឃើញចុងក្រោយ",
    dealConfirmedMsg: "កិច្ចព្រមព្រៀងបានបញ្ជាក់! 🎉",
    declinedMsg: "ការផ្ដល់ជូនត្រូវបានបដិសេធ។",
    // Profile
    transactions: "ប្រតិបត្តិការ",
    tonsSold: "តោនបានលក់",
    buyersRated: "អ្នកទិញបានវាយតម្លៃ",
    transactionHistory: "ប្រវត្តិប្រតិបត្តិការ",
    buyerReviews: "ការវាយតម្លៃពីអ្នកទិញ",
    // Buyer Home
    welcomeBack: "សូមស្វាគមន៍,",
    verifiedBuyer: "អ្នកទិញបានផ្ទៀងផ្ទាត់",
    newToday: "ថ្មីថ្ងៃនេះ",
    activeOrders: "ការបញ្ជាទិញសកម្ម",
    savedFarmers: "កសិករដែលបានរក្សាទុក",
    pickup: "ទទួលទំនិញ",
    // Find Rice
    listingsFound: "បញ្ជីដំណូរ",
    verifiedOnly: "លក្ខ័ណ្ឌ​ ​អ្នកលក់ដែលបានផ្ទៀងផ្ទាត់",
    allProvinces: "គ្រប់ខេត្ត",
    all: "ទាំងអស់",
    // Listing detail
    listingDetail: "ព័ត៌មានលម្អិត",
    priceVsMarket: "តម្លៃ vs ទីផ្សារ",
    askingPriceLabel: "តម្លៃស្នើ",
    marketRateLabel: "តម្លៃទីផ្សារ",
    belowMarket: "ក្រោមតម្លៃទីផ្សារ — ល្អ",
    aboveMarket: "លើសតម្លៃទីផ្សារ",
    openChat: "បើកការជជែកក្នុងកម្មវិធី",
    viewTraceability: "មើលរបាយការណ៍តាមដាន",
    // Traceability
    traceabilityReport: "របាយការណ៍តាមដាន",
    traceSubtitle: "កំណត់ហេតុខ្សែអង្គភាពសម្រាប់នាំចេញ",
    reportId: "លេខកូដរបាយការណ៍",
    variety: "ប្រភេទ",
    quantityLabel: "បរិមាណ",
    harvestDate: "ថ្ងៃប្រមូលផល",
    transaction: "ប្រតិបត្តិការ",
    farmOrigin: "ប្រភពចម្ការ",
    farmer: "កសិករ",
    farmSize: "ទំហំចម្ការ",
    verification: "ការផ្ទៀងផ្ទាត់",
    transactionChain: "ខ្សែប្រតិបត្តិការ",
    downloadPdf: "ទាញយករបាយការណ៍ PDF",
    // Provinces
    phonmPenh: "ភ្នំពេញ",
    kampongCham: "កំពង់ចាម",
    preyVeng: "ព្រៃវែង",
    battambang: "បាត់ដំបង",
    kandal: "កណ្ដាល",
    kampongThom: "កំពង់ធំ",
    siemReap: "សៀមរាប",
  },
};

type Lang = "en" | "km";
type T = typeof translations.en;

const LangContext = createContext<{ lang: Lang; t: T; setLang: (l: Lang) => void }>({
  lang: "en",
  t: translations.en,
  setLang: () => {},
});

function useLang() {
  return useContext(LangContext);
}

/* ─── DATA ───────────────────────────────────────────────── */

const priceHistory = [
  { day: "Jun 1", jasmine: 2150, white: 1580, fragrant: 1920 },
  { day: "Jun 5", jasmine: 2200, white: 1600, fragrant: 1950 },
  { day: "Jun 9", jasmine: 2180, white: 1570, fragrant: 1980 },
  { day: "Jun 13", jasmine: 2320, white: 1640, fragrant: 2050 },
  { day: "Jun 17", jasmine: 2280, white: 1620, fragrant: 2020 },
  { day: "Jun 21", jasmine: 2400, white: 1680, fragrant: 2120 },
  { day: "Jun 25", jasmine: 2450, white: 1700, fragrant: 2180 },
];

const riceVarietiesData = (t: T) => [
  { id: "jasmine", name: t.lang === "km" ? "អង្ករម្លិះ" : "Jasmine Rice", khmer: "អង្ករម្លិះ", short: t.lang === "km" ? "ម្លិះ" : "Jasmine", price: 2450, prev: 2400 },
  { id: "white", name: t.lang === "km" ? "អង្ករស" : "White Rice", khmer: "អង្ករស", short: t.lang === "km" ? "ស" : "White", price: 1700, prev: 1720 },
  { id: "fragrant", name: t.lang === "km" ? "អង្ករក្រអូប" : "Fragrant Rice", khmer: "អង្ករក្រអូប", short: t.lang === "km" ? "ក្រអូប" : "Fragrant", price: 2180, prev: 2120 },
];

const listingsData = (t: T) => [
  {
    id: 1,
    farmer: "សុខ ដារ៉ា",
    farmerEn: "Sok Dara",
    province: t.kampongCham,
    variety: t.lang === "km" ? "អង្ករម្លិះ" : "Jasmine Rice",
    qty: t.lang === "km" ? "៨ តោន" : "8 ton",
    price: 2350,
    market: 2450,
    rating: 4.8,
    reviews: 24,
    verified: true,
    available: t.lang === "km" ? "៣ កក្កដា ២០២៦" : "Jul 3, 2026",
    badge: "សដ",
    photo: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa49a?w=600&h=450&fit=crop&q=80",
    avatarPhoto: "https://images.unsplash.com/photo-1602524207003-fd2f81d52ba6?w=200&h=200&fit=crop&q=80",
  },
  {
    id: 2,
    farmer: "ពេជ្រ បុប្ផា",
    farmerEn: "Pich Bopha",
    province: t.preyVeng,
    variety: t.lang === "km" ? "អង្ករស" : "White Rice",
    qty: t.lang === "km" ? "១៥ តោន" : "15 ton",
    price: 1680,
    market: 1700,
    rating: 4.5,
    reviews: 11,
    verified: true,
    available: t.lang === "km" ? "១ កក្កដា ២០២៦" : "Jul 1, 2026",
    badge: "ពប",
    photo: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=600&h=450&fit=crop&q=80",
    avatarPhoto: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=200&h=200&fit=crop&q=80",
  },
  {
    id: 3,
    farmer: "មាស សុភា",
    farmerEn: "Meas Sophea",
    province: t.kandal,
    variety: t.lang === "km" ? "អង្ករក្រអូប" : "Fragrant Rice",
    qty: t.lang === "km" ? "៤.៥ តោន" : "4.5 ton",
    price: 2200,
    market: 2180,
    rating: 4.9,
    reviews: 38,
    verified: true,
    available: t.lang === "km" ? "២៨ មិថុនា ២០២៦" : "Jun 28, 2026",
    badge: "មស",
    photo: "https://images.unsplash.com/photo-1530507629358-44a3c7f5ca29?w=600&h=450&fit=crop&q=80",
    avatarPhoto: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&q=80",
  },
  {
    id: 4,
    farmer: "ជា រិទ្ធ",
    farmerEn: "Chea Rith",
    province: t.kampongThom,
    variety: t.lang === "km" ? "អង្ករម្លិះ" : "Jasmine Rice",
    qty: t.lang === "km" ? "២០ តោន" : "20 ton",
    price: 2400,
    market: 2450,
    rating: 4.2,
    reviews: 7,
    verified: false,
    available: t.lang === "km" ? "១០ កក្កដា ២០២៦" : "Jul 10, 2026",
    badge: "ជរ",
    photo: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=600&h=450&fit=crop&q=80",
    avatarPhoto: "https://images.unsplash.com/photo-1542156822-6924d1a71ace?w=200&h=200&fit=crop&q=80",
  },
];

const messagesData = (t: T) => [
  {
    id: 1,
    buyer: t.lang === "km" ? "ហ៊ឹង អ៊ីមផតស៍" : "Heng Import Co.",
    listing: t.lang === "km" ? "អង្ករម្លិះ · ៨ តោន" : "Jasmine Rice · 8 ton",
    last: t.lang === "km" ? "លោក អាចធ្វើ ២,៣០០ រៀល/គ.ក្រ សម្រាប់ ៨ តោនទាំងអស់ទេ?" : "Can you do 2,300 KHR/kg for the full 8 tons?",
    time: "10:24 AM",
    unread: 2,
    status: "negotiating",
  },
  {
    id: 2,
    buyer: t.lang === "km" ? "ម៉ៅ ផ្លូវ មីលីង" : "Phnom Penh Milling Ltd.",
    listing: t.lang === "km" ? "អង្ករក្រអូប · ៤.៥ តោន" : "Fragrant Rice · 4.5 ton",
    last: t.lang === "km" ? "បានបញ្ជាក់។ យើងនឹងរៀបចំការទទួល ២ កក្កដា។" : "Deal confirmed. We will arrange pickup on Jul 2.",
    time: t.lang === "km" ? "ម្សិលមិញ" : "Yesterday",
    unread: 0,
    status: "confirmed",
  },
  {
    id: 3,
    buyer: t.lang === "km" ? "គឹម សុខា (អ្នកទិញ)" : "Kim Sokha (Buyer)",
    listing: t.lang === "km" ? "អង្ករម្លិះ · ២ តោន" : "Jasmine Rice · 2 ton",
    last: t.lang === "km" ? "កំរិតសំណើម​ប៉ុន្មាន? មានលិខិតអត្តសញ្ញាណទេ?" : "What is the moisture level? Do you have cert?",
    time: "Jun 23",
    unread: 1,
    status: "inquiry",
  },
];

const chatThreadsData = (t: T) => ({
  1: [
    {
      id: "m1",
      from: "buyer",
      text: t.lang === "km" ? "សួស្ដី, ខ្ញុំចាប់អារម្មណ៍លើអង្ករម្លិះ ៨ តោនរបស់លោក។" : "Hello, I am interested in your 8 tons of jasmine rice.",
      time: "10:05 AM",
    },
    {
      id: "m2",
      from: "farmer",
      text: t.lang === "km" ? "បាទ, មានចាប់ពី ៣ កក្កដា។ កំរិតសំណើម ១៤%។" : "Yes, it is available from July 3. Moisture level is 14%.",
      time: "10:08 AM",
    },
    {
      id: "m3",
      from: "buyer",
      text: t.lang === "km" ? "លោក អាចធ្វើ ២,៣០០ រៀល/គ.ក្រ សម្រាប់ ៨ តោនទាំងអស់ទេ?" : "Can you do 2,300 KHR/kg for the full 8 tons?",
      time: "10:24 AM",
    },
  ],
  2: [
    {
      id: "m1",
      from: "buyer",
      text: t.lang === "km" ? "សួស្ដី លោកស្រី សុភា! យើងចង់ទិញអង្ករក្រអូបទាំង ៤.៥ តោន។" : "Hi Sophea! We'd like to buy all 4.5 tons of fragrant rice.",
      time: t.lang === "km" ? "ម្សិលមិញ" : "Yesterday",
    },
    {
      id: "m2",
      from: "farmer",
      text: t.lang === "km" ? "ល្អណាស់! តម្លៃ ២,២០០ រៀល/គ.ក្រ សុខភាពល្អ ១០០%។" : "Great! Price is 2,200 KHR/kg, top quality.",
      time: t.lang === "km" ? "ម្សិលមិញ" : "Yesterday",
    },
    {
      id: "m3",
      from: "buyer",
      text: t.lang === "km" ? "បានបញ្ជាក់។ យើងនឹងរៀបចំការទទួល ២ កក្កដា។" : "Deal confirmed. We will arrange pickup on Jul 2.",
      time: t.lang === "km" ? "ម្សិលមិញ" : "Yesterday",
    },
  ],
  3: [
    {
      id: "m1",
      from: "buyer",
      text: t.lang === "km" ? "សួស្ដី! ខ្ញុំឃើញការប្រកាសអង្ករម្លិះ ២ តោនរបស់លោក។" : "Hi! I saw your jasmine rice listing for 2 tons.",
      time: "Jun 23",
    },
    {
      id: "m2",
      from: "buyer",
      text: t.lang === "km" ? "កំរិតសំណើម​ប៉ុន្មាន? មានលិខិតអត្តសញ្ញាណទេ?" : "What is the moisture level? Do you have cert?",
      time: "Jun 23",
    },
  ],
});

const autoReplyPool = (t: T) => (t.lang === "km"
  ? [
      "យល់ព្រម, ខ្ញុំនឹងពិនិត្យមើល។",
      "តម្លៃនេះអាចចរចាបាន។",
      "សូមអរគុណចំពោះព័ត៌មាន!",
      "យើងអាចរៀបចំការដឹកជញ្ជូនបាន។",
    ]
  : [
      "Got it, let me check on that.",
      "That price could be negotiable.",
      "Thanks for the info!",
      "We can arrange transport on our end.",
    ]);

/* ─── HELPERS ────────────────────────────────────────────── */

function khFont(lang: Lang) {
  return lang === "km" ? { fontFamily: "'Noto Sans Khmer', sans-serif" } : {};
}

function displayFont(lang: Lang) {
  return lang === "km"
    ? { fontFamily: "'Noto Sans Khmer', sans-serif" }
    : { fontFamily: "Outfit, sans-serif" };
}

function PriceChange({ current, prev }: { current: number; prev: number }) {
  const diff = current - prev;
  const pct = ((diff / prev) * 100).toFixed(1);
  const up = diff >= 0;
  return (
    <span className={`inline-flex items-center gap-0.5 text-xs font-medium ${up ? "text-emerald-600" : "text-red-500"}`}>
      {up ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
      {up ? "+" : ""}{pct}%
    </span>
  );
}

function Badge({ text, color }: { text: string; color: string }) {
  const { lang } = useLang();
  return (
    <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full ${color}`} style={khFont(lang)}>{text}</span>
  );
}

function Avatar({ initials, size = "md", photo }: { initials: string; size?: "sm" | "md" | "lg"; photo?: string }) {
  const { lang } = useLang();
  const [errored, setErrored] = useState(false);
  const s = size === "sm" ? "w-7 h-7 text-xs" : size === "lg" ? "w-12 h-12 text-base" : "w-9 h-9 text-sm";
  if (photo && !errored) {
    return (
      <img
        src={photo}
        alt={initials}
        onError={() => setErrored(true)}
        className={`${s} rounded-full object-cover flex-shrink-0 border border-border`}
      />
    );
  }
  return (
    <div className={`${s} rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold flex-shrink-0`} style={khFont(lang)}>
      {initials}
    </div>
  );
}

function ImageWithFallback({ src, alt, className }: { src?: string; alt: string; className?: string }) {
  const [errored, setErrored] = useState(false);
  if (!src || errored) {
    return (
      <div className={`${className} bg-gradient-to-br from-primary/15 to-accent/20 flex items-center justify-center`}>
        <Sprout size={22} className="text-primary/40" />
      </div>
    );
  }
  return <img src={src} alt={alt} onError={() => setErrored(true)} className={className} loading="lazy" />;
}

function StarRow({ rating, count }: { rating: number; count: number }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
      <Star size={11} className="fill-accent text-accent" />
      <span className="font-semibold text-foreground">{rating}</span>
      <span>({count})</span>
    </span>
  );
}

function SectionLabel({ children }: { children: string }) {
  const { lang } = useLang();
  return (
    <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground" style={lang === "km" ? { fontFamily: "'Noto Sans Khmer', sans-serif", textTransform: "none", letterSpacing: 0 } : {}}>{children}</p>
  );
}

/* ─── PHOTO UPLOAD (real file input + preview) ──────────────── */

let __srovPhotoUid = 0;

function PhotoUpload({
  value,
  onChange,
  inputId,
}: {
  value: string | null;
  onChange: (dataUrl: string | null) => void;
  inputId?: string;
}) {
  const { t, lang } = useLang();
  const [loading, setLoading] = useState(false);
  const id = inputId || `srov-photo-${++__srovPhotoUid}`;

  function handleFile(file: File | undefined) {
    if (!file) return;
    setLoading(true);
    const reader = new FileReader();
    reader.onload = () => {
      // tiny artificial delay so the "uploading" state is perceptible/feels real
      setTimeout(() => {
        onChange(reader.result as string);
        setLoading(false);
      }, 450);
    };
    reader.readAsDataURL(file);
  }

  if (value) {
    return (
      <div className="relative rounded-xl overflow-hidden border border-border group">
        <img src={value} alt="" className="w-full h-36 object-cover" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
        <label
          htmlFor={id}
          className="absolute bottom-2 left-2 bg-card/90 backdrop-blur px-2.5 py-1.5 rounded-lg text-[11px] font-semibold text-foreground flex items-center gap-1.5 cursor-pointer shadow-sm"
          style={khFont(lang)}
        >
          <ImageIcon size={11} /> {t.changePhoto}
        </label>
        <button
          type="button"
          onClick={() => onChange(null)}
          className="absolute bottom-2 right-2 bg-destructive/90 backdrop-blur px-2.5 py-1.5 rounded-lg text-[11px] font-semibold text-white flex items-center gap-1.5 shadow-sm"
          style={khFont(lang)}
        >
          <Trash2 size={11} /> {t.removePhoto}
        </button>
        <input id={id} type="file" accept="image/*" className="hidden" onChange={(e) => handleFile(e.target.files?.[0])} />
      </div>
    );
  }

  return (
    <label
      htmlFor={id}
      className="bg-card border border-dashed border-border rounded-xl p-4 text-center flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-colors h-36"
    >
      {loading ? (
        <>
          <Loader2 size={20} className="text-primary mb-1 animate-spin" />
          <p className="text-xs text-muted-foreground" style={khFont(lang)}>{t.uploading}</p>
        </>
      ) : (
        <>
          <Package size={20} className="text-muted-foreground mb-1" />
          <p className="text-xs text-muted-foreground" style={khFont(lang)}>{t.tapToUpload}</p>
        </>
      )}
      <input id={id} type="file" accept="image/*" className="hidden" onChange={(e) => handleFile(e.target.files?.[0])} />
    </label>
  );
}

/* ─── SPLASH SCREEN ──────────────────────────────────────── */

function SplashScreen({ onDone }: { onDone: () => void }) {
  const { t, lang } = useLang();
  const [stage, setStage] = useState(0); // 0 = grow in, 1 = settled, 2 = fade out

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 700);
    const t2 = setTimeout(() => setStage(2), 2100);
    const t3 = setTimeout(onDone, 2550);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center h-full px-8 transition-opacity duration-500 relative overflow-hidden"
      style={{ background: "#1A4731", opacity: stage === 2 ? 0 : 1 }}
    >
      {/* Ambient rice field photo, heavily darkened so it reads as texture not a photo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1536304993881-ff6e9eefa49a?w=800&q=60)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: stage >= 1 ? 0.22 : 0,
          transition: "opacity 1200ms ease",
        }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #1A4731 0%, rgba(26,71,49,0.75) 45%, #1A4731 100%)" }} />

      {/* signature mark: three sprouts rising at staggered heights, like rice stalks */}
      <div className="flex items-end gap-3 mb-5 relative z-10" style={{ height: 56 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex items-end justify-center"
            style={{
              width: 3,
              height: stage >= 1 ? [34, 56, 42][i] : 0,
              background: "#C8A84B",
              borderRadius: 2,
              transition: `height 600ms cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 120}ms`,
            }}
          />
        ))}
      </div>

      <h1
        className="text-3xl font-bold tracking-tight relative z-10"
        style={{
          color: "#FFFDF7",
          fontFamily: lang === "km" ? "'Noto Sans Khmer', sans-serif" : "Outfit, sans-serif",
          opacity: stage >= 1 ? 1 : 0,
          transform: stage >= 1 ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 500ms ease, transform 500ms ease",
        }}
      >
        {lang === "km" ? "ស្រូវឆ្លាត" : "SrovChlart"}
      </h1>
      <p
        className="text-xs mt-2 text-center relative z-10"
        style={{
          color: "rgba(255,253,247,0.65)",
          fontFamily: lang === "km" ? "'Noto Sans Khmer', sans-serif" : "DM Sans, sans-serif",
          opacity: stage >= 1 ? 1 : 0,
          transition: "opacity 500ms ease 150ms",
        }}
      >
        {t.splashLine}
      </p>

      <div className="absolute bottom-12 flex gap-1.5 z-10">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: "#C8A84B",
              opacity: stage >= 1 ? 0.9 : 0.25,
              animation: stage >= 1 ? `srov-pulse 1.1s ease-in-out ${i * 0.15}s infinite` : "none",
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes srov-pulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.4); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

/* ─── LOGIN / OTP SCREEN ─────────────────────────────────── */

function LoginScreen({
  role,
  onRoleChange,
  onLoggedIn,
  onGuest,
}: {
  role: "farmer" | "buyer";
  onRoleChange: (r: "farmer" | "buyer") => void;
  onLoggedIn: () => void;
  onGuest: () => void;
}) {
  const { t, lang } = useLang();
  const [phase, setPhase] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    if (phase !== "otp") return;
    if (seconds <= 0) return;
    const id = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [phase, seconds]);

  const phoneValid = phone.replace(/\D/g, "").length >= 8;
  const codeComplete = code.every((c) => c !== "");

  function handleCodeChange(idx: number, val: string) {
    if (!/^\d?$/.test(val)) return;
    const next = [...code];
    next[idx] = val;
    setCode(next);
    if (val && idx < 5) {
      const el = document.getElementById(`srov-otp-${idx + 1}`);
      (el as HTMLInputElement | null)?.focus();
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Top identity strip */}
      <div className="px-6 pt-8 pb-4 flex-shrink-0">
        {phase === "otp" ? (
          <button
            onClick={() => { setPhase("phone"); setCode(["", "", "", "", "", ""]); }}
            className="flex items-center gap-1.5 text-xs text-muted-foreground mb-5"
          >
            <ArrowLeft size={14} /> {t.changeNumber}
          </button>
        ) : (
          <div className="flex items-end gap-2 mb-5" style={{ height: 28 }}>
            {[18, 28, 22].map((h, i) => (
              <div key={i} style={{ width: 3, height: h, background: "#C8A84B", borderRadius: 2 }} />
            ))}
          </div>
        )}

        <h1 className="text-2xl font-bold text-foreground" style={displayFont(lang)}>
          {phase === "phone" ? (lang === "km" ? "សូមស្វាគមន៍" : "Welcome") : t.enterCode}
        </h1>
        <p className="text-xs text-muted-foreground mt-1" style={khFont(lang)}>
          {phase === "phone" ? t.phoneHint : `${t.codeHint} ${phone || "+855 •• ••• •••"}`}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-6">
        {/* Role selector — only relevant before identity is confirmed */}
        {phase === "phone" && (
          <div className="mb-5">
            <label
              className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2"
              style={lang === "km" ? { fontFamily: "'Noto Sans Khmer', sans-serif", textTransform: "none", letterSpacing: 0 } : {}}
            >
              {t.loginAs}
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onRoleChange("farmer")}
                className={`py-3 rounded-xl text-sm font-semibold border transition-all flex flex-col items-center gap-1.5 ${
                  role === "farmer" ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-foreground"
                }`}
                style={khFont(lang)}
              >
                <Sprout size={16} />
                {t.farmerView.replace(" View", "").replace("ទស្សនៈ", "")}
              </button>
              <button
                onClick={() => onRoleChange("buyer")}
                className={`py-3 rounded-xl text-sm font-semibold border transition-all flex flex-col items-center gap-1.5 ${
                  role === "buyer" ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-foreground"
                }`}
                style={khFont(lang)}
              >
                <Package size={16} />
                {t.buyerView.replace(" View", "").replace("ទស្សនៈ", "")}
              </button>
            </div>
          </div>
        )}

        {phase === "phone" ? (
          <div className="mb-2">
            <label
              className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5"
              style={lang === "km" ? { fontFamily: "'Noto Sans Khmer', sans-serif", textTransform: "none", letterSpacing: 0 } : {}}
            >
              {t.phoneNumber}
            </label>
            <div className="flex items-center bg-card border border-border rounded-xl px-3 focus-within:ring-1 focus-within:ring-primary">
              <span className="text-sm text-muted-foreground font-medium pr-2 border-r border-border mr-2" style={{ fontFamily: "DM Mono, monospace" }}>
                +855
              </span>
              <Phone size={14} className="text-muted-foreground mr-2" />
              <input
                type="tel"
                inputMode="numeric"
                placeholder="12 345 678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                style={{ fontFamily: "DM Mono, monospace" }}
              />
            </div>
          </div>
        ) : (
          <div className="flex justify-between gap-2 mb-2">
            {code.map((c, i) => (
              <input
                key={i}
                id={`srov-otp-${i}`}
                value={c}
                onChange={(e) => handleCodeChange(i, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Backspace" && !c && i > 0) {
                    const el = document.getElementById(`srov-otp-${i - 1}`);
                    (el as HTMLInputElement | null)?.focus();
                  }
                }}
                inputMode="numeric"
                maxLength={1}
                className={`w-full aspect-square text-center text-lg font-bold rounded-xl border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary ${
                  c ? "border-primary" : "border-border"
                }`}
                style={{ fontFamily: "DM Mono, monospace" }}
              />
            ))}
          </div>
        )}

        {phase === "otp" && (
          <div className="text-center mt-3">
            {seconds > 0 ? (
              <p className="text-xs text-muted-foreground" style={khFont(lang)}>
                {t.resendIn} <span style={{ fontFamily: "DM Mono, monospace" }}>0:{seconds.toString().padStart(2, "0")}</span>
              </p>
            ) : (
              <button onClick={() => setSeconds(30)} className="text-xs text-primary font-semibold" style={khFont(lang)}>
                {t.resendCode}
              </button>
            )}
          </div>
        )}

        {phase === "phone" && (
          <p className="text-[11px] text-muted-foreground mt-4 leading-relaxed" style={khFont(lang)}>
            {t.newHere}
          </p>
        )}
      </div>

      <div className="px-6 pb-7 pt-3 flex-shrink-0 space-y-3">
        {phase === "phone" ? (
          <button
            disabled={!phoneValid}
            onClick={() => setPhase("otp")}
            className={`w-full py-3 rounded-xl text-sm font-semibold transition-colors ${
              phoneValid ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary text-muted-foreground"
            }`}
            style={khFont(lang)}
          >
            {t.continueBtn}
          </button>
        ) : (
          <button
            disabled={!codeComplete}
            onClick={onLoggedIn}
            className={`w-full py-3 rounded-xl text-sm font-semibold transition-colors ${
              codeComplete ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary text-muted-foreground"
            }`}
            style={khFont(lang)}
          >
            {t.verifyBtn}
          </button>
        )}

        {phase === "phone" && (
          <>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-px bg-border" />
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider" style={khFont(lang)}>{t.or}</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <button onClick={onGuest} className="w-full py-3 rounded-xl text-sm font-semibold border border-border bg-card text-foreground" style={khFont(lang)}>
              {t.continueGuest}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

/* ─── SCREENS ────────────────────────────────────────────── */

function FarmerHome({ setScreen }: { setScreen: (s: string) => void }) {
  const { t, lang } = useLang();
  const riceVarieties = riceVarietiesData(t as any);
  return (
    <div className="flex flex-col h-full overflow-y-auto scrollbar-hide">
      <div className="px-4 pt-5 pb-3">
        <div className="flex items-center justify-between mb-1">
          <div>
            <p className="text-xs text-muted-foreground font-medium" style={khFont(lang)}>{t.goodMorning}</p>
            <h1 className="text-xl font-bold text-foreground" style={displayFont(lang)}>
              {lang === "km" ? "សុខ ដារ៉ា" : "Sok Dara"}
            </h1>
          </div>
          <div className="relative">
            <Bell size={20} className="text-foreground" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full text-[9px] font-bold text-foreground flex items-center justify-center">3</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 mt-1">
          <Shield size={12} className="text-emerald-600" />
          <span className="text-xs text-emerald-600 font-medium" style={khFont(lang)}>{t.verifiedFarmer} · {t.kampongCham}</span>
        </div>
      </div>

      <div className="px-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <SectionLabel>{t.todayPrices}</SectionLabel>
          <button onClick={() => setScreen("prices")} className="text-[11px] text-primary font-semibold" style={khFont(lang)}>{t.viewAll}</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {riceVarieties.map((v) => (
            <div key={v.id} className="bg-card rounded-xl p-3 border border-border">
              <p className="text-[10px] text-muted-foreground mb-1 leading-tight" style={khFont(lang)}>{v.name}</p>
              <p className="text-sm font-bold text-foreground" style={{ fontFamily: "DM Mono, monospace" }}>{v.price.toLocaleString()}</p>
              <p className="text-[9px] text-muted-foreground mb-1">KHR/kg</p>
              <PriceChange current={v.price} prev={v.prev} />
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <SectionLabel>{t.myListings}</SectionLabel>
          <button onClick={() => setScreen("post")} className="text-[11px] text-primary font-semibold" style={khFont(lang)}>{t.add}</button>
        </div>
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-3 py-3 border-b border-border flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-secondary">
              <ImageWithFallback src="https://images.unsplash.com/photo-1536304993881-ff6e9eefa49a?w=200&h=200&fit=crop&q=70" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground" style={khFont(lang)}>
                {lang === "km" ? "អង្ករម្លិះ · ៨ តោន" : "Jasmine Rice · 8 ton"}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5" style={khFont(lang)}>
                {lang === "km" ? "ស្នើ: ២,៣៥០ រៀល/គ.ក្រ · ៣ កក្កដា" : "Asking: 2,350 KHR/kg · Jul 3"}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1 flex-shrink-0">
              <Badge text={t.live} color="bg-emerald-100 text-emerald-700" />
              <p className="text-[10px] text-muted-foreground" style={khFont(lang)}>2 {t.inquiries}</p>
            </div>
          </div>
          <div className="px-3 py-3 flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-secondary">
              <ImageWithFallback src="https://images.unsplash.com/photo-1530507629358-44a3c7f5ca29?w=200&h=200&fit=crop&q=70" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground" style={khFont(lang)}>
                {lang === "km" ? "អង្ករក្រអូប · ៤.៥ តោន" : "Fragrant Rice · 4.5 ton"}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5" style={khFont(lang)}>
                {lang === "km" ? "ស្នើ: ២,២០០ រៀល/គ.ក្រ · ២៨ មិថុនា" : "Asking: 2,200 KHR/kg · Jun 28"}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1 flex-shrink-0">
              <Badge text={t.live} color="bg-emerald-100 text-emerald-700" />

              <p className="text-[10px] text-muted-foreground" style={khFont(lang)}>1 {t.inquiry_one}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <SectionLabel>{t.buyerMessages}</SectionLabel>
          <button onClick={() => setScreen("messages")} className="text-[11px] text-primary font-semibold" style={khFont(lang)}>{t.seeAll}</button>
        </div>
        <div className="bg-card border border-border rounded-xl px-3 py-3 flex items-center gap-3">
          <Avatar initials={lang === "km" ? "ហអ" : "HI"} size="sm" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground" style={khFont(lang)}>
              {lang === "km" ? "ហ៊ឹង អ៊ីមផតស៍" : "Heng Import Co."}
            </p>
            <p className="text-xs text-muted-foreground truncate" style={khFont(lang)}>
              {lang === "km" ? "លោក អាចធ្វើ ២,៣០០ រៀល..." : "Can you do 2,300 KHR/kg for…"}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="w-4 h-4 bg-accent rounded-full text-[9px] font-bold text-foreground flex items-center justify-center">2</span>
            <p className="text-[10px] text-muted-foreground">10:24</p>
          </div>
        </div>
      </div>

      <div className="px-4 mb-6">
        <div className="bg-primary/5 border border-primary/20 rounded-xl px-3 py-3 flex items-center gap-3">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Bell size={14} className="text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground" style={khFont(lang)}>{t.priceAlertActive}</p>
            <p className="text-xs text-muted-foreground" style={khFont(lang)}>{t.priceAlertDesc}</p>
          </div>
          <ChevronRight size={14} className="text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}

function PricesScreen() {
  const { t, lang } = useLang();
  const riceVarieties = riceVarietiesData(t as any);
  const [activeVariety, setActiveVariety] = useState("jasmine");
  const v = riceVarieties.find((x) => x.id === activeVariety)!;

  const provinceData = [
    { province: t.phonmPenh, price: v.price },
    { province: t.kampongCham, price: Math.round(v.price * 0.97) },
    { province: t.preyVeng, price: Math.round(v.price * 0.95) },
    { province: t.battambang, price: Math.round(v.price * 0.93) },
    { province: t.kandal, price: Math.round(v.price * 0.98) },
  ];
  const maxP = Math.max(...provinceData.map((p) => p.price));

  return (
    <div className="flex flex-col h-full overflow-y-auto scrollbar-hide">
      <div className="px-4 pt-5 pb-3">
        <h1 className="text-xl font-bold text-foreground" style={displayFont(lang)}>{t.marketPrices}</h1>
        <p className="text-xs text-muted-foreground mt-0.5" style={khFont(lang)}>{t.updatedToday}</p>
      </div>

      <div className="px-4 mb-4">
        <div className="flex gap-2">
          {riceVarieties.map((rv) => (
            <button
              key={rv.id}
              onClick={() => setActiveVariety(rv.id)}
              className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeVariety === rv.id ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground"
              }`}
              style={khFont(lang)}
            >
              {rv.short}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 mb-4">
        <div className="bg-primary rounded-2xl p-4 text-primary-foreground">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs opacity-70 font-medium" style={khFont(lang)}>{v.name}</p>
              <p className="text-xs opacity-60 mb-2">{v.khmer}</p>
              <p className="text-3xl font-bold" style={displayFont(lang)}>{v.price.toLocaleString()}</p>
              <p className="text-xs opacity-70 mt-0.5">KHR/kg · USD {v.id === "jasmine" ? "0.60" : v.id === "white" ? "0.42" : "0.53"}</p>
            </div>
            <div className="text-right">
              <PriceChange current={v.price} prev={v.prev} />
              <p className="text-xs opacity-60 mt-1" style={khFont(lang)}>{t.vsYesterday}</p>
            </div>
          </div>
          <button className="mt-4 w-full py-2 rounded-lg border border-primary-foreground/30 text-xs font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors flex items-center justify-center gap-1.5" style={khFont(lang)}>
            <Bell size={12} /> {t.setPriceAlert}
          </button>
        </div>
      </div>

      <div className="px-4 mb-4">
        <div className="mb-2"><SectionLabel>{t.thirtyDayTrend}</SectionLabel></div>
        <div className="bg-card border border-border rounded-xl p-3">
          <ResponsiveContainer width="100%" height={140}>
            <LineChart key={activeVariety} data={priceHistory} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(28,28,20,0.07)" />
              <XAxis dataKey="day" tick={{ fontSize: 9, fill: "#6B6657" }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fontSize: 9, fill: "#6B6657", fontFamily: "DM Mono" }} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{ fontSize: 11, background: "#FFFDF7", border: "1px solid rgba(28,28,20,0.12)", borderRadius: 8 }}
                formatter={(val: number) => [`${val.toLocaleString()} KHR`, ""]}
              />
              <Line type="monotone" dataKey={activeVariety} stroke="#1A4731" strokeWidth={2} dot={{ fill: "#C8A84B", r: 3, strokeWidth: 0 }} activeDot={{ r: 5, fill: "#C8A84B" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="px-4 mb-6">
        <div className="mb-2"><SectionLabel>{t.provincePrices}</SectionLabel></div>
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          {provinceData.map((pd, i) => (
            <div key={pd.province} className={`px-3 py-2.5 flex items-center gap-3 ${i < provinceData.length - 1 ? "border-b border-border" : ""}`}>
              <MapPin size={11} className="text-muted-foreground flex-shrink-0" />
              <span className="text-xs text-foreground flex-1" style={khFont(lang)}>{pd.province}</span>
              <div className="w-20 h-1.5 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: `${(pd.price / maxP) * 100}%` }} />
              </div>
              <span className="text-xs font-semibold text-foreground w-12 text-right" style={{ fontFamily: "DM Mono, monospace" }}>
                {pd.price.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PostHarvestScreen({ setScreen }: { setScreen: (s: string) => void }) {
  const { t, lang } = useLang();
  const [variety, setVariety] = useState(lang === "km" ? "អង្ករម្លិះ" : "Jasmine Rice");
  const [qty, setQty] = useState("");
  const [unit, setUnit] = useState("ton");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const varieties = lang === "km"
    ? ["អង្ករម្លិះ", "អង្ករស", "អង្ករក្រអូប"]
    : ["Jasmine Rice", "White Rice", "Fragrant Rice"];

  const provinces = lang === "km"
    ? ["កំពង់ចាម", "ព្រៃវែង", "កណ្ដាល", "កំពង់ធំ", "បាត់ដំបង", "សៀមរាប"]
    : ["Kampong Cham", "Prey Veng", "Kandal", "Kampong Thom", "Battambang", "Siem Reap"];

  const canPost = qty.trim() !== "" && price.trim() !== "";

  function reset() {
    setSubmitted(false);
    setQty("");
    setPrice("");
    setPhoto(null);
    setScreen("home");
  }

  if (submitted) {
    return (
      <div className="flex flex-col h-full items-center justify-center px-8 text-center">
        {photo ? (
          <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-emerald-200 mb-4 relative">
            <img src={photo} alt="" className="w-full h-full object-cover" />
            <div className="absolute -bottom-1.5 -right-1.5 w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-card">
              <Check size={13} className="text-white" />
            </div>
          </div>
        ) : (
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle size={32} className="text-emerald-600" />
          </div>
        )}
        <h2 className="text-lg font-bold text-foreground mb-1" style={displayFont(lang)}>{t.listingLive}</h2>
        <p className="text-sm text-muted-foreground mb-1" style={khFont(lang)}>{t.listingLiveDesc}</p>
        <p className="text-xs text-muted-foreground mb-6" style={khFont(lang)}>
          {variety} · {qty || "—"} {unit} · {price ? Number(price).toLocaleString() : "—"} KHR/kg
        </p>
        <button onClick={reset} className="w-full py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold" style={khFont(lang)}>
          {t.backToHome}
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full overflow-y-auto scrollbar-hide">
      <div className="px-4 pt-5 pb-3">
        <h1 className="text-xl font-bold text-foreground" style={displayFont(lang)}>{t.postHarvest}</h1>
        <p className="text-xs text-muted-foreground mt-0.5" style={khFont(lang)}>{t.postSubtitle}</p>
      </div>

      <div className="px-4 space-y-4 pb-6">
        <div>
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5" style={lang === "km" ? { fontFamily: "'Noto Sans Khmer', sans-serif", textTransform: "none", letterSpacing: 0 } : {}}>{t.riceVariety}</label>
          <div className="grid grid-cols-3 gap-2">
            {varieties.map((v) => (
              <button key={v} onClick={() => setVariety(v)} className={`py-2.5 rounded-xl text-xs font-semibold border transition-all ${variety === v ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-foreground"}`} style={khFont(lang)}>
                {v.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5" style={lang === "km" ? { fontFamily: "'Noto Sans Khmer', sans-serif", textTransform: "none", letterSpacing: 0 } : {}}>{t.quantity}</label>
          <div className="flex gap-2">
            <input type="number" placeholder="0" value={qty} onChange={(e) => setQty(e.target.value)} className="flex-1 bg-card border border-border rounded-xl px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
            <div className="flex border border-border rounded-xl overflow-hidden">
              {["kg", "ton"].map((u) => (
                <button key={u} onClick={() => setUnit(u)} className={`px-3 py-2.5 text-xs font-semibold transition-all ${unit === u ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground"}`}>{u}</button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5" style={lang === "km" ? { fontFamily: "'Noto Sans Khmer', sans-serif", textTransform: "none", letterSpacing: 0 } : {}}>{t.askingPrice}</label>
          <div className="relative">
            <input type="number" placeholder="2350" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full bg-card border border-border rounded-xl px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary pr-20" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-medium">KHR/kg</span>
          </div>
          <p className="text-[10px] text-muted-foreground mt-1" style={khFont(lang)}>{t.marketRateToday}</p>
        </div>

        <div>
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5" style={lang === "km" ? { fontFamily: "'Noto Sans Khmer', sans-serif", textTransform: "none", letterSpacing: 0 } : {}}>{t.province}</label>
          <div className="relative">
            <select className="w-full bg-card border border-border rounded-xl px-3 py-2.5 text-sm text-foreground appearance-none focus:outline-none focus:ring-1 focus:ring-primary" style={khFont(lang)}>
              {provinces.map((p) => <option key={p}>{p}</option>)}
            </select>
            <ChevronRight size={14} className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5" style={lang === "km" ? { fontFamily: "'Noto Sans Khmer', sans-serif", textTransform: "none", letterSpacing: 0 } : {}}>{t.availableFrom}</label>
          <input type="date" defaultValue="2026-07-03" className="w-full bg-card border border-border rounded-xl px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider" style={lang === "km" ? { fontFamily: "'Noto Sans Khmer', sans-serif", textTransform: "none", letterSpacing: 0 } : {}}>{t.photoOptional}</label>
            {photo && (
              <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1" style={khFont(lang)}>
                <Check size={10} /> {t.photoAdded}
              </span>
            )}
          </div>
          <PhotoUpload value={photo} onChange={setPhoto} inputId="srov-post-photo" />
        </div>

        <button
          disabled={!canPost}
          onClick={() => setSubmitted(true)}
          className={`w-full py-3 rounded-xl text-sm font-semibold transition-colors ${canPost ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary text-muted-foreground"}`}
          style={khFont(lang)}
        >
          {t.postListing}
        </button>
      </div>
    </div>
  );
}

function ChatThread({
  conversation,
  onBack,
  onStatusChange,
}: {
  conversation: ReturnType<typeof messagesData>[number];
  onBack: () => void;
  onStatusChange: (status: string, lastText: string) => void;
}) {
  const { t, lang } = useLang();
  const seedThreads = chatThreadsData(t as any) as Record<number, any[]>;
  const [thread, setThread] = useState(() => seedThreads[conversation.id] || []);
  const [input, setInput] = useState("");
  const [pendingImage, setPendingImage] = useState<string | null>(null);
  const [peerTyping, setPeerTyping] = useState(false);
  const [status, setStatus] = useState(conversation.status);
  const replies = autoReplyPool(t as any);
  const m = conversation;
  const initials = lang === "km" ? (m.id === 1 ? "ហអ" : m.id === 2 ? "មមផ" : "កស") : m.buyer.slice(0, 2).toUpperCase();
  const fileInputId = `srov-chat-attach-${m.id}`;

  function nowTime() {
    const d = new Date();
    return d.toLocaleTimeString(lang === "km" ? "km-KH" : "en-US", { hour: "numeric", minute: "2-digit" });
  }

  function pushMessage(msg: { from: "farmer" | "buyer"; text?: string; image?: string }) {
    setThread((prev) => [...prev, { id: `m${prev.length + 1}-${Date.now()}`, time: nowTime(), ...msg }]);
  }

  function triggerAutoReply() {
    setPeerTyping(true);
    setTimeout(() => {
      setPeerTyping(false);
      const reply = replies[Math.floor(Math.random() * replies.length)];
      pushMessage({ from: "buyer", text: reply });
    }, 1100 + Math.random() * 800);
  }

  function handleSend() {
    const text = input.trim();
    if (!text && !pendingImage) return;
    if (pendingImage) pushMessage({ from: "farmer", image: pendingImage });
    if (text) pushMessage({ from: "farmer", text });
    setInput("");
    setPendingImage(null);
    if (status !== "confirmed") triggerAutoReply();
  }

  function handleAttach(file: File | undefined) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPendingImage(reader.result as string);
    reader.readAsDataURL(file);
  }

  function handleConfirm() {
    setStatus("confirmed");
    pushMessage({ from: "buyer", text: t.dealConfirmedMsg });
    onStatusChange("confirmed", t.dealConfirmedMsg);
  }

  function handleDecline() {
    setStatus("inquiry");
    pushMessage({ from: "farmer", text: t.declinedMsg });
    onStatusChange("inquiry", t.declinedMsg);
  }

  return (
    <div className="flex flex-col h-full">
      <div className="px-3 pt-4 pb-3 border-b border-border flex items-center gap-2 flex-shrink-0">
        <button onClick={onBack} className="p-1"><ArrowLeft size={18} className="text-foreground" /></button>
        <Avatar initials={initials} size="sm" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground truncate" style={khFont(lang)}>{m.buyer}</p>
          <p className="text-[10px] text-muted-foreground truncate" style={khFont(lang)}>{m.listing}</p>
        </div>
        {status === "confirmed"
          ? <Badge text={t.confirmed} color="bg-emerald-100 text-emerald-700" />
          : <Badge text={t.negotiating} color="bg-amber-100 text-amber-700" />}
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-3 py-3 space-y-3">
        {thread.map((ch) => (
          <div key={ch.id} className={`flex ${ch.from === "farmer" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[75%] ${ch.image ? "p-1" : "px-3 py-2"} rounded-2xl ${ch.from === "farmer" ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-card border border-border rounded-bl-sm"}`}>
              {ch.image && (
                <img src={ch.image} alt="" className="rounded-xl w-full max-w-[180px] object-cover mb-1" />
              )}
              {ch.text && (
                <p className={`text-xs ${ch.image ? "px-2" : ""} ${ch.from === "farmer" ? "text-primary-foreground" : "text-foreground"}`} style={khFont(lang)}>{ch.text}</p>
              )}
              <p className={`text-[9px] mt-1 ${ch.image ? "px-2 pb-1" : ""} ${ch.from === "farmer" ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{ch.time}</p>
            </div>
          </div>
        ))}
        {peerTyping && (
          <div className="flex justify-start">
            <div className="bg-card border border-border rounded-2xl rounded-bl-sm px-3 py-2.5 flex items-center gap-1">
              {[0, 1, 2].map((i) => (
                <span key={i} className="w-1.5 h-1.5 rounded-full bg-muted-foreground" style={{ animation: `srov-typing-dot 1s ease-in-out ${i * 0.15}s infinite` }} />
              ))}
            </div>
          </div>
        )}
      </div>

      {status !== "confirmed" && (
        <div className="px-3 py-2 border-t border-border flex gap-2 flex-shrink-0">
          <button onClick={handleDecline} className="flex-1 py-2 rounded-lg border border-destructive text-destructive text-xs font-semibold flex items-center justify-center gap-1" style={khFont(lang)}>
            <X size={12} /> {t.decline}
          </button>
          <button onClick={handleConfirm} className="flex-1 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold flex items-center justify-center gap-1" style={khFont(lang)}>
            <Check size={12} /> {t.confirmDeal}
          </button>
        </div>
      )}

      {pendingImage && (
        <div className="px-3 pt-2 flex-shrink-0">
          <div className="relative inline-block">
            <img src={pendingImage} alt="" className="h-16 w-16 object-cover rounded-lg border border-border" />
            <button onClick={() => setPendingImage(null)} className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-destructive rounded-full flex items-center justify-center">
              <X size={10} className="text-white" />
            </button>
          </div>
        </div>
      )}

      <div className="px-3 py-2 border-t border-border flex items-center gap-2 flex-shrink-0">
        <label htmlFor={fileInputId} className="w-8 h-8 rounded-full border border-border flex items-center justify-center flex-shrink-0 cursor-pointer text-muted-foreground hover:text-primary hover:border-primary transition-colors">
          <Paperclip size={14} />
        </label>
        <input id={fileInputId} type="file" accept="image/*" className="hidden" onChange={(e) => handleAttach(e.target.files?.[0])} />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") handleSend(); }}
          placeholder={t.typeMessage}
          className="flex-1 bg-input-background rounded-full px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none"
          style={khFont(lang)}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() && !pendingImage}
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${input.trim() || pendingImage ? "bg-primary" : "bg-secondary"}`}
        >
          <Send size={13} className={input.trim() || pendingImage ? "text-primary-foreground" : "text-muted-foreground"} />
        </button>
      </div>
      <style>{`
        @keyframes srov-typing-dot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-3px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function MessagesScreen({ setScreen }: { setScreen: (s: string) => void }) {
  const { t, lang } = useLang();
  const seedMessages = messagesData(t as any);
  const [conversations, setConversations] = useState(seedMessages);
  const [activeChat, setActiveChat] = useState<number | null>(null);

  function openChat(id: number) {
    setActiveChat(id);
    setConversations((prev) => prev.map((c) => (c.id === id ? { ...c, unread: 0 } : c)));
  }

  function handleStatusChange(id: number, status: string, lastText: string) {
    setConversations((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status, last: lastText, time: lang === "km" ? "ឥឡូវនេះ" : "Now" } : c))
    );
  }

  if (activeChat !== null) {
    const conv = conversations.find((x) => x.id === activeChat)!;
    return (
      <ChatThread
        conversation={conv}
        onBack={() => setActiveChat(null)}
        onStatusChange={(status, lastText) => handleStatusChange(activeChat, status, lastText)}
      />
    );
  }

  return (
    <div className="flex flex-col h-full overflow-y-auto scrollbar-hide">
      <div className="px-4 pt-5 pb-3">
        <h1 className="text-xl font-bold text-foreground" style={displayFont(lang)}>{t.messages}</h1>
        <p className="text-xs text-muted-foreground mt-0.5" style={khFont(lang)}>{conversations.length} {t.conversations}</p>
      </div>
      <div className="px-4 space-y-2">
        {conversations.map((m) => {
          const initials = lang === "km" ? (m.id === 1 ? "ហអ" : m.id === 2 ? "មមផ" : "កស") : m.buyer.slice(0, 2).toUpperCase();
          return (
            <button key={m.id} onClick={() => openChat(m.id)} className="w-full bg-card border border-border rounded-xl px-3 py-3 flex items-center gap-3 text-left">
              <Avatar initials={initials} size="sm" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <p className="text-sm font-semibold text-foreground truncate" style={khFont(lang)}>{m.buyer}</p>
                  <span className="text-[10px] text-muted-foreground flex-shrink-0 ml-2" style={khFont(lang)}>{m.time}</span>
                </div>
                <p className="text-[10px] text-muted-foreground mb-0.5" style={khFont(lang)}>{m.listing}</p>
                <p className="text-xs text-muted-foreground truncate" style={khFont(lang)}>{m.last}</p>
              </div>
              {m.unread > 0 && (
                <span className="w-5 h-5 bg-accent rounded-full text-[10px] font-bold text-foreground flex items-center justify-center flex-shrink-0">{m.unread}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ProfileScreen() {
  const { t, lang } = useLang();
  const sokDaraPhoto = "https://images.unsplash.com/photo-1602524207003-fd2f81d52ba6?w=200&h=200&fit=crop&q=80";
  return (
    <div className="flex flex-col h-full overflow-y-auto scrollbar-hide">
      <div className="h-20 relative -mb-8">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&h=200&fit=crop&q=70"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(26,71,49,0.15) 0%, rgba(255,253,247,0.95) 100%)" }} />
      </div>
      <div className="px-4 pt-2 pb-4 relative">
        <div className="flex items-start gap-4">
          <Avatar initials={lang === "km" ? "សដ" : "SD"} size="lg" photo={sokDaraPhoto} />
          <div className="flex-1 pt-1">
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-foreground" style={displayFont(lang)}>{lang === "km" ? "សុខ ដារ៉ា" : "Sok Dara"}</h1>
              <Shield size={14} className="text-emerald-600" />
            </div>
            <StarRow rating={4.8} count={24} />
            <p className="text-xs text-muted-foreground mt-1" style={khFont(lang)}>{t.kampongCham} · 3.2 ha</p>
          </div>
        </div>
      </div>

      <div className="px-4 mb-4">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: t.transactions, value: "24" },
            { label: t.tonsSold, value: "148" },
            { label: t.buyersRated, value: "22" },
          ].map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-xl p-3 text-center">
              <p className="text-lg font-bold text-foreground" style={displayFont(lang)}>{s.value}</p>
              <p className="text-[10px] text-muted-foreground leading-tight mt-0.5" style={khFont(lang)}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 mb-4">
        <div className="mb-2"><SectionLabel>{t.transactionHistory}</SectionLabel></div>
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          {[
            { variety: lang === "km" ? "អង្ករម្លិះ" : "Jasmine Rice", qty: lang === "km" ? "៤.៥ តោន" : "4.5 ton", price: "2,300", buyer: lang === "km" ? "ហ៊ឹង អ៊ីមផតស៍" : "Heng Import Co.", date: lang === "km" ? "១០ មិថុនា" : "Jun 10" },
            { variety: lang === "km" ? "អង្ករស" : "White Rice", qty: lang === "km" ? "១០ តោន" : "10 ton", price: "1,650", buyer: lang === "km" ? "ម៉ៅ ផ្លូវ មីលីង" : "PP Milling Ltd.", date: lang === "km" ? "២២ ឧសភា" : "May 22" },
            { variety: lang === "km" ? "អង្ករក្រអូប" : "Fragrant Rice", qty: lang === "km" ? "៣ តោន" : "3 ton", price: "2,100", buyer: lang === "km" ? "គឹម សុខា" : "Kim Sokha", date: lang === "km" ? "៣០ មេសា" : "Apr 30" },
          ].map((tx, i) => (
            <div key={i} className={`px-3 py-2.5 flex items-center gap-3 ${i < 2 ? "border-b border-border" : ""}`}>
              <div className="w-7 h-7 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText size={12} className="text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-foreground" style={khFont(lang)}>{tx.variety} · {tx.qty}</p>
                <p className="text-[10px] text-muted-foreground" style={khFont(lang)}>{tx.buyer} · {tx.date}</p>
              </div>
              <span className="text-xs font-semibold text-foreground" style={{ fontFamily: "DM Mono, monospace" }}>{tx.price}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 mb-6">
        <div className="mb-2"><SectionLabel>{t.buyerReviews}</SectionLabel></div>
        <div className="space-y-2">
          {[
            { buyer: lang === "km" ? "ហ៊ឹង អ៊ីមផតស៍" : "Heng Import Co.", stars: 5, comment: lang === "km" ? "គុណភាពម្លិះល្អ ត្រឹមត្រូវដូចការពណ៌នា។ ទំនាក់ទំនងរហ័ស។" : "Excellent quality jasmine, exactly as described. Fast communication.", date: lang === "km" ? "១១ មិថុនា" : "Jun 11" },
            { buyer: lang === "km" ? "ម៉ៅ ផ្លូវ មីលីង" : "PP Milling Ltd.", stars: 5, comment: lang === "km" ? "កសិករល្អ ទុកចិត្តបាន។ នឹងទិញម្ដងទៀត។" : "Great farmer, very reliable. Will buy again.", date: lang === "km" ? "២៣ ឧសភា" : "May 23" },
          ].map((r, i) => (
            <div key={i} className="bg-card border border-border rounded-xl px-3 py-3">
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs font-semibold text-foreground" style={khFont(lang)}>{r.buyer}</p>
                <div className="flex gap-0.5">{Array.from({ length: r.stars }).map((_, j) => <Star key={j} size={10} className="fill-accent text-accent" />)}</div>
              </div>
              <p className="text-xs text-muted-foreground" style={khFont(lang)}>{r.comment}</p>
              <p className="text-[10px] text-muted-foreground mt-1" style={khFont(lang)}>{r.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── BUYER SCREENS ───────────────────────────────────────── */

function BuyerHome({ setScreen }: { setScreen: (s: string) => void }) {
  const { t, lang } = useLang();
  const listings = listingsData(t as any);
  return (
    <div className="flex flex-col h-full overflow-y-auto scrollbar-hide">
      <div className="px-4 pt-5 pb-3">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-xs text-muted-foreground" style={khFont(lang)}>{t.welcomeBack}</p>
            <h1 className="text-xl font-bold text-foreground" style={displayFont(lang)}>
              {lang === "km" ? "ហ៊ឹង អ៊ីមផតស៍" : "Heng Import Co."}
            </h1>
          </div>
          <Badge text={t.verifiedBuyer} color="bg-primary/10 text-primary" />
        </div>
        <button onClick={() => setScreen("find")} className="w-full bg-card border border-border rounded-xl px-3 py-2.5 flex items-center gap-2 text-left">
          <Search size={14} className="text-muted-foreground" />
          <span className="text-sm text-muted-foreground" style={khFont(lang)}>
            {lang === "km" ? "ស្វែងរកប្រភេទអង្ករ, ខេត្ត..." : "Search rice variety, province…"}
          </span>
        </button>
      </div>

      <div className="px-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <SectionLabel>{t.newToday}</SectionLabel>
          <button onClick={() => setScreen("find")} className="text-[11px] text-primary font-semibold" style={khFont(lang)}>{t.seeAll}</button>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {listings.slice(0, 3).map((l) => (
            <div key={l.id} className="bg-card border border-border rounded-xl overflow-hidden flex-shrink-0 w-44">
              <div className="relative h-20 bg-secondary">
                <ImageWithFallback src={l.photo} alt={l.variety} className="w-full h-full object-cover" />
                {l.verified && (
                  <div className="absolute top-1.5 right-1.5 bg-card/90 backdrop-blur rounded-full p-1">
                    <Shield size={9} className="text-emerald-600" />
                  </div>
                )}
              </div>
              <div className="p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Avatar initials={l.badge} size="sm" photo={l.avatarPhoto} />
                  <p className="text-xs font-semibold text-foreground leading-tight truncate" style={khFont(lang)}>{l.farmer}</p>
                </div>
                <p className="text-xs font-semibold text-foreground" style={khFont(lang)}>{l.variety}</p>
                <p className="text-[10px] text-muted-foreground" style={khFont(lang)}>{l.qty} · {l.province}</p>
                <div className="mt-2 pt-2 border-t border-border flex items-center justify-between">
                  <span className="text-sm font-bold text-foreground" style={{ fontFamily: "DM Mono, monospace" }}>{l.price.toLocaleString()}</span>
                  <span className="text-[9px] text-muted-foreground">KHR/kg</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 mb-4">
        <div className="mb-2"><SectionLabel>{t.activeOrders}</SectionLabel></div>
        <div className="bg-card border border-border rounded-xl px-3 py-3 flex items-center gap-3">
          <div className="w-9 h-9 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <CheckCircle size={18} className="text-emerald-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground" style={khFont(lang)}>
              {lang === "km" ? "អង្ករក្រអូប · ៤.៥ តោន" : "Fragrant Rice · 4.5 ton"}
            </p>
            <p className="text-xs text-muted-foreground" style={khFont(lang)}>
              {lang === "km" ? "មាស សុភា · កណ្ដាល · ទទួល ២ កក្កដា" : "Meas Sophea · Kandal · Pickup Jul 2"}
            </p>
          </div>
          <Badge text={t.confirmed} color="bg-emerald-100 text-emerald-700" />
        </div>
      </div>

      <div className="px-4 mb-6">
        <div className="mb-2"><SectionLabel>{t.savedFarmers}</SectionLabel></div>
        <div className="space-y-2">
          {listings.slice(0, 2).map((l) => (
            <div key={l.id} className="bg-card border border-border rounded-xl px-3 py-2.5 flex items-center gap-3">
              <Avatar initials={l.badge} size="sm" photo={l.avatarPhoto} />
              <div className="flex-1">
                <div className="flex items-center gap-1">
                  <p className="text-sm font-semibold text-foreground" style={khFont(lang)}>{l.farmer}</p>
                  {l.verified && <Shield size={10} className="text-emerald-600" />}
                </div>
                <p className="text-xs text-muted-foreground" style={khFont(lang)}>{l.province}</p>
              </div>
              <StarRow rating={l.rating} count={l.reviews} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FindRiceScreen({ setScreen }: { setScreen: (s: string) => void }) {
  const { t, lang } = useLang();
  const listings = listingsData(t as any);
  const provinces = [t.allProvinces, t.kampongCham, t.preyVeng, t.kandal, t.kampongThom, t.battambang, t.siemReap];
  const [province, setProvince] = useState(t.allProvinces);
  const [variety, setVariety] = useState(t.all);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const varietyOptions = [t.all, ...(lang === "km" ? ["អង្ករម្លិះ", "អង្ករស", "អង្ករក្រអូប"] : ["Jasmine", "White", "Fragrant"])];

  const filtered = listings.filter(
    (l) =>
      (province === t.allProvinces || l.province === province) &&
      (variety === t.all || l.variety.includes(variety === t.all ? "" : variety)) &&
      (!verifiedOnly || l.verified)
  );

  if (selected !== null) {
    const l = listings.find((x) => x.id === selected)!;
    const pctVsMarket = (((l.market - l.price) / l.market) * 100).toFixed(1);
    const below = l.price < l.market;
    return (
      <div className="flex flex-col h-full overflow-y-auto scrollbar-hide">
        <div className="px-3 pt-4 pb-2 flex items-center gap-2 border-b border-border">
          <button onClick={() => setSelected(null)} className="p-1"><ArrowLeft size={18} className="text-foreground" /></button>
          <p className="text-sm font-semibold text-foreground" style={khFont(lang)}>{t.listingDetail}</p>
        </div>
        <div className="px-4 pt-4 pb-6 space-y-4">
          <div className="rounded-xl overflow-hidden h-40 bg-secondary relative">
            <ImageWithFallback src={l.photo} alt={l.variety} className="w-full h-full object-cover" />
            <div className="absolute top-2 right-2">
              <Badge text={l.variety} color="bg-card/90 backdrop-blur text-foreground" />
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-4 flex items-center gap-3">
            <Avatar initials={l.badge} size="lg" photo={l.avatarPhoto} />
            <div className="flex-1">
              <div className="flex items-center gap-1.5">
                <h2 className="text-base font-bold text-foreground" style={displayFont(lang)}>{l.farmer}</h2>
                {l.verified && <Shield size={13} className="text-emerald-600" />}
              </div>
              <StarRow rating={l.rating} count={l.reviews} />
              <div className="flex items-center gap-1 mt-0.5">
                <MapPin size={10} className="text-muted-foreground" />
                <span className="text-xs text-muted-foreground" style={khFont(lang)}>{l.province}</span>
              </div>
            </div>
            {!l.verified && <AlertCircle size={16} className="text-amber-500" />}
          </div>

          <div className="bg-card border border-border rounded-xl overflow-hidden">
            {[
              { label: lang === "km" ? "ប្រភេទ" : "Rice Variety", value: l.variety },
              { label: lang === "km" ? "បរិមាណ" : "Quantity", value: l.qty },
              { label: lang === "km" ? "ចាប់ពី" : "Available from", value: l.available },
            ].map((r, i) => (
              <div key={r.label} className={`px-3 py-2.5 flex justify-between ${i < 2 ? "border-b border-border" : ""}`}>
                <span className="text-xs text-muted-foreground" style={khFont(lang)}>{r.label}</span>
                <span className="text-xs font-semibold text-foreground" style={khFont(lang)}>{r.value}</span>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="mb-3"><SectionLabel>{t.priceVsMarket}</SectionLabel></div>
            <div className="flex items-end gap-4">
              <div>
                <p className="text-[10px] text-muted-foreground mb-1" style={khFont(lang)}>{t.askingPriceLabel}</p>
                <p className="text-2xl font-bold text-foreground" style={displayFont(lang)}>{l.price.toLocaleString()}</p>
                <p className="text-[10px] text-muted-foreground">KHR/kg</p>
              </div>
              <div className="flex-1 text-right">
                <p className="text-[10px] text-muted-foreground mb-1" style={khFont(lang)}>{t.marketRateLabel}</p>
                <p className="text-lg font-semibold text-muted-foreground">{l.market.toLocaleString()}</p>
                <p className="text-[10px] text-muted-foreground">KHR/kg</p>
              </div>
            </div>
            <div className={`mt-3 px-3 py-2 rounded-lg text-xs font-semibold ${below ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`} style={khFont(lang)}>
              {below ? `${pctVsMarket}% ${t.belowMarket}` : `${Math.abs(Number(pctVsMarket))}% ${t.aboveMarket}`}
            </div>
          </div>

          <button className="w-full py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold flex items-center justify-center gap-2" style={khFont(lang)}>
            <MessageCircle size={16} /> {t.openChat}
          </button>
          <button onClick={() => setScreen("traceability")} className="w-full py-2.5 border border-border bg-card text-foreground rounded-xl text-sm font-semibold flex items-center justify-center gap-2" style={khFont(lang)}>
            <FileText size={14} /> {t.viewTraceability}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full overflow-y-auto scrollbar-hide">
      <div className="px-4 pt-5 pb-3">
        <h1 className="text-xl font-bold text-foreground" style={displayFont(lang)}>{t.findRice}</h1>
      </div>
      <div className="px-4 mb-3 space-y-2">
        <div className="flex gap-2">
          <select value={province} onChange={(e) => setProvince(e.target.value)} className="flex-1 bg-card border border-border rounded-xl px-3 py-2 text-xs text-foreground appearance-none focus:outline-none" style={khFont(lang)}>
            {provinces.map((p) => <option key={p}>{p}</option>)}
          </select>
          <select value={variety} onChange={(e) => setVariety(e.target.value)} className="flex-1 bg-card border border-border rounded-xl px-3 py-2 text-xs text-foreground appearance-none focus:outline-none" style={khFont(lang)}>
            {varietyOptions.map((v) => <option key={v}>{v}</option>)}
          </select>
        </div>
        <button onClick={() => setVerifiedOnly(!verifiedOnly)} className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-semibold transition-all ${verifiedOnly ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground"}`} style={khFont(lang)}>
          <Shield size={12} /> {t.verifiedOnly}
        </button>
      </div>
      <p className="px-4 text-[11px] text-muted-foreground mb-2" style={khFont(lang)}>{filtered.length} {t.listingsFound}</p>
      <div className="px-4 space-y-2 pb-6">
        {filtered.map((l) => (
          <button key={l.id} onClick={() => setSelected(l.id)} className="w-full bg-card border border-border rounded-xl p-2.5 text-left">
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-secondary">
                <ImageWithFallback src={l.photo} alt={l.variety} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Avatar initials={l.badge} size="sm" photo={l.avatarPhoto} />
                  <p className="text-sm font-semibold text-foreground truncate" style={khFont(lang)}>{l.farmer}</p>
                  {l.verified && <Shield size={10} className="text-emerald-600 flex-shrink-0" />}
                </div>
                <p className="text-xs text-muted-foreground" style={khFont(lang)}>{l.variety} · {l.qty}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <MapPin size={9} className="text-muted-foreground" />
                  <span className="text-[10px] text-muted-foreground" style={khFont(lang)}>{l.province}</span>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-sm font-bold text-foreground" style={{ fontFamily: "DM Mono, monospace" }}>{l.price.toLocaleString()}</p>
                <p className="text-[9px] text-muted-foreground">KHR/kg</p>
                <StarRow rating={l.rating} count={l.reviews} />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function TraceabilityScreen() {
  const { t, lang } = useLang();
  const steps = [
    { step: lang === "km" ? "ប្រមូលផលត្រូវបានកត់ត្រា" : "Harvest logged", date: "Jun 18", done: true },
    { step: lang === "km" ? "ប្រកាសបញ្ជីលើ SrovChlart" : "Listing posted on SrovChlart", date: "Jun 20", done: true },
    { step: lang === "km" ? "អ្នកទិញបានទំនាក់ទំនងកសិករ" : "Buyer contacted farmer", date: "Jun 22", done: true },
    { step: lang === "km" ? "កិច្ចព្រមព្រៀងបានបញ្ជាក់ក្នុងកម្មវិធី" : "Deal confirmed in-app", date: "Jun 25", done: true },
    { step: lang === "km" ? "ការទទួលទំនិញបានកំណត់" : "Pickup scheduled", date: "Jul 2", done: false },
  ];

  return (
    <div className="flex flex-col h-full overflow-y-auto scrollbar-hide">
      <div className="px-4 pt-5 pb-3">
        <h1 className="text-xl font-bold text-foreground" style={displayFont(lang)}>{t.traceabilityReport}</h1>
        <p className="text-xs text-muted-foreground mt-0.5" style={khFont(lang)}>{t.traceSubtitle}</p>
      </div>
      <div className="px-4 space-y-4 pb-6">
        <div className="bg-primary rounded-2xl p-4 text-primary-foreground">
          <p className="text-xs opacity-60 mb-1" style={khFont(lang)}>{t.reportId}</p>
          <p className="text-sm font-bold" style={{ fontFamily: "DM Mono, monospace" }}>SCR-2026-00447</p>
          <div className="mt-3 pt-3 border-t border-primary-foreground/20 grid grid-cols-2 gap-3">
            {[
              { label: t.variety, value: lang === "km" ? "អង្ករក្រអូប" : "Fragrant Rice" },
              { label: t.quantityLabel, value: lang === "km" ? "៤.៥ តោន" : "4.5 Ton" },
              { label: t.harvestDate, value: lang === "km" ? "១៨ មិថុនា ២០២៦" : "Jun 18, 2026" },
              { label: t.transaction, value: lang === "km" ? "២៥ មិថុនា ២០២៦" : "Jun 25, 2026" },
            ].map((r) => (
              <div key={r.label}>
                <p className="text-[10px] opacity-60" style={khFont(lang)}>{r.label}</p>
                <p className="text-sm font-semibold" style={khFont(lang)}>{r.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-2"><SectionLabel>{t.farmOrigin}</SectionLabel></div>
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            {[
              { label: t.farmer, value: lang === "km" ? "មាស សុភា" : "Meas Sophea" },
              { label: t.province, value: t.kandal },
              { label: t.farmSize, value: "2.8 ha" },
              { label: t.verification, value: lang === "km" ? "ទូរស័ព្ទ + ខេត្ត ✓" : "Phone + Province ✓" },
            ].map((r, i) => (
              <div key={r.label} className={`px-3 py-2.5 flex justify-between ${i < 3 ? "border-b border-border" : ""}`}>
                <span className="text-xs text-muted-foreground" style={khFont(lang)}>{r.label}</span>
                <span className="text-xs font-semibold text-foreground" style={khFont(lang)}>{r.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-2"><SectionLabel>{t.transactionChain}</SectionLabel></div>
          <div className="space-y-1.5">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-3 bg-card border border-border rounded-xl px-3 py-2.5">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${step.done ? "bg-emerald-100" : "bg-secondary"}`}>
                  {step.done ? <Check size={10} className="text-emerald-600" /> : <div className="w-2 h-2 rounded-full bg-muted-foreground" />}
                </div>
                <span className="text-xs text-foreground flex-1" style={khFont(lang)}>{step.step}</span>
                <span className="text-[10px] text-muted-foreground" style={{ fontFamily: "DM Mono, monospace" }}>{step.date}</span>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full py-3 border border-border bg-card text-foreground rounded-xl text-sm font-semibold flex items-center justify-center gap-2" style={khFont(lang)}>
          <FileText size={14} /> {t.downloadPdf}
        </button>
      </div>
    </div>
  );
}

/* ─── NAV CONFIG ─────────────────────────────────────────── */

const farmerNavConfig = [
  { id: "home", labelKey: "home" as keyof T, icon: Home },
  { id: "prices", labelKey: "prices" as keyof T, icon: BarChart2 },
  { id: "post", labelKey: "post" as keyof T, icon: Plus },
  { id: "messages", labelKey: "messages" as keyof T, icon: MessageCircle },
  { id: "profile", labelKey: "profile" as keyof T, icon: User },
];

const buyerNavConfig = [
  { id: "home", labelKey: "home" as keyof T, icon: Home },
  { id: "find", labelKey: "findRice" as keyof T, icon: Search },
  { id: "messages", labelKey: "messages" as keyof T, icon: MessageCircle },
  { id: "traceability", labelKey: "trace" as keyof T, icon: FileText },
  { id: "profile", labelKey: "profile" as keyof T, icon: User },
];

/* ─── MAIN APP ───────────────────────────────────────────── */

export default function App() {
  const [role, setRole] = useState<"farmer" | "buyer">("farmer");
  const [screen, setScreen] = useState("home");
  const [lang, setLang] = useState<Lang>("en");
  const [authStage, setAuthStage] = useState<"splash" | "login" | "app">("splash");

  const t = translations[lang] as T & { lang?: Lang };
  const contextValue = { lang, t: { ...t, lang } as any, setLang };

  const nav = role === "farmer" ? farmerNavConfig : buyerNavConfig;

  function renderScreen() {
    if (role === "farmer") {
      switch (screen) {
        case "home": return <FarmerHome setScreen={setScreen} />;
        case "prices": return <PricesScreen />;
        case "post": return <PostHarvestScreen setScreen={setScreen} />;
        case "messages": return <MessagesScreen setScreen={setScreen} />;
        case "profile": return <ProfileScreen />;
        default: return <FarmerHome setScreen={setScreen} />;
      }
    } else {
      switch (screen) {
        case "home": return <BuyerHome setScreen={setScreen} />;
        case "find": return <FindRiceScreen setScreen={setScreen} />;
        case "messages": return <MessagesScreen setScreen={setScreen} />;
        case "traceability": return <TraceabilityScreen />;
        case "profile": return <ProfileScreen />;
        default: return <BuyerHome setScreen={setScreen} />;
      }
    }
  }

  function switchRole(r: "farmer" | "buyer") {
    setRole(r);
    setScreen("home");
  }

  const bodyFont = lang === "km" ? "'Noto Sans Khmer', sans-serif" : "DM Sans, sans-serif";

  return (
    <LangContext.Provider value={contextValue}>
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4" style={{ fontFamily: bodyFont }}>
        {/* Header controls — hidden during splash/login for a focused onboarding feel */}
        {authStage === "app" && (
          <div className="mb-6 flex flex-col items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold text-primary" style={{ fontFamily: lang === "km" ? "'Noto Sans Khmer', sans-serif" : "Outfit, sans-serif" }}>
                {lang === "km" ? "ស្រូវឆ្លាត" : "SrovChlart"}
              </span>
              <span className="text-xs text-muted-foreground px-2 py-0.5 bg-accent/20 rounded-full font-medium" style={{ fontFamily: bodyFont }}>
                {t.prototype}
              </span>
            </div>
            <p className="text-xs text-muted-foreground" style={{ fontFamily: bodyFont }}>{t.tagline}</p>

            {/* Role + Language row */}
            <div className="flex items-center gap-2 mt-1">
              <div className="flex gap-1 bg-secondary rounded-xl p-1">
                <button onClick={() => switchRole("farmer")} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${role === "farmer" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground"}`} style={{ fontFamily: bodyFont }}>
                  {t.farmerView}
                </button>
                <button onClick={() => switchRole("buyer")} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${role === "buyer" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground"}`} style={{ fontFamily: bodyFont }}>
                  {t.buyerView}
                </button>
              </div>
              {/* Language toggle */}
              <div className="flex gap-1 bg-secondary rounded-xl p-1">
                <button onClick={() => setLang("en")} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${lang === "en" ? "bg-accent text-foreground shadow-sm" : "text-muted-foreground"}`}>
                  EN
                </button>
                <button onClick={() => setLang("km")} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${lang === "km" ? "bg-accent text-foreground shadow-sm" : "text-muted-foreground"}`} style={{ fontFamily: "'Noto Sans Khmer', sans-serif" }}>
                  ខ្មែរ
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Compact language toggle during onboarding, top-right of frame */}
        {authStage !== "app" && (
          <div className="mb-3 flex gap-1 bg-secondary rounded-xl p-1">
            <button onClick={() => setLang("en")} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${lang === "en" ? "bg-accent text-foreground shadow-sm" : "text-muted-foreground"}`}>
              EN
            </button>
            <button onClick={() => setLang("km")} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${lang === "km" ? "bg-accent text-foreground shadow-sm" : "text-muted-foreground"}`} style={{ fontFamily: "'Noto Sans Khmer', sans-serif" }}>
              ខ្មែរ
            </button>
          </div>
        )}

        {/* Phone frame */}
        <div
          className="relative bg-card shadow-2xl overflow-hidden flex flex-col"
          style={{ width: 375, height: 720, borderRadius: 44, border: "8px solid #1A4731", boxShadow: "0 32px 64px rgba(26,71,49,0.25), 0 0 0 1px rgba(26,71,49,0.08)" }}
        >
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-1 flex-shrink-0 bg-card" style={{ background: authStage === "splash" ? "#1A4731" : undefined }}>
            <span className="text-[11px] font-semibold" style={{ fontFamily: "DM Mono, monospace", color: authStage === "splash" ? "#FFFDF7" : undefined }}>9:41</span>
            <div className="w-20 h-5 bg-foreground rounded-full mx-auto absolute left-1/2 -translate-x-1/2 top-2 opacity-90" />
            <div className="flex items-center gap-1">
              <div className="flex gap-0.5 items-end">
                {[3, 5, 7, 9].map((h, i) => (
                  <div key={i} className="w-0.5 rounded-sm" style={{ height: h, background: authStage === "splash" ? "#FFFDF7" : "var(--foreground)" }} />
                ))}
              </div>
              <div className="w-4 h-2.5 border rounded-sm relative" style={{ borderColor: authStage === "splash" ? "#FFFDF7" : "var(--foreground)" }}>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0.5 h-1.5 rounded-r-sm" style={{ background: authStage === "splash" ? "#FFFDF7" : "var(--foreground)" }} />
                <div className="absolute inset-0.5 rounded-sm" style={{ width: "70%", background: authStage === "splash" ? "#FFFDF7" : "var(--foreground)" }} />
              </div>
            </div>
          </div>

          {/* Screen content */}
          <div className="flex-1 overflow-hidden" style={{ fontFamily: bodyFont }}>
            {authStage === "splash" && <SplashScreen onDone={() => setAuthStage("login")} />}
            {authStage === "login" && (
              <LoginScreen
                role={role}
                onRoleChange={setRole}
                onLoggedIn={() => setAuthStage("app")}
                onGuest={() => setAuthStage("app")}
              />
            )}
            {authStage === "app" && renderScreen()}
          </div>

          {/* Bottom nav — only once inside the app */}
          {authStage === "app" && (
            <div className="flex-shrink-0 bg-card border-t border-border px-2 pb-5 pt-1">
              <div className="flex">
                {nav.map((item) => {
                  const Icon = item.icon;
                  const active = screen === item.id;
                  const isPost = item.id === "post";
                  const label = t[item.labelKey] as string;
                  return (
                    <button key={item.id} onClick={() => setScreen(item.id)} className="flex-1 flex flex-col items-center gap-0.5 pt-2 pb-1 transition-all">
                      {isPost ? (
                        <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center shadow-md mb-0.5 -mt-4">
                          <Icon size={18} className="text-primary-foreground" />
                        </div>
                      ) : (
                        <Icon size={20} className={`transition-colors ${active ? "text-primary" : "text-muted-foreground"}`} strokeWidth={active ? 2.5 : 1.8} />
                      )}
                      <span className={`text-[9px] font-semibold transition-colors leading-tight text-center ${active ? "text-primary" : "text-muted-foreground"}`} style={lang === "km" ? { fontFamily: "'Noto Sans Khmer', sans-serif", fontSize: "8px" } : {}}>
                        {label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <p className="mt-4 text-[11px] text-muted-foreground" style={{ fontFamily: bodyFont }}>
          {authStage === "app" ? t.tapNav : (lang === "km" ? "គំរូចូល · ការផ្ទៀងផ្ទាត់គឺសម្រាប់បង្ហាញតែប៉ុណ្ណោះ" : "Onboarding demo · verification is simulated")}
        </p>
      </div>
    </LangContext.Provider>
  );
}