import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  expertise: Array<any> = [
    { id: 'tech-engineering', value: 'Tech/Engineering' },
    { id: 'art-literary', value: 'Art/Literary' },
    { id: 'medical', value: 'Medical' },
    { id: 'law/Parents', value: 'Law/Patents' },
    { id: 'science', value: 'Science' },
    { id: 'bus-financial', value: 'Bus/Financial' },
    { id: 'marketing', value: 'Marketing' },
    { id: 'social-sciences', value: 'Social Sciences' }
  ];
  seviceList: Array<any> = [
    { id: 'translation', value: 'Translation' },
    { id: 'editing', value: 'Checking/editing' },
    { id: 'voiceover', value: 'Voiceover' },
    { id: 'summarization', value: 'Summarization' },
    { id: 'education', value: 'Education' },
    { id: 'transcription', value: 'Transcription' },
    { id: 'copywriting', value: 'Copywriting' },
    { id: 'post-editing', value: 'MT post-editing' },
    { id: 'transcreation', value: 'Transcreation' },
    { id: 'subtitling-captioning', value: 'Subtitling, Captioning' },
    { id: 'subtitling-editing', value: 'Subtitling, Checking/Editing/QC' },
    { id: 'subtitling-timecoding', value: 'Subtitling, Time Coding' },
    { id: 'subtitling-translation', value: 'Subtitling, Translation' },
    { id: 'subtitling-sdh', value: 'Subtitling, SDH/HOH' },
    { id: 'language-instruction', value: 'Language instruction' },
    { id: 'native-speaker', value: 'Native speaker conversation' },
  ];
  software: Array<any> = [
    {value: "Across", id: "across", checked: false },
    {value: "Adobe Acrobat", id: "adobe-acrobat", checked: false },
    {value: "Adobe Illustrator", id: "adobe-illustrator", checked: false },
    {value: "Adobe Photoshop", id: "adobe-photoshop", checked: false },
    {value: "Aegisub", id: "aegisub", checked: false },
    {value: "Alchemy Publisher", id: "alchemy-publisher", checked: false },
    {value: "Amara", id: "amara", checked: false },
    {value: "AutoCAD", id: "autocad", checked: false },
    {value: "Bablic", id: "bablic", checked: false },
    {value: "BaccS", id: "baccs", checked: false },
    {value: "Belle Nuit Subtitler", id: "belle-nuit-subtitler", checked: false },
    {value: "CafeTran Espresso", id: "cafetran-espresso", checked: false },
    {value: "CaptionHub", id: "captionhub", checked: false },
    {value: "CaptionMaker/MacCaption", id: "captionmaker-maccaption", checked: false },
    {value: "Captiz", id: "captiz", checked: false },
    {value: "Catalyst", id: "catalyst", checked: false },
    {value: "Crowdin", id: "crowdin", checked: false },
    {value: "DejaVu", id: "dejavu", checked: false },
    {value: "DivXLand Media Subtitler", id: "divxland-media-subtitler", checked: false },
    {value: "Dreamweaver", id: "dreamweaver", checked: false },
    {value: "Easyling", id: "easyling", checked: false },
    {value: "EZTitles", id: "eztitles", checked: false },
    {value: "FinalSub", id: "finalsub", checked: false },
    {value: "fiveLoadSub", id: "fiveloadsub", checked: false },
    {value: "Fluency", id: "fluency", checked: false },
    {value: "FrameMaker", id: "framemaker", checked: false },
    {value: "Frontpage", id: "frontpage", checked: false },
    {value: "Fusion", id: "fusion", checked: false },
    {value: "Ginger Page", id: "ginger-page", checked: false },
    {value: "GlobalizeIt", id: "globalizeit", checked: false },
    {value: "Google Translator Toolkit", id: "google-translator-toolkit", checked: false },
    {value: "Heartsome", id: "heartsome", checked: false },
    {value: "Helium", id: "helium", checked: false },
    {value: "IBM CAT tool", id: "ibm-cat-tool", checked: false },
    {value: "Idiom", id: "idiom", checked: false },
    {value: "Indesign", id: "indesign", checked: false },
    {value: "J-CAT", id: "j-cat", checked: false },
    {value: "Lilt", id: "lilt", checked: false },
    {value: "Lingotek", id: "lingotek", checked: false },
    {value: "Lingviny", id: "lingviny", checked: false },
    {value: "Localizer", id: "localizer", checked: false },
    {value: "LocStudio", id: "locstudio", checked: false },
    {value: "LogiTerm", id: "logiterm", checked: false },
    {value: "Lokalise", id: "lokalise", checked: false },
    {value: "LSP.expert", id: "lsp-expert", checked: false },
    {value: "MadCap Lingo", id: "madcap-lingo", checked: false },
    {value: "MateCat", id: "matecat", checked: false },
    {value: "memoQ", id: "memoq", checked: false },
    {value: "MemSource Cloud", id: "memsource-cloud", checked: false },
    {value: "MetaTexis", id: "metatexis", checked: false },
    {value: "Microsoft Excel", id: "microsoft-excel", checked: false },
    {value: "Microsoft Office Pro", id: "microsoft-office-pro", checked: false },
    {value: "Microsoft Word", id: "microsoft-word", checked: false },
    {value: "MotionPoint", id: "motionpoint", checked: false },
    {value: "MovieCaptioner", id: "moviecaptioner", checked: false },
    {value: "MOX Gateway", id: "mox-gateway", checked: false },
    {value: "Multicorpora", id: "multicorpora", checked: false },
    {value: "Multilizer", id: "multilizer", checked: false },
    {value: "Net-Proxy", id: "net-proxy", checked: false },
    {value: "Ninsight Ayato", id: "ninsight-ayato", checked: false },
    {value: "OmegaT", id: "omegat", checked: false },
    {value: "Pagemaker", id: "pagemaker", checked: false },
    {value: "Pairaphrase", id: "pairaphrase", checked: false },
    {value: "Passolo", id: "passolo", checked: false },
    {value: "Personal Translator", id: "personal-translator", checked: false },
    {value: "PhraseApp", id: "phraseapp", checked: false },
    {value: "Plunet BusinessManager", id: "plunet-businessmanager", checked: false },
    {value: "Poliscript", id: "poliscript", checked: false },
    {value: "Powerpoint", id: "powerpoint", checked: false },
    {value: "Projetex", id: "projetex", checked: false },
    {value: "PROMT", id: "promt", checked: false },
    {value: "Protemos", id: "protemos", checked: false },
    {value: "Qordoba", id: "qordoba", checked: false },
    {value: "QuaHill", id: "quahill", checked: false },
    {value: "QuarkXPress", id: "quarkxpress", checked: false },
    {value: "Redokun", id: "redokun", checked: false },
    {value: "Rulingo", id: "rulingo", checked: false },
    {value: "SDL TRADOS", id: "sdl-trados", checked: false },
    {value: "SDLX", id: "sdlx", checked: false },
    {value: "Silver Bullet Suite", id: "silver-bullet-suite", checked: false },
    {value: "Smartcat", id: "smartcat", checked: false },
    {value: "Smartling", id: "smartling", checked: false },
    {value: "STAR Transit", id: "star-transit", checked: false },
    {value: "Subtitle Edit", id: "subtitle-edit", checked: false },
    {value: "Subtitle Editor", id: "subtitle-editor", checked: false },
    {value: "Subtitle Workshop", id: "subtitle-workshop", checked: false },
    {value: "Swordfish", id: "swordfish", checked: false },
    {value: "Text United Software", id: "text-united-software", checked: false },
    {value: "titlebee", id: "titlebee", checked: false },
    {value: "Titlevision Submachine", id: "titlevision-submachine", checked: false },
    {value: "TOM Agency", id: "tom-agency", checked: false },
    {value: "Transifex", id: "transifex", checked: false },
    {value: "Translate", id: "translate", checked: false },
    {value: "Translation Exchange", id: "translation-exchange", checked: false },
    {value: "Translation Workspace", id: "translation-workspace", checked: false },
    {value: "TranslationProjex", id: "translationprojex", checked: false },
    {value: "TransSuite2000", id: "transsuite2000", checked: false },
    {value: "Uniscape CAT tool", id: "uniscape-cat-tool", checked: false },
    {value: "VoxscribeCC", id: "voxscribecc", checked: false },
    {value: "WebTranslateIt.com", id: "webtranslateit", checked: false },
    {value: "Wincaps Q4", id: "wincaps-q4", checked: false },
    {value: "Wordbee", id: "wordbee", checked: false },
    {value: "Wordfast", id: "wordfast", checked: false },
    {value: "XTM", id: "xtm", checked: false }
  ];
  subject_areas: Array<any> = [
    {value: "Acting and Directing", id: "acting-and-directing", checked: false },
    {value: "Advertising", id: "advertising", checked: false },
    {value: "Aerospace Engineering", id: "aerospace-engineering", checked: false },
    {value: "Agriculture", id: "agriculture", checked: false },
    {value: "Agronomy and Crop Science", id: "agronomy-and-crop-science", checked: false },
    {value: "Aircraft", id: "aircraft", checked: false },
    {value: "Anatomy", id: "anatomy", checked: false },
    {value: "Animal Sciences", id: "animal-sciences", checked: false },
    {value: "Anthropology", id: "anthropology", checked: false },
    {value: "Applied Mathematics", id: "applied-mathematics", checked: false },
    {value: "Aquaculture", id: "aquaculture", checked: false },
    {value: "Archaeology", id: "archaeology", checked: false },
    {value: "Architecture", id: "architecture", checked: false },
    {value: "Art", id: "art", checked: false },
    {value: "Astronomy", id: "astronomy", checked: false },
    {value: "Astrophysics", id: "astrophysics", checked: false },
    {value: "Atmospheric Sciences and Meteorology", id: "atmospheric-sciences-and-meteorology", checked: false },
    {value: "Automotive", id: "automotive", checked: false },
    {value: "Aviation", id: "aviation", checked: false },
    {value: "Banking and Financial", id: "banking-and-financial", checked: false },
    {value: "Bible and Biblical Studies", id: "bible-and-biblical-studies", checked: false },
    {value: "Biochemistry", id: "biochemistry", checked: false },
    {value: "Bioengineering and Biomedical Engineering", id: "bioengineering-and-biomedical-engineering", checked: false },
    {value: "Biology", id: "biology", checked: false },
    {value: "Biomedical", id: "biomedical", checked: false },
    {value: "Biometrics", id: "biometrics", checked: false },
    {value: "Biophysics", id: "biophysics", checked: false },
    {value: "Biopsychology", id: "biopsychology", checked: false },
    {value: "Biostatistics", id: "biostatistics", checked: false },
    {value: "Biotechnology", id: "biotechnology", checked: false },
    {value: "Botany", id: "botany", checked: false },
    {value: "Broadcast Journalism", id: "broadcast-journalism", checked: false },
    {value: "Buildings", id: "buildings", checked: false },
    {value: "Business Administration and Management", id: "business-administration-and-management", checked: false },
    {value: "Business General", id: "business-general", checked: false },
    {value: "Business Marketing", id: "business-marketing", checked: false },
    {value: "Cartography", id: "cartography", checked: false },
    {value: "Ceramics Arts and Ceramics", id: "ceramics-arts-and-ceramics", checked: false },
    {value: "Chemical Technology and Related Industries", id: "chemical-technology-and-related-industries", checked: false },
    {value: "Chemistry", id: "chemistry", checked: false },
    {value: "Child Care", id: "child-care", checked: false },
    {value: "Civil Engineering", id: "civil-engineering", checked: false },
    {value: "Computer and Information Sciences", id: "computer-and-information-sciences", checked: false },
    {value: "Computer Engineering", id: "computer-engineering", checked: false },
    {value: "Computer Games and Gambling, Electronic Games, Games of Chance", id: "computer-games", checked: false },
    {value: "Criminology", id: "criminology", checked: false },
    {value: "Culinary Arts", id: "culinary-arts", checked: false },
    {value: "Data Communications", id: "data-communications", checked: false },
    {value: "Data Processing", id: "data-processing", checked: false },
    {value: "Design and Applied Arts", id: "design-and-applied-arts", checked: false },
    {value: "Desktop Publishing (DTP)", id: "desktop-publishing", checked: false },
    {value: "Ecology", id: "ecology", checked: false },
    {value: "Economics", id: "economics", checked: false },
    {value: "Education", id: "education", checked: false },
    {value: "Electrical Engineering", id: "electrical-engineering", checked: false },
    {value: "Engineering", id: "engineering", checked: false },
    {value: "Entomology", id: "entomology", checked: false },
    {value: "Entrepreneurship", id: "entrepreneurship", checked: false },
    {value: "Environmental Science", id: "environmental-science", checked: false },
    {value: "Ethnic and Cultural Studies", id: "ethnic-and-cultural-studies", checked: false },
    {value: "Fibre, Textile and Weaving", id: "fibre-textile-and-weaving", checked: false },
    {value: "Film and Cinema Studies", id: "film-and-cinema-studies", checked: false },
    {value: "Finance", id: "finance", checked: false },
    {value: "Fire Protection", id: "fire-protection", checked: false },
    {value: "Fishing and Fisheries Sciences", id: "fishing-and-fisheries-sciences", checked: false },
    {value: "Food Sciences", id: "food-sciences", checked: false },
    {value: "Forensic Science", id: "forensic-science", checked: false },
    {value: "Forestry", id: "forestry", checked: false },
    {value: "Genealogy/Family History Research", id: "genealogy-family-history-research", checked: false },
    {value: "General", id: "general", checked: false },
    {value: "Genetics", id: "genetics", checked: false },
    {value: "Geochemistry", id: "geochemistry", checked: false },
    {value: "Geography", id: "geography", checked: false },
    {value: "Geology", id: "geology", checked: false },
    {value: "Geophysics and Seismology", id: "geophysics-and-seismology", checked: false },
    {value: "Gerontology", id: "gerontology", checked: false },
    {value: "Health", id: "health", checked: false },
    {value: "Heating, Air Condition and Refrigeration", id: "heating-air-condition-and-refrigeration", checked: false },
    {value: "History", id: "history", checked: false },
    {value: "Hospitality", id: "hospitality", checked: false },
    {value: "Humanities and Humanistic Studies", id: "humanities-and-humanistic-studies", checked: false },
    {value: "Information Sciences and Systems", id: "information-sciences-and-systems", checked: false },
    {value: "Internet", id: "internet", checked: false },
    {value: "Islamic Studies", id: "islamic-studies", checked: false },
    {value: "Journalism and Mass Communication", id: "journalism-and-mass-communication", checked: false },
    {value: "Law and Legal", id: "law-and-legal", checked: false },
    {value: "Linguistics", id: "linguistics", checked: false },
    {value: "Literature", id: "literature", checked: false },
    {value: "Manufacturing (Metal Working and Products, Instruments, Furniture, Printing, Clothing, etc.)", id: "manufacturing", checked: false },
    {value: "Marine and Aquatic Biology", id: "marine-and-aquatic-biology", checked: false },
    {value: "Mathematics", id: "mathematics", checked: false },
    {value: "Mechanical Engineering", id: "mechanical-engineering", checked: false },
    {value: "Medicine ??? Acupuncture and Oriental Medicine", id: "medicine-acupuncture-and-oriental-medicine", checked: false },
    {value: "Medicine ??? Dentistry", id: "medicine-dentistry", checked: false },
    {value: "Medicine ??? Medical Technology", id: "medicine-medical-technology", checked: false },
    {value: "Medicine ??? Microbiology and Bacteriology", id: "medicine-microbiology-and-bacteriology", checked: false },
    {value: "Medicine ??? Neuroscience", id: "medicine-neuroscience", checked: false },
    {value: "Medicine ??? Nursing", id: "medicine-nursing", checked: false },
    {value: "Medicine ??? Occupational Health and Industrial Hygiene", id: "medicine-occupational-health-and-industrial-hygiene", checked: false },
    {value: "Medicine ??? Ophthalmology", id: "medicine-ophthalmology", checked: false },
    {value: "Medicine ??? Pharmacology", id: "medicine-pharmacology", checked: false },
    {value: "Medicine ??? Psychiatry", id: "medicine-psychiatry", checked: false },
    {value: "Medicine ??? Public Health Education and Promotion", id: "medicine-public-health-education-and-promotion", checked: false },
    {value: "Medicine ??? Social Psychology", id: "medicine-social-psychology", checked: false },
    {value: "Medicine ??? Toxicology", id: "medicine-toxicology", checked: false },
    {value: "Medicine (General)", id: "medicine-general", checked: false },
    {value: "Medieval and Renaissance Studies", id: "medieval-and-renaissance-studies", checked: false },
    {value: "Metallurgical Engineering", id: "metallurgical-engineering", checked: false },
    {value: "Military Technologies", id: "military-technologies", checked: false },
    {value: "Mining and Mineral Engineering", id: "mining-and-mineral-engineering", checked: false },
    {value: "Mining and Petroleum Technology", id: "mining-and-petroleum-technology", checked: false },
    {value: "Molecular Biology", id: "molecular-biology", checked: false },
    {value: "Music", id: "music", checked: false },
    {value: "Music History and Literature", id: "music-history-and-literature", checked: false },
    {value: "Naval Architecture And Marine Engineering", id: "naval-architecture-and-marine-engineering", checked: false },
    {value: "Nuclear Engineering", id: "nuclear-engineering", checked: false },
    {value: "Oceanography", id: "oceanography", checked: false },
    {value: "Oil and Gas Engineering", id: "oil-and-gas-engineering", checked: false },
    {value: "Optics", id: "optics", checked: false },
    {value: "Organic Chemistry", id: "organic-chemistry", checked: false },
    {value: "Patent Translation", id: "patent-translation", checked: false },
    {value: "Petrochemistry", id: "petrochemistry", checked: false },
    {value: "Petroleum Engineering", id: "petroleum-engineering", checked: false },
    {value: "Philosophy", id: "philosophy", checked: false },
    {value: "Photographic Arts", id: "photographic-arts", checked: false },
    {value: "Photography", id: "photography", checked: false },
    {value: "Physical and Theoretical Chemistry", id: "physical-and-theoretical-chemistry", checked: false },
    {value: "Physical Education Teaching and Coaching", id: "physical-education-teaching-and-coaching", checked: false },
    {value: "Physics", id: "physics", checked: false },
    {value: "Political Science", id: "political-science", checked: false },
    {value: "Polymer Chemistry", id: "polymer-chemistry", checked: false },
    {value: "Psychology", id: "psychology", checked: false },
    {value: "Radiation Biology", id: "radiation-biology", checked: false },
    {value: "Radio and Television Broadcasting", id: "radio-and-television-broadcasting", checked: false },
    {value: "Religion", id: "religion", checked: false },
    {value: "Religion and Religious Studies", id: "religion-and-religious-studies", checked: false },
    {value: "Science (General)", id: "science-general", checked: false },
    {value: "Sociology", id: "sociology", checked: false },
    {value: "Software Engineering", id: "software-engineering", checked: false },
    {value: "Sport and Fitness", id: "sport-and-fitness", checked: false },
    {value: "Taxation", id: "taxation", checked: false },
    {value: "Telecommunications", id: "telecommunications", checked: false },
    {value: "Textile Sciences and Engineering", id: "textile-sciences-and-engineering", checked: false },
    {value: "Theatre", id: "theatre", checked: false },
    {value: "Theology and Theological Studies", id: "theology-and-theological-studies", checked: false },
    {value: "Theoretical and Mathematical Physics", id: "theoretical-and-mathematical-physics", checked: false },
    {value: "Tourism and Travel", id: "tourism-and-travel", checked: false },
    {value: "Transportation", id: "transportation", checked: false },
    {value: "Veterinary", id: "veterinary", checked: false },
    {value: "Visual and Performing Arts", id: "visual-and-performing-arts", checked: false },
    {value: "Women Studies", id: "women-studies", checked: false },
    {value: "Zoology", id: "zoology", checked: false }
  ]
  languageList: Array<any> = [
    {name: "Abkhazian", value: "abkhazian"},
    {name: "Afar", value: "afar"},
    {name: "Afrikaans", value: "afrikaans"},
    {name: "Albanian", value: "albanian"},
    {name: "American Sign Language", value: "american-sign-language"},
    {name: "Amharic", value: "amharic"},
    {name: "Arabic", value: "arabic"},
    {name: "Aramaic", value: "aramaic"},
    {name: "Armenian", value: "armenian"},
    {name: "Assamese", value: "assamese"},
    {name: "Assyrian Neo-Aramaic", value: "assyrian-neo-aramaic"},
    {name: "Avestan", value: "avestan"},
    {name: "Aymara", value: "aymara"},
    {name: "Azerbaijani", value: "azerbaijani"},
    {name: "Bambara", value: "bambara"},
    {name: "Bashkir", value: "bashkir"},
    {name: "Basque", value: "basque"},
    {name: "Belarusian", value: "belarusian"},
    {name: "Bengali", value: "bengali"},
    {name: "Bihari", value: "bihari"},
    {name: "Bikol", value: "bikol"},
    {name: "Bislama", value: "bislama"},
    {name: "Bosnian", value: "bosnian"},
    {name: "Brazilian Portuguese", value: "brazilian-portuguese"},
    {name: "Breton", value: "breton"},
    {name: "Bulgarian", value: "bulgarian"},
    {name: "Burmese", value: "burmese"},
    {name: "Cantonese", value: "cantonese"},
    {name: "Cape Verdean Creole", value: "cape-verdean-creole"},
    {name: "Catalan", value: "catalan"},
    {name: "Cebuano", value: "cebuano"},
    {name: "Chamorro", value: "chamorro"},
    {name: "Chechen", value: "chechen"},
    {name: "Chinese", value: "chinese"},
    {name: "Chuukese", value: "chuukese"},
    {name: "Chuvash", value: "chuvash"},
    {name: "Cornish", value: "cornish"},
    {name: "Corsican", value: "corsican"},
    {name: "Croatian", value: "croatian"},
    {name: "Czech", value: "czech"},
    {name: "Danish", value: "danish"},
    {name: "Dari (Afghan Persian)", value: "dari-afghan-persian"},
    {name: "Dinka", value: "dinka"},
    {name: "Dioula", value: "dioula"},
    {name: "Dutch", value: "dutch"},
    {name: "Dzongkha", value: "dzongkha"},
    {name: "Edo", value: "edo"},
    {name: "Efik", value: "efik"},
    {name: "English", value: "english"},
    {name: "Esperanto", value: "esperanto"},
    {name: "Estonian", value: "estonian"},
    {name: "Faroese", value: "faroese"},
    {name: "Fiji", value: "fiji"},
    {name: "Finnish", value: "finnish"},
    {name: "Flemish", value: "flemish"},
    {name: "French", value: "french"},
    {name: "Frisian", value: "frisian"},
    {name: "Fula", value: "fula"},
    {name: "Galician", value: "galician"},
    {name: "Georgian", value: "georgian"},
    {name: "German", value: "german"},
    {name: "Greek", value: "greek"},
    {name: "Greenlandic", value: "greenlandic"},
    {name: "Guaran??", value: "guaran??"},
    {name: "Gujarati", value: "gujarati"},
    {name: "Haitian Creole", value: "haitian-creole"},
    {name: "Hausa", value: "hausa"},
    {name: "Hebrew", value: "hebrew"},
    {name: "Herero", value: "herero"},
    {name: "Hiligaynon", value: "hiligaynon"},
    {name: "Hindi", value: "hindi"},
    {name: "Hiri Motu", value: "hiri-motu"},
    {name: "Hmong", value: "hmong"},
    {name: "Hungarian", value: "hungarian"},
    {name: "Iban", value: "iban"},
    {name: "Icelandic", value: "icelandic"},
    {name: "Igbo", value: "igbo"},
    {name: "Ilocano", value: "ilocano"},
    {name: "Indonesian", value: "indonesian"},
    {name: "Interlingua", value: "interlingua"},
    {name: "Inuktitut", value: "inuktitut"},
    {name: "Inupiak", value: "inupiak"},
    {name: "Irish (Gaelic)", value: "irish-gaelic"},
    {name: "Italian", value: "italian"},
    {name: "Japanese", value: "japanese"},
    {name: "Javanese", value: "javanese"},
    {name: "Kannada", value: "kannada"},
    {name: "Kanuri", value: "kanuri"},
    {name: "Karen", value: "karen"},
    {name: "Kashmiri", value: "kashmiri"},
    {name: "Kazakh", value: "kazakh"},
    {name: "Khmer", value: "khmer"},
    {name: "K'iche'", value: "k'iche'"},
    {name: "Kichwa", value: "kichwa"},
    {name: "Kikuyu", value: "kikuyu"},
    {name: "Kinyarwanda", value: "kinyarwanda"},
    {name: "Kirghiz", value: "kirghiz"},
    {name: "Kirundi", value: "kirundi"},
    {name: "Komi", value: "komi"},
    {name: "Konkani", value: "konkani"},
    {name: "Korean", value: "korean"},
    {name: "Kpelle", value: "kpelle"},
    {name: "Kurdish", value: "kurdish"},
    {name: "Lao", value: "lao"},
    {name: "Latin", value: "latin"},
    {name: "Latvian", value: "latvian"},
    {name: "Lingala", value: "lingala"},
    {name: "Lithuanian", value: "lithuanian"},
    {name: "Luxemburgish", value: "luxemburgish"},
    {name: "Maay", value: "maay"},
    {name: "Macedonian", value: "macedonian"},
    {name: "Maithili", value: "maithili"},
    {name: "Malagasy", value: "malagasy"},
    {name: "Malay", value: "malay"},
    {name: "Malayalam", value: "malayalam"},
    {name: "Maldivian", value: "maldivian"},
    {name: "Maltese", value: "maltese"},
    {name: "Mandarin", value: "mandarin"},
    {name: "Maninka", value: "maninka"},
    {name: "Manx Gaelic", value: "manx-gaelic"},
    {name: "Maori", value: "maori"},
    {name: "Marathi", value: "marathi"},
    {name: "Marshallese", value: "marshallese"},
    {name: "Moldovan", value: "moldovan"},
    {name: "Mongolian", value: "mongolian"},
    {name: "Nauru", value: "nauru"},
    {name: "Navajo", value: "navajo"},
    {name: "Ndebele", value: "ndebele"},
    {name: "Ndonga", value: "ndonga"},
    {name: "Nepali", value: "nepali"},
    {name: "Norwegian", value: "norwegian"},
    {name: "Norwegian (Nynorsk)", value: "norwegian-nynorsk"},
    {name: "Nyanja", value: "nyanja"},
    {name: "Occitan", value: "occitan"},
    {name: "Oriya", value: "oriya"},
    {name: "Oromo", value: "oromo"},
    {name: "Ossetian", value: "ossetian"},
    {name: "Pali", value: "pali"},
    {name: "Pangasinan", value: "pangasinan"},
    {name: "Papiamento", value: "papiamento"},
    {name: "Pashto", value: "pashto"},
    {name: "Persian (Farsi)", value: "persian-farsi"},
    {name: "Polish", value: "polish"},
    {name: "Portuguese", value: "portuguese"},
    {name: "Punjabi", value: "punjabi"},
    {name: "Quechua", value: "quechua"},
    {name: "Rohingya", value: "rohingya"},
    {name: "Romanian", value: "romanian"},
    {name: "Romany", value: "romany"},
    {name: "Russian", value: "russian"},
    {name: "S??mi", value: "s??mi"},
    {name: "Samoan", value: "samoan"},
    {name: "Sangho", value: "sangho"},
    {name: "Sanskrit", value: "sanskrit"},
    {name: "Sardinian", value: "sardinian"},
    {name: "Scots Gaelic", value: "scots-gaelic"},
    {name: "Serbian", value: "serbian"},
    {name: "Serbo-Croatian", value: "serbo-croatian"},
    {name: "Sesotho", value: "sesotho"},
    {name: "Setswana", value: "setswana"},
    {name: "Shona", value: "shona"},
    {name: "Sindhi", value: "sindhi"},
    {name: "Sinhala", value: "sinhala"},
    {name: "Siswati", value: "siswati"},
    {name: "Slovak", value: "slovak"},
    {name: "Slovene", value: "slovene"},
    {name: "Somali", value: "somali"},
    {name: "Southern Ndebele", value: "southern-ndebele"},
    {name: "Spanish", value: "spanish"},
    {name: "Sundanese", value: "sundanese"},
    {name: "Swahili", value: "swahili"},
    {name: "Swedish", value: "swedish"},
    {name: "Tagalog", value: "tagalog"},
    {name: "Tahitian", value: "tahitian"},
    {name: "Tajik", value: "tajik"},
    {name: "Tamil", value: "tamil"},
    {name: "Tatar", value: "tatar"},
    {name: "Telugu", value: "telugu"},
    {name: "Tetum", value: "tetum"},
    {name: "Thai", value: "thai"},
    {name: "Tibetan", value: "tibetan"},
    {name: "Tigrinya", value: "tigrinya"},
    {name: "Tongan", value: "tongan"},
    {name: "Tsonga", value: "tsonga"},
    {name: "Turkish", value: "turkish"},
    {name: "Turkmen", value: "turkmen"},
    {name: "Twi", value: "twi"},
    {name: "Uigur", value: "uigur"},
    {name: "Ukrainian", value: "ukrainian"},
    {name: "Urdu", value: "urdu"},
    {name: "Uzbek", value: "uzbek"},
    {name: "Vietnamese", value: "vietnamese"},
    {name: "Volap??k", value: "volap??k"},
    {name: "Welsh", value: "welsh"},
    {name: "Wolof", value: "wolof"},
    {name: "Xhosa", value: "xhosa"},
    {name: "Yiddish", value: "yiddish"},
    {name: "Yoruba", value: "yoruba"},
    {name: "Zhuang", value: "zhuang"},
    {name: "Zulu", value: "zulu"}
  ];

  jobTypes: Array<any> = [
    {name: "Closed captioning ", value: "Closed captioning "},
    {name: "Copywriting ", value: "Copywriting "},
    {name: "Desktop publishing ", value: "Desktop publishing "},
    {name: "Editing ", value: "Editing "},
    {name: "Interpreting ", value: "Interpreting "},
    {name: "Interpreting ??? conference ", value: "Interpreting ??? conference "},
    {name: "Interpreting ??? court/legal ", value: "Interpreting ??? court/legal "},
    {name: "Interpreting ??? medical ", value: "Interpreting ??? medical "},
    {name: "Interpreting ??? phone ", value: "Interpreting ??? phone "},
    {name: "Interpreting ??? sign language ", value: "Interpreting ??? sign language "},
    {name: "Localization ", value: "Localization "},
    {name: "Project management ", value: "Project management "},
    {name: "Proofreading ", value: "Proofreading "},
    {name: "Research ", value: "Research "},
    {name: "Subtitling ", value: "Subtitling "},
    {name: "Teaching ", value: "Teaching "},
    {name: "Technical Review ", value: "Technical Review "},
    {name: "Technical writing ", value: "Technical writing "},
    {name: "Terminology research ", value: "Terminology research "},
    {name: "Transcription ", value: "Transcription "},
    {name: "Translation ", value: "Translation "},
    {name: "Typesetting ", value: "Typesetting "},
    {name: "Voice-over", value: "Voice-over"}
  ]

  currency: Array<any> = [
    {name: "Euro", value: "Euro"},
    {name: "US dollars", value: "US dollars"},
    {name: "Canadian dollars", value: "Canadian dollars"},
    {name: "British pounds", value: "British pounds"},
    {name: "Japanese yen", value: "Japanese yen"},
    {name: "Algerian dinars", value: "Algerian dinars"},
    {name: "Argentine pesos", value: "Argentine pesos"},
    {name: "Australian dollars", value: "Australian dollars"},
    {name: "Bahamian dollars", value: "Bahamian dollars"},
    {name: "Barbadian dollar", value: "Barbadian dollar"},
    {name: "Bermudian dollar", value: "Bermudian dollar"},
    {name: "Brazilian real", value: "Brazilian real"},
    {name: "Bulgarian leva", value: "Bulgarian leva"},
    {name: "Chilean pesos", value: "Chilean pesos"},
    {name: "Chinese yuan", value: "Chinese yuan"},
    {name: "Czech koruny", value: "Czech koruny"},
    {name: "Danish kroner", value: "Danish kroner"},
    {name: "Egyptian pounds", value: "Egyptian pounds"},
    {name: "Fijian dollars", value: "Fijian dollars"},
    {name: "Hong Kong dollars", value: "Hong Kong dollars"},
    {name: "Hungarian forint", value: "Hungarian forint"},
    {name: "Icelandic kr??nur", value: "Icelandic kr??nur"},
    {name: "Indian rupees", value: "Indian rupees"},
    {name: "Indonesian rupiahs", value: "Indonesian rupiahs"},
    {name: "Israeli new shekels", value: "Israeli new shekels"},
    {name: "Jamaican dollars", value: "Jamaican dollars"},
    {name: "Jordanian dinars", value: "Jordanian dinars"},
    {name: "Latvian lats", value: "Latvian lats"},
    {name: "Lebanese pounds", value: "Lebanese pounds"},
    {name: "Lithuanian litas", value: "Lithuanian litas"},
    {name: "Malaysian ringgits", value: "Malaysian ringgits"},
    {name: "Mexican pesos", value: "Mexican pesos"},
    {name: "New Taiwan dollars", value: "New Taiwan dollars"},
    {name: "New Zealand dollars", value: "New Zealand dollars"},
    {name: "Norway Kroner", value: "Norway Kroner"},
    {name: "Pakistani rupees", value: "Pakistani rupees"},
    {name: "Philippine pesos", value: "Philippine pesos"},
    {name: "Polish zlotych", value: "Polish zlotych"},
    {name: "Romanian leu", value: "Romanian leu"},
    {name: "Russian rubles", value: "Russian rubles"},
    {name: "Saudi riyals", value: "Saudi riyals"},
    {name: "Singapore dollars", value: "Singapore dollars"},
    {name: "South African rand", value: "South African rand"},
    {name: "South Korean won", value: "South Korean won"},
    {name: "Swedish kronor", value: "Swedish kronor"},
    {name: "Swiss francs", value: "Swiss francs"},
    {name: "Thai baht", value: "Thai baht"},
    {name: "Turkish liras", value: "Turkish liras"},
    {name: "Ukrainian hryvnia", value: "Ukrainian hryvnia"}
  ]
}
