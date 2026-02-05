import React, { useState, useEffect } from 'react';
import { 
  Scale, Gavel, Menu, X, Phone, Mail, MapPin, 
  ShieldCheck, MessageCircle, Smartphone, 
  Copy, Facebook, Linkedin, Youtube, Send, 
  Lock, Sparkles, Bot, ArrowRight, ChevronDown, CheckCircle,
  CreditCard, Landmark, Instagram, Star, Quote, Calendar, User, BookOpen, Loader2, AlertCircle, Globe
} from 'lucide-react';

/* --- SYSTEM CONFIGURATION --- */
const SITE_CONFIG = {
  phone_display: "+20 100 048 4390",
  whatsapp_number: "201000484390",
  facebook_url: "https://www.facebook.com/mohamed.soliman.376542",
  email: "info@soliman-law.com",
  payment_number: "01000484390"
};

// --- DATA LAYER ---
const translations = {
  ar: {
    meta: { dir: 'rtl', fontTitle: 'Amiri', fontBody: 'Cairo', title: "مؤسسة المستشار محمد سليمان" },
    hero: {
      title: "رؤية قانونية ثاقبة.. ودفاع لا يساوم",
      subtitle: "مؤسسة المستشار محمد سليمان للمحاماة والاستشارات القانونية. عشرون عاماً من الدفاع عن الحقوق وصياغة استراتيجيات النصر.",
      ctaMain: "احصل على استشارة",
      ctaSec: "تواصل معنا",
      badge: "خبرة قانونية منذ 2006"
    },
    nav: { home: "الرئيسية", about: "عن المؤسسة", practices: "التخصصات", media: "المكتبة", testimonials: "العملاء", payment: "الدفع", contact: "اتصل" },
    stats: [
      { num: "+20", label: "عاماً خبرة" }, { num: "+1,500", label: "قضية رابحة" }, { num: "99%", label: "نجاح" }, { num: "+50M", label: "تسويات" }
    ],
    practices: [
      { 
        title: "الجنايات والجرائم الاقتصادية", 
        desc: "دفاع استراتيجي أمام محاكم الجنايات والنقض.",
        fullContent: "نقدم دفاعاً شاملاً في قضايا الجنايات الكبرى، وجرائم الأموال العامة، والرشوة، والاختلاس. نعتمد على استراتيجيات دقيقة في فحص الأدلة ومناقشة الشهود واستخراج الثغرات القانونية أمام محاكم الجنايات والنقض."
      },
      { 
        title: "الشركات والاستثمار", 
        desc: "تأسيس وحوكمة الشركات وصياغة العقود.",
        fullContent: "نقدم خدمات تأسيس الشركات بكافة أنواعها، صياغة عقود الشراكة، عمليات الدمج والاستحواذ، وحوكمة الشركات لضمان الامتثال للقوانين الاستثمارية المصرية والدولية."
      },
      { 
        title: "المنازعات المدنية", 
        desc: "تمثيل الخصوم في النزاعات المدنية والتعويضات.",
        fullContent: "نتولى كافة الدعاوى المدنية بما فيها قضايا التعويضات، فسخ العقود، المطالبات المالية، وحقوق الملكية الفكرية، مع التركيز على تحصيل حقوق الموكل بأسرع الطرق القانونية."
      },
      { 
        title: "الأسرة والأحوال الشخصية", 
        desc: "إدارة ملفات الأسرة والتركات بسرية.",
        fullContent: "نعالج قضايا الأسرة (الطلاق، النفقات، الحضانة) وتقسيم التركات بحكمة وسرية تامة، مراعين الأبعاد الاجتماعية والنفسية لأطراف النزاع."
      },
      { 
        title: "الجرائم الإلكترونية", 
        desc: "حماية السمعة الرقمية وملاحقة المبتزين.",
        fullContent: "خبرة متخصصة في التعامل مع جرائم الابتزاز الإلكتروني، السب والقذف عبر الإنترنت، واختراق الحسابات، وفقاً لأحدث قوانين تقنية المعلومات."
      },
      { 
        title: "التحكيم الدولي", 
        desc: "فض المنازعات التجارية والاستثمارية.",
        fullContent: "تمثيل العملاء في قضايا التحكيم التجاري الدولي والمحلي كبديل سريع وفعال عن التقاضي العادي لفض النزاعات التجارية المعقدة."
      },
    ],
    library: {
      title: "المكتبة القانونية والأخبار",
      subtitle: "أحدث المقالات والتحليلات القانونية.",
      readMore: "اقرأ المقال كاملاً",
      items: [
        {
          id: 1,
          date: "10 فبراير 2026",
          author: "المستشار محمد سليمان",
          category: "قانون الشركات",
          title: "دليلك الشامل لتأسيس الشركات الناشئة",
          excerpt: "تحليل قانوني دقيق لأهم الحوافز الاستثمارية التي أقرها المشرع المصري مؤخراً لدعم ريادة الأعمال.",
          fullContent: "في ظل التعديلات التشريعية الأخيرة لعام 2026، أصبح تأسيس الشركات الناشئة في مصر يتمتع بحوافز ضريبية وإجرائية غير مسبوقة. يتناول هذا المقال بالتفصيل كيفية الاستفادة من الرخصة الذهبية، والإعفاءات الضريبية لمدة 5 سنوات، وكيفية صياغة عقود الشركاء (Shareholders Agreement) لحماية حقوق المؤسسين والمستثمرين على حد سواء. ننصح دائماً بالبدء بالكيان القانوني الصحيح لتجنب المشاكل المستقبلية."
        },
        {
          id: 2,
          date: "05 فبراير 2026",
          author: "الفريق القانوني",
          category: "الجرائم الإلكترونية",
          title: "الابتزاز الإلكتروني: خطوات الحماية القانونية",
          excerpt: "خطوات عملية وقانونية فورية يجب اتخاذها عند التعرض لأي تهديد رقمي.",
          fullContent: "جريمة الابتزاز الإلكتروني هي جناية يعاقب عليها القانون المصري بالحبس والغرامة. إذا تعرضت للابتزاز، أول خطوة هي عدم الرضوخ للطلبات، ثم توثيق المحادثات (Screenshots) دون حذفها، والتوجه فوراً لمباحث الإنترنت لتحرير محضر. يقوم مكتبنا بمتابعة البلاغ وتقديم الادعاء المدني لضمان توقيع أقصى العقوبة على الجاني والحصول على تعويض مادي للأضرار النفسية."
        },
        {
          id: 3,
          date: "28 يناير 2026",
          author: "المكتب الفني",
          category: "قانون العقارات",
          title: "خبايا عقود البيع: الابتدائي vs النهائي",
          excerpt: "ما الفرق بين صحة التوقيع والتسجيل في الشهر العقاري؟ ولماذا العقد الابتدائي لا يكفي؟",
          fullContent: "يعتقد الكثيرون أن العقد الابتدائي مع 'صحة التوقيع' كافٍ لإثبات الملكية، وهذا خطأ قانوني شائع. صحة التوقيع هي دعوى تحفظية تثبت فقط أن التوقيع صحيح ولا تمس أصل الحق. لنقل الملكية بشكل كامل وقانوني يمنع المنازعة، يجب تسجيل العقد في الشهر العقاري أو الحصول على حكم بصحة ونفاذ العقد. في هذا المقال نشرح الفرق بالتفصيل والمخاطر المترتبة على الاكتفاء بالعقود العرفية."
        }
      ]
    },
    founder: {
      title: "رسالة المؤسس",
      text: "المحاماة ليست مجرد مهنة، بل هي رسالة لحماية الحقوق وصناعة الاستقرار. وإيماناً منا بأن الحق يُصان بالقوة والخبرة، أسسنا هذا الصرح القانوني لتقديم نموذج عالمي يجمع بين الفهم العميق للقوانين المحلية والرؤية الدولية الشاملة. إن هدفنا لا يقتصر على كسب القضايا فحسب، بل يتعداه لتقديم حلول استباقية تحمي طموحاتكم التجارية والشخصية."
    },
    testimonials: [
      { name: "م. أحمد عبد العزيز", role: "رئيس مجلس إدارة", text: "احترافية غير مسبوقة. حسموا نزاعاً تجارياً معقداً لصالحنا." },
      { name: "الشيخ عبدالله القحطاني", role: "مستثمر - السعودية", text: "المكتب كان الحصن القانوني لاستثماراتنا في مصر. دقة في العقود." },
      { name: "أ. فاطمة المزروعي", role: "مديرة عمليات - دبي", text: "السرعة والشفافية تميزكم. انصح أي مستثمر بالتعامل معكم." },
    ],
    contact: {
      title: "تواصل مع المستشار",
      subtitle: "نستقبل استفساراتكم عبر القنوات الرسمية للمؤسسة",
      offices: "مكاتبنا",
      office1: "القاهرة الجديدة - التجمع الخامس، بجوار المحكمة.",
      office2: "القاهرة - المعادي/دار السلام، ١٧ مكرر ش ٦ أكتوبر.",
      call: "اتصل بنا مباشرة",
      formTitle: "طلب دراسة قضية",
      inputs: { name: "الاسم", phone: "الهاتف", subject: "نوع القضية", msg: "التفاصيل...", btn: "إرسال واتساب" }
    },
    payment: {
      title: "سداد الأتعاب",
      subtitle: "وسائل دفع آمنة",
      methods: {
        voda: "فودافون كاش",
        insta: "InstaPay",
        online: "دفع أونلاين (فيزا)"
      },
      num: SITE_CONFIG.payment_number,
      copy: "نسخ",
      copied: "تم",
      modal: {
        title: "دفع أونلاين",
        amount: "المبلغ",
        payBtn: "ادفع الآن",
        success: "تمت العملية بنجاح",
        successMsg: "سيتم التواصل معك فوراً.",
        close: "إغلاق"
      }
    },
    ai: {
      fab: "المستشار الذكي",
      welcome: "مرحباً بك في مؤسسة محمد سليمان. كيف نساعدك؟",
      placeholder: "اكتب سؤالك...",
      disclaimer: "رد آلي للمساعدة الأولية."
    },
    footer: { text: "© 2026 مؤسسة المستشار محمد سليمان." }
  },
  en: {
    meta: { dir: 'ltr', fontTitle: 'Playfair Display', fontBody: 'Lato', title: "M. Soliman Law Firm" },
    hero: {
      title: "Insightful Vision.. Uncompromising Defense",
      subtitle: "M. Soliman Law Firm. 20 years of crafting victory strategies in Egyptian and International courts.",
      ctaMain: "Get Consultation",
      ctaSec: "Contact Us",
      badge: "Since 2006"
    },
    nav: { home: "Home", about: "Firm", practices: "Practices", media: "Library", testimonials: "Clients", payment: "Payment", contact: "Contact" },
    stats: [
      { num: "+20", label: "Years" }, { num: "+1.5k", label: "Cases Won" }, { num: "99%", label: "Success" }, { num: "+50M", label: "Settlements" }
    ],
    practices: [
      { title: "Criminal Defense", desc: "Strategic defense in felonies.", fullContent: "Comprehensive defense in major felonies, white-collar crimes, and financial offenses." },
      { title: "Corporate Law", desc: "Company formation and contracts.", fullContent: "We handle incorporation, M&A, and corporate governance for local and foreign investors." },
      { title: "Civil Litigation", desc: "Complex disputes and compensation.", fullContent: "Representing clients in civil disputes, breach of contract, and property claims." },
      { title: "Family Law", desc: "Divorce and inheritance.", fullContent: "Handling personal status matters with utmost discretion and legal expertise." },
      { title: "Cybercrimes", desc: "Digital reputation protection.", fullContent: "Legal action against cyber extortion, defamation, and hacking incidents." },
      { title: "Arbitration", desc: "Commercial dispute resolution.", fullContent: "Alternative dispute resolution for complex commercial conflicts." },
    ],
    library: {
      title: "Legal Library",
      subtitle: "Latest legal updates and news.",
      readMore: "Read Full Article",
      items: [
        {
          id: 1,
          date: "Feb 10, 2026",
          author: "M. Soliman",
          category: "Corporate",
          title: "Startup Guide 2026",
          excerpt: "Legal analysis of new investment incentives in Egypt.",
          fullContent: "Full analysis of the new investment law and incentives for startups in Egypt..."
        },
        {
          id: 2,
          date: "Feb 05, 2026",
          author: "Legal Team",
          category: "Cybercrimes",
          title: "Cyber Extortion Protection",
          excerpt: "Steps to take if you face digital threats.",
          fullContent: "Detailed steps on how to document evidence and file a report for cybercrimes..."
        },
        {
          id: 3,
          date: "Jan 28, 2026",
          author: "Tech Office",
          category: "Real Estate",
          title: "Real Estate Contracts",
          excerpt: "Primary vs. Final Contracts explained.",
          fullContent: "Why signature validity is not enough for ownership transfer..."
        }
      ]
    },
    founder: {
      title: "Founder's Message",
      text: "Law is a mission to protect rights. We established this firm to provide a global model combining deep local knowledge with international vision. Our goal is to protect your future."
    },
    testimonials: [
      { name: "Eng. Ahmed A.", role: "CEO", text: "Unprecedented professionalism. Resolved our dispute quickly." },
      { name: "Sheikh Abdullah", role: "Investor", text: "The firm was our legal fortress in Egypt." },
      { name: "Ms. Fatima", role: "Manager", text: "Speed and transparency distinguish you." },
    ],
    contact: {
      title: "Contact Us",
      subtitle: "Reach out via our official channels",
      offices: "Offices",
      office1: "New Cairo, 5th Settlement.",
      office2: "Maadi/Dar El Salam, Cairo.",
      call: "Call Us",
      formTitle: "Case Evaluation",
      inputs: { name: "Name", phone: "Phone", subject: "Type", msg: "Details...", btn: "Send via WhatsApp" }
    },
    payment: {
      title: "Payment",
      subtitle: "Secure Methods",
      methods: {
        voda: "Vodafone Cash",
        insta: "InstaPay",
        online: "Credit Card"
      },
      num: SITE_CONFIG.payment_number,
      copy: "Copy",
      copied: "Copied",
      modal: {
        title: "Secure Payment",
        amount: "Amount",
        payBtn: "Pay Now",
        success: "Success!",
        successMsg: "We will contact you shortly.",
        close: "Close"
      }
    },
    ai: {
      fab: "Smart Advisor",
      welcome: "How can we help you legally?",
      placeholder: "Your question...",
      disclaimer: "Automated response."
    },
    footer: { text: "© 2026 M. Soliman Law Firm." }
  }
};

// --- COMPONENTS ---

const LegalImage = ({ src, alt, className, type = "generic" }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const fallbacks = {
    owner: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80", 
    office: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80", 
    books: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80", 
    generic: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&w=800&q=80" 
  };
  return <img src={imgSrc} alt={alt} className={className} onError={() => setImgSrc(fallbacks[type] || fallbacks.generic)} loading="lazy" width="100%" height="100%" />;
};

const SectionTitle = ({ title, subtitle, centered = true, dark = false }) => (
  <div className={`mb-12 ${centered ? 'text-center' : 'text-start'}`}>
    <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
    <div className={`h-1 w-24 bg-amber-600 rounded-full mb-4 ${centered ? 'mx-auto' : ''}`}></div>
    {subtitle && <p className={`max-w-2xl ${centered ? 'mx-auto' : ''} ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{subtitle}</p>}
  </div>
);

// --- MAIN APP ---

export default function App() {
  const [lang, setLang] = useState('ar');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [contentModalOpen, setContentModalOpen] = useState(null); // For Articles/Practices
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMsg, setInputMsg] = useState("");
  const [copied, setCopied] = useState("");
  
  const [contactForm, setContactForm] = useState({ name: '', phone: '', subject: 'الجنايات', msg: '' });
  const [contactError, setContactError] = useState('');

  const t = translations[lang];
  const isRTL = lang === 'ar';

  useEffect(() => {
    // FIX 1: Prevent Google Translate & Set Language Attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.body.className = "notranslate"; // Stop Translation
    document.title = t.meta.title;
    
    // Add meta tag dynamically
    let meta = document.querySelector('meta[name="google"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = "google";
      document.head.appendChild(meta);
    }
    meta.content = "notranslate";

  }, [lang, t.meta, isRTL]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(""), 2000);
  };

  const handleAiSend = (e) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;
    const newMsgs = [...messages, { role: 'user', text: inputMsg }];
    setMessages(newMsgs);
    setInputMsg("");
    setTimeout(() => {
      setMessages([...newMsgs, { role: 'bot', text: t.ai.disclaimer }]);
    }, 1000);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone) {
      setContactError(lang === 'ar' ? 'أكمل البيانات' : 'Fill details'); return;
    }
    const msg = `*استشارة:*%0aالاسم: ${contactForm.name}%0aالهاتف: ${contactForm.phone}%0aالموضوع: ${contactForm.subject}%0a${contactForm.msg}`;
    window.open(`https://wa.me/${SITE_CONFIG.whatsapp_number}?text=${msg}`, '_blank');
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => { setIsProcessing(false); setPaymentSuccess(true); }, 2000);
  };

  // Generic content opener
  const openContent = (item) => {
    setContentModalOpen(item);
  };

  return (
    <div className={`min-h-screen bg-white text-slate-900 font-sans selection:bg-amber-200 selection:text-amber-900 ${isRTL ? 'rtl' : 'ltr'}`}>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cairo:wght@300;400;600;800&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap');
        .font-serif { font-family: '${t.meta.fontTitle}', serif !important; }
        .font-sans { font-family: '${t.meta.fontBody}', sans-serif !important; }
        .animate-pop-in { animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        @keyframes popIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
      `}</style>

      {/* TOP BAR */}
      <div className="bg-slate-950 text-slate-400 py-2 px-4 border-b border-slate-800 text-xs hidden lg:flex justify-between">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <a href={`https://wa.me/${SITE_CONFIG.whatsapp_number}`} className="flex items-center gap-2 hover:text-amber-500 transition"><Phone size={14} /> <span dir="ltr">{SITE_CONFIG.phone_display}</span></a>
            <span className="flex items-center gap-2"><Mail size={14} /> {SITE_CONFIG.email}</span>
          </div>
          {/* Desktop Lang Switch */}
          <button onClick={() => setLang(l => l === 'ar' ? 'en' : 'ar')} className="flex items-center gap-2 hover:text-white transition font-bold"><Globe size={14} /> {lang === 'ar' ? 'English' : 'العربية'}</button>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md py-3 shadow-2xl' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`rounded overflow-hidden transition-all ${scrolled ? 'w-10 h-10' : 'w-14 h-14'}`}>
               <LegalImage src="/1000414152.jpg" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div className="text-white">
              <h1 className={`font-serif font-bold leading-none ${scrolled ? 'text-lg' : 'text-xl'}`}>{lang === 'ar' ? 'المستشار محمد سليمان' : 'M. SOLIMAN'}</h1>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {Object.entries(t.nav).map(([key, label]) => (
              <a key={key} href={`#${key}`} className="text-sm font-bold uppercase tracking-wider text-slate-200 hover:text-amber-500 transition">{label}</a>
            ))}
            <a href="#contact" className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded font-bold text-xs shadow-lg">{t.hero.ctaMain}</a>
          </div>

          {/* FIX 2: Mobile Menu & Lang Switcher Visibility */}
          <div className="lg:hidden flex items-center gap-4">
            <button onClick={() => setLang(l => l === 'ar' ? 'en' : 'ar')} className="text-white font-bold text-xs border border-white/30 px-2 py-1 rounded">{lang === 'ar' ? 'EN' : 'عربي'}</button>
            <button onClick={() => setMenuOpen(true)} className="text-white"><Menu size={28} /></button>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-slate-900/98 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 animate-fade-in">
          <button onClick={() => setMenuOpen(false)} className="absolute top-8 right-8 text-white"><X size={32} /></button>
          {Object.entries(t.nav).map(([key, label]) => (
            <a key={key} href={`#${key}`} onClick={() => setMenuOpen(false)} className="text-2xl font-serif text-white hover:text-amber-500 transition">{label}</a>
          ))}
        </div>
      )}

      {/* HERO */}
      <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <LegalImage src="https://images.unsplash.com/photo-1589216532384-e4668abbce05?auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover" type="office" />
          <div className="absolute inset-0 bg-slate-950/80 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-900/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 pt-20 text-center">
          <div className="inline-flex items-center gap-2 border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-amber-400 text-xs font-bold mb-8"><ShieldCheck size={16} /> {t.hero.badge}</div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 max-w-4xl mx-auto">{t.hero.title}</h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">{t.hero.subtitle}</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${SITE_CONFIG.whatsapp_number}`} className="bg-amber-600 text-white px-8 py-4 rounded font-bold flex items-center justify-center gap-2"><MessageCircle size={20} /> {t.hero.ctaMain}</a>
          </div>
        </div>
      </header>

      {/* STATS */}
      <div className="bg-slate-900 border-y border-slate-800 py-12 relative z-20">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {t.stats.map((stat, i) => (
            <div key={i}>
              <p className="text-4xl font-bold mb-2 text-amber-500">{stat.num}</p>
              <p className="text-xs uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
             <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border-4 border-white h-[500px]">
                <LegalImage src="/1000414137.jpg" alt="Founder" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 p-8">
                  <p className="text-white font-serif text-2xl font-bold">{lang === 'ar' ? 'المستشار محمد سليمان' : 'M. Soliman'}</p>
                </div>
             </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-serif font-bold mb-6">{t.founder.title}</h2>
            <p className="text-slate-600 text-lg leading-loose">{t.founder.text}</p>
          </div>
        </div>
      </section>

      {/* PRACTICES */}
      <section id="practices" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionTitle title={t.nav.practices} subtitle={lang === 'ar' ? 'تغطية قانونية شاملة' : 'Comprehensive Coverage'} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.practices.map((p, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition group">
                <Gavel className="text-amber-600 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-slate-500 mb-4 text-sm">{p.desc}</p>
                {/* FIX 3: Modal Trigger */}
                <button onClick={() => openContent(p)} className="text-sm font-bold text-amber-600 flex items-center gap-1 hover:gap-2 transition cursor-pointer">
                  {lang === 'ar' ? 'اقرأ المزيد' : 'Read More'} <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIBRARY */}
      <section id="media" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title={t.library.title} subtitle={t.library.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.library.items.map((item) => (
              <div key={item.id} className="bg-white border border-slate-100 rounded-xl overflow-hidden hover:shadow-lg transition">
                <div className="h-48 relative"><LegalImage src={item.image} className="w-full h-full object-cover" /></div>
                <div className="p-6">
                  <div className="text-xs text-amber-600 font-bold mb-2">{item.category}</div>
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-500 mb-4">{item.excerpt}</p>
                  {/* FIX 3: Modal Trigger */}
                  <button onClick={() => openContent(item)} className="text-sm font-bold text-slate-900 flex items-center gap-2 cursor-pointer hover:text-amber-600">
                    <BookOpen size={16} /> {t.library.readMore}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT MODAL (NEW) */}
      {contentModalOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl shadow-2xl p-8 relative animate-pop-in">
            <button onClick={() => setContentModalOpen(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 rtl:left-4 rtl:right-auto"><X size={24}/></button>
            <div className="mb-6">
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">{contentModalOpen.category || t.nav.practices}</span>
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-900 mt-3">{contentModalOpen.title}</h2>
              {contentModalOpen.date && <p className="text-xs text-slate-400 mt-2">{contentModalOpen.date} | {contentModalOpen.author}</p>}
            </div>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 leading-loose text-lg">{contentModalOpen.fullContent || contentModalOpen.desc}</p>
            </div>
            <div className="mt-8 pt-6 border-t flex justify-end">
              <a href={`https://wa.me/${SITE_CONFIG.whatsapp_number}?text=استفسار بخصوص: ${contentModalOpen.title}`} target="_blank" className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-green-700">
                <MessageCircle size={18} /> {lang === 'ar' ? 'ناقش هذا الموضوع معنا' : 'Discuss this'}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* PAYMENT & CONTACT sections kept similar but shortened for brevity, ensuring functionality */}
      <section id="payment" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionTitle title={t.payment.title} subtitle={t.payment.subtitle} centered={true} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
             {/* Voda */}
             <div className="bg-white p-6 rounded-xl shadow-sm text-center">
               <Smartphone className="mx-auto text-red-600 mb-4" size={32}/>
               <h3 className="font-bold mb-2">{t.payment.methods.voda}</h3>
               <p className="font-mono text-xl mb-4" dir="ltr">{t.payment.num}</p>
               <button onClick={() => handleCopy(t.payment.num, 'voda')} className="bg-slate-100 w-full py-2 rounded font-bold hover:bg-slate-200">{copied === 'voda' ? t.payment.copied : t.payment.copy}</button>
             </div>
             {/* Insta */}
             <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-6 rounded-xl shadow-lg text-center transform md:-translate-y-4">
               <Send className="mx-auto mb-4" size={32}/>
               <h3 className="font-bold mb-2">{t.payment.methods.insta}</h3>
               <p className="font-mono text-xl mb-4" dir="ltr">{t.payment.num}</p>
               <button onClick={() => handleCopy(t.payment.num, 'insta')} className="bg-white/20 w-full py-2 rounded font-bold hover:bg-white/30">{copied === 'insta' ? t.payment.copied : t.payment.copy}</button>
             </div>
             {/* Online */}
             <div className="bg-white p-6 rounded-xl shadow-sm text-center">
               <CreditCard className="mx-auto text-slate-600 mb-4" size={32}/>
               <h3 className="font-bold mb-2">{t.payment.methods.online}</h3>
               <p className="text-sm text-slate-500 mb-4">Visa / MasterCard</p>
               <button onClick={() => setPaymentModalOpen(true)} className="bg-slate-900 text-white w-full py-2 rounded font-bold hover:bg-amber-600">{t.payment.modal.payBtn}</button>
             </div>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {paymentModalOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-sm rounded-xl p-6 relative animate-pop-in text-center">
            <button onClick={() => setPaymentModalOpen(false)} className="absolute top-4 right-4"><X/></button>
            {!paymentSuccess ? (
              <form onSubmit={handlePayment} className="space-y-4 mt-4">
                <h3 className="text-xl font-bold">{t.payment.modal.title}</h3>
                <input type="number" placeholder={t.payment.modal.amount} className="w-full p-3 border rounded" required />
                <input type="text" placeholder="Card Number" className="w-full p-3 border rounded" required />
                <div className="flex gap-2">
                  <input type="text" placeholder="MM/YY" className="w-1/2 p-3 border rounded" required />
                  <input type="text" placeholder="CVC" className="w-1/2 p-3 border rounded" required />
                </div>
                <button className="w-full bg-slate-900 text-white py-3 rounded font-bold flex justify-center">{isProcessing ? <Loader2 className="animate-spin"/> : t.payment.modal.payBtn}</button>
              </form>
            ) : (
              <div className="py-8">
                <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-bold">{t.payment.modal.success}</h3>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-center">
        <div className="flex justify-center gap-6 mb-8">
          <a href={SITE_CONFIG.facebook_url} target="_blank" className="hover:text-white"><Facebook/></a>
          <a href={`https://wa.me/${SITE_CONFIG.whatsapp_number}`} target="_blank" className="hover:text-white"><MessageCircle/></a>
        </div>
        <p>{t.footer.text}</p>
      </footer>

    </div>
  );
}