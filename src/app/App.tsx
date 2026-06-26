import { useState, useEffect, createContext, useContext, useRef } from "react";
import {
  Home, BarChart2, Plus, MessageCircle, User, Search, Bell,
  TrendingUp, TrendingDown, MapPin, Shield, ShieldCheck, Star,
  ChevronRight, ArrowLeft, Send, FileText, CheckCircle2,
  AlertCircle, Package, X, Check, Phone, Sprout, Image as ImageIcon,
  Paperclip, Trash2, Loader2, Heart, Filter, SlidersHorizontal,
  Clock, Truck, Award, ThumbsUp, Building2, Globe, ChevronDown,
  MoreVertical, Share2, Bookmark, BookmarkCheck, Info, Zap,
  BadgeCheck, CalendarDays, Wheat, BookOpen, PlayCircle, GraduationCap,
  Droplets, Bug, Banknote, Sun, Leaf, ArrowUpRight, BookmarkPlus,
} from "lucide-react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area,
} from "recharts";

/* ═══════════════════════════════════════════════════════════
   DESIGN TOKENS
═══════════════════════════════════════════════════════════ */
const FONTS = {
  en: { display: "'Outfit', sans-serif", body: "'DM Sans', sans-serif" },
  km: { display: "'Kantumruy Pro', sans-serif", body: "'Kantumruy Pro', sans-serif" },
  mono: "'DM Mono', monospace",
};

const C = {
  ink: "#1C2620",
  forest: "#163828",
  forestDeep: "#0E2419",
  forestLight: "#1E4A32",
  gold: "#C9A227",
  goldSoft: "#E4C77A",
  goldPale: "#FBF1D9",
  cream: "#FBF8F0",
  card: "#FFFFFF",
  clay: "#B65C38",
  claySoft: "#F3E3DA",
  sage: "#2F6B49",
  sageSoft: "#DCEEE2",
  line: "#E7E2D3",
  lineOnCard: "#ECE9DF",
  muted: "#7C7563",
  mutedLight: "#A09880",
  overlay: "rgba(14,36,25,0.55)",
  sky: "#2E6F8E",
  skySoft: "#DCEAF0",
};

/* ─── TRANSLATIONS ─────────────────────────────────────── */
const translations = {
  en: {
    farmerView:"Farmer View", buyerView:"Buyer View", prototype:"Prototype",
    tagline:"Rice Market Platform · Cambodia", tapNav:"Tap the nav to explore · Switch Farmer / Buyer above",
    home:"Home", prices:"Prices", post:"Post", messages:"Messages", profile:"Profile",
    findRice:"Find Rice", trace:"Trace", learn:"Learn",
    splashLine:"Fair prices, straight from the field",
    loginAs:"Continue as", phoneNumber:"Phone Number",
    phoneHint:"We'll send a 6-digit code to verify it's you",
    continueBtn:"Continue", enterCode:"Enter the code", codeHint:"Code sent to",
    changeNumber:"Change number", resendCode:"Resend code", resendIn:"Resend in",
    verifyBtn:"Verify & Continue", or:"or", continueGuest:"Continue as Guest",
    newHere:"New to KurSrov? Just enter your number — we'll set up your account.",
    goodMorning:"Good morning,", verifiedFarmer:"Verified Farmer",
    todayPrices:"Today's Market Prices", viewAll:"View all",
    myListings:"My Active Listings", add:"Add",
    buyerMessages:"Buyer Messages", seeAll:"See all",
    priceAlertActive:"Price Alert Active",
    priceAlertDesc:"Jasmine ≥ 2,500 KHR/kg · monitoring daily",
    live:"Live", inquiries:"inquiries", inquiry_one:"inquiry",
    marketPrices:"Market Prices", updatedToday:"Updated today · Jun 26, 2026",
    thirtyDayTrend:"30-Day Trend", provincePrices:"Province Prices",
    setPriceAlert:"Set price alert", vsYesterday:"vs yesterday",
    postHarvest:"Post Harvest", postSubtitle:"List your rice for buyers to find",
    riceVariety:"Rice Variety", quantity:"Quantity", askingPrice:"Asking Price",
    marketRateToday:"Market rate today: 2,450 KHR/kg", province:"Province",
    availableFrom:"Available From", photoOptional:"Photo (Optional)",
    tapToUpload:"Tap to upload rice photo", changePhoto:"Tap to change photo",
    removePhoto:"Remove", uploading:"Uploading...", photoAdded:"Photo added",
    postListing:"Post Listing", listingLive:"Listing is Live!",
    listingLiveDesc:"Your harvest listing is now visible to buyers across Cambodia.",
    backToHome:"Back to Home",
    conversations:"conversations", negotiating:"Negotiating", confirmed:"Confirmed",
    confirmDeal:"Confirm Deal", decline:"Decline", typeMessage:"Type a message...",
    attachPhoto:"Attach photo", typing:"typing...", delivered:"Delivered", sent:"Sent",
    online:"Online", lastSeen:"Last seen", dealConfirmedMsg:"✓ Deal confirmed!",
    declinedMsg:"Offer declined.",
    transactions:"Transactions", tonsSold:"Tons Sold", buyersRated:"Buyers Rated",
    transactionHistory:"Transaction History", buyerReviews:"Buyer Reviews",
    welcomeBack:"Welcome back,", verifiedBuyer:"Verified Buyer",
    newToday:"New Today", activeOrders:"Active Orders", savedFarmers:"Saved Farmers",
    pickup:"Pickup",
    listingsFound:"listings found", verifiedOnly:"Verified sellers only",
    allProvinces:"All Provinces", all:"All",
    listingDetail:"Listing Detail", priceVsMarket:"Price vs Market",
    askingPriceLabel:"Asking Price", marketRateLabel:"Market Rate",
    belowMarket:"below market rate — good deal", aboveMarket:"above market rate",
    openChat:"Chat with Farmer", viewTraceability:"View Traceability Report",
    traceabilityReport:"Traceability Report",
    traceSubtitle:"Supply chain record for export & audit",
    reportId:"Report ID", variety:"Variety", quantityLabel:"Quantity",
    harvestDate:"Harvest Date", transaction:"Transaction", farmOrigin:"Farm Origin",
    farmer:"Farmer", farmSize:"Farm Size", verification:"Verification",
    transactionChain:"Transaction Chain", downloadPdf:"Download PDF Report",
    phonmPenh:"Phnom Penh", kampongCham:"Kampong Cham", preyVeng:"Prey Veng",
    battambang:"Battambang", kandal:"Kandal", kampongThom:"Kampong Thom",
    siemReap:"Siem Reap",
    buyerProfile:"Buyer Profile", memberSince:"Member since",
    totalPurchases:"Total Purchases", totalSpend:"Total Spend",
    preferredVariety:"Preferred Variety", activeRegions:"Active Regions",
    recentOrders:"Recent Orders", about:"About",
    responseRate:"Response rate", avgResponseTime:"Avg response",
    saved:"Saved", unsave:"Unsave",
    makeOffer:"Make Offer", sendInquiry:"Send Inquiry",
    offerPrice:"Your Offer Price",
    offerSent:"Offer Sent!", offerSentDesc:"The farmer will respond shortly.",
    notificationsTitle:"Notifications", markAllRead:"Mark all read",
    priceDropAlert:"Price drop alert", newListing:"New listing near you",
    dealReminder:"Deal reminder",
    // Learn module
    learnTitle:"Learning Hub", learnSubtitle:"Grow better harvests, earn better prices",
    continueReading:"Continue Reading", featured:"Featured This Week",
    allTopics:"All Topics", minRead:"min read", lessons:"lessons", lesson:"lesson",
    catGrowing:"Growing", catWater:"Irrigation", catPest:"Pests", catMarket:"Selling",
    catFinance:"Finance", catWeather:"Weather",
    savedArticles:"Saved Articles", markComplete:"Mark as Complete", completed:"Completed",
    keyTakeaways:"Key Takeaways", relatedLessons:"Related Lessons",
    bySource:"From", searchLearn:"Search lessons...", noSaved:"No saved lessons yet",
    noSavedDesc:"Tap the bookmark icon on any lesson to save it for offline reading.",
    yourProgress:"Your Progress", lessonsCompleted:"lessons completed",
    backToHub:"Back to Hub",
  },
  km: {
    farmerView:"ទស្សនៈកសិករ", buyerView:"ទស្សនៈអ្នកទិញ", prototype:"គំរូ",
    tagline:"វេទិកាទីផ្សារអង្ករ · កម្ពុជា", tapNav:"ចុចរបាររុករក · ប្ដូររវាងកសិករ / អ្នកទិញ",
    home:"ទំព័រដើម", prices:"តម្លៃ", post:"ប្រកាស", messages:"សារ", profile:"គណនី",
    findRice:"រកអង្ករ", trace:"តាមដាន", learn:"រៀន",
    splashLine:"តម្លៃយុត្តិធម៌ ផ្ទាល់ពីចម្ការ",
    loginAs:"បន្តក្នុងនាមជា", phoneNumber:"លេខទូរស័ព្ទ",
    phoneHint:"យើងនឹងផ្ញើលេខកូដ៦ខ្ទង់ ដើម្បីផ្ទៀងផ្ទាត់",
    continueBtn:"បន្ត", enterCode:"បញ្ចូលលេខកូដ", codeHint:"កូដបានផ្ញើទៅ",
    changeNumber:"ប្ដូរលេខទូរស័ព្ទ", resendCode:"ផ្ញើកូដម្ដងទៀត",
    resendIn:"ផ្ញើម្ដងទៀតក្នុង", verifyBtn:"ផ្ទៀងផ្ទាត់ & បន្ត", or:"ឬ",
    continueGuest:"បន្តជាភ្ញៀវ",
    newHere:"ថ្មីលើ KurSrov? គ្រាន់តែបញ្ចូលលេខទូរស័ព្ទ — យើងនឹងរៀបចំគណនីឲ្យ។",
    goodMorning:"អរុណសួស្ដី,", verifiedFarmer:"កសិករបានផ្ទៀងផ្ទាត់",
    todayPrices:"តម្លៃទីផ្សារថ្ងៃនេះ", viewAll:"មើលទាំងអស់",
    myListings:"បញ្ជីដំណូរសកម្ម", add:"បន្ថែម",
    buyerMessages:"សារពីអ្នកទិញ", seeAll:"មើលទាំងអស់",
    priceAlertActive:"ការជូនដំណឹងតម្លៃសកម្ម",
    priceAlertDesc:"ម្លិះ ≥ ២,៥០០ រៀល/គ.ក្រ · ត្រួតពិនិត្យប្រចាំថ្ងៃ",
    live:"សកម្ម", inquiries:"សំណួរ", inquiry_one:"សំណួរ",
    marketPrices:"តម្លៃទីផ្សារ", updatedToday:"ធ្វើបច្ចុប្បន្នភាព · ២៦ មិថុនា ២០២៦",
    thirtyDayTrend:"និន្នាការ ៣០ ថ្ងៃ", provincePrices:"តម្លៃតាមខេត្ត",
    setPriceAlert:"កំណត់ការជូនដំណឹងតម្លៃ", vsYesterday:"បើប្រៀបធៀបម្សិលមិញ",
    postHarvest:"ប្រកាស", postSubtitle:"ប្រកាសអង្ករដើម្បីឲ្យអ្នកទិញរក",
    riceVariety:"ប្រភេទអង្ករ", quantity:"បរិមាណ", askingPrice:"តម្លៃស្នើ",
    marketRateToday:"តម្លៃទីផ្សារថ្ងៃនេះ: ២,៤៥០ រៀល/គ.ក្រ", province:"ខេត្ត",
    availableFrom:"ចាប់ពី", photoOptional:"រូបថត (ស្រេចចិត្ត)",
    tapToUpload:"ចុចដើម្បីផ្ទុករូបថតអង្ករ", changePhoto:"ចុចដើម្បីប្ដូររូបថត",
    removePhoto:"លុប", uploading:"កំពុងផ្ទុក...", photoAdded:"បានបន្ថែមរូបថត",
    postListing:"ប្រកាស", listingLive:"បញ្ជីដំណូរបានប្រកាស!",
    listingLiveDesc:"បញ្ជីដំណូររបស់អ្នកឥឡូវនេះអ្នកទិញទូទាំងប្រទេសអាចមើលឃើញ។",
    backToHome:"ត្រឡប់ទៅផ្ទះ",
    conversations:"ការសន្ទនា", negotiating:"កំពុងចរចា", confirmed:"បានបញ្ជាក់",
    confirmDeal:"បញ្ជាក់កិច្ចព្រមព្រៀង", decline:"បដិសេធ", typeMessage:"វាយសារ...",
    attachPhoto:"ភ្ជាប់រូបថត", typing:"កំពុងវាយ...", delivered:"បានទទួល",
    sent:"បានផ្ញើ", online:"កំពុងប្រើ", lastSeen:"ឃើញចុងក្រោយ",
    dealConfirmedMsg:"✓ កិច្ចព្រមព្រៀងបានបញ្ជាក់!", declinedMsg:"ការផ្ដល់ជូនត្រូវបានបដិសេធ។",
    transactions:"ប្រតិបត្តិការ", tonsSold:"តោនបានលក់", buyersRated:"អ្នកទិញបានវាយតម្លៃ",
    transactionHistory:"ប្រវត្តិប្រតិបត្តិការ", buyerReviews:"ការវាយតម្លៃពីអ្នកទិញ",
    welcomeBack:"សូមស្វាគមន៍,", verifiedBuyer:"អ្នកទិញបានផ្ទៀងផ្ទាត់",
    newToday:"ថ្មីថ្ងៃនេះ", activeOrders:"ការបញ្ជាទិញសកម្ម", savedFarmers:"កសិករដែលបានរក្សាទុក",
    pickup:"ទទួលទំនិញ",
    listingsFound:"បញ្ជីដំណូរ", verifiedOnly:"អ្នកលក់ដែលបានផ្ទៀងផ្ទាត់",
    allProvinces:"គ្រប់ខេត្ត", all:"ទាំងអស់",
    listingDetail:"ព័ត៌មានលម្អិត", priceVsMarket:"តម្លៃ vs ទីផ្សារ",
    askingPriceLabel:"តម្លៃស្នើ", marketRateLabel:"តម្លៃទីផ្សារ",
    belowMarket:"ក្រោមតម្លៃទីផ្សារ — ល្អ", aboveMarket:"លើសតម្លៃទីផ្សារ",
    openChat:"ជជែកជាមួយកសិករ", viewTraceability:"មើលរបាយការណ៍តាមដាន",
    traceabilityReport:"របាយការណ៍តាមដាន",
    traceSubtitle:"កំណត់ហេតុខ្សែអង្គភាពសម្រាប់នាំចេញ",
    reportId:"លេខកូដរបាយការណ៍", variety:"ប្រភេទ", quantityLabel:"បរិមាណ",
    harvestDate:"ថ្ងៃប្រមូលផល", transaction:"ប្រតិបត្តិការ", farmOrigin:"ប្រភពចម្ការ",
    farmer:"កសិករ", farmSize:"ទំហំចម្ការ", verification:"ការផ្ទៀងផ្ទាត់",
    transactionChain:"ខ្សែប្រតិបត្តិការ", downloadPdf:"ទាញយករបាយការណ៍ PDF",
    phonmPenh:"ភ្នំពេញ", kampongCham:"កំពង់ចាម", preyVeng:"ព្រៃវែង",
    battambang:"បាត់ដំបង", kandal:"កណ្ដាល", kampongThom:"កំពង់ធំ", siemReap:"សៀមរាប",
    buyerProfile:"ប្រវត្តិអ្នកទិញ", memberSince:"សមាជិកតាំងពី",
    totalPurchases:"ការទិញសរុប", totalSpend:"ការចំណាយសរុប",
    preferredVariety:"ប្រភេទចូលចិត្ត", activeRegions:"តំបន់សកម្ម",
    recentOrders:"ការបញ្ជាទិញថ្មីៗ", about:"អំពី",
    responseRate:"អត្រាឆ្លើយតប", avgResponseTime:"ពេលឆ្លើយតបជាមធ្យម",
    saved:"រក្សាទុក", unsave:"លុបចោល",
    makeOffer:"ដាក់ការផ្ដល់ជូន", sendInquiry:"ផ្ញើសំណួរ",
    offerPrice:"តម្លៃដែលអ្នកផ្ដល់ជូន",
    offerSent:"ការផ្ដល់ជូនបានផ្ញើ!", offerSentDesc:"កសិករនឹងឆ្លើយតបឆាប់ៗ។",
    notificationsTitle:"ការជូនដំណឹង", markAllRead:"សម្គាល់ទាំងអស់ថាបានអាន",
    priceDropAlert:"ការជូនដំណឹងតម្លៃធ្លាក់", newListing:"បញ្ជីថ្មីជិតអ្នក",
    dealReminder:"រំឭកកិច្ចព្រមព្រៀង",
    // Learn module
    learnTitle:"មជ្ឈមណ្ឌលសិក្សា", learnSubtitle:"ដាំបានច្រើន លក់បានថ្លៃ",
    continueReading:"អានបន្ត", featured:"ពិសេសប្រចាំសប្ដាហ៍",
    allTopics:"ប្រធានបទទាំងអស់", minRead:"នាទីអាន", lessons:"មេរៀន", lesson:"មេរៀន",
    catGrowing:"ការដាំដុះ", catWater:"ប្រព័ន្ធស្រោចស្រព", catPest:"សត្វល្អិត", catMarket:"ការលក់",
    catFinance:"ហិរញ្ញវត្ថុ", catWeather:"អាកាសធាតុ",
    savedArticles:"មេរៀនបានរក្សាទុក", markComplete:"សម្គាល់ថាបានបញ្ចប់", completed:"បានបញ្ចប់",
    keyTakeaways:"ចំណុចសំខាន់", relatedLessons:"មេរៀនពាក់ព័ន្ធ",
    bySource:"ពី", searchLearn:"ស្វែងរកមេរៀន...", noSaved:"មិនទាន់មានមេរៀនបានរក្សាទុក",
    noSavedDesc:"ចុចរូបតំណាងសម្គាល់លើមេរៀនណាមួយ ដើម្បីរក្សាទុកសម្រាប់អានក្រៅបណ្ដាញ។",
    yourProgress:"ដំណើរការសិក្សា", lessonsCompleted:"មេរៀនបានបញ្ចប់",
    backToHub:"ត្រឡប់ទៅមជ្ឈមណ្ឌល",
  },
};

type Lang = "en" | "km";
type T = typeof translations.en;
const LangContext = createContext<{ lang: Lang; t: T & { lang: Lang }; setLang: (l: Lang) => void }>({
  lang: "en", t: { ...translations.en, lang: "en" }, setLang: () => {},
});
function useLang() { return useContext(LangContext); }

/* ─── DATA ──────────────────────────────────────────────── */
const priceHistory = [
  { day:"Jun 1",  jasmine:2150, white:1580, fragrant:1920 },
  { day:"Jun 5",  jasmine:2200, white:1600, fragrant:1950 },
  { day:"Jun 9",  jasmine:2180, white:1570, fragrant:1980 },
  { day:"Jun 13", jasmine:2320, white:1640, fragrant:2050 },
  { day:"Jun 17", jasmine:2280, white:1620, fragrant:2020 },
  { day:"Jun 21", jasmine:2400, white:1680, fragrant:2120 },
  { day:"Jun 26", jasmine:2450, white:1700, fragrant:2180 },
];
const LOGO_SRC =
  "data:image/png;base64,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";

const riceVarietiesData = (t: T & { lang: Lang }) => [
  { id:"jasmine",  name: t.lang==="km"?"អង្ករម្លិះ":"Jasmine Rice",  khmer:"អង្ករម្លិះ",  short:t.lang==="km"?"ម្លិះ":"Jasmine",  price:2450, prev:2400 },
  { id:"white",    name: t.lang==="km"?"អង្ករស":"White Rice",         khmer:"អង្ករស",      short:t.lang==="km"?"ស":"White",          price:1700, prev:1720 },
  { id:"fragrant", name: t.lang==="km"?"អង្ករក្រអូប":"Fragrant Rice", khmer:"អង្ករក្រអូប", short:t.lang==="km"?"ក្រអូប":"Fragrant", price:2180, prev:2120 },
];

const listingsData = (t: T & { lang: Lang }) => [
  { id:1, farmer:"មឿន ភ័កត្រា", farmerEn:"Moeun PheakTra", province:t.kampongCham,
    variety:t.lang==="km"?"អង្ករម្លិះ":"Jasmine Rice", qty:t.lang==="km"?"៨ តោន":"8 ton",
    price:2350, market:2450, rating:4.8, reviews:24, verified:true,
    available:t.lang==="km"?"៣ កក្កដា ២០២៦":"Jul 3, 2026", badge:"សដ",
    photo:"https://cpimg.tistatic.com/05483495/b/4/Indian-Long-Grain-White-Raw-Rice.jpg",
    avatarPhoto:"https://scontent.fpnh18-3.fna.fbcdn.net/v/t39.30808-1/678520495_1650933457032643_3936121581459221630_n.jpg?stp=dst-jpg_tt6&cstp=mx720x720&ctp=s200x200&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHzJvNX7kl5DY6eCkk2qX9doL71ivMJlPSgvvWK8wmU9KqwdQclifZmQ6G35iyKcONPVkwYvT_3p4B2a4S_mbnb&_nc_ohc=x5sn60bHel4Q7kNvwEXEeGG&_nc_oc=AdpcXIcHIB3a913TE6DsnmlIqogurzdAGhLH9Wf-uytRxyX64mk9UBeBkiai9xVz3Wo&_nc_zt=24&_nc_ht=scontent.fpnh18-3.fna&_nc_gid=pCuvmMqfN3ap3dHAi9ngyw&_nc_ss=7b2a8&oh=00_Af9qMAfiMhZVm95UI3hjaJ4oIREBruVAioBGJFsxHOCvGg&oe=6A446829",
    moisture:"14%", cert:"GAP Certified", farmDesc:t.lang==="km"?"ចម្ការ ៥ ហិចតាក្នុងខេត្តកំពង់ចាម":"5-hectare farm in Kampong Cham province",
  },
  { id:2, farmer:"ធី ធេត", farmerEn:"Thy Thet", province:t.preyVeng,
    variety:t.lang==="km"?"អង្ករស":"White Rice", qty:t.lang==="km"?"១៥ តោន":"15 ton",
    price:1680, market:1700, rating:4.5, reviews:11, verified:true,
    available:t.lang==="km"?"១ កក្កដា ២០២៦":"Jul 1, 2026", badge:"ពប",
    photo:"https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=600&h=450&fit=crop&q=80",
    avatarPhoto:"https://scontent.fpnh18-1.fna.fbcdn.net/v/t39.30808-6/545025724_1253425146559773_8051757406193797449_n.jpg?stp=dst-jpg_tt6&cstp=mx1121x1280&ctp=s1121x1280&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEOh008e1J1BQ-8Gbe66OzSQfyj8EIpXcRB_KPwQildxCd82gqVMVUBaE9CqBiA_t8UV62j9ENkJNS66Xw9tYXy&_nc_ohc=oNu9GRZXluoQ7kNvwGzdTsg&_nc_oc=AdqsAALcN4OOAEUytq8pz2r9wTJEYXYYjfJOK2DnIikTeJNE4Pp_VH1tBZJVHtG1NPY&_nc_zt=23&_nc_ht=scontent.fpnh18-1.fna&_nc_gid=Rv4tVQcd5HV-5P6Gw6hyHw&_nc_ss=7b2a8&oh=00_Af-pojd8pp-pTR7o3NMCiboBum57H9iG3Kf7dvYeZgtXMA&oe=6A4475DF",
    moisture:"13%", cert:"Organic Registered", farmDesc:t.lang==="km"?"ចម្ការ ១២ ហិចតាក្នុងខេត្តព្រៃវែង":"12-hectare farm in Prey Veng province",
  },
  { id:3, farmer:"ហ៊ុន ផានុត", farmerEn:"Hun Phanuth", province:t.kandal,
    variety:t.lang==="km"?"អង្ករក្រអូប":"Fragrant Rice", qty:t.lang==="km"?"៤.៥ តោន":"4.5 ton",
    price:2200, market:2180, rating:4.9, reviews:38, verified:true,
    available:t.lang==="km"?"២៨ មិថុនា ២០២៦":"Jun 28, 2026", badge:"មស",
    photo:"https://www.diet-health.info/images/recipes/main_view/jasminreis-thai-siam-rice-by-somkak-fotolia-259858997.jpg",
    avatarPhoto:"https://hunphanuth.vercel.app/images/bl-steven.png",
    moisture:"12%", cert:"Export Quality", farmDesc:t.lang==="km"?"ចម្ការ ៣ ហិចតាក្នុងខេត្តកណ្ដាល":"3-hectare farm in Kandal province",
  },
  { id:4, farmer:"ស័ក្ត", farmerEn:"Sak", province:t.kampongThom,
    variety:t.lang==="km"?"អង្ករម្លិះ":"Jasmine Rice", qty:t.lang==="km"?"២០ តោន":"20 ton",
    price:2400, market:2450, rating:4.2, reviews:7, verified:false,
    available:t.lang==="km"?"១០ កក្កដា ២០២៦":"Jul 10, 2026", badge:"ជរ",
    photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrR2AAu_QUrvsrMdIdQu5wBfXnVfNYUvVinnFCTFu4onwqIN6NMDDaUe4&s=10",
    avatarPhoto:"https://scontent.fpnh18-3.fna.fbcdn.net/v/t39.30808-6/519422756_1473261623839598_296391659635082217_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEG3VNgCjk9qbVVSWaU3fzHl10kKNx-pimXXSQo3H6mKcD5501_7f04xW-FnZYe9yiVzJUW1gGPQOyOK1WpFo1p&_nc_ohc=472EYOMa8ZUQ7kNvwHt7a0q&_nc_oc=AdpyuvGB4ANcGn7fzEzA5lyYMv_4Mf-9aRhcMVce6UtyNGYDRKFj9qeiVn1wM4B-RF0&_nc_zt=23&_nc_ht=scontent.fpnh18-3.fna&_nc_gid=33d93AvL2yTPrcYSWAR2Nw&_nc_ss=7b2a8&oh=00_Af9Z3JY8LbIzJLQJ5M1a7RAmpipRi1RHjHNYQBOzzSlpFQ&oe=6A447E89",
    moisture:"15%", cert:"Pending", farmDesc:t.lang==="km"?"ចម្ការ ១៨ ហិចតាក្នុងខេត្តកំពង់ធំ":"18-hectare farm in Kampong Thom province",
  },
];

const buyerProfileData = (t: T & { lang: Lang }) => ({
  name: t.lang==="km" ? "ឃីម អ៊ីមផតស៍" : "Khim Import Co.",
  nameEn: "Khim Import Co.",
  initials: "HI",
  memberSince: t.lang==="km" ? "ឆ្នាំ ២០២២" : "2022",
  photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&q=80",
  banner: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=200&fit=crop&q=70",
  verified: true,
  rating: 4.7,
  reviews: 31,
  totalPurchases: 47,
  totalSpend: t.lang==="km" ? "~$1.2M USD" : "~$1.2M USD",
  preferredVariety: t.lang==="km" ? "អង្ករម្លិះ" : "Jasmine Rice",
  regions: [t.kampongCham, t.kandal, t.preyVeng],
  responseRate: "96%",
  avgResponse: t.lang==="km" ? "< ២ ម៉ោង" : "< 2 hours",
  about: t.lang==="km"
    ? "ក្រុមហ៊ុននាំចូលនាំចេញ ដែលឯកទេសសម្រាប់ផលិតផលស្រូវ-អង្ករ មានការចែកចាយទូទាំងអាស៊ីអាគ្នេយ៍។"
    : "Specialized rice import-export company with distribution across Southeast Asia. We source directly from verified Cambodian farmers for premium quality assurance.",
  recentOrders: [
    { variety: t.lang==="km"?"អង្ករក្រអូប":"Fragrant Rice", qty: t.lang==="km"?"៤.៥ តោន":"4.5 ton", farmer: t.lang==="km"?"ហ៊ុន ផានុត":"Hun Phanuth", date: t.lang==="km"?"២៥ មិថុនា":"Jun 25", status:"confirmed" },
    { variety: t.lang==="km"?"អង្ករម្លិះ":"Jasmine Rice", qty: t.lang==="km"?"១០ តោន":"10 ton", farmer: t.lang==="km"?"មឿន ភ័កត្រា":"Moeun PheakTra", date: t.lang==="km"?"១០ មិថុនា":"Jun 10", status:"completed" },
    { variety: t.lang==="km"?"អង្ករស":"White Rice", qty: t.lang==="km"?"២០ តោន":"20 ton", farmer: t.lang==="km"?"ធី ធេត":"Thy Thet", date: t.lang==="km"?"២ ឧសភា":"May 2", status:"completed" },
  ],
});

const messagesData = (t: T & { lang: Lang }) => [
  { id:1, buyer:t.lang==="km"?"ឃីម អ៊ីមផតស៍":"Khim Import Co.",
    listing:t.lang==="km"?"អង្ករម្លិះ · ៨ តោន":"Jasmine Rice · 8 ton",
    last:t.lang==="km"?"លោក អាចធ្វើ ២,៣០០ រៀល/គ.ក្រ?":"Can you do 2,300 KHR/kg for the full 8 tons?",
    time:"10:24 AM", unread:2, status:"negotiating", listingId:1 },
  { id:2, buyer:t.lang==="km"?"ម៉ៅ ផ្លូវ មីលីង":"Phnom Penh Milling Ltd.",
    listing:t.lang==="km"?"អង្ករក្រអូប · ៤.៥ តោន":"Fragrant Rice · 4.5 ton",
    last:t.lang==="km"?"បានបញ្ជាក់។ ទទួល ២ កក្កដា។":"Deal confirmed. Pickup on Jul 2.",
    time:t.lang==="km"?"ម្សិលមិញ":"Yesterday", unread:0, status:"confirmed", listingId:3 },
  { id:3, buyer:t.lang==="km"?"គឹម សុខា":"Kim Sokha",
    listing:t.lang==="km"?"អង្ករម្លិះ · ២ តោន":"Jasmine Rice · 2 ton",
    last:t.lang==="km"?"កំរិតសំណើម​ប៉ុន្មាន?":"What is the moisture level?",
    time:"Jun 23", unread:1, status:"inquiry", listingId:1 },
];

const chatThreadsData = (t: T & { lang: Lang }, listingId?: number) => {
  const threads: Record<number, any[]> = {
    1:[
      { id:"m1", from:"buyer", text:t.lang==="km"?"សួស្ដី! ខ្ញុំចាប់អារម្មណ៍លើអង្ករម្លិះ ៨ តោន។":"Hello! I'm interested in your 8 tons of jasmine rice.", time:"10:05 AM" },
      { id:"m2", from:"farmer", text:t.lang==="km"?"បាទ! ចាប់ពី ៣ កក្កដា។ កំរិតសំណើម ១៤%។":"Yes, available from July 3. Moisture level is 14%.", time:"10:08 AM" },
      { id:"m3", from:"buyer", text:t.lang==="km"?"អាចធ្វើ ២,៣០០ រៀល/គ.ក្រ?":"Can you do 2,300 KHR/kg for the full 8 tons?", time:"10:24 AM" },
    ],
    2:[
      { id:"m1", from:"buyer", text:t.lang==="km"?"យើងចង់ទិញអង្ករក្រអូបទាំង ៤.៥ តោន។":"We'd like to buy all 4.5 tons of fragrant rice.", time:"Yesterday" },
      { id:"m2", from:"farmer", text:t.lang==="km"?"ល្អណាស់! ២,២០០ រៀល/គ.ក្រ គុណភាពល្អ ១០០%!":"Great! 2,200 KHR/kg, top quality!", time:"Yesterday" },
      { id:"m3", from:"buyer", text:t.lang==="km"?"បានបញ្ជាក់! ទទួល ២ កក្កដា។":"Deal confirmed. Pickup on Jul 2.", time:"Yesterday" },
    ],
    3:[
      { id:"m1", from:"buyer", text:t.lang==="km"?"ឃើញការប្រកាសអង្ករម្លិះ ២ តោន!":"I saw your jasmine rice listing for 2 tons.", time:"Jun 23" },
      { id:"m2", from:"buyer", text:t.lang==="km"?"កំរិតសំណើម​ប៉ុន្មាន?":"What is the moisture level? Do you have a cert?", time:"Jun 23" },
    ],
  };
  // If opening from listing detail with a new listing, seed a fresh thread
  if (listingId && !threads[listingId]) {
    threads[listingId] = [];
  }
  return threads;
};

const autoReplyPool = (t: T & { lang: Lang }) => t.lang==="km"
  ? ["យល់ព្រម, ខ្ញុំនឹងពិនិត្យ។","តម្លៃអាចចរចា!","សូមអរគុណ!","យើងអាចរៀបចំដឹក!"]
  : ["Got it, let me check on that.","That price could work!","Thanks for the info!","We can arrange transport."];

/* ─── LEARN MODULE DATA ───────────────────────────────── */
type LearnCat = "growing"|"water"|"pest"|"market"|"finance"|"weather";

const learnCategoryMeta = (t: T & { lang: Lang }): Record<LearnCat,{label:string;icon:any;color:string;bg:string}> => ({
  growing:{ label:t.catGrowing, icon:Sprout, color:C.sage, bg:C.sageSoft },
  water:{ label:t.catWater, icon:Droplets, color:C.sky, bg:C.skySoft },
  pest:{ label:t.catPest, icon:Bug, color:C.clay, bg:C.claySoft },
  market:{ label:t.catMarket, icon:Banknote, color:"#8A6B16", bg:C.goldPale },
  finance:{ label:t.catFinance, icon:Banknote, color:C.forest, bg:"rgba(22,56,40,0.08)" },
  weather:{ label:t.catWeather, icon:Sun, color:"#B6862F", bg:"#FBEFD9" },
});

const learnArticlesData = (t: T & { lang: Lang }) => {
  const km = t.lang==="km";
  return [
    {
      id:"l1", cat:"growing" as LearnCat, minutes:6, source:"GDA Cambodia",
      title: km?"រយៈពេលត្រឹមត្រូវសម្រាប់ដាំស្រូវម្លិះ":"Best Planting Window for Jasmine Rice",
      dek: km?"ដាំឲ្យត្រូវរដូវ ដើម្បីបានទិន្នផលខ្ពស់ និងគ្រាប់ស្រូវមានគុណភាពល្អ។"
            :"Time your sowing right and you'll see fuller grains and fewer losses at harvest.",
      photo:"https://static.information.gov.kh/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK2Z0QkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--9c9b01c9bac58ce115466d361a9ba7065b9f65d1/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lNT1RBd2VEWXdNQVk2QmtWVSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--70cbddbba2e46c7ca8ac0c1f8b8316d88752e16d/IMG_9215.jpeg",
      takeaways: km
        ? ["ដាំចន្លោះថ្ងៃទី ១៥ ខែឧសភា ដល់ដើមខែមិថុនា ដើម្បីចំរុះនឹងទឹកភ្លៀង","ប្រើពូជស្រូវដែលធន់នឹងគ្រាប់ស្រូវធ្លាក់មុនកាត់","ត្រួតពិនិត្យកំដៅដី មុនសាបព្រួស ៧ ថ្ងៃ"]
        : ["Sow between mid-May and early June to align with monsoon rains","Choose lodging-resistant varieties to reduce pre-harvest grain loss","Check soil temperature 7 days before sowing for even germination"],
      body: km
        ? "ការជ្រើសរើសពេលដាំត្រឹមត្រូវគឺជាកត្តាសំខាន់បំផុតមួយដែលកសិករអាចគ្រប់គ្រងបាន។ ស្រូវម្លិះត្រូវការប្រហែល ១០៥-១២០ ថ្ងៃដើម្បីពេញវ័យ ដូច្នេះការគណនាថយក្រោយពីកាលបរិច្ឆេទប្រមូលផលដែលចង់បានគឺមានប្រយោជន៍។\n\nការដាំមុនពេលនឹងបង្ហាញដើមស្រូវទៅនឹងកំដៅខ្លាំងពេលចេញផ្កា ដែលអាចកាត់បន្ថយការបង្កក្រណាត់។ ការដាំយឺតពេក នាំឲ្យប្រឈមនឹងភ្លៀងខ្លាំងពេលប្រមូលផល។\n\nអ្នកជំនាញផ្នែកកសិកម្មសម្រាប់ខេត្តកំពង់ចាម និងព្រៃវែង ណែនាំឲ្យតាមដានព្យាករណ៍អាកាសធាតុរយៈពេល ១០ ថ្ងៃ មុនពេលសម្រេចចិត្តកាលបរិច្ឆេទដាំចុងក្រោយ។"
        : "Choosing the right planting window is one of the highest-leverage decisions a farmer can make. Jasmine rice needs roughly 105–120 days to mature, so it helps to count backward from your target harvest date.\n\nPlanting too early exposes flowering plants to extreme heat, which can reduce grain fill. Planting too late raises the risk of heavy rain damaging the crop right at harvest.\n\nAgricultural extension officers in Kampong Cham and Prey Veng recommend checking the 10-day forecast before locking in your final planting date.",
    },
    {
      id:"l2", cat:"water" as LearnCat, minutes:5, source:"Mekong River Commission",
      title: km?"បច្ចេកទេសស្រោចស្រពបន្តិចម្ដងៗដើម្បីសន្សំទឹក":"Alternate Wetting & Drying to Save Water",
      dek: km?"សន្សំទឹកដល់ទៅ ៣០% ដោយមិនប៉ះពាល់ដល់ទិន្នផល។"
            :"Cut water use by up to 30% without hurting yield — here's the technique.",
      photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGJDR86qb_xmr2UP26AZjLEQRUcTsGcpP-w&s",
      takeaways: km
        ? ["ឲ្យដីស្ងួតរហូតដល់ ១៥ ស.ម ក្រោមផ្ទៃដី មុនស្រោចជាថ្មី","ប្រើបំពង់ PVC មានប្រហោងដើម្បីតាមដានកម្រិតទឹក","ឈប់ប្រើវិធីនេះ ២ សប្ដាហ៍មុនពេលចេញផ្កា"]
        : ["Let the field dry until the water table is 15cm below the surface before re-flooding","Use a perforated PVC pipe to monitor water depth easily","Stop alternating 2 weeks before flowering to protect yield"],
      body: km
        ? "ប្រព័ន្ធស្រោចស្រពបន្តិចម្ដងៗ (AWD) គឺជាវិធីដែលអនុញ្ញាតឲ្យដីស្ងួតមួយរយៈ មុនពេលស្រោចទឹកជាថ្មីម្ដងទៀត។ វិធីនេះកាត់បន្ថយការប្រើទឹកដោយមិនធ្វើឲ្យទិន្នផលធ្លាក់ចុះ ហើយថែមទាំងកាត់បន្ថយការបញ្ចេញឧស្ម័នមេតាន់ពីការដាំស្រូវ។\n\nដើម្បីអនុវត្ត សូមដាក់បំពង់ឆ្នូតមានប្រហោងចូលក្នុងដី ដើម្បីមើលកម្រិតទឹកក្រោមដី។ ពេលកម្រិតទឹកធ្លាក់ដល់ ១៥ ស.ម ក្រោមផ្ទៃដី សូមស្រោចទឹកសារជាថ្មីរហូតដល់ប្រហែល ៥ ស.ម។\n\nចំណាំ៖ បន្តស្រោចទឹកជាប់លាប់ក្នុងអំឡុងពេលផ្កាស្រូវចេញ (ប្រហែល ២ សប្ដាហ៍) ព្រោះកង្វះទឹកក្នុងដំណាក់កាលនេះប៉ះពាល់ដល់ទិន្នផលខ្លាំង។"
        : "Alternate Wetting and Drying (AWD) lets the paddy dry out partially before you re-flood it, rather than keeping it continuously flooded. Done correctly, it cuts water use significantly with little to no yield penalty — and it also reduces methane emissions from the field.\n\nTo practice AWD, insert a perforated pipe into the soil to track the water table. When the level drops to about 15cm below the surface, re-flood to roughly 5cm depth.\n\nOne important exception: keep the field continuously flooded during the flowering window (about 2 weeks), since water stress at that stage hits yield the hardest.",
    },
    {
      id:"l3", cat:"pest" as LearnCat, minutes:4, source:"CARDI",
      title: km?"សិក្សាស្គាល់ដង្កូវចៀមស្រូវមុនវាបំផ្លាញដំណាំ":"Spot Brown Planthopper Before It Spreads",
      dek: km?"រកមើលឲ្យឆាប់ អាចសង្គ្រោះស្រូវបានទាំងស្រុង។"
            :"Early detection of this common pest can save your whole field.",
      photo:"https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=360&fit=crop&q=75",
      takeaways: km
        ? ["ពិនិត្យគល់ស្រូវរៀងរាល់សប្ដាហ៍ ដោយញែកស្រូវចេញមើល","សញ្ញាព្រមាន៖ ស្លឹកប្រែលឿង ហើយក្រអូបស្អុយជិតគល់","ប្រើពូជធន់ និងជៀសវាងការប្រើជី N ច្រើនពេក"]
        : ["Check the base of the stems weekly by gently parting the plants","Warning sign: yellowing leaves and a sour smell near the base","Use resistant varieties and avoid over-applying nitrogen fertilizer"],
      body: km
        ? "ដង្កូវចៀមស្រូវ (Brown Planthopper) គឺជាសត្វល្អិតបំផ្លាញដំណាំស្រូវដ៏សំខាន់មួយនៅកម្ពុជា។ វាស្រូបទឹកនោមចេញពីគល់ដើមស្រូវ ធ្វើឲ្យស្លឹកប្រែលឿង និងស្ងួតយ៉ាងលឿន ជាមួយនឹងក្លិនស្អុយជិតគល់។\n\nការប្រើជីអាសូត (នីត្រូសែន) ច្រើនពេក ធ្វើឲ្យដើមស្រូវទន់ និងទាក់ទាញដង្កូវនេះកាន់តែច្រើន។ សូមបែងចែកការប្រើជីជា ៣ ដងជំនួសឲ្យដងតែមួយ។\n\nប្រសិនបើរកឃើញដង្កូវនេះ សូមពិគ្រោះជាមួយមន្ត្រីកសិកម្មក្នុងស្រុកមុនពេលប្រើថ្នាំសម្លាប់សត្វល្អិត ព្រោះការប្រើមិនត្រឹមត្រូវអាចសម្លាប់សត្វល្អិតមានប្រយោជន៍ដែលជាសត្រូវធម្មជាតិរបស់ដង្កូវនេះ។"
        : "The brown planthopper is one of the most damaging rice pests in Cambodia. It feeds on the sap at the base of the plant, causing leaves to yellow and dry rapidly, often with a distinctive sour smell near the stem base.\n\nOver-applying nitrogen fertilizer makes plants softer and more attractive to this pest. Splitting your nitrogen into three applications instead of one dose helps reduce the risk.\n\nIf you spot an outbreak, talk to your local agricultural extension officer before reaching for insecticide — broad-spectrum spraying often kills the natural predators that keep planthopper populations in check.",
    },
    {
      id:"l4", cat:"market" as LearnCat, minutes:5, source:"Khmer Enterprise",
      title: km?"របៀបចរចាតម្លៃជាមួយអ្នកទិញដោយជឿជាក់":"How to Negotiate Price With Confidence",
      dek: km?"ដឹងពីតម្លៃទីផ្សារមុនជជែក នោះអ្នកនឹងលក់បានថ្លៃជាង។"
            :"Know the market rate before you chat — buyers respect sellers who do.",
      photo:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=360&fit=crop&q=75",
      takeaways: km
        ? ["ពិនិត្យតម្លៃទីផ្សារនៅផ្ទាំង \"តម្លៃ\" មុនឆ្លើយតបអ្នកទិញ","កុំទទួលយកការផ្ដល់ជូនដំបូងបង្អស់ជានិច្ច","សាកសួរអំពីការដឹកជញ្ជូន និងពេលបង់ប្រាក់ផងដែរ"]
        : ["Check the Prices tab before responding to any buyer message", "Never accept the first offer automatically — counter at least once", "Always confirm pickup logistics and payment timing, not just price"],
      body: km
        ? "កសិករជាច្រើនទទួលយកការផ្ដល់ជូនដំបូងព្រោះខ្លាចខកខានឱកាសលក់។ ប៉ុន្ដែអ្នកទិញច្រើនតែបើកការផ្ដល់ជូនទាបជាងតម្លៃទីផ្សារ ដោយរំពឹងថានឹងមានការចរចា។\n\nមុនពេលឆ្លើយតបអ្នកទិញណាមួយ សូមបើកមើលផ្ទាំង \"តម្លៃ\" ដើម្បីដឹងពីតម្លៃថ្ងៃនេះតាមប្រភេទស្រូវ និងខេត្តរបស់អ្នក។ បន្ទាប់មកអ្នកអាចឆ្លើយតបដោយទុកចិត្ត ដោយដឹងថាការផ្ដល់ជូនមួយណាសមរម្យ។\n\nការចរចាមិនមែនគ្រាន់តែជាតម្លៃប៉ុណ្ណោះទេ៖ សួរអំពីពេលដឹកជញ្ជូន អ្នកណាជាអ្នកចំណាយលើការដឹក និងពេលណាដែលអ្នកនឹងទទួលប្រាក់។ កិច្ចព្រមព្រៀងល្អបំផុតគឺកិច្ចព្រមព្រៀងដែលច្បាស់លាស់លើគ្រប់ចំណុច។"
        : "Many farmers accept the first offer out of fear of losing the sale. But buyers often open below market rate, expecting some back-and-forth.\n\nBefore replying to any buyer, check the Prices tab to see today's rate for your variety and province. That number is your anchor — it lets you respond with confidence instead of guessing.\n\nNegotiation isn't just about price per kilo. Ask about pickup timing, who covers transport, and exactly when payment will land. The strongest deals are the ones with no surprises on either side.",
    },
    {
      id:"l5", cat:"finance" as LearnCat, minutes:7, source:"ACLEDA Bank",
      title: km?"ផែនការចំណូលរបស់កសិករបន្ទាប់ពីប្រមូលផល":"Managing Cash Flow After Harvest",
      dek: km?"ការប្រមូលផលជោគជ័យតែមួយមិនអាចធានាបានទាំងឆ្នាំ — ផែនការទើបជាគន្លឹះ។"
            :"One good harvest doesn't guarantee a good year — planning does.",
      photo:"https://www.khmertimeskh.com/wp-content/uploads/2024/10/90226.jpg",
      takeaways: km
        ? ["ដាក់ប្រាក់ ១០-១៥% នៃប្រាក់លក់ ទុកសម្រាប់ការចំណាយរដូវក្រោយ","កុំចង់បានប្រាក់ភ្លាមៗ ហើយលក់ថោកជាងតម្លៃទីផ្សារ","ប្រើកិច្ចសន្យាដឹកជញ្ជូនជាលក្ខណៈអក្សរសម្រាប់ការបញ្ជាទិញធំ"]
        : ["Set aside 10–15% of sale proceeds for next season's inputs before spending", "Avoid rushing to sell below market rate just to get cash quickly", "Use written agreements for large orders, even informal ones, to avoid disputes"],
      body: km
        ? "ប្រាក់ចំណូលពីការប្រមូលផលអាចមើលទៅច្រើន ប៉ុន្ដែវាត្រូវគ្របដណ្ដប់ការចំណាយរហូតដល់ការប្រមូលផលលើកក្រោយ។ កសិករជោគជ័យជាច្រើនបែងចែកប្រាក់ចំណូលជា ៣ ផ្នែក៖ ការចំណាយផ្ទះ ការវិនិយោគរដូវក្រោយ និងការសន្សំសម្រាប់ករណីអាសន្ន។\n\nការប្រញាប់លក់ភ្លាមៗដោយមិនប្រៀបធៀបតម្លៃ ជារឿយៗនាំឲ្យខាតបង់ច្រើនជាងការរង់ចាំពីរបីថ្ងៃ។ ប្រសិនបើអ្នកមិនបាច់ប្រាក់ភ្លាមៗ សូមប្រៀបធៀបការផ្ដល់ជូនពីអ្នកទិញច្រើននាក់សិន។\n\nចំពោះការបញ្ជាទិញធំ សូមកត់ត្រាលក្ខខណ្ឌជាលក្ខណៈអក្សរ ទោះបីជាសាមញ្ញក៏ដោយ — បរិមាណ តម្លៃ កាលបរិច្ឆេទទទួល និងលក្ខខណ្ឌបង់ប្រាក់ — ដើម្បីការពារភាគីទាំងសងខាង។"
        : "Harvest income can look large, but it has to cover expenses all the way to the next harvest. Many successful farmers split proceeds into three buckets: household needs, next season's inputs, and an emergency reserve.\n\nRushing to sell without comparing offers often costs more than waiting a few extra days. If you don't need cash immediately, compare bids from a few buyers before committing.\n\nFor larger orders, write down the terms even informally — quantity, price, pickup date, and payment terms — to protect both sides if anything is disputed later.",
    },
    {
      id:"l6", cat:"weather" as LearnCat, minutes:4, source:"Cambodia Meteorology Dept.",
      title: km?"រៀបចំខ្លួនសម្រាប់រដូវភ្លៀងមិនទៀងទាត់":"Preparing for an Unpredictable Wet Season",
      dek: km?"ឆ្នាំ ២០២៦ ព្យាករថានឹងមានភ្លៀងធ្លាក់មិនទៀងទាត់ — នេះជារបៀបការពារដំណាំ។"
            :"This year's forecast shows uneven rainfall — here's how to protect your crop.",
      photo:"https://images.unsplash.com/photo-1428592953211-077101b2021b?w=600&h=360&fit=crop&q=75",
      takeaways: km
        ? ["ត្រួតពិនិត្យប្រឡាយលូទឹកមុនរដូវភ្លៀងមកដល់","រក្សាទុកគ្រាប់ពូជបន្ថែម ២០% ក្នុងករណីត្រូវដាំជាថ្មី","តាមដានព្យាករណ៍អាកាសធាតុរយៈពេលខ្លីជារៀងរាល់សប្ដាហ៍"]
        : ["Clear drainage canals before the rains intensify to prevent flooding", "Keep 20% extra seed in reserve in case replanting is needed", "Check short-range forecasts weekly rather than relying on the season average"],
      body: km
        ? "ការព្យាករណ៍អាកាសធាតុឆ្នាំ ២០២៦ បង្ហាញពីលំនាំភ្លៀងមិនទៀងទាត់ជាងធម្មតា ដោយមានរយៈពេលស្ងួតយូរជំនួសដោយភ្លៀងខ្លាំងភ្លាមៗ។ លំនាំបែបនេះបង្កការប្រឈមដល់ដំណាំស្រូវទាំងពីរផ្នែក៖ ការខ្វះទឹក និងការជន់លិច។\n\nការត្រួតពិនិត្យប្រឡាយលូទឹកជុំវិញចំការ មុនពេលរដូវភ្លៀងចូលដល់ កាត់បន្ថយហានិភ័យជន់លិចភ្លាមៗ។ ការសម្ងួតប្រឡាយឲ្យបានស្អាត អនុញ្ញាតឲ្យទឹកហូរចេញលឿនជាងមុន។\n\nការរក្សាទុកគ្រាប់ពូជបន្ថែមផងដែរ ផ្ដល់ភាពបត់បែនបើត្រូវការដាំជាថ្មីដោយសារតែការខូចខាតដំបូង។ កុំពឹងផ្អែកតែលើព្យាករណ៍រដូវប៉ុណ្ណោះ — ត្រួតពិនិត្យព្យាករណ៍រយៈពេលខ្លីជារៀងរាល់សប្ដាហ៍ដើម្បីសម្រេចចិត្តបានត្រឹមត្រូវ។"
        : "The 2026 seasonal outlook shows a more erratic rainfall pattern than usual, with longer dry spells punctuated by sudden heavy bursts. That combination creates risk on both ends — drought stress and flash flooding.\n\nClearing drainage canals around your field before the rains intensify reduces the risk of sudden flooding. Clean channels let excess water drain faster instead of pooling around the root zone.\n\nKeeping a reserve of extra seed gives you flexibility to replant if an early planting is damaged. Don't rely on the seasonal outlook alone — check short-range forecasts weekly so you can react in time.",
    },
  ];
};

/* ─── HELPERS ─────────────────────────────────────────── */
function khFont(lang: Lang) { return lang==="km" ? { fontFamily:FONTS.km.body } : {}; }
function displayFont(lang: Lang) { return lang==="km" ? { fontFamily:FONTS.km.display } : { fontFamily:FONTS.en.display }; }

function PriceChange({ current, prev }: { current:number; prev:number }) {
  const diff = current - prev;
  const pct = ((diff/prev)*100).toFixed(1);
  const up = diff >= 0;
  return (
    <span className="inline-flex items-center gap-0.5 text-xs font-semibold"
      style={{ color:up?C.sage:C.clay, fontFamily:FONTS.mono }}>
      {up ? <TrendingUp size={11} strokeWidth={2.5}/> : <TrendingDown size={11} strokeWidth={2.5}/>}
      {up?"+":""}{pct}%
    </span>
  );
}

function Badge({ text, tone="neutral" }: { text:string; tone?:"neutral"|"sage"|"clay"|"gold"|"forest" }) {
  const {lang} = useLang();
  const p = {
    neutral:{bg:"#F1EEE3",fg:C.muted}, sage:{bg:C.sageSoft,fg:C.sage},
    clay:{bg:C.claySoft,fg:C.clay}, gold:{bg:C.goldPale,fg:"#8A6B16"},
    forest:{bg:"rgba(22,56,40,0.08)",fg:C.forest},
  }[tone];
  return <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wide"
    style={{ background:p.bg, color:p.fg, ...khFont(lang) }}>{text}</span>;
}

function Avatar({ initials, size="md", photo }: { initials:string; size?:"sm"|"md"|"lg"|"xl"; photo?:string }) {
  const {lang} = useLang();
  const [errored, setErrored] = useState(false);
  const s = size==="sm"?"w-8 h-8 text-xs":size==="lg"?"w-14 h-14 text-base":size==="xl"?"w-20 h-20 text-xl":"w-9 h-9 text-sm";
  if (photo && !errored) {
    return <img src={photo} alt={initials} onError={()=>setErrored(true)}
      className={`${s} rounded-full object-cover flex-shrink-0`}
      style={{ border:`2px solid ${C.card}`, boxShadow:`0 0 0 1px ${C.lineOnCard}` }}/>;
  }
  return <div className={`${s} rounded-full flex items-center justify-center font-semibold flex-shrink-0`}
    style={{ background:C.forest, color:C.cream, ...khFont(lang) }}>{initials}</div>;
}

function ImageWithFallback({ src, alt, className }: { src?:string; alt:string; className?:string }) {
  const [errored, setErrored] = useState(false);
  if (!src||errored) return (
    <div className={`${className} flex items-center justify-center`}
      style={{ background:`linear-gradient(135deg,${C.sageSoft},${C.goldSoft}40)` }}>
      <Sprout size={22} style={{ color:C.forest, opacity:0.35 }}/>
    </div>
  );
  return <img src={src} alt={alt} onError={()=>setErrored(true)} className={className} loading="lazy"/>;
}

function StarRow({ rating, count }: { rating:number; count:number }) {
  return <span className="inline-flex items-center gap-1 text-xs" style={{ color:C.muted }}>
    <Star size={11} style={{ fill:C.gold, color:C.gold }}/>
    <span className="font-semibold" style={{ color:C.ink, fontFamily:FONTS.mono }}>{rating}</span>
    <span>({count})</span>
  </span>;
}

function SectionLabel({ children }: { children:string }) {
  const {lang} = useLang();
  return <p className="text-[11px] font-semibold uppercase tracking-widest"
    style={{ color:C.muted, ...(lang==="km"?{fontFamily:FONTS.km.body,textTransform:"none"as const,letterSpacing:0}:{}) }}>
    {children}</p>;
}

function GrainSeal({ size=40, children }: { size?:number; children:React.ReactNode }) {
  return <div className="flex items-center justify-center flex-shrink-0"
    style={{ width:size, height:size, borderRadius:"50%",
      background:`radial-gradient(circle at 32% 28%,${C.goldSoft} 0%,${C.gold} 55%,#A9871C 100%)`,
      boxShadow:`0 3px 10px rgba(201,162,39,0.45),inset 0 1px 0 rgba(255,255,255,0.35)` }}>
    {children}
  </div>;
}

function PhotoUpload({ value, onChange, inputId }: { value:string|null; onChange:(d:string|null)=>void; inputId?:string }) {
  const {t,lang} = useLang();
  const [loading, setLoading] = useState(false);
  const id = inputId||"srov-photo-main";
  function handleFile(file:File|undefined) {
    if (!file) return;
    setLoading(true);
    const r = new FileReader();
    r.onload = () => { setTimeout(()=>{ onChange(r.result as string); setLoading(false); },450); };
    r.readAsDataURL(file);
  }
  if (value) return (
    <div className="relative rounded-xl overflow-hidden group" style={{ border:`1px solid ${C.lineOnCard}` }}>
      <img src={value} alt="" className="w-full h-36 object-cover"/>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"/>
      <label htmlFor={id} className="absolute bottom-2 left-2 backdrop-blur px-2.5 py-1.5 rounded-lg text-[11px] font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm"
        style={{ background:"rgba(255,255,255,0.92)", color:C.ink, ...khFont(lang) }}>
        <ImageIcon size={11}/> {t.changePhoto}
      </label>
      <button type="button" onClick={()=>onChange(null)} className="absolute bottom-2 right-2 backdrop-blur px-2.5 py-1.5 rounded-lg text-[11px] font-semibold text-white flex items-center gap-1.5 shadow-sm"
        style={{ background:"rgba(182,92,56,0.92)", ...khFont(lang) }}>
        <Trash2 size={11}/> {t.removePhoto}
      </button>
      <input id={id} type="file" accept="image/*" className="hidden" onChange={e=>handleFile(e.target.files?.[0])}/>
    </div>
  );
  return (
    <label htmlFor={id} className="rounded-xl p-4 text-center flex flex-col items-center justify-center cursor-pointer transition-colors h-36"
      style={{ background:C.card, border:`1.5px dashed ${C.lineOnCard}` }}>
      {loading ? (<><Loader2 size={20} className="mb-1 animate-spin" style={{ color:C.forest }}/><p className="text-xs" style={{ color:C.muted,...khFont(lang) }}>{t.uploading}</p></>)
        : (<><Package size={20} className="mb-1" style={{ color:C.muted }}/><p className="text-xs" style={{ color:C.muted,...khFont(lang) }}>{t.tapToUpload}</p></>)}
      <input id={id} type="file" accept="image/*" className="hidden" onChange={e=>handleFile(e.target.files?.[0])}/>
    </label>
  );
}

/* ─── SPLASH ──────────────────────────────────────────── */
function SplashScreen({ onDone }: { onDone:()=>void }) {
  const {t,lang} = useLang();
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const t1=setTimeout(()=>setStage(1),700);
    const t2=setTimeout(()=>setStage(2),2100);
    const t3=setTimeout(onDone,2550);
    return ()=>{clearTimeout(t1);clearTimeout(t2);clearTimeout(t3);};
  },[]);
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 transition-opacity duration-500 relative overflow-hidden"
      style={{ background:C.forestDeep, opacity:stage===2?0:1 }}>
      <div className="absolute inset-0" style={{
        backgroundImage:"url(https://images.unsplash.com/photo-1536304993881-ff6e9eefa49a?w=800&q=60)",
        backgroundSize:"cover", backgroundPosition:"center",
        opacity:stage>=1?0.22:0, transition:"opacity 1200ms ease" }}/>
      <div className="absolute inset-0" style={{ background:`linear-gradient(180deg,${C.forestDeep} 0%,rgba(14,36,25,0.78) 45%,${C.forestDeep} 100%)` }}/>
      <div className="relative z-10 mb-5" style={{
        opacity:stage>=1?1:0, transform:stage>=1?"scale(1)":"scale(0.8)",
        transition:"all 700ms cubic-bezier(0.34,1.56,0.64,1)" }}>
        <div className="w-20 h-20 rounded-2xl flex items-center justify-center"
          style={{ background:`linear-gradient(135deg,${C.forest},${C.forestDeep})` }}>
                <img src={LOGO_SRC} alt="KurSrov" className="w-full h-full object-contain drop-shadow-lg" />

        </div>
      </div>
      <h1 className="text-3xl font-bold tracking-tight relative z-10"
        style={{ color:"#FCFAF2", ...displayFont(lang),
          opacity:stage>=1?1:0, transform:stage>=1?"translateY(0)":"translateY(8px)",
          transition:"all 500ms ease 100ms" }}>
        {lang==="km"?"កួរស្រូវ":"KurSrov"}
      </h1>
      <p className="text-xs mt-2 text-center relative z-10"
        style={{ color:"rgba(252,250,242,0.65)", ...khFont(lang),
          opacity:stage>=1?1:0, transition:"opacity 500ms ease 250ms" }}>
        {t.splashLine}
      </p>
      <div className="absolute bottom-14 flex gap-2 z-10">
        {[0,1,2].map(i=><div key={i} className="w-1.5 h-1.5 rounded-full"
          style={{ background:C.gold, opacity:stage>=1?0.9:0.2,
            animation:stage>=1?`srov-pulse 1.1s ease-in-out ${i*0.18}s infinite`:"none" }}/>)}
      </div>
      <style>{`@keyframes srov-pulse{0%,100%{transform:scale(1);opacity:0.4}50%{transform:scale(1.5);opacity:1}}`}</style>
    </div>
  );
}

/* ─── LOGIN ───────────────────────────────────────────── */
function LoginScreen({ role, onRoleChange, onLoggedIn, onGuest }:
  { role:"farmer"|"buyer"; onRoleChange:(r:"farmer"|"buyer")=>void; onLoggedIn:()=>void; onGuest:()=>void }) {
  const {t,lang} = useLang();
  const [phase, setPhase] = useState<"phone"|"otp">("phone");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState(["","","","","",""]);
  const [seconds, setSeconds] = useState(30);
  useEffect(()=>{
    if(phase!=="otp"||seconds<=0) return;
    const id=setTimeout(()=>setSeconds(s=>s-1),1000);
    return()=>clearTimeout(id);
  },[phase,seconds]);
  const phoneValid = phone.replace(/\D/g,"").length>=8;
  const codeComplete = code.every(c=>c!=="");
  function handleCodeChange(idx:number,val:string){
    if(!/^\d?$/.test(val)) return;
    const next=[...code]; next[idx]=val; setCode(next);
    if(val&&idx<5)(document.getElementById(`srov-otp-${idx+1}`) as HTMLInputElement|null)?.focus();
  }
  const labelStyle = lang==="km"?{fontFamily:FONTS.km.body,textTransform:"none"as const,letterSpacing:0}:{};
  return (
    <div className="flex flex-col h-full" style={{ background:C.cream }}>
      <div className="px-6 pt-8 pb-4 flex-shrink-0">
        {phase==="otp"
          ? <button onClick={()=>{setPhase("phone");setCode(["","","","","",""]);}} className="flex items-center gap-1.5 text-xs mb-5" style={{ color:C.muted }}>
              <ArrowLeft size={14}/>{t.changeNumber}</button>
          : <div className="mb-5 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" >
                <img src={LOGO_SRC} alt="KurSrov" className="w-full h-full object-contain drop-shadow-lg" />
              </div>
              <div>
                <p className="text-lg font-bold" style={{ color:C.forest, ...displayFont(lang) }}>{lang==="km"?"កួរស្រូវ":"KurSrov"}</p>
                <p className="text-[10px]" style={{ color:C.muted }}>Cambodia Rice Market</p>
              </div>
            </div>}
        <h1 className="text-2xl font-bold" style={{ color:C.ink, ...displayFont(lang) }}>
          {phase==="phone"?(lang==="km"?"សូមស្វាគមន៍":"Welcome"):t.enterCode}</h1>
        <p className="text-xs mt-1" style={{ color:C.muted, ...khFont(lang) }}>
          {phase==="phone"?t.phoneHint:`${t.codeHint} ${phone||"+855 •• ••• •••"}`}</p>
      </div>
      <div className="flex-1 overflow-y-auto px-6">
        {phase==="phone"&&<div className="mb-4">
          <label className="text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color:C.muted,...labelStyle }}>{t.loginAs}</label>
          <div className="grid grid-cols-2 gap-2">
            {[{r:"farmer" as const,icon:Sprout,label:lang==="km"?"កសិករ":"Farmer"},
              {r:"buyer" as const,icon:Package,label:lang==="km"?"អ្នកទិញ":"Buyer"}].map(({r,icon:Icon,label})=>(
              <button key={r} onClick={()=>onRoleChange(r)} className="py-4 rounded-xl text-sm font-semibold border transition-all flex flex-col items-center gap-2"
                style={role===r?{background:C.forest,color:C.cream,borderColor:C.forest,...khFont(lang)}
                  :{background:C.card,borderColor:C.lineOnCard,color:C.ink,...khFont(lang)}}>
                <Icon size={20}/>{label}</button>))}
          </div>
        </div>}
        {phase==="phone"
          ? <div className="mb-2">
              <label className="text-xs font-semibold uppercase tracking-wider block mb-1.5" style={{ color:C.muted,...labelStyle }}>{t.phoneNumber}</label>
              <div className="flex items-center rounded-xl px-3 focus-within:ring-1 focus-within:ring-green-700"
                style={{ background:C.card, border:`1px solid ${C.lineOnCard}` }}>
                <span className="text-sm font-medium pr-2 mr-2" style={{ color:C.muted,fontFamily:FONTS.mono,borderRight:`1px solid ${C.lineOnCard}` }}>+855</span>
                <Phone size={14} style={{ color:C.muted }} className="mr-2"/>
                <input type="tel" inputMode="numeric" placeholder="12 345 678" value={phone} onChange={e=>setPhone(e.target.value)}
                  className="flex-1 bg-transparent py-3 text-sm focus:outline-none" style={{ color:C.ink,fontFamily:FONTS.mono }}/>
              </div>
            </div>
          : <div className="flex justify-between gap-2 mb-2">
              {code.map((c,i)=><input key={i} id={`srov-otp-${i}`} value={c}
                onChange={e=>handleCodeChange(i,e.target.value)}
                onKeyDown={e=>{if(e.key==="Backspace"&&!c&&i>0)(document.getElementById(`srov-otp-${i-1}`) as HTMLInputElement|null)?.focus();}}
                inputMode="numeric" maxLength={1}
                className="w-full aspect-square text-center text-xl font-bold rounded-xl focus:outline-none transition-all"
                style={{ fontFamily:FONTS.mono,background:C.card,color:C.ink,
                  border:`2px solid ${c?C.forest:C.lineOnCard}`,
                  boxShadow:c?`0 0 0 3px rgba(22,56,40,0.1)`:undefined }}/>)}
            </div>}
        {phase==="otp"&&<div className="text-center mt-3">
          {seconds>0?<p className="text-xs" style={{ color:C.muted,...khFont(lang) }}>{t.resendIn} <span style={{ fontFamily:FONTS.mono }}>0:{seconds.toString().padStart(2,"0")}</span></p>
            :<button onClick={()=>setSeconds(30)} className="text-xs font-semibold" style={{ color:C.forest,...khFont(lang) }}>{t.resendCode}</button>}
        </div>}
        {phase==="phone"&&<p className="text-[11px] mt-4 leading-relaxed" style={{ color:C.muted,...khFont(lang) }}>{t.newHere}</p>}
      </div>
      <div className="px-6 pb-7 pt-3 flex-shrink-0 space-y-3">
        {phase==="phone"
          ? <button disabled={!phoneValid} onClick={()=>setPhase("otp")} className="w-full py-3.5 rounded-xl text-sm font-semibold transition-all"
              style={phoneValid?{background:C.forest,color:C.cream,...khFont(lang),boxShadow:`0 4px 14px rgba(22,56,40,0.3)`}
                :{background:"#EAE5D6",color:C.muted,...khFont(lang) }}>{t.continueBtn}</button>
          : <button disabled={!codeComplete} onClick={onLoggedIn} className="w-full py-3.5 rounded-xl text-sm font-semibold transition-all"
              style={codeComplete?{background:C.forest,color:C.cream,...khFont(lang),boxShadow:`0 4px 14px rgba(22,56,40,0.3)`}
                :{background:"#EAE5D6",color:C.muted,...khFont(lang) }}>{t.verifyBtn}</button>}
        {phase==="phone"&&<>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-px" style={{ background:C.lineOnCard }}/>
            <span className="text-[10px] uppercase tracking-wider" style={{ color:C.muted,...khFont(lang) }}>{t.or}</span>
            <div className="flex-1 h-px" style={{ background:C.lineOnCard }}/>
          </div>
          <button onClick={onGuest} className="w-full py-3 rounded-xl text-sm font-semibold"
            style={{ background:C.card,border:`1px solid ${C.lineOnCard}`,color:C.ink,...khFont(lang) }}>{t.continueGuest}</button>
        </>}
      </div>
    </div>
  );
}

/* ─── NOTIFICATIONS PANEL ─────────────────────────────── */
function NotificationsPanel({ onClose }: { onClose:()=>void }) {
  const {t,lang} = useLang();
  const notifs = [
    { icon:TrendingDown, color:C.clay, bg:C.claySoft,
      title:t.priceDropAlert, body:lang==="km"?"អង្ករស ១,៧០០ → ១,៦៥០ រៀល/គ.ក្រ":"White Rice dropped: 1,700 → 1,650 KHR/kg", time:"2m", unread:true },
    { icon:Sprout, color:C.sage, bg:C.sageSoft,
      title:t.newListing, body:lang==="km"?"ស៊ូ ផ្ទាំង ប្រកាសអង្ករម្លិះ ១០ តោន":"Suong Thang posted Jasmine 10 ton in Kandal", time:"1h", unread:true },
    { icon:CheckCircle2, color:C.gold, bg:C.goldPale,
      title:t.dealReminder, body:lang==="km"?"ទទួលអង្ករក្រអូបត្រូវធ្វើ ២ កក្កដា":"Fragrant Rice pickup due Jul 2 — confirm with Sophea", time:"3h", unread:false },
  ];
  return (
    <div className="absolute inset-0 z-50 flex flex-col" style={{ background:C.cream }}>
      <div className="px-4 pt-5 pb-3 flex items-center justify-between flex-shrink-0" style={{ borderBottom:`1px solid ${C.line}` }}>
        <h2 className="text-lg font-bold" style={{ color:C.ink,...displayFont(lang) }}>{t.notificationsTitle}</h2>
        <div className="flex items-center gap-3">
          <button className="text-[11px] font-semibold" style={{ color:C.forest,...khFont(lang) }}>{t.markAllRead}</button>
          <button onClick={onClose}><X size={18} style={{ color:C.ink }}/></button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
        {notifs.map((n,i)=>{
          const Icon=n.icon;
          return <div key={i} className="rounded-xl p-3 flex items-start gap-3"
            style={{ background:n.unread?"rgba(22,56,40,0.04)":C.card, border:`1px solid ${n.unread?"rgba(22,56,40,0.12)":C.lineOnCard}` }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background:n.bg }}>
              <Icon size={16} style={{ color:n.color }}/>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-0.5">
                <p className="text-xs font-semibold" style={{ color:C.ink,...khFont(lang) }}>{n.title}</p>
                <span className="text-[10px]" style={{ color:C.muted,fontFamily:FONTS.mono }}>{n.time}</span>
              </div>
              <p className="text-[11px] leading-relaxed" style={{ color:C.muted,...khFont(lang) }}>{n.body}</p>
            </div>
            {n.unread&&<div className="w-2 h-2 rounded-full flex-shrink-0 mt-1" style={{ background:C.forest }}/>}
          </div>;
        })}
      </div>
    </div>
  );
}

/* ─── LEARN HUB & ARTICLE ──────────────────────────────── */
function LearnHubScreen({ onOpenArticle, savedIds, completedIds }:
  { onOpenArticle:(id:string)=>void; savedIds:string[]; completedIds:string[] }) {
  const {t,lang} = useLang();
  const articles = learnArticlesData(t);
  const catMeta = learnCategoryMeta(t);
  const [activeCat, setActiveCat] = useState<LearnCat|"all">("all");
  const [showSaved, setShowSaved] = useState(false);
  const cats: LearnCat[] = ["growing","water","pest","market","finance","weather"];
  const featured = articles[0];
  const filtered = articles.filter(a=>activeCat==="all"||a.cat===activeCat);
  const savedArticles = articles.filter(a=>savedIds.includes(a.id));

  if (showSaved) {
    return (
      <div className="flex flex-col h-full overflow-y-auto scrollbar-hide" style={{ background:C.cream }}>
        <div className="px-3 pt-4 pb-2 flex items-center gap-2 flex-shrink-0" style={{ background:C.card,borderBottom:`1px solid ${C.lineOnCard}` }}>
          <button onClick={()=>setShowSaved(false)} className="p-1"><ArrowLeft size={18} style={{ color:C.ink }}/></button>
          <p className="text-sm font-semibold" style={{ color:C.ink,...khFont(lang) }}>{t.savedArticles}</p>
        </div>
        {savedArticles.length===0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-10 text-center">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3" style={{ background:C.sageSoft }}>
              <Bookmark size={22} style={{ color:C.sage }}/>
            </div>
            <p className="text-sm font-semibold mb-1" style={{ color:C.ink,...khFont(lang) }}>{t.noSaved}</p>
            <p className="text-xs leading-relaxed" style={{ color:C.muted,...khFont(lang) }}>{t.noSavedDesc}</p>
          </div>
        ) : (
          <div className="px-4 py-4 space-y-2">
            {savedArticles.map(a=>{
              const meta=catMeta[a.cat]; const CatIcon=meta.icon;
              return (
                <button key={a.id} onClick={()=>onOpenArticle(a.id)} className="w-full rounded-xl p-2.5 flex items-center gap-3 text-left"
                  style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0" style={{ background:meta.bg }}>
                    <ImageWithFallback src={a.photo} alt={a.title} className="w-full h-full object-cover"/>
                  </div>
                  <div className="flex-1 min-w-0">
                    <Badge text={meta.label} tone="neutral"/>
                    <p className="text-sm font-semibold mt-1 leading-snug" style={{ color:C.ink,...khFont(lang) }}>{a.title}</p>
                    <p className="text-[10px] mt-0.5" style={{ color:C.muted,...khFont(lang) }}>{a.minutes} {t.minRead}</p>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full overflow-y-auto scrollbar-hide" style={{ background:C.cream }}>
      <div className="px-4 pt-5 pb-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold" style={{ color:C.ink,...displayFont(lang) }}>{t.learnTitle}</h1>
            <p className="text-xs mt-0.5" style={{ color:C.muted,...khFont(lang) }}>{t.learnSubtitle}</p>
          </div>
          <button onClick={()=>setShowSaved(true)} className="relative w-9 h-9 flex items-center justify-center rounded-full flex-shrink-0" style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
            <Bookmark size={16} style={{ color:C.ink }}/>
            {savedIds.length>0&&<span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center" style={{ background:C.clay,color:"#fff" }}>{savedIds.length}</span>}
          </button>
        </div>
      </div>

      {/* Progress strip */}
      <div className="px-4 mb-4">
        <div className="rounded-xl px-3 py-2.5 flex items-center gap-3" style={{ background:"rgba(22,56,40,0.05)",border:`1px solid rgba(22,56,40,0.12)` }}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background:"rgba(22,56,40,0.1)" }}>
            <GraduationCap size={15} style={{ color:C.forest }}/>
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold" style={{ color:C.ink,...khFont(lang) }}>{t.yourProgress}</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background:"#EFEAD9" }}>
                <div className="h-full rounded-full" style={{ width:`${Math.min(100,(completedIds.length/articles.length)*100)}%`,background:C.gold }}/>
              </div>
              <span className="text-[10px] font-semibold flex-shrink-0" style={{ color:C.muted,fontFamily:FONTS.mono }}>{completedIds.length}/{articles.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured */}
      <div className="px-4 mb-4">
        <div className="mb-2"><SectionLabel>{t.featured}</SectionLabel></div>
        <button onClick={()=>onOpenArticle(featured.id)} className="w-full rounded-2xl overflow-hidden relative h-40 text-left" style={{ background:C.sageSoft }}>
          <ImageWithFallback src={featured.photo} alt={featured.title} className="w-full h-full object-cover"/>
          <div className="absolute inset-0" style={{ background:"linear-gradient(180deg,rgba(14,36,25,0.05) 30%,rgba(14,36,25,0.78) 100%)" }}/>
          <div className="absolute top-3 left-3">
            <Badge text={catMeta[featured.cat].label} tone="gold"/>
          </div>
          <div className="absolute bottom-3 left-3 right-3">
            <p className="text-base font-bold leading-snug" style={{ color:"#FCFAF2",...displayFont(lang) }}>{featured.title}</p>
            <div className="flex items-center gap-2 mt-1">
              <Clock size={10} style={{ color:"rgba(252,250,242,0.75)" }}/>
              <span className="text-[10px]" style={{ color:"rgba(252,250,242,0.75)",...khFont(lang) }}>{featured.minutes} {t.minRead} · {featured.source}</span>
            </div>
          </div>
        </button>
      </div>

      {/* Category filter chips */}
      <div className="px-4 mb-3">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          <button onClick={()=>setActiveCat("all")} className="px-3 py-1.5 rounded-full text-xs font-semibold flex-shrink-0 transition-all"
            style={activeCat==="all"?{background:C.forest,color:C.cream,...khFont(lang)}:{background:C.card,border:`1px solid ${C.lineOnCard}`,color:C.muted,...khFont(lang)}}>
            {t.allTopics}
          </button>
          {cats.map(c=>{
            const meta=catMeta[c]; const CatIcon=meta.icon; const active=activeCat===c;
            return (
              <button key={c} onClick={()=>setActiveCat(c)} className="px-3 py-1.5 rounded-full text-xs font-semibold flex-shrink-0 flex items-center gap-1.5 transition-all"
                style={active?{background:C.forest,color:C.cream,...khFont(lang)}:{background:C.card,border:`1px solid ${C.lineOnCard}`,color:C.muted,...khFont(lang)}}>
                <CatIcon size={11}/>{meta.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Article list */}
      <div className="px-4 space-y-2 pb-6">
        {filtered.map(a=>{
          const meta=catMeta[a.cat]; const CatIcon=meta.icon;
          const isDone = completedIds.includes(a.id);
          return (
            <button key={a.id} onClick={()=>onOpenArticle(a.id)} className="w-full rounded-xl p-2.5 flex items-center gap-3 text-left transition-all"
              style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
              <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0" style={{ background:meta.bg }}>
                <ImageWithFallback src={a.photo} alt={a.title} className="w-full h-full object-cover"/>
                {isDone&&<div className="absolute top-1 right-1 w-4 h-4 rounded-full flex items-center justify-center" style={{ background:C.sage }}>
                  <Check size={9} className="text-white"/>
                </div>}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <CatIcon size={10} style={{ color:meta.color }}/>
                  <span className="text-[10px] font-semibold" style={{ color:meta.color,...khFont(lang) }}>{meta.label}</span>
                </div>
                <p className="text-sm font-semibold leading-snug" style={{ color:C.ink,...khFont(lang) }}>{a.title}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Clock size={9} style={{ color:C.muted }}/>
                  <span className="text-[10px]" style={{ color:C.muted,...khFont(lang) }}>{a.minutes} {t.minRead}</span>
                </div>
              </div>
              <ChevronRight size={14} style={{ color:C.muted }} className="flex-shrink-0"/>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function LearnArticleScreen({ articleId, onBack, isSaved, onToggleSave, isCompleted, onToggleComplete }:
  { articleId:string; onBack:()=>void; isSaved:boolean; onToggleSave:()=>void; isCompleted:boolean; onToggleComplete:()=>void }) {
  const {t,lang} = useLang();
  const articles = learnArticlesData(t);
  const catMeta = learnCategoryMeta(t);
  const article = articles.find(a=>a.id===articleId);
  if (!article) return null;
  const meta = catMeta[article.cat];
  const CatIcon = meta.icon;
  const related = articles.filter(a=>a.cat===article.cat&&a.id!==article.id).slice(0,2);
  const paragraphs = article.body.split("\n\n");
  return (
    <div className="flex flex-col h-full overflow-y-auto scrollbar-hide" style={{ background:C.cream }}>
      {/* Hero image with header overlay */}
      <div className="relative h-48 flex-shrink-0" style={{ background:meta.bg }}>
        <ImageWithFallback src={article.photo} alt={article.title} className="w-full h-full object-cover"/>
        <div className="absolute inset-0" style={{ background:"linear-gradient(180deg,rgba(14,36,25,0.35) 0%,rgba(14,36,25,0.05) 35%,rgba(14,36,25,0.7) 100%)" }}/>
        <div className="absolute top-0 left-0 right-0 px-3 pt-4 flex items-center justify-between">
          <button onClick={onBack} className="w-9 h-9 rounded-full flex items-center justify-center backdrop-blur" style={{ background:"rgba(255,255,255,0.85)" }}>
            <ArrowLeft size={16} style={{ color:C.ink }}/>
          </button>
          <button onClick={onToggleSave} className="w-9 h-9 rounded-full flex items-center justify-center backdrop-blur" style={{ background:"rgba(255,255,255,0.85)" }}>
            {isSaved?<BookmarkCheck size={16} style={{ color:C.clay }}/>:<Bookmark size={16} style={{ color:C.ink }}/>}
          </button>
        </div>
        <div className="absolute bottom-3 left-4 right-4">
          <Badge text={meta.label} tone="gold"/>
        </div>
      </div>

      <div className="px-4 pt-4 pb-6">
        <h1 className="text-xl font-bold leading-snug mb-2" style={{ color:C.ink,...displayFont(lang) }}>{article.title}</h1>
        <p className="text-sm leading-relaxed mb-3" style={{ color:C.muted,...khFont(lang) }}>{article.dek}</p>
        <div className="flex items-center gap-3 mb-5 pb-4" style={{ borderBottom:`1px solid ${C.lineOnCard}` }}>
          <div className="flex items-center gap-1">
            <Clock size={11} style={{ color:C.muted }}/>
            <span className="text-[11px]" style={{ color:C.muted,...khFont(lang) }}>{article.minutes} {t.minRead}</span>
          </div>
          <span className="text-[11px]" style={{ color:C.muted }}>·</span>
          <span className="text-[11px]" style={{ color:C.muted,...khFont(lang) }}>{t.bySource} {article.source}</span>
        </div>

        {/* Key takeaways */}
        <div className="rounded-xl p-3.5 mb-5" style={{ background:C.sageSoft }}>
          <div className="flex items-center gap-1.5 mb-2.5">
            <BookOpen size={13} style={{ color:C.sage }}/>
            <span className="text-[11px] font-bold uppercase tracking-wide" style={{ color:C.sage,...(lang==="km"?{textTransform:"none"as const,letterSpacing:0}:{}) }}>{t.keyTakeaways}</span>
          </div>
          <div className="space-y-1.5">
            {article.takeaways.map((tk,i)=>(
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background:C.sage }}/>
                <p className="text-xs leading-relaxed flex-1" style={{ color:C.ink,...khFont(lang) }}>{tk}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="space-y-3 mb-6">
          {paragraphs.map((p,i)=>(
            <p key={i} className="text-sm leading-relaxed" style={{ color:C.ink,...khFont(lang) }}>{p}</p>
          ))}
        </div>

        {/* Mark complete */}
        <button onClick={onToggleComplete} className="w-full py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 mb-6 transition-all"
          style={isCompleted
            ?{background:C.sageSoft,color:C.sage,...khFont(lang)}
            :{background:C.forest,color:C.cream,...khFont(lang),boxShadow:`0 4px 14px rgba(22,56,40,0.25)`}}>
          <CheckCircle2 size={16}/>{isCompleted?t.completed:t.markComplete}
        </button>

        {/* Related */}
        {related.length>0&&<div>
          <div className="mb-2"><SectionLabel>{t.relatedLessons}</SectionLabel></div>
          <div className="space-y-2">
            {related.map(r=>(
              <div key={r.id} className="rounded-xl p-2.5 flex items-center gap-3" style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0" style={{ background:meta.bg }}>
                  <ImageWithFallback src={r.photo} alt={r.title} className="w-full h-full object-cover"/>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold leading-snug" style={{ color:C.ink,...khFont(lang) }}>{r.title}</p>
                  <p className="text-[10px] mt-0.5" style={{ color:C.muted,...khFont(lang) }}>{r.minutes} {t.minRead}</p>
                </div>
                <ArrowUpRight size={13} style={{ color:C.muted }} className="flex-shrink-0"/>
              </div>
            ))}
          </div>
        </div>}
      </div>
    </div>
  );
}

/* ─── FARMER HOME ─────────────────────────────────────── */
function FarmerHome({ setScreen, setGlobalChat }: { setScreen:(s:string)=>void; setGlobalChat:(c:any)=>void }) {
  const {t,lang} = useLang();
  const rv = riceVarietiesData(t);
  const learnArticles = learnArticlesData(t);
  const [showNotifs, setShowNotifs] = useState(false);
  if (showNotifs) return <NotificationsPanel onClose={()=>setShowNotifs(false)}/>;
  return (
    <div className="flex flex-col h-full overflow-y-auto scrollbar-hide" style={{ background:C.cream }}>
      {/* Header */}
      <div className="px-4 pt-5 pb-3">
        <div className="flex items-center justify-between mb-1">
          <div>
            <p className="text-xs font-medium" style={{ color:C.muted,...khFont(lang) }}>{t.goodMorning}</p>
            <h1 className="text-xl font-bold" style={{ color:C.ink,...displayFont(lang) }}>{lang==="km"?"មឿន ភ័កត្រា":"Moeun PheakTra"}</h1>
          </div>
          <button onClick={()=>setShowNotifs(true)} className="relative w-9 h-9 flex items-center justify-center rounded-full" style={{ background:C.card, border:`1px solid ${C.lineOnCard}` }}>
            <Bell size={17} style={{ color:C.ink }}/>
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center" style={{ background:C.clay,color:"#fff" }}>3</span>
          </button>
        </div>
        <div className="flex items-center gap-1.5 mt-1">
          <ShieldCheck size={12} style={{ color:C.sage }}/>
          <span className="text-xs font-medium" style={{ color:C.sage,...khFont(lang) }}>{t.verifiedFarmer} · {t.kampongCham}</span>
        </div>
      </div>

      {/* Revenue summary card */}
      <div className="px-4 mb-4">
        <div className="rounded-2xl p-4 relative overflow-hidden" style={{ background:`linear-gradient(135deg,${C.forest},${C.forestLight})` }}>
          <div className="absolute -right-4 -bottom-4 w-32 h-32 rounded-full opacity-20" style={{ background:C.gold }}/>
          <div className="absolute right-8 top-2 w-20 h-20 rounded-full opacity-10" style={{ background:C.gold }}/>
          <p className="text-xs font-semibold opacity-70 mb-1 relative z-10" style={{ color:C.cream,...khFont(lang) }}>{lang==="km"?"ប្រាក់ចំណូលខែនេះ":"This Month's Revenue"}</p>
          <p className="text-2xl font-bold relative z-10" style={{ color:"#FCFAF2",fontFamily:FONTS.mono }}>$1,240</p>
          <p className="text-xs opacity-60 relative z-10" style={{ color:C.cream }}>≈ 5,039,200 KHR</p>
          <div className="flex gap-4 mt-3 pt-3 relative z-10" style={{ borderTop:"1px solid rgba(255,255,255,0.15)" }}>
            {[{l:lang==="km"?"ដំណូរ":"Listings",v:"2"},{l:lang==="km"?"តោន":"Tons",v:"12.5"},{l:lang==="km"?"សំណួរ":"Inquiries",v:"5"}].map(s=>(
              <div key={s.l}>
                <p className="text-sm font-bold" style={{ color:"#FCFAF2",fontFamily:FONTS.mono }}>{s.v}</p>
                <p className="text-[10px] opacity-60" style={{ color:C.cream,...khFont(lang) }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Price chips */}
      <div className="px-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <SectionLabel>{t.todayPrices}</SectionLabel>
          <button onClick={()=>setScreen("prices")} className="text-[11px] font-semibold flex items-center gap-0.5" style={{ color:C.forest,...khFont(lang) }}>{t.viewAll}<ChevronRight size={11}/></button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {rv.map(v=>(
            <div key={v.id} className="rounded-xl p-3 relative overflow-hidden" style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background:`linear-gradient(90deg,${C.gold},${C.goldSoft})` }}/>
              <p className="text-[10px] mb-1 leading-tight pt-0.5" style={{ color:C.muted,...khFont(lang) }}>{v.name}</p>
              <p className="text-sm font-bold" style={{ color:C.ink,fontFamily:FONTS.mono }}>{v.price.toLocaleString()}</p>
              <p className="text-[9px] mb-1" style={{ color:C.muted }}>KHR/kg</p>
              <PriceChange current={v.price} prev={v.prev}/>
            </div>
          ))}
        </div>
      </div>

      {/* Listings */}
      <div className="px-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <SectionLabel>{t.myListings}</SectionLabel>
          <button onClick={()=>setScreen("post")} className="text-[11px] font-semibold flex items-center gap-0.5" style={{ color:C.forest,...khFont(lang) }}><Plus size={11}/>{t.add}</button>
        </div>
        <div className="rounded-xl overflow-hidden" style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
          {[
            { img:"https://baitangplcrice.com/wp-content/uploads/2021/07/11.png",
              title:lang==="km"?"អង្ករម្លិះ · ៨ តោន":"Jasmine Rice · 8 ton",
              sub:lang==="km"?"ស្នើ: ២,៣៥០ រៀល · ៣ កក្កដា":"Asking: 2,350 KHR/kg · Jul 3", n:"2" },
            { img:"https://www.cpp.org.kh/wp-content/uploads/2020/03/92642.jpg",
              title:lang==="km"?"អង្ករក្រអូប · ៤.៥ តោន":"Fragrant Rice · 4.5 ton",
              sub:lang==="km"?"ស្នើ: ២,២០០ រៀល · ២៨ មិថុនា":"Asking: 2,200 KHR/kg · Jun 28", n:"1" },
          ].map((l,i)=>(
            <div key={i} className="px-3 py-3 flex items-center gap-3" style={i===0?{borderBottom:`1px solid ${C.lineOnCard}`}:{}}>
              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0" style={{ background:C.sageSoft }}>
                <ImageWithFallback src={l.img} alt="" className="w-full h-full object-cover"/>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold" style={{ color:C.ink,...khFont(lang) }}>{l.title}</p>
                <p className="text-xs mt-0.5" style={{ color:C.muted,...khFont(lang) }}>{l.sub}</p>
              </div>
              <div className="flex flex-col items-end gap-1 flex-shrink-0">
                <Badge text={t.live} tone="sage"/>
                <p className="text-[10px]" style={{ color:C.muted,...khFont(lang) }}>{l.n} {l.n==="1"?t.inquiry_one:t.inquiries}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buyer messages preview */}
      <div className="px-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <SectionLabel>{t.buyerMessages}</SectionLabel>
          <button onClick={()=>setScreen("messages")} className="text-[11px] font-semibold flex items-center gap-0.5" style={{ color:C.forest,...khFont(lang) }}>{t.seeAll}<ChevronRight size={11}/></button>
        </div>
        <button onClick={()=>setGlobalChat({convId:1})} className="w-full rounded-xl px-3 py-3 flex items-center gap-3 text-left" style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
          <Avatar initials={lang==="km"?"ឃអ":"HI"} size="sm"/>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold" style={{ color:C.ink,...khFont(lang) }}>{lang==="km"?"ឃីម អ៊ីមផតស៍":"Khim Import Co."}</p>
            <p className="text-xs truncate" style={{ color:C.muted,...khFont(lang) }}>{lang==="km"?"លោក អាចធ្វើ ២,៣០០ រៀល...":"Can you do 2,300 KHR/kg for…"}</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="w-5 h-5 rounded-full text-[9px] font-bold flex items-center justify-center" style={{ background:C.clay,color:"#fff" }}>2</span>
            <p className="text-[10px]" style={{ color:C.muted }}>10:24</p>
          </div>
        </button>
      </div>

      {/* Learn module preview */}
      <div className="px-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <SectionLabel>{t.learnTitle}</SectionLabel>
          <button onClick={()=>setScreen("learn")} className="text-[11px] font-semibold flex items-center gap-0.5" style={{ color:C.forest,...khFont(lang) }}>{t.seeAll}<ChevronRight size={11}/></button>
        </div>
        <button onClick={()=>setScreen("learn")} className="w-full rounded-xl overflow-hidden relative h-28 text-left" style={{ background:C.sageSoft }}>
          <ImageWithFallback src={learnArticles[0].photo} alt={learnArticles[0].title} className="w-full h-full object-cover"/>
          <div className="absolute inset-0" style={{ background:"linear-gradient(90deg,rgba(14,36,25,0.78) 35%,rgba(14,36,25,0.15) 100%)" }}/>
          <div className="absolute inset-0 flex items-center px-4">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <GraduationCap size={12} style={{ color:C.goldSoft }}/>
                <span className="text-[10px] font-semibold uppercase tracking-wide" style={{ color:C.goldSoft,...(lang==="km"?{textTransform:"none"as const,letterSpacing:0}:{}) }}>{lang==="km"?"មេរៀនថ្មី":"New Lesson"}</span>
              </div>
              <p className="text-sm font-bold leading-snug max-w-[200px]" style={{ color:"#FCFAF2",...displayFont(lang) }}>{learnArticles[0].title}</p>
              <p className="text-[10px] mt-1 opacity-75" style={{ color:"#FCFAF2",...khFont(lang) }}>{learnArticles[0].minutes} {t.minRead}</p>
            </div>
          </div>
        </button>
      </div>

      {/* Price alert */}
      <div className="px-4 mb-6">
        <button className="w-full rounded-xl px-3 py-3 flex items-center gap-3 text-left" style={{ background:"rgba(22,56,40,0.05)",border:`1px solid rgba(22,56,40,0.12)` }}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background:"rgba(22,56,40,0.1)" }}>
            <Bell size={14} style={{ color:C.forest }}/>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold" style={{ color:C.ink,...khFont(lang) }}>{t.priceAlertActive}</p>
            <p className="text-xs" style={{ color:C.muted,...khFont(lang) }}>{t.priceAlertDesc}</p>
          </div>
          <ChevronRight size={14} style={{ color:C.muted }}/>
        </button>
      </div>
    </div>
  );
}

/* ─── PRICES SCREEN ───────────────────────────────────── */
function PricesScreen() {
  const {t,lang} = useLang();
  const rv = riceVarietiesData(t);
  const [activeV, setActiveV] = useState("jasmine");
  const v = rv.find(x=>x.id===activeV)!;
  const provinces = [
    {p:t.phonmPenh,price:v.price},{p:t.kampongCham,price:Math.round(v.price*0.97)},
    {p:t.preyVeng,price:Math.round(v.price*0.95)},{p:t.battambang,price:Math.round(v.price*0.93)},
    {p:t.kandal,price:Math.round(v.price*0.98)},
  ];
  const maxP = Math.max(...provinces.map(p=>p.price));
  return (
    <div className="flex flex-col h-full overflow-y-auto scrollbar-hide" style={{ background:C.cream }}>
      <div className="px-4 pt-5 pb-3">
        <h1 className="text-xl font-bold" style={{ color:C.ink,...displayFont(lang) }}>{t.marketPrices}</h1>
        <p className="text-xs mt-0.5" style={{ color:C.muted,...khFont(lang) }}>{t.updatedToday}</p>
      </div>
      <div className="px-4 mb-4">
        <div className="flex gap-2">
          {rv.map(r=><button key={r.id} onClick={()=>setActiveV(r.id)} className="flex-1 py-2 rounded-lg text-xs font-semibold transition-all"
            style={activeV===r.id?{background:C.forest,color:C.cream,...khFont(lang)}
              :{background:C.card,border:`1px solid ${C.lineOnCard}`,color:C.muted,...khFont(lang)}}>{r.short}</button>)}
        </div>
      </div>
      <div className="px-4 mb-4">
        <div className="rounded-2xl p-4 relative overflow-hidden" style={{ background:C.forest,color:C.cream }}>
          <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full" style={{ background:"rgba(201,162,39,0.12)" }}/>
          <div className="flex items-start justify-between relative z-10">
            <div>
              <p className="text-xs opacity-70 font-medium" style={khFont(lang)}>{v.name}</p>
              <p className="text-xs opacity-55 mb-2">{v.khmer}</p>
              <p className="text-3xl font-bold" style={displayFont(lang)}>{v.price.toLocaleString()}</p>
              <p className="text-xs opacity-70 mt-0.5">KHR/kg · USD {activeV==="jasmine"?"0.60":activeV==="white"?"0.42":"0.53"}</p>
            </div>
            <div className="text-right">
              <PriceChange current={v.price} prev={v.prev}/>
              <p className="text-xs opacity-60 mt-1" style={khFont(lang)}>{t.vsYesterday}</p>
            </div>
          </div>
          <button className="mt-4 w-full py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 relative z-10"
            style={{ border:`1px solid rgba(251,248,240,0.3)`,color:C.cream,...khFont(lang) }}>
            <Bell size={12}/>{t.setPriceAlert}
          </button>
        </div>
      </div>
      <div className="px-4 mb-4">
        <div className="mb-2"><SectionLabel>{t.thirtyDayTrend}</SectionLabel></div>
        <div className="rounded-xl p-3" style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
          <ResponsiveContainer width="100%" height={140}>
            <AreaChart key={activeV} data={priceHistory} margin={{ top:5,right:5,left:-20,bottom:0 }}>
              <defs>
                <linearGradient id="priceGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={C.forest} stopOpacity={0.2}/>
                  <stop offset="95%" stopColor={C.forest} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(28,38,32,0.06)"/>
              <XAxis dataKey="day" tick={{ fontSize:9,fill:C.muted }} tickLine={false} axisLine={false}/>
              <YAxis tick={{ fontSize:9,fill:C.muted,fontFamily:"DM Mono" }} tickLine={false} axisLine={false}/>
              <Tooltip contentStyle={{ fontSize:11,background:C.cream,border:`1px solid ${C.lineOnCard}`,borderRadius:8 }}
                formatter={(val:number)=>[`${val.toLocaleString()} KHR`,""]}/>
              <Area type="monotone" dataKey={activeV} stroke={C.forest} strokeWidth={2} fill="url(#priceGrad)"
                dot={{ fill:C.gold,r:3,strokeWidth:0 }} activeDot={{ r:5,fill:C.gold }}/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="px-4 mb-6">
        <div className="mb-2"><SectionLabel>{t.provincePrices}</SectionLabel></div>
        <div className="rounded-xl overflow-hidden" style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
          {provinces.map((pd,i)=>(
            <div key={pd.p} className="px-3 py-2.5 flex items-center gap-3" style={i<provinces.length-1?{borderBottom:`1px solid ${C.lineOnCard}`}:{}}>
              <MapPin size={11} style={{ color:C.muted }} className="flex-shrink-0"/>
              <span className="text-xs flex-1" style={{ color:C.ink,...khFont(lang) }}>{pd.p}</span>
              <div className="w-20 h-1.5 rounded-full overflow-hidden" style={{ background:"#EFEAD9" }}>
                <div className="h-full rounded-full" style={{ width:`${(pd.price/maxP)*100}%`,background:C.gold }}/>
              </div>
              <span className="text-xs font-semibold w-12 text-right" style={{ color:C.ink,fontFamily:FONTS.mono }}>{pd.price.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── POST HARVEST ────────────────────────────────────── */
function PostHarvestScreen({ setScreen }: { setScreen:(s:string)=>void }) {
  const {t,lang} = useLang();
  const [variety, setVariety] = useState(lang==="km"?"អង្ករម្លិះ":"Jasmine Rice");
  const [qty, setQty] = useState("");
  const [unit, setUnit] = useState("ton");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState<string|null>(null);
  const [submitted, setSubmitted] = useState(false);
  const varieties = lang==="km"?["អង្ករម្លិះ","អង្ករស","អង្ករក្រអូប"]:["Jasmine Rice","White Rice","Fragrant Rice"];
  const provinces = lang==="km"?["កំពង់ចាម","ព្រៃវែង","កណ្ដាល","កំពង់ធំ","បាត់ដំបង","សៀមរាប"]:["Kampong Cham","Prey Veng","Kandal","Kampong Thom","Battambang","Siem Reap"];
  const canPost = qty.trim()!==""&&price.trim()!=="";
  const labelStyle = lang==="km"?{fontFamily:FONTS.km.body,textTransform:"none"as const,letterSpacing:0}:{};
  if (submitted) return (
    <div className="flex flex-col h-full items-center justify-center px-8 text-center" style={{ background:C.cream }}>
      {photo?<div className="w-24 h-24 rounded-2xl overflow-hidden mb-4 relative" style={{ border:`2px solid ${C.sageSoft}` }}>
        <img src={photo} alt="" className="w-full h-full object-cover"/>
        <div className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full flex items-center justify-center" style={{ background:C.sage,border:`2px solid ${C.cream}` }}>
          <Check size={13} className="text-white"/>
        </div>
      </div>:<div className="mb-4"><GrainSeal size={64}><Check size={28} style={{ color:C.forestDeep }} strokeWidth={2.5}/></GrainSeal></div>}
      <h2 className="text-lg font-bold mb-1" style={{ color:C.ink,...displayFont(lang) }}>{t.listingLive}</h2>
      <p className="text-sm mb-1" style={{ color:C.muted,...khFont(lang) }}>{t.listingLiveDesc}</p>
      <p className="text-xs mb-6" style={{ color:C.muted,...khFont(lang) }}>{variety} · {qty||"—"} {unit} · {price?Number(price).toLocaleString():"—"} KHR/kg</p>
      <button onClick={()=>{setSubmitted(false);setQty("");setPrice("");setPhoto(null);setScreen("home");}} className="w-full py-3 rounded-xl text-sm font-semibold" style={{ background:C.forest,color:C.cream,...khFont(lang) }}>{t.backToHome}</button>
    </div>
  );
  return (
    <div className="flex flex-col h-full overflow-y-auto scrollbar-hide" style={{ background:C.cream }}>
      <div className="px-4 pt-5 pb-3">
        <h1 className="text-xl font-bold" style={{ color:C.ink,...displayFont(lang) }}>{t.postHarvest}</h1>
        <p className="text-xs mt-0.5" style={{ color:C.muted,...khFont(lang) }}>{t.postSubtitle}</p>
      </div>
      <div className="px-4 space-y-4 pb-6">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider block mb-1.5" style={{ color:C.muted,...labelStyle }}>{t.riceVariety}</label>
          <div className="grid grid-cols-3 gap-2">
            {varieties.map(v=><button key={v} onClick={()=>setVariety(v)} className="py-2.5 rounded-xl text-xs font-semibold border transition-all"
              style={variety===v?{background:C.forest,color:C.cream,borderColor:C.forest,...khFont(lang)}
                :{background:C.card,borderColor:C.lineOnCard,color:C.ink,...khFont(lang)}}>{v.split(" ")[0]}</button>)}
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider block mb-1.5" style={{ color:C.muted,...labelStyle }}>{t.quantity}</label>
          <div className="flex gap-2">
            <input type="number" placeholder="0" value={qty} onChange={e=>setQty(e.target.value)} className="flex-1 rounded-xl px-3 py-2.5 text-sm focus:outline-none"
              style={{ background:C.card,border:`1px solid ${C.lineOnCard}`,color:C.ink }}/>
            <div className="flex rounded-xl overflow-hidden" style={{ border:`1px solid ${C.lineOnCard}` }}>
              {["kg","ton"].map(u=><button key={u} onClick={()=>setUnit(u)} className="px-3 py-2.5 text-xs font-semibold transition-all"
                style={unit===u?{background:C.forest,color:C.cream}:{background:C.card,color:C.muted}}>{u}</button>)}
            </div>
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider block mb-1.5" style={{ color:C.muted,...labelStyle }}>{t.askingPrice}</label>
          <div className="relative">
            <input type="number" placeholder="2350" value={price} onChange={e=>setPrice(e.target.value)} className="w-full rounded-xl px-3 py-2.5 text-sm focus:outline-none pr-20"
              style={{ background:C.card,border:`1px solid ${C.lineOnCard}`,color:C.ink }}/>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium" style={{ color:C.muted }}>KHR/kg</span>
          </div>
          <p className="text-[10px] mt-1" style={{ color:C.muted,...khFont(lang) }}>{t.marketRateToday}</p>
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider block mb-1.5" style={{ color:C.muted,...labelStyle }}>{t.province}</label>
          <div className="relative">
            <select className="w-full rounded-xl px-3 py-2.5 text-sm appearance-none focus:outline-none" style={{ background:C.card,border:`1px solid ${C.lineOnCard}`,color:C.ink,...khFont(lang) }}>
              {provinces.map(p=><option key={p}>{p}</option>)}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color:C.muted }}/>
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider block mb-1.5" style={{ color:C.muted,...labelStyle }}>{t.availableFrom}</label>
          <input type="date" defaultValue="2026-07-03" className="w-full rounded-xl px-3 py-2.5 text-sm focus:outline-none" style={{ background:C.card,border:`1px solid ${C.lineOnCard}`,color:C.ink }}/>
        </div>
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider" style={{ color:C.muted,...labelStyle }}>{t.photoOptional}</label>
            {photo&&<span className="text-[10px] font-semibold flex items-center gap-1" style={{ color:C.sage,...khFont(lang) }}><Check size={10}/>{t.photoAdded}</span>}
          </div>
          <PhotoUpload value={photo} onChange={setPhoto} inputId="srov-post-photo"/>
        </div>
        <button disabled={!canPost} onClick={()=>setSubmitted(true)} className="w-full py-3.5 rounded-xl text-sm font-semibold transition-all"
          style={canPost?{background:C.forest,color:C.cream,...khFont(lang),boxShadow:`0 4px 14px rgba(22,56,40,0.25)`}
            :{background:"#EAE5D6",color:C.muted,...khFont(lang)}}>{t.postListing}</button>
      </div>
    </div>
  );
}

/* ─── CHAT THREAD ─────────────────────────────────────── */
function ChatThread({ conversation, onBack, onStatusChange, isBuyer=false }:
  { conversation:any; onBack:()=>void; onStatusChange:(s:string,l:string)=>void; isBuyer?:boolean }) {
  const {t,lang} = useLang();
  const allThreads = chatThreadsData(t, conversation.listingId);
  const [thread, setThread] = useState(()=>allThreads[conversation.id]||[]);
  const [input, setInput] = useState("");
  const [pendingImage, setPendingImage] = useState<string|null>(null);
  const [peerTyping, setPeerTyping] = useState(false);
  const [status, setStatus] = useState(conversation.status);
  const replies = autoReplyPool(t);
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{ scrollRef.current?.scrollTo({top:9999,behavior:"smooth"}); },[thread,peerTyping]);
  const initials = lang==="km"?(conversation.id===1?"ឃអ":conversation.id===2?"មមផ":"កស"):conversation.buyer.slice(0,2).toUpperCase();
  const fileInputId = `srov-chat-${conversation.id}`;
  function nowTime(){ return new Date().toLocaleTimeString(lang==="km"?"km-KH":"en-US",{hour:"numeric",minute:"2-digit"}); }
  function pushMsg(msg:any){ setThread(prev=>[...prev,{id:`m${prev.length+1}-${Date.now()}`,time:nowTime(),...msg}]); }
  function triggerAutoReply(){
    setPeerTyping(true);
    setTimeout(()=>{
      setPeerTyping(false);
      pushMsg({from:isBuyer?"farmer":"buyer",text:replies[Math.floor(Math.random()*replies.length)]});
    },1100+Math.random()*800);
  }
  function handleSend(){
    const text=input.trim();
    if(!text&&!pendingImage) return;
    const myRole = isBuyer?"buyer":"farmer";
    if(pendingImage) pushMsg({from:myRole,image:pendingImage});
    if(text) pushMsg({from:myRole,text});
    setInput(""); setPendingImage(null);
    if(status!=="confirmed") triggerAutoReply();
  }
  function handleConfirm(){ setStatus("confirmed"); pushMsg({from:"buyer",text:t.dealConfirmedMsg}); onStatusChange("confirmed",t.dealConfirmedMsg); }
  function handleDecline(){ setStatus("inquiry"); pushMsg({from:"farmer",text:t.declinedMsg}); onStatusChange("inquiry",t.declinedMsg); }
  const myRole = isBuyer?"buyer":"farmer";
  return (
    <div className="flex flex-col h-full" style={{ background:C.cream }}>
      {/* Header */}
      <div className="px-3 pt-4 pb-3 flex items-center gap-2 flex-shrink-0" style={{ background:C.card,borderBottom:`1px solid ${C.lineOnCard}` }}>
        <button onClick={onBack} className="p-1"><ArrowLeft size={18} style={{ color:C.ink }}/></button>
        <Avatar initials={initials} size="sm"/>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold truncate" style={{ color:C.ink,...khFont(lang) }}>{conversation.buyer}</p>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background:C.sage }}/>
            <p className="text-[10px]" style={{ color:C.sage,...khFont(lang) }}>{t.online}</p>
          </div>
        </div>
        {status==="confirmed"?<Badge text={t.confirmed} tone="sage"/>:<Badge text={t.negotiating} tone="gold"/>}
      </div>
      {/* Listing pill */}
      <div className="px-3 py-2 flex-shrink-0" style={{ background:`rgba(22,56,40,0.04)`,borderBottom:`1px solid ${C.lineOnCard}` }}>
        <p className="text-[11px] text-center" style={{ color:C.muted,...khFont(lang) }}>
          <span className="font-semibold" style={{ color:C.forest }}>{conversation.listing}</span>
        </p>
      </div>
      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto scrollbar-hide px-3 py-3 space-y-3">
        {thread.map((ch:any)=>(
          <div key={ch.id} className={`flex ${ch.from===myRole?"justify-end":"justify-start"}`}>
            <div className={`max-w-[78%] ${ch.image?"p-1":"px-3 py-2"} rounded-2xl`}
              style={ch.from===myRole
                ?{background:C.forest,color:C.cream,borderBottomRightRadius:4}
                :{background:C.card,border:`1px solid ${C.lineOnCard}`,color:C.ink,borderBottomLeftRadius:4}}>
              {ch.image&&<img src={ch.image} alt="" className="rounded-xl w-full max-w-[180px] object-cover mb-1"/>}
              {ch.text&&<p className={`text-xs ${ch.image?"px-2":""}  leading-relaxed`} style={khFont(lang)}>{ch.text}</p>}
              <p className={`text-[9px] mt-1 ${ch.image?"px-2 pb-1":""}`}
                style={{ color:ch.from===myRole?"rgba(251,248,240,0.6)":C.muted }}>{ch.time}</p>
            </div>
          </div>
        ))}
        {peerTyping&&<div className="flex justify-start">
          <div className="rounded-2xl px-3 py-2.5 flex items-center gap-1" style={{ background:C.card,border:`1px solid ${C.lineOnCard}`,borderBottomLeftRadius:4 }}>
            {[0,1,2].map(i=><span key={i} className="w-1.5 h-1.5 rounded-full" style={{ background:C.muted,animation:`srov-dot 1s ease-in-out ${i*0.15}s infinite` }}/>)}
          </div>
        </div>}
      </div>
      {/* Confirm/Decline */}
      {status!=="confirmed"&&!isBuyer&&(
        <div className="px-3 py-2 flex gap-2 flex-shrink-0" style={{ borderTop:`1px solid ${C.lineOnCard}` }}>
          <button onClick={handleDecline} className="flex-1 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1"
            style={{ border:`1px solid ${C.clay}`,color:C.clay,...khFont(lang) }}><X size={12}/>{t.decline}</button>
          <button onClick={handleConfirm} className="flex-1 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1"
            style={{ background:C.sage,color:"#fff",...khFont(lang) }}><Check size={12}/>{t.confirmDeal}</button>
        </div>
      )}
      {pendingImage&&<div className="px-3 pt-2 flex-shrink-0">
        <div className="relative inline-block">
          <img src={pendingImage} alt="" className="h-16 w-16 object-cover rounded-lg" style={{ border:`1px solid ${C.lineOnCard}` }}/>
          <button onClick={()=>setPendingImage(null)} className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center" style={{ background:C.clay }}>
            <X size={10} className="text-white"/>
          </button>
        </div>
      </div>}
      {/* Input */}
      <div className="px-3 py-2 flex items-center gap-2 flex-shrink-0" style={{ borderTop:`1px solid ${C.lineOnCard}`,background:C.card }}>
        <label htmlFor={fileInputId} className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 cursor-pointer"
          style={{ border:`1px solid ${C.lineOnCard}`,color:C.muted }}>
          <Paperclip size={14}/>
        </label>
        <input id={fileInputId} type="file" accept="image/*" className="hidden"
          onChange={e=>{ const f=e.target.files?.[0]; if(!f) return; const r=new FileReader(); r.onload=()=>setPendingImage(r.result as string); r.readAsDataURL(f); }}/>
        <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{ if(e.key==="Enter") handleSend(); }}
          placeholder={t.typeMessage} className="flex-1 rounded-full px-3 py-2 text-xs focus:outline-none"
          style={{ background:C.cream,color:C.ink,...khFont(lang) }}/>
        <button onClick={handleSend} disabled={!input.trim()&&!pendingImage}
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
          style={{ background:input.trim()||pendingImage?C.forest:"#EAE5D6" }}>
          <Send size={13} style={{ color:input.trim()||pendingImage?C.cream:C.muted }}/>
        </button>
      </div>
      <style>{`@keyframes srov-dot{0%,60%,100%{transform:translateY(0);opacity:0.4}30%{transform:translateY(-4px);opacity:1}}`}</style>
    </div>
  );
}

/* ─── MESSAGES SCREEN ─────────────────────────────────── */
function MessagesScreen({ isBuyer=false }: { isBuyer?:boolean }) {
  const {t,lang} = useLang();
  const seed = messagesData(t);
  const [convos, setConvos] = useState(seed);
  const [activeChat, setActiveChat] = useState<number|null>(null);
  function openChat(id:number){ setActiveChat(id); setConvos(p=>p.map(c=>c.id===id?{...c,unread:0}:c)); }
  function handleStatus(id:number,status:string,lastText:string){
    setConvos(p=>p.map(c=>c.id===id?{...c,status,last:lastText,time:lang==="km"?"ឥឡូវ":"Now"}:c));
  }
  if(activeChat!==null){
    const conv=convos.find(x=>x.id===activeChat)!;
    return <ChatThread conversation={conv} onBack={()=>setActiveChat(null)} onStatusChange={(s,l)=>handleStatus(activeChat,s,l)} isBuyer={isBuyer}/>;
  }
  const byStatus = { negotiating:convos.filter(c=>c.status==="negotiating"||c.status==="inquiry"), confirmed:convos.filter(c=>c.status==="confirmed") };
  const initMap:Record<number,string> = {1:lang==="km"?"ឃអ":"HI",2:lang==="km"?"មមផ":"PP",3:lang==="km"?"កស":"KS"};
  return (
    <div className="flex flex-col h-full overflow-y-auto scrollbar-hide" style={{ background:C.cream }}>
      <div className="px-4 pt-5 pb-3">
        <h1 className="text-xl font-bold" style={{ color:C.ink,...displayFont(lang) }}>{t.messages}</h1>
        <p className="text-xs mt-0.5" style={{ color:C.muted,...khFont(lang) }}>{convos.length} {t.conversations}</p>
      </div>
      {byStatus.negotiating.length>0&&<>
        <div className="px-4 mb-2"><SectionLabel>{t.negotiating}</SectionLabel></div>
        <div className="px-4 space-y-2 mb-4">
          {byStatus.negotiating.map(m=>(
            <button key={m.id} onClick={()=>openChat(m.id)} className="w-full rounded-xl px-3 py-3 flex items-center gap-3 text-left transition-all"
              style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
              <Avatar initials={initMap[m.id]} size="sm"/>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <p className="text-sm font-semibold truncate" style={{ color:C.ink,...khFont(lang) }}>{m.buyer}</p>
                  <span className="text-[10px] flex-shrink-0 ml-2" style={{ color:C.muted,...khFont(lang) }}>{m.time}</span>
                </div>
                <p className="text-[10px] mb-0.5" style={{ color:C.forest,...khFont(lang) }}>{m.listing}</p>
                <p className="text-xs truncate" style={{ color:C.muted,...khFont(lang) }}>{m.last}</p>
              </div>
              {m.unread>0&&<span className="w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center flex-shrink-0" style={{ background:C.clay,color:"#fff" }}>{m.unread}</span>}
            </button>
          ))}
        </div>
      </>}
      {byStatus.confirmed.length>0&&<>
        <div className="px-4 mb-2"><SectionLabel>{t.confirmed}</SectionLabel></div>
        <div className="px-4 space-y-2 mb-6">
          {byStatus.confirmed.map(m=>(
            <button key={m.id} onClick={()=>openChat(m.id)} className="w-full rounded-xl px-3 py-3 flex items-center gap-3 text-left"
              style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
              <Avatar initials={initMap[m.id]} size="sm"/>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <p className="text-sm font-semibold truncate" style={{ color:C.ink,...khFont(lang) }}>{m.buyer}</p>
                  <span className="text-[10px] flex-shrink-0 ml-2" style={{ color:C.muted,...khFont(lang) }}>{m.time}</span>
                </div>
                <p className="text-xs truncate" style={{ color:C.muted,...khFont(lang) }}>{m.last}</p>
              </div>
              <Badge text={t.confirmed} tone="sage"/>
            </button>
          ))}
        </div>
      </>}
    </div>
  );
}

/* ─── FARMER PROFILE ──────────────────────────────────── */
function ProfileScreen() {
  const {t,lang} = useLang();
  return (
    <div className="flex flex-col h-full overflow-y-auto scrollbar-hide" style={{ background:C.cream }}>
      <div className="h-24 relative -mb-10 flex-shrink-0">
        <ImageWithFallback src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&h=200&fit=crop&q=70" alt="" className="w-full h-full object-cover"/>
        <div className="absolute inset-0" style={{ background:`linear-gradient(180deg,rgba(14,36,25,0.12) 0%,${C.cream} 100%)` }}/>
      </div>
      <div className="px-4 pt-2 pb-4 relative">
        <div className="flex items-start gap-4">
          <Avatar initials={lang==="km"?"សដ":"SD"} size="lg" photo="https://images.unsplash.com/photo-1602524207003-fd2f81d52ba6?w=200&h=200&fit=crop&q=80"/>
          <div className="flex-1 pt-2">
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold" style={{ color:C.ink,...displayFont(lang) }}>{lang==="km"?"មឿន ភ័កត្រា":"Moeun PheakTra"}</h1>
              <ShieldCheck size={14} style={{ color:C.sage }}/>
            </div>
            <StarRow rating={4.8} count={24}/>
            <p className="text-xs mt-0.5" style={{ color:C.muted,...khFont(lang) }}>{t.kampongCham} · 3.2 ha · {lang==="km"?"GAP ចុះបញ្ជី":"GAP Registered"}</p>
          </div>
        </div>
      </div>
      <div className="px-4 mb-4">
        <div className="grid grid-cols-3 gap-2">
          {[{l:t.transactions,v:"24"},{l:t.tonsSold,v:"148"},{l:t.buyersRated,v:"22"}].map(s=>(
            <div key={s.l} className="rounded-xl p-3 text-center" style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
              <p className="text-lg font-bold" style={{ color:C.ink,fontFamily:FONTS.mono }}>{s.v}</p>
              <p className="text-[10px] leading-tight mt-0.5" style={{ color:C.muted,...khFont(lang) }}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 mb-4">
        <div className="mb-2"><SectionLabel>{t.transactionHistory}</SectionLabel></div>
        <div className="rounded-xl overflow-hidden" style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
          {[
            {variety:lang==="km"?"អង្ករម្លិះ":"Jasmine Rice",qty:lang==="km"?"៤.៥ តោន":"4.5 ton",price:"2,300",buyer:lang==="km"?"ឃីម អ៊ីមផតស៍":"Khim Import Co.",date:lang==="km"?"១០ មិថុនា":"Jun 10"},
            {variety:lang==="km"?"អង្ករស":"White Rice",qty:lang==="km"?"១០ តោន":"10 ton",price:"1,650",buyer:lang==="km"?"ម៉ៅ ផ្លូវ មីលីង":"PP Milling Ltd.",date:lang==="km"?"២២ ឧសភា":"May 22"},
            {variety:lang==="km"?"អង្ករក្រអូប":"Fragrant Rice",qty:lang==="km"?"៣ តោន":"3 ton",price:"2,100",buyer:lang==="km"?"គឹម សុខា":"Kim Sokha",date:lang==="km"?"៣០ មេសា":"Apr 30"},
          ].map((tx,i)=>(
            <div key={i} className="px-3 py-2.5 flex items-center gap-3" style={i<2?{borderBottom:`1px solid ${C.lineOnCard}`}:{}}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background:C.sageSoft }}>
                <FileText size={12} style={{ color:C.forest }}/>
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold" style={{ color:C.ink,...khFont(lang) }}>{tx.variety} · {tx.qty}</p>
                <p className="text-[10px]" style={{ color:C.muted,...khFont(lang) }}>{tx.buyer} · {tx.date}</p>
              </div>
              <span className="text-xs font-semibold" style={{ color:C.ink,fontFamily:FONTS.mono }}>{tx.price}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 mb-6">
        <div className="mb-2"><SectionLabel>{t.buyerReviews}</SectionLabel></div>
        <div className="space-y-2">
          {[
            {buyer:lang==="km"?"ឃីម អ៊ីមផតស៍":"Khim Import Co.",stars:5,comment:lang==="km"?"គុណភាពល្អ ត្រឹមត្រូវ។":"Excellent quality jasmine, exactly as described. Fast communication.",date:lang==="km"?"១១ មិថុនា":"Jun 11"},
            {buyer:lang==="km"?"ម៉ៅ ផ្លូវ មីលីង":"PP Milling Ltd.",stars:5,comment:lang==="km"?"កសិករល្អ ទុកចិត្ត!":"Great farmer, very reliable. Will buy again.",date:lang==="km"?"២៣ ឧសភា":"May 23"},
          ].map((r,i)=>(
            <div key={i} className="rounded-xl px-3 py-3" style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs font-semibold" style={{ color:C.ink,...khFont(lang) }}>{r.buyer}</p>
                <div className="flex gap-0.5">{Array.from({length:r.stars}).map((_,j)=><Star key={j} size={10} style={{ fill:C.gold,color:C.gold }}/>)}</div>
              </div>
              <p className="text-xs" style={{ color:C.muted,...khFont(lang) }}>{r.comment}</p>
              <p className="text-[10px] mt-1" style={{ color:C.muted,...khFont(lang) }}>{r.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── BUYER HOME ──────────────────────────────────────── */
function BuyerHome({ setScreen }: { setScreen:(s:string)=>void }) {
  const {t,lang} = useLang();
  const listings = listingsData(t);
  const [showNotifs, setShowNotifs] = useState(false);
  if(showNotifs) return <NotificationsPanel onClose={()=>setShowNotifs(false)}/>;
  return (
    <div className="flex flex-col h-full overflow-y-auto scrollbar-hide" style={{ background:C.cream }}>
      <div className="px-4 pt-5 pb-3">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-xs" style={{ color:C.muted,...khFont(lang) }}>{t.welcomeBack}</p>
            <h1 className="text-xl font-bold" style={{ color:C.ink,...displayFont(lang) }}>{lang==="km"?"ឃីម អ៊ីមផតស៍":"Khim Import Co."}</h1>
          </div>
          <button onClick={()=>setShowNotifs(true)} className="relative w-9 h-9 flex items-center justify-center rounded-full" style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
            <Bell size={17} style={{ color:C.ink }}/>
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center" style={{ background:C.clay,color:"#fff" }}>2</span>
          </button>
        </div>
        <button onClick={()=>setScreen("find")} className="w-full rounded-xl px-3 py-2.5 flex items-center gap-2 text-left" style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
          <Search size={14} style={{ color:C.muted }}/>
          <span className="text-sm" style={{ color:C.muted,...khFont(lang) }}>{lang==="km"?"ស្វែងរកប្រភេទអង្ករ, ខេត្ត...":"Search rice variety, province…"}</span>
        </button>
      </div>
      {/* New Today cards */}
      <div className="px-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <SectionLabel>{t.newToday}</SectionLabel>
          <button onClick={()=>setScreen("find")} className="text-[11px] font-semibold flex items-center gap-0.5" style={{ color:C.forest,...khFont(lang) }}>{t.seeAll}<ChevronRight size={11}/></button>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {listings.slice(0,3).map(l=>(
            <button key={l.id} onClick={()=>setScreen("find")} className="rounded-xl overflow-hidden flex-shrink-0 w-44 text-left" style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
              <div className="relative h-24" style={{ background:C.sageSoft }}>
                <ImageWithFallback src={l.photo} alt={l.variety} className="w-full h-full object-cover"/>
                {l.verified&&<div className="absolute top-1.5 right-1.5 backdrop-blur rounded-full p-1" style={{ background:"rgba(255,255,255,0.9)" }}>
                  <ShieldCheck size={10} style={{ color:C.sage }}/></div>}
                <div className="absolute bottom-1.5 left-1.5">
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md" style={{ background:C.forest,color:C.cream,...khFont(lang) }}>
                    {l.price.toLocaleString()} KHR
                  </span>
                </div>
              </div>
              <div className="p-2.5">
                <p className="text-xs font-semibold leading-tight" style={{ color:C.ink,...khFont(lang) }}>{l.variety}</p>
                <p className="text-[10px] mt-0.5" style={{ color:C.muted,...khFont(lang) }}>{l.qty} · {l.province}</p>
                <div className="flex items-center gap-1 mt-1.5">
                  <Avatar initials={l.badge} size="sm" photo={l.avatarPhoto}/>
                  <p className="text-[10px] font-medium truncate" style={{ color:C.ink,...khFont(lang) }}>{l.farmer}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* Active order */}
      <div className="px-4 mb-4">
        <div className="mb-2"><SectionLabel>{t.activeOrders}</SectionLabel></div>
        <div className="rounded-xl overflow-hidden" style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
          <div className="px-3 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background:C.sageSoft }}>
              <Truck size={18} style={{ color:C.sage }}/>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold" style={{ color:C.ink,...khFont(lang) }}>{lang==="km"?"អង្ករក្រអូប · ៤.៥ តោន":"Fragrant Rice · 4.5 ton"}</p>
              <p className="text-xs" style={{ color:C.muted,...khFont(lang) }}>{lang==="km"?"ហ៊ុន ផានុត · កណ្ដាល":"Hun Phanuth · Kandal"}</p>
            </div>
            <div className="text-right">
              <Badge text={t.confirmed} tone="sage"/>
              <p className="text-[10px] mt-1" style={{ color:C.muted,...khFont(lang) }}>{t.pickup} Jul 2</p>
            </div>
          </div>
          <div className="px-3 py-2 flex items-center gap-2" style={{ background:C.sageSoft.replace("DC","D0"),borderTop:`1px solid ${C.lineOnCard}` }}>
            <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background:"rgba(47,107,73,0.2)" }}>
              <div className="h-full rounded-full" style={{ width:"75%",background:C.sage }}/>
            </div>
            <span className="text-[10px] font-semibold" style={{ color:C.sage }}>75%</span>
            <span className="text-[10px]" style={{ color:C.muted,...khFont(lang) }}>{lang==="km"?"ដល់ការទទួលទំនិញ":"to pickup"}</span>
          </div>
        </div>
      </div>
      {/* Saved farmers */}
      <div className="px-4 mb-6">
        <div className="mb-2"><SectionLabel>{t.savedFarmers}</SectionLabel></div>
        <div className="space-y-2">
          {listings.slice(0,2).map(l=>(
            <div key={l.id} className="rounded-xl px-3 py-2.5 flex items-center gap-3" style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
              <Avatar initials={l.badge} size="sm" photo={l.avatarPhoto}/>
              <div className="flex-1">
                <div className="flex items-center gap-1">
                  <p className="text-sm font-semibold" style={{ color:C.ink,...khFont(lang) }}>{l.farmer}</p>
                  {l.verified&&<ShieldCheck size={10} style={{ color:C.sage }}/>}
                </div>
                <p className="text-xs" style={{ color:C.muted,...khFont(lang) }}>{l.province} · {l.variety}</p>
              </div>
              <StarRow rating={l.rating} count={l.reviews}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── FIND RICE ───────────────────────────────────────── */
function FindRiceScreen({ setScreen, setGlobalChat }: { setScreen:(s:string)=>void; setGlobalChat:(c:any)=>void }) {
  const {t,lang} = useLang();
  const listings = listingsData(t);
  const provinces = [t.allProvinces,t.kampongCham,t.preyVeng,t.kandal,t.kampongThom,t.battambang,t.siemReap];
  const [province, setProvince] = useState(t.allProvinces);
  const [variety, setVariety] = useState(t.all);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [selected, setSelected] = useState<number|null>(null);
  const [saved, setSaved] = useState<number[]>([]);
  const [showOffer, setShowOffer] = useState(false);
  const [offerPrice, setOfferPrice] = useState("");
  const [offerSent, setOfferSent] = useState(false);
  const varietyOpts = [t.all,...(lang==="km"?["អង្ករម្លិះ","អង្ករស","អង្ករក្រអូប"]:["Jasmine","White","Fragrant"])];
  const filtered = listings.filter(l=>
    (province===t.allProvinces||l.province===province)&&
    (variety===t.all||l.variety.includes(variety===t.all?"":variety))&&
    (!verifiedOnly||l.verified));

  /* Offer modal */
  if(showOffer&&selected!==null){
    const l=listings.find(x=>x.id===selected)!;
    if(offerSent) return (
      <div className="flex flex-col h-full items-center justify-center px-8 text-center" style={{ background:C.cream }}>
        <GrainSeal size={64}><Check size={28} style={{ color:C.forestDeep }} strokeWidth={2.5}/></GrainSeal>
        <h2 className="text-lg font-bold mt-4 mb-1" style={{ color:C.ink,...displayFont(lang) }}>{t.offerSent}</h2>
        <p className="text-sm mb-6" style={{ color:C.muted,...khFont(lang) }}>{t.offerSentDesc}</p>
        <p className="text-2xl font-bold mb-1" style={{ color:C.forest,fontFamily:FONTS.mono }}>{Number(offerPrice||l.price).toLocaleString()} KHR/kg</p>
        <p className="text-xs mb-8" style={{ color:C.muted,...khFont(lang) }}>{lang==="km"?"ការផ្ដល់ជូនរបស់អ្នកសម្រាប់ "+l.farmer:"Your offer to "+l.farmerEn}</p>
        <button onClick={()=>{setShowOffer(false);setOfferSent(false);setOfferPrice("");}} className="w-full py-3 rounded-xl text-sm font-semibold" style={{ background:C.forest,color:C.cream,...khFont(lang) }}>
          {lang==="km"?"ត្រឡប់ទៅ":"Back to Listing"}
        </button>
      </div>
    );
    return (
      <div className="flex flex-col h-full" style={{ background:C.cream }}>
        <div className="px-4 pt-5 pb-3 flex items-center gap-2 flex-shrink-0" style={{ borderBottom:`1px solid ${C.line}` }}>
          <button onClick={()=>setShowOffer(false)} className="p-1"><ArrowLeft size={18} style={{ color:C.ink }}/></button>
          <p className="text-sm font-semibold" style={{ color:C.ink,...khFont(lang) }}>{t.makeOffer}</p>
        </div>
        <div className="flex-1 px-4 py-4 space-y-4">
          <div className="rounded-xl p-3 flex items-center gap-3" style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
            <Avatar initials={l.badge} size="md" photo={l.avatarPhoto}/>
            <div>
              <p className="text-sm font-semibold" style={{ color:C.ink,...khFont(lang) }}>{l.farmer}</p>
              <p className="text-xs" style={{ color:C.muted,...khFont(lang) }}>{l.variety} · {l.qty}</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold mb-1" style={{ color:C.muted,...khFont(lang) }}>{lang==="km"?"តម្លៃស្នើដើម":"Farmer's Asking Price"}</p>
            <p className="text-xl font-bold" style={{ color:C.muted,fontFamily:FONTS.mono }}>{l.price.toLocaleString()} KHR/kg</p>
          </div>
          <div>
            <p className="text-xs font-semibold mb-1.5" style={{ color:C.muted,...khFont(lang) }}>{t.offerPrice}</p>
            <div className="relative">
              <input type="number" placeholder={String(l.price)} value={offerPrice} onChange={e=>setOfferPrice(e.target.value)}
                className="w-full rounded-xl px-3 py-3 text-lg font-bold focus:outline-none pr-20"
                style={{ background:C.card,border:`2px solid ${C.forest}`,color:C.ink,fontFamily:FONTS.mono,
                  boxShadow:`0 0 0 3px rgba(22,56,40,0.1)` }}/>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium" style={{ color:C.muted }}>KHR/kg</span>
            </div>
            {offerPrice&&<p className="text-xs mt-1.5" style={{ color:Number(offerPrice)<l.price?C.sage:C.clay,...khFont(lang) }}>
              {Number(offerPrice)<l.price
                ?`${(((l.price-Number(offerPrice))/l.price)*100).toFixed(1)}% ${lang==="km"?"ក្រោមតម្លៃ":"below asking"}`
                :`${(((Number(offerPrice)-l.price)/l.price)*100).toFixed(1)}% ${lang==="km"?"លើសតម្លៃ":"above asking"}`}
            </p>}
          </div>
          <div className="rounded-xl p-3" style={{ background:C.goldPale,border:`1px solid rgba(201,162,39,0.25)` }}>
            <p className="text-[11px] leading-relaxed" style={{ color:"#8A6B16",...khFont(lang) }}>
              {lang==="km"?"ការផ្ដល់ជូននឹងត្រូវបានផ្ញើទៅកសិករ ហើយពួកគេអាចទទួលយក ឬចរចា។"
                :"Your offer will be sent to the farmer. They can accept, reject, or negotiate directly in chat."}
            </p>
          </div>
        </div>
        <div className="px-4 pb-6 pt-2 flex-shrink-0">
          <button onClick={()=>setOfferSent(true)} className="w-full py-3.5 rounded-xl text-sm font-semibold" style={{ background:C.forest,color:C.cream,...khFont(lang),boxShadow:`0 4px 14px rgba(22,56,40,0.25)` }}>
            {t.makeOffer}
          </button>
        </div>
      </div>
    );
  }

  /* Listing detail */
  if(selected!==null){
    const l=listings.find(x=>x.id===selected)!;
    const pct=(((l.market-l.price)/l.market)*100).toFixed(1);
    const below=l.price<l.market;
    const isSaved=saved.includes(l.id);
    return (
      <div className="flex flex-col h-full overflow-y-auto scrollbar-hide" style={{ background:C.cream }}>
        <div className="px-3 pt-4 pb-2 flex items-center gap-2 flex-shrink-0" style={{ background:C.card,borderBottom:`1px solid ${C.lineOnCard}` }}>
          <button onClick={()=>setSelected(null)} className="p-1"><ArrowLeft size={18} style={{ color:C.ink }}/></button>
          <p className="text-sm font-semibold flex-1" style={{ color:C.ink,...khFont(lang) }}>{t.listingDetail}</p>
          <button onClick={()=>setSaved(p=>isSaved?p.filter(x=>x!==l.id):[...p,l.id])} className="p-1.5 rounded-full" style={{ background:isSaved?C.claySoft:"transparent" }}>
            {isSaved?<BookmarkCheck size={18} style={{ color:C.clay }}/>:<Bookmark size={18} style={{ color:C.muted }}/>}
          </button>
        </div>
        <div className="px-4 pt-4 pb-6 space-y-4">
          {/* Hero image */}
          <div className="rounded-2xl overflow-hidden h-44 relative" style={{ background:C.sageSoft }}>
            <ImageWithFallback src={l.photo} alt={l.variety} className="w-full h-full object-cover"/>
            <div className="absolute inset-0" style={{ background:"linear-gradient(180deg,transparent 50%,rgba(14,36,25,0.5) 100%)" }}/>
            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
              <div>
                <p className="text-base font-bold" style={{ color:"#FCFAF2",...displayFont(lang) }}>{l.variety}</p>
                <p className="text-xs opacity-80" style={{ color:"#FCFAF2",...khFont(lang) }}>{l.qty} available</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold" style={{ color:C.gold,fontFamily:FONTS.mono }}>{l.price.toLocaleString()}</p>
                <p className="text-[10px] opacity-70" style={{ color:"#FCFAF2" }}>KHR/kg</p>
              </div>
            </div>
          </div>

          {/* Farmer card */}
          <div className="rounded-xl p-3 flex items-center gap-3" style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
            <Avatar initials={l.badge} size="lg" photo={l.avatarPhoto}/>
            <div className="flex-1">
              <div className="flex items-center gap-1.5">
                <h2 className="text-base font-bold" style={{ color:C.ink,...displayFont(lang) }}>{l.farmer}</h2>
                {l.verified&&<ShieldCheck size={13} style={{ color:C.sage }}/>}
              </div>
              <StarRow rating={l.rating} count={l.reviews}/>
              <div className="flex items-center gap-1 mt-0.5">
                <MapPin size={10} style={{ color:C.muted }}/><span className="text-xs" style={{ color:C.muted,...khFont(lang) }}>{l.province}</span>
              </div>
            </div>
            {!l.verified&&<AlertCircle size={16} style={{ color:C.clay }}/>}
          </div>

          {/* Details */}
          <div className="rounded-xl overflow-hidden" style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
            {[
              {label:lang==="km"?"ប្រភេទ":"Variety",value:l.variety},
              {label:lang==="km"?"បរិមាណ":"Quantity",value:l.qty},
              {label:lang==="km"?"ចាប់ពី":"Available",value:l.available},
              {label:lang==="km"?"សំណើម":"Moisture",value:l.moisture},
              {label:lang==="km"?"វិញ្ញាបនប័ត្រ":"Cert",value:l.cert},
              {label:lang==="km"?"ចម្ការ":"Farm",value:l.farmDesc},
            ].map((r,i,arr)=>(
              <div key={r.label} className="px-3 py-2.5 flex justify-between items-start gap-3" style={i<arr.length-1?{borderBottom:`1px solid ${C.lineOnCard}`}:{}}>
                <span className="text-xs flex-shrink-0" style={{ color:C.muted,...khFont(lang) }}>{r.label}</span>
                <span className="text-xs font-semibold text-right" style={{ color:C.ink,...khFont(lang) }}>{r.value}</span>
              </div>
            ))}
          </div>

          {/* Price vs market */}
          <div className="rounded-xl p-4" style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
            <div className="mb-3"><SectionLabel>{t.priceVsMarket}</SectionLabel></div>
            <div className="flex items-end gap-4">
              <div>
                <p className="text-[10px] mb-1" style={{ color:C.muted,...khFont(lang) }}>{t.askingPriceLabel}</p>
                <p className="text-2xl font-bold" style={{ color:C.ink,...displayFont(lang) }}>{l.price.toLocaleString()}</p>
                <p className="text-[10px]" style={{ color:C.muted }}>KHR/kg</p>
              </div>
              <div className="flex-1 text-right">
                <p className="text-[10px] mb-1" style={{ color:C.muted,...khFont(lang) }}>{t.marketRateLabel}</p>
                <p className="text-lg font-semibold" style={{ color:C.muted,fontFamily:FONTS.mono }}>{l.market.toLocaleString()}</p>
                <p className="text-[10px]" style={{ color:C.muted }}>KHR/kg</p>
              </div>
            </div>
            <div className="mt-3 px-3 py-2 rounded-lg text-xs font-semibold"
              style={below?{background:C.sageSoft,color:C.sage,...khFont(lang)}:{background:C.claySoft,color:C.clay,...khFont(lang)}}>
              {below?`${pct}% ${t.belowMarket}`:`${Math.abs(Number(pct))}% ${t.aboveMarket}`}
            </div>
          </div>

          {/* Action buttons */}
          <button
            onClick={()=>setGlobalChat({convId:null, newConv:{id:Date.now(),buyer:l.farmerEn,listing:`${l.variety} · ${l.qty}`,last:"",time:"Now",unread:0,status:"inquiry",listingId:l.id}, isBuyer:true})}
            className="w-full py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
            style={{ background:C.forest,color:C.cream,...khFont(lang),boxShadow:`0 4px 14px rgba(22,56,40,0.25)` }}>
            <MessageCircle size={16}/>{t.openChat}
          </button>
          <div className="grid grid-cols-2 gap-2">
            <button onClick={()=>setShowOffer(true)} className="py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-1.5"
              style={{ background:C.goldPale,color:"#8A6B16",border:`1px solid rgba(201,162,39,0.3)`,...khFont(lang) }}>
              <Zap size={14}/>{t.makeOffer}
            </button>
            <button onClick={()=>setScreen("traceability")} className="py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-1.5"
              style={{ background:C.card,border:`1px solid ${C.lineOnCard}`,color:C.ink,...khFont(lang) }}>
              <FileText size={14}/>{lang==="km"?"តាមដាន":"Trace"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full overflow-y-auto scrollbar-hide" style={{ background:C.cream }}>
      <div className="px-4 pt-5 pb-3">
        <h1 className="text-xl font-bold" style={{ color:C.ink,...displayFont(lang) }}>{t.findRice}</h1>
      </div>
      <div className="px-4 mb-3 space-y-2">
        <div className="flex gap-2">
          <select value={province} onChange={e=>setProvince(e.target.value)} className="flex-1 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none"
            style={{ background:C.card,border:`1px solid ${C.lineOnCard}`,color:C.ink,...khFont(lang) }}>
            {provinces.map(p=><option key={p}>{p}</option>)}
          </select>
          <select value={variety} onChange={e=>setVariety(e.target.value)} className="flex-1 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none"
            style={{ background:C.card,border:`1px solid ${C.lineOnCard}`,color:C.ink,...khFont(lang) }}>
            {varietyOpts.map(v=><option key={v}>{v}</option>)}
          </select>
        </div>
        <button onClick={()=>setVerifiedOnly(!verifiedOnly)} className="flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-semibold transition-all"
          style={verifiedOnly?{background:C.forest,color:C.cream,borderColor:C.forest,...khFont(lang)}
            :{background:C.card,borderColor:C.lineOnCard,color:C.muted,...khFont(lang)}}>
          <ShieldCheck size={12}/>{t.verifiedOnly}
        </button>
      </div>
      <p className="px-4 text-[11px] mb-2" style={{ color:C.muted,...khFont(lang) }}>{filtered.length} {t.listingsFound}</p>
      <div className="px-4 space-y-2 pb-6">
        {filtered.map(l=>(
          <button key={l.id} onClick={()=>setSelected(l.id)} className="w-full rounded-xl p-2.5 text-left transition-all"
            style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0" style={{ background:C.sageSoft }}>
                <ImageWithFallback src={l.photo} alt={l.variety} className="w-full h-full object-cover"/>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Avatar initials={l.badge} size="sm" photo={l.avatarPhoto}/>
                  <p className="text-sm font-semibold truncate" style={{ color:C.ink,...khFont(lang) }}>{l.farmer}</p>
                  {l.verified&&<ShieldCheck size={10} style={{ color:C.sage }} className="flex-shrink-0"/>}
                </div>
                <p className="text-xs" style={{ color:C.muted,...khFont(lang) }}>{l.variety} · {l.qty}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <MapPin size={9} style={{ color:C.muted }}/><span className="text-[10px]" style={{ color:C.muted,...khFont(lang) }}>{l.province}</span>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-sm font-bold" style={{ color:C.ink,fontFamily:FONTS.mono }}>{l.price.toLocaleString()}</p>
                <p className="text-[9px]" style={{ color:C.muted }}>KHR/kg</p>
                <StarRow rating={l.rating} count={l.reviews}/>
                {saved.includes(l.id)&&<BookmarkCheck size={11} style={{ color:C.clay }} className="ml-auto mt-0.5"/>}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─── BUYER PROFILE ───────────────────────────────────── */
function BuyerProfileScreen() {
  const {t,lang} = useLang();
  const bp = buyerProfileData(t);
  return (
    <div className="flex flex-col h-full overflow-y-auto scrollbar-hide" style={{ background:C.cream }}>
      {/* Banner */}
      <div className="h-28 relative flex-shrink-0">
        <ImageWithFallback src={bp.banner} alt="" className="w-full h-full object-cover"/>
        <div className="absolute inset-0" style={{ background:`linear-gradient(180deg,rgba(14,36,25,0.1) 0%,${C.cream} 100%)` }}/>
      </div>
      {/* Avatar overlap */}
      <div className="px-4 -mt-10 pb-3 relative">
        <div className="flex items-end justify-between mb-3">
          <Avatar initials={bp.initials} size="xl" photo={bp.photo}/>
          <div className="flex gap-2 pb-1">
            <button className="px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1" style={{ background:C.card,border:`1px solid ${C.lineOnCard}`,color:C.ink,...khFont(lang) }}>
              <Share2 size={11}/>{lang==="km"?"ចែករំលែក":"Share"}
            </button>
          </div>
        </div>
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold" style={{ color:C.ink,...displayFont(lang) }}>{bp.name}</h1>
              {bp.verified&&<ShieldCheck size={14} style={{ color:C.sage }}/>}
            </div>
            <StarRow rating={bp.rating} count={bp.reviews}/>
            <p className="text-xs mt-0.5" style={{ color:C.muted,...khFont(lang) }}>{t.memberSince} {bp.memberSince}</p>
          </div>
          <Badge text={t.verifiedBuyer} tone="forest"/>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 mb-4">
        <div className="grid grid-cols-3 gap-2">
          {[
            {l:t.totalPurchases,v:String(bp.totalPurchases)},
            {l:t.totalSpend,v:bp.totalSpend},
            {l:t.buyersRated,v:"31"},
          ].map(s=>(
            <div key={s.l} className="rounded-xl p-3 text-center" style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
              <p className="text-base font-bold leading-tight" style={{ color:C.ink,fontFamily:FONTS.mono }}>{s.v}</p>
              <p className="text-[10px] leading-tight mt-0.5" style={{ color:C.muted,...khFont(lang) }}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <div className="px-4 mb-4">
        <div className="mb-2"><SectionLabel>{t.about}</SectionLabel></div>
        <div className="rounded-xl px-3 py-3" style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
          <p className="text-xs leading-relaxed" style={{ color:C.muted,...khFont(lang) }}>{bp.about}</p>
          <div className="grid grid-cols-2 gap-3 mt-3 pt-3" style={{ borderTop:`1px solid ${C.lineOnCard}` }}>
            <div className="flex items-center gap-2">
                <img src={LOGO_SRC} alt="KurSrov" className="w-full h-full object-contain drop-shadow-lg" />
              <div>
                <p className="text-[10px]" style={{ color:C.muted,...khFont(lang) }}>{t.preferredVariety}</p>
                <p className="text-xs font-semibold" style={{ color:C.ink,...khFont(lang) }}>{bp.preferredVariety}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={13} style={{ color:C.forest }}/>
              <div>
                <p className="text-[10px]" style={{ color:C.muted,...khFont(lang) }}>{t.avgResponseTime}</p>
                <p className="text-xs font-semibold" style={{ color:C.ink,...khFont(lang) }}>{bp.avgResponse}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ThumbsUp size={13} style={{ color:C.forest }}/>
              <div>
                <p className="text-[10px]" style={{ color:C.muted,...khFont(lang) }}>{t.responseRate}</p>
                <p className="text-xs font-semibold" style={{ color:C.ink,...khFont(lang) }}>{bp.responseRate}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={13} style={{ color:C.forest }}/>
              <div>
                <p className="text-[10px]" style={{ color:C.muted,...khFont(lang) }}>{t.activeRegions}</p>
                <p className="text-xs font-semibold" style={{ color:C.ink,...khFont(lang) }}>{bp.regions.slice(0,2).join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent orders */}
      <div className="px-4 mb-6">
        <div className="mb-2"><SectionLabel>{t.recentOrders}</SectionLabel></div>
        <div className="rounded-xl overflow-hidden" style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
          {bp.recentOrders.map((o,i)=>(
            <div key={i} className="px-3 py-2.5 flex items-center gap-3" style={i<bp.recentOrders.length-1?{borderBottom:`1px solid ${C.lineOnCard}`}:{}}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background:o.status==="confirmed"?C.sageSoft:C.goldPale }}>
                {o.status==="confirmed"?<Truck size={12} style={{ color:C.sage }}/>:<CheckCircle2 size={12} style={{ color:C.gold }}/>}
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold" style={{ color:C.ink,...khFont(lang) }}>{o.variety} · {o.qty}</p>
                <p className="text-[10px]" style={{ color:C.muted,...khFont(lang) }}>{o.farmer} · {o.date}</p>
              </div>
              <Badge text={o.status==="confirmed"?t.confirmed:(lang==="km"?"បានបញ្ចប់":"Completed")} tone={o.status==="confirmed"?"sage":"gold"}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── TRACEABILITY ────────────────────────────────────── */
function TraceabilityScreen() {
  const {t,lang} = useLang();
  const steps = [
    {step:lang==="km"?"ប្រមូលផលត្រូវបានកត់ត្រា":"Harvest logged on KurSrov",date:"Jun 18",done:true},
    {step:lang==="km"?"ប្រកាសបញ្ជីលើ KurSrov":"Listing posted & verified",date:"Jun 20",done:true},
    {step:lang==="km"?"អ្នកទិញបានទំនាក់ទំនង":"Buyer contacted farmer",date:"Jun 22",done:true},
    {step:lang==="km"?"កិច្ចព្រមព្រៀងបានបញ្ជាក់":"In-app deal confirmed",date:"Jun 25",done:true},
    {step:lang==="km"?"ការទទួលទំនិញបានកំណត់":"Pickup scheduled",date:"Jul 2",done:false},
  ];
  return (
    <div className="flex flex-col h-full overflow-y-auto scrollbar-hide" style={{ background:C.cream }}>
      <div className="px-4 pt-5 pb-3">
        <h1 className="text-xl font-bold" style={{ color:C.ink,...displayFont(lang) }}>{t.traceabilityReport}</h1>
        <p className="text-xs mt-0.5" style={{ color:C.muted,...khFont(lang) }}>{t.traceSubtitle}</p>
      </div>
      <div className="px-4 space-y-4 pb-6">
        <div className="rounded-2xl p-4 relative overflow-hidden" style={{ background:C.forest,color:C.cream }}>
          <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full" style={{ background:"rgba(201,162,39,0.12)" }}/>
          <p className="text-xs opacity-60 mb-1 relative z-10" style={khFont(lang)}>{t.reportId}</p>
          <p className="text-sm font-bold relative z-10" style={{ fontFamily:FONTS.mono }}>SCR-2026-00447</p>
          <div className="mt-3 pt-3 grid grid-cols-2 gap-3 relative z-10" style={{ borderTop:"1px solid rgba(251,248,240,0.2)" }}>
            {[
              {l:t.variety,v:lang==="km"?"អង្ករក្រអូប":"Fragrant Rice"},
              {l:t.quantityLabel,v:lang==="km"?"៤.៥ តោន":"4.5 Ton"},
              {l:t.harvestDate,v:lang==="km"?"១៨ មិថុនា":"Jun 18, 2026"},
              {l:t.transaction,v:lang==="km"?"២៥ មិថុនា":"Jun 25, 2026"},
            ].map(r=>(
              <div key={r.l}><p className="text-[10px] opacity-60" style={khFont(lang)}>{r.l}</p><p className="text-sm font-semibold" style={khFont(lang)}>{r.v}</p></div>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-2"><SectionLabel>{t.farmOrigin}</SectionLabel></div>
          <div className="rounded-xl overflow-hidden" style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
            {[{l:t.farmer,v:lang==="km"?"ហ៊ុន ផានុត":"Hun Phanuth"},{l:t.province,v:t.kandal},{l:t.farmSize,v:"2.8 ha"},{l:t.verification,v:lang==="km"?"ទូរស័ព្ទ + ខេត្ត ✓":"Phone + Province ✓"}].map((r,i)=>(
              <div key={r.l} className="px-3 py-2.5 flex justify-between" style={i<3?{borderBottom:`1px solid ${C.lineOnCard}`}:{}}>
                <span className="text-xs" style={{ color:C.muted,...khFont(lang) }}>{r.l}</span>
                <span className="text-xs font-semibold" style={{ color:C.ink,...khFont(lang) }}>{r.v}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-2"><SectionLabel>{t.transactionChain}</SectionLabel></div>
          <div className="space-y-1.5">
            {steps.map((s,i)=>(
              <div key={i} className="flex items-center gap-3 rounded-xl px-3 py-2.5" style={{ background:C.card,border:`1px solid ${C.lineOnCard}` }}>
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background:s.done?C.sageSoft:"#EFEAD9" }}>
                  {s.done?<Check size={10} style={{ color:C.sage }}/>:<div className="w-2 h-2 rounded-full" style={{ background:C.muted }}/>}
                </div>
                <span className="text-xs flex-1" style={{ color:C.ink,...khFont(lang) }}>{s.step}</span>
                <span className="text-[10px]" style={{ color:C.muted,fontFamily:FONTS.mono }}>{s.date}</span>
              </div>
            ))}
          </div>
        </div>
        <button className="w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2" style={{ background:C.card,border:`1px solid ${C.lineOnCard}`,color:C.ink,...khFont(lang) }}>
          <FileText size={14}/>{t.downloadPdf}
        </button>
      </div>
    </div>
  );
}

/* ─── NAV CONFIG ──────────────────────────────────────── */
const farmerNav = [
  {id:"home",lk:"home"as keyof T,icon:Home},
  {id:"prices",lk:"prices"as keyof T,icon:BarChart2},
  {id:"post",lk:"post"as keyof T,icon:Plus},
  {id:"learn",lk:"learn"as keyof T,icon:GraduationCap},
  {id:"messages",lk:"messages"as keyof T,icon:MessageCircle},
  {id:"profile",lk:"profile"as keyof T,icon:User},
];
const buyerNav = [
  {id:"home",lk:"home"as keyof T,icon:Home},
  {id:"find",lk:"findRice"as keyof T,icon:Search},
  {id:"messages",lk:"messages"as keyof T,icon:MessageCircle},
  {id:"traceability",lk:"trace"as keyof T,icon:FileText},
  {id:"profile",lk:"profile"as keyof T,icon:User},
];

/* ─── MAIN APP ────────────────────────────────────────── */
export default function App() {
  const [role, setRole] = useState<"farmer"|"buyer">("farmer");
  const [screen, setScreen] = useState("home");
  const [lang, setLang] = useState<Lang>("en");
  const [authStage, setAuthStage] = useState<"splash"|"login"|"app">("splash");
  // Global chat state — lets any screen open a chat thread
  const [globalChat, setGlobalChat] = useState<any>(null);
  const [extraConvos, setExtraConvos] = useState<any[]>([]);
  // Learn module state
  const [learnArticleId, setLearnArticleId] = useState<string|null>(null);
  const [savedLearnIds, setSavedLearnIds] = useState<string[]>([]);
  const [completedLearnIds, setCompletedLearnIds] = useState<string[]>([]);

  const t = { ...translations[lang], lang } as T & { lang: Lang };
  const nav = role==="farmer"?farmerNav:buyerNav;

  function handleSetGlobalChat(chatInfo: any) {
    if (chatInfo?.newConv) {
      setExtraConvos(p=>[...p.filter(c=>c.listingId!==chatInfo.newConv.listingId), chatInfo.newConv]);
    }
    setGlobalChat(chatInfo);
    setScreen("messages");
  }

  function toggleSavedLearn(id:string){
    setSavedLearnIds(p=>p.includes(id)?p.filter(x=>x!==id):[...p,id]);
  }
  function toggleCompletedLearn(id:string){
    setCompletedLearnIds(p=>p.includes(id)?p.filter(x=>x!==id):[...p,id]);
  }

  function renderScreen() {
    // Global chat overlay
    if (globalChat) {
      const convId = globalChat.convId;
      const newConv = globalChat.newConv;
      const isBuyer = globalChat.isBuyer ?? role==="buyer";
      const seedMsgs = messagesData(t);
      let conv: any;
      if (convId!==null && convId!==undefined) {
        conv = seedMsgs.find((c:any)=>c.id===convId)||extraConvos.find((c:any)=>c.id===convId);
      } else if (newConv) {
        conv = newConv;
      }
      if (conv) return (
        <ChatThread conversation={conv} onBack={()=>setGlobalChat(null)} onStatusChange={()=>{}} isBuyer={isBuyer}/>
      );
    }

    if (screen==="learn") {
      if (learnArticleId) return (
        <LearnArticleScreen
          articleId={learnArticleId}
          onBack={()=>setLearnArticleId(null)}
          isSaved={savedLearnIds.includes(learnArticleId)}
          onToggleSave={()=>toggleSavedLearn(learnArticleId)}
          isCompleted={completedLearnIds.includes(learnArticleId)}
          onToggleComplete={()=>toggleCompletedLearn(learnArticleId)}
        />
      );
      return (
        <LearnHubScreen
          onOpenArticle={(id)=>setLearnArticleId(id)}
          savedIds={savedLearnIds}
          completedIds={completedLearnIds}
        />
      );
    }

    if (role==="farmer") {
      switch(screen){
        case"home": return <FarmerHome setScreen={setScreen} setGlobalChat={handleSetGlobalChat}/>;
        case"prices": return <PricesScreen/>;
        case"post": return <PostHarvestScreen setScreen={setScreen}/>;
        case"messages": return <MessagesScreen isBuyer={false}/>;
        case"profile": return <ProfileScreen/>;
        default: return <FarmerHome setScreen={setScreen} setGlobalChat={handleSetGlobalChat}/>;
      }
    } else {
      switch(screen){
        case"home": return <BuyerHome setScreen={setScreen}/>;
        case"find": return <FindRiceScreen setScreen={setScreen} setGlobalChat={handleSetGlobalChat}/>;
        case"messages": return <MessagesScreen isBuyer={true}/>;
        case"traceability": return <TraceabilityScreen/>;
        case"profile": return <BuyerProfileScreen/>;
        default: return <BuyerHome setScreen={setScreen}/>;
      }
    }
  }

  function switchRole(r:"farmer"|"buyer"){ setRole(r); setScreen("home"); setGlobalChat(null); setLearnArticleId(null); }
  const bodyFont = lang==="km"?FONTS.km.body:FONTS.en.body;

  return (
    <LangContext.Provider value={{ lang, t, setLang }}>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&family=Kantumruy+Pro:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      <div className="min-h-screen flex flex-col items-center justify-center p-4"
        style={{ fontFamily:bodyFont, background:`radial-gradient(ellipse at 50% -10%,#D8EDDF 0%,${C.cream} 50%)` }}>

        {authStage==="app"&&(
          <div className="mb-5 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background:C.forest }}>
                <img src={LOGO_SRC} alt="KurSrov" className="w-full h-full object-contain drop-shadow-lg" />
              </div>
              <span className="text-xl font-bold" style={{ color:C.forest,...displayFont(lang) }}>{lang==="km"?"កួរស្រូវ":"KurSrov"}</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ color:"#8A6B16",background:C.goldPale }}>Beta</span>
            </div>
            <p className="text-xs" style={{ color:C.muted,fontFamily:bodyFont }}>{t.tagline}</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex gap-1 rounded-xl p-1" style={{ background:"#EFEAD9" }}>
                {(["farmer","buyer"]as const).map(r=>(
                  <button key={r} onClick={()=>switchRole(r)} className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                    style={role===r?{background:C.forest,color:C.cream,fontFamily:bodyFont}:{color:C.muted,fontFamily:bodyFont}}>
                    {r==="farmer"?t.farmerView:t.buyerView}
                  </button>
                ))}
              </div>
              <div className="flex gap-1 rounded-xl p-1" style={{ background:"#EFEAD9" }}>
                {(["en","km"] as Lang[]).map(l=>(
                  <button key={l} onClick={()=>setLang(l)} className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                    style={lang===l?{background:C.gold,color:C.forestDeep}:{color:C.muted,...(l==="km"?{fontFamily:FONTS.km.body}:{})}}>{l==="en"?"EN":"ខ្មែរ"}</button>
                ))}
              </div>
            </div>
          </div>
        )}

        {authStage!=="app"&&(
          <div className="mb-3 flex gap-1 rounded-xl p-1" style={{ background:"#EFEAD9" }}>
            {(["en","km"] as Lang[]).map(l=>(
              <button key={l} onClick={()=>setLang(l)} className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                style={lang===l?{background:C.gold,color:C.forestDeep}:{color:C.muted,...(l==="km"?{fontFamily:FONTS.km.body}:{})}}>{l==="en"?"EN":"ខ្មែរ"}</button>
            ))}
          </div>
        )}

        {/* Phone frame */}
        <div className="relative shadow-2xl overflow-hidden flex flex-col"
          style={{ width:375, height:720, borderRadius:44, background:C.card,
            border:`8px solid ${C.forestDeep}`,
            boxShadow:`0 40px 80px rgba(14,36,25,0.3),0 0 0 1px rgba(14,36,25,0.08),inset 0 1px 0 rgba(255,255,255,0.05)` }}>

          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-1 flex-shrink-0"
            style={{ background:authStage==="splash"?C.forestDeep:C.card }}>
            <span className="text-[11px] font-semibold" style={{ fontFamily:FONTS.mono,color:authStage==="splash"?"#FCFAF2":C.ink }}>9:41</span>
            <div className="w-20 h-5 rounded-full mx-auto absolute left-1/2 -translate-x-1/2 top-2 opacity-90" style={{ background:C.ink }}/>
            <div className="flex items-center gap-1">
              <div className="flex gap-0.5 items-end">
                {[3,5,7,9].map((h,i)=><div key={i} className="w-0.5 rounded-sm" style={{ height:h,background:authStage==="splash"?"#FCFAF2":C.ink }}/>)}
              </div>
              <div className="w-4 h-2.5 border rounded-sm relative" style={{ borderColor:authStage==="splash"?"#FCFAF2":C.ink }}>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0.5 h-1.5 rounded-r-sm" style={{ background:authStage==="splash"?"#FCFAF2":C.ink }}/>
                <div className="absolute inset-0.5 rounded-sm" style={{ width:"70%",background:authStage==="splash"?"#FCFAF2":C.ink }}/>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-hidden" style={{ fontFamily:bodyFont }}>
            {authStage==="splash"&&<SplashScreen onDone={()=>setAuthStage("login")}/>}
            {authStage==="login"&&<LoginScreen role={role} onRoleChange={setRole} onLoggedIn={()=>setAuthStage("app")} onGuest={()=>setAuthStage("app")}/>}
            {authStage==="app"&&renderScreen()}
          </div>

          {/* Bottom nav */}
          {authStage==="app"&&(
            <div className="flex-shrink-0 px-2 pb-5 pt-1" style={{ background:C.card,borderTop:`1px solid ${C.lineOnCard}` }}>
              <div className="flex">
                {nav.map(item=>{
                  const Icon=item.icon;
                  const active=screen===item.id&&!globalChat;
                  const isPost=item.id==="post";
                  return (
                    <button key={item.id} onClick={()=>{setGlobalChat(null);setLearnArticleId(null);setScreen(item.id);}} className="flex-1 flex flex-col items-center gap-0.5 pt-2 pb-1 transition-all">
                      {isPost?<div className="-mt-4 mb-0.5"><GrainSeal size={40}><Icon size={17} style={{ color:C.forestDeep }} strokeWidth={2.4}/></GrainSeal></div>
                        :<Icon size={20} style={{ color:active?C.forest:C.muted }} strokeWidth={active?2.5:1.8}/>}
                      <span className="text-[9px] font-semibold transition-colors leading-tight text-center"
                        style={lang==="km"?{color:active?C.forest:C.muted,fontFamily:FONTS.km.body,fontSize:"9px"}:{color:active?C.forest:C.muted}}>
                        {t[item.lk] as string}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <p className="mt-4 text-[11px]" style={{ color:C.muted,fontFamily:bodyFont }}>
          {authStage==="app"?t.tapNav:(lang==="km"?"គំរូចូល · ការផ្ទៀងផ្ទាត់គឺសម្រាប់បង្ហាញ":"Onboarding demo · verification is simulated")}
        </p>
      </div>
    </LangContext.Provider>
  );
}