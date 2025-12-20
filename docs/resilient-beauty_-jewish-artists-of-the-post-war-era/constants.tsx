
import { Artist, Language, Translation } from './types';

export const TRANSLATIONS: Translation = {
  exhibitionTitle: {
    en: "Resilient Beauty",
    he: "יופי עמיד"
  },
  exhibitionSubtitle: {
    en: "Jewish Artists Who Survived the Holocaust and Rebuilt Art in Israel",
    he: "אמנים יהודים ששרדו את השואה ובנו מחדש את האמנות בישראל"
  },
  home: { en: "Home", he: "בית" },
  artists: { en: "Artists", he: "אמנים" },
  tickets: { en: "Tickets", he: "כרטיסים" },
  biography: { en: "Biography", he: "ביוגרפיה" },
  artwork: { en: "Artwork", he: "יצירה" },
  aiInterpretation: { en: "AI Reflection on Resilience", he: "השתקפות AI על חוסן" },
  watchVideo: { en: "Watch Presentation", he: "צפה במצגת" },
  buyTicket: { en: "Buy Physical Ticket", he: "קנה כרטיס פיזי" },
  accessAll: { en: "Access Full Collection", he: "גישה לכל האוסף" },
  freeAccess: { en: "Free Access (First 10)", he: "גישה חופשית (10 ראשונים)" },
  premiumRequired: { en: "Premium Required", he: "נדרשת גישת פרימיום" },
  supportExhibition: { en: "Support this exhibition to unlock all artist profiles.", he: "תמכו בתערוכה זו כדי לפתוח את כל פרופילי האמנים." },
  aboutArtist: { en: "About the Artist", he: "על האמן" },
  share: { en: "Share", he: "שתף" },
  linkCopied: { en: "Link Copied!", he: "הקישור הועתק!" }
};

/**
 * Robust helper to convert Google Drive share links to direct image URLs.
 * Handles both /d/ID/ and open?id=ID formats.
 */
const getDirectImg = (url: string) => {
  if (!url) return "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000";
  
  // Try matching /d/ID format
  const idMatch = url.match(/\/d\/([^/?#]+)/);
  if (idMatch && idMatch[1]) {
    return `https://drive.google.com/uc?export=view&id=${idMatch[1]}`;
  }
  
  // Try matching query param id=ID format
  try {
    const urlObj = new URL(url);
    const idParam = urlObj.searchParams.get('id');
    if (idParam) {
      return `https://drive.google.com/uc?export=view&id=${idParam}`;
    }
  } catch(e) {
    // fallback if URL is invalid or malformed
  }

  return url;
};

export const ARTISTS_DATA: Artist[] = [
  {
    id: "blanka-tauber",
    name: { en: "Blanka Tauber", he: "בלנקה טאובר" },
    biography: {
      en: "Born in Slovakia, survived Auschwitz with her sister Julia. Her father and other siblings were murdered. She immigrated to Israel in 1950 and became a founder of the Safed Artists' Village. Initially painted landscapes, but later focused on the Holocaust. Despite the darkness of her past, her work often sought to find a new visual language for the beauty of the Israeli landscape.",
      he: "נולדה בסלובקיה, שרדה את אושוויץ יחד עם אחותה ג'וליה. אביה ואחיה נרצחו. היא עלתה לישראל ב-1950 והייתה ממייסדות כפר האמנים בצפת. בתחילה ציירה נופים, אך מאוחר יותר התמקדה בנושא השואה. למרות העבר הקשה, עבודתה חיפשה שפה חזותית חדשה ליופי של הנוף הישראלי."
    },
    imageUrl: getDirectImg("https://drive.google.com/file/d/1c6A9aBuBlQAWStcH6G5LjoaSPRIUjCQf/view"),
    paintingDescription: { 
      en: "Safed Alley with Cat, Charcoal and ink on paper", 
      he: "סמטה בצפת עם חתול, פחם ודיו על נייר" 
    },
    links: ["https://he.wikipedia.org/wiki/%D7%91%D7%9C%D7%A0%D7%A7%D7%94_%D7%98%D7%90%D7%95%D7%91%D7%A8"],
    isFree: true,
    birthYear: 1910,
    deathYear: 1989
  },
  {
    id: "avner-katz",
    name: { en: "Avner Katz", he: "אבנר כץ" },
    biography: {
      en: "Born in Israel to parents who fled the shadows of Europe (Pinsk). A major Israeli illustrator and painter, professor at Haifa University. Created 'Kippy the Hedgehog'. His work is a testament to the growth of a new generation rooted in resilience.",
      he: "נולד בישראל להורים שנמלטו מצללי אירופה (פינסק). מאייר וצייר ישראלי חשוב, פרופסור באוניברסיטת חיפה. יצר את דמותו של 'קיפי בן קיפוד'. עבודתו היא עדות לצמיחתו של דור חדש המושרש בחוסן."
    },
    imageUrl: getDirectImg("https://drive.google.com/file/d/16lo44yHNzkvmVkI55YSrKnC6m0upTfp4/view"),
    paintingDescription: { en: "Watercolors signed and framed", he: "צבעי מים חתומים וממוסגרים" },
    links: ["https://museum.imj.org.il/artcenter/newsite/en/?artist=Katz%2C+Avner"],
    isFree: true,
    birthYear: 1939,
    deathYear: 2020
  },
  {
    id: "zita-weiss",
    name: { en: "Zita Weiss", he: "זיטה וייס" },
    biography: {
      en: "Born in Czechoslovakia in 1925, Zita survived the horrors of Auschwitz. She immigrated to Israel in 1950, seeking a life of renewal. Her art captures the vibrant light of Jaffa, a stark contrast to the darkness she endured.",
      he: "נולדה בצ'כובלובקיה ב-1925, זיטה שרדה את זוועות אושוויץ. היא עלתה לישראל ב-1950 בחיפוש אחר חיי התחדשות. אמנותה לוכדת את האור התוסס של יפו, ניגוד מוחלט לחושך שעברה."
    },
    imageUrl: getDirectImg("https://drive.google.com/file/d/1AoLoAxOfZTygcd_M9-q22Xl7rAg0X7xQ/view"),
    paintingDescription: { en: "Jaffa, Oil on canvas", he: "יפו, שמן על בד" },
    links: ["https://museum.imj.org.il/artcenter/newsite/en/?artist=Weiss%2C+Zita"],
    isFree: true,
    birthYear: 1925
  },
  {
    id: "dan-moscona",
    name: { en: "Dan Moscona", he: "דן מוסקונה" },
    biography: {
      en: "Born in Bulgaria. During the dark years of WWII, he was hidden and protected by a righteous Bulgarian policeman. This act of humanity amidst tragedy allowed him to later bring Bulgarian influences into the Israeli art scene.",
      he: "נולד בבולגריה. במהלך השנים החשוכות של מלחמת העולם השנייה, הוא הוסתר והוגן על ידי שוטר בולגרי חסיד אומות עולם. מעשה אנושי זה בתוך הטרגדיה אפשר לו להביא מאוחר יותר השפעות בולגריות לסצנת האמנות הישראלית."
    },
    imageUrl: getDirectImg("https://drive.google.com/file/d/1m0-f0z8Lxubp49H8ws0cIUAk4qEa4SGg/view"),
    paintingDescription: { en: "Oil on canvas, 82X40", he: "שמן על בד 82X40 חתום וממוסגר" },
    links: ["https://bjmoreshet.org/the-community/education/claims-conference-project/dan-moskuna/"],
    isFree: true
  },
  {
    id: "paul-fux",
    name: { en: "Paul Fux", he: "פאול פוקס" },
    biography: {
      en: "Born in Romania, Paul spent two years in a forced labor camp in Poland. After immigrating to Israel in 1970, he dedicated his life to theater and art, proving that creativity can survive the most grueling conditions.",
      he: "נולד ברומניה, פאול בילה שנתיים במחנה עבודת כפייה בפולין. לאחר שעלה לישראל ב-1970, הקדיש את חייו לתיאטרון ולאמנות, והוכיח שיצירתיות יכולה לשרוד גם בתנאים הקשים ביותר."
    },
    imageUrl: getDirectImg("https://drive.google.com/file/d/1duB_fZNbxJ7LxTaaAfL_1CuulQABJ2r6/view"),
    paintingDescription: { en: "National issues and war miniatures", he: "מיניאטורות מלחמה ונושאים לאומיים" },
    links: ["https://he.wikipedia.org/wiki/%D7%A4%D7%90%D7%95%D7%9C_%D7%A4%D7%95%D7%A7%D7%A1"],
    isFree: true,
    birthYear: 1922,
    deathYear: 2011
  },
  {
    id: "chaim-rosenthal",
    name: { en: "Chaim Rosenthal", he: "חיים רוזנטל" },
    biography: {
      en: "Born 1938 in Bucharest. A bridge between cultures, he served as a diplomat and educator. His landscapes often evoke a sense of peaceful permanence, a quiet victory over the displacement of his youth.",
      he: "נולד ב-1938 בבוקרשט. גשר בין תרבויות, הוא שימש כדיפלומט ומחנך. נופיו מעוררים לעתים קרובות תחושה של קביעות שלווה, ניצחון שקט על העקירה של נעוריו."
    },
    imageUrl: getDirectImg("https://drive.google.com/file/d/1CtsSfcBxb7xnH2-kVr7zZM4f6yNNCQI2/view"),
    paintingDescription: { en: "Landscape, Oil on canvas", he: "נוף, שמן על בד" },
    links: ["https://museum.imj.org.il/artcenter/newsite/en/?artist=Rosenthal%2C+Chaim"],
    isFree: true,
    birthYear: 1938
  },
  {
    id: "ada-strod",
    name: { en: "Ada Strod", he: "אדה סטרוד" },
    biography: {
      en: "Fleeing Vienna in 1940 on an illegal immigration ship, Ada arrived in Israel with nothing but a determination to create. She became a student of the Avni Institute and a pillar of the artistic community.",
      he: "כשברחה מווינה ב-1940 באוניית מעפילים, אדה הגיעה לישראל עם לא כלום מלבד נחישות ליצור. היא הפכה לתלמידה במכון אבני ולעמוד תווך בקהילה האמנותית."
    },
    imageUrl: getDirectImg("https://drive.google.com/file/d/1IEx9gLdZLag49VsMynuQiuFGb3NeZbH0/view"),
    paintingDescription: { en: "Still Life, Oil on canvas", he: "דומם. שמן על בד. חתום" },
    links: [],
    isFree: true
  },
  {
    id: "yehuda-bar-yoshafat",
    name: { en: "Yehuda Bar Yoshafat", he: "יהודה בר יושפט" },
    biography: {
      en: "A survivor of forced labor camps who escaped a death sentence by mere chance. His survival fueled a lifelong commitment to organizing artists in Israel's South, turning trauma into communal beauty.",
      he: "שורד מחנות עבודת כפייה שחמק מגזר דין מוות במקרה. הישרדותו הזינה מחויבות לכל החיים לארגון אמנים בדרום ישראל, והפיכת טראומה ליופי קהילתי."
    },
    imageUrl: getDirectImg("https://drive.google.com/file/d/1mSb6Fi1_icJw7Qz6lYsGqiAK0yL3dQPQ/view"),
    paintingDescription: { en: "Grove (Horesha), Acrylic on Masonite", he: "חורשה, אקריליק על מזוניט" },
    links: ["https://www.invaluable.com/artist/yoshafat-yehuda-bar-fg93yq68fl/"],
    isFree: true,
    birthYear: 1922,
    deathYear: 1993
  },
  {
    id: "shalom-sechvi",
    name: { en: "Shalom Sechvi", he: "שלום שכוי" },
    biography: {
      en: "After surviving the war and internment in Cyprus, Shalom arrived in 1946. His abstract works represent a psychological processing of the journey from the ashes of Europe to the light of the Land of Israel.",
      he: "לאחר ששרד את המלחמה והמעצר בקפריסין, הגיע שלום ב-1946. עבודותיו המופשטות מייצגות עיבוד פסיכולוגי של המסע מאפר אירופה אל אור ארץ ישראל."
    },
    imageUrl: getDirectImg("https://drive.google.com/file/d/1zjmYPwDlVUdIGlCYPVtSACy0H_OqLP10/view"),
    paintingDescription: { en: "Abstract, Watercolor or oil on paper", he: "שלום שכוי מופשט אקוורל או שמן על נייר" },
    links: ["https://www.maapilim.org.il/notebook_ext.asp?book=32343"],
    isFree: true
  },
  {
    id: "malvina-kaplan",
    name: { en: "Malvina Kaplan", he: "מלווינה קפלן" },
    biography: {
      en: "A survivor of both Auschwitz and Ravensbruck, Malvina was saved by the 'White Buses' of Count Bernadotte. Her abstract pastel arrays are an exploration of order and color born from the chaos of survival.",
      he: "שורדת הן את אושוויץ והן את רוונסבריק, מלווינה ניצלה על ידי ה'אוטובוסים הלבנים' של הרוזן ברנדוט. מערכי הפסטל המופשטים שלה הם חקירה של סדר וצבע שנולדו מתוך כאוס ההישרדות."
    },
    imageUrl: getDirectImg("https://drive.google.com/file/d/1ZeGeg_55G7Ex4RE2FVCORQzB359wQpwa/view"),
    paintingDescription: { en: "Abstract arrays of pastels", he: "מערכי פסטל מופשטים" },
    links: ["https://en.wikipedia.org/wiki/Malvina_Kaplan"],
    isFree: true
  },
  {
    id: "claire-szillard",
    name: { en: "Claire Szillard", he: "קלייר סילארד" },
    biography: {
      en: "Born in Budapest, she survived the siege while her husband was taken to labor camps. After the war, she rebuilt her life in Israel, becoming world-famous for her stained glass work that literally transforms light into spiritual beauty.",
      he: "נולדה בבודפשט, היא שרדה את המצור בזמן שבעלה נלקח למחנות עבודה. לאחר המלחמה, בנתה מחדש את חייה בישראל, והפכה למפורסמת בעולם בעבודות הוויטראז' שלה שבאופן מילולי הופכות אור ליופי רוחני."
    },
    imageUrl: getDirectImg("https://drive.google.com/file/d/17-SR4qE7hU1IB6dWmF-FEO8w7d4KA3rc/view"),
    paintingDescription: { en: "Watercolor on paper - tree trunk", he: "אקוורל על נייר - גזע עץ" },
    links: ["https://he.wikipedia.org/wiki/%D7%A7%D7%9C%D7%99%D7%99%D7%A8_%D7%A1%D7%99%D7%9C%D7%90%D7%A8%D7%93"],
    isFree: false
  }
];
