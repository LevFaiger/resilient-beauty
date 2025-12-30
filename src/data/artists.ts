import { Artist } from '@/types';

export const artists: Artist[] = [
  {
    id: "jakob-zim",
    name: { en: "Jakob Zim", he: "יעקב צים" },
    biography: {
      en: "Born in Sosnowiec, Poland, in 1920. In 1945, he endured the 'Death March' to the Buchenwald Concentration Camp, where he was liberated. After the war, he made Aliyah and enrolled in the 'New Bezalel' Academy. He became prominent as a graphic designer and educator, designing the symbol for Netanya and the 5,000 Shekel banknote. His wartime works are considered vital artistic testimonies. He said: 'I learned to live with the shadow and create with the light.'",
      he: "נולד בשנת 1920 בסוסנוביץ, פולין. ב-1945 נשלח ל'צעדת המוות' למחנה הריכוז בוכנוואלד, שם שוחרר. לאחר המלחמה עלה לארץ ונרשם ל'בצלאל החדש'. התפרסם כמעצב גרפי ומורה, עיצב את סמל העיר נתניה ושטר ה-5,000 שקל. יצירותיו משנות המלחמה נחשבות לעדות אמנותית חיונית. הוא אמר: 'למדתי לחיות עם הצל ולברוא עם האור.'"
    },
    imageUrl: "/images/artists/jakob-zim.jpg",
    videoUrl: "https://www.youtube.com/watch?v=zcaQiAObHZo",
    paintingDescription: { en: "City Landscape, Oil on canvas", he: "נוף עירוני, שמן על בד" },
    paintingStyle: {
      en: "Fine Art: His Holocaust experiences formed a central and deeply emotional theme. Wartime works like 'View of Buchenwald, a few days after liberation' (1945, watercolor) are considered vital artistic testimonies. He viewed art as a source of strength that helped him survive.\n\nLandscape and Abstraction: Later focused on local landscapes and abstract subjects. Works such as 'Desert Landscape,' 'Ruins of a Synagogue,' and 'Holes in the Negev' reflect memory, Israeli landscape, and abstraction rooted in natural forms.\n\nGraphic Design: Part of the 'New Bezalel' generation who shaped Israel's early visual language, blending European influences with Zionist motifs. Key projects include the Netanya city symbol and the 5,000 Shekel banknote.",
      he: "אמנות חופשית: חוויות השואה היוו נושא מרכזי וטעון. יצירות כגון 'מראה בוכנוואלד, ימים ספורים לאחר השחרור' (1945, צבעי מים) נחשבות לעדות אמנותית חיונית. ראה באמנות מקור כוח.\n\nנוף והפשטה: מאוחר יותר התמקד בנופי הארץ ונושאים מופשטים. עבודות כגון 'נוף מדבר', 'חורבות בית כנסת' ו'חוריו של הנגב' משקפות עיסוק בזיכרון ובנוף המקומי.\n\nעיצוב גרפי: חלק מגל מעצבי 'בצלאל החדש' שעיצבו את השפה החזותית של ישראל. עיצב את סמל נתניה ושטר ה-5,000 שקל."
    },
    links: [],
    isFree: true,
    birthYear: 1920
  },
  {
    id: "blanka-tauber",
    name: { en: "Blanka Tauber", he: "בלנקה טאובר" },
    biography: {
      en: "Born in Slovakia, survived Auschwitz with her sister Julia. Her father and other siblings were murdered. She immigrated to Israel in 1950 and became a founder of the Safed Artists' Village. Initially painted landscapes, but later focused on the Holocaust. Despite the darkness of her past, her work often sought to find a new visual language for the beauty of the Israeli landscape.",
      he: "נולדה בסלובקיה, שרדה את אושוויץ יחד עם אחותה ג'וליה. אביה ואחיה נרצחו. היא עלתה לישראל ב-1950 והייתה ממייסדות כפר האמנים בצפת. בתחילה ציירה נופים, אך מאוחר יותר התמקדה בנושא השואה. למרות העבר הקשה, עבודתה חיפשה שפה חזותית חדשה ליופי של הנוף הישראלי."
    },
    imageUrl: "/images/artists/blanka-tauber.jpg",
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
    imageUrl: "/images/artists/avner-katz.png",
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
    imageUrl: "/images/artists/zita-weiss.jpg",
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
    imageUrl: "/images/artists/dan-moscona.jpg",
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
    imageUrl: "/images/artists/paul-fux.png",
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
    imageUrl: "/images/artists/chaim-rosenthal.png",
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
    imageUrl: "/images/artists/ada-strod.png",
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
    imageUrl: "/images/artists/yehuda-bar-yoshafat.png",
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
    imageUrl: "/images/artists/shalom-sechvi.png",
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
    imageUrl: "/images/artists/malvina-kaplan.jpeg",
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
    imageUrl: "/images/artists/claire-szillar_tree.jpeg",
    paintingDescription: { en: "Watercolor on paper - tree trunk", he: "אקוורל על נייר - גזע עץ" },
    links: ["https://he.wikipedia.org/wiki/%D7%A7%D7%9C%D7%99%D7%99%D7%A8_%D7%A1%D7%99%D7%9C%D7%90%D7%A8%D7%93"],
    isFree: true
  },
  {
    id: "alfred-aberdam",
    name: { en: "Alfred Aberdam", he: "אלפרד אברדם" },
    biography: {
      en: "Born in Lviv (Lvov), Galicia in 1894. He became one of the prominent painters of the 'School of Paris' (École de Paris), a group of artists, many of whom were Jewish immigrants from Eastern Europe. His style integrated modernistic trends while maintaining a distinctive personal voice, known for rich, warm coloration and expressive brushstrokes. He exhibited internationally in Paris, London, and Tel Aviv.",
      he: "נולד בלבוב, גליציה בשנת 1894. הפך לאחד הציירים הבולטים של 'אסכולת פריז' (École de Paris), קבוצת אמנים שרבים מחבריה היו יהודים ממזרח אירופה. סגנונו שילב מגמות מודרניסטיות תוך שמירה על קול אישי, ונודע בצבעוניות עשירה וחמה ובמשיכות מכחול אקספרסיביות. הציג ברחבי העולם בפריז, לונדון ותל אביב."
    },
    imageUrl: "/images/artists/alfred-aberdam.jpg",
    paintingDescription: { en: "Little People, Oil on canvas", he: "אנשים קטנים, שמן על בד" },
    paintingStyle: {
      en: "Style and Technique: His style belongs to the expressive-figurative movement characteristic of many artists in the School of Paris, embracing late Impressionism and Post-Impressionism with touches of Expressionism. Known for rich, warm, and pronounced coloration, combining dark and bright tones for dramatic atmosphere. His paintings feature expressive and free brushstrokes, lending a sense of movement and emotion.\n\nSubject Matter: Focused extensively on portraits and figures, capturing emotional states. Also created still life paintings using everyday objects to convey intimacy, and urban landscapes of Paris.",
      he: "סגנון וטכניקה: סגנונו שייך לזרם האקספרסיבי-פיגורטיבי המאפיין רבים מחברי אסכולת פריז, תוך אימוץ השפעות האימפרסיוניזם המאוחר והפוסט-אימפרסיוניזם עם נגיעות אקספרסיוניזם. נודע בצבעוניות עשירה, חמה ומודגשת, המשלבת גוונים כהים ובהירים ליצירת אווירה דרמטית. ציוריו בעלי משיכות מכחול אקספרסיביות ומשוחררות.\n\nנושאי היצירה: התמקד רבות בדיוקנאות ודמויות, תוך לכידת מצבים רגשיים. יצר גם ציורי טבע דומם ונופים עירוניים של פריז."
    },
    links: [],
    isFree: true,
    birthYear: 1894,
    deathYear: 1963
  },
  {
    id: "jacob-rosenbaum",
    name: { en: "Jacob Rosenbaum", he: "יעקב רוזנבוים" },
    biography: {
      en: "Born in Suwałki, Poland, in 1924. His early life was marked by the trauma of World War II, during which he was imprisoned in German Concentration Camps. After the war, he studied at The Free Academy of Art in Rome and made Aliyah to Israel in 1949, settling in Jerusalem. He was elected to the Israeli Association of Painters and Sculptors in 1987 and received the Jerusalem Prize for Painting and Sculpture in 1977.",
      he: "נולד בשנת 1924 בסובאלקי, פולין. נעוריו עוצבו על ידי האימה של מלחמת העולם השנייה, במהלכה היה אסיר במחנות ריכוז גרמניים כניצול שואה. לאחר המלחמה למד באקדמיה החופשית לאמנות ברומא ועלה לישראל בשנת 1949, והתיישב בירושלים. בשנת 1987 נבחר לחבר באגודת הציירים והפסלים בישראל וזכה בפרס ירושלים לציור ולפיסול בשנת 1977."
    },
    imageUrl: "/images/artists/jacob-rosenbaum-man.jpg",
    additionalImages: ["/images/artists/jacob-rosenbaum.jpg"],
    paintingDescription: { en: "Portrait of a Man, Watercolor", he: "דיוקן איש, צבעי מים" },
    paintingStyle: {
      en: "Genre: Primarily known as a painter, with works also including drawings such as a portrait of his father, a survivor of the Lukov Ghetto.\n\nSubject Matter: Still Life compositions, particularly oil on canvas pieces from the 1950s in Vintage/Mid-20th Century style. Also explored portraiture and figurative work. His known works include Oil on Canvas and Pencil Drawing on Paper.\n\nContextual Influences: As a European-trained immigrant artist in Israel during the mid-20th century, his style blended European Modernism with emerging Israeli art, reflecting the history and character of Jerusalem.",
      he: "ייחוד סגנוני: אמנותו תוארה כבעלת 'צבעוניות חריפה ועירנית יותר מן המקובל', תוך שמירה על 'זיקה ברורה אל הטבע ובעיקר אל הנוף'.\n\nנושאים מרכזיים: טבע דומם - ציורי שמן על בד מתוארכים לשנות ה-50 ואילך. דיוקנאות ודמויות, כולל דיוקן אביו ניצול גטו לוקוב. נופי ירושלים בה חי ויצר.\n\nמדיומים: ציורי שמן וגואש על בד, לצד רישומים ופסלים."
    },
    links: [],
    isFree: true,
    birthYear: 1924,
    deathYear: 2015
  },
  {
    id: "simon-caplan",
    name: { en: "Simon Caplan", he: "שמעון קפלן" },
    biography: {
      en: "Born in Poland in 1924. His family fled to France, then Brazil following the German invasion in 1940. He studied classical painting in Paris from age 12 and continued at the Academy of Art in Rio de Janeiro. He made Aliyah in 1948 with pioneers from South America and was a founder of Kibbutz Bror Hayil. He became known as 'The Painter of the Moshav' in Rishpon, dedicating his life to portraiture and teaching art.",
      he: "נולד בפולין בשנת 1924. משפחתו נמלטה לצרפת ואז לברזיל בעקבות הפלישה הגרמנית ב-1940. החל ללמוד ציור קלאסי בפריז בגיל 12 והמשיך באקדמיה לאמנות בריו דה ז'ניירו. עלה לישראל ב-1948 עם חלוצים מדרום אמריקה והיה ממקימי קיבוץ ברור חייל. נודע כ'הצייר של המושב' ברשפון והקדיש את חייו לציור דיוקנאות והוראת אמנות."
    },
    imageUrl: "/images/artists/simon-caplan.jpg",
    paintingDescription: { en: "Jerusalem, Oil on canvas", he: "ירושלים, שמן על בד" },
    paintingStyle: {
      en: "Style and Technique: Classical foundation from Paris studies at a young age. Early Period (up to 1980): focused on charcoal drawings requiring precision and technical skill, effective at capturing facial expression with sharp clarity. Later Period (from 1980): transitioned to oil colors, allowing richer color palette, depth, and texture.\n\nSubject Matter: Portraiture is the most significant and defining subject. Known as 'The Painter of the Moshav,' he painted portraits of many Rishpon residents, focusing on children and adults. Also dedicated decades to teaching painting and creating community art including stage backdrops for local shows.",
      he: "סגנון וטכניקה: בסיס קלאסי מלימודים בפריז בגיל צעיר. תקופה מוקדמת (עד 1980): התמקד ברישומי פחם הדורשים דיוק ומיומנות, ומאפשרים ללכוד הבעות פנים בחדות. תקופה מאוחרת (מ-1980): עבר לצבעי שמן, המאפשרים צבעוניות עשירה יותר, עומק וטקסטורה.\n\nנושאי היצירה: דיוקן הוא הנושא המרכזי. נודע כ'הצייר של המושב' וצייר דיוקנאות של תושבים רבים ברשפון. הקדיש עשרות שנים להוראת ציור ויצירת אמנות קהילתית כולל תפאורות למופעים."
    },
    links: [],
    isFree: true,
    birthYear: 1924
  },
  {
    id: "zvi-arman",
    name: { en: "Zvi Arman", he: "צבי ארמן" },
    biography: {
      en: "Born in Lviv in 1903. He studied art in Lviv and Kraków and was a member of the Jewish Artists Association. During WWII, he was imprisoned in the Lviv Ghetto but escaped to Caucasia. In 1947, he attempted to immigrate illegally aboard the ship 'Theodore Herzl' but was detained in Cyprus. After arriving in Israel, he worked as an architect and joined the famous Artists' Colony in Safed, where he created art influenced by modern art movements.",
      he: "נולד בלבוב בשנת 1903. למד אמנות בלבוב ובקרקוב והיה חבר באגודת האמנים היהודים. במהלך מלחמת העולם השנייה נכלא בגטו לבוב אך הצליח להימלט לקווקז. ב-1947 ניסה לעלות לארץ באופן בלתי-לגלי על האונייה 'תיאודור הרצל' אך נעצר בקפריסין. לאחר עלייתו לישראל עבד כאדריכל והצטרף לקריית האמנים בצפת, שם יצר אמנות בהשפעת זרמים מודרניים."
    },
    imageUrl: "/images/artists/zvi-arman.jpg",
    paintingDescription: { en: "Madonna, Oil on canvas", he: "מדונה, שמן על בד" },
    paintingStyle: {
      en: "Style: Marked by the influence of modern art. His classical training in Poland was synthesized with modern trends emerging from Europe post-WWII, resulting in a style that incorporates modernistic elements. Oil on canvas allowed him rich color depth and texture.\n\nSubject Matter: The landscapes of Safed, its alleys, and spiritual/mystical atmosphere were central subjects. His architectural background manifested through clear composition, emphasis on form, line, and perspective. As a Holocaust survivor, themes of memory, identity, and Aliyah may have found expression in some of his works.",
      he: "סגנון: מאופיין בהשפעת האמנות המודרנית. הכשרתו הקלאסית בפולין שולבה עם מגמות מודרניות מאירופה לאחר המלחמה, ויצרה סגנון המשלב יסודות מודרניסטיים. ציור השמן מאפשר עומק צבעוניות וטקסטורה עשירה.\n\nנושאי היצירה: נופי צפת, סמטאותיה ואווירתה הרוחנית-מיסטית היוו נושאים מרכזיים. רקעו כאדריכל בא לידי ביטוי בקומפוזיציה ברורה ודגש על צורה, קו ופרספקטיבה. כניצול שואה, ייתכן שנושאי זיכרון, זהות והעלייה לארץ מצאו ביטוי בחלק מעבודותיו."
    },
    links: [],
    isFree: true,
    birthYear: 1903,
    deathYear: 1993
  }
];

export function getArtistById(id: string): Artist | undefined {
  return artists.find(artist => artist.id === id);
}

export function getFreeArtists(): Artist[] {
  return artists.filter(artist => artist.isFree);
}

export function getPremiumArtists(): Artist[] {
  return artists.filter(artist => !artist.isFree);
}
