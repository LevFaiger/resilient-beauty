import { Artist } from '@/types';

export const artists: Artist[] = [
  {
    id: "jakob-zim",
    name: { en: "Jakob Zim", he: "יעקב צים", ru: "Яков Цим" },
    biography: {
      en: "Born in Sosnowiec, Poland, in 1920. In 1945, he endured the 'Death March' to the Buchenwald Concentration Camp, where he was liberated. After the war, he made Aliyah and enrolled in the 'New Bezalel' Academy. He became prominent as a graphic designer and educator, designing the symbol for Netanya and the 5,000 Shekel banknote. His wartime works are considered vital artistic testimonies. He said: 'I learned to live with the shadow and create with the light.'",
      he: "נולד בשנת 1920 בסוסנוביץ, פולין. ב-1945 נשלח ל'צעדת המוות' למחנה הריכוז בוכנוואלד, שם שוחרר. לאחר המלחמה עלה לארץ ונרשם ל'בצלאל החדש'. התפרסם כמעצב גרפי ומורה, עיצב את סמל העיר נתניה ושטר ה-5,000 שקל. יצירותיו משנות המלחמה נחשבות לעדות אמנותית חיונית. הוא אמר: 'למדתי לחיות עם הצל ולברוא עם האור.'",
      ru: "Родился в Сосновце, Польша, в 1920 году. В 1945 году пережил «Марш смерти» в концлагерь Бухенвальд, где был освобождён. После войны репатриировался в Израиль и поступил в академию «Новый Бецалель». Стал известным графическим дизайнером и педагогом, создал символ города Нетания и банкноту в 5000 шекелей. Его работы военного времени считаются важным художественным свидетельством. Он говорил: «Я научился жить с тенью и творить со светом»."
    },
    imageUrl: "/images/artists/jakob-zim.jpg",
    videoUrl: "https://www.youtube.com/watch?v=zcaQiAObHZo",
    animationUrls: [
      "https://drive.google.com/file/d/1e4pG5DdVf4pY1b_5-4uqrJyvBWE3q88I/view?usp=drive_link"
    ],
    paintingDescription: { en: "City Landscape, Oil on canvas", he: "נוף עירוני, שמן על בד", ru: "Городской пейзаж, холст, масло" },
    paintingStyle: {
      en: "Fine Art: His Holocaust experiences formed a central and deeply emotional theme. Wartime works like 'View of Buchenwald, a few days after liberation' (1945, watercolor) are considered vital artistic testimonies. He viewed art as a source of strength that helped him survive.\n\nLandscape and Abstraction: Later focused on local landscapes and abstract subjects. Works such as 'Desert Landscape,' 'Ruins of a Synagogue,' and 'Holes in the Negev' reflect memory, Israeli landscape, and abstraction rooted in natural forms.\n\nGraphic Design: Part of the 'New Bezalel' generation who shaped Israel's early visual language, blending European influences with Zionist motifs. Key projects include the Netanya city symbol and the 5,000 Shekel banknote.",
      he: "אמנות חופשית: חוויות השואה היוו נושא מרכזי וטעון. יצירות כגון 'מראה בוכנוואלד, ימים ספורים לאחר השחרור' (1945, צבעי מים) נחשבות לעדות אמנותית חיונית. ראה באמנות מקור כוח.\n\nנוף והפשטה: מאוחר יותר התמקד בנופי הארץ ונושאים מופשטים. עבודות כגון 'נוף מדבר', 'חורבות בית כנסת' ו'חוריו של הנגב' משקפות עיסוק בזיכרון ובנוף המקומי.\n\nעיצוב גרפי: חלק מגל מעצבי 'בצלאל החדש' שעיצבו את השפה החזותית של ישראל. עיצב את סמל נתניה ושטר ה-5,000 שקל.",
      ru: "Изобразительное искусство: Опыт Холокоста стал центральной и глубоко эмоциональной темой. Работы военного времени, такие как «Вид Бухенвальда через несколько дней после освобождения» (1945, акварель), считаются важным художественным свидетельством. Он видел в искусстве источник силы.\n\nПейзаж и абстракция: Позже сосредоточился на местных пейзажах и абстрактных сюжетах. Работы «Пустынный пейзаж», «Руины синагоги» и «Дыры Негева» отражают память и израильский ландшафт.\n\nГрафический дизайн: Часть поколения «Нового Бецалеля», сформировавшего визуальный язык Израиля. Создал символ Нетании и банкноту в 5000 шекелей."
    },
    links: [],
    isFree: true,
    birthYear: 1920
  },
  {
    id: "eliezer-grinberg",
    name: { en: "Eliezer Grinberg", he: "אליעזר גרינברג", ru: "Элиэзер Гринберг" },
    biography: {
      en: "Born in Lviv, Poland (now Ukraine). His talent was recognized early by his uncle, an architect and painter. He studied at the School of Decorative Arts in Lviv and was accepted to the Academy of Art in Kraków. When WWII broke out, he was captured by the Russians and secured his release by painting a portrait of Tchaikovsky. He worked as a decorator in the USSR and was accepted into the Russian Union of Artists. In 1945, he found only one sister had survived the Holocaust. He helped locate orphaned child survivors and arrange their transfer to Israel. He immigrated to Israel in 1949 aboard the ship Negba, living in Kiryat Motzkin until his death in 1965.",
      he: "נולד בלבוב, פולין (כיום אוקראינה). כישרונו התגלה מוקדם על ידי דודו הארכיטקט. למד בבית הספר לאומנות דקורטיבית בלבוב והתקבל לאקדמיה לאומנות בקרקוב. עם פרוץ מלחמת העולם השנייה נפל בשבי הרוסי ושוחרר לאחר שצייר פורטרט של צ'ייקובסקי. עבד כדקורטור בברית המועצות והתקבל לאגודת הציירים הרוסית. ב-1945 גילה כי רק אחות אחת שרדה מהמשפחה. עסק באיתור ילדים יתומים ניצולי שואה ושליחתם לארץ. עלה לישראל ב-1949 באונייה 'נגבה' וחי בקריית מוצקין עד מותו ב-1965.",
      ru: "Родился во Львове, Польша (ныне Украина). Его талант рано заметил дядя — архитектор и художник. Учился в Школе декоративного искусства во Львове и был принят в Академию искусств в Кракове. С началом Второй мировой войны попал в русский плен и освободился, написав портрет Чайковского. Работал декоратором в СССР и был принят в Союз художников России. В 1945 году узнал, что из семьи выжила только одна сестра. Помогал находить детей-сирот, переживших Холокост, и отправлять их в Израиль. Репатриировался в Израиль в 1949 году на корабле «Негба», жил в Кирьят-Моцкине до смерти в 1965 году."
    },
    imageUrl: "/images/artists/eliezer-grinberg.jpg",
    animationUrls: [
      "https://drive.google.com/file/d/1tXAGNDC2Fkn2XJ6T8D-lp0j0p3Gxd2t9/view?usp=drivesdk"
    ],
    paintingDescription: { en: "Israeli Landscape, Oil on canvas", he: "נוף ישראלי, שמן על בד", ru: "Израильский пейзаж, холст, масло" },
    paintingStyle: {
      en: "Stylistic Shift: Accustomed to the conservative, dark, and gray realist-naturalist style of Russian painting, Grinberg was captivated by the Israeli sun and landscape. His style dramatically changed to Impressionism, full of light and color.\n\nInfluences: In his later years, many of his works show the strong influence of the Expressionist style, particularly Van Gogh, whom he admired.\n\nSubject Matter: During his years in Israel, Grinberg frequently painted Israeli landscapes (Haifa, Tiberias, Safed, Acre, Jerusalem, Tel Aviv-Jaffa, Netanya), portraits (including self-portraits and his daughters), and subjects related to Judaism and the Holocaust.",
      he: "שינוי סגנוני: לאחר שהיה רגיל לציור שמרני, אפרורי וריאליסטי-נטורליסטי ברוסיה, הוקסם גרינברג מאור השמש והנוף הישראלי. סגנונו השתנה לאימפרסיוניסטי, מלא אור וצבע.\n\nהשפעות: בשנותיו האחרונות ניכרת ביצירותיו השפעה חזקה של אקספרסיוניזם ושל הצייר ואן-גוך.\n\nנושאי יצירה: הרבה לצייר נופי הארץ (חיפה, טבריה, צפת, ירושלים, יפו ועוד), דיוקנאות (כולל דיוקן עצמי ובנותיו), ונושאים הקשורים ליהדות ולשואה.",
      ru: "Смена стиля: Привыкший к консервативному, тёмному и серому реалистично-натуралистическому стилю русской живописи, Гринберг был очарован израильским солнцем и пейзажем. Его стиль кардинально изменился на импрессионизм, полный света и цвета.\n\nВлияния: В поздние годы в его работах заметно сильное влияние экспрессионизма, особенно Ван Гога, которым он восхищался.\n\nТематика: В Израиле часто писал местные пейзажи (Хайфа, Тверия, Цфат, Акко, Иерусалим, Тель-Авив-Яффа, Нетания), портреты (включая автопортреты и портреты дочерей) и сюжеты, связанные с иудаизмом и Холокостом."
    },
    links: [],
    isFree: true,
    deathYear: 1965
  },
  {
    id: "blanka-tauber",
    name: { en: "Blanka Tauber", he: "בלנקה טאובר", ru: "Бланка Таубер" },
    biography: {
      en: "Born in Slovakia, survived Auschwitz with her sister Julia. Her father and other siblings were murdered. She immigrated to Israel in 1950 and became a founder of the Safed Artists' Village. Initially painted landscapes, but later focused on the Holocaust. Despite the darkness of her past, her work often sought to find a new visual language for the beauty of the Israeli landscape.",
      he: "נולדה בסלובקיה, שרדה את אושוויץ יחד עם אחותה ג'וליה. אביה ואחיה נרצחו. היא עלתה לישראל ב-1950 והייתה ממייסדות כפר האמנים בצפת. בתחילה ציירה נופים, אך מאוחר יותר התמקדה בנושא השואה. למרות העבר הקשה, עבודתה חיפשה שפה חזותית חדשה ליופי של הנוף הישראלי.",
      ru: "Родилась в Словакии, пережила Освенцим вместе с сестрой Юлией. Её отец и другие братья и сёстры были убиты. Репатриировалась в Израиль в 1950 году и стала одной из основательниц колонии художников в Цфате. Сначала писала пейзажи, но позже сосредоточилась на теме Холокоста. Несмотря на тёмное прошлое, её работы искали новый визуальный язык для красоты израильского пейзажа."
    },
    imageUrl: "/images/artists/blanka-tauber.jpg",
    paintingDescription: {
      en: "Safed Alley with Cat, Charcoal and ink on paper",
      he: "סמטה בצפת עם חתול, פחם ודיו על נייר",
      ru: "Переулок в Цфате с кошкой, уголь и тушь на бумаге"
    },
    links: ["https://he.wikipedia.org/wiki/%D7%91%D7%9C%D7%A0%D7%A7%D7%94_%D7%98%D7%90%D7%95%D7%91%D7%A8"],
    isFree: true,
    birthYear: 1910,
    deathYear: 1989
  },
  {
    id: "avner-katz",
    name: { en: "Avner Katz", he: "אבנר כץ", ru: "Авнер Кац" },
    biography: {
      en: "Born in Israel to parents who fled the shadows of Europe (Pinsk). A major Israeli illustrator and painter, professor at Haifa University. Created 'Kippy the Hedgehog'. His work is a testament to the growth of a new generation rooted in resilience.",
      he: "נולד בישראל להורים שנמלטו מצללי אירופה (פינסק). מאייר וצייר ישראלי חשוב, פרופסור באוניברסיטת חיפה. יצר את דמותו של 'קיפי בן קיפוד'. עבודתו היא עדות לצמיחתו של דור חדש המושרש בחוסן.",
      ru: "Родился в Израиле в семье родителей, бежавших из Европы (Пинск). Крупный израильский иллюстратор и художник, профессор Хайфского университета. Создал персонажа «Кипи-ёжик». Его творчество — свидетельство роста нового поколения, укоренённого в стойкости."
    },
    imageUrl: "/images/artists/avner-katz.png",
    paintingDescription: { en: "Watercolors signed and framed", he: "צבעי מים חתומים וממוסגרים", ru: "Акварели, подписанные и в рамках" },
    links: ["https://museum.imj.org.il/artcenter/newsite/en/?artist=Katz%2C+Avner"],
    isFree: true,
    birthYear: 1939,
    deathYear: 2020
  },
  {
    id: "zita-weiss",
    name: { en: "Zita Weiss", he: "זיטה וייס", ru: "Зита Вайс" },
    biography: {
      en: "Born in Czechoslovakia in 1925, Zita survived the horrors of Auschwitz. She immigrated to Israel in 1950, seeking a life of renewal. Her art captures the vibrant light of Jaffa, a stark contrast to the darkness she endured.",
      he: "נולדה בצ'כובלובקיה ב-1925, זיטה שרדה את זוועות אושוויץ. היא עלתה לישראל ב-1950 בחיפוש אחר חיי התחדשות. אמנותה לוכדת את האור התוסס של יפו, ניגוד מוחלט לחושך שעברה.",
      ru: "Родилась в Чехословакии в 1925 году, Зита пережила ужасы Освенцима. Репатриировалась в Израиль в 1950 году в поисках новой жизни. Её искусство передаёт яркий свет Яффы — резкий контраст с пережитой тьмой."
    },
    imageUrl: "/images/artists/zita-weiss.jpg",
    paintingDescription: { en: "Jaffa, Oil on canvas", he: "יפו, שמן על בד", ru: "Яффа, холст, масло" },
    links: ["https://museum.imj.org.il/artcenter/newsite/en/?artist=Weiss%2C+Zita"],
    isFree: true,
    birthYear: 1925
  },
  {
    id: "dan-moscona",
    name: { en: "Dan Moscona", he: "דן מוסקונה", ru: "Дан Москона" },
    biography: {
      en: "Dan Moscona was born in 1931 in Bulgaria. In 1948, at age 17, he immigrated to Israel. He studied at the Avni Institute in Tel Aviv under teachers such as Yohanan Simon and Marcel Janco, and later trained in Paris at the Académie de la Grande Chaumière. Moscona was strongly identified with the Artists' Quarter in Old Jaffa, where he established his studio and became an integral part of the local art scene.",
      he: "דן מוסקונה נולד בשנת 1931 בבולגריה. בשנת 1948, בגיל 17, עלה לישראל. הוא למד במכון אבני בתל אביב אצל מורים כגון יוחנן סימון ומרסל ינקו, ובהמשך השתלם בפריז באקדמיה \"גרנד שומייר\". מוסקונה היה מזוהה מאוד עם קריית האמנים ביפו העתיקה, שם הקים את הסטודיו שלו והפך לחלק בלתי נפרד מהנוף האמנותי המקומי.",
      ru: "Дан Москона родился в 1931 году в Болгарии. В 1948 году, в возрасте 17 лет, репатриировался в Израиль. Учился в Институте Авни в Тель-Авиве у таких преподавателей, как Йоханан Симон и Марсель Янко, а затем совершенствовался в Париже в Академии Гранд-Шомьер. Москона был тесно связан с Кварталом художников в Старой Яффе, где основал свою студию и стал неотъемлемой частью местной арт-сцены."
    },
    imageUrl: "/images/artists/dan-moscona.jpg",
    additionalImages: ["/images/artists/dan-moscona-repair.jpg"],
    paintingDescription: { en: "Oil on canvas, 82X40", he: "שמן על בד 82X40 חתום וממוסגר", ru: "Холст, масло, 82x40" },
    paintingStyle: {
      en: "Moscona's style is deeply rooted in Figurative Expressionism, characterized by a bold use of color and a structural approach to composition. His work often feels monumental, even when depicting everyday scenes. His primary subjects include the human form in motion—laborers, dancers, and musicians—often using thick, energetic brushstrokes to convey vitality. Much of his work focuses on the architecture and atmosphere of Old Jaffa, capturing the specific golden hour light of the Mediterranean coast. Influenced by Yohanan Simon, many of his paintings depict the collective life of early Israel with dignity and warmth.",
      he: "סגנונו של מוסקונה הוא פיגורטיבי-אקספרסיבי, המתאפיין בשימוש עז בצבע ובבנייה קומפוזיציונית איתנה. הדמות האנושית: הוא הרבה לצייר דמויות בתנועה – רקדנים, נגנים ופועלים – תוך דגש על חיוניות וכוח. נופי יפו: ציוריו לוכדים את הארכיטקטורה והאור המיוחד של יפו העתיקה. ריאליזם חברתי: בהשפעת יוחנן סימון, הוא תיאר סצנות מחיי היומיום של החברה הישראלית המתגבשת בקיבוצים ובערים.",
      ru: "Стиль Москоны глубоко укоренён в фигуративном экспрессионизме, для которого характерно смелое использование цвета и структурный подход к композиции. Его работы часто выглядят монументально, даже при изображении повседневных сцен. Его основные сюжеты включают человеческую фигуру в движении — рабочих, танцоров и музыкантов — часто с использованием густых, энергичных мазков для передачи жизненной силы. Значительная часть его работ посвящена архитектуре и атмосфере Старой Яффы, улавливая особый золотой свет Средиземноморского побережья."
    },
    links: ["https://bjmoreshet.org/the-community/education/claims-conference-project/dan-moskuna/"],
    isFree: true,
    repairInfo: {
      imageUrl: "/images/artists/dan-moscona-repair.jpg",
      heading: {
        en: "Help Heal the Canvas of History",
        he: "עזרו לרפא את בד ההיסטוריה",
        ru: "Помогите исцелить холст истории"
      },
      description: {
        en: "This original oil on canvas is suffering from structural fatigue. Because canvas is a natural fiber, it \"breathes\" with changes in Relative Humidity (RH). These constant fluctuations have caused the paint to lose its bond with the fabric.\n\nThe Risk: Without stabilization, the paint will continue to flake and pop off the surface.\n\nThe Solution: Professional consolidation to re-adhere the paint and structural reinforcement to protect the canvas from humidity-driven expansion.",
        he: "ציור שמן מקורי זה על בד סובל מעייפות מבנית. מכיוון שבד הוא סיב טבעי, הוא \"נושם\" עם שינויים בלחות היחסית. תנודות מתמשכות אלה גרמו לצבע לאבד את הקשר שלו עם הבד.\n\nהסיכון: ללא ייצוב, הצבע ימשיך להתקלף ולהתנתק מהמשטח.\n\nהפתרון: איחוי מקצועי להדבקה מחדש של הצבע וחיזוק מבני להגנה על הבד מהתפשטות הנגרמת מלחות.",
        ru: "Эта оригинальная картина маслом на холсте страдает от структурной усталости. Поскольку холст является натуральным волокном, он «дышит» при изменениях относительной влажности. Эти постоянные колебания привели к тому, что краска потеряла сцепление с тканью.\n\nРиск: Без стабилизации краска продолжит отслаиваться и отпадать с поверхности.\n\nРешение: Профессиональная консолидация для повторного приклеивания краски и структурное укрепление для защиты холста от расширения, вызванного влажностью."
      }
    }
  },
  {
    id: "paul-fux",
    name: { en: "Paul Fux", he: "פאול פוקס", ru: "Пауль Фукс" },
    biography: {
      en: "Paul Fux was a distinctive and multifaceted Israeli painter, graphic designer, and scenographer, whose artistic career spanned Romania, where he made major contributions to puppet theater, and Israel, where he continued to paint and exhibit.\n\nEarly Life and Career (Romania): Born in Salonta, Transylvania, Romania, in 1922. He studied privately in Oradea (1937–1940) and pursued fine arts studies in Budapest under Bortnyik Sándor (1940–1943). He spent 1943–1945 in a forced labor camp in Poland.\n\nGraphic Design: After the war (1945–1955), he worked as a book illustrator and graphic designer for newspapers. He was also head of graphics at Sonnenfeld Printers in Nagyvarad.\n\nTheater Scenography: Between 1955 and 1970, Fux became a leading set designer and scenographer for the Puppet Theatre of Oradea (1956–1972). His innovative vision elevated the Oradea puppet theatre to a national benchmark. From 1960 to 1970, his Oradea studio was a significant hub for local artists to create and debate ideas.\n\nImmigration to Israel and Later Success: Fux immigrated to Israel in 1970 and settled in Jerusalem, where he lived and worked from 1972 onward.\n\nAwards and Recognition: In 1975, he received First Prize (ex aequo) in the 'Sea' competition in Haifa, and the Nordau Prize for Art.\n\nInternational Exhibitions: In 1992, he had a solo exhibition of 24 large-scale paintings at the National Jewish Museum in Washington, participated in a traveling exhibition in Japan, and was invited to exhibit at the Marbelo Gallery in Barcelona.\n\nSelected Exhibitions: Solo exhibitions in 1974, 1975, 1980, 1989, and 1991 in Jerusalem, Jaffa, Tel Aviv, Haifa, New York, Bogotá, and Sydney. Group exhibitions at the Grand Prix Exhibition in Monte Carlo (1978), 'Halving Time – Hungarian Art in Romania 1965–1975' in Budapest (2002), and 'The Future of Memory' Project in Oradea (2018, posthumous).\n\nPaul Fux passed away in February 2011, at the age of 88, having left a complex and enduring legacy across multiple artistic fields.",
      he: "פאול פוקס היה צייר, מעצב גרפי וסצנוגרף ישראלי ייחודי ורב-פנים, שקריירת האמנות שלו התפרשה על פני רומניה, שם תרם תרומה משמעותית לתיאטרון הבובות, וישראל, שם המשיך ליצור ולהציג.\n\nראשית חייו וקריירה (רומניה): נולד בסלונטה, טרנסילבניה, רומניה, ב-1922. למד באופן פרטי באורדאה (1937–1940) והמשיך בלימודי אמנות בבודפשט אצל בורטניק שאנדור (1940–1943). שהה במחנה עבודת כפייה בפולין בשנים 1943–1945.\n\nעיצוב גרפי: לאחר המלחמה (1945–1955) עבד כמאייר ספרים ומעצב גרפי לעיתונים. כמו כן שימש כראש מחלקת הגרפיקה בדפוס זוננפלד בנאג'יוואראד.\n\nסצנוגרפיה לתיאטרון: בין 1955 ל-1970 הפך למעצב תפאורה מוביל וסצנוגרף לתיאטרון הבובות באורדאה (1956–1972). חזונו החדשני העלה את תיאטרון הבובות באורדאה למעמד של מודל לאומי. בין 1960 ל-1970 שימש הסטודיו שלו באורדאה כמוקד חשוב לחיי האמנות המקומיים, שבו אמנים יצרו ודנו ברעיונות.\n\nעלייה לישראל וההצלחה המאוחרת: פוקס עלה לישראל ב-1970 והתיישב בירושלים, שם חי ויצר משנת 1972 ואילך.\n\nפרסים והכרה: ב-1975 זכה בפרס ראשון (משותף) בתחרות 'ים' בחיפה, ובפרס נורדאו לאמנות.\n\nתערוכות בינלאומיות: ב-1992 הציג תערוכת יחיד של 24 ציורים גדולים במוזיאון היהודי הלאומי בוושינגטון, השתתף בתערוכה נודדת ביפן, והוזמן להציג בגלריה מרבלו בברצלונה.\n\nתערוכות נבחרות: תערוכות יחיד ב-1974, 1975, 1980, 1989 ו-1991 בירושלים, יפו, תל אביב, חיפה, ניו יורק, בוגוטה וסידני. תערוכות קבוצתיות בגרנד פרי במונטה קרלו (1978), 'חוצים את הזמן – אמנות הונגרית ברומניה 1965–1975' בבודפשט (2002), ופרויקט 'עתיד הזיכרון' באורדאה (2018, לאחר מותו).\n\nפאול פוקס נפטר בפברואר 2011, בגיל 88, והותיר אחריו מורשת מורכבת ומתמשכת במגוון תחומי אמנות.",
      ru: "Пауль Фукс — выдающийся и многогранный израильский художник, графический дизайнер и сценограф, чья художественная карьера охватывала Румынию, где он внёс значительный вклад в кукольный театр, и Израиль, где продолжал творить и выставляться.\n\nРанняя жизнь и карьера (Румыния): Родился в Салонте, Трансильвания, Румыния, в 1922 году. Учился частным образом в Ораде (1937–1940) и продолжил изучение искусства в Будапеште у Бортника Шандора (1940–1943). С 1943 по 1945 год находился в лагере принудительного труда в Польше.\n\nГрафический дизайн: После войны (1945–1955) работал книжным иллюстратором и графическим дизайнером для газет. Также возглавлял графический отдел типографии Зонненфельд в Надьвараде.\n\nТеатральная сценография: С 1955 по 1970 год Фукс стал ведущим художником-постановщиком и сценографом Кукольного театра Орадя (1956–1972). Его новаторское видение подняло театр кукол в Ораде до национального эталона. С 1960 по 1970 год его студия в Ораде была важным центром для местных художников.\n\nИммиграция в Израиль и поздний успех: Фукс репатриировался в Израиль в 1970 году и поселился в Иерусалиме, где жил и работал с 1972 года.\n\nНаграды и признание: В 1975 году получил Первую премию (ex aequo) на конкурсе «Море» в Хайфе и премию Нордау в области искусства.\n\nМеждународные выставки: В 1992 году провёл персональную выставку 24 крупномасштабных картин в Национальном еврейском музее в Вашингтоне, участвовал в передвижной выставке в Японии и был приглашён выставляться в галерее Марбело в Барселоне.\n\nИзбранные выставки: Персональные выставки в 1974, 1975, 1980, 1989 и 1991 годах в Иерусалиме, Яффе, Тель-Авиве, Хайфе, Нью-Йорке, Боготе и Сиднее. Групповые выставки: Гран-при в Монте-Карло (1978), «Пересекая время — венгерское искусство в Румынии 1965–1975» в Будапеште (2002), проект «Будущее памяти» в Ораде (2018, посмертно).\n\nПауль Фукс скончался в феврале 2011 года в возрасте 88 лет, оставив сложное и непреходящее наследие в многочисленных областях искусства."
    },
    imageUrl: "/images/artists/paul-fux.png",
    additionalImages: ["/images/artists/paul-fux-2.png"],
    animationUrls: [
      "https://drive.google.com/file/d/1NfwhjKFSKnFuOsyW7P_VAFAt0q26vn84/view?usp=drive_link",
      "https://drive.google.com/file/d/1BO7GtiqcIe_Qk7j1d7UJTTAa7y-fBttL/view?usp=drive_link"
    ],
    paintingDescription: { en: "National issues and war miniatures", he: "מיניאטורות מלחמה ונושאים לאומיים", ru: "Военные миниатюры и национальные темы" },
    paintingStyle: {
      en: "Fux was a visionary thinker whose painting, engraving, and stage work reflected a humanistic and symbolic vision. His style is marked by firm, expressive contours and often dramatic, focused compositions.\n\nLiterary Illustration: Literary illustration held a special place in his graphic work, embodying his synthesizing perspective. In 1962, he created a powerfully expressionist visual interpretation of Tudor Arghezi's poem 'The Last Supper' and illustrated Attila József's 'On the Edge of the City,' marked by the drama of social marginalization.\n\nShakespeare's Sonnets: His most ambitious graphic project was the illustration of William Shakespeare's 154 Sonnets, published in a bibliophile edition (1986) and later in a complete bilingual edition with all 154 original color illustrations (2009), serving as a visual synthesis of his lifelong artistic sensibility.",
      he: "פוקס היה הוגה חזון שציוריו, תחריטיו ועבודת הבמה שלו שיקפו ראייה הומניסטית וסמלית. סגנונו מאופיין בקווים מתאר חזקים ואקספרסיביים וקומפוזיציות ממוקדות ולעיתים דרמטיות.\n\nאיור ספרותי: איור ספרותי תפס מקום מיוחד בעבודתו הגרפית, כביטוי סינתטי לחזונו. ב-1962 יצר פרשנות אקספרסיוניסטית חזקה לשירו של טודור ארגזי 'הסעודה האחרונה', וכן אייר את השיר 'בקצה העיר' של אטילה יוזף, בעיבוד דחוס המדגיש את הדרמה של השוליים החברתיים.\n\nסונטות שייקספיר: הפרויקט הגרפי השאפתני ביותר שלו היה איור מחזור 154 הסונטות של שייקספיר. המהדורה הראשונה פורסמה ב-1986 והמהדורה הסופית (2009) פורסמה עם כל 154 האיורים המקוריים בצבע, שהיוו סינתזה ויזואלית של רגישותו האמנותית לאורך חייו.",
      ru: "Фукс был мыслителем-визионером, чья живопись, гравюра и сценография отражали гуманистическое и символическое видение. Его стиль отличается чёткими, выразительными контурами и часто драматическими, сфокусированными композициями.\n\nЛитературная иллюстрация: Литературная иллюстрация занимала особое место в его графике, воплощая его синтезирующую перспективу. В 1962 году он создал мощную экспрессионистскую визуальную интерпретацию поэмы Тудора Аргези «Тайная вечеря» и иллюстрировал «На окраине города» Аттилы Йожефа, отмеченную драмой социальной маргинализации.\n\nСонеты Шекспира: Его самым амбициозным графическим проектом стала иллюстрация 154 сонетов Уильяма Шекспира, опубликованная в библиофильском издании (1986), а затем в полном двуязычном издании со всеми 154 оригинальными цветными иллюстрациями (2009), ставшая визуальным синтезом его художественной чувствительности на протяжении всей жизни."
    },
    links: ["https://he.wikipedia.org/wiki/%D7%A4%D7%90%D7%95%D7%9C_%D7%A4%D7%95%D7%A7%D7%A1"],
    isFree: true,
    birthYear: 1922,
    deathYear: 2011
  },
  {
    id: "chaim-rosenthal",
    name: { en: "Chaim Rosenthal", he: "חיים רוזנטל", ru: "Хаим Розенталь" },
    biography: {
      en: "Born 1938 in Bucharest. A bridge between cultures, he served as a diplomat and educator. His landscapes often evoke a sense of peaceful permanence, a quiet victory over the displacement of his youth.",
      he: "נולד ב-1938 בבוקרשט. גשר בין תרבויות, הוא שימש כדיפלומט ומחנך. נופיו מעוררים לעתים קרובות תחושה של קביעות שלווה, ניצחון שקט על העקירה של נעוריו.",
      ru: "Родился в 1938 году в Бухаресте. Мост между культурами — служил дипломатом и педагогом. Его пейзажи часто вызывают ощущение мирного постоянства, тихую победу над изгнанием юности."
    },
    imageUrl: "/images/artists/chaim-rosenthal.png",
    paintingDescription: { en: "Landscape, Oil on canvas", he: "נוף, שמן על בד", ru: "Пейзаж, холст, масло" },
    links: ["https://museum.imj.org.il/artcenter/newsite/en/?artist=Rosenthal%2C+Chaim"],
    isFree: true,
    birthYear: 1938
  },
  {
    id: "ada-strod",
    name: { en: "Ada Strod", he: "אדה סטרוד", ru: "Ада Строд" },
    biography: {
      en: "Fleeing Vienna in 1940 on an illegal immigration ship, Ada arrived in Israel with nothing but a determination to create. She became a student of the Avni Institute and a pillar of the artistic community.",
      he: "כשברחה מווינה ב-1940 באוניית מעפילים, אדה הגיעה לישראל עם לא כלום מלבד נחישות ליצור. היא הפכה לתלמידה במכון אבני ולעמוד תווך בקהילה האמנותית.",
      ru: "Бежав из Вены в 1940 году на нелегальном иммиграционном судне, Ада прибыла в Израиль лишь с решимостью творить. Она стала студенткой Института Авни и опорой художественного сообщества."
    },
    imageUrl: "/images/artists/ada-strod.png",
    paintingDescription: { en: "Still Life, Oil on canvas", he: "דומם. שמן על בד. חתום", ru: "Натюрморт, холст, масло" },
    links: [],
    isFree: true
  },
  {
    id: "yehuda-bar-yoshafat",
    name: { en: "Yehuda Bar Yoshafat", he: "יהודה בר יושפט", ru: "Йегуда Бар Йошафат" },
    biography: {
      en: "A survivor of forced labor camps who escaped a death sentence by mere chance. His survival fueled a lifelong commitment to organizing artists in Israel's South, turning trauma into communal beauty.",
      he: "שורד מחנות עבודת כפייה שחמק מגזר דין מוות במקרה. הישרדותו הזינה מחויבות לכל החיים לארגון אמנים בדרום ישראל, והפיכת טראומה ליופי קהילתי.",
      ru: "Выживший в лагерях принудительного труда, избежавший смертного приговора лишь случайно. Его выживание подпитывало пожизненную приверженность организации художников на юге Израиля, превращая травму в общественную красоту."
    },
    imageUrl: "/images/artists/yehuda-bar-yoshafat.png",
    paintingDescription: { en: "Grove (Horesha), Acrylic on Masonite", he: "חורשה, אקריליק על מזוניט", ru: "Роща, акрил на оргалите" },
    links: ["https://www.invaluable.com/artist/yoshafat-yehuda-bar-fg93yq68fl/"],
    isFree: true,
    birthYear: 1922,
    deathYear: 1993
  },
  {
    id: "shalom-sechvi",
    name: { en: "Shalom Sechvi", he: "שלום שכוי", ru: "Шалом Сехви" },
    biography: {
      en: "After surviving the war and internment in Cyprus, Shalom arrived in 1946. His abstract works represent a psychological processing of the journey from the ashes of Europe to the light of the Land of Israel.",
      he: "לאחר ששרד את המלחמה והמעצר בקפריסין, הגיע שלום ב-1946. עבודותיו המופשטות מייצגות עיבוד פסיכולוגי של המסע מאפר אירופה אל אור ארץ ישראל.",
      ru: "Пережив войну и интернирование на Кипре, Шалом прибыл в 1946 году. Его абстрактные работы представляют психологическую переработку пути из пепла Европы к свету Земли Израиля."
    },
    imageUrl: "/images/artists/shalom-sechvi.png",
    paintingDescription: { en: "Abstract, Watercolor or oil on paper", he: "שלום שכוי מופשט אקוורל או שמן על נייר", ru: "Абстракция, акварель или масло на бумаге" },
    links: ["https://www.maapilim.org.il/notebook_ext.asp?book=32343"],
    isFree: true
  },
  {
    id: "malvina-kaplan",
    name: { en: "Malvina Kaplan", he: "מלווינה קפלן", ru: "Мальвина Каплан" },
    biography: {
      en: "A survivor of both Auschwitz and Ravensbruck, Malvina was saved by the 'White Buses' of Count Bernadotte. Her abstract pastel arrays are an exploration of order and color born from the chaos of survival.",
      he: "שורדת הן את אושוויץ והן את רוונסבריק, מלווינה ניצלה על ידי ה'אוטובוסים הלבנים' של הרוזן ברנדוט. מערכי הפסטל המופשטים שלה הם חקירה של סדר וצבע שנולדו מתוך כאוס ההישרדות.",
      ru: "Пережившая и Освенцим, и Равенсбрюк, Мальвина была спасена «Белыми автобусами» графа Бернадотта. Её абстрактные пастельные композиции — исследование порядка и цвета, рождённых из хаоса выживания."
    },
    imageUrl: "/images/artists/malvina-kaplan.jpeg",
    paintingDescription: { en: "Abstract arrays of pastels", he: "מערכי פסטל מופשטים", ru: "Абстрактные пастельные композиции" },
    links: ["https://en.wikipedia.org/wiki/Malvina_Kaplan"],
    isFree: true
  },
  {
    id: "claire-szillard",
    name: { en: "Claire Szillard", he: "קלייר סילארד", ru: "Клер Силлард" },
    biography: {
      en: "Born in Budapest, she survived the siege while her husband was taken to labor camps. After the war, she rebuilt her life in Israel, becoming world-famous for her stained glass work that literally transforms light into spiritual beauty.",
      he: "נולדה בבודפשט, היא שרדה את המצור בזמן שבעלה נלקח למחנות עבודה. לאחר המלחמה, בנתה מחדש את חייה בישראל, והפכה למפורסמת בעולם בעבודות הוויטראז' שלה שבאופן מילולי הופכות אור ליופי רוחני.",
      ru: "Родилась в Будапеште, пережила осаду, пока её муж был отправлен в трудовые лагеря. После войны восстановила жизнь в Израиле, став всемирно известной своими витражами, буквально превращающими свет в духовную красоту."
    },
    imageUrl: "/images/artists/claire-szillar_tree.jpeg",
    paintingDescription: { en: "Watercolor on paper - tree trunk", he: "אקוורל על נייר - גזע עץ", ru: "Акварель на бумаге — ствол дерева" },
    links: ["https://he.wikipedia.org/wiki/%D7%A7%D7%9C%D7%99%D7%99%D7%A8_%D7%A1%D7%99%D7%9C%D7%90%D7%A8%D7%93"],
    isFree: true
  },
  {
    id: "alfred-aberdam",
    name: { en: "Alfred Aberdam", he: "אלפרד אברדם", ru: "Альфред Абердам" },
    biography: {
      en: "Born in Lviv (Lvov), Galicia in 1894. He became one of the prominent painters of the 'School of Paris' (École de Paris), a group of artists, many of whom were Jewish immigrants from Eastern Europe. His style integrated modernistic trends while maintaining a distinctive personal voice, known for rich, warm coloration and expressive brushstrokes. He exhibited internationally in Paris, London, and Tel Aviv.",
      he: "נולד בלבוב, גליציה בשנת 1894. הפך לאחד הציירים הבולטים של 'אסכולת פריז' (École de Paris), קבוצת אמנים שרבים מחבריה היו יהודים ממזרח אירופה. סגנונו שילב מגמות מודרניסטיות תוך שמירה על קול אישי, ונודע בצבעוניות עשירה וחמה ובמשיכות מכחול אקספרסיביות. הציג ברחבי העולם בפריז, לונדון ותל אביב.",
      ru: "Родился во Львове, Галиция, в 1894 году. Стал одним из выдающихся художников «Парижской школы» (École de Paris) — группы художников, многие из которых были еврейскими иммигрантами из Восточной Европы. Его стиль сочетал модернистские тенденции с сохранением личного голоса, отличался богатым, тёплым колоритом и экспрессивными мазками. Выставлялся в Париже, Лондоне и Тель-Авиве."
    },
    imageUrl: "/images/artists/alfred-aberdam.jpg",
    paintingDescription: { en: "Little People, Oil on canvas", he: "אנשים קטנים, שמן על בד", ru: "Маленькие люди, холст, масло" },
    paintingStyle: {
      en: "Style and Technique: His style belongs to the expressive-figurative movement characteristic of many artists in the School of Paris, embracing late Impressionism and Post-Impressionism with touches of Expressionism. Known for rich, warm, and pronounced coloration, combining dark and bright tones for dramatic atmosphere. His paintings feature expressive and free brushstrokes, lending a sense of movement and emotion.\n\nSubject Matter: Focused extensively on portraits and figures, capturing emotional states. Also created still life paintings using everyday objects to convey intimacy, and urban landscapes of Paris.",
      he: "סגנון וטכניקה: סגנונו שייך לזרם האקספרסיבי-פיגורטיבי המאפיין רבים מחברי אסכולת פריז, תוך אימוץ השפעות האימפרסיוניזם המאוחר והפוסט-אימפרסיוניזם עם נגיעות אקספרסיוניזם. נודע בצבעוניות עשירה, חמה ומודגשת, המשלבת גוונים כהים ובהירים ליצירת אווירה דרמטית. ציוריו בעלי משיכות מכחול אקספרסיביות ומשוחררות.\n\nנושאי היצירה: התמקד רבות בדיוקנאות ודמויות, תוך לכידת מצבים רגשיים. יצר גם ציורי טבע דומם ונופים עירוניים של פריז.",
      ru: "Стиль и техника: Его стиль принадлежит к экспрессивно-фигуративному направлению, характерному для многих художников Парижской школы, с влиянием позднего импрессионизма и постимпрессионизма с элементами экспрессионизма. Известен богатым, тёплым колоритом, сочетающим тёмные и светлые тона для драматической атмосферы. Картины отличаются экспрессивными свободными мазками.\n\nТематика: Сосредоточился на портретах и фигурах, передавая эмоциональные состояния. Также создавал натюрморты и городские пейзажи Парижа."
    },
    links: [],
    isFree: true,
    birthYear: 1894,
    deathYear: 1963
  },
  {
    id: "jacob-rosenbaum",
    name: { en: "Jacob Rosenbaum", he: "יעקב רוזנבוים", ru: "Яков Розенбаум" },
    biography: {
      en: "Born in Suwałki, Poland, in 1924. His early life was marked by the trauma of World War II, during which he was imprisoned in German Concentration Camps. After the war, he studied at The Free Academy of Art in Rome and made Aliyah to Israel in 1949, settling in Jerusalem. He was elected to the Israeli Association of Painters and Sculptors in 1987 and received the Jerusalem Prize for Painting and Sculpture in 1977.",
      he: "נולד בשנת 1924 בסובאלקי, פולין. נעוריו עוצבו על ידי האימה של מלחמת העולם השנייה, במהלכה היה אסיר במחנות ריכוז גרמניים כניצול שואה. לאחר המלחמה למד באקדמיה החופשית לאמנות ברומא ועלה לישראל בשנת 1949, והתיישב בירושלים. בשנת 1987 נבחר לחבר באגודת הציירים והפסלים בישראל וזכה בפרס ירושלים לציור ולפיסול בשנת 1977.",
      ru: "Родился в Сувалках, Польша, в 1924 году. Его юность была отмечена травмой Второй мировой войны, во время которой он был заключён в немецких концлагерях. После войны учился в Свободной академии искусств в Риме и репатриировался в Израиль в 1949 году, поселившись в Иерусалиме. В 1987 году был избран членом Израильской ассоциации художников и скульпторов, в 1977 году получил Иерусалимскую премию в области живописи и скульптуры."
    },
    imageUrl: "/images/artists/jacob-rosenbaum-man.jpg",
    additionalImages: ["/images/artists/jacob-rosenbaum.jpg"],
    paintingDescription: { en: "Portrait of a Man, Watercolor", he: "דיוקן איש, צבעי מים", ru: "Портрет мужчины, акварель" },
    paintingStyle: {
      en: "Genre: Primarily known as a painter, with works also including drawings such as a portrait of his father, a survivor of the Lukov Ghetto.\n\nSubject Matter: Still Life compositions, particularly oil on canvas pieces from the 1950s in Vintage/Mid-20th Century style. Also explored portraiture and figurative work. His known works include Oil on Canvas and Pencil Drawing on Paper.\n\nContextual Influences: As a European-trained immigrant artist in Israel during the mid-20th century, his style blended European Modernism with emerging Israeli art, reflecting the history and character of Jerusalem.",
      he: "ייחוד סגנוני: אמנותו תוארה כבעלת 'צבעוניות חריפה ועירנית יותר מן המקובל', תוך שמירה על 'זיקה ברורה אל הטבע ובעיקר אל הנוף'.\n\nנושאים מרכזיים: טבע דומם - ציורי שמן על בד מתוארכים לשנות ה-50 ואילך. דיוקנאות ודמויות, כולל דיוקן אביו ניצול גטו לוקוב. נופי ירושלים בה חי ויצר.\n\nמדיומים: ציורי שמן וגואש על בד, לצד רישומים ופסלים.",
      ru: "Жанр: Известен прежде всего как живописец, также создавал рисунки, включая портрет отца — узника гетто Луков.\n\nТематика: Натюрморты, особенно маслом на холсте 1950-х годов в винтажном стиле середины XX века. Также работал над портретами и фигуративным искусством. Техники: масло на холсте и карандашные рисунки на бумаге.\n\nВлияния: Как европейски обученный художник-иммигрант в Израиле середины XX века, его стиль сочетал европейский модернизм с зарождающимся израильским искусством, отражая историю и характер Иерусалима."
    },
    links: [],
    isFree: true,
    birthYear: 1924,
    deathYear: 2015
  },
  {
    id: "simon-caplan",
    name: { en: "Simon Caplan", he: "שמעון קפלן", ru: "Шимон Каплан" },
    biography: {
      en: "Born in Poland in 1924. His family fled to France, then Brazil following the German invasion in 1940. He studied classical painting in Paris from age 12 and continued at the Academy of Art in Rio de Janeiro. He made Aliyah in 1948 with pioneers from South America and was a founder of Kibbutz Bror Hayil. He became known as 'The Painter of the Moshav' in Rishpon, dedicating his life to portraiture and teaching art.",
      he: "נולד בפולין בשנת 1924. משפחתו נמלטה לצרפת ואז לברזיל בעקבות הפלישה הגרמנית ב-1940. החל ללמוד ציור קלאסי בפריז בגיל 12 והמשיך באקדמיה לאמנות בריו דה ז'ניירו. עלה לישראל ב-1948 עם חלוצים מדרום אמריקה והיה ממקימי קיבוץ ברור חייל. נודע כ'הצייר של המושב' ברשפון והקדיש את חייו לציור דיוקנאות והוראת אמנות.",
      ru: "Родился в Польше в 1924 году. Его семья бежала во Францию, затем в Бразилию после немецкого вторжения в 1940 году. Изучал классическую живопись в Париже с 12 лет и продолжил в Академии искусств в Рио-де-Жанейро. Репатриировался в Израиль в 1948 году с пионерами из Южной Америки и был одним из основателей кибуца Брор Хайль. Стал известен как «Художник мошава» в Ришпоне, посвятив жизнь портретной живописи и преподаванию искусства."
    },
    imageUrl: "/images/artists/simon-caplan.jpg",
    paintingDescription: { en: "Jerusalem, Oil on canvas", he: "ירושלים, שמן על בד", ru: "Иерусалим, холст, масло" },
    paintingStyle: {
      en: "Style and Technique: Classical foundation from Paris studies at a young age. Early Period (up to 1980): focused on charcoal drawings requiring precision and technical skill, effective at capturing facial expression with sharp clarity. Later Period (from 1980): transitioned to oil colors, allowing richer color palette, depth, and texture.\n\nSubject Matter: Portraiture is the most significant and defining subject. Known as 'The Painter of the Moshav,' he painted portraits of many Rishpon residents, focusing on children and adults. Also dedicated decades to teaching painting and creating community art including stage backdrops for local shows.",
      he: "סגנון וטכניקה: בסיס קלאסי מלימודים בפריז בגיל צעיר. תקופה מוקדמת (עד 1980): התמקד ברישומי פחם הדורשים דיוק ומיומנות, ומאפשרים ללכוד הבעות פנים בחדות. תקופה מאוחרת (מ-1980): עבר לצבעי שמן, המאפשרים צבעוניות עשירה יותר, עומק וטקסטורה.\n\nנושאי היצירה: דיוקן הוא הנושא המרכזי. נודע כ'הצייר של המושב' וצייר דיוקנאות של תושבים רבים ברשפון. הקדיש עשרות שנים להוראת ציור ויצירת אמנות קהילתית כולל תפאורות למופעים.",
      ru: "Стиль и техника: Классическая основа из парижских занятий в юном возрасте. Ранний период (до 1980): угольные рисунки, требующие точности и мастерства, эффективно передающие выражение лица. Поздний период (с 1980): переход к масляным краскам, позволяющим богатую палитру, глубину и текстуру.\n\nТематика: Портрет — главный и определяющий жанр. Известный как «Художник мошава», он писал портреты многих жителей Ришпона. Также десятилетиями преподавал живопись и создавал общественное искусство, включая декорации для местных представлений."
    },
    links: [],
    isFree: true,
    birthYear: 1924
  },
  {
    id: "zvi-arman",
    name: { en: "Zvi Arman", he: "צבי ארמן", ru: "Цви Арман" },
    biography: {
      en: "Born in Lviv in 1903. He studied art in Lviv and Kraków and was a member of the Jewish Artists Association. During WWII, he was imprisoned in the Lviv Ghetto but escaped to Caucasia. In 1947, he attempted to immigrate illegally aboard the ship 'Theodore Herzl' but was detained in Cyprus. After arriving in Israel, he worked as an architect and joined the famous Artists' Colony in Safed, where he created art influenced by modern art movements.",
      he: "נולד בלבוב בשנת 1903. למד אמנות בלבוב ובקרקוב והיה חבר באגודת האמנים היהודים. במהלך מלחמת העולם השנייה נכלא בגטו לבוב אך הצליח להימלט לקווקז. ב-1947 ניסה לעלות לארץ באופן בלתי-לגלי על האונייה 'תיאודור הרצל' אך נעצר בקפריסין. לאחר עלייתו לישראל עבד כאדריכל והצטרף לקריית האמנים בצפת, שם יצר אמנות בהשפעת זרמים מודרניים.",
      ru: "Родился во Львове в 1903 году. Изучал искусство во Львове и Кракове, был членом Еврейской ассоциации художников. Во время Второй мировой войны был заключён в Львовском гетто, но бежал на Кавказ. В 1947 году пытался нелегально иммигрировать на корабле «Теодор Герцль», но был задержан на Кипре. После прибытия в Израиль работал архитектором и присоединился к знаменитой колонии художников в Цфате, где создавал искусство под влиянием современных течений."
    },
    imageUrl: "/images/artists/zvi-arman.jpg",
    paintingDescription: { en: "Madonna, Oil on canvas", he: "מדונה, שמן על בד", ru: "Мадонна, холст, масло" },
    paintingStyle: {
      en: "Style: Marked by the influence of modern art. His classical training in Poland was synthesized with modern trends emerging from Europe post-WWII, resulting in a style that incorporates modernistic elements. Oil on canvas allowed him rich color depth and texture.\n\nSubject Matter: The landscapes of Safed, its alleys, and spiritual/mystical atmosphere were central subjects. His architectural background manifested through clear composition, emphasis on form, line, and perspective. As a Holocaust survivor, themes of memory, identity, and Aliyah may have found expression in some of his works.",
      he: "סגנון: מאופיין בהשפעת האמנות המודרנית. הכשרתו הקלאסית בפולין שולבה עם מגמות מודרניות מאירופה לאחר המלחמה, ויצרה סגנון המשלב יסודות מודרניסטיים. ציור השמן מאפשר עומק צבעוניות וטקסטורה עשירה.\n\nנושאי היצירה: נופי צפת, סמטאותיה ואווירתה הרוחנית-מיסטית היוו נושאים מרכזיים. רקעו כאדריכל בא לידי ביטוי בקומפוזיציה ברורה ודגש על צורה, קו ופרספקטיבה. כניצול שואה, ייתכן שנושאי זיכרון, זהות והעלייה לארץ מצאו ביטוי בחלק מעבודותיו.",
      ru: "Стиль: Отмечен влиянием современного искусства. Его классическая подготовка в Польше была синтезирована с современными тенденциями послевоенной Европы, создав стиль с модернистскими элементами. Масло на холсте позволяло богатую глубину цвета и текстуру.\n\nТематика: Пейзажи Цфата, его переулки и духовно-мистическая атмосфера были центральными сюжетами. Архитектурное образование проявлялось в чёткой композиции, акценте на форме, линии и перспективе. Как переживший Холокост, темы памяти, идентичности и алии могли найти выражение в некоторых его работах."
    },
    links: [],
    isFree: true,
    birthYear: 1903,
    deathYear: 1993
  },
  {
    id: "gershon-knispel",
    name: { en: "Gershon Knispel", he: "גרשון קניספל", ru: "Гершон Книспель" },
    biography: {
      en: "Gershon Knispel was a German-born Israeli sculptor, painter, and graphic artist known for his monumental public works in Israel and Brazil, and as a leading figure in the 'social realism' trend in Israeli art during the second half of the 20th century.\n\nBorn in Cologne, Germany, in 1932. Due to the rise of the Nazis, he immigrated with his family to Mandatory Palestine in 1935. He was a lifelong political activist and a member of the Communist Party in both Israel and Brazil, which heavily influenced his art.\n\nHe studied art in the early 1950s and began his career illustrating lithographs and engravings for poetry books, including works by Alexander Penn and Bertolt Brecht.\n\nThe Brazilian Period (1959–1964): In 1959, he moved to Brazil after winning a competition to design a façade for a television tower in São Paulo. He collaborated closely with the acclaimed architect Oscar Niemeyer and created dozens of public works, including outdoor sculptures, murals, and façade designs on public buildings. Following the 1964 military coup, Knispel became wanted due to his Communist Party membership. He fled the country and returned to Israel.\n\nReturn to Israel and Haifa (1964–1989): He settled in Haifa, where he served as an Artistic Consultant to the Municipality. Many of his works from this period were installed in Haifa's public spaces. He collaborated with Palestinian artist Abed Abdi on a sculpture commemorating the events of Land Day.\n\nLater Years: After the fall of the military dictatorship in Brazil, Knispel returned there in 1995, dividing his life between Haifa and São Paulo. He passed away in Haifa in 2018.",
      he: "גרשון קניספל היה פסל, צייר ואמן גרפי ישראלי יליד גרמניה, שנודע בזכות עבודותיו המונומנטליות בישראל ובברזיל וכאחת הדמויות המובילות בזרם \"הריאליזם החברתי\" באמנות הישראלית במחצית השנייה של המאה ה-20.\n\nנולד בקלן, גרמניה, ב-1932. עקב עליית הנאצים, עלה לארץ ישראל עם משפחתו ב-1935. היה פעיל פוליטי לכל אורך חייו וחבר במפלגה הקומוניסטית בישראל ובברזיל, מה שהשפיע רבות על יצירתו.\n\nלמד אמנות בראשית שנות ה-50 והחל את דרכו באיור ליתוגרפיות ותחריטים לספרי שירה, כולל עבודות של אלכסנדר פן וברטולט ברכט.\n\nהתקופה הברזילאית (1959–1964): ב-1959 עבר לברזיל לאחר שזכה בתחרות לעיצוב חזית למגדל טלוויזיה בסאו פאולו. שיתף פעולה באופן הדוק עם האדריכל הנודע אוסקר נימאייר ויצר עשרות עבודות ציבוריות, כולל פסלי חוצות וציורי קיר במבני ציבור. בעקבות ההפיכה הצבאית ב-1964, קניספל, שהיה חבר במפלגה הקומוניסטית, נמלט מהמדינה ושב לישראל.\n\nחזרה לישראל וחיפה (1964–1989): התיישב בחיפה, שם שימש כיועץ אמנותי לעירייה. רבות מעבודותיו מתקופה זו הוצבו במרחבים הציבוריים של העיר. שיתף פעולה עם האמן הפלסטיני עבד עבדי ביצירת פסל המנציח את אירועי יום האדמה.\n\nשנים מאוחרות: לאחר נפילת הדיקטטורה הצבאית בברזיל, חזר לשם ב-1995 וחילק את חייו בין חיפה לסאו פאולו. נפטר בחיפה ב-2018.",
      ru: "Гершон Книспель — израильский скульптор, живописец и график немецкого происхождения, известный своими монументальными общественными работами в Израиле и Бразилии, ведущая фигура направления «социального реализма» в израильском искусстве второй половины XX века.\n\nРодился в Кёльне, Германия, в 1932 году. Из-за прихода нацистов к власти репатриировался с семьёй в Палестину в 1935 году. Был политическим активистом и членом Коммунистической партии в Израиле и Бразилии, что сильно повлияло на его творчество.\n\nИзучал искусство в начале 1950-х и начал карьеру с иллюстрирования литографий и гравюр для поэтических сборников, включая работы Александра Пенна и Бертольта Брехта.\n\nБразильский период (1959–1964): В 1959 году переехал в Бразилию, выиграв конкурс на оформление фасада телебашни в Сан-Паулу. Тесно сотрудничал с известным архитектором Оскаром Нимейером и создал десятки общественных работ, включая уличные скульптуры, фрески и оформление фасадов общественных зданий. После военного переворота 1964 года Книспель стал разыскиваемым из-за членства в Компартии. Он бежал и вернулся в Израиль.\n\nВозвращение в Израиль и Хайфу (1964–1989): Поселился в Хайфе, где работал художественным консультантом муниципалитета. Многие его работы этого периода были установлены в общественных пространствах города. Сотрудничал с палестинским художником Абедом Абди над скульптурой, посвящённой событиям Дня земли.\n\nПоздние годы: После падения военной диктатуры в Бразилии вернулся туда в 1995 году, разделив жизнь между Хайфой и Сан-Паулу. Скончался в Хайфе в 2018 году."
    },
    imageUrl: "/images/artists/gershon-knispel.jpg",
    paintingDescription: { en: "Social Realism sculpture fragment", he: "פרגמנט מפסל ריאליזם חברתי", ru: "Фрагмент скульптуры социального реализма" },
    paintingStyle: {
      en: "Knispel's art is defined by its deep social commitment, political engagement, and monumental scale.\n\nDominant Style: Social Realism. His work focused on the living conditions of Holocaust survivors, the plight of the working class, and social and political struggles.\n\nHaifa Public Art (1964–1989): As the Artistic Consultant to the Municipality, Knispel was instrumental in shaping Haifa's artistic landscape. He used concrete, stone, and metal to create large, declarative works that addressed memory, labor, and identity.\n\n\"The Holocaust and the Resurrection\" (Sderot HaZionut): One of his most famous and prominent sculptures, centrally located. It dramatically links the tragedy of the Holocaust with the establishment of the State and the national rebirth (T'kuma).\n\n\"Haifa Deportees Memorial\" (UNESCO Square): Created in 1983, this monumental work is located near the sea. It commemorates the forced deportation of Jewish undocumented immigrants (Ma'apilim) from the Port of Haifa by the British Mandate authorities before the state's founding.\n\nWorks in the Congress Center: Knispel designed several large bas-reliefs and sculptures for the International Congress Center in Haifa.\n\nThemes of Labor: Many of his works in the Lower City focused on celebrating the working class—the core economic identity of Haifa's port and industry.\n\nOther Key Works: \"Signing the Peace Petition in Acre\" (1953) was restored and placed in the permanent display of Israeli art at the Tel Aviv Museum of Art in 2018.",
      he: "אמנותו של קניספל מוגדרת על ידי מחויבותה החברתית העמוקה, מעורבותה הפוליטית ומימדיה המונומנטליים.\n\nהסגנון הדומיננטי: ריאליזם חברתי. עבודתו התמקדה בתנאי החיים של ניצולי השואה, מצוקת מעמד הפועלים ומאבקים חברתיים ופוליטיים אחרים.\n\nאמנות ציבורית בחיפה (1964–1989): בתפקידו כיועץ אמנותי, קניספל הטביע חותם משמעותי על הנוף האמנותי של חיפה. הוא השתמש בבטון, אבן ומתכת כדי ליצור עבודות הצהרתיות וגדולות ממדים שעסקו בזיכרון, עבודה וזהות.\n\n\"השואה והתקומה\" (שדרות הציונות): אחד מפסליו המפורסמים והבולטים ביותר. מבטא באופן דרמטי את הקשר בין טרגדיית השואה לבין הקמת המדינה והתקומה הלאומית.\n\n\"אנדרטת מגורשי חיפה\" (כיכר אונסקו): אנדרטה מונומנטלית מ-1983 הממוקמת בקרבת הים. מנציחה את גירוש המעפילים היהודים מנמל חיפה על ידי שלטונות המנדט הבריטי.\n\nעבודות במרכז הקונגרסים: קניספל עיצב מספר תבליטים ופסלים במרכז הקונגרסים הבינלאומי בחיפה.\n\nנושאי עבודה: רבים מפסליו בחיפה התמקדו בהצדעה למעמד הפועלים ולעובדי הנמל והתעשייה.\n\nעבודות מפתח נוספות: \"חתימת עצומת השלום בעכו\" (1953) שוחזרה והוכנסה לתצוגת הקבע של האמנות הישראלית במוזיאון תל אביב לאמנות ב-2018.",
      ru: "Искусство Книспеля определяется глубокой социальной приверженностью, политической вовлечённостью и монументальным масштабом.\n\nДоминирующий стиль: Социальный реализм. Его работы сосредоточены на условиях жизни переживших Холокост, тяжёлом положении рабочего класса и социально-политических борьбах.\n\nОбщественное искусство в Хайфе (1964–1989): Как художественный консультант муниципалитета, Книспель сыграл ключевую роль в формировании художественного облика Хайфы. Он использовал бетон, камень и металл для создания крупных декларативных работ о памяти, труде и идентичности.\n\n«Холокост и возрождение» (бульвар Ционут): Одна из самых известных и выдающихся скульптур, расположенная в центре города. Драматически связывает трагедию Холокоста с созданием государства и национальным возрождением (Ткума).\n\n«Мемориал депортированных из Хайфы» (площадь ЮНЕСКО): Создан в 1983 году, расположен у моря. Посвящён принудительной депортации еврейских нелегальных иммигрантов (маапилим) из порта Хайфы британскими мандатными властями.\n\nРаботы в Конгресс-центре: Книспель создал несколько крупных барельефов и скульптур для Международного конгресс-центра в Хайфе.\n\nТемы труда: Многие его работы в Нижнем городе посвящены прославлению рабочего класса — основы экономической идентичности порта и промышленности Хайфы.\n\nДругие ключевые работы: «Подписание мирной петиции в Акко» (1953) была отреставрирована и включена в постоянную экспозицию израильского искусства в Тель-Авивском музее искусств в 2018 году."
    },
    links: [],
    isFree: true,
    birthYear: 1932,
    deathYear: 2018
  },
  {
    id: "shlomo-vandenberg",
    name: { en: "Shlomo Van den Berg", he: "שלמה ון דן ברג", ru: "Шломо Ван ден Берг" },
    biography: {
      en: "Shlomo Van den Berg was an Israeli painter whose life journey, marked by rescue from Nazi Germany and involvement in the establishment of the State of Israel, deeply influenced his artistic path.\n\nBorn in Emden, Germany, in 1920, to Dutch parents. After the Nazi party came to power, his family was expelled to the Netherlands in 1933. In 1936, he immigrated to Palestine via Youth Aliyah, an organization that rescued Jewish children from the Third Reich.\n\nKibbutz and Military Service: He first stayed at Kibbutz Tel Yosef and then became a member of Kibbutz Maoz Haim until 1949, where he worked as a carpenter. During the 1940s, he served in the Notrim (Jewish auxiliary police) and in a British Army Engineers unit during World War II. Following the war, he joined the Haganah and served as a camouflage instructor in the Engineering Corps during the War of Independence.\n\nArtistic Training and Residence: He was largely autodidact (self-taught) but received guidance by working for a period with the renowned Israeli painter Joseph Zaritzky. He further honed his skills by studying at the Académie de la Grande Chaumière in Paris (1953–1954), focusing on sketching. After the War of Independence, he resided in Kfar Vitkin, then Tel Aviv, and later moved to Jerusalem for a brief period before settling in Givatayim in the 1970s.",
      he: "שלמה ון דן ברג היה צייר ישראלי שמסלול חייו, שכלל הצלה מגרמניה הנאצית ומעורבות בהקמת מדינת ישראל, השפיע עמוקות על דרכו האמנותית.\n\nנולד באמדן, גרמניה, בשנת 1920, להורים הולנדים. לאחר עליית המפלגה הנאצית לשלטון ב-1933, גורשה משפחתו להולנד. ב-1936 עלה לארץ ישראל במסגרת עליית הנוער.\n\nחיי קיבוץ ושירות צבאי: בתחילה שהה בקיבוץ טל יוסף, ובשנת 1939 עבר לקיבוץ מעוז-חיים, שם היה חבר עד 1949 ועסק בנגרות. במהלך שנות ה-40 שירת בפלוגת נוטרים בעמק בית שאן, ביחידת מהנדסים של הצבא הבריטי במלחמת העולם השנייה, ולאחר מכן ב\"הגנה\" כמדריך הסוואה בחיל ההנדסה במלחמת השחרור.\n\nהכשרה אמנותית ומגורים: היה ברובו אוטודידאקט (למד בכוחות עצמו), אך עבד תקופה מסוימת עם הצייר הישראלי הנודע יוסף זריצקי. הוא השתלם בשיעורי רישום באקדמיה דה לה גראנד שומיאר בפריז (1953–1954). לאחר מלחמת השחרור עבר מכפר ויתקין לתל אביב, שהה תקופה קצרה בירושלים, ובשנות ה-70 עבר להתגורר בגבעתיים.",
      ru: "Шломо Ван ден Берг — израильский художник, чей жизненный путь, отмеченный спасением из нацистской Германии и участием в создании государства Израиль, глубоко повлиял на его творческий путь.\n\nРодился в Эмдене, Германия, в 1920 году, в семье голландцев. После прихода нацистской партии к власти его семья была выслана в Нидерланды в 1933 году. В 1936 году репатриировался в Палестину через «Молодёжную алию» — организацию, спасавшую еврейских детей из Третьего рейха.\n\nКибуц и военная служба: Сначала жил в кибуце Тель-Йосеф, затем стал членом кибуца Маоз-Хаим до 1949 года, работал плотником. В 1940-х годах служил в Нотрим (еврейская вспомогательная полиция) и в инженерном подразделении британской армии во время Второй мировой войны. После войны вступил в Хагану и служил инструктором по маскировке в инженерном корпусе во время Войны за независимость.\n\nХудожественное образование и проживание: Был в основном самоучкой, но некоторое время работал с известным израильским художником Йосефом Зарицким. Совершенствовал навыки в Академии Гранд-Шомьер в Париже (1953–1954), специализируясь на рисунке. После Войны за независимость жил в Кфар-Виткин, затем в Тель-Авиве, недолго в Иерусалиме, а в 1970-х поселился в Гиватаиме."
    },
    imageUrl: "/images/artists/shlomo-vandenberg.jpg",
    additionalImages: ["/images/artists/shlomo-vandenberg-2.jpg", "/images/artists/shlomo-vandenberg-3.jpg"],
    paintingDescription: { en: "Women, Gouache on paper", he: "נשים, גואש על נייר", ru: "Женщины, гуашь на бумаге" },
    paintingStyle: {
      en: "Van den Berg's style evolved through two distinct phases, showing a continuous engagement with European modernist trends:\n\nEarly Influences (1940s): During the 1940s, he developed a painting style that was strongly influenced by Cubism and the French Avant-garde. This period likely featured works with fractured perspectives, geometric shapes, and a departure from traditional realism, reflecting the core principles of early 20th-century French modernism.\n\nLater Style (1960s): In the 1960s, he adopted a primarily Abstract painting style. This abstraction was influenced by the 'New Objectivity' (Neue Sachlichkeit) and other avant-garde movements. While abstract, the mention of the 'New Objectivity'—a movement known for its detailed, objective observation—suggests his abstract works may have been characterized by formal rigor, clarity, and structural definition.\n\nDiverse Works: Alongside his painting, Van den Berg was active in applied art. He created works for the theater (1955). He produced mosaics and various decorative installations, including wall paintings in the Ohel Shem Hall (1956) and decorations for the Israeli pavilion at the Izmir Fair.",
      he: "סגנונו של ון דן ברג התפתח בשני שלבים עיקריים, המעידים על עיסוק מתמשך במגמות המודרניות האירופיות:\n\nהשפעות מוקדמות (שנות ה-40): במהלך שנות ה-40, פיתח סגנון ציור שהושפע באופן ניכר מקוביזם ומהאוונגרד הצרפתי. תקופה זו כללה ככל הנראה עבודות עם פרספקטיבות שבורות, צורות גיאומטריות והתרחקות מהריאליזם המסורתי.\n\nסגנון מאוחר (שנות ה-60): בשנות ה-60, אימץ סגנון ציור מופשט עיקרי. הפשטה זו הושפעה מזרם \"האובייקטיביות החדשה\" (Neue Sachlichkeit) ומגמות אוונגרדיות אחרות. אף שהסגנון היה מופשט, ההשפעה של \"האובייקטיביות החדשה\" — הידועה בהתבוננות אובייקטיבית ומפורטת — מרמזת כי יצירותיו המופשטות אולי התאפיינו בבהירות מבנית ודיוק צורני.\n\nעבודות מגוונות: במקביל לציור, ון דן ברג פעל גם בתחומי האמנות השימושית. יצר עבודות לתיאטרון (1955). הוא יצר פסיפסים ודקורציות שונות, כולל ציורי קיר באולם אוהל-שם (1956) וקישוטים לביתן הישראלי ביריד איזמיר.",
      ru: "Стиль Ван ден Берга развивался в два отчётливых этапа, демонстрируя постоянное взаимодействие с европейскими модернистскими тенденциями:\n\nРанние влияния (1940-е): В 1940-х годах он развил стиль живописи под сильным влиянием кубизма и французского авангарда. Этот период, вероятно, отличался работами с дроблёными перспективами, геометрическими формами и отходом от традиционного реализма, отражая основные принципы французского модернизма начала XX века.\n\nПоздний стиль (1960-е): В 1960-х годах он принял преимущественно абстрактный стиль живописи. Эта абстракция была под влиянием «Новой вещественности» (Neue Sachlichkeit) и других авангардных движений. Хотя стиль был абстрактным, упоминание «Новой вещественности» — движения, известного детальным объективным наблюдением — предполагает, что его абстрактные работы могли отличаться формальной строгостью, ясностью и структурной определённостью.\n\nРазнообразные работы: Наряду с живописью, Ван ден Берг был активен в прикладном искусстве. Он создавал работы для театра (1955). Создавал мозаики и различные декоративные инсталляции, включая настенные росписи в зале Охель-Шем (1956) и декорации для израильского павильона на ярмарке в Измире."
    },
    links: [],
    isFree: true,
    birthYear: 1920,
    deathYear: 1982
  },
  {
    id: "shlomo-schwartz",
    name: { en: "Shlomo Schwartz", he: "שלמה שוורץ", ru: "Шломо Шварц" },
    biography: {
      en: "Shlomo Schwartz was born in 1934 in Bukovina, Romania. His childhood was profoundly shaped by the outbreak of World War II; following the Romanian occupation and the implementation of anti-Jewish policies, he and his family were deported in 1941 to the Transnistria region. He spent the war years as a young child enduring the harsh conditions of the labor camps and ghettos there. Following the liberation in 1944, he eventually made his way to Israel in 1948, arriving just as the state was being established.\n\nHis formal artistic education began at the Avni Institute of Art and Design in Tel Aviv, where he studied under prominent Israeli masters such as Marcel Janco and Yehezkel Streichman. Following his studies in Israel, he traveled to Paris to further refine his craft at the École des Beaux-Arts. Throughout his career, Schwartz became a prominent figure in the Israeli art scene, settling in Tel Aviv and establishing a long-standing studio. He was a member of the Israel Painters and Sculptors Association and exhibited his work globally until his passing in 2011.",
      he: "שלמה שוורץ נולד בשנת 1934 בבוקובינה שברומניה. ילדותו עמדה בצל אימי מלחמת העולם השנייה; עם הכיבוש הרומני והחלת הגזירות נגד היהודים, הוא ומשפחתו גורשו בשנת 1941 לאזור טרנסניסטריה. את שנות המלחמה העביר כילד צעיר בתנאים הקשים של הגטאות ומחנות העבודה באזור זה. לאחר השחרור ב-1944, פעל לעלות ארצה ובשנת 1948 הגיע לישראל, בדיוק עם הקמת המדינה.\n\nאת השכלתו האמנותית הפורמלית החל בסיבוב \"מכון אבני\" בתל אביב, שם למד אצל גדולי האמנות הישראלית כמו מרסל ינקו ויחזקאל שטרייכמן. בהמשך השתלם בפריז בבית הספר הלאומי הגבוה לאמנויות (École des Beaux-Arts). במהלך הקריירה שלו הפך שוורץ לדמות בולטת בסצנת האמנות בישראל, קבע את ביתו וסטודיו בתל אביב והיה חבר באגודת הציירים והפסלים. הוא הציג בתערוכות יחיד וקבוצתיות רבות בארץ ובעולם עד לפטירתו בשנת 2011.",
      ru: "Шломо Шварц родился в 1934 году в Буковине, Румыния. Его детство было глубоко затронуто началом Второй мировой войны; после румынской оккупации и введения антиеврейских законов он и его семья были депортированы в 1941 году в район Транснистрии. Он провёл военные годы маленьким ребёнком в тяжёлых условиях трудовых лагерей и гетто. После освобождения в 1944 году он в конечном итоге добрался до Израиля в 1948 году, прибыв как раз в момент создания государства.\n\nЕго формальное художественное образование началось в Институте Авни в Тель-Авиве, где он учился у выдающихся израильских мастеров, таких как Марсель Янко и Йехезкель Штрайхман. После учёбы в Израиле он отправился в Париж для совершенствования в Школе изящных искусств. На протяжении своей карьеры Шварц стал видной фигурой израильской арт-сцены, обосновавшись в Тель-Авиве и создав постоянную студию. Он был членом Ассоциации художников и скульпторов Израиля и выставлял свои работы по всему миру до своей смерти в 2011 году."
    },
    imageUrl: "/images/artists/shlomo-schwartz.jpg",
    paintingDescription: { en: "Oil on canvas", he: "שמן על בד", ru: "Холст, масло" },
    paintingStyle: {
      en: "Schwartz's work is characterized by a lyrical, figurative style that often borders on Expressionism. Having survived the Holocaust, his work often carried a deep, underlying humanist empathy. He blended European academic traditions with the vibrant, atmospheric light of Israel, using fluid brushwork that emphasized emotion over rigid realism.\n\nHis subject matter was deeply rooted in the Jewish experience and the local landscape: Musicians and Klezmer—he frequently painted violinists and cellists, capturing the \"soul\" of the music as a nod to his Eastern European heritage. The Israeli Landscape—scenes of Jaffa and Jerusalem, often rendered with a sense of historical weight and nostalgia. People and Markets—he focused on the working class and everyday scenes in markets, treating his subjects with a quiet dignity. Symbolic Still Lifes—intimate compositions that utilized soft light to create a sense of peace and reflection.",
      he: "סגנונו של שוורץ מאופיין בקו פיגורטיבי-לירי הנוטה לאקספרסיוניזם. כמי ששרד את השואה, עבודותיו נשאו לעיתים קרובות מטען של אמפתיה הומניסטית עמוקה. הוא הצליח לשלב בין המסורת האקדמית האירופית לבין האור האווירתי והתוסס של ארץ ישראל, תוך שימוש במשיכות מכחול זורמות המדגישות רגש על פני דיוק ריאליסטי נוקשה.\n\nנושאי יצירתו היו נטועים עמוק בחוויה היהודית ובנוף המקומי: מוזיקאים וכליזמרים—הוא הרבה לצייר נגני כינור וצ'לו, כשהוא לוכד את ה\"נשמה\" של המוזיקה. נופי הארץ—מראות מיפו ומירושלים, המתוארים עם תחושה של נוסטלגיה וכובד היסטורי. דמויות ושווקים—הוא התמקד בחיי היומיום, באנשים עובדים ובסצנות שוק, תוך הענקת כבוד שקט לדמויותיו. טבע דומם—קומפוזיציות אינטימיות המשתמשות באור רך כדי ליצור תחושת שלווה והתבוננות פנימית.",
      ru: "Работы Шварца характеризуются лирическим, фигуративным стилем, часто граничащим с экспрессионизмом. Пережив Холокост, его работы часто несли глубокое гуманистическое сопереживание. Он сочетал европейские академические традиции с ярким атмосферным светом Израиля, используя плавные мазки, подчёркивающие эмоции, а не жёсткий реализм.\n\nЕго тематика была глубоко укоренена в еврейском опыте и местном пейзаже: Музыканты и клезмер—он часто писал скрипачей и виолончелистов, улавливая «душу» музыки как дань своему восточноевропейскому наследию. Израильский пейзаж—виды Яффы и Иерусалима, часто переданные с ощущением исторической значимости и ностальгии. Люди и рынки—он сосредотачивался на рабочем классе и повседневных рыночных сценах, относясь к своим героям с тихим достоинством. Символические натюрморты—интимные композиции с мягким светом, создающие ощущение покоя и созерцания."
    },
    links: [],
    isFree: true,
    birthYear: 1934,
    deathYear: 2011,
    repairInfo: {
      imageUrl: "/images/artists/shlomo-schwartz.jpg",
      heading: {
        en: "Urgent: Stop the Acid Decay",
        he: "דחוף: עצרו את הריקבון החומצי",
        ru: "Срочно: Остановите кислотный распад"
      },
      description: {
        en: "Painted on non-archival cardboard during a time of extreme scarcity, this work is in a state of chemical crisis. The material is inherently acidic (low pH), causing the fibers to become brown, brittle, and prone to snapping.\n\nThe Risk: The support is \"self-destructing\" due to lignin-based acidity.\n\nThe Solution: Immediate chemical deacidification to neutralize the pH levels and archival mounting to prevent the board from crumbling.",
        he: "צוירה על קרטון לא ארכיוני בתקופה של מחסור קיצוני, יצירה זו נמצאת במשבר כימי. החומר הוא חומצי מטבעו (pH נמוך), מה שגורם לסיבים להשחים, להפוך לשבירים ונוטים להישבר.\n\nהסיכון: המשטח \"מתפרק מעצמו\" בשל חומציות מבוססת ליגנין.\n\nהפתרון: ניטרול כימי מיידי של רמות ה-pH והרכבה ארכיונית למניעת התפוררות הלוח.",
        ru: "Написанная на неархивном картоне во времена крайней нехватки материалов, эта работа находится в состоянии химического кризиса. Материал по своей природе кислотный (низкий pH), что приводит к потемнению, хрупкости и ломкости волокон.\n\nРиск: Основа «саморазрушается» из-за кислотности на основе лигнина.\n\nРешение: Немедленная химическая нейтрализация для стабилизации уровня pH и архивная установка для предотвращения рассыпания картона."
      }
    }
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
