import{r,t as Po,c as jo,j as e,V as Se,R as Te,a as be,A as ke,C as De,X as $,T as Oe,D as qe,P as Ro,b as So,$ as To,d as ze,e as ko,S as Do,f as Le,I as Oo,g as O,h as Me,i as qo,k as Be,l as zo,m as Fe,n as Lo,L as Ge,o as Ue,p as Mo,q as Ve,s as Bo,u as We,v as Fo,w as Go,x as F,M as Uo,G as He,y as Qe,E as Vo,z as $e,B as _e,F as M,H as le,J as Wo,K as Ho,N as Qo,O as V,Q as ie,U as Je,W as ve,Y as Ae,Z as Ce,_ as we,a0 as ne,a1 as $o,a2 as _o,a3 as Jo,a4 as Ko,a5 as Z,a6 as Yo,a7 as Xo,a8 as Ee,a9 as de,aa as Ke,ab as Zo,ac as me,ad as ea,ae as oa,af as aa,ag as ta,ah as sa,ai as ia,aj as Ye,ak as na,al as Xe,am as ra,an as Ze,ao as ca,ap as eo,aq as oo,ar as la,as as da,at as ma,au as ua,av as pa,aw as xa,ax as ga,ay as H,az as fa}from"./vendor-CLgI_AA5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const p of c.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function a(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(s){if(s.ep)return;s.ep=!0;const c=a(s);fetch(s.href,c)}})();const ba=1,ha=1e6;let re=0;function ya(){return re=(re+1)%Number.MAX_SAFE_INTEGER,re.toString()}const ce=new Map,Ne=o=>{if(ce.has(o))return;const t=setTimeout(()=>{ce.delete(o),Q({type:"REMOVE_TOAST",toastId:o})},ha);ce.set(o,t)},va=(o,t)=>{switch(t.type){case"ADD_TOAST":return{...o,toasts:[t.toast,...o.toasts].slice(0,ba)};case"UPDATE_TOAST":return{...o,toasts:o.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case"DISMISS_TOAST":{const{toastId:a}=t;return a?Ne(a):o.toasts.forEach(i=>{Ne(i.id)}),{...o,toasts:o.toasts.map(i=>i.id===a||a===void 0?{...i,open:!1}:i)}}case"REMOVE_TOAST":return t.toastId===void 0?{...o,toasts:[]}:{...o,toasts:o.toasts.filter(a=>a.id!==t.toastId)}}},Y=[];let X={toasts:[]};function Q(o){X=va(X,o),Y.forEach(t=>{t(X)})}function Aa({...o}){const t=ya(),a=s=>Q({type:"UPDATE_TOAST",toast:{...s,id:t}}),i=()=>Q({type:"DISMISS_TOAST",toastId:t});return Q({type:"ADD_TOAST",toast:{...o,id:t,open:!0,onOpenChange:s=>{s||i()}}}),{id:t,dismiss:i,update:a}}function ao(){const[o,t]=r.useState(X);return r.useEffect(()=>(Y.push(t),()=>{const a=Y.indexOf(t);a>-1&&Y.splice(a,1)}),[o]),{...o,toast:Aa,dismiss:a=>Q({type:"DISMISS_TOAST",toastId:a})}}function f(...o){return Po(jo(o))}const Ca=Ro,to=r.forwardRef(({className:o,...t},a)=>e.jsx(Se,{ref:a,className:f("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",o),...t}));to.displayName=Se.displayName;const wa=be("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),so=r.forwardRef(({className:o,variant:t,...a},i)=>e.jsx(Te,{ref:i,className:f(wa({variant:t}),o),...a}));so.displayName=Te.displayName;const Ea=r.forwardRef(({className:o,...t},a)=>e.jsx(ke,{ref:a,className:f("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",o),...t}));Ea.displayName=ke.displayName;const io=r.forwardRef(({className:o,...t},a)=>e.jsx(De,{ref:a,className:f("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",o),"toast-close":"",...t,children:e.jsx($,{className:"h-4 w-4"})}));io.displayName=De.displayName;const no=r.forwardRef(({className:o,...t},a)=>e.jsx(Oe,{ref:a,className:f("text-sm font-semibold",o),...t}));no.displayName=Oe.displayName;const ro=r.forwardRef(({className:o,...t},a)=>e.jsx(qe,{ref:a,className:f("text-sm opacity-90",o),...t}));ro.displayName=qe.displayName;function Na(){const{toasts:o}=ao();return e.jsxs(Ca,{children:[o.map(function({id:t,title:a,description:i,action:s,...c}){return e.jsxs(so,{...c,children:[e.jsxs("div",{className:"grid gap-1",children:[a&&e.jsx(no,{children:a}),i&&e.jsx(ro,{children:i})]}),s,e.jsx(io,{})]},t)}),e.jsx(to,{})]})}const Ia=({...o})=>{const{theme:t="system"}=So();return e.jsx(To,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...o})},Pa=ko,ja=r.forwardRef(({className:o,sideOffset:t=4,...a},i)=>e.jsx(ze,{ref:i,sideOffset:t,className:f("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",o),...a}));ja.displayName=ze.displayName;const co=r.createContext(void 0),Ra={en:{"nav.home":"Home","nav.about":"About","nav.ebooks":"Ebooks","nav.services":"Services","nav.contact":"Contact","nav.consulting":"Personalized Consulting","nav.math12":"Math 12th Grade","hero.eyebrow":"Head of Development & AI R&D · Grupo Erre","hero.title":"Specialist in","hero.title.cybersecurity":"Artificial Intelligence","hero.title.ai":"Cybersecurity","hero.title.webdev":"Development","hero.subtitle":"AI consulting, cybersecurity and full-stack development to transform how businesses compete and grow.","hero.cta.ebooks":"View Resources","hero.cta.services":"Book Consultation","hero.available":"Available for consulting","ebooks.title":"E-books","ebooks.subtitle":"Educational e-books on cybersecurity, artificial intelligence and web development.","ebooks.interactiveCourse":"Interactive Course","ebooks.featured":"Featured","ebooks.googleBooks":"View on Google Books","ebooks.showMore":"Show more","ebooks.showLess":"Show less","ebooks.math.title":"Mathematics 12th Grade","ebooks.math.subtitle":"Complete Interactive Course","ebooks.math.description":"Full access to the interactive Mathematics A course for 12th grade with summaries, formulas, examples and solved exercises.","ebooks.math.topics":"Topics","ebooks.math.exercises":"Exercises","ebooks.math.subtopics":"Subtopics","ebooks.math.accessCourse":"Access Interactive Course","ebooks.math.viewSummaries":"View Summaries on Google Books","ebooks.math.donate":"Support with ☕","ebooks.math.free":"FREE","ebooks.donate.paypal":"Support via PayPal","ebooks.donate.coffee":"Buy me a coffee","ebooks.safety.title":"Online Safety for Kids","ebooks.safety.subtitle":"Book Series for Parents","ebooks.safety.description":"In today's world, where all children know how to use smartphones and social media from an early age, we know that keeping children safe while using technology is a concern for many parents.","ebooks.safety.books":"Books","ebooks.safety.viewSeries":"View Series on Google Books","education.title":"Tutoring","education.subtitle":"All explanations and tutorials are only taught in Portuguese.","about.title":"About Ricardo","about.intro":"AI Specialist and Head of Development & AI R&D at Grupo Erre. Over 10 years developing solutions and applications, cybersecurity, and full-stack development.","about.expertise.fullstack":"Full-Stack Development","about.expertise.fullstack.desc":"Creating robust, scalable web applications with modern technologies.","about.expertise.cybersecurity":"Cybersecurity","about.expertise.cybersecurity.desc":"Protecting digital assets through vulnerability analysis and security assessments.","about.expertise.ai":"Artificial Intelligence","about.expertise.ai.desc":"Implementing AI solutions to optimize processes and extract insights from data.","about.expertise.corporate":"Corporate Identity","about.expertise.corporate.desc":"Developing consistent, professional digital brand identities.","about.journey":"Professional Journey","about.journey.desc1":"With a background in computer science and a passion for technology, I've spent my career helping organizations secure their digital assets while developing innovative solutions that drive business growth.","about.journey.desc2":"My expertise spans from developing scalable web applications to performing security audits and implementing AI-driven tools that provide actionable insights.","about.cert.ethical":"Certified Ethical Hacker","about.cert.ai":"AI Implementation Specialist","about.cert.fullstack":"Full Stack Developer","about.exp":"Years Experience","services.title":"Professional Services","services.subtitle":"Specialized technical services designed to secure, optimize, and enhance your digital business operations.","services.cybersecurity":"Cybersecurity Consulting","services.cybersecurity.desc":"Comprehensive security audits, vulnerability assessments, and penetration testing to protect your digital assets from threats.","services.webdev":"Full-Stack Web Development","services.webdev.desc":"Custom web application development using modern technologies to create scalable, responsive, and user-friendly solutions.","services.corporate":"Corporate Identity & Branding","services.corporate.desc":"Development of consistent digital brand identities including logos, websites, and marketing materials.","services.training":"Technical Training & Workshops","services.training.desc":"Specialized workshops and training sessions on cybersecurity, programming, and emerging technologies.","services.ai":"AI Consulting & Implementation","services.ai.desc":"Integration of AI solutions to optimize business processes, enhance decision-making, and extract insights from data.","services.requestQuote":"Request Quote","blog.title":"Technical Insights","blog.subtitle":"Explore the latest articles on cybersecurity, AI, and software development to stay informed about industry trends and best practices.","blog.date":"April 2, 2024","blog.date2":"March 15, 2024","blog.date3":"February 28, 2024","blog.author":"Ricardo Rouco","blog.title1":"How to Secure Your Web Applications Against Common Vulnerabilities","blog.excerpt1":"Learn about the OWASP Top 10 vulnerabilities and how to protect your applications from these security threats.","blog.title2":"Understanding Prompt Engineering for Effective AI Interactions","blog.excerpt2":"Master the art of crafting effective prompts to get the most out of large language models and AI systems.","blog.title3":"Functional Programming Principles for Modern Web Development","blog.excerpt3":"Discover how functional programming concepts can lead to more maintainable and robust web applications.","blog.category.cybersecurity":"Cybersecurity","blog.category.ai":"AI","blog.category.programming":"Programming","blog.readMore":"Read More","blog.viewAll":"View All Articles","cta.title":"Ready to Harness AI for Your Business?","cta.subtitle":"Schedule a free consultation to explore how AI consulting, cybersecurity, and modern development can give your business a competitive edge.","cta.benefit1":"AI implementation roadmap","cta.benefit2":"Security & vulnerability assessment","cta.benefit3":"Expert technical guidance","cta.benefit4":"Ongoing AI & development support","cta.button":"Schedule Free Consultation","cta.contact":"Contact Me","cta.form.name":"Name","cta.form.email":"Email","cta.form.company":"Company","cta.form.message":"Message","cta.form.placeholder.name":"Your name","cta.form.placeholder.email":"Your email","cta.form.placeholder.company":"Your company","cta.form.placeholder.message":"How can I help you?","cta.form.send":"Send Message","footer.about":"AI Specialist and Head of Development & AI R&D at Grupo Erre. Helping businesses harness artificial intelligence, secure their digital assets, and build for tomorrow.","footer.quickLinks":"Quick Links","footer.contactInfo":"Contact Info","footer.newsletter":"Technical Newsletter","footer.newsletter.desc":"Stay updated with the latest in cybersecurity and AI.","footer.newsletter.placeholder":"Your email","footer.newsletter.button":"Subscribe","footer.copyright":"All rights reserved.","footer.privacy":"Privacy Policy","footer.terms":"Terms of Service","footer.visitors":"visitors","cookies.title":"Cookie Consent","cookies.description":"We use cookies to analyze website usage and improve your experience. By accepting, you consent to the use of all cookies, including Google Analytics.","cookies.essential":"Essential cookies are required for basic website functionality.","cookies.analytics":"Analytics cookies help us understand how visitors interact with our website.","cookies.accept":"Accept All","cookies.reject":"Reject Non-Essential","cookies.customize":"Customize","cookies.save":"Save Preferences","cookies.privacyPolicy":"Privacy Policy","seo.title":"Ricardo Rouco - Head of Development & AI R&D | Cybersecurity Expert","seo.description":"Head of Development and AI R&D at Grupo Erre. Expert in Cybersecurity, AI, and Web Development providing integrated digital solutions to protect and boost your business.","seo.keywords":"ricardo rouco, grupo erre, head of development, ai r&d, cybersecurity, ai, web development, ebooks, artificial intelligence research","seo.author":"Ricardo Rouco","seo.url":"https://ricardodsr.github.io","privacy.title":"Privacy Policy","privacy.lastUpdated":"Last updated: December 2024","privacy.intro":'This Privacy Policy describes how Ricardo Rouco ("we", "our", or "us") collects, uses, and protects your personal information when you visit our website or use our services.',"privacy.dataCollection.title":"Information We Collect","privacy.dataCollection.personal":"Personal Information: Name, email address, company name, and any information you provide when contacting us.","privacy.dataCollection.technical":"Technical Information: IP address, browser type, device information, and website usage analytics.","privacy.dataCollection.cookies":"Cookies and similar technologies to improve your browsing experience.","privacy.dataUse.title":"How We Use Your Information","privacy.dataUse.services":"To provide and improve our cybersecurity, AI, and web development services.","privacy.dataUse.communication":"To respond to your inquiries and communicate about our services.","privacy.dataUse.marketing":"To send technical newsletters and updates (with your consent).","privacy.dataUse.legal":"To comply with legal obligations and protect our legitimate interests.","privacy.legalBasis.title":"Legal Basis for Processing (GDPR)","privacy.legalBasis.consent":"Consent: For marketing communications and cookies.","privacy.legalBasis.contract":"Contract: To fulfill our services and respond to inquiries.","privacy.legalBasis.legitimate":"Legitimate interests: For website analytics and security.","privacy.rights.title":"Your Rights","privacy.rights.access":"Right to access your personal data.","privacy.rights.rectification":"Right to correct inaccurate data.","privacy.rights.erasure":"Right to request deletion of your data.","privacy.rights.portability":"Right to data portability.","privacy.rights.objection":"Right to object to processing.","privacy.rights.complaint":"Right to lodge a complaint with supervisory authorities.","privacy.dataRetention.title":"Data Retention","privacy.dataRetention.desc":"We retain personal data only as long as necessary for the purposes outlined in this policy or as required by law.","privacy.dataSecurity.title":"Data Security","privacy.dataSecurity.desc":"We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.","privacy.thirdParty.title":"Third-Party Services","privacy.thirdParty.desc":"We may use third-party services like analytics providers and email services. These services have their own privacy policies.","privacy.contact.title":"Contact Us","privacy.contact.desc":"If you have questions about this Privacy Policy, please contact us at ricardo.rouco@gmail.com.","privacy.changes.title":"Changes to This Policy","privacy.changes.desc":"We may update this Privacy Policy periodically. Changes will be posted on this page with an updated date.","terms.title":"Terms of Service","terms.lastUpdated":"Last updated: December 2024","terms.intro":"These Terms of Service govern your use of our website and services provided by Ricardo Rouco.","terms.acceptance.title":"Acceptance of Terms","terms.acceptance.desc":"By accessing our website or using our services, you agree to be bound by these terms.","terms.services.title":"Our Services","terms.services.desc":"We provide cybersecurity consulting, AI implementation, web development, and technical training services.","terms.userResponsibilities.title":"User Responsibilities","terms.userResponsibilities.lawful":"Use our services only for lawful purposes.","terms.userResponsibilities.accurate":"Provide accurate information when contacting us.","terms.userResponsibilities.confidential":"Maintain confidentiality of any sensitive information shared.","terms.intellectualProperty.title":"Intellectual Property","terms.intellectualProperty.desc":"All content, including but not limited to text, graphics, logos, and software, is owned by Ricardo Rouco or licensed to us.","terms.limitations.title":"Limitation of Liability","terms.limitations.desc":"Our liability is limited to the maximum extent permitted by law. We are not liable for indirect, incidental, or consequential damages.","terms.privacy.title":"Privacy","terms.privacy.desc":"Your privacy is governed by our Privacy Policy, which is incorporated into these terms.","terms.termination.title":"Termination","terms.termination.desc":"We reserve the right to terminate or suspend access to our services at our sole discretion.","terms.governing.title":"Governing Law","terms.governing.desc":"These terms are governed by Portuguese law and EU regulations.","terms.contact.title":"Contact Information","terms.contact.desc":"For questions about these terms, contact us at ricardo.rouco@gmail.com.","terms.changes.title":"Changes to Terms","terms.changes.desc":"We reserve the right to modify these terms at any time. Changes will be effective upon posting.","math.pageTitle":"Mathematics A - 12th Grade","math.pageDescription":"Interactive course of Mathematics A for 12th grade with summaries, exercises and progress tracking. Created by Ricardo Rouco.","math.title":"Mathematics A Summaries","math.subtitle":"12th Grade - Topics and Content","math.author":"Based on the e-book by Ricardo Rouco","math.expandAll":"Expand All","math.collapseAll":"Collapse All","math.searchPlaceholder":"Search topics...","math.topicsFound":"topics found","math.progress":"Progress","math.topics":"topics","math.navigation":"Quick Navigation","math.topic1.title":"COMBINATORIAL ANALYSIS","math.topic1.subtopics":"Pascal's Triangle|Properties of Pascal's Triangle|Newton's Binomial|The Term of Order p+1|Arrangements, Permutations and Combinations","math.topic2.title":"PROBABILITIES","math.topic2.subtopics":"Random Experiences and Sample Space|Events|Laplace's Law|Event Operations|Conditional Probability|Independent Events","math.topic3.title":"SEQUENCES","math.topic3.subtopics":"Definition and Classification|Arithmetic Progressions|Geometric Progressions|Monotonic and Bounded Sequences|Limits of Sequences|Notable Limits","math.topic4.title":"EXPONENTIAL FUNCTION","math.topic4.subtopics":"Definition and Properties|Graph of Exponential Function|Exponential Equations|Exponential Inequalities|Applications","math.topic5.title":"LOGARITHMIC FUNCTION","math.topic5.subtopics":"Definition of Logarithm|Properties of Logarithms|Logarithmic Equations|Logarithmic Inequalities|Change of Base|Applications","math.topic6.title":"IMPORTANT THEOREMS","math.topic6.subtopics":"Bolzano's Theorem|Intermediate Value Theorem|Weierstrass' Theorem|Applications and Examples","math.topic7.title":"LIMITS AND NUMERICAL INDETERMINACIES","math.topic7.subtopics":"Definition of Limit|Finite Limits|Infinite Limits|Lateral Limits|Indeterminacies 0/0 and ∞/∞|Notable Limits|Indeterminacies ∞-∞","math.topic8.title":"ASYMPTOTES","math.topic8.subtopics":"Vertical Asymptotes|Horizontal Asymptotes|Oblique Asymptotes|Asymptotic Behavior","math.topic9.title":"CONTINUITY OF A FUNCTION","math.topic9.subtopics":"Definition of Continuity|Continuity at a Point|Continuity on an Interval|Discontinuities|Properties of Continuous Functions","math.topic10.title":"DERIVATIVES","math.topic10.subtopics":"Definition of Derivative|Derivative Rules|Chain Rule|Study of Functions with Derivatives|Optimization Problems|Second Derivative","math.topic11.title":"TRIGONOMETRY","math.topic11.subtopics":"Radian and Degree|Trigonometric Ratios|Trigonometric Circle|Fundamental Formulas|Trigonometric Equations|Sine and Cosine Functions","math.topic12.title":"COMPLEX NUMBERS","math.topic12.subtopics":"Definition and Algebraic Form|Operations with Complex Numbers|Geometric Representation|Trigonometric Form|De Moivre's Formula|Roots of Complex Numbers","math.topic13.title":"GEOMETRY IN THE PLANE","math.topic13.subtopics":"Lines in the Plane|Relative Positions|Intersection of Lines|Equations of Lines|Angles between Lines|Distances","math.topic14.title":"GEOMETRY IN SPACE","math.topic14.subtopics":"Lines and Planes in Space|Relative Positions|Vector Equations|Cartesian Equations|Angles and Distances","math.topic15.title":"OTHERS","math.topic15.subtopics":"Primitives|Definite Integrals|Applications of Integrals|Differential Equations|Special Topics","math.topic16.title":"MIND MAP OF THE SUBJECT","math.topic16.subtopics":"Complete Overview|Topic Connections|Summary"},pt:{"nav.home":"Início","nav.about":"Sobre","nav.ebooks":"E-books","nav.services":"Serviços","nav.contact":"Contato","nav.consulting":"Consultoria Personalizada","nav.math12":"Matemática 12º Ano","ebooks.title":"E-books","ebooks.subtitle":"E-books educativos sobre cibersegurança, inteligência artificial e desenvolvimento web.","ebooks.interactiveCourse":"Curso Interativo","ebooks.featured":"Destaque","ebooks.googleBooks":"Ver no Google Books","ebooks.showMore":"Ver mais","ebooks.showLess":"Ver menos","ebooks.math.title":"Matemática 12º Ano","ebooks.math.subtitle":"Curso Interativo Completo","ebooks.math.description":"Acesso completo ao curso interativo de Matemática A do 12º ano com resumos, fórmulas, exemplos e exercícios resolvidos.","ebooks.math.topics":"Tópicos","ebooks.math.exercises":"Exercícios","ebooks.math.subtopics":"Subtópicos","ebooks.math.accessCourse":"Aceder ao Curso Interativo","ebooks.math.viewSummaries":"Ver Resumos no Google Books","ebooks.math.donate":"Apoiar com ☕","ebooks.math.free":"GRÁTIS","ebooks.donate.paypal":"Apoiar via PayPal","ebooks.donate.coffee":"Oferecer um café","ebooks.safety.title":"Segurança Online para Jovens e Crianças","ebooks.safety.subtitle":"Série de Livros para Pais","ebooks.safety.description":"No mundo atual, onde todas as crianças já sabem desde cedo como usar telemóveis e redes sociais, sabemos que a segurança dos filhos durante a utilização da tecnologia é uma preocupação para muitos pais.","ebooks.safety.books":"Livros","ebooks.safety.viewSeries":"Ver Série no Google Books","education.title":"Tutorias e Explicações","education.subtitle":"Para informações mais especificas sobre explicações e tutorias, entre em contato.","education.programming":"Explicações sobre Programação","education.programming.desc":"Explicações sobre linguagens de programação e seus paradigmas, Algoritmos e estruturas de dados.(C, C++, Haskell, Python, Java, React)","education.mathematics":"Explicações sobre Matemática","education.mathematics.desc":"Explicações para matemática 10º, 11º, 12º, Calculo I e Algebra Linear.","education.informatics":"Consultorias sobre Cibersegurança e Inteligência Artificial","education.informatics.desc":"Consultorias sobre cibersegurança e inteligência artificial bem como pentests para empresas e automação de processos em IA.","education.personalized":" Workshops Personalizados sobre Cibersegurança e Inteligência Artificial","education.personalized.desc":"Workshops personalizados para empresas com foco em cibersegurança e inteligência artificial.","education.learnMore":"Entre em contacto","hero.eyebrow":"Head of Development & AI R&D · Grupo Erre","hero.title":"Especialista em","hero.title.cybersecurity":"Inteligência Artificial","hero.title.ai":"Cibersegurança","hero.title.webdev":"Desenvolvimento","hero.subtitle":"Consultoria de IA, cibersegurança e desenvolvimento full-stack para empresas prontas a liderar amanhã.","hero.cta.ebooks":"Ver Recursos","hero.cta.services":"Marcar Consulta","hero.available":"Disponível para consultoria","about.title":"Sobre Ricardo","about.intro":"Especialista em IA e Head of Development & AI R&D no Grupo Erre. Mais de 10 anos a desenvolver soluções e aplicações, cibersegurança e desenvolvimento full-stack.","about.expertise.fullstack":"Desenvolvimento Full-Stack","about.expertise.fullstack.desc":"Criação de aplicações web robustas e escaláveis com tecnologias modernas.","about.expertise.cybersecurity":"Cibersegurança","about.expertise.cybersecurity.desc":"Proteção de ativos digitais através de análise de vulnerabilidades e avaliações de segurança.","about.expertise.ai":"Inteligência Artificial","about.expertise.ai.desc":"Implementação de soluções de IA para otimizar processos e extrair insights de dados.","about.expertise.corporate":"Identidade Corporativa","about.expertise.corporate.desc":"Desenvolvimento de identidades de marca digitais consistentes e profissionais.","about.journey":"Trajetória Profissional","about.journey.desc1":"Com formação em ciência da computação e paixão por tecnologia, dediquei minha carreira a ajudar organizações a proteger seus ativos digitais enquanto desenvolvo soluções inovadoras que impulsionam o crescimento dos negócios.","about.journey.desc2":"Minha expertise abrange desde o desenvolvimento de aplicações web escaláveis até a realização de auditorias de segurança e implementação de ferramentas baseadas em IA que fornecem insights acionáveis.","about.cert.ethical":"Hacker Ético Certificado","about.cert.ai":"Especialista em Implementação de IA","about.cert.fullstack":"Desenvolvedor Full Stack","about.exp":"Anos de Experiência","services.title":"Serviços Profissionais","services.subtitle":"Serviços técnicos especializados projetados para garantir, otimizar e aprimorar suas operações de negócios digitais.","services.cybersecurity":"Consultoria em Cibersegurança","services.cybersecurity.desc":"Auditorias de segurança abrangentes, avaliações de vulnerabilidade e testes de penetração para proteger seus ativos digitais contra ameaças.","services.webdev":"Desenvolvimento Web Full-Stack","services.webdev.desc":"Desenvolvimento de aplicações web personalizadas usando tecnologias modernas para criar soluções escaláveis, responsivas e fáceis de usar.","services.corporate":"Identidade Corporativa & Branding","services.corporate.desc":"Desenvolvimento de identidades de marca digitais consistentes, incluindo logos, websites e materiais de marketing.","services.training":"Treinamentos & Workshops Técnicos","services.training.desc":"Workshops especializados e sessões de treinamento em cibersegurança, programação e tecnologias emergentes.","services.ai":"Consultoria & Implementação de IA","services.ai.desc":"Integração de soluções de IA para otimizar processos de negócios, melhorar a tomada de decisões e extrair insights de dados.","services.requestQuote":"Solicitar Orçamento","blog.title":"Insights Técnicos","blog.subtitle":"Explore os últimos artigos sobre cibersegurança, IA e desenvolvimento de software para se manter informado sobre tendências do setor e melhores práticas.","blog.date":"2 de Abril, 2024","blog.date2":"15 de Março, 2024","blog.date3":"28 de Fevereiro, 2024","blog.author":"Ricardo Rouco","blog.title1":"Como Proteger suas Aplicações Web Contra Vulnerabilidades Comuns","blog.excerpt1":"Aprenda sobre as 10 principais vulnerabilidades do OWASP e como proteger suas aplicações contra essas ameaças de segurança.","blog.title2":"Entendendo a Engenharia de Prompts para Interações Eficazes com IA","blog.excerpt2":"Domine a arte de criar prompts eficazes para obter o máximo de modelos de linguagem de grande escala e sistemas de IA.","blog.title3":"Princípios de Programação Funcional para Desenvolvimento Web Moderno","blog.excerpt3":"Descubra como conceitos de programação funcional podem levar a aplicações web mais fáceis de manter e robustas.","blog.category.cybersecurity":"Cibersegurança","blog.category.ai":"IA","blog.category.programming":"Programação","blog.readMore":"Ler Mais","blog.viewAll":"Ver Todos os Artigos","cta.title":"Pronto para Implementar IA no seu Negócio?","cta.subtitle":"Marque uma consulta gratuita para explorar como a consultoria de IA, cibersegurança e desenvolvimento moderno podem dar ao seu negócio uma vantagem competitiva.","cta.benefit1":"Roadmap de implementação de IA","cta.benefit2":"Avaliação de segurança e vulnerabilidades","cta.benefit3":"Orientação técnica especializada","cta.benefit4":"Suporte contínuo em IA e desenvolvimento","cta.button":"Agendar Consulta Gratuita","cta.contact":"Entre em Contato","cta.form.name":"Nome","cta.form.email":"Email","cta.form.company":"Empresa","cta.form.message":"Mensagem","cta.form.placeholder.name":"Seu nome","cta.form.placeholder.email":"Seu email","cta.form.placeholder.company":"Sua empresa","cta.form.placeholder.message":"Como posso ajudar?","cta.form.send":"Enviar Mensagem","footer.about":"Especialista em IA e Head of Development & AI R&D no Grupo Erre. A ajudar empresas a aproveitar a inteligência artificial, proteger os seus ativos digitais e construir para o futuro.","footer.quickLinks":"Links Rápidos","footer.contactInfo":"Informações de Contato","footer.newsletter":"Newsletter Técnica","footer.newsletter.desc":"Mantenha-se atualizado com as últimas novidades em cibersegurança e IA.","footer.newsletter.placeholder":"Seu email","footer.newsletter.button":"Inscrever-se","footer.copyright":"Todos os direitos reservados.","footer.privacy":"Política de Privacidade","footer.terms":"Termos de Serviço","footer.visitors":"visitantes","cookies.title":"Consentimento de Cookies","cookies.description":"Utilizamos cookies para analisar o uso do website e melhorar a sua experiência. Ao aceitar, consente o uso de todos os cookies, incluindo Google Analytics.","cookies.essential":"Cookies essenciais são necessários para a funcionalidade básica do website.","cookies.analytics":"Cookies de análise ajudam-nos a compreender como os visitantes interagem com o nosso website.","cookies.accept":"Aceitar Todos","cookies.reject":"Rejeitar Não Essenciais","cookies.customize":"Personalizar","cookies.save":"Guardar Preferências","cookies.privacyPolicy":"Política de Privacidade","seo.title":"Ricardo Rouco - Head of Development & AI R&D | Especialista em Cibersegurança","seo.description":"Head of Development e AI R&D no Grupo Erre. Especialista em Cibersegurança, IA e Desenvolvimento Web fornecendo soluções digitais integradas para proteger e impulsionar seu negócio.","seo.keywords":"ricardo rouco, grupo erre, head of development, ai r&d, cibersegurança, ia, desenvolvimento web, ebooks, pesquisa inteligência artificial","seo.author":"Ricardo Rouco","seo.url":"https://ricardodsr.github.io","privacy.title":"Política de Privacidade","privacy.lastUpdated":"Última atualização: Dezembro de 2024","privacy.intro":'Esta Política de Privacidade descreve como Ricardo Rouco ("nós", "nosso" ou "nos") coleta, usa e protege suas informações pessoais quando você visita nosso site ou usa nossos serviços.',"privacy.dataCollection.title":"Informações que Coletamos","privacy.dataCollection.personal":"Informações Pessoais: Nome, endereço de email, nome da empresa e qualquer informação que você forneça ao entrar em contato conosco.","privacy.dataCollection.technical":"Informações Técnicas: Endereço IP, tipo de navegador, informações do dispositivo e análises de uso do site.","privacy.dataCollection.cookies":"Cookies e tecnologias similares para melhorar sua experiência de navegação.","privacy.dataUse.title":"Como Usamos Suas Informações","privacy.dataUse.services":"Para fornecer e melhorar nossos serviços de cibersegurança, IA e desenvolvimento web.","privacy.dataUse.communication":"Para responder às suas consultas e comunicar sobre nossos serviços.","privacy.dataUse.marketing":"Para enviar newsletters técnicas e atualizações (com seu consentimento).","privacy.dataUse.legal":"Para cumprir obrigações legais e proteger nossos interesses legítimos.","privacy.legalBasis.title":"Base Legal para Processamento (LGPD/GDPR)","privacy.legalBasis.consent":"Consentimento: Para comunicações de marketing e cookies.","privacy.legalBasis.contract":"Contrato: Para cumprir nossos serviços e responder a consultas.","privacy.legalBasis.legitimate":"Interesses legítimos: Para análises do site e segurança.","privacy.rights.title":"Seus Direitos","privacy.rights.access":"Direito de acessar seus dados pessoais.","privacy.rights.rectification":"Direito de corrigir dados imprecisos.","privacy.rights.erasure":"Direito de solicitar a exclusão de seus dados.","privacy.rights.portability":"Direito à portabilidade de dados.","privacy.rights.objection":"Direito de objetar ao processamento.","privacy.rights.complaint":"Direito de apresentar reclamação às autoridades supervisoras.","privacy.dataRetention.title":"Retenção de Dados","privacy.dataRetention.desc":"Retemos dados pessoais apenas pelo tempo necessário para os propósitos descritos nesta política ou conforme exigido por lei.","privacy.dataSecurity.title":"Segurança de Dados","privacy.dataSecurity.desc":"Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição.","privacy.thirdParty.title":"Serviços de Terceiros","privacy.thirdParty.desc":"Podemos usar serviços de terceiros como provedores de análises e serviços de email. Estes serviços têm suas próprias políticas de privacidade.","privacy.contact.title":"Entre em Contato","privacy.contact.desc":"Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco em ricardo.rouco@gmail.com.","privacy.changes.title":"Alterações a Esta Política","privacy.changes.desc":"Podemos atualizar esta Política de Privacidade periodicamente. As alterações serão publicadas nesta página com uma data atualizada.","terms.title":"Termos de Serviço","terms.lastUpdated":"Última atualização: Dezembro de 2024","terms.intro":"Estes Termos de Serviço regem o uso de nosso site e serviços fornecidos por Ricardo Rouco.","terms.acceptance.title":"Aceitação dos Termos","terms.acceptance.desc":"Ao acessar nosso site ou usar nossos serviços, você concorda em estar vinculado a estes termos.","terms.services.title":"Nossos Serviços","terms.services.desc":"Fornecemos serviços de consultoria em cibersegurança, implementação de IA, desenvolvimento web e treinamento técnico.","terms.userResponsibilities.title":"Responsabilidades do Usuário","terms.userResponsibilities.lawful":"Use nossos serviços apenas para fins legais.","terms.userResponsibilities.accurate":"Forneça informações precisas ao entrar em contato conosco.","terms.userResponsibilities.confidential":"Mantenha a confidencialidade de qualquer informação sensível compartilhada.","terms.intellectualProperty.title":"Propriedade Intelectual","terms.intellectualProperty.desc":"Todo o conteúdo, incluindo, mas não limitado a texto, gráficos, logotipos e software, é de propriedade de Ricardo Rouco ou licenciado para nós.","terms.limitations.title":"Limitação de Responsabilidade","terms.limitations.desc":"Nossa responsabilidade é limitada ao máximo permitido por lei. Não somos responsáveis por danos indiretos, incidentais ou consequenciais.","terms.privacy.title":"Privacidade","terms.privacy.desc":"Sua privacidade é regida por nossa Política de Privacidade, que está incorporada a estes termos.","terms.termination.title":"Rescisão","terms.termination.desc":"Reservamo-nos o direito de encerrar ou suspender o acesso aos nossos serviços a nosso exclusivo critério.","terms.governing.title":"Lei Aplicável","terms.governing.desc":"Estes termos são regidos pela lei portuguesa e regulamentações da UE.","terms.contact.title":"Informações de Contato","terms.contact.desc":"Para dúvidas sobre estes termos, entre em contato conosco em ricardo.rouco@gmail.com.","terms.changes.title":"Alterações aos Termos","terms.changes.desc":"Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor após a publicação.","math.pageTitle":"Matemática A - 12º Ano","math.pageDescription":"Curso interativo de Matemática A do 12º ano com resumos, exercícios e acompanhamento de progresso. Criado por Ricardo Rouco.","math.title":"Resumos de Matemática A","math.subtitle":"12º Ano - Conteúdos e Tópicos","math.author":"Baseado no e-book de Ricardo Rouco","math.expandAll":"Expandir Tudo","math.collapseAll":"Colapsar Tudo","math.searchPlaceholder":"Pesquisar tópicos...","math.topicsFound":"tópicos encontrados","math.progress":"Progresso","math.topics":"tópicos","math.navigation":"Navegação Rápida","math.topic1.title":"ANÁLISE COMBINATÓRIA","math.topic1.subtopics":"Triângulo de Pascal|Propriedades do Triângulo de Pascal|Binómio de Newton|O Termo de Ordem p+1|Arranjos, Permutações e Combinações","math.topic2.title":"PROBABILIDADES","math.topic2.subtopics":"Experiências Aleatórias e Espaço Amostral|Acontecimentos|Lei de Laplace|Operações com Acontecimentos|Probabilidade Condicionada|Acontecimentos Independentes","math.topic3.title":"SUCESSÕES","math.topic3.subtopics":"Definição e Classificação|Progressões Aritméticas|Progressões Geométricas|Sucessões Monótonas e Limitadas|Limites de Sucessões|Limites Notáveis","math.topic4.title":"FUNÇÃO EXPONENCIAL","math.topic4.subtopics":"Definição e Propriedades|Gráfico da Função Exponencial|Equações Exponenciais|Inequações Exponenciais|Aplicações","math.topic5.title":"FUNÇÃO LOGARÍTMICA","math.topic5.subtopics":"Definição de Logaritmo|Propriedades dos Logaritmos|Equações Logarítmicas|Inequações Logarítmicas|Mudança de Base|Aplicações","math.topic6.title":"TEOREMAS IMPORTANTES","math.topic6.subtopics":"Teorema de Bolzano|Teorema do Valor Intermédio|Teorema de Weierstrass|Aplicações e Exemplos","math.topic7.title":"LIMITES E INDETERMINAÇÕES NUMÉRICAS","math.topic7.subtopics":"Definição de Limite|Limites Finitos|Limites Infinitos|Limites Laterais|Indeterminações 0/0 e ∞/∞|Limites Notáveis|Indeterminações ∞-∞","math.topic8.title":"ASSÍNTOTAS","math.topic8.subtopics":"Assíntotas Verticais|Assíntotas Horizontais|Assíntotas Oblíquas|Comportamento Assintótico","math.topic9.title":"CONTINUIDADE DE UMA FUNÇÃO","math.topic9.subtopics":"Definição de Continuidade|Continuidade num Ponto|Continuidade num Intervalo|Descontinuidades|Propriedades das Funções Contínuas","math.topic10.title":"DERIVADAS","math.topic10.subtopics":"Definição de Derivada|Regras de Derivação|Regra da Cadeia|Estudo de Funções com Derivadas|Problemas de Otimização|Segunda Derivada","math.topic11.title":"TRIGONOMETRIA","math.topic11.subtopics":"Radiano e Grau|Razões Trigonométricas|Círculo Trigonométrico|Fórmulas Fundamentais|Equações Trigonométricas|Funções Seno e Cosseno","math.topic12.title":"NÚMEROS COMPLEXOS","math.topic12.subtopics":"Definição e Forma Algébrica|Operações com Números Complexos|Representação Geométrica|Forma Trigonométrica|Fórmula de De Moivre|Raízes de Números Complexos","math.topic13.title":"GEOMETRIA NO PLANO","math.topic13.subtopics":"Retas no Plano|Posições Relativas|Interseção de Retas|Equações de Retas|Ângulos entre Retas|Distâncias","math.topic14.title":"GEOMETRIA NO ESPAÇO","math.topic14.subtopics":"Retas e Planos no Espaço|Posições Relativas|Equações Vetoriais|Equações Cartesianas|Ângulos e Distâncias","math.topic15.title":"OUTROS","math.topic15.subtopics":"Primitivas|Integrais Definidos|Aplicações dos Integrais|Equações Diferenciais|Tópicos Especiais","math.topic16.title":"MAPA MENTAL DA MATÉRIA","math.topic16.subtopics":"Visão Geral Completa|Conexões entre Tópicos|Resumo"},es:{"nav.home":"Inicio","nav.about":"Acerca de","nav.ebooks":"Ebooks","nav.services":"Servicios","nav.contact":"Contacto","nav.consulting":"Consultoría Personalizada","nav.math12":"Matemáticas 12º Grado","hero.eyebrow":"Head of Development & AI R&D · Grupo Erre","hero.title":"Especialista en","hero.title.cybersecurity":"Inteligencia Artificial","hero.title.ai":"Ciberseguridad","hero.title.webdev":"Desarrollo","hero.subtitle":"Consultoría de IA, ciberseguridad y desarrollo full-stack para empresas listas para liderar mañana.","hero.cta.ebooks":"Ver Recursos","hero.cta.services":"Reservar Consulta","hero.available":"Disponible para consultoría","ebooks.title":"E-books","ebooks.subtitle":"Libros electrónicos educativos sobre seguridad cibernética, inteligencia artificial y desarrollo web.","ebooks.interactiveCourse":"Curso Interactivo","ebooks.featured":"Destacado","ebooks.googleBooks":"Ver en Google Books","ebooks.showMore":"Ver más","ebooks.showLess":"Ver menos","ebooks.math.title":"Matemáticas 12º Grado","ebooks.math.subtitle":"Curso Interactivo Completo","ebooks.math.description":"Acceso completo al curso interactivo de Matemáticas A para 12º grado con resúmenes, fórmulas, ejemplos y ejercicios resueltos.","ebooks.math.topics":"Temas","ebooks.math.exercises":"Ejercicios","ebooks.math.subtopics":"Subtemas","ebooks.math.accessCourse":"Acceder al Curso Interactivo","ebooks.math.viewSummaries":"Ver Resúmenes en Google Books","ebooks.math.donate":"Apoyar con ☕","ebooks.math.free":"GRATIS","ebooks.donate.paypal":"Apoyar vía PayPal","ebooks.donate.coffee":"Invítame un café","ebooks.safety.title":"Seguridad Online para Jóvenes y Niños","ebooks.safety.subtitle":"Serie de Libros para Padres","ebooks.safety.description":"En el mundo actual, donde todos los niños ya saben desde temprana edad cómo usar teléfonos móviles y redes sociales, sabemos que la seguridad de los hijos durante el uso de la tecnología es una preocupación para muchos padres.","ebooks.safety.books":"Libros","ebooks.safety.viewSeries":"Ver Serie en Google Books","education.title":"Tutorías y Explicaciones","education.subtitle":"Todas las explicaciones así como tutorias solo están en Portugues","about.title":"Sobre Ricardo","about.intro":"Especialista en IA y Head of Development & AI R&D en Grupo Erre. Más de 10 años desarrollando soluciones y aplicaciones, ciberseguridad y desarrollo full-stack.","about.expertise.fullstack":"Desarrollo Full-Stack","about.expertise.fullstack.desc":"Creación de aplicaciones web robustas y escalables con tecnologías modernas.","about.expertise.cybersecurity":"Ciberseguridad","about.expertise.cybersecurity.desc":"Protección de activos digitales mediante análisis de vulnerabilidades y evaluaciones de seguridad.","about.expertise.ai":"Inteligencia Artificial","about.expertise.ai.desc":"Implementación de soluciones de IA para optimizar procesos y extraer información de datos.","about.expertise.corporate":"Identidad Corporativa","about.expertise.corporate.desc":"Desarrollo de identidades de marca digitales consistentes y profesionales.","about.journey":"Trayectoria Profesional","about.journey.desc1":"Con formación en ciencias de la computación y pasión por la tecnología, he dedicado mi carrera a ayudar a las organizaciones a proteger sus activos digitales mientras desarrollo soluciones innovadoras que impulsan el crecimiento empresarial.","about.journey.desc2":"Mi experiencia abarca desde el desarrollo de aplicaciones web escalables hasta la realización de auditorías de seguridad y la implementación de herramientas basadas en IA que proporcionan información procesable.","about.cert.ethical":"Hacker Ético Certificado","about.cert.ai":"Especialista en Implementación de IA","about.cert.fullstack":"Desarrollador Full Stack","about.exp":"Años de Experiencia","services.title":"Servicios Profesionales","services.subtitle":"Servicios técnicos especializados diseñados para asegurar, optimizar y mejorar sus operaciones de negocio digital.","services.cybersecurity":"Consultoría en Ciberseguridad","services.cybersecurity.desc":"Auditorías de seguridad completas, evaluaciones de vulnerabilidad y pruebas de penetración para proteger sus activos digitales contra amenazas.","services.webdev":"Desarrollo Web Full-Stack","services.webdev.desc":"Desarrollo de aplicaciones web personalizadas usando tecnologías modernas para crear soluciones escalables, responsivas y fáciles de usar.","services.corporate":"Identidad Corporativa & Branding","services.corporate.desc":"Desarrollo de identidades de marca digitales consistentes, incluyendo logos, sitios web y materiales de marketing.","services.training":"Capacitación & Talleres Técnicos","services.training.desc":"Talleres especializados y sesiones de capacitación en ciberseguridad, programación y tecnologías emergentes.","services.ai":"Consultoría & Implementación de IA","services.ai.desc":"Integración de soluciones de IA para optimizar procesos de negocio, mejorar la toma de decisiones y extraer información de datos.","services.requestQuote":"Solicitar Presupuesto","blog.title":"Perspectivas Técnicas","blog.subtitle":"Explore los últimos artículos sobre ciberseguridad, IA y desarrollo de software para mantenerse informado sobre las tendencias de la industria y las mejores prácticas.","blog.date":"2 de Abril, 2024","blog.date2":"15 de Marzo, 2024","blog.date3":"28 de Febrero, 2024","blog.author":"Ricardo Rouco","blog.title1":"Cómo Proteger sus Aplicaciones Web Contra Vulnerabilidades Comunes","blog.excerpt1":"Aprenda sobre las 10 principales vulnerabilidades de OWASP y cómo proteger sus aplicaciones contra estas amenazas de seguridad.","blog.title2":"Entendiendo la Ingeniería de Prompts para Interacciones Efectivas con IA","blog.excerpt2":"Domine el arte de crear prompts efectivos para obtener el máximo de los modelos de lenguaje a gran escala y sistemas de IA.","blog.title3":"Principios de Programación Funcional para Desarrollo Web Moderno","blog.excerpt3":"Descubra cómo los conceptos de programación funcional pueden conducir a aplicaciones web más mantenibles y robustas.","blog.category.cybersecurity":"Ciberseguridad","blog.category.ai":"IA","blog.category.programming":"Programación","blog.readMore":"Leer Más","blog.viewAll":"Ver Todos los Artículos","cta.title":"Proteja e Impulse su Negocio Digital","cta.subtitle":"Programe una consulta inicial gratuita para discutir cómo mi experiencia en ciberseguridad, IA y desarrollo web puede ayudar a su negocio a prosperar en el entorno digital.","cta.benefit1":"Evaluación de seguridad personalizada","cta.benefit2":"Soluciones técnicas personalizadas","cta.benefit3":"Orientación y consultoría experta","cta.benefit4":"Soporte técnico continuo","cta.button":"Programar Consulta Gratuita","cta.contact":"Contácteme","cta.form.name":"Nombre","cta.form.email":"Email","cta.form.company":"Empresa","cta.form.message":"Mensaje","cta.form.placeholder.name":"Su nombre","cta.form.placeholder.email":"Su email","cta.form.placeholder.company":"Su empresa","cta.form.placeholder.message":"¿Cómo puedo ayudar?","cta.form.send":"Enviar Mensaje","footer.about":"Experto en Ciberseguridad, IA y Desarrollo Web que proporciona soluciones digitales integradas para proteger e impulsar su negocio.","footer.quickLinks":"Enlaces Rápidos","footer.contactInfo":"Información de Contacto","footer.newsletter":"Boletín Técnico","footer.newsletter.desc":"Manténgase actualizado con lo último en ciberseguridad e IA.","footer.newsletter.placeholder":"Su email","footer.newsletter.button":"Suscribirse","footer.copyright":"Todos los derechos reservados.","footer.privacy":"Política de Privacidad","footer.terms":"Términos de Servicio","footer.visitors":"visitantes","cookies.title":"Consentimiento de Cookies","cookies.description":"Utilizamos cookies para analizar el uso del sitio web y mejorar su experiencia. Al aceptar, consiente el uso de todas las cookies, incluido Google Analytics.","cookies.essential":"Las cookies esenciales son necesarias para la funcionalidad básica del sitio web.","cookies.analytics":"Las cookies de análisis nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.","cookies.accept":"Aceptar Todas","cookies.reject":"Rechazar No Esenciales","cookies.customize":"Personalizar","cookies.save":"Guardar Preferencias","cookies.privacyPolicy":"Política de Privacidad","seo.title":"Ricardo Rouco - Head of Development & AI R&D | Experto en Ciberseguridad","seo.description":"Head of Development e AI R&D en Grupo Erre. Experto en Ciberseguridad, IA y Desarrollo Web proporcionando soluciones digitales integradas para proteger e impulsar su negocio.","seo.keywords":"ricardo rouco, grupo erre, head of development, ai r&d, ciberseguridad, ia, desarrollo web, ebooks, investigación inteligencia artificial","seo.author":"Ricardo Rouco","seo.url":"https://ricardodsr.github.io","privacy.title":"Política de Privacidad","privacy.lastUpdated":"Última actualización: Diciembre 2024","privacy.intro":'Esta Política de Privacidad describe cómo Ricardo Rouco ("nosotros", "nuestro" o "nos") recopila, usa y protege su información personal cuando visita nuestro sitio web o utiliza nuestros servicios.',"privacy.dataCollection.title":"Información que Recopilamos","privacy.dataCollection.personal":"Información Personal: Nombre, dirección de email, nombre de la empresa y cualquier información que proporcione al contactarnos.","privacy.dataCollection.technical":"Información Técnica: Dirección IP, tipo de navegador, información del dispositivo y análisis de uso del sitio web.","privacy.dataCollection.cookies":"Cookies y tecnologías similares para mejorar su experiencia de navegación.","privacy.dataUse.title":"Cómo Usamos Su Información","privacy.dataUse.services":"Para proporcionar y mejorar nuestros servicios de ciberseguridad, IA y desarrollo web.","privacy.dataUse.communication":"Para responder a sus consultas y comunicar sobre nuestros servicios.","privacy.dataUse.marketing":"Para enviar boletines técnicos y actualizaciones (con su consentimiento).","privacy.dataUse.legal":"Para cumplir con obligaciones legales y proteger nuestros intereses legítimos.","privacy.legalBasis.title":"Base Legal para el Procesamiento (GDPR)","privacy.legalBasis.consent":"Consentimiento: Para comunicaciones de marketing y cookies.","privacy.legalBasis.contract":"Contrato: Para cumplir nuestros servicios y responder a consultas.","privacy.legalBasis.legitimate":"Intereses legítimos: Para análisis del sitio web y seguridad.","privacy.rights.title":"Sus Derechos","privacy.rights.access":"Derecho a acceder a sus datos personales.","privacy.rights.rectification":"Derecho a corregir datos inexactos.","privacy.rights.erasure":"Derecho a solicitar la eliminación de sus datos.","privacy.rights.portability":"Derecho a la portabilidad de datos.","privacy.rights.objection":"Derecho a objetar el procesamiento.","privacy.rights.complaint":"Derecho a presentar una queja ante las autoridades supervisoras.","privacy.dataRetention.title":"Retención de Datos","privacy.dataRetention.desc":"Conservamos los datos personales solo durante el tiempo necesario para los propósitos descritos en esta política o según lo requiera la ley.","privacy.dataSecurity.title":"Seguridad de Datos","privacy.dataSecurity.desc":"Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra acceso no autorizado, alteración, divulgación o destrucción.","privacy.thirdParty.title":"Servicios de Terceros","privacy.thirdParty.desc":"Podemos usar servicios de terceros como proveedores de análisis y servicios de email. Estos servicios tienen sus propias políticas de privacidad.","privacy.contact.title":"Contáctenos","privacy.contact.desc":"Si tiene preguntas sobre esta Política de Privacidad, contáctenos en ricardo.rouco@gmail.com.","privacy.changes.title":"Cambios a Esta Política","privacy.changes.desc":"Podemos actualizar esta Política de Privacidad periódicamente. Los cambios se publicarán en esta página con una fecha actualizada.","terms.title":"Términos de Servicio","terms.lastUpdated":"Última actualización: Diciembre 2024","terms.intro":"Estos Términos de Servicio rigen el uso de nuestro sitio web y servicios proporcionados por Ricardo Rouco.","terms.acceptance.title":"Aceptación de los Términos","terms.acceptance.desc":"Al acceder a nuestro sitio web o utilizar nuestros servicios, acepta estar sujeto a estos términos.","terms.services.title":"Nuestros Servicios","terms.services.desc":"Proporcionamos servicios de consultoría en ciberseguridad, implementación de IA, desarrollo web y capacitación técnica.","terms.userResponsibilities.title":"Responsabilidades del Usuario","terms.userResponsibilities.lawful":"Use nuestros servicios solo para propósitos legales.","terms.userResponsibilities.accurate":"Proporcione información precisa al contactarnos.","terms.userResponsibilities.confidential":"Mantenga la confidencialidad de cualquier información sensible compartida.","terms.intellectualProperty.title":"Propiedad Intelectual","terms.intellectualProperty.desc":"Todo el contenido, incluyendo pero no limitado a texto, gráficos, logotipos y software, es propiedad de Ricardo Rouco o licenciado a nosotros.","terms.limitations.title":"Limitación de Responsabilidad","terms.limitations.desc":"Nuestra responsabilidad está limitada al máximo permitido por la ley. No somos responsables de daños indirectos, incidentales o consecuenciales.","terms.privacy.title":"Privacidad","terms.privacy.desc":"Su privacidad se rige por nuestra Política de Privacidad, que está incorporada en estos términos.","terms.termination.title":"Terminación","terms.termination.desc":"Nos reservamos el derecho de terminar o suspender el acceso a nuestros servicios a nuestra sola discreción.","terms.governing.title":"Ley Aplicable","terms.governing.desc":"Estos términos se rigen por la ley portuguesa y las regulaciones de la UE.","terms.contact.title":"Información de Contacto","terms.contact.desc":"Para preguntas sobre estos términos, contáctenos en ricardo.rouco@gmail.com.","terms.changes.title":"Cambios a los Términos","terms.changes.desc":"Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán efectivos al momento de la publicación.","math.pageTitle":"Matemáticas A - 12º Grado","math.pageDescription":"Curso interactivo de Matemáticas A para 12º grado con resúmenes, ejercicios y seguimiento de progreso. Creado por Ricardo Rouco.","math.title":"Resúmenes de Matemáticas A","math.subtitle":"12º Grado - Temas y Contenidos","math.author":"Basado en el e-book de Ricardo Rouco","math.expandAll":"Expandir Todo","math.collapseAll":"Colapsar Todo","math.searchPlaceholder":"Buscar temas...","math.topicsFound":"temas encontrados","math.progress":"Progreso","math.topics":"temas","math.navigation":"Navegación Rápida","math.topic1.title":"ANÁLISIS COMBINATORIO","math.topic1.subtopics":"Triángulo de Pascal|Propiedades del Triángulo de Pascal|Binomio de Newton|El Término de Orden p+1|Arreglos, Permutaciones y Combinaciones","math.topic2.title":"PROBABILIDADES","math.topic2.subtopics":"Experiencias Aleatorias y Espacio Muestral|Acontecimientos|Ley de Laplace|Operaciones con Acontecimientos|Probabilidad Condicionada|Acontecimientos Independientes","math.topic3.title":"SUCESIONES","math.topic3.subtopics":"Definición y Clasificación|Progresiones Aritméticas|Progresiones Geométricas|Sucesiones Monótonas y Acotadas|Límites de Sucesiones|Límites Notables","math.topic4.title":"FUNCIÓN EXPONENCIAL","math.topic4.subtopics":"Definición y Propiedades|Gráfico de la Función Exponencial|Ecuaciones Exponenciales|Inecuaciones Exponenciales|Aplicaciones","math.topic5.title":"FUNCIÓN LOGARÍTMICA","math.topic5.subtopics":"Definición de Logaritmo|Propiedades de los Logaritmos|Ecuaciones Logarítmicas|Inecuaciones Logarítmicas|Cambio de Base|Aplicaciones","math.topic6.title":"TEOREMAS IMPORTANTES","math.topic6.subtopics":"Teorema de Bolzano|Teorema del Valor Intermedio|Teorema de Weierstrass|Aplicaciones y Ejemplos","math.topic7.title":"LÍMITES E INDETERMINACIONES NUMÉRICAS","math.topic7.subtopics":"Definición de Límite|Límites Finitos|Límites Infinitos|Límites Laterales|Indeterminaciones 0/0 y ∞/∞|Límites Notables|Indeterminaciones ∞-∞","math.topic8.title":"ASÍNTOTAS","math.topic8.subtopics":"Asíntotas Verticales|Asíntotas Horizontales|Asíntotas Oblicuas|Comportamiento Asintótico","math.topic9.title":"CONTINUIDAD DE UNA FUNCIÓN","math.topic9.subtopics":"Definición de Continuidad|Continuidad en un Punto|Continuidad en un Intervalo|Discontinuidades|Propiedades de las Funciones Continuas","math.topic10.title":"DERIVADAS","math.topic10.subtopics":"Definición de Derivada|Reglas de Derivación|Regla de la Cadena|Estudio de Funciones con Derivadas|Problemas de Optimización|Segunda Derivada","math.topic11.title":"TRIGONOMETRÍA","math.topic11.subtopics":"Radián y Grado|Razones Trigonométricas|Círculo Trigonométrico|Fórmulas Fundamentales|Ecuaciones Trigonométricas|Funciones Seno y Coseno","math.topic12.title":"NÚMEROS COMPLEJOS","math.topic12.subtopics":"Definición y Forma Algebraica|Operaciones con Números Complejos|Representación Geométrica|Forma Trigonométrica|Fórmula de De Moivre|Raíces de Números Complejos","math.topic13.title":"GEOMETRÍA EN EL PLANO","math.topic13.subtopics":"Rectas en el Plano|Posiciones Relativas|Intersección de Rectas|Ecuaciones de Rectas|Ángulos entre Rectas|Distancias","math.topic14.title":"GEOMETRÍA EN EL ESPACIO","math.topic14.subtopics":"Rectas y Planos en el Espacio|Posiciones Relativas|Ecuaciones Vectoriales|Ecuaciones Cartesianas|Ángulos y Distancias","math.topic15.title":"OTROS","math.topic15.subtopics":"Primitivas|Integrales Definidas|Aplicaciones de los Integrales|Ecuaciones Diferenciales|Temas Especiales","math.topic16.title":"MAPA MENTAL DE LA MATERIA","math.topic16.subtopics":"Visión General Completa|Conexiones entre Temas|Resumen"}},Sa=({children:o})=>{const[t,a]=r.useState("pt"),i=s=>Ra[t][s]||s;return e.jsx(co.Provider,{value:{language:t,setLanguage:a,t:i},children:o})},j=()=>{const o=r.useContext(co);if(o===void 0)throw new Error("useLanguage must be used within a LanguageProvider");return o},Ta=be("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-apple-blue text-white hover:bg-apple-blueHover rounded-full shadow-sm hover:shadow-md active:scale-[0.98]",secondary:"bg-apple-gray-100 text-apple-gray-700 hover:bg-apple-gray-200 rounded-full",outline:"border-2 border-apple-gray-300 bg-transparent text-apple-gray-700 hover:bg-apple-gray-100 rounded-full",ghost:"text-apple-blue hover:bg-apple-blueSubtle rounded-full",link:"text-apple-blue hover:text-apple-blueHover underline-offset-4 hover:underline p-0 h-auto",glass:"bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 rounded-full",destructive:"bg-red-500 text-white hover:bg-red-600 rounded-full"},size:{sm:"h-9 px-4 text-sm",default:"h-11 px-6 text-base",lg:"h-12 px-8 text-base",xl:"h-14 px-10 text-lg",icon:"h-10 w-10 rounded-full"}},defaultVariants:{variant:"default",size:"default"}}),v=r.forwardRef(({className:o,variant:t,size:a,asChild:i=!1,...s},c)=>{const p=i?Do:"button";return e.jsx(p,{className:f(Ta({variant:t,size:a,className:o})),ref:c,...s})});v.displayName="Button";const ka=Fo,Da=Go,lo=r.forwardRef(({className:o,children:t,...a},i)=>e.jsxs(Le,{ref:i,className:f("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",o),...a,children:[t,e.jsx(Oo,{asChild:!0,children:e.jsx(O,{className:"h-4 w-4 opacity-50"})})]}));lo.displayName=Le.displayName;const mo=r.forwardRef(({className:o,...t},a)=>e.jsx(Me,{ref:a,className:f("flex cursor-default items-center justify-center py-1",o),...t,children:e.jsx(qo,{className:"h-4 w-4"})}));mo.displayName=Me.displayName;const uo=r.forwardRef(({className:o,...t},a)=>e.jsx(Be,{ref:a,className:f("flex cursor-default items-center justify-center py-1",o),...t,children:e.jsx(O,{className:"h-4 w-4"})}));uo.displayName=Be.displayName;const po=r.forwardRef(({className:o,children:t,position:a="popper",...i},s)=>e.jsx(zo,{children:e.jsxs(Fe,{ref:s,className:f("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",o),position:a,...i,children:[e.jsx(mo,{}),e.jsx(Lo,{className:f("p-1",a==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t}),e.jsx(uo,{})]})}));po.displayName=Fe.displayName;const Oa=r.forwardRef(({className:o,...t},a)=>e.jsx(Ge,{ref:a,className:f("py-1.5 pl-8 pr-2 text-sm font-semibold",o),...t}));Oa.displayName=Ge.displayName;const xo=r.forwardRef(({className:o,children:t,...a},i)=>e.jsxs(Ue,{ref:i,className:f("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",o),...a,children:[e.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(Mo,{children:e.jsx(Ve,{className:"h-4 w-4"})})}),e.jsx(Bo,{children:t})]}));xo.displayName=Ue.displayName;const qa=r.forwardRef(({className:o,...t},a)=>e.jsx(We,{ref:a,className:f("-mx-1 my-1 h-px bg-muted",o),...t}));qa.displayName=We.displayName;const Ie=()=>{const{language:o,setLanguage:t}=j(),a={pt:{name:"Português",flag:"🇵🇹"},en:{name:"English",flag:"🇬🇧"},es:{name:"Español",flag:"🇪🇸"}};return e.jsxs(ka,{value:o,onValueChange:i=>t(i),children:[e.jsx(lo,{className:"w-[120px] border-none focus:ring-0 focus-visible:ring-0 focus:ring-offset-0",children:e.jsx(Da,{children:e.jsx("div",{className:"flex items-center",children:e.jsx("span",{className:"mr-2 text-lg",children:a[o].flag})})})}),e.jsx(po,{children:Object.entries(a).map(([i,{name:s,flag:c}])=>e.jsx(xo,{value:i,className:"cursor-pointer",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"mr-2 text-lg",children:c}),e.jsx("span",{children:s})]})},i))})]})},ee=()=>{const[o,t]=r.useState(!1),[a,i]=r.useState(!1),{t:s}=j();r.useEffect(()=>{const x=()=>{i(window.scrollY>20)};return window.addEventListener("scroll",x),()=>window.removeEventListener("scroll",x)},[]);const c=()=>{t(!o)},p=[{name:s("nav.home"),href:"/"},{name:s("nav.about"),href:"#about"},{name:s("nav.ebooks"),href:"#ebooks"},{name:s("nav.services"),href:"#services"},{name:s("nav.contact"),href:"#contact"}];return e.jsx("header",{className:f("fixed w-full z-50 transition-all duration-500",a?"top-0":"top-4"),children:e.jsxs("div",{className:f("mx-auto transition-all duration-500",a?"max-w-full px-0":"max-w-6xl px-4"),children:[e.jsx("div",{className:f("transition-all duration-500",a?"glass border-b border-apple-gray-200/50 shadow-sm":"glass rounded-full border border-white/20 shadow-lg mx-4"),children:e.jsxs("div",{className:"flex items-center justify-between h-14 px-6",children:[e.jsxs(F,{to:"/",className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8",children:e.jsx("img",{src:"/lovable-uploads/2e9f76c9-9d45-432a-a3c8-6cf4006465c4.png",alt:"Ricardo Rouco Logo",className:"w-full h-full object-contain"})}),e.jsxs("span",{className:"font-semibold text-apple-gray-700 hidden sm:inline",children:["Ricardo",e.jsx("span",{className:"text-apple-blue",children:"Rouco"})]})]}),e.jsx("nav",{className:"hidden md:flex items-center gap-8",children:p.map(x=>x.href.startsWith("/")&&!x.href.includes("#")?e.jsx(F,{to:x.href,className:"text-apple-gray-600 hover:text-apple-gray-700 text-sm font-medium transition-colors duration-200",children:x.name},x.name):e.jsx("a",{href:x.href,className:"text-apple-gray-600 hover:text-apple-gray-700 text-sm font-medium transition-colors duration-200",children:x.name},x.name))}),e.jsxs("div",{className:"hidden md:flex items-center gap-3",children:[e.jsx(Ie,{}),e.jsx(v,{size:"sm",onClick:()=>window.open("https://www.grupoerre.pt","_blank"),children:"Grupo Erre"})]}),e.jsxs("div",{className:"md:hidden flex items-center gap-2",children:[e.jsx(Ie,{}),e.jsx("button",{className:"p-2 text-apple-gray-600 hover:text-apple-gray-700 focus:outline-none transition-colors",onClick:c,"aria-label":"Toggle menu",children:o?e.jsx($,{size:22}):e.jsx(Uo,{size:22})})]})]})}),e.jsx("div",{className:f("md:hidden overflow-hidden transition-all duration-300",o?"max-h-96 opacity-100":"max-h-0 opacity-0"),children:e.jsx("div",{className:f("mt-2 mx-4 glass rounded-2xl border border-white/20 shadow-lg",!o&&"pointer-events-none"),children:e.jsxs("div",{className:"py-4 px-6 flex flex-col gap-1",children:[p.map(x=>x.href.startsWith("/")&&!x.href.includes("#")?e.jsx(F,{to:x.href,className:"text-apple-gray-600 hover:text-apple-blue hover:bg-apple-blueSubtle px-4 py-3 rounded-xl transition-all duration-200 font-medium",onClick:()=>t(!1),children:x.name},x.name):e.jsx("a",{href:x.href,className:"text-apple-gray-600 hover:text-apple-blue hover:bg-apple-blueSubtle px-4 py-3 rounded-xl transition-all duration-200 font-medium",onClick:()=>t(!1),children:x.name},x.name)),e.jsx("div",{className:"mt-2 pt-2 border-t border-apple-gray-200",children:e.jsx(v,{className:"w-full",onClick:()=>{window.open("https://www.grupoerre.pt","_blank"),t(!1)},children:"Grupo Erre"})})]})})})]})})},oe=()=>{const{t:o}=j(),t=[{name:o("nav.home"),href:"/"},{name:o("nav.about"),href:"#about"},{name:o("nav.ebooks"),href:"#ebooks"},{name:o("nav.services"),href:"#services"},{name:o("nav.contact"),href:"#contact"}],a=[{icon:He,href:"https://github.com/ricardodsr",label:"GitHub"},{icon:Qe,href:"https://www.linkedin.com/in/ricardo-rouco-57420b37/",label:"LinkedIn"},{icon:Vo,href:"https://linktr.ee/ricardodsr",label:"Linktree"}];return e.jsx("footer",{className:"bg-apple-gray-100 py-16",children:e.jsxs("div",{className:"content-container",children:[e.jsxs("div",{className:"flex flex-col items-center text-center mb-12",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx("img",{src:"/lovable-uploads/2e9f76c9-9d45-432a-a3c8-6cf4006465c4.png",alt:"Ricardo Rouco",className:"h-10 w-10"}),e.jsxs("span",{className:"font-semibold text-apple-gray-700 text-lg",children:["Ricardo",e.jsx("span",{className:"text-apple-blue",children:"Rouco"})]})]}),e.jsx("p",{className:"text-body-md text-apple-gray-500 max-w-md",children:o("footer.about")})]}),e.jsx("nav",{className:"flex flex-wrap justify-center gap-6 md:gap-8 mb-12",children:t.map(i=>i.href.startsWith("/")&&!i.href.includes("#")?e.jsx(F,{to:i.href,className:"text-body-sm text-apple-gray-500 hover:text-apple-gray-700 transition-colors duration-200",children:i.name},i.name):e.jsx("a",{href:i.href,className:"text-body-sm text-apple-gray-500 hover:text-apple-gray-700 transition-colors duration-200",children:i.name},i.name))}),e.jsx("div",{className:"flex justify-center gap-4 mb-12",children:a.map(i=>e.jsx("a",{href:i.href,target:"_blank",rel:"noopener noreferrer","aria-label":i.label,className:"w-10 h-10 rounded-full bg-apple-gray-200 flex items-center justify-center text-apple-gray-500 hover:bg-apple-gray-300 hover:text-apple-gray-700 transition-all duration-200",children:e.jsx(i.icon,{size:18})},i.label))}),e.jsx("div",{className:"border-t border-apple-gray-200 pt-8",children:e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-4 text-body-xs text-apple-gray-400",children:[e.jsx("div",{className:"flex items-center gap-4",children:e.jsxs("p",{children:["© 2026 Ricardo Rouco. ",o("footer.copyright")]})}),e.jsxs("div",{className:"flex gap-6",children:[e.jsx(F,{to:"/privacy-policy",className:"hover:text-apple-gray-600 transition-colors duration-200",children:o("footer.privacy")}),e.jsx(F,{to:"/terms-of-service",className:"hover:text-apple-gray-600 transition-colors duration-200",children:o("footer.terms")})]})]})})]})})},za=()=>{const{t:o}=j();return e.jsxs("section",{className:"relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden bg-apple-gray-50",children:[e.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[e.jsx("div",{className:"absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-apple-blue/5 rounded-full blur-3xl animate-float"}),e.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl animate-float",style:{animationDelay:"2s"}}),e.jsx("div",{className:"absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl animate-float",style:{animationDelay:"4s"}})]}),e.jsxs("div",{className:"content-container-wide relative z-10",children:[e.jsxs("div",{className:"text-center max-w-4xl mx-auto mb-16",children:[e.jsx("p",{className:"text-apple-blue font-medium mb-4 opacity-0 animate-fade-up tracking-wide text-sm uppercase",children:o("hero.eyebrow")}),e.jsxs("h1",{className:"text-display-md md:text-display-lg lg:text-display-xl text-apple-gray-700 mb-6 opacity-0 animate-fade-up-delay-1",children:[o("hero.title")," ",e.jsx("span",{className:"text-apple-blue",children:o("hero.title.cybersecurity")}),","," ",e.jsx("span",{className:"text-apple-blue",children:o("hero.title.ai")})," & "," ",e.jsx("span",{className:"text-apple-blue",children:o("hero.title.webdev")})]}),e.jsx("p",{className:"text-body-lg md:text-body-xl text-apple-gray-500 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up-delay-2",children:o("hero.subtitle")}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up-delay-3",children:[e.jsxs(v,{size:"lg",onClick:()=>{var t;return(t=document.getElementById("services"))==null?void 0:t.scrollIntoView({behavior:"smooth"})},children:[o("hero.cta.services"),e.jsx($e,{className:"ml-2",size:18})]}),e.jsx(v,{variant:"secondary",size:"lg",onClick:()=>{var t;return(t=document.getElementById("ebooks"))==null?void 0:t.scrollIntoView({behavior:"smooth"})},children:o("hero.cta.ebooks")})]})]}),e.jsx("div",{className:"max-w-4xl mx-auto opacity-0 animate-fade-up-delay-4",children:e.jsxs("div",{className:"relative rounded-3xl overflow-hidden shadow-apple-lg",children:[e.jsx("div",{className:"absolute inset-0 rounded-3xl border border-apple-gray-200/50 pointer-events-none z-10"}),e.jsxs("video",{className:"w-full object-cover",style:{maxHeight:"450px"},controls:!0,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:[e.jsx("source",{src:"/video/demo.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]})]})})]}),e.jsx("div",{className:"absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce",children:e.jsx("a",{href:"#about",className:"text-apple-gray-400 hover:text-apple-gray-600 transition-colors","aria-label":"Scroll to about section",children:e.jsx(O,{size:28})})})]})},La=()=>{const{t:o}=j(),t=[{icon:_e,title:o("about.expertise.ai"),description:o("about.expertise.ai.desc")},{icon:M,title:o("about.expertise.cybersecurity"),description:o("about.expertise.cybersecurity.desc")},{icon:le,title:o("about.expertise.fullstack"),description:o("about.expertise.fullstack.desc")},{icon:Wo,title:o("about.expertise.corporate"),description:o("about.expertise.corporate.desc")}],a=[{icon:Qe,label:"LinkedIn",url:"https://www.linkedin.com/in/ricardo-rouco-57420b37/"},{icon:He,label:"GitHub",url:"https://github.com/ricardodsr/"},{icon:V,label:"CV (EN)",url:"CVRicardodsrEN.pdf"},{icon:V,label:"CV (PT)",url:"CVRicardodsrPT.pdf"}],i=[{icon:ie,label:"Microsoft",url:"https://learn.microsoft.com/pt-pt/users/ricardodsr/"},{icon:ie,label:"Google",url:"https://www.cloudskillsboost.google/public_profiles/257ad64d-c804-45e3-ac08-a5f4c982ecb7"},{icon:ie,label:"Cisco",url:"https://www.credly.com/users/ricardo-rouco"}],s=[{icon:Ho,label:o("about.cert.ethical")},{icon:Qo,label:o("about.cert.ai")},{icon:le,label:o("about.cert.fullstack")}];return e.jsx("section",{id:"about",className:"section-apple bg-white",children:e.jsxs("div",{className:"content-container-wide",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("h2",{className:"section-title",children:o("about.title")}),e.jsx("p",{className:"section-subtitle",children:o("about.intro")})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20",children:t.map((c,p)=>e.jsxs("div",{className:"subtle-card group cursor-default",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-apple-blueSubtle flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300",children:e.jsx(c.icon,{className:"text-apple-blue",size:24})}),e.jsx("h3",{className:"text-heading-sm text-apple-gray-700 mb-2",children:c.title}),e.jsx("p",{className:"text-body-md text-apple-gray-500",children:c.description})]},p))}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",children:[e.jsx("div",{className:"order-2 lg:order-2 flex justify-center",children:e.jsxs("div",{className:"relative w-full max-w-md",children:[e.jsx("div",{className:"aspect-[4/3] rounded-3xl overflow-hidden shadow-apple-lg",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",alt:"Technology",className:"w-full h-full object-cover",loading:"lazy",decoding:"async",width:600,height:450})}),e.jsx("div",{className:"absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-apple-gray-700 text-white px-5 py-3 md:px-6 md:py-4 rounded-2xl shadow-xl",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xl md:text-2xl font-bold",children:"10+"}),e.jsx("span",{className:"text-sm",children:o("about.exp")})]})})]})}),e.jsxs("div",{className:"order-1 lg:order-1",children:[e.jsx("h3",{className:"text-heading-xl text-apple-gray-700 mb-6",children:o("about.journey")}),e.jsx("p",{className:"text-body-lg text-apple-gray-500 mb-4",children:o("about.journey.desc1")}),e.jsx("p",{className:"text-body-lg text-apple-gray-500 mb-8",children:o("about.journey.desc2")}),e.jsx("div",{className:"flex flex-wrap gap-3 mb-4",children:a.map(c=>e.jsxs(v,{variant:"secondary",size:"sm",onClick:()=>window.open(c.url,"_blank"),children:[e.jsx(c.icon,{size:16,className:"mr-1.5 text-apple-blue"}),c.label]},c.label))}),e.jsx("div",{className:"flex flex-wrap gap-3 mb-8",children:i.map(c=>e.jsxs(v,{variant:"secondary",size:"sm",onClick:()=>window.open(c.url,"_blank"),children:[e.jsx(c.icon,{size:16,className:"mr-1.5 text-apple-blue"}),c.label]},c.label))}),e.jsx("div",{className:"flex flex-wrap gap-3",children:s.map((c,p)=>e.jsxs("div",{className:"flex items-center bg-apple-gray-100 px-4 py-2 rounded-full",children:[e.jsx(c.icon,{size:16,className:"text-apple-blue mr-2"}),e.jsx("span",{className:"text-body-sm font-medium text-apple-gray-600",children:c.label})]},p))})]})]})]})})},Ma=()=>{const[o,t]=r.useState("All"),[a,i]=r.useState(null),{t:s}=j(),c=[{id:1,title:"Cybersecurity 101",year:"2024",description:"Guia essencial de cibersegurança para pais e crianças.",category:["Cybersecurity"],coverImage:"https://ricardodsr.github.io/images/CS.jpg",downloadLink:"https://play.google.com/store/books/details?id=A3PrEAAAQBAJ"},{id:10,title:"Segurança Online para Jovens e Crianças",year:"2025",description:"No mundo atual, onde todas as crianças já sabem desde cedo como usar telemóveis e redes sociais, sabemos que a segurança dos filhos durante a utilização da tecnologia é uma preocupação para muitos pais.",category:["Cybersecurity"],coverImage:"/images/ciber-series.webp",downloadLink:"https://play.google.com/store/books/series?id=nV6VHAAAABAJQM"},{id:2,title:"Cibersegurança: Aprenda a Proteger a Sua Empresa",year:"2023",description:"A cibersegurança é um tópico cada vez mais importante em nossa sociedade digital.",category:["Cybersecurity"],coverImage:"https://raw.githubusercontent.com/ricardodsr/ricardodsr.github.io/main/images/cibersecurity%20Cover.jpg",downloadLink:"https://play.google.com/store/books/details?id=IBTqEAAAQBAJ"},{id:3,title:"AI!",year:"2023",description:"Neste livro, você vai aprender o que são prompts, por que eles são importantes para a comunicação com sistemas de inteligência artificial gerativos, e como criar prompts eficazes para obter os resultados desejados.",category:["AI"],coverImage:"https://ricardodsr.github.io/images/GGKEY_46F30TQTCGL_frontcover.jpg",downloadLink:"https://play.google.com/store/books/details?id=p3nGEAAAQBAJ"},{id:4,title:"Fundamentos de programação em Python",year:"2022",description:"Neste livro, ira aprender os conceitos básicos de Python",category:["Programming"],coverImage:"https://ricardodsr.github.io/images/ZiJ6EAAAQBAJ.jpeg",downloadLink:"https://play.google.com/store/books/details?id=ZiJ6EAAAQBAJ"},{id:5,title:"Introdução a Programação Funcional",year:"2022",description:"Haskell é uma linguagem elegante, expressiva e poderosa",category:["Programming"],coverImage:"https://ricardodsr.github.io/images/8Il6EAAAQBAJ.jpeg",downloadLink:"https://play.google.com/store/books/details?id=8Il6EAAAQBAJ"},{id:6,title:"Uma pequena introdução as criptomoedas",year:"2021",description:"Aqui vai encontrar uma explicação simples e didática sobre os conceitos básicos das criptomoedas.",category:["Blockchain"],coverImage:"https://ricardodsr.github.io/images/ZCJ6EAAAQBAJ.jpeg",downloadLink:"https://play.google.com/store/books/details/Ricardo_Rouco_Uma_pequena_introdu%C3%A7%C3%A3o_as_cripto_moe?id=ZCJ6EAAAQBAJ"},{id:9,title:"Engenharia de Prompts",year:"2025",description:"A engenharia de prompts é uma disciplina emergente e fundamental no campo da inteligência artificial generativa.",category:["AI"],coverImage:"https://ricardodsr.github.io/images/2B1aEQAAQBAJ.jpeg",downloadLink:"https://play.google.com/store/books/details?id=2B1aEQAAQBAJ"},{id:7,title:"Algoritmos e estruturas de dados",year:"2024",description:"Algoritmos e estruturas de dados são as bases da programação. Este livro tem como objetivo apresentar os conceitos fundamentais destas áreas, desde os algoritmos mais básicos até as estruturas de dados mais complexas.",category:["Programming"],coverImage:"https://ricardodsr.github.io/images/aLGORITMOS.jpg",downloadLink:"https://play.google.com/store/books/details?id=k5YUEQAAQBAJ",isFree:!0}],p=["All","Cybersecurity","Programming","AI","Blockchain"],x=o==="All"?c:c.filter(b=>b.category.includes(o));return e.jsx("section",{id:"ebooks",className:"section-apple bg-apple-gray-50",children:e.jsxs("div",{className:"content-container-wide",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("h2",{className:"section-title",children:s("ebooks.title")}),e.jsx("p",{className:"section-subtitle",children:s("ebooks.subtitle")})]}),e.jsx("div",{className:"flex flex-wrap justify-center gap-2 mb-12",children:p.map(b=>e.jsx("button",{onClick:()=>t(b),className:`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${o===b?"bg-apple-gray-700 text-white":"bg-white text-apple-gray-600 hover:bg-apple-gray-100 shadow-sm"}`,children:b},b))}),e.jsx("div",{className:"mb-16",children:e.jsxs("div",{className:"relative overflow-hidden rounded-3xl bg-gradient-to-br from-apple-blue via-blue-600 to-blue-700 p-8 md:p-12",children:[e.jsxs("div",{className:"absolute inset-0 opacity-10 pointer-events-none",children:[e.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-48 translate-x-48"}),e.jsx("div",{className:"absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-32 -translate-x-32"})]}),e.jsxs("div",{className:"relative flex flex-col lg:flex-row items-center gap-8",children:[e.jsxs("div",{className:"flex-1 text-white",children:[e.jsx("span",{className:"inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4",children:s("ebooks.math.free")}),e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-4xl",children:"📐"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-heading-xl md:text-display-md",children:s("ebooks.math.title")}),e.jsx("p",{className:"text-white/80",children:s("ebooks.math.subtitle")})]})]}),e.jsx("p",{className:"text-white/80 mb-6 max-w-xl",children:s("ebooks.math.description")}),e.jsxs("div",{className:"flex flex-wrap gap-4 mb-8",children:[e.jsxs("div",{className:"bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl",children:[e.jsx("div",{className:"text-2xl font-bold",children:"16"}),e.jsx("div",{className:"text-sm text-white/70",children:s("ebooks.math.topics")})]}),e.jsxs("div",{className:"bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl",children:[e.jsx("div",{className:"text-2xl font-bold",children:"120"}),e.jsx("div",{className:"text-sm text-white/70",children:s("ebooks.math.exercises")})]}),e.jsxs("div",{className:"bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl",children:[e.jsx("div",{className:"text-2xl font-bold",children:"97"}),e.jsx("div",{className:"text-sm text-white/70",children:s("ebooks.math.subtopics")})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(F,{to:"/matematica-12ano",children:e.jsxs(v,{variant:"glass",size:"lg",children:[e.jsx(Je,{size:18,className:"mr-2"}),s("ebooks.math.accessCourse")]})}),e.jsxs(v,{variant:"glass",size:"lg",onClick:()=>window.open("https://play.google.com/store/books/details/Ricardo_Rouco_Resumos_de_matem%C3%A1tica_12%C2%BA_ano?id=jZUUEQAAQBAJ","_blank"),children:[e.jsx(ve,{size:18,className:"mr-2"}),s("ebooks.math.viewSummaries")]})]}),e.jsxs("div",{className:"flex flex-wrap gap-3 mt-4",children:[e.jsxs(v,{variant:"glass",size:"default",className:"border-yellow-400/50 hover:bg-yellow-400/20",onClick:()=>window.open("https://paypal.me/ricardorouco","_blank"),children:[e.jsx(Ae,{size:16,className:"mr-2 text-yellow-300"}),s("ebooks.donate.paypal")]}),e.jsxs(v,{variant:"glass",size:"default",className:"border-yellow-400/50 hover:bg-yellow-400/20",onClick:()=>window.open("https://buymeacoffee.com/ricardorou2","_blank"),children:[e.jsx(Ce,{size:16,className:"mr-2 text-yellow-300"}),s("ebooks.donate.coffee")]})]})]}),e.jsx("div",{className:"hidden lg:block w-48 h-64 rounded-2xl overflow-hidden shadow-2xl flex-shrink-0",children:e.jsx("img",{src:"https://ricardodsr.github.io/images/Resumos12.jpg",alt:s("ebooks.math.title"),className:"w-full h-full object-cover",loading:"lazy",decoding:"async",width:192,height:256})})]})]})}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:x.map(b=>{const A=a===b.id;return e.jsxs("div",{className:"apple-card overflow-hidden flex flex-col group",children:[e.jsxs("div",{className:"relative aspect-[3/4] overflow-hidden",children:[b.isFree&&e.jsx("span",{className:"absolute top-3 right-3 z-10 px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full",children:s("ebooks.math.free")}),e.jsx("img",{src:b.coverImage,alt:b.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",loading:"lazy",decoding:"async",width:300,height:400})]}),e.jsxs("div",{className:"p-5 flex flex-col flex-grow",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsx("h3",{className:"text-heading-sm text-apple-gray-700 line-clamp-2 flex-1",children:b.title}),e.jsx("span",{className:"text-body-xs text-apple-gray-400 ml-2 flex-shrink-0",children:b.year})]}),e.jsxs("div",{className:"mb-4 flex-grow",children:[e.jsx("p",{className:`text-body-sm text-apple-gray-500 transition-all duration-300 ${A?"":"line-clamp-2"}`,children:b.description}),e.jsxs("button",{onClick:()=>i(A?null:b.id),className:"flex items-center gap-1 text-apple-blue hover:text-apple-blueHover text-sm font-medium mt-2 transition-colors",children:[e.jsx("span",{children:s(A?"ebooks.showLess":"ebooks.showMore")}),e.jsx(O,{size:14,className:`transform transition-transform duration-300 ${A?"rotate-180":""}`})]})]}),e.jsxs("div",{className:"space-y-2 mt-auto",children:[e.jsxs(v,{size:"sm",className:"w-full",onClick:()=>window.open(b.downloadLink,"_blank"),children:[e.jsx(ve,{size:16,className:"mr-1.5"}),s("ebooks.googleBooks")]}),b.isFree&&e.jsxs("div",{className:"flex gap-2",children:[e.jsxs(v,{variant:"outline",size:"sm",className:"flex-1 border-[#003087] text-[#003087] hover:bg-[#003087] hover:text-white",onClick:()=>window.open("https://paypal.me/ricardorouco","_blank"),children:[e.jsx(Ae,{size:14,className:"mr-1"}),"PayPal"]}),e.jsxs(v,{variant:"outline",size:"sm",className:"flex-1 border-[#FFDD00] text-apple-gray-700 hover:bg-[#FFDD00]",onClick:()=>window.open("https://buymeacoffee.com/ricardorou2","_blank"),children:[e.jsx(Ce,{size:14,className:"mr-1"}),"Coffee"]})]})]})]})]},b.id)})})]})})},Ba=()=>{const{t:o}=j(),t=[{icon:_e,title:o("services.ai"),description:o("services.ai.desc"),primary:!0},{icon:M,title:o("services.cybersecurity"),description:o("services.cybersecurity.desc"),primary:!1},{icon:le,title:o("services.webdev"),description:o("services.webdev.desc"),primary:!1},{icon:Je,title:o("services.training"),description:o("services.training.desc"),primary:!1}];return e.jsx("section",{id:"services",className:"section-apple bg-apple-gray-50",children:e.jsxs("div",{className:"content-container-wide",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("h2",{className:"section-title",children:o("services.title")}),e.jsx("p",{className:"section-subtitle",children:o("services.subtitle")})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:t.map((a,i)=>e.jsx("div",{className:`group p-8 rounded-2xl transition-all duration-300 cursor-pointer ${a.primary?"bg-apple-gray-700 hover:bg-apple-gray-600 text-white":"bg-white hover:shadow-apple-hover"}`,onClick:()=>{var s;return(s=document.getElementById("contact"))==null?void 0:s.scrollIntoView({behavior:"smooth"})},children:e.jsxs("div",{className:"flex gap-6",children:[e.jsx("div",{className:`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ${a.primary?"bg-apple-blue/20":"bg-apple-blueSubtle"}`,children:e.jsx(a.icon,{className:(a.primary,"text-apple-blue"),size:26})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:`text-heading-md mb-2 ${a.primary?"text-white":"text-apple-gray-700"}`,children:a.title}),e.jsx("p",{className:`text-body-md mb-4 ${a.primary?"text-apple-gray-300":"text-apple-gray-500"}`,children:a.description}),e.jsxs("span",{className:`font-medium inline-flex items-center text-sm group-hover:gap-2 transition-all duration-200 ${a.primary,"text-apple-blue"}`,children:[o("services.requestQuote"),e.jsx($e,{size:16,className:"ml-1 group-hover:translate-x-1 transition-transform"})]})]})]})},i))})]})})},Fa=()=>{const{t:o}=j(),{toast:t}=ao(),[a,i]=r.useState(!1),[s,c]=r.useState({name:"",email:"",company:"",message:""}),p=[o("cta.benefit1"),o("cta.benefit2"),o("cta.benefit3"),o("cta.benefit4")],x=A=>{const{id:I,value:P}=A.target;c(C=>({...C,[I]:P}))},b=async A=>{var I,P;A.preventDefault(),i(!0);try{let C="Unknown";try{C=(await we.get("https://api.ipify.org?format=json")).data.ip}catch{}const w={userAgent:navigator.userAgent,language:navigator.language,languages:((I=navigator.languages)==null?void 0:I.join(", "))??"",timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,screenResolution:`${screen.width}x${screen.height}`,colorDepth:screen.colorDepth,platform:navigator.platform,referrer:document.referrer||"direct",pageUrl:window.location.href,doNotTrack:navigator.doNotTrack??"unset",cookiesEnabled:navigator.cookieEnabled,onLine:navigator.onLine,hardwareConcurrency:navigator.hardwareConcurrency,deviceMemory:navigator.deviceMemory??"unknown",maxTouchPoints:navigator.maxTouchPoints,connectionType:((P=navigator.connection)==null?void 0:P.effectiveType)??"unknown"};await we.post("https://formspree.io/f/meqbjyey",{...s,_ip:C,_timestamp:new Date().toISOString(),_device_info:JSON.stringify(w,null,2)}),t({title:o("cta.form.success.title"),description:o("cta.form.success.message"),variant:"default"}),c({name:"",email:"",company:"",message:""})}catch(C){console.error("Error submitting form:",C),t({title:o("cta.form.error.title"),description:o("cta.form.error.message"),variant:"destructive"})}finally{i(!1)}};return e.jsxs("section",{id:"contact",className:"section-apple relative overflow-hidden bg-apple-gray-700",children:[e.jsxs("div",{className:"absolute inset-0",children:[e.jsx("div",{className:"absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-apple-blue/10 to-transparent"}),e.jsx("div",{className:"absolute bottom-0 left-0 w-96 h-96 bg-apple-blue/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"})]}),e.jsx("div",{className:"content-container-wide relative z-10",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",children:[e.jsxs("div",{className:"text-white",children:[e.jsx("h2",{className:"text-display-md mb-6 text-apple-gray-300",children:o("cta.title")}),e.jsx("p",{className:"text-body-xl text-apple-gray-300 mb-10",children:o("cta.subtitle")}),e.jsx("ul",{className:"space-y-4",children:p.map((A,I)=>e.jsxs("li",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-apple-blue flex items-center justify-center flex-shrink-0",children:e.jsx(Ve,{size:14})}),e.jsx("span",{className:"text-body-lg text-apple-gray-300",children:A})]},I))})]}),e.jsxs("div",{className:"glass rounded-3xl p-8 md:p-10",children:[e.jsx("h3",{className:"text-heading-lg text-apple-gray-700 mb-6",children:o("cta.contact")}),e.jsxs("form",{className:"space-y-5",onSubmit:b,children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-body-sm font-medium text-apple-gray-600 mb-2",children:o("cta.form.name")}),e.jsx("input",{type:"text",id:"name",value:s.name,onChange:x,className:"input-apple",placeholder:o("cta.form.placeholder.name"),required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-body-sm font-medium text-apple-gray-600 mb-2",children:o("cta.form.email")}),e.jsx("input",{type:"email",id:"email",value:s.email,onChange:x,className:"input-apple",placeholder:o("cta.form.placeholder.email"),required:!0})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"company",className:"block text-body-sm font-medium text-apple-gray-600 mb-2",children:o("cta.form.company")}),e.jsx("input",{type:"text",id:"company",value:s.company,onChange:x,className:"input-apple",placeholder:o("cta.form.placeholder.company")})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"message",className:"block text-body-sm font-medium text-apple-gray-600 mb-2",children:o("cta.form.message")}),e.jsx("textarea",{id:"message",rows:4,value:s.message,onChange:x,className:"input-apple resize-none",placeholder:o("cta.form.placeholder.message"),required:!0})]}),e.jsx(v,{type:"submit",disabled:a,size:"lg",className:"w-full",children:o(a?"cta.form.sending":"cta.form.send")})]})]})]})})]})},Ga=[{keywords:[],primaryKeywords:["quem é ricardo","quem é ricardo rouco","who is ricardo","who is ricardo rouco","quien es ricardo","sobre ricardo","about ricardo"],secondaryKeywords:["ricardo","perfil","profile","biografia"],category:"identity",priority:10,responseType:"detailed",responses:{pt:`👨‍💻 Ricardo Rouco é um verdadeiro apaixonado por tecnologia! Com mais de 10 anos de experiência, atualmente lidera como **Head of Development & AI R&D no Grupo Erre**, onde desenvolve soluções inovadoras.

🎯 **Especialidades:**
• Cibersegurança (Certificado Cisco)
• Inteligência Artificial (Certificado Google & Microsoft)
• Desenvolvimento Web Full-Stack
• DevOps & Cloud

📚 **Autor de 9 e-books** técnicos no Google Play Books (2 gratuitos!)
👨‍🏫 **Tutor** desde 2010 em programação e matemática
🚀 **Fundador** da DIGITALWISH (2017-presente)
💼 **Ex-CTO** na NETIC Espanha

💡 *Ricardo transforma desafios técnicos complexos em soluções elegantes e eficientes!*`,en:`👨‍💻 Ricardo Rouco is truly passionate about technology! With over 10 years of experience, he currently leads as **Head of Development & AI R&D at Grupo Erre**, developing innovative solutions.

🎯 **Specialties:**
• Cybersecurity (Cisco Certified)
• Artificial Intelligence (Google & Microsoft Certified)
• Full-Stack Web Development
• DevOps & Cloud

📚 **Author of 9 technical e-books** on Google Play Books (2 free!)
👨‍🏫 **Tutor** since 2010 in programming and mathematics
🚀 **Founder** of DIGITALWISH (2017-present)
💼 **Former CTO** at NETIC Spain

💡 *Ricardo transforms complex technical challenges into elegant and efficient solutions!*`,es:`👨‍💻 Ricardo Rouco es un verdadero apasionado de la tecnología! Con más de 10 años de experiencia, actualmente lidera como **Head of Development & AI R&D en Grupo Erre**, desarrollando soluciones innovadoras.

🎯 **Especialidades:**
• Ciberseguridad (Certificado Cisco)
• Inteligencia Artificial (Certificado Google & Microsoft)
• Desarrollo Web Full-Stack
• DevOps & Cloud

📚 **Autor de 9 e-books** técnicos en Google Play Books (¡2 gratuitos!)
👨‍🏫 **Tutor** desde 2010 en programación y matemáticas
🚀 **Fundador** de DIGITALWISH (2017-presente)
💼 **Ex-CTO** en NETIC España

💡 *Ricardo transforma desafíos técnicos complejos en soluciones elegantes y eficientes!*`},shortResponses:{pt:"Head of Development & AI R&D no Grupo Erre. 10+ anos experiência. Especialista em cibersegurança, IA e desenvolvimento. Autor de 9 e-books.",en:"Head of Development & AI R&D at Grupo Erre. 10+ years experience. Expert in cybersecurity, AI and development. Author of 9 e-books.",es:"Head of Development & AI R&D en Grupo Erre. 10+ años experiencia. Experto en ciberseguridad, IA y desarrollo. Autor de 9 e-books."},followUp:{pt:["Que serviços oferece?","Ver projetos realizados","Quais e-books gratuitos?","Como posso contactar?"],en:["What services does he offer?","See completed projects","Which e-books are free?","How can I contact him?"],es:["¿Qué servicios ofrece?","Ver proyectos realizados","¿Qué e-books son gratuitos?","¿Cómo puedo contactarlo?"]}},{keywords:["experiência","experience","experiencia","trabalho","work","carreira","career","anos","years"],primaryKeywords:["experiência profissional","professional experience","carreira ricardo","trajetória","currículo","cv"],secondaryKeywords:["head of development","grupo erre","digitalwish","cto netic","10 anos"],contextualKeywords:["trabalho","work","carreira","profissional","histórico"],category:"about",priority:9,responseType:"detailed",responses:{pt:`🚀 **Trajetória Profissional de Ricardo:**

**ATUAL (2024-presente):**
🏢 **Head of Development & AI R&D** - Grupo Erre
• Liderança de equipas de desenvolvimento
• Pesquisa e implementação de soluções IA
• Arquitetura de sistemas empresariais

**FUNDADOR (2017-presente):**
💼 **DIGITALWISH** - Consultoria Tech
• Desenvolvimento web & mobile
• Consultoria em cibersegurança
• Identidade corporativa & branding
• 15+ projetos entregues com sucesso

**EXPERIÊNCIA ANTERIOR:**
🌍 **CTO** - NETIC (Espanha, 2023-2024)
👨‍💻 **Developer Full-Stack** - Developer FB (Brasil, 2020-2022)
🔧 **Technical roles** desde 2012

📊 **Números:**
• 10+ anos de experiência
• 30+ repositórios open-source
• 15+ projetos empresariais concluídos
• 9 e-books publicados

💪 *Uma década construindo soluções que realmente fazem a diferença!*`,en:`🚀 **Ricardo's Professional Journey:**

**CURRENT (2024-present):**
🏢 **Head of Development & AI R&D** - Grupo Erre
• Leading development teams
• Research and implementation of AI solutions
• Enterprise systems architecture

**FOUNDER (2017-present):**
💼 **DIGITALWISH** - Tech Consulting
• Web & mobile development
• Cybersecurity consulting
• Corporate identity & branding
• 15+ successfully delivered projects

**PREVIOUS EXPERIENCE:**
🌍 **CTO** - NETIC (Spain, 2023-2024)
👨‍💻 **Full-Stack Developer** - Developer FB (Brazil, 2020-2022)
🔧 **Technical roles** since 2012

📊 **Numbers:**
• 10+ years of experience
• 30+ open-source repositories
• 15+ completed business projects
• 9 published e-books

💪 *A decade building solutions that truly make a difference!*`,es:`🚀 **Trayectoria Profesional de Ricardo:**

**ACTUAL (2024-presente):**
🏢 **Head of Development & AI R&D** - Grupo Erre
• Liderazgo de equipos de desarrollo
• Investigación e implementación de soluciones IA
• Arquitectura de sistemas empresariales

**FUNDADOR (2017-presente):**
💼 **DIGITALWISH** - Consultoría Tech
• Desarrollo web & móvil
• Consultoría en ciberseguridad
• Identidad corporativa & branding
• 15+ proyectos entregados con éxito

**EXPERIENCIA ANTERIOR:**
🌍 **CTO** - NETIC (España, 2023-2024)
👨‍💻 **Developer Full-Stack** - Developer FB (Brasil, 2020-2022)
🔧 **Roles técnicos** desde 2012

📊 **Números:**
• 10+ años de experiencia
• 30+ repositorios open-source
• 15+ proyectos empresariales completados
• 9 e-books publicados

💪 *¡Una década construyendo soluciones que realmente marcan la diferencia!*`},shortResponses:{pt:"Head of Development & AI R&D (Grupo Erre), fundador DIGITALWISH, ex-CTO NETIC. 10+ anos, 15+ projetos concluídos.",en:"Head of Development & AI R&D (Grupo Erre), DIGITALWISH founder, former CTO NETIC. 10+ years, 15+ completed projects.",es:"Head of Development & AI R&D (Grupo Erre), fundador DIGITALWISH, ex-CTO NETIC. 10+ años, 15+ proyectos completados."},followUp:{pt:["Ver projetos específicos","Que tecnologias domina?","Como solicitar orçamento?","Está disponível para projetos?"],en:["See specific projects","What technologies does he master?","How to request a quote?","Is he available for projects?"],es:["Ver proyectos específicos","¿Qué tecnologías domina?","¿Cómo solicitar presupuesto?","¿Está disponible para proyectos?"]}},{keywords:["tecnologias","technologies","linguagens","languages","programação","programming","stack","skills","competências"],primaryKeywords:["tecnologias ricardo","competências técnicas","skills ricardo","stack técnico","linguagens programação","que sabe fazer"],secondaryKeywords:["javascript","python","react","vue","docker","kubernetes","devops","typescript","node","java"],contextualKeywords:["programação","programming","tecnologias","languages","desenvolvimento","ferramentas"],category:"skills",priority:10,responseType:"detailed",responses:{pt:`💻 **Stack Técnico Completo de Ricardo:**

**LINGUAGENS DE PROGRAMAÇÃO:**
🔹 JavaScript/TypeScript (Expert) - React, Vue.js, Node.js
🔹 Python (Expert) - Django, Flask, Data Science
🔹 Java (Avançado) - Spring Boot, Enterprise
🔹 PHP (Avançado) - Laravel, WordPress
🔹 C/C++ - Sistemas e Performance
🔹 Haskell - Programação Funcional
🔹 SQL & NoSQL - PostgreSQL, MongoDB, Redis

**FRAMEWORKS & BIBLIOTECAS:**
⚛️ React.js & Next.js - Apps modernas
💚 Vue.js & Nuxt.js - Interfaces interativas
🎨 Tailwind CSS - Design systems
📱 React Native - Mobile cross-platform

**DEVOPS & INFRAESTRUTURA:**
🐳 Docker & Docker Compose
☸️ Kubernetes - Orquestração
🔄 CI/CD - GitHub Actions, GitLab CI
🐧 Linux Administration - Ubuntu, CentOS
☁️ Cloud - AWS, DigitalOcean
🔧 Nginx, Apache

**DESIGN & CRIATIVIDADE:**
🎨 UI/UX Design
🖼️ Adobe Creative Suite (Photoshop, Illustrator)
✨ Affinity Design
📐 Figma, Adobe XD

**ESPECIALIDADES:**
🔒 **Cibersegurança** - Pentesting, análise vulnerabilidades (Certificado Cisco)
🤖 **Inteligência Artificial** - ML, Prompt Engineering (Certificado Google & Microsoft)
⚡ **Performance** - Otimização, escalabilidade

🎯 *Um arsenal completo para transformar ideias em realidade digital!*`,en:`💻 **Ricardo's Complete Technical Stack:**

**PROGRAMMING LANGUAGES:**
🔹 JavaScript/TypeScript (Expert) - React, Vue.js, Node.js
🔹 Python (Expert) - Django, Flask, Data Science
🔹 Java (Advanced) - Spring Boot, Enterprise
🔹 PHP (Advanced) - Laravel, WordPress
🔹 C/C++ - Systems and Performance
🔹 Haskell - Functional Programming
🔹 SQL & NoSQL - PostgreSQL, MongoDB, Redis

**FRAMEWORKS & LIBRARIES:**
⚛️ React.js & Next.js - Modern apps
💚 Vue.js & Nuxt.js - Interactive interfaces
🎨 Tailwind CSS - Design systems
📱 React Native - Cross-platform mobile

**DEVOPS & INFRASTRUCTURE:**
🐳 Docker & Docker Compose
☸️ Kubernetes - Orchestration
🔄 CI/CD - GitHub Actions, GitLab CI
🐧 Linux Administration - Ubuntu, CentOS
☁️ Cloud - AWS, DigitalOcean
🔧 Nginx, Apache

**DESIGN & CREATIVITY:**
🎨 UI/UX Design
🖼️ Adobe Creative Suite (Photoshop, Illustrator)
✨ Affinity Design
📐 Figma, Adobe XD

**SPECIALTIES:**
🔒 **Cybersecurity** - Pentesting, vulnerability analysis (Cisco Certified)
🤖 **Artificial Intelligence** - ML, Prompt Engineering (Google & Microsoft Certified)
⚡ **Performance** - Optimization, scalability

🎯 *A complete arsenal to transform ideas into digital reality!*`,es:`💻 **Stack Técnico Completo de Ricardo:**

**LENGUAJES DE PROGRAMACIÓN:**
🔹 JavaScript/TypeScript (Experto) - React, Vue.js, Node.js
🔹 Python (Experto) - Django, Flask, Data Science
🔹 Java (Avanzado) - Spring Boot, Enterprise
🔹 PHP (Avanzado) - Laravel, WordPress
🔹 C/C++ - Sistemas y Rendimiento
🔹 Haskell - Programación Funcional
🔹 SQL & NoSQL - PostgreSQL, MongoDB, Redis

**FRAMEWORKS & BIBLIOTECAS:**
⚛️ React.js & Next.js - Apps modernas
💚 Vue.js & Nuxt.js - Interfaces interactivas
🎨 Tailwind CSS - Design systems
📱 React Native - Móvil multiplataforma

**DEVOPS & INFRAESTRUCTURA:**
🐳 Docker & Docker Compose
☸️ Kubernetes - Orquestación
🔄 CI/CD - GitHub Actions, GitLab CI
🐧 Linux Administration - Ubuntu, CentOS
☁️ Cloud - AWS, DigitalOcean
🔧 Nginx, Apache

**DISEÑO & CREATIVIDAD:**
🎨 UI/UX Design
🖼️ Adobe Creative Suite (Photoshop, Illustrator)
✨ Affinity Design
📐 Figma, Adobe XD

**ESPECIALIDADES:**
🔒 **Ciberseguridad** - Pentesting, análisis vulnerabilidades (Certificado Cisco)
🤖 **Inteligencia Artificial** - ML, Prompt Engineering (Certificado Google & Microsoft)
⚡ **Performance** - Optimización, escalabilidad

🎯 *¡Un arsenal completo para transformar ideas en realidad digital!*`},shortResponses:{pt:"JavaScript/TS, React, Vue, Python, Java, Node.js, Docker, Kubernetes. Especialista cibersegurança e IA. Full-stack + DevOps.",en:"JavaScript/TS, React, Vue, Python, Java, Node.js, Docker, Kubernetes. Cybersecurity and AI expert. Full-stack + DevOps.",es:"JavaScript/TS, React, Vue, Python, Java, Node.js, Docker, Kubernetes. Experto ciberseguridad e IA. Full-stack + DevOps."},followUp:{pt:["Ver projetos com estas tecnologias","Que certificações possui?","Faz formação/workshops?","Solicitar orçamento"],en:["See projects with these technologies","What certifications does he have?","Does he offer training/workshops?","Request quote"],es:["Ver proyectos con estas tecnologías","¿Qué certificaciones tiene?","¿Ofrece formación/talleres?","Solicitar presupuesto"]}},{keywords:["serviços","services","servicios","oferece","offer","ofrece","faz","does","hace","ajuda","help","pode fazer"],primaryKeywords:["que serviços","serviços ricardo","what services","servicios ricardo","o que faz","what does he do"],secondaryKeywords:["consultoria","consulting","desenvolvimento","development","projetos","trabalho"],contextualKeywords:["serviços","services","help","consultoria","trabalho"],category:"services-overview",priority:10,responseType:"detailed",responses:{pt:`🎯 **Serviços Profissionais de Ricardo Rouco:**

**1. 🔒 CIBERSEGURANÇA**
• Pentesting & Análise de Vulnerabilidades
• Auditorias de Segurança
• Implementação de sistemas seguros
• Consultoria especializada
*Certificado Cisco | Experiência comprovada*

**2. 💻 DESENVOLVIMENTO WEB**
• Websites & Landing Pages
• E-commerce completos
• Aplicações Web complexas
• APIs & Integrações
• Manutenção e suporte
*React, Vue.js, Node.js, Python, PHP*

**3. 🤖 INTELIGÊNCIA ARTIFICIAL**
• Consultoria em IA
• Implementação de soluções IA
• Automação de processos
• Análise de dados & insights
*Certificado Google & Microsoft*

**4. 🎨 DESIGN & BRANDING**
• Identidade Corporativa
• Logos & Material gráfico
• UI/UX Design
• Rebranding
*Adobe Suite | Design profissional*

**5. 👨‍🏫 FORMAÇÃO & WORKSHOPS**
• Programação (Python, Java, C++, React, Vue)
• Matemática (10º-12º, Universidade)
• Cibersegurança
• Inteligência Artificial
*Tutor desde 2010 | Experiência comprovada*

**6. 📱 SOLUÇÕES MOBILE**
• Apps iOS & Android
• React Native
• Progressive Web Apps

💼 **TRABALHO FLEXÍVEL:**
✅ Projetos completos
✅ Consultoria pontual
✅ Desenvolvimento contínuo
✅ Suporte técnico
✅ Remoto ou presencial

📞 **QUER DISCUTIR SEU PROJETO?**
📧 ricardo.rouco@gmail.com
🔗 linktr.ee/ricardodsr`,en:`🎯 **Ricardo Rouco's Professional Services:**

**1. 🔒 CYBERSECURITY**
• Pentesting & Vulnerability Analysis
• Security Audits
• Secure systems implementation
• Specialized consulting
*Cisco Certified | Proven experience*

**2. 💻 WEB DEVELOPMENT**
• Websites & Landing Pages
• Complete E-commerce
• Complex Web Applications
• APIs & Integrations
• Maintenance and support
*React, Vue.js, Node.js, Python, PHP*

**3. 🤖 ARTIFICIAL INTELLIGENCE**
• AI Consulting
• AI solutions implementation
• Process automation
• Data analysis & insights
*Google & Microsoft Certified*

**4. 🎨 DESIGN & BRANDING**
• Corporate Identity
• Logos & Graphic materials
• UI/UX Design
• Rebranding
*Adobe Suite | Professional design*

**5. 👨‍🏫 TRAINING & WORKSHOPS**
• Programming (Python, Java, C++, React, Vue)
• Mathematics (High School, University)
• Cybersecurity
• Artificial Intelligence
*Tutor since 2010 | Proven experience*

**6. 📱 MOBILE SOLUTIONS**
• iOS & Android Apps
• React Native
• Progressive Web Apps

💼 **FLEXIBLE WORK:**
✅ Complete projects
✅ One-time consulting
✅ Continuous development
✅ Technical support
✅ Remote or on-site

📞 **WANT TO DISCUSS YOUR PROJECT?**
📧 ricardo.rouco@gmail.com
🔗 linktr.ee/ricardodsr`,es:`🎯 **Servicios Profesionales de Ricardo Rouco:**

**1. 🔒 CIBERSEGURIDAD**
• Pentesting & Análisis de Vulnerabilidades
• Auditorías de Seguridad
• Implementación de sistemas seguros
• Consultoría especializada
*Certificado Cisco | Experiencia comprobada*

**2. 💻 DESARROLLO WEB**
• Sitios Web & Landing Pages
• E-commerce completos
• Aplicaciones Web complejas
• APIs e Integraciones
• Mantenimiento y soporte
*React, Vue.js, Node.js, Python, PHP*

**3. 🤖 INTELIGENCIA ARTIFICIAL**
• Consultoría en IA
• Implementación de soluciones IA
• Automatización de procesos
• Análisis de datos & insights
*Certificado Google & Microsoft*

**4. 🎨 DISEÑO & BRANDING**
• Identidad Corporativa
• Logos & Material gráfico
• UI/UX Design
• Rebranding
*Adobe Suite | Diseño profesional*

**5. 👨‍🏫 FORMACIÓN & TALLERES**
• Programación (Python, Java, C++, React, Vue)
• Matemáticas (Bachillerato, Universidad)
• Ciberseguridad
• Inteligencia Artificial
*Tutor desde 2010 | Experiencia comprobada*

**6. 📱 SOLUCIONES MÓVILES**
• Apps iOS & Android
• React Native
• Progressive Web Apps

💼 **TRABAJO FLEXIBLE:**
✅ Proyectos completos
✅ Consultoría puntual
✅ Desarrollo continuo
✅ Soporte técnico
✅ Remoto o presencial

📞 **¿QUIERES DISCUTIR TU PROYECTO?**
📧 ricardo.rouco@gmail.com
🔗 linktr.ee/ricardodsr`},shortResponses:{pt:"Cibersegurança, Desenvolvimento Web, IA, Design/Branding, Formação/Workshops, Apps Mobile. Flexível: projetos, consultoria, suporte.",en:"Cybersecurity, Web Development, AI, Design/Branding, Training/Workshops, Mobile Apps. Flexible: projects, consulting, support.",es:"Ciberseguridad, Desarrollo Web, IA, Diseño/Branding, Formación/Talleres, Apps Móviles. Flexible: proyectos, consultoría, soporte."},followUp:{pt:["Detalhes sobre cibersegurança","Ver projetos realizados","Como contactar?"],en:["Details about cybersecurity","See completed projects","How to contact?"],es:["Detalles sobre ciberseguridad","Ver proyectos realizados","¿Cómo contactar?"]}},{keywords:["cibersegurança","cybersecurity","ciberseguridad","pentest","segurança","security","seguridad","hacker","vulnerabilidade","auditoria"],primaryKeywords:["cibersegurança ricardo","pentest","pentesting","auditoria segurança","security audit","análise vulnerabilidades"],secondaryKeywords:["ethical hacking","cisco","certificação segurança","proteção","seguro"],contextualKeywords:["segurança","security","proteção","vulnerabilidades","hack"],category:"service-cybersecurity",priority:10,responseType:"detailed",responses:{pt:`🔒 **CIBERSEGURANÇA PROFISSIONAL**

**O QUE RICARDO OFERECE:**

**1. PENTESTING (Testes de Penetração)** 🎯
• Simulação de ataques reais
• Identificação de vulnerabilidades críticas
• Relatório detalhado com recomendações
• Reteste após correções
*A sua aplicação é verdadeiramente segura?*

**2. AUDITORIAS DE SEGURANÇA** 📋
• Análise completa da infraestrutura
• Revisão de código fonte
• Avaliação de configurações
• Compliance e boas práticas

**3. CONSULTORIA ESPECIALIZADA** 💡
• Arquitetura de sistemas seguros
• Implementação de medidas preventivas
• Formação de equipas
• Planos de resposta a incidentes

**4. DESENVOLVIMENTO SEGURO** 🛡️
• Aplicações web fortificadas
• Autenticação robusta (OAuth, JWT, 2FA)
• Encriptação de dados
• Proteção contra OWASP Top 10

**📜 CREDENCIAIS:**
✅ Certificação Cisco em Cibersegurança
✅ 10+ anos de experiência
✅ Autor de 2 e-books sobre segurança
✅ Workshops em instituições públicas

**💼 CASOS DE USO:**
• Startups que precisam passar auditorias
• E-commerce com dados sensíveis
• Empresas que sofreram ou temem ataques
• Organizações com compliance rigoroso

💰 **INVESTIMENTO:**
Orçamento personalizado baseado em:
• Tamanho da infraestrutura
• Complexidade da aplicação
• Tipo de serviço (pentest, auditoria, consultoria)
• Urgência e prazo

📞 **PROTEJA SEU NEGÓCIO HOJE:**
📧 ricardo.rouco@gmail.com
💬 Resposta em 24h | Orçamento gratuito`,en:`🔒 **PROFESSIONAL CYBERSECURITY**

**WHAT RICARDO OFFERS:**

**1. PENTESTING (Penetration Testing)** 🎯
• Real attack simulation
• Critical vulnerability identification
• Detailed report with recommendations
• Retest after fixes
*Is your application truly secure?*

**2. SECURITY AUDITS** 📋
• Complete infrastructure analysis
• Source code review
• Configuration assessment
• Compliance and best practices

**3. SPECIALIZED CONSULTING** 💡
• Secure systems architecture
• Preventive measures implementation
• Team training
• Incident response plans

**4. SECURE DEVELOPMENT** 🛡️
• Fortified web applications
• Robust authentication (OAuth, JWT, 2FA)
• Data encryption
• OWASP Top 10 protection

**📜 CREDENTIALS:**
✅ Cisco Cybersecurity Certification
✅ 10+ years of experience
✅ Author of 2 security e-books
✅ Workshops at public institutions

**💼 USE CASES:**
• Startups needing to pass audits
• E-commerce with sensitive data
• Companies that suffered or fear attacks
• Organizations with strict compliance

💰 **INVESTMENT:**
Custom quote based on:
• Infrastructure size
• Application complexity
• Service type (pentest, audit, consulting)
• Urgency and deadline

📞 **PROTECT YOUR BUSINESS TODAY:**
📧 ricardo.rouco@gmail.com
💬 24h response | Free quote`,es:`🔒 **CIBERSEGURIDAD PROFESIONAL**

**LO QUE OFRECE RICARDO:**

**1. PENTESTING (Pruebas de Penetración)** 🎯
• Simulación de ataques reales
• Identificación de vulnerabilidades críticas
• Informe detallado con recomendaciones
• Reprueba después de correcciones
*¿Tu aplicación es verdaderamente segura?*

**2. AUDITORÍAS DE SEGURIDAD** 📋
• Análisis completo de infraestructura
• Revisión de código fuente
• Evaluación de configuraciones
• Compliance y buenas prácticas

**3. CONSULTORÍA ESPECIALIZADA** 💡
• Arquitectura de sistemas seguros
• Implementación de medidas preventivas
• Formación de equipos
• Planes de respuesta a incidentes

**4. DESARROLLO SEGURO** 🛡️
• Aplicaciones web fortificadas
• Autenticación robusta (OAuth, JWT, 2FA)
• Encriptación de datos
• Protección contra OWASP Top 10

**📜 CREDENCIALES:**
✅ Certificación Cisco en Ciberseguridad
✅ 10+ años de experiencia
✅ Autor de 2 e-books sobre seguridad
✅ Talleres en instituciones públicas

**💼 CASOS DE USO:**
• Startups que necesitan pasar auditorías
• E-commerce con datos sensibles
• Empresas que sufrieron o temen ataques
• Organizaciones con compliance riguroso

💰 **INVERSIÓN:**
Presupuesto personalizado basado en:
• Tamaño de infraestructura
• Complejidad de aplicación
• Tipo de servicio (pentest, auditoría, consultoría)
• Urgencia y plazo

📞 **PROTEGE TU NEGOCIO HOY:**
📧 ricardo.rouco@gmail.com
💬 Respuesta en 24h | Presupuesto gratuito`},shortResponses:{pt:"Pentesting, auditorias segurança, consultoria, desenvolvimento seguro. Certificado Cisco. Autor 2 e-books. Orçamento gratuito.",en:"Pentesting, security audits, consulting, secure development. Cisco Certified. Author 2 e-books. Free quote.",es:"Pentesting, auditorías seguridad, consultoría, desarrollo seguro. Certificado Cisco. Autor 2 e-books. Presupuesto gratuito."},followUp:{pt:["Livros sobre cibersegurança","Como funciona auditoria?","Como contactar?"],en:["Books about cybersecurity","How does an audit work?","How to contact?"],es:["Libros sobre ciberseguridad","¿Cómo funciona auditoría?","¿Cómo contactar?"]}},{keywords:["desenvolvimento","development","desarrollo","website","site","aplicação","application","app","web","software","ecommerce"],primaryKeywords:["desenvolvimento web","website","aplicação web","web development","criar site","build website","e-commerce"],secondaryKeywords:["react","vue","node","python","landing page","loja online","sistema web"],contextualKeywords:["desenvolvimento","website","app","criar","build"],category:"service-development",priority:10,responseType:"detailed",responses:{pt:`💻 **DESENVOLVIMENTO WEB PROFISSIONAL**

**SOLUÇÕES QUE RICARDO DESENVOLVE:**

**1. WEBSITES & LANDING PAGES** 🌐
• Design moderno e responsivo
• Otimização SEO
• Performance e velocidade
• Integração com analytics
*Tecnologias: React, Vue.js, Next.js, Tailwind*

**2. E-COMMERCE COMPLETO** 🛒
• Carrinho de compras
• Pagamentos integrados (Stripe, PayPal, MB Way)
• Gestão de inventário
• Painel administrativo
• Email marketing automático
*Cases: Ourivesaria Façanha, lojas industriais*

**3. APLICAÇÕES WEB COMPLEXAS** ⚙️
• CRM & ERP personalizados
• Dashboards interativos
• Sistemas de gestão
• Plataformas SaaS
*Tecnologias: React, Node.js, Python, PostgreSQL*

**4. APIs & INTEGRAÇÕES** 🔌
• RESTful APIs
• Integrações terceiros (Google, Facebook, Stripe)
• Webhooks
• Microserviços

**5. MODERNIZAÇÃO & OTIMIZAÇÃO** 🚀
• Migração de legacy
• Refactoring
• Performance tuning
• Escalabilidade

**✨ DIFERENCIAIS:**
✅ Código limpo e manutenível
✅ Testes automatizados
✅ Deploy automático (CI/CD)
✅ Documentação completa
✅ Suporte pós-lançamento
✅ Segurança integrada

**📊 PROCESSO:**
1️⃣ Reunião inicial (gratuita)
2️⃣ Proposta & orçamento detalhado
3️⃣ Design & aprovação
4️⃣ Desenvolvimento iterativo
5️⃣ Testes & ajustes
6️⃣ Deploy & lançamento
7️⃣ Suporte contínuo

📞 **TRANSFORME SUA IDEIA EM REALIDADE:**
📧 ricardo.rouco@gmail.com
💬 Reunião inicial GRATUITA | Orçamento sem compromisso`,en:`💻 **PROFESSIONAL WEB DEVELOPMENT**

**SOLUTIONS RICARDO DEVELOPS:**

**1. WEBSITES & LANDING PAGES** 🌐
• Modern and responsive design
• SEO optimization
• Performance and speed
• Analytics integration
*Technologies: React, Vue.js, Next.js, Tailwind*

**2. COMPLETE E-COMMERCE** 🛒
• Shopping cart
• Integrated payments (Stripe, PayPal, MB Way)
• Inventory management
• Admin panel
• Automated email marketing
*Cases: Ourivesaria Façanha, industrial stores*

**3. COMPLEX WEB APPLICATIONS** ⚙️
• Custom CRM & ERP
• Interactive dashboards
• Management systems
• SaaS platforms
*Technologies: React, Node.js, Python, PostgreSQL*

**4. APIs & INTEGRATIONS** 🔌
• RESTful APIs
• Third-party integrations (Google, Facebook, Stripe)
• Webhooks
• Microservices

**5. MODERNIZATION & OPTIMIZATION** 🚀
• Legacy migration
• Refactoring
• Performance tuning
• Scalability

**✨ DIFFERENTIALS:**
✅ Clean and maintainable code
✅ Automated testing
✅ Automatic deployment (CI/CD)
✅ Complete documentation
✅ Post-launch support
✅ Integrated security

**📊 PROCESS:**
1️⃣ Initial meeting (free)
2️⃣ Proposal & detailed quote
3️⃣ Design & approval
4️⃣ Iterative development
5️⃣ Testing & adjustments
6️⃣ Deploy & launch
7️⃣ Continuous support

📞 **TURN YOUR IDEA INTO REALITY:**
📧 ricardo.rouco@gmail.com
💬 FREE initial meeting | Quote without obligation`,es:`💻 **DESARROLLO WEB PROFESIONAL**

**SOLUCIONES QUE DESARROLLA RICARDO:**

**1. SITIOS WEB & LANDING PAGES** 🌐
• Diseño moderno y responsive
• Optimización SEO
• Performance y velocidad
• Integración con analytics
*Tecnologías: React, Vue.js, Next.js, Tailwind*

**2. E-COMMERCE COMPLETO** 🛒
• Carrito de compras
• Pagos integrados (Stripe, PayPal, MB Way)
• Gestión de inventario
• Panel administrativo
• Email marketing automático
*Cases: Ourivesaria Façanha, tiendas industriales*

**3. APLICACIONES WEB COMPLEJAS** ⚙️
• CRM & ERP personalizados
• Dashboards interactivos
• Sistemas de gestión
• Plataformas SaaS
*Tecnologías: React, Node.js, Python, PostgreSQL*

**4. APIs E INTEGRACIONES** 🔌
• APIs RESTful
• Integraciones terceros (Google, Facebook, Stripe)
• Webhooks
• Microservicios

**5. MODERNIZACIÓN & OPTIMIZACIÓN** 🚀
• Migración de legacy
• Refactoring
• Performance tuning
• Escalabilidad

**✨ DIFERENCIALES:**
✅ Código limpio y mantenible
✅ Tests automatizados
✅ Deploy automático (CI/CD)
✅ Documentación completa
✅ Soporte post-lanzamiento
✅ Seguridad integrada

**📊 PROCESO:**
1️⃣ Reunión inicial (gratis)
2️⃣ Propuesta y presupuesto detallado
3️⃣ Diseño y aprobación
4️⃣ Desarrollo iterativo
5️⃣ Pruebas y ajustes
6️⃣ Deploy y lanzamiento
7️⃣ Soporte continuo

📞 **TRANSFORMA TU IDEA EN REALIDAD:**
📧 ricardo.rouco@gmail.com
💬 Reunión inicial GRATIS | Presupuesto sin compromiso`},shortResponses:{pt:"Websites, landing pages, e-commerce, aplicações web, APIs. React, Vue, Node, Python. Orçamento gratuito.",en:"Websites, landing pages, e-commerce, web apps, APIs. React, Vue, Node, Python. Free quote.",es:"Sitios web, landing pages, e-commerce, apps web, APIs. React, Vue, Node, Python. Presupuesto gratis."},followUp:{pt:["Ver projetos de e-commerce","Quanto tempo demora?","Solicitar reunião gratuita"],en:["See e-commerce projects","How long does it take?","Request free meeting"],es:["Ver proyectos e-commerce","¿Cuánto tiempo toma?","Solicitar reunión gratis"]}},{keywords:["ebook","livro","book","libro","publicação"],primaryKeywords:["ebooks ricardo","livros ricardo","books ricardo","quantos livros","portfolio livros"],secondaryKeywords:["google play","gratuito","free","gratis"],category:"ebooks",priority:9,responseType:"detailed",responses:{pt:`📚 **PORTFÓLIO COMPLETO: 9 E-BOOKS**

🔐 **CIBERSEGURANÇA (2):**
• "Cybersecurity 101" (2024) - Guia familiar
• "Cibersegurança: Proteger Empresa" (2023)

🤖 **INTELIGÊNCIA ARTIFICIAL (2):**
• "Engenharia de Prompts" (2025) ✨ NOVO!
• "AI!" (2023) - Comunicação com IA

💻 **PROGRAMAÇÃO (3):**
• "Algoritmos e Estruturas" (2024) 🆓 GRÁTIS
• "Fundamentos Python" (2022)
• "Programação Funcional Haskell" (2022)

📐 **MATEMÁTICA (1):**
• "Matemática 12º Ano" (2024) 🆓 GRÁTIS

₿ **BLOCKCHAIN (1):**
• "Introdução Criptomoedas" (2021)

📱 **TODOS NO GOOGLE PLAY BOOKS**
💚 2 COMPLETAMENTE GRATUITOS

📖 *Conhecimento acessível para todos!*`,en:`📚 **COMPLETE PORTFOLIO: 9 E-BOOKS**

🔐 **CYBERSECURITY (2):**
• "Cybersecurity 101" (2024) - Family guide
• "Cybersecurity: Protect Company" (2023)

🤖 **ARTIFICIAL INTELLIGENCE (2):**
• "Prompt Engineering" (2025) ✨ NEW!
• "AI!" (2023) - AI Communication

💻 **PROGRAMMING (3):**
• "Algorithms & Data Structures" (2024) 🆓 FREE
• "Python Fundamentals" (2022)
• "Functional Programming Haskell" (2022)

📐 **MATHEMATICS (1):**
• "Mathematics 12th Grade" (2024) 🆓 FREE

₿ **BLOCKCHAIN (1):**
• "Intro to Cryptocurrencies" (2021)

📱 **ALL ON GOOGLE PLAY BOOKS**
💚 2 COMPLETELY FREE

📖 *Knowledge accessible to everyone!*`,es:`📚 **PORTAFOLIO COMPLETO: 9 E-BOOKS**

🔐 **CIBERSEGURIDAD (2):**
• "Ciberseguridad 101" (2024) - Guía familiar
• "Ciberseguridad: Proteger Empresa" (2023)

🤖 **INTELIGENCIA ARTIFICIAL (2):**
• "Ingeniería de Prompts" (2025) ✨ ¡NUEVO!
• "IA!" (2023) - Comunicación con IA

💻 **PROGRAMACIÓN (3):**
• "Algoritmos y Estructuras" (2024) 🆓 GRATIS
• "Fundamentos Python" (2022)
• "Programación Funcional Haskell" (2022)

📐 **MATEMÁTICAS (1):**
• "Matemáticas 12º Año" (2024) 🆓 GRATIS

₿ **BLOCKCHAIN (1):**
• "Intro a Criptomonedas" (2021)

📱 **TODOS EN GOOGLE PLAY BOOKS**
💚 2 COMPLETAMENTE GRATIS

📖 *¡Conocimiento accesible para todos!*`},followUp:{pt:["Quais são gratuitos?","Livros sobre IA","Como baixar?","Mais recente?"],en:["Which are free?","AI books","How to download?","Most recent?"],es:["¿Cuáles son gratis?","Libros IA","¿Cómo descargar?","¿Más reciente?"]}},{keywords:["matemática","mathematics","matematicas","12 ano","12th grade","curso","resumos"],primaryKeywords:["matemática 12","curso matemática","mathematics 12th","resumos matemática","math course"],secondaryKeywords:["gratuito","free","interativo","interactive","exercícios"],category:"math-course",priority:9,responseType:"detailed",responses:{pt:`📐 **CURSO INTERATIVO: MATEMÁTICA 12º ANO**

🆓 **COMPLETAMENTE GRATUITO!**

**CONTEÚDO:**
• 📚 16 Tópicos completos
• 📝 97 Subtópicos detalhados
• ✏️ 120 Exercícios resolvidos
• 🎯 Resumos, fórmulas, exemplos
• 💡 Explicações passo a passo

**FORMATO:**
✨ **Curso Interativo** no site (ricardodsr.github.io)
• Navegação por tópicos
• Exercícios expandíveis
• Acompanhamento de progresso

📖 **E-book Google Play Books**
• Download offline
• Resumos organizados
• Acesso permanente

🎓 **IDEAL PARA:**
• Estudantes 12º ano
• Preparação exames
• Revisão de matéria
• Consulta rápida

🔗 **ACESSO:**
Direto no site na secção E-books

💚 *Matemática A acessível para todos os estudantes portugueses!*`,en:`📐 **INTERACTIVE COURSE: MATHEMATICS 12TH GRADE**

🆓 **COMPLETELY FREE!**

**CONTENT:**
• 📚 16 Complete topics
• 📝 97 Detailed subtopics
• ✏️ 120 Solved exercises
• 🎯 Summaries, formulas, examples
• 💡 Step-by-step explanations

**FORMAT:**
✨ **Interactive Course** on website (ricardodsr.github.io)
• Topic navigation
• Expandable exercises
• Progress tracking

📖 **Google Play Books E-book**
• Offline download
• Organized summaries
• Permanent access

🎓 **IDEAL FOR:**
• 12th grade students
• Exam preparation
• Subject review
• Quick reference

🔗 **ACCESS:**
Direct on website in E-books section

💚 *Mathematics A accessible to all Portuguese students!*`,es:`📐 **CURSO INTERACTIVO: MATEMÁTICAS 12º AÑO**

🆓 **¡COMPLETAMENTE GRATIS!**

**CONTENIDO:**
• 📚 16 Temas completos
• 📝 97 Subtemas detallados
• ✏️ 120 Ejercicios resueltos
• 🎯 Resúmenes, fórmulas, ejemplos
• 💡 Explicaciones paso a paso

**FORMATO:**
✨ **Curso Interactivo** en sitio web (ricardodsr.github.io)
• Navegación por temas
• Ejercicios expandibles
• Seguimiento de progreso

📖 **E-book Google Play Books**
• Descarga offline
• Resúmenes organizados
• Acceso permanente

🎓 **IDEAL PARA:**
• Estudiantes 12º año
• Preparación exámenes
• Revisión de materia
• Consulta rápida

🔗 **ACCESO:**
Directo en sitio web sección E-books

💚 *¡Matemáticas A accesible para todos los estudiantes portugueses!*`},followUp:{pt:["Como aceder ao curso?","Ver no Google Books","Outros livros gratuitos","Tutorias de matemática"],en:["How to access course?","See on Google Books","Other free books","Math tutoring"],es:["¿Cómo acceder al curso?","Ver en Google Books","Otros libros gratis","Tutorías matemáticas"]}},{keywords:["projetos","projects","proyectos","portfolio","trabalhos","cases"],primaryKeywords:["projetos ricardo","portfolio","cases sucesso","trabalhos realizados"],category:"projects",priority:8,responses:{pt:`🚀 **PROJETOS DESTACADOS:**

💍 **Ourivesaria Façanha** - E-commerce completo
🏢 **Maldes** - Identidade corporativa + CRM
🎨 **Pontomoco** - Branding + Plataforma digital
👗 **RJ Paris** - Rebranding + 2 websites
🏭 **Sistemas Industriais** - Monitoramento remoto

📊 **15+ projetos empresariais entregues**
✅ Desenvolvimento, design, consultoria
🌍 Portugal, Espanha, Brasil

💼 *Transformando ideias em soluções reais!*`,en:`🚀 **FEATURED PROJECTS:**

💍 **Ourivesaria Façanha** - Complete e-commerce
🏢 **Maldes** - Corporate identity + CRM
🎨 **Pontomoco** - Branding + Digital platform
👗 **RJ Paris** - Rebranding + 2 websites
🏭 **Industrial Systems** - Remote monitoring

📊 **15+ delivered business projects**
✅ Development, design, consulting
🌍 Portugal, Spain, Brazil

💼 *Transforming ideas into real solutions!*`,es:`🚀 **PROYECTOS DESTACADOS:**

💍 **Ourivesaria Façanha** - E-commerce completo
🏢 **Maldes** - Identidad corporativa + CRM
🎨 **Pontomoco** - Branding + Plataforma digital
👗 **RJ Paris** - Rebranding + 2 sitios web
🏭 **Sistemas Industriales** - Monitoreo remoto

📊 **15+ proyectos empresariales entregados**
✅ Desarrollo, diseño, consultoría
🌍 Portugal, España, Brasil

💼 *¡Transformando ideas en soluciones reales!*`},followUp:{pt:["Detalhes projeto e-commerce","Tecnologias usadas","Solicitar orçamento"],en:["E-commerce project details","Technologies used","Request quote"],es:["Detalles proyecto e-commerce","Tecnologías usadas","Solicitar presupuesto"]}},{keywords:["contacto","contact","email","falar","reach"],primaryKeywords:["como contactar","contactar ricardo","email ricardo","como falar","how to contact"],category:"contact",priority:10,responseType:"short",responses:{pt:`📬 **CONTACTAR RICARDO:**

📧 **Email:** ricardo.rouco@gmail.com
💼 **LinkedIn:** linkedin.com/in/ricardorouco
🔗 **Links:** linktr.ee/ricardodsr
🌐 **Site:** ricardodsr.github.io

⚡ Resposta em 24h
💬 Reunião inicial gratuita
📝 Orçamento sem compromisso

*Disponível para novos projetos!*`,en:`📬 **CONTACT RICARDO:**

📧 **Email:** ricardo.rouco@gmail.com
💼 **LinkedIn:** linkedin.com/in/ricardorouco
🔗 **Links:** linktr.ee/ricardodsr
🌐 **Website:** ricardodsr.github.io

⚡ 24h response
💬 Free initial meeting
📝 Quote without obligation

*Available for new projects!*`,es:`📬 **CONTACTAR RICARDO:**

📧 **Email:** ricardo.rouco@gmail.com
💼 **LinkedIn:** linkedin.com/in/ricardorouco
🔗 **Enlaces:** linktr.ee/ricardodsr
🌐 **Sitio:** ricardodsr.github.io

⚡ Respuesta en 24h
💬 Reunión inicial gratis
📝 Presupuesto sin compromiso

*¡Disponible para nuevos proyectos!*`}},{keywords:["ajuda","help","info","informação"],category:"help",priority:1,responses:{pt:`🤖 **POSSO AJUDAR COM:**

👨‍💻 Experiência & Competências
🛠️ Serviços (Web, Segurança, IA)
📚 E-books & Curso Matemática
🚀 Projetos realizados
📧 Contacto

*O que gostaria de saber?*`,en:`🤖 **I CAN HELP WITH:**

👨‍💻 Experience & Skills
🛠️ Services (Web, Security, AI)
📚 E-books & Math Course
🚀 Completed projects
📧 Contact

*What would you like to know?*`,es:`🤖 **PUEDO AYUDAR CON:**

👨‍💻 Experiencia & Habilidades
🛠️ Servicios (Web, Seguridad, IA)
📚 E-books & Curso Matemáticas
🚀 Proyectos realizados
📧 Contacto

*¿Qué te gustaría saber?*`}}],Pe={pt:`🤔 Interessante! Não encontrei uma resposta específica. Posso ajudar com:

👨‍💼 Experiência & Competências do Ricardo
🛠️ Serviços (Desenvolvimento, Cibersegurança, IA)
📚 9 E-books (2 gratuitos!)
📐 Curso Matemática 12º Ano GRÁTIS
📧 Contacto

*Que tal reformular ou escolher um tópico?*`,en:`🤔 Interesting! I didn't find a specific answer. I can help with:

👨‍💼 Ricardo's Experience & Skills
🛠️ Services (Development, Cybersecurity, AI)
📚 9 E-books (2 free!)
📐 Math 12th Grade Course FREE
📧 Contact

*How about rephrasing or choosing a topic?*`,es:`🤔 ¡Interesante! No encontré respuesta específica. Puedo ayudar con:

👨‍💼 Experiencia & Habilidades de Ricardo
🛠️ Servicios (Desarrollo, Ciberseguridad, IA)
📚 9 E-books (¡2 gratis!)
📐 Curso Matemáticas 12º Año GRATIS
📧 Contacto

*¿Reformular o elegir un tema?*`},je={pt:`👋 Olá! Sou o assistente do Ricardo Rouco!

🚀 Posso falar sobre:
• 10+ anos experiência tech
• Serviços: Web, Cibersegurança, IA
• 9 E-books (2 GRÁTIS!)
• 📐 Curso Matemática 12º Ano
• Projetos realizados

*O que te interessa? 😊*`,en:`👋 Hello! I'm Ricardo Rouco's assistant!

🚀 I can talk about:
• 10+ years tech experience
• Services: Web, Cybersecurity, AI
• 9 E-books (2 FREE!)
• 📐 Math 12th Grade Course
• Completed projects

*What interests you? 😊*`,es:`👋 ¡Hola! ¡Soy el asistente de Ricardo Rouco!

🚀 Puedo hablar sobre:
• 10+ años experiencia tech
• Servicios: Web, Ciberseguridad, IA
• 9 E-books (¡2 GRATIS!)
• 📐 Curso Matemáticas 12º Año
• Proyectos realizados

*¿Qué te interesa? 😊*`},Ua={pt:["Que serviços oferece?","Quais e-books gratuitos?","Curso Matemática 12º Ano","Ver projetos realizados","Como contactar?"],en:["What services does he offer?","Which e-books are free?","Math 12th Grade Course","See completed projects","How to contact?"],es:["¿Qué servicios ofrece?","¿Qué e-books son gratis?","Curso Matemáticas 12º Año","Ver proyectos realizados","¿Cómo contactar?"]},go=r.forwardRef(({className:o,type:t,...a},i)=>e.jsx("input",{type:t,className:f("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",o),ref:i,...a}));go.displayName="Input";const Va=be("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function Re({className:o,variant:t,...a}){return e.jsx("div",{className:f(Va({variant:t}),o),...a})}const Wa=({isOpen:o,onClose:t})=>{console.log("ChatBot render - isOpen:",o);const{language:a,t:i}=j(),[s,c]=r.useState([]),[p,x]=r.useState(""),[b,A]=r.useState(!1),[I,P]=r.useState([]),[C,w]=r.useState({topics:[],userInterests:[],questionTypes:[],responseHistory:[]}),[T,ae]=r.useState(new Set),_=r.useRef(null);r.useEffect(()=>{if(o&&s.length===0){const n={id:"1",text:je[a],isUser:!1,timestamp:new Date};c([n])}},[o,a,s.length]),r.useEffect(()=>{te()},[s]);const te=()=>{var n;(n=_.current)==null||n.scrollIntoView({behavior:"smooth"})},L=n=>n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\w\s]/g,"").trim(),G={experiencia:["background","curriculo","historico","carreira","trajetoria"],experience:["background","career","history","trajectory"],servicos:["trabalho","consultoria","ajuda","suporte"],services:["work","consulting","help","support"],contato:["contacto","comunicacao","falar"],contact:["communication","reach","talk"],livros:["ebooks","publicacoes","obras"],books:["ebooks","publications","works"],ia:["inteligencia artificial","ai","artificial intelligence"],ciberseguranca:["seguranca","security","cybersecurity"]},se=(n,y)=>{const g=Array(y.length+1).fill(null).map(()=>Array(n.length+1).fill(null));for(let l=0;l<=n.length;l++)g[0][l]=l;for(let l=0;l<=y.length;l++)g[l][0]=l;for(let l=1;l<=y.length;l++)for(let d=1;d<=n.length;d++){const h=n[d-1]===y[l-1]?0:1;g[l][d]=Math.min(g[l][d-1]+1,g[l-1][d]+1,g[l-1][d-1]+h)}return g[y.length][n.length]},m=(n,y,g=.8)=>{const l=L(n),d=L(y);if(l.includes(d))return 1;const h=G[d]||[];for(const D of h)if(l.includes(L(D)))return .9;const N=l.split(/\s+/),k=d.split(/\s+/);let R=0;for(const D of N)for(const E of k)if(D.length>3&&E.length>3){const W=1-se(D,E)/Math.max(D.length,E.length);W>=g&&(R=Math.max(R,W))}return R},u=n=>{const y=L(n),g=[];return Object.entries({what:/\b(o que|que|what|qué|cual)\b/,how:/\b(como|how|cómo)\b/,where:/\b(onde|where|dónde)\b/,when:/\b(quando|when|cuándo)\b/,why:/\b(porque|why|por qué|porqué)\b/,who:/\b(quem|who|quién)\b/,which:/\b(qual|which|cuál)\b/,can:/\b(pode|posso|can|puedo|podem)\b/,is:/\b(é|is|es|está)\b/}).forEach(([d,h])=>{h.test(y)&&g.push(d)}),g.length>0?g:["general"]},q=n=>n.split(/\b(e|and|y|ou|or|o|também|also|además)\b|[,;]/).filter(g=>g.trim().length>10),z=(n,y,g,l)=>{let d=0;const h=(N,k)=>{if(!N)return 0;let R=0;for(const D of N){const E=m(y,D);R+=k*E}return R};return d+=h(n.primaryKeywords||[],3),d+=h(n.secondaryKeywords||[],1.5),d+=h(n.contextualKeywords||[],.7),d+=h(n.keywords||[],1),l.lastCategory===n.category&&(d+=1),l.topics.includes(n.category)&&(d+=.5),l.userInterests.some(N=>{var k;return(k=n.primaryKeywords)==null?void 0:k.some(R=>m(N,R)>.7)})&&(d+=.8),n.priority&&(d+=n.priority*.15),g.forEach(N=>{N==="what"&&n.responseType==="short"&&(d+=.5),N==="how"&&n.responseType==="detailed"&&(d+=.7),N==="can"&&n.category==="services"&&(d+=.6),N==="who"&&n.category==="about"&&(d+=.8)}),d},J=n=>{const y=L(n),g=u(n),l=q(n);if(l.length>1)return K(l);let d=null,h=0;const N=[];for(const E of Ga){const S=z(E,y,g,C);N.push({entry:E,score:S}),S>h&&(h=S,d=E)}const k=Math.max(.3,.8-C.responseHistory.length*.1);if(d&&h>k){const E=Math.min(h/4,1);let S="";g.includes("what")&&d.shortResponses&&E>.7&&C.responseHistory.length>0?S=d.shortResponses[a]:S=d.responses[a],S=B(S,C);const Io=d.followUp?d.followUp[a]:void 0;return{response:S,followUps:Io,confidence:E,category:d.category}}const R=N.filter(E=>E.score>.1).sort((E,S)=>S.score-E.score).slice(0,3);let D=Pe[a];if(R.length>0){const E=R.map(W=>W.entry.category).join(", "),S={pt:` Talvez esteja interessado em: ${E}.`,en:` You might be interested in: ${E}.`,es:` Tal vez esté interesado en: ${E}.`};D+=S[a]}return{response:D,confidence:0}},K=n=>{const y=[],g=[];let l=0;if(n.forEach(d=>{const h=J(d.trim());h.confidence>.3&&(y.push(h.response),h.followUps&&g.push(...h.followUps),l+=h.confidence)}),y.length>0){const d=y.join(`

`),h=l/n.length,N=[...new Set(g)].slice(0,3);return{response:d,followUps:N.length>0?N:void 0,confidence:h}}return{response:Pe[a],confidence:0}},B=(n,y)=>{if(y.responseHistory.length===0)return n;const g={pt:["Além disso, ","Como mencionado, ","Para complementar, "],en:["Additionally, ","As mentioned, ","To complement, "],es:["Además, ","Como mencionado, ","Para complementar, "]};return y.responseHistory.length>1&&Math.random()>.7?g[a][Math.floor(Math.random()*3)]+n.charAt(0).toLowerCase()+n.slice(1):n},U=n=>{if(n.length<=280)return{preview:n,fullText:n,needsExpansion:!1};const g=n.split(/[.!?]\s+/);let l="";for(const d of g){if((l+d).length>280)break;l+=(l?". ":"")+d}return(!l||l.length<50)&&(l=n.substring(0,280)),!l.endsWith(".")&&!l.endsWith("!")&&!l.endsWith("?")&&(l+="..."),{preview:l,fullText:n,needsExpansion:!0}},Ao=n=>{ae(y=>{const g=new Set(y);return g.has(n)?g.delete(n):g.add(n),g})},Co=(n,y,g)=>{const l=u(n);w(d=>({topics:g?[...new Set([...d.topics,g])]:d.topics,lastCategory:g,userInterests:[...new Set([...d.userInterests,...L(n).split(" ").filter(h=>h.length>4)])],questionTypes:[...new Set([...d.questionTypes,...l])],responseHistory:[...d.responseHistory,y].slice(-10)}))},he=async()=>{if(!p.trim())return;const n={id:Date.now().toString(),text:p,isUser:!0,timestamp:new Date};c(l=>[...l,n]),x(""),A(!0),P([]);const g=Math.min(800+p.length*30,2500);setTimeout(()=>{const l=J(p);let d=l.response;if(l.confidence<.4){const R={pt:["Deixe-me tentar ajudar com essa questão. ","Posso não ter compreendido completamente, mas ","Com base no que entendi, "],en:["Let me try to help with that question. ","I may not have fully understood, but ","Based on what I understood, "],es:["Déjame intentar ayudar con esa pregunta. ","Puede que no haya entendido completamente, pero ","Basándome en lo que entendí, "]}[a];d=R[Math.floor(Math.random()*R.length)]+d.charAt(0).toLowerCase()+d.slice(1)}const h=U(d),N={id:(Date.now()+1).toString(),text:h.needsExpansion?h.preview:d,fullText:h.needsExpansion?h.fullText:void 0,preview:h.needsExpansion?h.preview:void 0,isUser:!1,timestamp:new Date,followUps:l.followUps,confidence:l.confidence,category:l.category};c(k=>[...k,N]),P(l.followUps||[]),Co(p,d,l.category),A(!1)},g)},ye=n=>{x(n),P([])},wo=n=>{n.key==="Enter"&&!n.shiftKey&&(n.preventDefault(),he())},Eo=()=>{c([]),x(""),A(!1),P([]);const n={id:Date.now().toString(),text:je[a],isUser:!1,timestamp:new Date};c([n])};if(!o)return null;const No=Ua[a];return e.jsxs("div",{className:"fixed inset-0 z-[9998] flex items-center justify-center p-4",children:[e.jsx("div",{className:"absolute inset-0 bg-black/50",onClick:t}),e.jsxs("div",{className:"relative w-full max-w-md h-[600px] bg-white shadow-2xl rounded-lg flex flex-col border",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-t-lg",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"w-10 h-10 bg-white/20 rounded-full flex items-center justify-center",children:e.jsx(ne,{className:"w-6 h-6"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-lg",children:"Ricardo Rouco"}),e.jsx("p",{className:"text-sm text-white/80",children:a==="pt"?"Assistente Virtual":a==="es"?"Asistente Virtual":"Virtual Assistant"})]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(v,{onClick:Eo,variant:"ghost",size:"sm",className:"text-white hover:bg-white/20",title:a==="pt"?"Reiniciar conversa":a==="es"?"Reiniciar conversación":"Reset conversation",children:e.jsx($o,{className:"w-4 h-4"})}),e.jsx(v,{onClick:t,variant:"ghost",size:"sm",className:"text-white hover:bg-white/20",children:e.jsx($,{className:"w-5 h-5"})})]})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[s.map(n=>e.jsx("div",{className:`flex ${n.isUser?"justify-end":"justify-start"}`,children:e.jsx("div",{className:`max-w-[80%] p-3 rounded-lg ${n.isUser?"bg-blue-600 text-white rounded-br-none":"bg-gray-100 text-gray-800 rounded-bl-none"}`,children:e.jsxs("div",{className:"flex items-start space-x-2",children:[!n.isUser&&e.jsx(ne,{className:"w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-sm leading-relaxed",children:n.fullText&&T.has(n.id)?n.fullText:n.text}),n.fullText&&e.jsx("button",{onClick:()=>Ao(n.id),className:"text-xs text-blue-600 hover:text-blue-800 mt-1 font-medium transition-colors",children:T.has(n.id)?a==="pt"||a==="es"?"Ver menos":"Show less":a==="pt"?"Ler mais...":a==="es"?"Leer más...":"Read more..."})]}),n.isUser&&e.jsx(_o,{className:"w-4 h-4 mt-0.5 text-white/80 flex-shrink-0"})]})})},n.id)),b&&e.jsx("div",{className:"flex justify-start",children:e.jsx("div",{className:"bg-gray-100 p-3 rounded-lg rounded-bl-none",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(ne,{className:"w-4 h-4 text-blue-600"}),e.jsxs("div",{className:"flex space-x-1",children:[e.jsx("div",{className:"w-2 h-2 bg-blue-600 rounded-full animate-bounce"}),e.jsx("div",{className:"w-2 h-2 bg-blue-600 rounded-full animate-bounce",style:{animationDelay:"0.1s"}}),e.jsx("div",{className:"w-2 h-2 bg-blue-600 rounded-full animate-bounce",style:{animationDelay:"0.2s"}})]})]})})}),!b&&I.length>0&&e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm text-gray-500 text-center",children:a==="pt"?"Perguntas relacionadas:":a==="es"?"Preguntas relacionadas:":"Related questions:"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:I.map((n,y)=>e.jsx(Re,{variant:"outline",className:"cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-colors text-xs",onClick:()=>ye(n),children:n},y))})]}),s.length<=1&&!b&&I.length===0&&e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm text-gray-500 text-center",children:a==="pt"?"Sugestões rápidas:":a==="es"?"Sugerencias rápidas:":"Quick suggestions:"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:No.map((n,y)=>e.jsx(Re,{variant:"outline",className:"cursor-pointer hover:bg-gray-100 transition-colors text-xs",onClick:()=>ye(n),children:n},y))})]}),e.jsx("div",{ref:_})]}),e.jsx("div",{className:"p-4 border-t bg-gray-50",children:e.jsxs("div",{className:"flex space-x-2",children:[e.jsx(go,{value:p,onChange:n=>x(n.target.value),onKeyPress:wo,placeholder:a==="pt"?"Digite sua pergunta...":a==="es"?"Escriba su pregunta...":"Type your question...",className:"flex-1",disabled:b}),e.jsx(v,{onClick:he,disabled:!p.trim()||b,className:"bg-blue-600 hover:bg-blue-700 text-white",children:e.jsx(Jo,{className:"w-4 h-4"})})]})})]})]})},Ha=()=>{const[o,t]=r.useState(!1),{language:a}=j(),i=()=>{t(!o)},s={pt:"Fale comigo!",en:"Chat with me!",es:"¡Habla conmigo!"};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed bottom-6 right-6 z-[9999]",children:e.jsx("button",{onClick:i,className:"w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-2xl transition-all duration-300 transform hover:scale-110 group flex items-center justify-center",title:s[a],children:e.jsx(Ko,{className:"w-6 h-6"})})}),e.jsx(Wa,{isOpen:o,onClose:()=>t(!1)})]})},Qa=()=>{const{t:o}=j();return e.jsxs("div",{className:"min-h-screen flex flex-col",children:[e.jsxs(Z,{children:[e.jsxs("title",{children:["Ricardo Rouco | ",o("seo.title")]}),e.jsx("meta",{name:"description",content:o("seo.description")}),e.jsx("meta",{name:"robots",content:"index, follow, max-image-preview:large, max-snippet:300, max-video-preview:-1"}),e.jsx("link",{rel:"canonical",href:"https://ricardodsr.github.io/"}),e.jsx("meta",{property:"og:locale:alternate",content:"en_US"}),e.jsx("meta",{property:"og:locale:alternate",content:"es_ES"}),e.jsx("meta",{property:"article:modified_time",content:new Date().toISOString()}),e.jsx("meta",{name:"twitter:label1",content:"Est. reading time"}),e.jsx("meta",{name:"twitter:data1",content:"5 minutes"}),e.jsx("script",{type:"application/ld+json",children:`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://ricardodsr.github.io/#person",
                  "name": "Ricardo Rouco",
                  "image": {
                    "@type": "ImageObject",
                    "@id": "https://ricardodsr.github.io/#personImage",
                    "url": "https://ricardodsr.github.io/og-image.png",
                    "width": 1200,
                    "height": 630,
                    "caption": "Ricardo Rouco"
                  },
                  "description": "${o("about.intro")}",
                  "jobTitle": "Head of Development and AI R&D",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Grupo Erre",
                    "@id": "https://grupoerre.pt/#organization"
                  },
                  "sameAs": [
                    "https://github.com/ricardorouco",
                    "https://linkedin.com/in/ricardorouco"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://ricardodsr.github.io/#website",
                  "url": "https://ricardodsr.github.io/",
                  "name": "Ricardo Rouco | ${o("seo.title")}",
                  "description": "${o("seo.description")}",
                  "publisher": {
                    "@id": "https://ricardodsr.github.io/#person"
                  }
                },
                {
                  "@type": "WebPage",
                  "@id": "https://ricardodsr.github.io/#webpage",
                  "url": "https://ricardodsr.github.io",
                  "name": "Ricardo Rouco | ${o("seo.title")}",
                  "isPartOf": {
                    "@id": "https://ricardodsr.github.io/#website"
                  },
                  "about": {
                    "@id": "https://ricardodsr.github.io/#person"
                  },
                  "primaryImageOfPage": {
                    "@id": "https://ricardodsr.github.io/#personImage"
                  },
                  "datePublished": "2023-01-01T00:00:00+00:00",
                  "dateModified": "${new Date().toISOString()}",
                  "description": "${o("seo.description")}",
                  "breadcrumb": {
                    "@id": "https://ricardodsr.github.io/#breadcrumb"
                  },
                  "inLanguage": "pt",
                  "potentialAction": [
                    {
                      "@type": "ReadAction",
                      "target": ["https://ricardodsr.github.io"]
                    }
                  ]
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://ricardodsr.github.io/#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://ricardodsr.github.io/"
                    },
                    {
                      "@type": "ListItem", 
                      "position": 2,
                      "name": "About Ricardo Rouco",
                      "item": "https://ricardodsr.github.io/#about"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3, 
                      "name": "Services",
                      "item": "https://ricardodsr.github.io/#services"
                    },
                    {
                      "@type": "ListItem",
                      "position": 4,
                      "name": "E-books",
                      "item": "https://ricardodsr.github.io/#ebooks"
                    }
                  ]
                },
                {
                  "@type": "Organization",
                  "@id": "https://grupoerre.pt/#organization",
                  "name": "Grupo Erre",
                  "url": "https://grupoerre.pt",
                  "description": "Portuguese organization specializing in development, artificial intelligence research, and automotive management software (GRIP)",
                  "foundingLocation": {
                    "@type": "Country",
                    "name": "Portugal"
                  },
                  "industry": "Technology",
                  "knowsAbout": ["Development", "Artificial Intelligence", "Research", "Innovation", "GRIP Software", "Automotive Management", "Workshop Management Systems"],
                  "employee": [
                    {
                      "@type": "Person",
                      "@id": "https://ricardodsr.github.io/#person",
                      "name": "Ricardo Rouco",
                      "jobTitle": "Head of Development and AI R&D",
                      "worksFor": {
                        "@id": "https://grupoerre.pt/#organization"
                      }
                    }
                  ],
                  "department": [
                    {
                      "@type": "Organization",
                      "name": "Development & AI Research Department",
                      "description": "Department focused on software development and artificial intelligence research",
                      "parentOrganization": {
                        "@id": "https://grupoerre.pt/#organization"
                      }
                    }
                  ]
                },
                {
                  "@type": "Service",
                  "name": "Educational Tutoring",
                  "description": "Personalized tutoring in Programming, Mathematics, and Informatics",
                  "provider": {
                    "@id": "https://ricardodsr.github.io/#person"
                  },
                  "serviceType": "Educational Services",
                  "areaServed": {
                    "@type": "Country",
                    "name": "Portugal"
                  },
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "price": "Contact for pricing",
                    "priceCurrency": "EUR"
                  }
                },
                {
                  "@type": "CreativeWork",
                  "name": "Technical E-books Portfolio",
                  "description": "Collection of 9 technical e-books covering cybersecurity, AI, programming, and mathematics",
                  "author": {
                    "@id": "https://ricardodsr.github.io/#person"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Google Play Books"
                  },
                  "about": ["Cybersecurity", "Artificial Intelligence", "Programming", "Mathematics", "Blockchain"],
                  "inLanguage": "pt",
                  "datePublished": "2021-2025",
                  "workExample": [
                    {
                      "@type": "Book",
                      "name": "Cybersecurity 101",
                      "datePublished": "2024",
                      "genre": "Technical Education",
                      "url": "https://play.google.com/store/books/details?id=A3PrEAAAQBAJ"
                    },
                    {
                      "@type": "Book", 
                      "name": "Engenharia de Prompts",
                      "datePublished": "2025",
                      "genre": "Artificial Intelligence",
                      "url": "https://play.google.com/store/books/details?id=2B1aEQAAQBAJ"
                    },
                    {
                      "@type": "Book",
                      "name": "Algoritmos e estruturas de dados",
                      "datePublished": "2024",
                      "genre": "Programming",
                      "isAccessibleForFree": true,
                      "url": "https://play.google.com/store/books/details?id=k5YUEQAAQBAJ"
                    }
                  ]
                },
                {
                  "@type": "ItemList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Programming Languages",
                      "description": "Learn programming languages with personalized tutoring"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Mathematics",
                      "description": "Mathematics tutoring for all levels"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "General Informatics",
                      "description": "Learn computer science and informatics concepts"
                    }
                  ]
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://ricardodsr.github.io/#consultoria",
                  "name": "Consultoria Informática - Ricardo Rouco",
                  "description": "Serviços especializados de consultoria informática: implementação de IA, cibersegurança, desenvolvimento web e transformação digital",
                  "provider": { "@id": "https://ricardodsr.github.io/#person" },
                  "serviceType": ["IT Consulting", "AI Implementation", "Cybersecurity", "Web Development"],
                  "areaServed": { "@type": "Country", "name": "Portugal" },
                  "knowsAbout": ["Inteligência Artificial", "Cibersegurança", "Desenvolvimento Web", "Consultoria Informática", "Machine Learning"]
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Quem é Ricardo Rouco?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ricardo Rouco é Especialista em Inteligência Artificial (IA) e Head of Development & AI R&D no Grupo Erre, com 10+ anos de experiência em tecnologia. Oferece consultoria informática especializada em cibersegurança, IA e desenvolvimento web. Fundador da DIGITALWISH, ex-CTO na NETIC, autor de 9 e-books técnicos."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Ricardo Rouco é especialista em IA?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sim, Ricardo Rouco é Especialista em Inteligência Artificial (IA) e ocupa o cargo de Head of Development & AI R&D no Grupo Erre. Lidera projetos de pesquisa em IA, implementação de soluções de machine learning e desenvolvimento de sistemas inteligentes."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "O que é o Grupo Erre e qual a função de Ricardo Rouco?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "O Grupo Erre é uma organização portuguesa especializada em tecnologia e inovação. Ricardo Rouco é o Head of Development e AI R&D, responsável pela liderança de equipas de desenvolvimento e pela estratégia de pesquisa em inteligência artificial da empresa."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Ricardo Rouco oferece consultoria informática?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sim, Ricardo Rouco oferece consultoria informática especializada em: implementação de soluções de IA e machine learning, auditorias e consultoria de cibersegurança, desenvolvimento de aplicações web e e-commerce, e transformação digital para empresas."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Quais e-books Ricardo Rouco escreveu?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ricardo Rouco é autor de 9 e-books técnicos disponíveis no Google Play Books, incluindo: Engenharia de Prompts (IA), Cybersecurity 101, Algoritmos e Estruturas de Dados (gratuito), Matemática 12º Ano (gratuito), Python, JavaScript & React, Blockchain e Docker & Kubernetes."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Que e-books gratuitos estão disponíveis?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ricardo oferece 2 e-books completamente gratuitos no Google Play Books: 'Algoritmos e estruturas de dados' (2024) - conceitos fundamentais da programação, e 'Matemáticas 12º Ano' (2024) - abordagem completa para estudantes portugueses com exercícios práticos."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Como contactar Ricardo Rouco?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Para contactar Ricardo: Email: ricardo.rouco@gmail.com | LinkedIn: linkedin.com/in/ricardorouco | Links: linktr.ee/ricardodsr"
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Que serviços oferece Ricardo Rouco?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ricardo oferece: Consultoria informática e implementação de IA, consultorias de cibersegurança (pentests, análise de vulnerabilidades), desenvolvimento de aplicações web e e-commerces, e tutoria personalizada em programação, matemática e informática."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "O que é o software GRIP?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "GRIP é um conjunto de software de gestão automobilística desenvolvido pela equipa de Ricardo Rouco no Grupo Erre. Inclui o GRIP SRO (Sistema de Reparação Oficial para concessionários), GRIP ROTAX (gestão de motores Rotax), e GRIP On Demand (solução cloud para oficinas e concessionários). Oferece gestão de oficinas, inventário de peças, histórico de serviços e suporte multi-localização."
                      }
                    }
                  ]
                },
                {
                  "@type": "Article",
                  "@id": "https://ricardodsr.github.io/#article",
                  "headline": "Ricardo Rouco - Especialista em IA & Consultoria Informática - Grupo Erre",
                  "description": "Especialista em Inteligência Artificial (IA) e Head of Development & AI R&D no Grupo Erre. Consultoria informática, cibersegurança, desenvolvimento web e autor de e-books técnicos em Portugal.",
                  "keywords": "Especialista em IA, Inteligência Artificial, Grupo Erre, Consultoria Informática, E-Books Técnicos, Cibersegurança Portugal, GRIP Software, Software Gestão Automobilística, GRIP SRO, GRIP ROTAX, GRIP On Demand",
                  "author": {
                    "@id": "https://ricardodsr.github.io/#person"
                  },
                  "publisher": {
                    "@id": "https://ricardodsr.github.io/#person"
                  },
                  "datePublished": "2023-01-01T00:00:00+00:00",
                  "dateModified": "${new Date().toISOString()}",
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://ricardodsr.github.io/"
                  },
                  "image": {
                    "@id": "https://ricardodsr.github.io/#personImage"
                  },
                  "articleSection": "Professional Profile",
                  "about": [
                    {
                      "@type": "Thing",
                      "name": "Especialista em Inteligência Artificial"
                    },
                    {
                      "@type": "Thing",
                      "name": "Consultoria Informática"
                    },
                    {
                      "@type": "Thing",
                      "name": "E-Books Técnicos"
                    },
                    {
                      "@type": "Thing",
                      "name": "Cibersegurança"
                    },
                    {
                      "@type": "Thing",
                      "name": "Grupo Erre"
                    },
                    {
                      "@type": "Thing",
                      "name": "GRIP Software de Gestão Automobilística"
                    }
                  ],
                  "mentions": [
                    {
                      "@id": "https://grupoerre.pt/#organization"
                    }
                  ]
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://grupoerre.pt/#grip-software",
                  "name": "GRIP - Software de Gestão Automobilística",
                  "description": "Suite de software de gestão automobilística desenvolvida pelo Grupo Erre, incluindo GRIP SRO, GRIP ROTAX e GRIP On Demand",
                  "applicationCategory": "BusinessApplication",
                  "operatingSystem": "Web, Windows",
                  "creator": {
                    "@id": "https://grupoerre.pt/#organization"
                  },
                  "author": {
                    "@id": "https://ricardodsr.github.io/#person"
                  },
                  "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "EUR",
                    "availability": "https://schema.org/InStock"
                  },
                  "featureList": [
                    "GRIP SRO - Sistema de Reparação Oficial para concessionários",
                    "GRIP ROTAX - Gestão de motores Rotax",
                    "GRIP On Demand - Solução cloud para oficinas e concessionários",
                    "Gestão de oficinas e workshops",
                    "Inventário de peças e encomendas",
                    "Histórico de serviços e relatórios",
                    "Suporte multi-localização"
                  ],
                  "audience": {
                    "@type": "Audience",
                    "audienceType": "Concessionários automóveis, Oficinas, Workshops"
                  }
                }
              ]
            }
          `})]}),e.jsx(ee,{}),e.jsxs("main",{children:[e.jsx(za,{}),e.jsx(La,{}),e.jsx(Ma,{}),e.jsx(Ba,{}),e.jsx(Fa,{})]}),e.jsx(oe,{}),e.jsx(Ha,{})]})},$a=()=>{const o=Yo();return r.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",o.pathname)},[o.pathname]),e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-4xl font-bold mb-4",children:"404"}),e.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"Oops! Page not found"}),e.jsx("a",{href:"/",className:"text-blue-500 hover:text-blue-700 underline",children:"Return to Home"})]})})},_a=()=>{const{t:o}=j(),t=[{icon:e.jsx(V,{className:"w-6 h-6"}),title:o("privacy.dataCollection.title"),content:[o("privacy.dataCollection.personal"),o("privacy.dataCollection.technical"),o("privacy.dataCollection.cookies")]},{icon:e.jsx(Xo,{className:"w-6 h-6"}),title:o("privacy.dataUse.title"),content:[o("privacy.dataUse.services"),o("privacy.dataUse.communication"),o("privacy.dataUse.marketing"),o("privacy.dataUse.legal")]},{icon:e.jsx(M,{className:"w-6 h-6"}),title:o("privacy.legalBasis.title"),content:[o("privacy.legalBasis.consent"),o("privacy.legalBasis.contract"),o("privacy.legalBasis.legitimate")]},{icon:e.jsx(Ee,{className:"w-6 h-6"}),title:o("privacy.rights.title"),content:[o("privacy.rights.access"),o("privacy.rights.rectification"),o("privacy.rights.erasure"),o("privacy.rights.portability"),o("privacy.rights.objection"),o("privacy.rights.complaint")]}];return e.jsxs(e.Fragment,{children:[e.jsxs(Z,{children:[e.jsxs("title",{children:[o("privacy.title")," - Ricardo Rouco"]}),e.jsx("meta",{name:"description",content:o("privacy.intro")}),e.jsx("meta",{name:"robots",content:"index, follow"}),e.jsx("link",{rel:"canonical",href:"https://ricardodsr.github.io/privacy-policy"})]}),e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsx(ee,{}),e.jsx("main",{className:"container mx-auto px-4 py-16",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6",children:e.jsx(M,{className:"w-8 h-8 text-primary"})}),e.jsx("h1",{className:"text-4xl font-bold text-foreground mb-4",children:o("privacy.title")}),e.jsx("p",{className:"text-muted-foreground text-lg mb-2",children:o("privacy.lastUpdated")}),e.jsx("p",{className:"text-muted-foreground max-w-2xl mx-auto",children:o("privacy.intro")})]}),e.jsxs("div",{className:"space-y-12",children:[t.map((a,i)=>e.jsxs("section",{className:"bg-card rounded-lg p-8 border",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"text-primary",children:a.icon}),e.jsx("h2",{className:"text-2xl font-semibold text-card-foreground",children:a.title})]}),e.jsx("ul",{className:"space-y-3",children:a.content.map((s,c)=>e.jsxs("li",{className:"text-muted-foreground leading-relaxed",children:["• ",s]},c))})]},i)),e.jsxs("section",{className:"bg-card rounded-lg p-8 border",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx(de,{className:"w-6 h-6 text-primary"}),e.jsx("h2",{className:"text-2xl font-semibold text-card-foreground",children:o("privacy.dataRetention.title")})]}),e.jsx("p",{className:"text-muted-foreground leading-relaxed",children:o("privacy.dataRetention.desc")})]}),e.jsxs("section",{className:"bg-card rounded-lg p-8 border",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx(Ee,{className:"w-6 h-6 text-primary"}),e.jsx("h2",{className:"text-2xl font-semibold text-card-foreground",children:o("privacy.dataSecurity.title")})]}),e.jsx("p",{className:"text-muted-foreground leading-relaxed",children:o("privacy.dataSecurity.desc")})]}),e.jsxs("section",{className:"bg-card rounded-lg p-8 border",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx(V,{className:"w-6 h-6 text-primary"}),e.jsx("h2",{className:"text-2xl font-semibold text-card-foreground",children:o("privacy.thirdParty.title")})]}),e.jsx("p",{className:"text-muted-foreground leading-relaxed",children:o("privacy.thirdParty.desc")})]}),e.jsxs("section",{className:"bg-card rounded-lg p-8 border",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx(Ke,{className:"w-6 h-6 text-primary"}),e.jsx("h2",{className:"text-2xl font-semibold text-card-foreground",children:o("privacy.contact.title")})]}),e.jsx("p",{className:"text-muted-foreground leading-relaxed",children:o("privacy.contact.desc")})]}),e.jsxs("section",{className:"bg-card rounded-lg p-8 border",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx(de,{className:"w-6 h-6 text-primary"}),e.jsx("h2",{className:"text-2xl font-semibold text-card-foreground",children:o("privacy.changes.title")})]}),e.jsx("p",{className:"text-muted-foreground leading-relaxed",children:o("privacy.changes.desc")})]})]})]})}),e.jsx(oe,{})]})]})},Ja=()=>{const{t:o}=j(),t=[{icon:e.jsx(Zo,{className:"w-6 h-6"}),title:o("terms.acceptance.title"),content:o("terms.acceptance.desc")},{icon:e.jsx(me,{className:"w-6 h-6"}),title:o("terms.services.title"),content:o("terms.services.desc")},{icon:e.jsx(V,{className:"w-6 h-6"}),title:o("terms.userResponsibilities.title"),content:[o("terms.userResponsibilities.lawful"),o("terms.userResponsibilities.accurate"),o("terms.userResponsibilities.confidential")]},{icon:e.jsx(ea,{className:"w-6 h-6"}),title:o("terms.intellectualProperty.title"),content:o("terms.intellectualProperty.desc")},{icon:e.jsx(M,{className:"w-6 h-6"}),title:o("terms.limitations.title"),content:o("terms.limitations.desc")},{icon:e.jsx(oa,{className:"w-6 h-6"}),title:o("terms.termination.title"),content:o("terms.termination.desc")},{icon:e.jsx(aa,{className:"w-6 h-6"}),title:o("terms.governing.title"),content:o("terms.governing.desc")}];return e.jsxs(e.Fragment,{children:[e.jsxs(Z,{children:[e.jsxs("title",{children:[o("terms.title")," - Ricardo Rouco"]}),e.jsx("meta",{name:"description",content:o("terms.intro")}),e.jsx("meta",{name:"robots",content:"index, follow"}),e.jsx("link",{rel:"canonical",href:"https://ricardodsr.github.io/terms-of-service"})]}),e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsx(ee,{}),e.jsx("main",{className:"container mx-auto px-4 py-16",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6",children:e.jsx(V,{className:"w-8 h-8 text-primary"})}),e.jsx("h1",{className:"text-4xl font-bold text-foreground mb-4",children:o("terms.title")}),e.jsx("p",{className:"text-muted-foreground text-lg mb-2",children:o("terms.lastUpdated")}),e.jsx("p",{className:"text-muted-foreground max-w-2xl mx-auto",children:o("terms.intro")})]}),e.jsxs("div",{className:"space-y-8",children:[t.map((a,i)=>e.jsxs("section",{className:"bg-card rounded-lg p-8 border",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"text-primary",children:a.icon}),e.jsx("h2",{className:"text-2xl font-semibold text-card-foreground",children:a.title})]}),Array.isArray(a.content)?e.jsx("ul",{className:"space-y-3",children:a.content.map((s,c)=>e.jsxs("li",{className:"text-muted-foreground leading-relaxed",children:["• ",s]},c))}):e.jsx("p",{className:"text-muted-foreground leading-relaxed",children:a.content})]},i)),e.jsxs("section",{className:"bg-card rounded-lg p-8 border",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(M,{className:"w-6 h-6 text-primary"}),e.jsx("h2",{className:"text-2xl font-semibold text-card-foreground",children:o("terms.privacy.title")})]}),e.jsx("p",{className:"text-muted-foreground leading-relaxed",children:o("terms.privacy.desc")})]}),e.jsxs("section",{className:"bg-card rounded-lg p-8 border",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(Ke,{className:"w-6 h-6 text-primary"}),e.jsx("h2",{className:"text-2xl font-semibold text-card-foreground",children:o("terms.contact.title")})]}),e.jsx("p",{className:"text-muted-foreground leading-relaxed",children:o("terms.contact.desc")})]}),e.jsxs("section",{className:"bg-card rounded-lg p-8 border",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(de,{className:"w-6 h-6 text-primary"}),e.jsx("h2",{className:"text-2xl font-semibold text-card-foreground",children:o("terms.changes.title")})]}),e.jsx("p",{className:"text-muted-foreground leading-relaxed",children:o("terms.changes.desc")})]})]})]})}),e.jsx(oe,{})]})]})},Ka=({item:o,isDark:t})=>e.jsxs("div",{className:`${t?"bg-green-900/20 border-green-700":"bg-green-50 border-green-500"} border-l-4 rounded-lg p-4 my-3`,children:[e.jsx("div",{className:`font-bold text-sm mb-2 ${t?"text-green-400":"text-green-700"}`,children:o.title}),e.jsx("div",{className:`text-sm ${t?"text-gray-300":"text-gray-700"}`,children:o.content})]}),Ya=({item:o,isDark:t})=>e.jsxs("div",{className:`${t?"bg-blue-900/20 border-blue-700":"bg-blue-50 border-blue-500"} border-l-4 rounded-lg p-4 my-3`,children:[o.title&&e.jsx("div",{className:`font-bold text-xs uppercase tracking-wide mb-2 ${t?"text-blue-400":"text-blue-700"}`,children:o.title}),e.jsx("div",{className:`font-mono text-sm text-center whitespace-pre-wrap ${t?"text-gray-200":"text-gray-800"}`,children:o.content})]}),Xa=({item:o,isDark:t})=>{const[a,i]=r.useState(!1);return e.jsxs("div",{className:`${t?"bg-yellow-900/20 border-yellow-700":"bg-yellow-50 border-yellow-500"} border-2 rounded-lg p-4 my-3`,children:[e.jsx("div",{className:`font-bold text-sm mb-2 ${t?"text-yellow-400":"text-yellow-700"}`,children:o.title}),e.jsx("div",{className:`text-sm mb-3 ${t?"text-gray-300":"text-gray-700"}`,children:o.content}),o.answer&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>i(!a),className:`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${t?"bg-yellow-700 hover:bg-yellow-600 text-white":"bg-yellow-600 hover:bg-yellow-700 text-white"}`,children:[e.jsxs("span",{children:["👁️ ",a?"Ocultar":"Ver"," Resolução"]}),e.jsx(O,{className:`w-4 h-4 transition-transform ${a?"rotate-180":""}`})]}),a&&e.jsx("div",{className:`mt-3 p-3 rounded-lg ${t?"bg-green-900/30 border-l-4 border-green-600":"bg-green-100/50 border-l-4 border-green-500"}`,children:e.jsx("div",{className:`text-sm ${t?"text-gray-200":"text-gray-800"}`,children:o.answer})})]})]})},Za=({item:o,isDark:t})=>e.jsxs("div",{className:`${t?"bg-red-900/20 border-red-700":"bg-red-50 border-red-500"} border-l-4 rounded-lg p-4 my-3`,children:[e.jsx("div",{className:`font-bold text-sm mb-2 ${t?"text-red-400":"text-red-700"}`,children:o.title}),o.content&&e.jsx("div",{className:`text-sm mb-2 ${t?"text-gray-300":"text-gray-700"}`,children:o.content}),o.items&&o.items.length>0&&e.jsx("ul",{className:"space-y-1 ml-4",children:o.items.map((a,i)=>e.jsx("li",{className:`text-sm list-disc ${t?"text-gray-300":"text-gray-700"}`,children:a},i))})]}),et=({item:o,isDark:t})=>e.jsxs("div",{className:`${t?"bg-blue-900/20 border-blue-600":"bg-blue-50 border-blue-400"} border rounded-lg p-3 my-3 text-sm ${t?"text-gray-300":"text-gray-700"}`,children:[e.jsx("span",{className:"mr-2",children:"ℹ️"}),o.content]}),ot=({item:o,isDark:t})=>e.jsx("div",{className:"my-3 overflow-x-auto",children:e.jsxs("table",{className:`w-full text-sm ${t?"bg-gray-800":"bg-white"} rounded-lg overflow-hidden shadow-md`,children:[o.headers&&o.headers.length>0&&e.jsx("thead",{className:`${t?"bg-gradient-to-r from-blue-900 to-blue-800":"bg-gradient-to-r from-primary to-secondary"} text-white`,children:e.jsx("tr",{children:o.headers.map((a,i)=>e.jsx("th",{className:"px-4 py-3 text-left font-semibold",children:a},i))})}),o.rows&&o.rows.length>0&&e.jsx("tbody",{children:o.rows.map((a,i)=>e.jsx("tr",{className:`${i%2===0?t?"bg-gray-800":"bg-white":t?"bg-gray-750":"bg-gray-50"} ${t?"hover:bg-blue-900/20":"hover:bg-blue-50"} transition-colors`,children:a.map((s,c)=>{var p;return e.jsx("td",{className:`px-4 py-3 ${t?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"} ${i<(((p=o.rows)==null?void 0:p.length)||0)-1?"border-b":""}`,children:s},c)})},i))})]})}),at=({item:o,isDark:t})=>e.jsx("p",{className:`text-sm my-2 ${t?"text-gray-300":"text-gray-700"}`,children:o.content}),tt=({items:o,isDark:t})=>e.jsx("div",{className:"space-y-2",children:o.map((a,i)=>{switch(a.type){case"definition":return e.jsx(Ka,{item:a,isDark:t},i);case"formula":return e.jsx(Ya,{item:a,isDark:t},i);case"example":return e.jsx(Xa,{item:a,isDark:t},i);case"important_note":return e.jsx(Za,{item:a,isDark:t},i);case"info":return e.jsx(et,{item:a,isDark:t},i);case"table":return e.jsx(ot,{item:a,isDark:t},i);case"paragraph":return e.jsx(at,{item:a,isDark:t},i);default:return null}})}),st=({difficulty:o,isDark:t})=>{const a=()=>{switch(o.toLowerCase()){case"easy":case"fácil":return t?"bg-green-900/30 text-green-400 border-green-700":"bg-green-100 text-green-700 border-green-500";case"medium":case"médio":return t?"bg-yellow-900/30 text-yellow-400 border-yellow-700":"bg-yellow-100 text-yellow-700 border-yellow-500";case"hard":case"difícil":return t?"bg-red-900/30 text-red-400 border-red-700":"bg-red-100 text-red-700 border-red-500";default:return t?"bg-gray-700 text-gray-300":"bg-gray-200 text-gray-700"}},i=()=>{switch(o.toLowerCase()){case"easy":case"fácil":return"⭐";case"medium":case"médio":return"⭐⭐";case"hard":case"difícil":return"⭐⭐⭐";default:return""}};return e.jsxs("span",{className:`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold border ${a()}`,children:[e.jsx("span",{children:i()}),e.jsx("span",{className:"capitalize",children:o})]})},it=({exercise:o,isDark:t})=>{const[a,i]=r.useState(!1);return e.jsxs("div",{className:`${t?"bg-gray-750 border-gray-700":"bg-gray-50 border-gray-200"} border-2 rounded-lg p-4 transition-all hover:shadow-md`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3 mb-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"text-sm font-bold text-primary",children:["#",o.number]}),e.jsx(st,{difficulty:o.difficulty,isDark:t})]}),o.subtopic&&e.jsx("span",{className:`text-xs px-2 py-1 rounded ${t?"bg-blue-900/30 text-blue-400":"bg-blue-100 text-blue-700"}`,children:o.subtopic})]}),e.jsxs("div",{className:`text-sm mb-3 ${t?"text-gray-200":"text-gray-800"}`,children:[e.jsx("strong",{className:t?"text-white":"text-gray-900",children:"Questão:"})," ",o.question]}),e.jsxs("button",{onClick:()=>i(!a),className:`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${t?"bg-primary hover:bg-blue-600 text-white":"bg-primary hover:bg-blue-700 text-white"}`,children:[e.jsxs("span",{children:["👁️ ",a?"Ocultar":"Ver"," Resolução"]}),e.jsx(O,{className:`w-4 h-4 transition-transform ${a?"rotate-180":""}`})]}),a&&e.jsxs("div",{className:`mt-3 p-3 rounded-lg ${t?"bg-green-900/30 border-l-4 border-green-600":"bg-green-50 border-l-4 border-green-500"}`,children:[e.jsx("div",{className:`text-xs font-semibold mb-1 ${t?"text-green-400":"text-green-700"}`,children:"Resolução:"}),e.jsx("div",{className:`text-sm ${t?"text-gray-200":"text-gray-800"}`,children:o.answer})]})]})},nt=({exercises:o,isDark:t})=>{const[a,i]=r.useState(!1);return!o||o.length===0?null:e.jsxs("div",{className:`${t?"bg-gray-800 border-gray-700":"bg-white border-gray-200"} border-2 rounded-xl p-4 sm:p-6 mt-4`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl",children:"📝"}),e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-bold ${t?"text-white":"text-gray-900"}`,children:"Exercícios"}),e.jsxs("p",{className:`text-xs ${t?"text-gray-400":"text-gray-600"}`,children:[o.length," exercícios disponíveis"]})]})]}),e.jsxs("button",{onClick:()=>i(!a),className:`px-4 py-2 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 ${t?"bg-primary hover:bg-blue-600 text-white":"bg-primary hover:bg-blue-700 text-white"}`,children:[e.jsxs("span",{children:[a?"Ocultar":"Mostrar"," Exercícios"]}),e.jsx(O,{className:`w-4 h-4 transition-transform ${a?"rotate-180":""}`})]})]}),a&&e.jsx("div",{className:"grid grid-cols-1 gap-4 mt-4",children:o.map((s,c)=>e.jsx(it,{exercise:s,isDark:t},c))})]})},rt=[{id:1,title:"ANÁLISE COMBINATÓRIA",subtopics:[{title:"Triângulo de Pascal",content:[{type:"definition",title:"Definição",content:"O Triângulo de Pascal é uma disposição triangular de números onde cada número é a soma dos dois números imediatamente acima dele."},{type:"formula",title:"Estrutura do Triângulo de Pascal",content:"1 1 1 1 2 1 1 3 3 1 1 4 6 4 1 1 5 10 10 5 1"},{type:"formula",title:"Fórmula Geral",content:"C(n,k) = n! / (k! × (n-k)!)"},{type:"paragraph",content:"Cada elemento na linha n e coluna k representa o coeficiente binomial C(n,k)."}]},{title:"Propriedades do Triângulo de Pascal",content:[{type:"table",headers:["Propriedade","Fórmula"],rows:[["Simetria","C(n,k) = C(n, n-k)"],["Soma de linha","C(n,0) + C(n,1) + ... + C(n,n) = 2n"],["Relação de Stifel","C(n,k) = C(n-1, k-1) + C(n-1, k)"],["Extremos","C(n,0) = C(n,n) = 1"],["Linha seguinte","C(n,1) = n"]]}]},{title:"Binómio de Newton",content:[{type:"definition",title:"Fórmula do Binómio de Newton",content:"Permite expandir uma potência de um binómio (a + b)n numa soma de termos."},{type:"formula",title:"Fórmula Principal",content:"(a + b)n = Σ C(n,k) × an-k × bk (a + b)n = C(n,0)an + C(n,1)an-1b + C(n,2)an-2b2 + ... + C(n,n)bn"},{type:"example",title:"Exemplo: (x + 2)³",content:"(x + 2)³ = C(3,0)x³ + C(3,1)x²(2) + C(3,2)x(2)² + C(3,3)(2)³ = 1×x³ + 3×x²×2 + 3×x×4 + 1×8 = x³ + 6x² + 12x + 8"},{type:"info",content:"Os coeficientes do desenvolvimento correspondem aos elementos da linha n do Triângulo de Pascal."}]},{title:"O Termo de Ordem p+1",content:[{type:"definition",title:"Termo Geral",content:"No desenvolvimento de (a + b)n, o termo de ordem p+1 é dado por:"},{type:"formula",title:"Fórmula do Termo p+1",content:"Tp+1 = C(n,p) × an-p × bp onde p ∈ {0, 1, 2, ..., n}"},{type:"important_note",title:"Atenção",content:"",items:["O primeiro termo tem ordem p = 0 (termo T₁)","O segundo termo tem ordem p = 1 (termo T₂)","Para encontrar o termo de ordem p+1, usa-se p na fórmula"]},{type:"example",title:"Exemplo: Termo de ordem 4 em (2x + 3)⁵",content:"Termo de ordem 4 significa p+1 = 4, logo p = 3 T₄ = C(5,3) × (2x)^(5-3) × 3³ = 10 × (2x)² × 27 = 10 × 4x² × 27 = 1080x²"}]}],exercises:[{number:1,difficulty:"easy",subtopic:"Triângulo de Pascal",question:"Determine o valor do elemento da linha 6 e coluna 2 do Triângulo de Pascal (considerando que a primeira linha é a linha 0).",answer:"15. Usando a fórmula C(6,2) = 6!/(2!×4!) = (6×5)/(2×1) = 15"},{number:2,difficulty:"easy",subtopic:"Binómio de Newton",question:"Desenvolva (x + 2)³ usando o Binómio de Newton.",answer:"(x + 2)³ = C(3,0)x³ + C(3,1)x²×2 + C(3,2)x×2² + C(3,3)×2³ = x³ + 6x² + 12x + 8"},{number:3,difficulty:"medium",subtopic:"Arranjos",question:"De quantas maneiras diferentes se podem atribuir os três primeiros lugares de um pódio a 10 atletas?",answer:"A(10,3) = 10!/(10-3)! = 10!/7! = 10×9×8 = 720 maneiras"},{number:4,difficulty:"medium",subtopic:"Combinações",question:"Uma turma tem 25 alunos. De quantas maneiras pode o professor escolher um grupo de 4 alunos para apresentar um trabalho?",answer:"C(25,4) = 25!/(4!×21!) = (25×24×23×22)/(4×3×2×1) = 12650 maneiras"},{number:5,difficulty:"easy",subtopic:"Permutações",question:"De quantas maneiras diferentes se podem sentar 5 pessoas numa fila?",answer:"P₅ = 5! = 5×4×3×2×1 = 120 maneiras"},{number:6,difficulty:"medium",subtopic:"Binómio de Newton",question:"Determine o coeficiente de x⁵ no desenvolvimento de (2x - 1)⁷.",answer:"Termo geral: C(7,k)×(2x)^(7-k)×(-1)^k. Para x⁵: 7-k=5, logo k=2. Coeficiente = C(7,2)×2⁵×(-1)² = 21×32×1 = 672"},{number:7,difficulty:"hard",subtopic:"Combinações",question:"Um saco contém 8 bolas vermelhas e 6 bolas azuis. De quantas maneiras se podem escolher 5 bolas de modo que 3 sejam vermelhas e 2 sejam azuis?",answer:"C(8,3)×C(6,2) = [8!/(3!×5!)]×[6!/(2!×4!)] = 56×15 = 840 maneiras"},{number:8,difficulty:"hard",subtopic:"Permutações",question:"Quantos anagramas da palavra MATEMÁTICA existem que começam e terminam por vogal?",answer:"Vogais: A,A,A,E,I,I (6 vogais, com repetições). Consoantes: M,T,M,T,C (5 consoantes). Primeiro e último lugares: 6×5=30 (vogais diferentes). Lugares intermédios: [4!/(2!)]×[5!/(2!×2!)]=12×30=360. Mas devemos considerar vogais iguais nas pontas. Resposta complexa: aproximadamente 10800 anagramas (considerando todas as permutações com repetição)"},{number:9,difficulty:"medium",subtopic:"Triângulo de Pascal",question:"Mostre que C(n,k) + C(n,k+1) = C(n+1,k+1) para n=5 e k=2.",answer:"C(5,2) + C(5,3) = 10 + 10 = 20. C(6,3) = 6!/(3!×3!) = 20. Logo, a igualdade verifica-se."},{number:10,difficulty:"hard",subtopic:"Arranjos e Combinações",question:"Resolva a equação C(n,2) = 3×A(n-2,2), com n ∈ ℕ e n ≥ 4.",answer:"n!/(2!(n-2)!) = 3×(n-2)!/(n-4)!. Simplificando: n(n-1)/2 = 3(n-2)(n-3). n²-n = 6(n²-5n+6). n²-n = 6n²-30n+36. 5n²-29n+36=0. n=(29±√(841-720))/10=(29±11)/10. n=4 ou n=1.8. Como n≥4, n=4"},{number:11,difficulty:"medium",subtopic:"Binómio de Newton",question:"Calcule a soma dos coeficientes do desenvolvimento de (3x - 2y)⁴.",answer:"A soma dos coeficientes obtém-se fazendo x=1 e y=1: (3×1 - 2×1)⁴ = 1⁴ = 1"},{number:12,difficulty:"easy",subtopic:"Combinações",question:"Calcule C(8,5).",answer:"C(8,5) = C(8,3) = 8!/(3!×5!) = (8×7×6)/(3×2×1) = 56"},{number:13,difficulty:"hard",subtopic:"Aplicação",question:"Uma comissão de 6 pessoas deve ser formada a partir de 5 homens e 6 mulheres. De quantas maneiras se pode formar a comissão se deve ter pelo menos 2 homens e pelo menos 3 mulheres?",answer:"Casos possíveis: (2H,4M), (3H,3M). C(5,2)×C(6,4) + C(5,3)×C(6,3) = 10×15 + 10×20 = 150 + 200 = 350 maneiras"},{number:14,difficulty:"medium",subtopic:"Permutações com repetição",question:"Quantos anagramas tem a palavra BANANA?",answer:"6 letras: B(1), A(3), N(2). Permutações com repetição: 6!/(3!×2!) = 720/(6×2) = 60 anagramas"},{number:15,difficulty:"hard",subtopic:"Triângulo de Pascal - Propriedade",question:"Demonstre que a soma dos elementos da linha n do Triângulo de Pascal é 2ⁿ, verificando para n=4.",answer:"Linha 4: C(4,0) + C(4,1) + C(4,2) + C(4,3) + C(4,4) = 1 + 4 + 6 + 4 + 1 = 16 = 2⁴. Demonstração geral: pelo Binómio de Newton, (1+1)ⁿ = Σ C(n,k) = 2ⁿ"}]},{id:2,title:"PROBABILIDADES",subtopics:[{title:"Operações com Conjuntos",content:[{type:"table",headers:["Operação","Notação","Descrição"],rows:[["União","A ∪ B","Elementos que pertencem a A ou a B"],["Interseção","A ∩ B","Elementos que pertencem a A e a B"],["Complementar","A' ou Ā","Elementos que não pertencem a A"],["Diferença","A \\ B","Elementos de A que não estão em B"]]}]},{title:"Tabela de Propriedades",content:[{type:"table",headers:["Propriedade","União (∪)","Interseção (∩)"],rows:[["Elemento Neutro","A ∪ ∅ = A","A ∩ Ω = A"],["Elemento Absorvente","A ∪ Ω = Ω","A ∩ ∅ = ∅"],["Comutativa","A ∪ B = B ∪ A","A ∩ B = B ∩ A"],["Associativa","(A ∪ B) ∪ C = A ∪ (B ∪ C)","(A ∩ B) ∩ C = A ∩ (B ∩ C)"],["Distributiva","A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)","A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)"]]},{type:"info",content:"Ω representa o espaço de resultados (acontecimento certo) e ∅ o conjunto vazio (acontecimento impossível)."}]},{title:"Leis de De Morgan",content:[{type:"formula",title:"Duas Leis Fundamentais",content:"(A ∪ B)' = A' ∩ B' (A ∩ B)' = A' ∪ B'"},{type:"info",content:"O complementar da união é a interseção dos complementares. O complementar da interseção é a união dos complementares."}]},{title:"As Três Fórmulas Mais Usadas",content:[{type:"formula",title:"1. Probabilidade da União (Fórmula Geral)",content:"P(A ∪ B) = P(A) + P(B) − P(A ∩ B)"},{type:"formula",title:"2. Probabilidade Condicional",content:"P(A|B) = P(A ∩ B) / P(B), com P(B) > 0"},{type:"formula",title:"3. Teorema da Probabilidade Total",content:"P(A ∩ B) = P(A|B) × P(B) = P(B|A) × P(A)"}]},{title:"Tipos de Acontecimentos",content:[{type:"definition",title:"Acontecimento Certo (Ω)",content:"Acontecimento que ocorre sempre. P(Ω) = 1"},{type:"definition",title:"Acontecimentos Contrários",content:"Dois acontecimentos A e A' são contrários se: • A ∪ A' = Ω • A ∩ A' = ∅ • P(A') = 1 − P(A)"},{type:"definition",title:"Acontecimentos Disjuntos (ou Incompatíveis)",content:"Dois acontecimentos A e B são disjuntos se não podem ocorrer simultaneamente: • A ∩ B = ∅ • P(A ∩ B) = 0 • P(A ∪ B) = P(A) + P(B)"},{type:"definition",title:"Acontecimentos Independentes",content:"Dois acontecimentos A e B são independentes se a ocorrência de um não afeta a probabilidade do outro: • P(A ∩ B) = P(A) × P(B) • P(A|B) = P(A) • P(B|A) = P(B)"},{type:"info",content:"B ⊂ A: Se B está contido em A, então P(B) ≤ P(A)"}]},{title:"Propriedades Fundamentais",content:[]}],exercises:[{number:1,difficulty:"easy",subtopic:"Lei de Laplace",question:"Ao lançar um dado equilibrado, qual é a probabilidade de sair um número par?",answer:"Casos favoráveis: {2,4,6} = 3. Casos possíveis: 6. P(par) = 3/6 = 1/2 = 0,5"},{number:2,difficulty:"easy",subtopic:"Experiências aleatórias",question:"Numa caixa há 5 bolas vermelhas e 3 bolas azuis. Retira-se uma bola ao acaso. Qual é a probabilidade de sair uma bola vermelha?",answer:"P(vermelha) = 5/8 = 0,625"},{number:3,difficulty:"medium",subtopic:"Acontecimentos",question:"Lançam-se dois dados. Calcule a probabilidade de a soma ser 7.",answer:"Casos favoráveis: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos. Casos possíveis: 6×6 = 36. P(soma=7) = 6/36 = 1/6"},{number:4,difficulty:"medium",subtopic:"Probabilidade condicionada",question:"Numa turma, 60% dos alunos são raparigas. Entre as raparigas, 80% praticam desporto. Qual é a probabilidade de um aluno escolhido ao acaso ser rapariga e praticar desporto?",answer:"P(Rapariga ∩ Desporto) = P(Rapariga) × P(Desporto|Rapariga) = 0,6 × 0,8 = 0,48"},{number:5,difficulty:"hard",subtopic:"Probabilidade condicionada",question:"Duas caixas: Caixa A tem 3 bolas brancas e 2 pretas; Caixa B tem 1 bola branca e 4 pretas. Escolhe-se uma caixa ao acaso e retira-se uma bola. Se a bola é branca, qual é a probabilidade de ter vindo da caixa A?",answer:"P(A|Branca) = P(A∩Branca)/P(Branca). P(A∩Branca) = 1/2 × 3/5 = 3/10. P(B∩Branca) = 1/2 × 1/5 = 1/10. P(Branca) = 3/10 + 1/10 = 4/10. P(A|Branca) = (3/10)/(4/10) = 3/4 = 0,75"},{number:6,difficulty:"medium",subtopic:"Acontecimentos independentes",question:"A probabilidade de chover amanhã é 0,3 e a probabilidade de chover depois de amanhã é 0,4. Assumindo independência, qual é a probabilidade de chover nos dois dias?",answer:"P(A∩B) = P(A) × P(B) = 0,3 × 0,4 = 0,12"},{number:7,difficulty:"easy",subtopic:"Lei de Laplace",question:"Num baralho de 52 cartas, qual é a probabilidade de retirar um ás?",answer:"P(Ás) = 4/52 = 1/13 ≈ 0,077"},{number:8,difficulty:"hard",subtopic:"Acontecimentos",question:"Sejam A e B dois acontecimentos tais que P(A) = 0,6, P(B) = 0,5 e P(A∪B) = 0,8. Calcule P(A∩B) e determine se A e B são independentes.",answer:"P(A∪B) = P(A) + P(B) - P(A∩B). 0,8 = 0,6 + 0,5 - P(A∩B). P(A∩B) = 0,3. Para serem independentes: P(A∩B) = P(A)×P(B) = 0,6×0,5 = 0,3. Logo, A e B são independentes."},{number:9,difficulty:"medium",subtopic:"Probabilidade condicionada",question:"Num teste, 70% dos alunos passaram. Entre os que estudaram, 90% passaram. Se 80% dos alunos estudaram, qual é a probabilidade de um aluno que passou ter estudado?",answer:"P(E|P) = P(E∩P)/P(P). P(E∩P) = 0,8 × 0,9 = 0,72. P(P) = 0,7. P(E|P) = 0,72/0,7 ≈ 1,029. Erro: P(P) deve ser calculado. P(P) = P(E)×P(P|E) + P(Ē)×P(P|Ē) = 0,8×0,9 + 0,2×P(P|Ē). Se P(P)=0,7: 0,7 = 0,72 + 0,2×P(P|Ē), impossível. Reformular: P(E|P) = 0,72/0,7 = 36/35, o que indica erro nos dados. Assumindo coerência: resposta aproximada 0,9 a 0,95"},{number:10,difficulty:"hard",subtopic:"Aplicação",question:"Uma fábrica tem três máquinas A, B e C que produzem 30%, 45% e 25% da produção total, respetivamente. As taxas de defeito são 2%, 3% e 4%. Se uma peça escolhida ao acaso é defeituosa, qual é a probabilidade de ter sido produzida pela máquina B?",answer:"P(B|D) = P(B∩D)/P(D). P(B∩D) = 0,45 × 0,03 = 0,0135. P(D) = 0,30×0,02 + 0,45×0,03 + 0,25×0,04 = 0,006 + 0,0135 + 0,01 = 0,0295. P(B|D) = 0,0135/0,0295 ≈ 0,458 ou 45,8%"},{number:11,difficulty:"medium",subtopic:"Acontecimentos complementares",question:"A probabilidade de um jogador marcar um golo é 0,35. Qual é a probabilidade de não marcar?",answer:"P(não marcar) = 1 - P(marcar) = 1 - 0,35 = 0,65"},{number:12,difficulty:"hard",subtopic:"Acontecimentos independentes",question:"Três atiradores têm probabilidades de acertar no alvo de 0,8, 0,7 e 0,6, respetivamente. Se todos atiram simultaneamente, qual é a probabilidade de pelo menos um acertar?",answer:"P(pelo menos um) = 1 - P(nenhum acerta) = 1 - P(A̅)×P(B̅)×P(C̅) = 1 - (0,2)×(0,3)×(0,4) = 1 - 0,024 = 0,976"},{number:13,difficulty:"easy",subtopic:"Espaço de resultados",question:"Ao lançar uma moeda três vezes, quantos resultados diferentes existem?",answer:"2³ = 8 resultados: {CCC, CCE, CEC, CEE, ECC, ECE, EEC, EEE}"},{number:14,difficulty:"medium",subtopic:"Probabilidade condicionada",question:"Sejam A e B acontecimentos tais que P(A) = 0,4, P(B|A) = 0,6 e P(B|A̅) = 0,3. Calcule P(B).",answer:"P(B) = P(A)×P(B|A) + P(A̅)×P(B|A̅) = 0,4×0,6 + 0,6×0,3 = 0,24 + 0,18 = 0,42"},{number:15,difficulty:"hard",subtopic:"Aplicação combinada",question:"Numa turma de 30 alunos, 18 têm computador portátil e 12 têm tablet. 8 alunos têm ambos. Escolhendo um aluno ao acaso, qual é a probabilidade de ter computador ou tablet?",answer:"P(C∪T) = P(C) + P(T) - P(C∩T) = 18/30 + 12/30 - 8/30 = 22/30 = 11/15 ≈ 0,733"}]},{id:3,title:"SUCESSÕES",subtopics:[{title:"Definição do Limite Finito de uma Sucessão",content:[{type:"definition",title:"Definição Formal",content:"Diz-se que uma sucessão (un) tem limite finito L quando n tende para infinito se, para qualquer ε > 0, existe uma ordem p tal que: Para todo n > p: |un − L| < ε"},{type:"formula",title:"Notação",content:"lim un = L ou un → L quando n → +∞ n→+∞"},{type:"info",content:"Quando uma sucessão tem limite finito, diz-se que é convergente. Caso contrário, diz-se que é divergente."}]},{title:"Limites Aplicáveis",content:[{type:"table",headers:["Limite","Resultado","Condição"],rows:[["lim k / np","0","p > 0, k ∈ ℝ"],["lim np","+∞","p > 0"],["lim an","+∞","a > 1"],["lim an","0","0 < a < 1"],["lim ⁿ√n","1","-"],["lim ⁿ√a","1","a > 0"]]},{type:"important_note",title:"Operações com Limites",content:"",items:["lim (un + vn) = lim un + lim vn","lim (un × vn) = lim un × lim vn","lim (un / vn) = lim un / lim vn (se lim vn ≠ 0)","lim k × un = k × lim un"]}]},{title:"Número de Neper (e)",content:[{type:"definition",title:"Definição",content:"O número de Neper, representado por e, é uma constante matemática irracional cujo valor aproximado é e ≈ 2,71828..."},{type:"formula",title:"Limites Notáveis com e",content:"lim (1 + 1/n)n = e n→+∞ lim (1 + k/n)n = ek n→+∞ lim [(1 + an)1/an] = e, com lim an = 0 n→+∞"}]},{title:"Exemplos para Aplicar",content:[{type:"example",title:"Exemplo 1: lim (3n² + 5n) / (2n² − 1)",content:"Divide numerador e denominador por n²: = lim (3 + 5/n) / (2 − 1/n²) = (3 + 0) / (2 − 0) = 3/2"},{type:"example",title:"Exemplo 2: lim (2n + 3n) / 3n",content:"Divide numerador e denominador por 3n: = lim [(2/3)n + 1] = 0 + 1 = 1"},{type:"example",title:"Exemplo 3: lim (1 + 2/n)n",content:"Usando o limite notável com k = 2: = e²"}]}],exercises:[{number:1,difficulty:"easy",subtopic:"Definição",question:"Determine os cinco primeiros termos da sucessão definida por uₙ = 2n + 3.",answer:"u₁ = 5, u₂ = 7, u₃ = 9, u₄ = 11, u₅ = 13"},{number:2,difficulty:"easy",subtopic:"Progressões aritméticas",question:"Numa progressão aritmética, u₁ = 5 e r = 3. Calcule u₁₀.",answer:"uₙ = u₁ + (n-1)r. u₁₀ = 5 + 9×3 = 5 + 27 = 32"},{number:3,difficulty:"medium",subtopic:"Progressões geométricas",question:"Numa progressão geométrica, u₁ = 2 e r = 3. Calcule u₆.",answer:"uₙ = u₁ × r^(n-1). u₆ = 2 × 3⁵ = 2 × 243 = 486"},{number:4,difficulty:"medium",subtopic:"Limites de sucessões",question:"Calcule lim(n→+∞) (3n² + 2n - 1)/(n² + 5).",answer:"Dividindo numerador e denominador por n²: lim(n→+∞) (3 + 2/n - 1/n²)/(1 + 5/n²) = 3/1 = 3"},{number:5,difficulty:"easy",subtopic:"Monotonas",question:"Mostre que a sucessão uₙ = n² é crescente.",answer:"uₙ₊₁ - uₙ = (n+1)² - n² = n² + 2n + 1 - n² = 2n + 1 > 0 para todo n ∈ ℕ. Logo, a sucessão é crescente."},{number:6,difficulty:"hard",subtopic:"Limites de sucessões",question:"Calcule lim(n→+∞) (√(n² + n) - n).",answer:"Multiplicando por (√(n² + n) + n)/(√(n² + n) + n): lim (n² + n - n²)/(√(n² + n) + n) = lim n/(√(n² + n) + n). Dividindo por n: lim 1/(√(1 + 1/n) + 1) = 1/(1 + 1) = 1/2"},{number:7,difficulty:"medium",subtopic:"Progressões aritméticas",question:"A soma dos 20 primeiros termos de uma P.A. é 420 e o primeiro termo é 3. Determine a razão.",answer:"Sₙ = n(u₁ + uₙ)/2 = n(2u₁ + (n-1)r)/2. 420 = 20(2×3 + 19r)/2 = 10(6 + 19r). 42 = 6 + 19r. 19r = 36. r = 36/19"},{number:8,difficulty:"hard",subtopic:"Progressões geométricas",question:"A soma dos infinitos termos de uma P.G. é 12 e o primeiro termo é 8. Determine a razão.",answer:"S∞ = u₁/(1-r), com |r| < 1. 12 = 8/(1-r). 12(1-r) = 8. 12 - 12r = 8. 12r = 4. r = 1/3"},{number:9,difficulty:"easy",subtopic:"Limites de sucessões",question:"Calcule lim(n→+∞) 5/n.",answer:"lim(n→+∞) 5/n = 0"},{number:10,difficulty:"medium",subtopic:"Monotonas",question:"Estude a monotonia da sucessão uₙ = 1/n.",answer:"uₙ₊₁ - uₙ = 1/(n+1) - 1/n = (n - (n+1))/(n(n+1)) = -1/(n(n+1)) < 0 para todo n ∈ ℕ. Logo, a sucessão é decrescente."},{number:11,difficulty:"hard",subtopic:"Limites - Indeterminações",question:"Calcule lim(n→+∞) (2^n + 3^n)/(3^n + 4^n).",answer:"Dividindo numerador e denominador por 4^n: lim (2/4)^n + (3/4)^n)/((3/4)^n + 1) = (0 + 0)/(0 + 1) = 0"},{number:12,difficulty:"medium",subtopic:"Progressões aritméticas",question:"Interpole 5 meios aritméticos entre 3 e 21.",answer:"Temos 7 termos: u₁ = 3, u₇ = 21. uₙ = u₁ + (n-1)r. 21 = 3 + 6r. r = 3. Meios: 6, 9, 12, 15, 18"},{number:13,difficulty:"hard",subtopic:"Sucessões - Definição recorrente",question:"Considere a sucessão definida por u₁ = 2 e uₙ₊₁ = 3uₙ - 1. Determine u₄.",answer:"u₂ = 3×2 - 1 = 5. u₃ = 3×5 - 1 = 14. u₄ = 3×14 - 1 = 41"},{number:14,difficulty:"medium",subtopic:"Progressões geométricas",question:"Determine três números em P.G. sabendo que a sua soma é 21 e o seu produto é 216.",answer:"Sejam a/r, a, ar. Soma: a/r + a + ar = 21. Produto: (a/r)×a×ar = a³ = 216, logo a = 6. 6/r + 6 + 6r = 21. 6/r + 6r = 15. Multiplicando por r: 6 + 6r² = 15r. 6r² - 15r + 6 = 0. 2r² - 5r + 2 = 0. r = (5±3)/4 = 2 ou 1/2. Números: (3, 6, 12) ou (12, 6, 3)"},{number:15,difficulty:"hard",subtopic:"Limites notáveis",question:"Calcule lim(n→+∞) n × (√(n+1) - √n).",answer:"Multiplicando por (√(n+1) + √n)/(√(n+1) + √n): lim n × ((n+1) - n)/(√(n+1) + √n) = lim n/(√(n+1) + √n). Dividindo por √n: lim √n/(√(1+1/n) + 1) = +∞/(1+1) = +∞. Resposta: limite é +∞"}]},{id:4,title:"FUNÇÃO EXPONENCIAL",subtopics:[{title:"Propriedades da Função Exponencial (a > 1)",content:[{type:"definition",title:"Definição",content:"Função da forma f(x) = ax, onde a é a base (a > 0, a ≠ 1)"},{type:"table",headers:["Propriedade","Valor/Descrição"],rows:[["Domínio","Df = ℝ"],["Contradomínio","D'f = ℝ+ (todos os reais positivos)"],["Monotonia (a > 1)","Estritamente crescente"],["Monotonia (0 < a < 1)","Estritamente decrescente"],["Zeros","Não tem zeros"],["Assíntota","AH: y = 0 (eixo dos xx)"],["Ponto fixo","(0, 1) - passa sempre por este ponto"],["Injetividade","É injetiva"],["Continuidade","Contínua em ℝ"]]},{type:"formula",title:"Propriedades Operatórias",content:"ax+y = ax × ay ax−y = ax / ay (ax)y = axy a0 = 1 a1 = a a−x = 1/ax"}]},{title:"Relação entre Função Exponencial e Logarítmica",content:[{type:"definition",title:"Funções Inversas",content:"A função logarítmica é a função inversa da função exponencial."},{type:"formula",title:"Relação Fundamental",content:"y = ax ⟺ x = loga(y) aloga(x) = x loga(ax) = x"},{type:"info",content:"Graficamente: Os gráficos das funções f(x) = ax e g(x) = loga(x) são simétricos em relação à bissetriz dos quadrantes ímpares (y = x)."},{type:"table",headers:["Função Exponencial","Função Logarítmica"],rows:[["Domínio: ℝ","Domínio: ℝ+"],["Contradomínio: ℝ+","Contradomínio: ℝ"],["Passa em (0, 1)","Passa em (1, 0)"],["AH: y = 0","AV: x = 0"]]}]}],exercises:[{number:1,difficulty:"easy",subtopic:"Definição",question:"Calcule 2⁵.",answer:"2⁵ = 32"},{number:2,difficulty:"easy",subtopic:"Propriedades",question:"Simplifique: 3² × 3⁴.",answer:"3² × 3⁴ = 3^(2+4) = 3⁶ = 729"},{number:3,difficulty:"medium",subtopic:"Equações exponenciais",question:"Resolva a equação 2^x = 32.",answer:"2^x = 2⁵. Logo, x = 5"},{number:4,difficulty:"medium",subtopic:"Equações exponenciais",question:"Resolva a equação 3^(2x-1) = 27.",answer:"3^(2x-1) = 3³. 2x - 1 = 3. 2x = 4. x = 2"},{number:5,difficulty:"hard",subtopic:"Equações exponenciais",question:"Resolva a equação 4^x - 2^(x+1) - 8 = 0.",answer:"4^x = (2²)^x = 2^(2x). Seja y = 2^x. y² - 2y - 8 = 0. (y-4)(y+2) = 0. y = 4 ou y = -2. Como y = 2^x > 0, y = 4. 2^x = 4 = 2². x = 2"},{number:6,difficulty:"easy",subtopic:"Propriedades",question:"Calcule (2³)².",answer:"(2³)² = 2^(3×2) = 2⁶ = 64"},{number:7,difficulty:"medium",subtopic:"Inequações exponenciais",question:"Resolva a inequação 2^x > 16.",answer:"2^x > 2⁴. Como a base 2 > 1, a função é crescente. Logo, x > 4. S = ]4, +∞["},{number:8,difficulty:"hard",subtopic:"Inequações exponenciais",question:"Resolva a inequação (1/2)^x ≥ 4.",answer:"(1/2)^x ≥ 4. 2^(-x) ≥ 2². Como a base 2 > 1: -x ≥ 2. x ≤ -2. S = ]-∞, -2]"},{number:9,difficulty:"medium",subtopic:"Propriedades",question:"Simplifique: (a²b³)² / (a³b).",answer:"(a²b³)² / (a³b) = a⁴b⁶ / (a³b) = a^(4-3) × b^(6-1) = ab⁵"},{number:10,difficulty:"hard",subtopic:"Equações exponenciais",question:"Resolva a equação 3^(x+1) + 3^(x-1) = 30.",answer:"3^x × 3 + 3^x / 3 = 30. 3^x(3 + 1/3) = 30. 3^x × (10/3) = 30. 3^x = 9 = 3². x = 2"},{number:11,difficulty:"easy",subtopic:"Propriedades",question:"Calcule 5⁰.",answer:"5⁰ = 1 (qualquer número elevado a 0 é 1, exceto 0⁰ que é indeterminado)"},{number:12,difficulty:"medium",subtopic:"Definição e domínio",question:"Indique o domínio da função f(x) = 2^x.",answer:"Df = ℝ (o domínio de uma função exponencial é todo o conjunto dos números reais)"},{number:13,difficulty:"medium",subtopic:"Aplicação",question:"Uma população de bactérias duplica a cada hora. Se inicialmente há 100 bactérias, quantas haverá após 5 horas?",answer:"P(t) = P₀ × 2^t. P(5) = 100 × 2⁵ = 100 × 32 = 3200 bactérias"},{number:14,difficulty:"hard",subtopic:"Equações exponenciais",question:"Resolva a equação 5^(2x) - 6×5^x + 5 = 0.",answer:"Seja y = 5^x. y² - 6y + 5 = 0. (y-5)(y-1) = 0. y = 5 ou y = 1. 5^x = 5 ⟹ x = 1. 5^x = 1 ⟹ x = 0. S = {0, 1}"},{number:15,difficulty:"hard",subtopic:"Inequações exponenciais",question:"Resolva a inequação 9^x - 4×3^x + 3 < 0.",answer:"Seja y = 3^x. y² - 4y + 3 < 0. (y-3)(y-1) < 0. 1 < y < 3. 1 < 3^x < 3. 3⁰ < 3^x < 3¹. 0 < x < 1. S = ]0, 1["}]},{id:5,title:"FUNÇÃO LOGARÍTMICA",subtopics:[{title:"Definição de Logaritmo",content:[{type:"definition",title:"Definição",content:"O logaritmo de base a de um número b positivo é o expoente a que se deve elevar a base a para obter b."},{type:"formula",title:"Definição Formal",content:"loga(b) = x ⟺ ax = b onde a > 0, a ≠ 1, b > 0"},{type:"example",title:"Exemplos",content:"log2(8) = 3 porque 2³ = 8 log10(100) = 2 porque 10² = 100 log5(1) = 0 porque 5⁰ = 1"}]},{title:"Propriedades da Função Logarítmica (a > 1)",content:[{type:"definition",title:"Definição",content:"Função da forma f(x) = loga(x), onde a é a base (a > 0, a ≠ 1)"},{type:"table",headers:["Propriedade","Valor/Descrição"],rows:[["Domínio","Df = ℝ+ (reais positivos)"],["Contradomínio","D'f = ℝ"],["Monotonia (a > 1)","Estritamente crescente"],["Monotonia (0 < a < 1)","Estritamente decrescente"],["Zero","x = 1 (pois loga(1) = 0)"],["Assíntota","AV: x = 0 (eixo dos yy)"],["Ponto fixo","(1, 0) - passa sempre por este ponto"],["Injetividade","É injetiva"],["Sobrejetividade","É sobrejetiva"],["Continuidade","Contínua em ℝ+"]]},{type:"info",content:"Se a > 1: x₁ < x₂ ⟺ loga(x₁) < loga(x₂) Se 0 < a < 1: x₁ < x₂ ⟺ loga(x₁) > loga(x₂)"}]},{title:"Propriedades Operatórias dos Logaritmos",content:[{type:"formula",title:"Regras Fundamentais",content:"loga(b × c) = loga(b) + loga(c) loga(b / c) = loga(b) − loga(c) loga(bn) = n × loga(b) loga(ⁿ√b) = loga(b) / n = (1/n) × loga(b) loga(a) = 1 loga(1) = 0 aloga(b) = b"},{type:"example",title:"Exemplo: Simplificação",content:"log2(8) + log2(4) − log2(16) = log2(2³) + log2(2²) − log2(2⁴) = 3 + 2 − 4 = 1"}]},{title:"Mudança de Base",content:[{type:"formula",title:"Fórmula de Mudança de Base",content:"loga(b) = logc(b) / logc(a) Em particular: loga(b) = log(b) / log(a) ou loga(b) = ln(b) / ln(a)"},{type:"formula",title:"Propriedade Adicional",content:"loga(b) × logb(a) = 1 loga(b) = 1 / logb(a)"},{type:"example",title:"Exemplo: Cálculo com mudança de base",content:"Calcular log2(5) usando logaritmos decimais: log2(5) = log(5) / log(2) ≈ 0,699 / 0,301 ≈ 2,32"},{type:"info",content:"Logaritmo decimal: log(x) = log10(x) Logaritmo natural: ln(x) = loge(x), onde e ≈ 2,71828"}]},{title:"Relação entre Função Exponencial e Logarítmica",content:[{type:"definition",title:"Funções Inversas",content:"A função logarítmica f(x) = loga(x) é a função inversa da função exponencial g(x) = ax."},{type:"formula",title:"Relação Fundamental",content:"y = ax ⟺ x = loga(y) aloga(x) = x (x > 0) loga(ax) = x (x ∈ ℝ)"},{type:"table",headers:["Função Exponencial (ax)","Função Logarítmica (loga(x))"],rows:[["Domínio: ℝ","Domínio: ℝ+"],["Contradomínio: ℝ+","Contradomínio: ℝ"],["Passa em (0, 1)","Passa em (1, 0)"],["AH: y = 0","AV: x = 0"],["Crescente se a > 1","Crescente se a > 1"],["Decrescente se 0 < a < 1","Decrescente se 0 < a < 1"]]},{type:"info",content:"Graficamente: Os gráficos de f(x) = ax e g(x) = loga(x) são simétricos em relação à bissetriz dos quadrantes ímpares (reta y = x)."}]}],exercises:[{number:1,difficulty:"easy",subtopic:"Definição",question:"Calcule log₂ 8.",answer:"log₂ 8 = log₂ 2³ = 3"},{number:2,difficulty:"easy",subtopic:"Definição",question:"Calcule log₁₀ 100.",answer:"log₁₀ 100 = log₁₀ 10² = 2"},{number:3,difficulty:"medium",subtopic:"Propriedades dos logaritmos",question:"Sabendo que log 2 = 0,301 e log 3 = 0,477, calcule log 6.",answer:"log 6 = log(2×3) = log 2 + log 3 = 0,301 + 0,477 = 0,778"},{number:4,difficulty:"medium",subtopic:"Equações logarítmicas",question:"Resolva a equação log₂(x) = 5.",answer:"log₂(x) = 5 ⟺ x = 2⁵ = 32. C.E.: x > 0 (verificado). S = {32}"},{number:5,difficulty:"hard",subtopic:"Equações logarítmicas",question:"Resolva a equação log(x+3) + log(x-1) = 1.",answer:"log[(x+3)(x-1)] = 1. (x+3)(x-1) = 10. x² + 2x - 3 = 10. x² + 2x - 13 = 0. x = (-2±√(4+52))/2 = (-2±√56)/2 = (-2±2√14)/2 = -1±√14. C.E.: x > 1. x = -1 + √14 ≈ 2,74. S = {-1+√14}"},{number:6,difficulty:"easy",subtopic:"Propriedades dos logaritmos",question:"Calcule log₅ 1.",answer:"log₅ 1 = 0 (logₐ 1 = 0 para qualquer base a > 0, a ≠ 1)"},{number:7,difficulty:"medium",subtopic:"Propriedades dos logaritmos",question:"Simplifique: log₃ 81 - log₃ 9.",answer:"log₃ 81 - log₃ 9 = log₃(81/9) = log₃ 9 = log₃ 3² = 2"},{number:8,difficulty:"hard",subtopic:"Inequações logarítmicas",question:"Resolva a inequação log₂(x-1) > 3.",answer:"log₂(x-1) > 3 ⟺ x - 1 > 2³ ⟺ x - 1 > 8 ⟺ x > 9. C.E.: x > 1. S = ]9, +∞["},{number:9,difficulty:"medium",subtopic:"Mudança de base",question:"Calcule log₂ 10 sabendo que log₁₀ 2 = 0,301.",answer:"log₂ 10 = 1/log₁₀ 2 = 1/0,301 ≈ 3,32"},{number:10,difficulty:"hard",subtopic:"Equações logarítmicas",question:"Resolva a equação log₂(x) + log₂(x-6) = 4.",answer:"log₂[x(x-6)] = 4. x(x-6) = 2⁴ = 16. x² - 6x - 16 = 0. x = (6±√(36+64))/2 = (6±10)/2. x = 8 ou x = -2. C.E.: x > 6. S = {8}"},{number:11,difficulty:"easy",subtopic:"Propriedades",question:"Calcule log₇ 7.",answer:"log₇ 7 = 1 (logₐ a = 1 para qualquer base a > 0, a ≠ 1)"},{number:12,difficulty:"medium",subtopic:"Propriedades dos logaritmos",question:"Sabendo que log 2 = 0,301, calcule log 8.",answer:"log 8 = log 2³ = 3 × log 2 = 3 × 0,301 = 0,903"},{number:13,difficulty:"hard",subtopic:"Inequações logarítmicas",question:"Resolva a inequação log₁/₂(x+1) ≥ -2.",answer:"Base 0 < 1/2 < 1, função decrescente. log₁/₂(x+1) ≥ -2 ⟺ x+1 ≤ (1/2)^(-2) = 4. x ≤ 3. C.E.: x > -1. S = ]-1, 3]"},{number:14,difficulty:"medium",subtopic:"Aplicação",question:"O pH de uma solução é dado por pH = -log[H⁺]. Se [H⁺] = 10^(-5), qual é o pH?",answer:"pH = -log(10^(-5)) = -(-5) = 5"},{number:15,difficulty:"hard",subtopic:"Equações logarítmicas",question:"Resolva a equação log(x²-1) - log(x+1) = log 3.",answer:"log[(x²-1)/(x+1)] = log 3. (x²-1)/(x+1) = 3. (x-1)(x+1)/(x+1) = 3. x - 1 = 3. x = 4. C.E.: x²-1 > 0 e x+1 > 0, logo x > 1. S = {4}"}]},{id:6,title:"TEOREMAS IMPORTANTES",subtopics:[{title:"Teorema de Bolzano-Cauchy",content:[{type:"definition",title:"Enunciado do Teorema",content:"Seja f uma função contínua num intervalo fechado [a, b]. Se f(a) e f(b) têm sinais contrários (f(a) × f(b) < 0), então existe pelo menos um ponto c ∈ ]a, b[ tal que f(c)=0."},{type:"formula",title:"Condições",content:"1. f é contínua em [a, b] 2. f(a) × f(b) < 0 (ou seja, f(a) e f(b) têm sinais contrários) Conclusão: ∃ c ∈ ]a, b[ : f(c) = 0"},{type:"important_note",title:"Interpretação",content:"",items:["O teorema garante a existência de pelo menos um zero da função no intervalo","Não indica quantos zeros existem, apenas que existe pelo menos um","Não fornece o valor exato de c, apenas garante a sua existência","A continuidade é essencial para a validade do teorema"]}]},{title:"Corolário do Teorema de Bolzano-Cauchy",content:[{type:"definition",title:"Enunciado do Corolário",content:"Seja f uma função contínua num intervalo fechado [a, b] e seja k um número real. Se k está compreendido entre f(a) e f(b), então existe pelo menos um ponto c ∈ ]a, b[ tal que f(c) = k."},{type:"formula",title:"Condições",content:"1. f é contínua em [a, b] 2. k ∈ ]f(a), f(b)[ ou k ∈ ]f(b), f(a)[ Conclusão: ∃ c ∈ ]a, b[ : f(c) = k"}]},{title:"Teorema de Weierstrass",content:[{type:"definition",title:"Enunciado do Teorema",content:"Se f é uma função contínua num intervalo fechado e limitado [a, b], então f é limitada em [a, b] e atinge o máximo e o mínimo nesse intervalo."},{type:"formula",title:"Condições e Conclusões",content:"Condição: f contínua em [a, b] (intervalo fechado e limitado) Conclusões: 1. f é limitada: ∃ M > 0 : |f(x)| ≤ M, ∀x ∈ [a, b] 2. ∃ xmax ∈ [a, b] : f(xmax) ≥ f(x), ∀x ∈ [a, b] (máximo absoluto) 3. ∃ xmin ∈ [a, b] : f(xmin) ≤ f(x), ∀x ∈ [a, b] (mínimo absoluto)"}]},{title:"Teorema de Lagrange (Teorema do Valor Médio)",content:[{type:"definition",title:"Enunciado do Teorema",content:"Seja f uma função contínua em [a, b] e diferenciável em ]a, b[. Então existe pelo menos um ponto c ∈ ]a, b[ tal que:"},{type:"formula",title:"Fórmula de Lagrange",content:"f'(c) = [f(b) − f(a)] / (b − a) ou equivalentemente: f(b) − f(a) = f'(c) × (b − a)"},{type:"info",content:"Interpretação geométrica: Existe pelo menos um ponto c no intervalo ]a, b[ onde a tangente ao gráfico é paralela à reta que une os pontos (a, f(a)) e (b, f(b))."}]}],exercises:[{number:1,difficulty:"easy",subtopic:"Teorema de Bolzano",question:"Mostre que a equação x³ - x - 1 = 0 tem pelo menos uma solução no intervalo [1, 2].",answer:"f(x) = x³ - x - 1 é contínua em [1,2]. f(1) = 1 - 1 - 1 = -1 < 0. f(2) = 8 - 2 - 1 = 5 > 0. Como f(1)×f(2) < 0, pelo Teorema de Bolzano, existe c ∈ ]1,2[ tal que f(c) = 0."},{number:2,difficulty:"medium",subtopic:"Teorema de Bolzano",question:"Prove que a função f(x) = cos(x) - x tem pelo menos um zero no intervalo [0, π/2].",answer:"f é contínua em [0, π/2]. f(0) = cos(0) - 0 = 1 > 0. f(π/2) = cos(π/2) - π/2 = 0 - π/2 < 0. Como f(0)×f(π/2) < 0, pelo Teorema de Bolzano, ∃c ∈ ]0, π/2[ : f(c) = 0."},{number:3,difficulty:"medium",subtopic:"Teorema do valor intermédio",question:"Seja f contínua em [0,3] com f(0) = 5 e f(3) = 20. Prove que existe c ∈ [0,3] tal que f(c) = 12.",answer:"Como f é contínua em [0,3] e 5 = f(0) < 12 < f(3) = 20, pelo Teorema do Valor Intermédio (TVI), existe c ∈ ]0,3[ tal que f(c) = 12."},{number:4,difficulty:"easy",subtopic:"Teorema de Weierstrass",question:"Explique por que a função f(x) = x² tem máximo e mínimo no intervalo [-1, 2].",answer:"f(x) = x² é contínua em [-1, 2] (intervalo fechado e limitado). Pelo Teorema de Weierstrass, f atinge máximo e mínimo absolutos neste intervalo. Mínimo: f(0) = 0. Máximo: f(2) = 4 ou f(-1) = 1, logo máximo é 4."},{number:5,difficulty:"hard",subtopic:"Teorema de Bolzano",question:"Mostre que a equação e^x = 3 - x tem solução em ℝ.",answer:"Seja f(x) = e^x + x - 3. f é contínua em ℝ. f(0) = 1 + 0 - 3 = -2 < 0. f(2) = e² + 2 - 3 ≈ 7,39 + 2 - 3 = 6,39 > 0. Pelo Teorema de Bolzano, ∃c ∈ ]0,2[ : f(c) = 0, ou seja, e^c = 3 - c."},{number:6,difficulty:"medium",subtopic:"Teorema do valor intermédio",question:"Uma temperatura variou continuamente de 15°C às 8h para 25°C às 14h. Prove que houve um momento em que a temperatura foi exatamente 20°C.",answer:"Seja T(t) a temperatura no instante t. T é contínua em [8,14]. T(8) = 15 < 20 < 25 = T(14). Pelo TVI, existe t₀ ∈ ]8,14[ tal que T(t₀) = 20."},{number:7,difficulty:"hard",subtopic:"Teorema de Weierstrass",question:"A função f(x) = 1/x tem máximo no intervalo ]0,1]? Justifique usando o Teorema de Weierstrass.",answer:"Não. O Teorema de Weierstrass requer que o intervalo seja fechado e limitado. ]0,1] não é fechado (está aberto em 0). Como lim(x→0⁺) 1/x = +∞, a função não tem máximo em ]0,1]."},{number:8,difficulty:"medium",subtopic:"Teorema de Bolzano",question:"Mostre que x³ = 2x + 5 tem pelo menos uma solução real.",answer:"Seja f(x) = x³ - 2x - 5. f é contínua em ℝ. f(2) = 8 - 4 - 5 = -1 < 0. f(3) = 27 - 6 - 5 = 16 > 0. Pelo Teorema de Bolzano, ∃c ∈ ]2,3[ : f(c) = 0."},{number:9,difficulty:"easy",subtopic:"Teorema do valor intermédio - Aplicação",question:"Seja f:[0,5]→ℝ contínua com f(0)=10 e f(5)=30. É possível que f(x)=25 para algum x∈[0,5]?",answer:"Sim. Como f é contínua em [0,5] e 10 < 25 < 30, pelo TVI existe x ∈ ]0,5[ tal que f(x) = 25."},{number:10,difficulty:"hard",subtopic:"Teoremas combinados",question:"Seja f contínua em [0,2] com f(0)=1, f(1)=-2, f(2)=3. Quantos zeros tem f em [0,2]?",answer:"Pelo menos 2. Em [0,1]: f(0)=1>0, f(1)=-2<0, logo ∃c₁∈]0,1[:f(c₁)=0. Em [1,2]: f(1)=-2<0, f(2)=3>0, logo ∃c₂∈]1,2[:f(c₂)=0. Conclusão: pelo menos 2 zeros."},{number:11,difficulty:"medium",subtopic:"Teorema de Weierstrass",question:"Determine o máximo e mínimo de f(x) = x³ - 3x em [-2, 2].",answer:"f é contínua em [-2,2]. Pelo Teorema de Weierstrass, tem máximo e mínimo. f'(x) = 3x² - 3 = 0 ⟹ x = ±1. f(-2)=-2, f(-1)=2, f(1)=-2, f(2)=2. Máximo: 2 (em x=-1 e x=2). Mínimo: -2 (em x=-2 e x=1)."},{number:12,difficulty:"easy",subtopic:"Teorema de Bolzano - Conceito",question:"O que garante o Teorema de Bolzano sobre uma função contínua em [a,b] com f(a)×f(b)<0?",answer:"O Teorema de Bolzano garante que existe pelo menos um ponto c ∈ ]a,b[ tal que f(c) = 0, ou seja, a função tem pelo menos um zero no intervalo."},{number:13,difficulty:"hard",subtopic:"Teorema de Bolzano",question:"Prove que a equação tan(x) = x tem infinitas soluções.",answer:"Seja f(x) = tan(x) - x. Para cada n∈ℕ, considere o intervalo Iₙ = ]nπ, nπ+π/2[. Em cada intervalo, tan(x) varia de -∞ a +∞, enquanto x permanece limitado. Logo, existem aₙ e bₙ em Iₙ com f(aₙ)<0 e f(bₙ)>0. Pelo Teorema de Bolzano, f tem um zero em cada Iₙ, logo infinitas soluções."},{number:14,difficulty:"medium",subtopic:"Teorema do valor intermédio",question:"Uma função contínua f:[0,1]→[0,1] tem f(0)=0,2 e f(1)=0,8. Prove que existe x∈[0,1] tal que f(x)=x.",answer:"Seja g(x) = f(x) - x. g é contínua em [0,1]. g(0) = f(0) - 0 = 0,2 > 0. g(1) = f(1) - 1 = 0,8 - 1 = -0,2 < 0. Pelo Teorema de Bolzano (caso particular do TVI), ∃x∈]0,1[: g(x)=0, ou seja, f(x)=x."},{number:15,difficulty:"hard",subtopic:"Teorema de Weierstrass - Contraexemplo",question:"Por que f(x) = x não tem máximo em ]0,1[? Relacione com o Teorema de Weierstrass.",answer:"O Teorema de Weierstrass aplica-se a intervalos fechados e limitados. ]0,1[ é aberto, logo o teorema não se aplica. De facto, sup{x : x∈]0,1[} = 1, mas 1 ∉ ]0,1[, logo f não atinge o seu supremo. Não tem máximo."}]},{id:7,title:"LIMITES E INDETERMINAÇÕES NUMÉRICAS",subtopics:[{title:"Tipos de Indeterminações",content:[{type:"table",headers:["Tipo","Notação"],rows:[["Infinito sobre infinito","∞/∞"],["Zero sobre zero","0/0"],["Infinito menos infinito","∞ − ∞"],["Zero vezes infinito","0 × ∞"],["Um elevado a infinito","1∞"],["Zero elevado a zero","00"],["Infinito elevado a zero","∞0"]]}]},{title:"Funções Polinomiais - Regras Práticas",content:[{type:"formula",title:"Regra Geral",content:"O limite de um polinómio quando x → ±∞ é igual ao limite do termo de maior grau. Se P(x) = anxn + ... então lim P(x) = lim anxn"}]},{title:"Funções Racionais - Regras Práticas",content:[{type:"formula",title:"Limites quando x → ±∞",content:"Para f(x) = (anxn + ...) / (bmxm + ...): • Se n > m: lim f(x) = ±∞ • Se n = m: lim f(x) = an / bm • Se n < m: lim f(x)=0"}]},{title:"Funções Exponenciais e Logarítmicas - Limites Notáveis",content:[{type:"formula",title:"Limites Fundamentais",content:"lim (1 + 1/x)x = e x→±∞ lim (1 + k/x)x = ek x→±∞ lim ex = +∞ ; lim ex = 0 x→+∞ x→−∞"}]},{title:"Funções Trigonométricas - Limites Notáveis",content:[{type:"formula",title:"Limites Fundamentais",content:"lim [sen(x) / x] = 1 (MAIS IMPORTANTE!) x→0 lim [tan(x) / x] = 1 x→0 lim [(1 − cos(x)) / x²] = 1/2 x→0"}]}],exercises:[{number:1,difficulty:"easy",subtopic:"Limites finitos",question:"Calcule lim(x→2) (x² + 3x - 1).",answer:"Por substituição direta: lim(x→2) (x² + 3x - 1) = 4 + 6 - 1 = 9"},{number:2,difficulty:"easy",subtopic:"Limites infinitos",question:"Calcule lim(x→+∞) (2x³ + x).",answer:"Termo dominante: 2x³. lim(x→+∞) 2x³ = +∞"},{number:3,difficulty:"medium",subtopic:"Indeterminações 0/0",question:"Calcule lim(x→1) (x² - 1)/(x - 1).",answer:"Indeterminação 0/0. Simplificando: (x² - 1)/(x - 1) = (x-1)(x+1)/(x-1) = x + 1 (x≠1). lim(x→1) (x + 1) = 2"},{number:4,difficulty:"medium",subtopic:"Indeterminações ∞/∞",question:"Calcule lim(x→+∞) (3x² + 2x - 1)/(x² - 5).",answer:"Dividindo por x²: lim(x→+∞) (3 + 2/x - 1/x²)/(1 - 5/x²) = 3/1 = 3"},{number:5,difficulty:"hard",subtopic:"Limites notáveis",question:"Calcule lim(x→0) (sin x)/x.",answer:"Limite notável: lim(x→0) (sin x)/x = 1"},{number:6,difficulty:"medium",subtopic:"Operações com limites",question:"Sabendo que lim(x→2) f(x) = 5 e lim(x→2) g(x) = -3, calcule lim(x→2) [2f(x) - g(x)].",answer:"lim(x→2) [2f(x) - g(x)] = 2×lim f(x) - lim g(x) = 2×5 - (-3) = 10 + 3 = 13"},{number:7,difficulty:"hard",subtopic:"Indeterminações",question:"Calcule lim(x→+∞) (√(x² + x) - x).",answer:"Multiplicando por (√(x²+x)+x)/(√(x²+x)+x): lim (x²+x-x²)/(√(x²+x)+x) = lim x/(√(x²+x)+x). Dividindo por x: lim 1/(√(1+1/x)+1) = 1/(1+1) = 1/2"},{number:8,difficulty:"easy",subtopic:"Limites laterais",question:"Calcule lim(x→3⁺) (x + 1).",answer:"lim(x→3⁺) (x + 1) = 3 + 1 = 4"},{number:9,difficulty:"medium",subtopic:"Limites infinitos",question:"Calcule lim(x→0⁺) 1/x.",answer:"Quando x→0⁺, x é positivo e aproxima-se de 0. lim(x→0⁺) 1/x = +∞"},{number:10,difficulty:"hard",subtopic:"Limites notáveis",question:"Calcule lim(x→0) (1 - cos x)/x².",answer:"Limite notável: lim(x→0) (1 - cos x)/x² = 1/2"},{number:11,difficulty:"medium",subtopic:"Indeterminações 0/0",question:"Calcule lim(x→3) (x² - 9)/(x² - 2x - 3).",answer:"Simplificando: (x² - 9)/(x² - 2x - 3) = (x-3)(x+3)/[(x-3)(x+1)] = (x+3)/(x+1) (x≠3). lim(x→3) (x+3)/(x+1) = 6/4 = 3/2"},{number:12,difficulty:"hard",subtopic:"Limites notáveis - e",question:"Calcule lim(x→+∞) (1 + 1/x)^x.",answer:"Limite notável: lim(x→+∞) (1 + 1/x)^x = e ≈ 2,71828"},{number:13,difficulty:"medium",subtopic:"Limites laterais",question:"Calcule lim(x→2⁻) (x - 2)/|x - 2|.",answer:"Para x < 2, x - 2 < 0, logo |x - 2| = -(x - 2). (x - 2)/|x - 2| = (x - 2)/(-(x - 2)) = -1. lim(x→2⁻) = -1"},{number:14,difficulty:"hard",subtopic:"Indeterminações ∞ - ∞",question:"Calcule lim(x→+∞) (√(x² + 4x) - x).",answer:"Multiplicando por (√(x²+4x)+x)/(√(x²+4x)+x): lim (x²+4x-x²)/(√(x²+4x)+x) = lim 4x/(√(x²+4x)+x). Dividindo por x: lim 4/(√(1+4/x)+1) = 4/2 = 2"},{number:15,difficulty:"hard",subtopic:"Limites notáveis",question:"Calcule lim(x→0) (e^x - 1)/x.",answer:"Limite notável: lim(x→0) (e^x - 1)/x = 1"}]},{id:8,title:"ASSÍNTOTAS",subtopics:[{title:"Assíntotas Verticais (AV)",content:[{type:"definition",title:"Definição",content:"A reta x = a é assíntota vertical se pelo menos um dos limites for infinito:"},{type:"formula",title:"Condições para AV: x = a",content:"lim f(x) = ±∞ ou lim f(x) = ±∞ x→a− x→a+"},{type:"important_note",title:"Como Encontrar",content:"",items:["Identificar pontos fora do domínio","Calcular limites laterais nesses pontos","Se algum limite for ±∞, existe AV"]}]},{title:"Assíntotas Horizontais (AH)",content:[{type:"definition",title:"Definição",content:"A reta y = b é assíntota horizontal se:"},{type:"formula",title:"Condições para AH: y = b",content:"lim f(x) = b ou lim f(x) = b x→+∞ x→−∞ onde b ∈ ℝ"}]},{title:"Assíntotas Não Verticais / Oblíquas (ANV)",content:[{type:"definition",title:"Definição",content:"A reta y = mx + b (com m ≠ 0) é assíntota não vertical se:"},{type:"formula",title:"Cálculo de m e b",content:"m = lim [f(x) / x] x→±∞ b = lim [f(x) − mx] x→±∞ ANV: y = mx + b"},{type:"important_note",title:"Passos",content:"",items:["1. Calcular m = lim [f(x)/x]","2. Se m ∈ ℝ e m ≠ 0, calcular b = lim [f(x) − mx]","3. Se b ∈ ℝ, então y = mx + b é ANV"]}]}],exercises:[{number:1,difficulty:"easy",subtopic:"Assíntotas verticais",question:"Determine as assíntotas verticais de f(x) = 1/(x - 3).",answer:"Df = ℝ\\{3}. lim(x→3) 1/(x-3) = ±∞. Assíntota vertical: x = 3"},{number:2,difficulty:"easy",subtopic:"Assíntotas horizontais",question:"Determine as assíntotas horizontais de f(x) = (2x + 1)/(x - 3).",answer:"lim(x→±∞) (2x + 1)/(x - 3) = lim(x→±∞) (2 + 1/x)/(1 - 3/x) = 2/1 = 2. Assíntota horizontal: y = 2"},{number:3,difficulty:"medium",subtopic:"Assíntotas oblíquas",question:"Determine as assíntotas de f(x) = (x² + 1)/x.",answer:"A.V.: x = 0 (lim(x→0) (x²+1)/x = ±∞). A.H.: não há (grau numerador > denominador). A.O.: y = mx + b. m = lim(x→±∞) f(x)/x = lim(x→±∞) (x²+1)/x² = 1. b = lim(x→±∞) [f(x) - x] = lim(x→±∞) 1/x = 0. Assíntota oblíqua: y = x"},{number:4,difficulty:"medium",subtopic:"Assíntotas verticais",question:"Determine as assíntotas verticais de f(x) = (x + 1)/(x² - 4).",answer:"x² - 4 = 0 ⟹ x = ±2. lim(x→2) (x+1)/(x²-4) = ±∞. lim(x→-2) (x+1)/(x²-4) = ±∞. Assíntotas verticais: x = 2 e x = -2"},{number:5,difficulty:"hard",subtopic:"Assíntotas oblíquas",question:"Determine a assíntota oblíqua de f(x) = (2x² - x + 3)/(x + 1).",answer:"m = lim(x→±∞) f(x)/x = lim(x→±∞) (2x² - x + 3)/(x² + x) = 2. b = lim(x→±∞) [f(x) - 2x] = lim(x→±∞) [(2x²-x+3)/(x+1) - 2x] = lim(x→±∞) (2x²-x+3-2x²-2x)/(x+1) = lim(x→±∞) (-3x+3)/(x+1) = -3. Assíntota oblíqua: y = 2x - 3"},{number:6,difficulty:"easy",subtopic:"Assíntotas horizontais",question:"Determine a assíntota horizontal de f(x) = 3/x.",answer:"lim(x→±∞) 3/x = 0. Assíntota horizontal: y = 0"},{number:7,difficulty:"medium",subtopic:"Assíntotas verticais e horizontais",question:"Determine todas as assíntotas de f(x) = (x - 1)/(x² - x - 2).",answer:"x² - x - 2 = (x-2)(x+1) = 0 ⟹ x = 2 ou x = -1. Simplificando: f(x) = (x-1)/[(x-2)(x+1)]. A.V.: x = 2 e x = -1. lim(x→±∞) (x-1)/(x²-x-2) = 0. A.H.: y = 0"},{number:8,difficulty:"hard",subtopic:"Assíntotas oblíquas",question:"Prove que f(x) = (x³ + 1)/x² não tem assíntota oblíqua.",answer:"m = lim(x→±∞) f(x)/x = lim(x→±∞) (x³+1)/x³ = 1. b = lim(x→±∞) [f(x) - x] = lim(x→±∞) [(x³+1)/x² - x] = lim(x→±∞) (x³+1-x³)/x² = lim(x→±∞) 1/x² = 0. Logo, y = x é assíntota oblíqua. (A afirmação do problema está incorreta - há assíntota oblíqua)"},{number:9,difficulty:"medium",subtopic:"Comportamento assintótico",question:"Estude o comportamento de f(x) = 1/(x-2) quando x→2⁺ e x→2⁻.",answer:"x→2⁺: x - 2 > 0 e x - 2 → 0⁺, logo 1/(x-2) → +∞. x→2⁻: x - 2 < 0 e x - 2 → 0⁻, logo 1/(x-2) → -∞"},{number:10,difficulty:"hard",subtopic:"Assíntotas - Caso especial",question:"Mostre que f(x) = √(x² + x) - x não tem assíntota horizontal mas tem assíntota oblíqua quando x→+∞.",answer:"lim(x→+∞) [√(x²+x) - x] = lim(x→+∞) x/(√(x²+x)+x) = 1/2 (calculado anteriormente). Como o limite é finito (1/2), temos A.H.: y = 1/2 quando x→+∞. (Nota: a função comporta-se diferentemente em -∞)"},{number:11,difficulty:"easy",subtopic:"Identificação",question:"A reta x = 5 é assíntota de que tipo?",answer:"Assíntota vertical (retas verticais são sempre assíntotas verticais)"},{number:12,difficulty:"medium",subtopic:"Assíntotas horizontais",question:"Determine lim(x→+∞) f(x) e lim(x→-∞) f(x) para f(x) = (x² + 3x)/(x² - 1).",answer:"lim(x→±∞) (x²+3x)/(x²-1) = lim(x→±∞) (1 + 3/x)/(1 - 1/x²) = 1/1 = 1. Ambos os limites são 1. Assíntota horizontal: y = 1"},{number:13,difficulty:"hard",subtopic:"Sem assíntotas oblíquas",question:"Explique por que f(x) = x³ não tem assíntotas oblíquas.",answer:"Para A.O.: m = lim(x→±∞) f(x)/x = lim(x→±∞) x³/x = lim(x→±∞) x² = ±∞. Como m não é finito, não existem assíntotas oblíquas."},{number:14,difficulty:"medium",subtopic:"Assíntotas verticais - Simplificação",question:"A função f(x) = (x² - 4)/(x - 2) tem assíntota vertical em x = 2?",answer:"Simplificando: f(x) = (x-2)(x+2)/(x-2) = x + 2 (x ≠ 2). lim(x→2) (x+2) = 4 (finito). Não há assíntota vertical em x = 2, apenas uma descontinuidade removível."},{number:15,difficulty:"hard",subtopic:"Assíntotas oblíquas - Aplicação",question:"Determine todas as assíntotas de f(x) = (x³ - 2x² + x)/(x² - 1).",answer:"A.V.: x² - 1 = 0 ⟹ x = ±1 (verificar se não simplifica). Não simplifica. A.V.: x = 1 e x = -1. Para A.O.: divisão polinomial: (x³-2x²+x)/(x²-1) = x - 2 + (2x-2)/(x²-1). lim(x→±∞) (2x-2)/(x²-1) = 0. Assíntota oblíqua: y = x - 2"}]},{id:9,title:"CONTINUIDADE DE UMA FUNÇÃO",subtopics:[{title:"Continuidade de uma Função num Ponto",content:[{type:"definition",title:"Definição",content:"Uma função f diz-se contínua no ponto a se e somente se: f(a) existe (a pertence ao domínio de f) Existe limx→a f(x) limx→a f(x) = f(a) Estas três condições têm de se verificar simultaneamente."},{type:"formula",title:"Condição de Continuidade",content:"limx→a f(x) = f(a)"},{type:"example",title:"Exemplo 1",content:"Estude a continuidade da função: f(x) = { 2x + 1, se x ≤ 2 { x² - 1, se x > 2 no ponto x = 2 Resolução: f(2) existe? Sim, f(2) = 2(2) + 1 = 5 Existe limx→2 f(x)? limx→2- f(x) = limx→2- (2x + 1) = 5 limx→2+ f(x) = limx→2+ (x² - 1) = 3 Como 5 ≠ 3, não existe limx→2 f(x) Conclusão: A função não é contínua em x = 2 (descontinuidade de salto)."}]},{title:"Continuidade Lateral",content:[{type:"definition",title:"Continuidade à Direita",content:"Uma função f é contínua à direita de a se: limx→a+ f(x) = f(a)"},{type:"definition",title:"Continuidade à Esquerda",content:"Uma função f é contínua à esquerda de a se: limx→a- f(x) = f(a)"},{type:"important_note",title:"Nota Importante",content:"Uma função é contínua num ponto a se e somente se é contínua à esquerda e à direita nesse ponto. f contínua em a ⟺ f contínua à esquerda de a ∧ f contínua à direita de a"}]},{title:"Nota Importante - Definição de Limite segundo HEINE",content:[{type:"definition",title:"Definição de Heine",content:"Seja f uma função e a um ponto aderente ao domínio de f. Diz-se que: limx→a f(x) = L se e somente se: Para toda a sucessão (xn) de termos do domínio de f, diferentes de a, que converge para a, a sucessão (f(xn)) converge para L."},{type:"info",content:"Em linguagem matemática: ∀(xn) ⊂ Df \\ {a} : lim xn = a ⟹ lim f(xn) = L"},{type:"important_note",title:"Aplicação",content:"Esta definição é particularmente útil para provar que um limite não existe:",items:["Se encontrarmos duas sucessões (xn) e (yn) que convergem para a","Mas f(xn) e f(yn) convergem para valores diferentes","Então não existe limx→a f(x)"]}]},{title:"Continuidade de uma Função num Intervalo",content:[{type:"definition",title:"Função Contínua num Intervalo",content:"Uma função f diz-se contínua num intervalo I se for contínua em todos os pontos desse intervalo. Se I = ]a, b[: f é contínua em todos os pontos de ]a, b[ Se I = [a, b]: f é contínua em todos os pontos de ]a, b[, contínua à direita de a e contínua à esquerda de b Se I = [a, b[: f é contínua em todos os pontos de ]a, b[ e contínua à direita de a Se I = ]a, b]: f é contínua em todos os pontos de ]a, b[ e contínua à esquerda de b"},{type:"important_note",title:"Funções Contínuas",content:"São contínuas em todo o seu domínio:",items:["Funções polinomiais","Funções racionais (exceto nos pontos onde o denominador se anula)","Funções exponenciais e logarítmicas","Funções trigonométricas (no seu domínio)","Função raiz (no seu domínio)"]},{type:"formula",title:"Teorema de Bolzano-Cauchy (Teorema dos Valores Intermédios)",content:"Se f é contínua em [a, b] e f(a) · f(b) < 0 (sinais contrários), então: ∃c ∈ ]a, b[ : f(c) = 0 Interpretação: A função tem pelo menos um zero no intervalo ]a, b[."},{type:"formula",title:"Teorema de Weierstrass",content:"Se f é contínua em [a, b], então: f tem máximo absoluto em [a, b] f tem mínimo absoluto em [a, b] Ou seja, existem c, d ∈ [a, b] tais que: f(c) ≤ f(x) ≤ f(d), ∀x ∈ [a, b]"},{type:"example",title:"Exemplo 2",content:"Mostre que a equação x³ - 2x + 1 = 0 tem pelo menos uma solução em [0, 1]. Resolução: Considere f(x) = x³ - 2x + 1 f é uma função polinomial, logo é contínua em [0, 1] f(0) = 0³ - 2(0) + 1 = 1 > 0 f(1) = 1³ - 2(1) + 1 = 0 Como f(1) = 0, então x = 1 é solução da equação. (Alternativamente, se f(1) fosse negativo, aplicaríamos o Teorema de Bolzano-Cauchy)"}]}]},{id:10,title:"DERIVADAS",subtopics:[{title:"Derivada de uma Função num Ponto",content:[{type:"definition",title:"Definição de Derivada",content:"Seja f uma função e a um ponto interior ao domínio de f. A derivada de f no ponto a, quando existe, é dada por: f'(a) = limh→0 [f(a + h) - f(a)] / h ou equivalentemente: f'(a) = limx→a [f(x) - f(a)] / (x - a)"},{type:"info",content:"Interpretação Geométrica: A derivada f'(a) representa o declive da reta tangente ao gráfico de f no ponto (a, f(a))."},{type:"info",content:"Interpretação Física: Se s(t) representa a posição de um móvel no instante t, então s'(t) = v(t) é a velocidade no instante t."},{type:"formula",title:"Equação da Reta Tangente",content:"A equação da reta tangente ao gráfico de f no ponto (a, f(a)) é: y - f(a) = f'(a)(x - a) ou seja: y = f'(a)x + [f(a) - af'(a)]"},{type:"example",title:"Exemplo 1",content:"Calcule, usando a definição, a derivada de f(x) = x² no ponto x = 3. Resolução: f'(3) = limh→0 [f(3 + h) - f(3)] / h = limh→0 [(3 + h)² - 9] / h = limh→0 [9 + 6h + h² - 9] / h = limh→0 [6h + h²] / h = limh→0 (6 + h) = 6 Resposta: f'(3) = 6"},{type:"important_note",title:"Diferenciabilidade e Continuidade",content:"Se f é diferenciável em a, então f é contínua em a. ⚠️ ATENÇÃO: O recíproco não é verdadeiro! Uma função pode ser contínua num ponto mas não diferenciável nesse ponto. Exemplo: f(x) = |x| é contínua em x = 0 mas não é diferenciável em x = 0."}]},{title:"Regras de Derivação",content:[{type:"formula",title:"Derivadas de Funções Elementares",content:"Função Derivada f(x) = k (constante) f'(x) = 0 f(x) = xn f'(x) = nxn-1 f(x) = √x f'(x) = 1/(2√x) f(x) = 1/x f'(x) = -1/x² f(x) = ex f'(x) = ex f(x) = ax f'(x) = ax · ln(a) f(x) = ln(x) f'(x) = 1/x f(x) = loga(x) f'(x) = 1/(x · ln(a)) f(x) = sen(x) f'(x) = cos(x) f(x) = cos(x) f'(x) = -sen(x) f(x) = tg(x) f'(x) = 1/cos²(x) = sec²(x)"},{type:"formula",title:"Operações com Derivadas",content:"Regra Fórmula Multiplicação por constante [k · f(x)]' = k · f'(x) Soma/Diferença [f(x) ± g(x)]' = f'(x) ± g'(x) Produto [f(x) · g(x)]' = f'(x) · g(x) + f(x) · g'(x) Quociente [f(x) / g(x)]' = [f'(x) · g(x) - f(x) · g'(x)] / [g(x)]² Composta (Regra da Cadeia) [f(g(x))]' = f'(g(x)) · g'(x) Função Inversa [f-1]'(x) = 1 / f'(f-1(x))"},{type:"example",title:"Exemplo 2 - Derivada do Produto",content:"Calcule a derivada de f(x) = x² · ex Resolução: Usando a regra do produto: [u · v]' = u' · v + u · v' u(x) = x² ⟹ u'(x) = 2x v(x) = ex ⟹ v'(x) = ex f'(x) = 2x · ex + x² · ex = ex(2x + x²)"},{type:"example",title:"Exemplo 3 - Derivada da Função Composta",content:"Calcule a derivada de f(x) = ex² Resolução: Usando a regra da cadeia: [f(g(x))]' = f'(g(x)) · g'(x) f(u) = eu ⟹ f'(u) = eu g(x) = x² ⟹ g'(x) = 2x u = g(x) = x² f'(x) = ex² · 2x = 2x · ex²"},{type:"example",title:"Exemplo 4 - Derivada do Quociente",content:"Calcule a derivada de f(x) = (2x + 1) / (x² - 3) Resolução: Usando a regra do quociente: [u/v]' = [u' · v - u · v'] / v² u(x) = 2x + 1 ⟹ u'(x) = 2 v(x) = x² - 3 ⟹ v'(x) = 2x f'(x) = [2(x² - 3) - (2x + 1)(2x)] / (x² - 3)² = [2x² - 6 - 4x² - 2x] / (x² - 3)² = (-2x² - 2x - 6) / (x² - 3)²"}]},{title:"Importante - Aplicações das Derivadas",content:[{type:"important_note",title:"Monotonia e Derivada",content:"Seja f uma função diferenciável em ]a, b[:",items:["f'(x) > 0, ∀x ∈ ]a, b[ ⟹ f é estritamente crescente em ]a, b[","f'(x) < 0, ∀x ∈ ]a, b[ ⟹ f é estritamente decrescente em ]a, b[","f'(x) = 0, ∀x ∈ ]a, b[ ⟹ f é constante em ]a, b["]},{type:"formula",title:"Extremos Relativos (Máximos e Mínimos)",content:"Condição Necessária: Se f tem um extremo relativo em x = a, então f'(a) = 0 ou f'(a) não existe. Condição Suficiente (Teste da Derivada Primeira): Se f'(x) muda de sinal positivo para negativo em a, então f tem um máximo relativo em a Se f'(x) muda de sinal negativo para positivo em a, então f tem um mínimo relativo em a Se f'(x) não muda de sinal em a, então a não é extremo"},{type:"formula",title:"Segunda Derivada e Concavidade",content:"Seja f uma função duas vezes diferenciável em ]a, b[: f''(x) > 0, ∀x ∈ ]a, b[ ⟹ f tem concavidade voltada para cima (côncava) f''(x) < 0, ∀x ∈ ]a, b[ ⟹ f tem concavidade voltada para baixo (convexa)"},{type:"definition",title:"Ponto de Inflexão",content:"Um ponto a é um ponto de inflexão de f se a concavidade de f muda em a. Condição Necessária: f''(a) = 0 ou f''(a) não existe Condição Suficiente: f''(x) muda de sinal em a"},{type:"formula",title:"Teste da Derivada Segunda para Extremos",content:"Se f'(a) = 0 e f''(a) existe: f''(a) > 0 ⟹ f tem um mínimo relativo em a f''(a) < 0 ⟹ f tem um máximo relativo em a f''(a) = 0 ⟹ teste inconclusivo (pode ser extremo ou ponto de inflexão)"},{type:"info",content:"Velocidade e Aceleração: Se s(t) representa a posição de um móvel no instante t: Velocidade: v(t) = s'(t) Aceleração: a(t) = v'(t) = s''(t) Interpretação: v(t) > 0: o móvel desloca-se no sentido positivo v(t) < 0: o móvel desloca-se no sentido negativo v(t) = 0: o móvel está parado (momentaneamente) a(t) > 0: a velocidade está a aumentar a(t) < 0: a velocidade está a diminuir"},{type:"example",title:"Exemplo 5 - Estudo Completo de Função",content:"Estude a monotonia e os extremos de f(x) = x³ - 3x + 1 Resolução: 1. Derivada: f'(x) = 3x² - 3 = 3(x² - 1) = 3(x - 1)(x + 1) 2. Pontos Críticos: f'(x) = 0 ⟺ x = -1 ∨ x = 1 3. Sinal de f'(x): x ]-∞, -1[ -1 ]-1, 1[ 1 ]1, +∞[ f'(x) + 0 - 0 + f(x) ↗ Máx ↘ Mín ↗ 4. Conclusões: f é estritamente crescente em ]-∞, -1] e em [1, +∞[ f é estritamente decrescente em [-1, 1] f tem um máximo relativo em x = -1, f(-1) = (-1)³ - 3(-1) + 1 = 3 f tem um mínimo relativo em x = 1, f(1) = 1³ - 3(1) + 1 = -1"}]}]},{id:11,title:"TRIGONOMETRIA",subtopics:[{title:"A Paridade das Funções Trigonométricas",content:[{type:"definition",title:"Função Par e Função Ímpar",content:"Uma função f diz-se: Par se f(-x) = f(x) para todo x do domínio (gráfico simétrico em relação ao eixo Oy) Ímpar se f(-x) = -f(x) para todo x do domínio (gráfico simétrico em relação à origem)"},{type:"formula",title:"Paridade das Funções Trigonométricas",content:"Função Paridade Propriedade sen(x) Ímpar sen(-x) = -sen(x) cos(x) Par cos(-x) = cos(x) tg(x) Ímpar tg(-x) = -tg(x)"}]},{title:"Círculo Trigonométrico",content:[{type:"definition",title:"Definição",content:"O círculo trigonométrico é uma circunferência de raio 1 centrada na origem do referencial ortogonal. Num ponto P do círculo trigonométrico associado a um ângulo α (em radianos): Abcissa de P = cos(α) Ordenada de P = sen(α)"},{type:"info",content:"Relação entre Graus e Radianos: 180° = π radianos α (radianos) = α (graus) × π/180 α (graus) = α (radianos) × 180/π"},{type:"formula",title:"Sinais das Funções Trigonométricas por Quadrante",content:"Quadrante Ângulo sen cos tg 1º Quadrante 0 < α < π/2 + + + 2º Quadrante π/2 < α < π + - - 3º Quadrante π < α < 3π/2 - - + 4º Quadrante 3π/2 < α < 2π - + -"}]},{title:"Fórmula Fundamental da Trigonometria",content:[{type:"formula",title:"Fórmula Fundamental",content:"sen²(x) + cos²(x) = 1 Consequências: sen²(x) = 1 - cos²(x) cos²(x) = 1 - sen²(x)"},{type:"formula",title:"Outras Relações Importantes",content:"tg(x) = sen(x) / cos(x) 1 + tg²(x) = 1/cos²(x) = sec²(x)"}]},{title:"Fórmulas Trigonométricas",content:[{type:"formula",title:"Fórmulas de Adição",content:"Seno: sen(a + b) = sen(a)cos(b) + cos(a)sen(b) sen(a - b) = sen(a)cos(b) - cos(a)sen(b) Cosseno: cos(a + b) = cos(a)cos(b) - sen(a)sen(b) cos(a - b) = cos(a)cos(b) + sen(a)sen(b) Tangente: tg(a + b) = [tg(a) + tg(b)] / [1 - tg(a)tg(b)] tg(a - b) = [tg(a) - tg(b)] / [1 + tg(a)tg(b)]"},{type:"formula",title:"Fórmulas do Ângulo Duplo",content:"sen(2a) = 2sen(a)cos(a) cos(2a) = cos²(a) - sen²(a) = 2cos²(a) - 1 = 1 - 2sen²(a) tg(2a) = 2tg(a) / [1 - tg²(a)]"},{type:"formula",title:"Fórmulas de Transformação (Produto em Soma)",content:"sen(a)cos(b) = [sen(a + b) + sen(a - b)] / 2 cos(a)cos(b) = [cos(a + b) + cos(a - b)] / 2 sen(a)sen(b) = [cos(a - b) - cos(a + b)] / 2"},{type:"formula",title:"Fórmulas de Simpson (Soma em Produto)",content:"sen(p) + sen(q) = 2sen[(p + q)/2]cos[(p - q)/2] sen(p) - sen(q) = 2cos[(p + q)/2]sen[(p - q)/2] cos(p) + cos(q) = 2cos[(p + q)/2]cos[(p - q)/2] cos(p) - cos(q) = -2sen[(p + q)/2]sen[(p - q)/2]"}]},{title:"Equações Trigonométricas",content:[{type:"formula",title:"Equações Elementares",content:"1) sen(x) = a, com |a| ≤ 1 x = α + 2kπ ∨ x = π - α + 2kπ, k ∈ ℤ onde α é tal que sen(α) = a e α ∈ [-π/2, π/2] 2) cos(x) = a, com |a| ≤ 1 x = α + 2kπ ∨ x = -α + 2kπ, k ∈ ℤ onde α é tal que cos(α) = a e α ∈ [0, π] 3) tg(x) = a x = α + kπ, k ∈ ℤ onde α é tal que tg(α) = a e α ∈ ]-π/2, π/2["},{type:"example",title:"Exemplo 1",content:"Resolva a equação sen(x) = 1/2 em [0, 2π] Resolução: Sabemos que sen(π/6) = 1/2 As soluções em [0, 2π] são: x = π/6 (1º quadrante) x = π - π/6 = 5π/6 (2º quadrante) Resposta: S = {π/6, 5π/6}"},{type:"example",title:"Exemplo 2",content:"Resolva a equação cos(2x) = 0 em [0, 2π] Resolução: cos(2x) = 0 ⟺ 2x = π/2 + kπ, k ∈ ℤ ⟺ x = π/4 + kπ/2, k ∈ ℤ Para x ∈ [0, 2π]: k = 0: x = π/4 k = 1: x = 3π/4 k = 2: x = 5π/4 k = 3: x = 7π/4 Resposta: S = {π/4, 3π/4, 5π/4, 7π/4}"},{type:"important_note",title:"Estratégias de Resolução",content:"",items:["Simplificar a equação usando identidades trigonométricas","Reduzir a equação a uma forma elementar","Usar substituição quando apropriado (ex: t = sen(x))","Verificar o domínio e o contradomínio","Não esquecer as soluções periódicas"]}]},{title:"Derivadas das Funções Trigonométricas",content:[{type:"formula",title:"Derivadas",content:"Função Derivada f(x) = sen(x) f'(x) = cos(x) f(x) = cos(x) f'(x) = -sen(x) f(x) = tg(x) f'(x) = 1/cos²(x) = sec²(x) = 1 + tg²(x) f(x) = sen(ax + b) f'(x) = a·cos(ax + b) f(x) = cos(ax + b) f'(x) = -a·sen(ax + b) f(x) = tg(ax + b) f'(x) = a/cos²(ax + b)"},{type:"example",title:"Exemplo 3",content:"Calcule a derivada de f(x) = sen(x²) Resolução: Usando a regra da cadeia: f'(x) = cos(x²) · (x²)' f'(x) = cos(x²) · 2x f'(x) = 2x·cos(x²)"}]},{title:"Tabela Trigonométrica",content:[{type:"formula",title:"Valores Notáveis",content:"Ângulo Graus Radianos sen cos tg 0° 0° 0 0 1 0 30° 30° π/6 1/2 √3/2 √3/3 45° 45° π/4 √2/2 √2/2 1 60° 60° π/3 √3/2 1/2 √3 90° 90° π/2 1 0 ∄ 120° 120° 2π/3 √3/2 -1/2 -√3 135° 135° 3π/4 √2/2 -√2/2 -1 150° 150° 5π/6 1/2 -√3/2 -√3/3 180° 180° π 0 -1 0 270° 270° 3π/2 -1 0 ∄ 360° 360° 2π 0 1 0"}]},{title:"Limite Notável",content:[{type:"formula",title:"Limite Trigonométrico Fundamental",content:"limx→0 sen(x)/x = 1 Consequências: limx→0 x/sen(x) = 1 limx→0 tg(x)/x = 1 limx→0 x/tg(x) = 1 limx→0 [1 - cos(x)]/x² = 1/2"},{type:"example",title:"Exemplo 4",content:"Calcule limx→0 sen(3x)/x Resolução: limx→0 sen(3x)/x = limx→0 [sen(3x)/(3x)] · 3 = 3 · limx→0 sen(3x)/(3x) = 3 · 1 = 3 Nota: Fizemos a mudança u = 3x, quando x → 0, u → 0"},{type:"example",title:"Exemplo 5",content:"Calcule limx→0 [1 - cos(x)]/x² Resolução: limx→0 [1 - cos(x)]/x² = limx→0 [1 - cos(x)]/x² · [1 + cos(x)]/[1 + cos(x)] = limx→0 [1 - cos²(x)]/[x²(1 + cos(x))] = limx→0 sen²(x)/[x²(1 + cos(x))] = limx→0 [sen(x)/x]² · 1/(1 + cos(x)) = 1² · 1/(1 + 1) = 1/2"}]}]},{id:12,title:"NÚMEROS COMPLEXOS",subtopics:[{title:"Forma Algébrica",content:[{type:"definition",title:"Definição",content:"Um número complexo z na forma algébrica escreve-se: z = a + bi onde: a é a parte real de z: Re(z) = a b é a parte imaginária de z: Im(z) = b i é a unidade imaginária: i² = -1"},{type:"info",content:"Conjunto dos Números Complexos: ℂ = {a + bi : a, b ∈ ℝ} Nota: ℝ ⊂ ℂ (os números reais são casos particulares dos complexos com b = 0)"},{type:"formula",title:"Operações na Forma Algébrica",content:"Sejam z₁ = a + bi e z₂ = c + di dois números complexos. Adição: z₁ + z₂ = (a + c) + (b + d)i Subtração: z₁ - z₂ = (a - c) + (b - d)i Multiplicação: z₁ · z₂ = (ac - bd) + (ad + bc)i Divisão: z₁/z₂ = [(ac + bd) + (bc - ad)i] / (c² + d²)"},{type:"definition",title:"Conjugado",content:"O conjugado de z = a + bi é: z̄ = a - bi Propriedades: z + z̄ = 2a = 2Re(z) z - z̄ = 2bi = 2Im(z)i z · z̄ = a² + b² = |z|² (sempre real e não negativo) z̄̄ = z (conjugado do conjugado é o próprio número)"},{type:"definition",title:"Módulo",content:"O módulo (ou valor absoluto) de z = a + bi é: |z| = √(a² + b²) Interpretação Geométrica: Representa a distância do ponto (a, b) à origem no plano complexo. Propriedades: |z| ≥ 0 e |z| = 0 ⟺ z = 0 |z₁ · z₂| = |z₁| · |z₂| |z₁/z₂| = |z₁| / |z₂| (com z₂ ≠ 0) |z̄| = |z| |z₁ + z₂| ≤ |z₁| + |z₂| (desigualdade triangular)"},{type:"example",title:"Exemplo 1",content:"Calcule (2 + 3i)(1 - i) Resolução: (2 + 3i)(1 - i) = 2·1 + 2·(-i) + 3i·1 + 3i·(-i) = 2 - 2i + 3i - 3i² = 2 + i - 3(-1) = 2 + i + 3 = 5 + i"},{type:"example",title:"Exemplo 2",content:"Calcule (1 + 2i)/(3 - i) Resolução: Multiplicamos numerador e denominador pelo conjugado do denominador: (1 + 2i)/(3 - i) = [(1 + 2i)(3 + i)] / [(3 - i)(3 + i)] = [3 + i + 6i + 2i²] / [9 - i²] = [3 + 7i - 2] / [9 + 1] = [1 + 7i] / 10 = 1/10 + 7i/10"}]},{title:"Forma Trigonométrica",content:[{type:"definition",title:"Definição",content:"A forma trigonométrica (ou forma polar) de um número complexo z = a + bi é: z = |z|(cos θ + i sen θ) ou, de forma abreviada: z = |z| cis θ onde: |z| = √(a² + b²) é o módulo θ é um argumento de z"},{type:"info",content:"Relação entre as formas: Da forma algébrica para a trigonométrica: |z| = √(a² + b²) cos θ = a/|z| sen θ = b/|z| Da forma trigonométrica para a algébrica: a = |z| cos θ b = |z| sen θ"}]},{title:"Argumentos de um Número Complexo",content:[{type:"definition",title:"Argumento",content:"Um argumento de z = a + bi (z ≠ 0) é qualquer número real θ tal que: cos θ = a/|z| sen θ = b/|z| Notação: arg(z) = θ"},{type:"important_note",title:"Observações Importantes",content:"",items:["Um número complexo não nulo tem infinitos argumentos","Se θ é um argumento de z, então θ + 2kπ (k ∈ ℤ) também é argumento de z","O argumento principal é o único argumento θ tal que -π < θ ≤ π","Notação para argumento principal: Arg(z)"]},{type:"formula",title:"Cálculo do Argumento",content:"Para z = a + bi (z ≠ 0): Condição Argumento Principal a > 0, b ≥ 0 θ = arctan(b/a) a > 0, b < 0 θ = arctan(b/a) a < 0, b ≥ 0 θ = π + arctan(b/a) a < 0, b < 0 θ = -π + arctan(b/a) a = 0, b > 0 θ = π/2 a = 0, b < 0 θ = -π/2"},{type:"example",title:"Exemplo 3",content:"Escreva z = 1 + i na forma trigonométrica. Resolução: 1. Calcular o módulo: |z| = √(1² + 1²) = √2 2. Calcular o argumento: Como a = 1 > 0 e b = 1 > 0 (1º quadrante): tan θ = 1/1 = 1 ⟹ θ = π/4 3. Forma trigonométrica: z = √2(cos π/4 + i sen π/4)"},{type:"example",title:"Exemplo 4",content:"Escreva z = -√3 + i na forma trigonométrica. Resolução: 1. Calcular o módulo: |z| = √((-√3)² + 1²) = √(3 + 1) = 2 2. Calcular o argumento: Como a = -√3 < 0 e b = 1 > 0 (2º quadrante): tan θ = 1/(-√3) = -√3/3 θ = π + arctan(-√3/3) = π - π/6 = 5π/6 3. Forma trigonométrica: z = 2(cos 5π/6 + i sen 5π/6)"}]},{title:"Operações com Números Complexos na Forma Trigonométrica",content:[{type:"formula",title:"Multiplicação",content:"Sejam z₁ = r₁(cos θ₁ + i sen θ₁) e z₂ = r₂(cos θ₂ + i sen θ₂) z₁ · z₂ = r₁r₂[cos(θ₁ + θ₂) + i sen(θ₁ + θ₂)] Regra prática: Multiplicam-se os módulos Adicionam-se os argumentos"},{type:"formula",title:"Divisão",content:"Sejam z₁ = r₁(cos θ₁ + i sen θ₁) e z₂ = r₂(cos θ₂ + i sen θ₂), com z₂ ≠ 0 z₁/z₂ = (r₁/r₂)[cos(θ₁ - θ₂) + i sen(θ₁ - θ₂)] Regra prática: Dividem-se os módulos Subtraem-se os argumentos"},{type:"formula",title:"Potenciação - Fórmula de Moivre",content:"Seja z = r(cos θ + i sen θ) e n ∈ ℕ zn = rn(cos nθ + i sen nθ) Regra prática: Eleva-se o módulo à potência n Multiplica-se o argumento por n"},{type:"example",title:"Exemplo 5",content:"Calcule (1 + i)⁸ Resolução: 1. Forma trigonométrica de 1 + i: |1 + i| = √2 arg(1 + i) = π/4 1 + i = √2(cos π/4 + i sen π/4) 2. Aplicar a fórmula de Moivre: (1 + i)⁸ = (√2)⁸(cos 8π/4 + i sen 8π/4) = 2⁴(cos 2π + i sen 2π) = 16(1 + 0i) = 16"}]},{title:"Auxiliar - Plano Complexo",content:[{type:"definition",title:"Plano de Argand-Gauss",content:"O plano complexo (ou plano de Argand-Gauss) é uma representação geométrica dos números complexos: O eixo horizontal (Ox) representa a parte real O eixo vertical (Oy) representa a parte imaginária Cada número complexo z = a + bi corresponde ao ponto (a, b)"},{type:"info",content:"Interpretações Geométricas: |z|: distância da origem ao ponto z |z₁ - z₂|: distância entre os pontos z₁ e z₂ arg(z): ângulo que o vetor 0z faz com o eixo real positivo z̄: simétrico de z em relação ao eixo real -z: simétrico de z em relação à origem"},{type:"formula",title:"Lugares Geométricos Importantes",content:"|z - z₀| = r: circunferência de centro z₀ e raio r |z - z₀| < r: interior do círculo de centro z₀ e raio r |z - z₁| = |z - z₂|: mediatriz do segmento [z₁, z₂] arg(z - z₀) = θ: semirreta com origem em z₀ e inclinação θ"}]},{title:"Raízes de Números Complexos",content:[{type:"formula",title:"Raízes n-ésimas",content:"As raízes de índice n de um número complexo z = r(cos θ + i sen θ) são dadas por: wk = ⁿ√r[cos((θ + 2kπ)/n) + i sen((θ + 2kπ)/n)] onde k = 0, 1, 2, ..., n-1 Observações: Existem exatamente n raízes distintas Todas as raízes têm o mesmo módulo: ⁿ√r Os argumentos das raízes são igualmente espaçados por 2π/n As raízes situam-se sobre uma circunferência de raio ⁿ√r"},{type:"example",title:"Exemplo 6",content:"Determine as raízes cúbicas de 8. Resolução: 1. Forma trigonométrica de 8: 8 = 8 + 0i |8| = 8 arg(8) = 0 8 = 8(cos 0 + i sen 0) 2. Calcular as raízes (n = 3, k = 0, 1, 2): k = 0: w₀ = ³√8[cos(0 + 0)/3 + i sen(0 + 0)/3] = 2(cos 0 + i sen 0) = 2 k = 1: w₁ = 2[cos(0 + 2π)/3 + i sen(0 + 2π)/3] = 2(cos 2π/3 + i sen 2π/3) = 2(-1/2 + i√3/2) = -1 + i√3 k = 2: w₂ = 2[cos(0 + 4π)/3 + i sen(0 + 4π)/3] = 2(cos 4π/3 + i sen 4π/3) = 2(-1/2 - i√3/2) = -1 - i√3 Resposta: {2, -1 + i√3, -1 - i√3}"},{type:"example",title:"Exemplo 7",content:"Resolva a equação z⁴ = 1. Resolução: Procuramos as raízes quartas de 1. 1. Forma trigonométrica de 1: 1 = 1(cos 0 + i sen 0) 2. Calcular as raízes (n = 4, k = 0, 1, 2, 3): k = 0: w₀ = cos 0 + i sen 0 = 1 k = 1: w₁ = cos π/2 + i sen π/2 = i k = 2: w₂ = cos π + i sen π = -1 k = 3: w₃ = cos 3π/2 + i sen 3π/2 = -i Resposta: S = {1, i, -1, -i} Nota: Estas são as raízes quartas da unidade."},{type:"important_note",title:"Raízes da Unidade",content:"As raízes n-ésimas da unidade são as soluções de zn = 1: wk = cos(2kπ/n) + i sen(2kπ/n), k = 0, 1, ..., n-1 Estas raízes formam um polígono regular de n lados inscrito na circunferência unitária."}]}]},{id:13,title:"GEOMETRIA NO PLANO",subtopics:[{title:"Equação Reduzida da Reta",content:[{type:"definition",title:"Definição",content:"A equação reduzida da reta é uma forma simplificada de representar uma reta no plano cartesiano, expressa na forma y = mx + b, onde m é o declive (ou coeficiente angular) e b é a ordenada na origem."},{type:"formula",title:"Equação Reduzida",content:"y = mx + b"},{type:"info",content:"Onde: • m = declive da reta (tangente do ângulo de inclinação) • b = ordenada na origem (ponto onde a reta interseta o eixo y)"},{type:"example",title:"Exemplo 1",content:"Determine a equação reduzida da reta que passa pelo ponto A(2, 5) com declive m = 3. Resolução: Usando y = mx + b: 5 = 3(2) + b 5 = 6 + b b = -1 Resposta: y = 3x - 1"},{type:"important_note",title:"Nota Importante",content:"Retas verticais (paralelas ao eixo y) não podem ser expressas na forma reduzida, pois o seu declive é indefinido. Nestes casos, usa-se a equação x = k, onde k é uma constante."}]},{title:"Fórmulas para Calcular o Declive de uma Reta",content:[{type:"definition",title:"Definição",content:"O declive (ou coeficiente angular) de uma reta mede a sua inclinação em relação ao eixo horizontal. Representa a variação vertical por unidade de variação horizontal."},{type:"formula",title:"Declive através de Dois Pontos",content:"m = (y₂ - y₁) / (x₂ - x₁)"},{type:"formula",title:"Declive através do Ângulo de Inclinação",content:"m = tan(α)"},{type:"table",headers:["Caso","Declive","Característica"],rows:[["Reta crescente","m > 0","Sobe da esquerda para a direita"],["Reta decrescente","m < 0","Desce da esquerda para a direita"],["Reta horizontal","m = 0","Paralela ao eixo x"],["Reta vertical","indefinido","Paralela ao eixo y"]]},{type:"example",title:"Exemplo 2",content:"Calcule o declive da reta que passa pelos pontos A(1, 2) e B(4, 8). Resolução: m = (y₂ - y₁) / (x₂ - x₁) m = (8 - 2) / (4 - 1) m = 6 / 3 Resposta: m = 2"},{type:"important_note",title:"Retas Paralelas e Perpendiculares",content:"• Duas retas são paralelas se e só se têm o mesmo declive: m₁ = m₂ • Duas retas são perpendiculares se e só se o produto dos seus declives é -1: m₁ × m₂ = -1"}]},{title:"Equação Vetorial da Reta",content:[{type:"definition",title:"Definição",content:"A equação vetorial da reta representa todos os pontos da reta através de um ponto conhecido e um vetor diretor, usando um parâmetro real."},{type:"formula",title:"Equação Vetorial da Reta no Plano",content:"(x, y) = (x₀, y₀) + k(a, b), k ∈ ℝ"},{type:"info",content:"Onde: • (x₀, y₀) = ponto conhecido da reta • (a, b) = vetor diretor da reta • k = parâmetro real"},{type:"example",title:"Exemplo 3",content:"Escreva a equação vetorial da reta que passa pelo ponto P(3, -1) e tem vetor diretor v = (2, 5). Resolução: (x, y) = (3, -1) + k(2, 5), k ∈ ℝ Ou seja: (x, y) = (3 + 2k, -1 + 5k), k ∈ ℝ"},{type:"important_note",title:"Observação",content:"O vetor diretor de uma reta pode ser obtido a partir de dois pontos distintos da reta através da diferença das suas coordenadas: v = B - A = (x₂ - x₁, y₂ - y₁)"}]},{title:"Equações Paramétricas da Reta",content:[{type:"definition",title:"Definição",content:"As equações paramétricas da reta são obtidas a partir da equação vetorial, separando as coordenadas x e y em função do parâmetro k."},{type:"formula",title:"Equações Paramétricas",content:"x = x₀ + ka y = y₀ + kb, k ∈ ℝ"},{type:"example",title:"Exemplo 4",content:"Determine as equações paramétricas da reta que passa por A(1, 4) e B(3, 10). Resolução: 1º Passo: Calcular o vetor diretor v = B - A = (3-1, 10-4) = (2, 6) 2º Passo: Escrever as equações paramétricas x = 1 + 2k y = 4 + 6k, k ∈ ℝ"},{type:"info",content:"Para passar das equações paramétricas para a equação cartesiana (reduzida), isola-se k numa das equações e substitui-se na outra."}]},{title:"Equação da Circunferência",content:[{type:"definition",title:"Definição",content:"A circunferência é o conjunto de todos os pontos do plano que se encontram à mesma distância (raio) de um ponto fixo (centro)."},{type:"formula",title:"Equação Reduzida da Circunferência",content:"(x - a)² + (y - b)² = r²"},{type:"info",content:"Onde: • C(a, b) = coordenadas do centro • r = raio da circunferência"},{type:"formula",title:"Forma Desenvolvida",content:"x² + y² - 2ax - 2by + (a² + b² - r²) = 0"},{type:"example",title:"Exemplo 5",content:"Escreva a equação da circunferência de centro C(2, -3) e raio r = 5. Resolução: (x - 2)² + (y - (-3))² = 5² (x - 2)² + (y + 3)² = 25 Forma desenvolvida: x² - 4x + 4 + y² + 6y + 9 = 25 x² + y² - 4x + 6y - 12 = 0"},{type:"important_note",title:"Caso Particular",content:"Quando o centro está na origem C(0, 0), a equação simplifica-se para: x² + y² = r²"}]},{title:"Inequação do Círculo",content:[{type:"definition",title:"Definição",content:"A inequação do círculo representa o conjunto de pontos no interior, exterior ou na fronteira de uma circunferência."},{type:"table",headers:["Inequação","Região"],rows:[["(x - a)² + (y - b)² < r²","Interior do círculo (sem a circunferência)"],["(x - a)² + (y - b)² ≤ r²","Interior do círculo (com a circunferência)"],["(x - a)² + (y - b)² > r²","Exterior do círculo (sem a circunferência)"],["(x - a)² + (y - b)² ≥ r²","Exterior do círculo (com a circunferência)"]]},{type:"example",title:"Exemplo 6",content:"Verifique se o ponto P(1, 2) pertence ao interior do círculo de centro C(0, 0) e raio r = 3. Resolução: Inequação do interior: x² + y² < r² Substituindo: 1² + 2² < 3² 1 + 4 < 9 5 < 9 ✓ Sim, o ponto P pertence ao interior do círculo."}]},{title:"Distância entre Dois Pontos",content:[{type:"definition",title:"Definição",content:"A distância entre dois pontos no plano é calculada usando o Teorema de Pitágoras, resultando numa fórmula que relaciona as diferenças das coordenadas."},{type:"formula",title:"Fórmula da Distância no Plano",content:"d(A,B) = √[(x₂ - x₁)² + (y₂ - y₁)²]"},{type:"example",title:"Exemplo 7",content:"Calcule a distância entre os pontos A(2, 5) e B(6, 8). Resolução: d(A,B) = √[(6-2)² + (8-5)²] d(A,B) = √[4² + 3²] d(A,B) = √[16 + 9] d(A,B) = √25 d(A,B) = 5"},{type:"important_note",title:"Propriedades da Distância",content:"• d(A,B) ≥ 0 (a distância é sempre não negativa) • d(A,B) = 0 se e só se A = B • d(A,B) = d(B,A) (propriedade simétrica)"}]},{title:"Ponto Médio",content:[{type:"definition",title:"Definição",content:"O ponto médio de um segmento de reta é o ponto que divide o segmento em duas partes iguais. As suas coordenadas são a média aritmética das coordenadas dos extremos."},{type:"formula",title:"Fórmula do Ponto Médio no Plano",content:"M = ((x₁ + x₂)/2, (y₁ + y₂)/2)"},{type:"example",title:"Exemplo 8",content:"Determine o ponto médio do segmento [AB] onde A(1, 3) e B(7, 11). Resolução: M = ((1+7)/2, (3+11)/2) M = (8/2, 14/2) M = (4, 7)"},{type:"info",content:"O ponto médio é equidistante dos dois extremos do segmento: d(A,M) = d(M,B) = d(A,B)/2"}]}]},{id:14,title:"GEOMETRIA NO ESPAÇO",subtopics:[{title:"Equação Vetorial da Reta",content:[{type:"definition",title:"Definição",content:"No espaço tridimensional, a equação vetorial da reta representa todos os pontos da reta através de um ponto conhecido e um vetor diretor, usando três coordenadas."},{type:"formula",title:"Equação Vetorial da Reta no Espaço",content:"(x, y, z) = (x₀, y₀, z₀) + k(a, b, c), k ∈ ℝ"},{type:"info",content:"Onde: • (x₀, y₀, z₀) = ponto conhecido da reta • (a, b, c) = vetor diretor da reta • k = parâmetro real"},{type:"example",title:"Exemplo 1",content:"Escreva a equação vetorial da reta que passa pelo ponto P(2, -1, 3) e tem vetor diretor v = (1, 4, -2). Resolução: (x, y, z) = (2, -1, 3) + k(1, 4, -2), k ∈ ℝ Ou seja: (x, y, z) = (2 + k, -1 + 4k, 3 - 2k), k ∈ ℝ"},{type:"important_note",title:"Determinação do Vetor Diretor",content:"Se a reta passa por dois pontos A e B, o vetor diretor pode ser obtido por: v = B - A = (x₂ - x₁, y₂ - y₁, z₂ - z₁)"}]},{title:"Equações Paramétricas da Reta",content:[{type:"definition",title:"Definição",content:"As equações paramétricas da reta no espaço expressam cada coordenada (x, y, z) em função de um parâmetro k."},{type:"formula",title:"Equações Paramétricas no Espaço",content:"x = x₀ + ka y = y₀ + kb z = z₀ + kc, k ∈ ℝ"},{type:"example",title:"Exemplo 2",content:"Determine as equações paramétricas da reta que passa por A(1, 2, -3) e B(4, 0, 5). Resolução: 1º Passo: Calcular o vetor diretor v = B - A = (4-1, 0-2, 5-(-3)) = (3, -2, 8) 2º Passo: Escrever as equações paramétricas x = 1 + 3k y = 2 - 2k z = -3 + 8k, k ∈ ℝ"},{type:"formula",title:"Equações Cartesianas (Simétricas)",content:"(x - x₀)/a = (y - y₀)/b = (z - z₀)/c"},{type:"info",content:"As equações cartesianas são obtidas isolando k em cada equação paramétrica e igualando os resultados. Apenas são válidas quando a, b e c são todos diferentes de zero."}]},{title:"Equação da Superfície Esférica",content:[{type:"definition",title:"Definição",content:"A superfície esférica (ou simplesmente esfera) é o conjunto de todos os pontos do espaço que estão à mesma distância (raio) de um ponto fixo (centro)."},{type:"formula",title:"Equação Reduzida da Esfera",content:"(x - a)² + (y - b)² + (z - c)² = r²"},{type:"info",content:"Onde: • C(a, b, c) = coordenadas do centro • r = raio da esfera"},{type:"formula",title:"Forma Desenvolvida",content:"x² + y² + z² - 2ax - 2by - 2cz + (a² + b² + c² - r²) = 0"},{type:"example",title:"Exemplo 3",content:"Escreva a equação da esfera de centro C(1, -2, 3) e raio r = 4. Resolução: (x - 1)² + (y - (-2))² + (z - 3)² = 4² (x - 1)² + (y + 2)² + (z - 3)² = 16 Forma desenvolvida: x² - 2x + 1 + y² + 4y + 4 + z² - 6z + 9 = 16 x² + y² + z² - 2x + 4y - 6z - 2 = 0"},{type:"important_note",title:"Caso Particular",content:"Quando o centro está na origem C(0, 0, 0), a equação simplifica-se para: x² + y² + z² = r²"}]},{title:"Inequação da Esfera",content:[{type:"definition",title:"Definição",content:"A inequação da esfera define o conjunto de pontos no interior, exterior ou na superfície de uma esfera."},{type:"table",headers:["Inequação","Região"],rows:[["(x - a)² + (y - b)² + (z - c)² < r²","Interior da esfera (sem a superfície)"],["(x - a)² + (y - b)² + (z - c)² ≤ r²","Interior da esfera (com a superfície)"],["(x - a)² + (y - b)² + (z - c)² > r²","Exterior da esfera (sem a superfície)"],["(x - a)² + (y - b)² + (z - c)² ≥ r²","Exterior da esfera (com a superfície)"]]},{type:"example",title:"Exemplo 4",content:"Verifique se o ponto P(2, 1, 3) pertence ao interior da esfera de centro C(0, 0, 0) e raio r = 5. Resolução: Inequação do interior: x² + y² + z² < r² Substituindo: 2² + 1² + 3² < 5² 4 + 1 + 9 < 25 14 < 25 ✓ Sim, o ponto P pertence ao interior da esfera."},{type:"info",content:"A esfera sólida (ou bola) corresponde à região definida por (x - a)² + (y - b)² + (z - c)² ≤ r², incluindo o interior e a superfície."}]},{title:"Distância entre Dois Pontos",content:[{type:"definition",title:"Definição",content:"A distância entre dois pontos no espaço tridimensional é uma extensão da fórmula do plano, incluindo a terceira coordenada z."},{type:"formula",title:"Fórmula da Distância no Espaço",content:"d(A,B) = √[(x₂ - x₁)² + (y₂ - y₁)² + (z₂ - z₁)²]"},{type:"example",title:"Exemplo 5",content:"Calcule a distância entre os pontos A(1, 2, 3) e B(4, 6, 7). Resolução: d(A,B) = √[(4-1)² + (6-2)² + (7-3)²] d(A,B) = √[3² + 4² + 4²] d(A,B) = √[9 + 16 + 16] d(A,B) = √41 d(A,B) ≈ 6,40"},{type:"important_note",title:"Aplicação",content:"Esta fórmula é fundamental para determinar o raio de uma esfera quando conhecemos o centro e um ponto da superfície: r = d(Centro, Ponto)"}]},{title:"Ponto Médio",content:[{type:"definition",title:"Definição",content:"O ponto médio de um segmento de reta no espaço é o ponto que divide o segmento em duas partes iguais. Calcula-se pela média aritmética das três coordenadas."},{type:"formula",title:"Fórmula do Ponto Médio no Espaço",content:"M = ((x₁ + x₂)/2, (y₁ + y₂)/2, (z₁ + z₂)/2)"},{type:"example",title:"Exemplo 6",content:"Determine o ponto médio do segmento [AB] onde A(2, 4, -1) e B(6, 8, 5). Resolução: M = ((2+6)/2, (4+8)/2, (-1+5)/2) M = (8/2, 12/2, 4/2) M = (4, 6, 2)"},{type:"info",content:"Verificação: O ponto médio é equidistante dos extremos do segmento: d(A,M) = d(M,B) = d(A,B)/2"}]}]},{id:15,title:"OUTROS",subtopics:[{title:"Produto Escalar",content:[{type:"definition",title:"Definição",content:"O produto escalar (ou produto interno) de dois vetores é uma operação que resulta num número real (escalar). É fundamental para calcular ângulos entre vetores e determinar perpendicularidade."},{type:"formula",title:"Produto Escalar - Definição Algébrica",content:"u · v = (a, b, c) · (d, e, f) = ad + be + cf"},{type:"formula",title:"Produto Escalar - Definição Geométrica",content:"u · v = ||u|| × ||v|| × cos(θ)"},{type:"info",content:"Onde: • ||u|| e ||v|| são as normas (módulos) dos vetores • θ é o ângulo entre os dois vetores"},{type:"example",title:"Exemplo 1",content:"Calcule o produto escalar de u = (2, 3, -1) e v = (1, -2, 4). Resolução: u · v = 2(1) + 3(-2) + (-1)(4) u · v = 2 - 6 - 4 u · v = -8"},{type:"table",headers:["Propriedade","Fórmula"],rows:[["Comutatividade","u · v = v · u"],["Distributividade","u · (v + w) = u · v + u · w"],["Associatividade (escalar)","(ku) · v = k(u · v) = u · (kv)"],["Produto de si mesmo","u · u = ||u||²"]]},{type:"formula",title:"Norma (Módulo) de um Vetor",content:"||u|| = √(u · u) = √(a² + b² + c²)"},{type:"important_note",title:"Vetores Perpendiculares",content:"Dois vetores u e v são perpendiculares (ortogonais) se e só se o seu produto escalar é zero: u ⊥ v ⟺ u · v = 0"},{type:"example",title:"Exemplo 2",content:"Verifique se os vetores u = (2, -3, 1) e v = (3, 2, 0) são perpendiculares. Resolução: u · v = 2(3) + (-3)(2) + 1(0) u · v = 6 - 6 + 0 u · v = 0 Sim, os vetores são perpendiculares."}]},{title:"Como Saber o Ângulo entre Dois Vetores?",content:[{type:"definition",title:"Definição",content:"O ângulo entre dois vetores não nulos pode ser calculado através da relação entre o produto escalar e as normas dos vetores."},{type:"formula",title:"Fórmula do Ângulo entre Vetores",content:"cos(θ) = (u · v) / (||u|| × ||v||)"},{type:"formula",title:"Ou, isolando θ",content:"θ = arccos[(u · v) / (||u|| × ||v||)]"},{type:"example",title:"Exemplo 3",content:"Determine o ângulo entre os vetores u = (1, 2, 2) e v = (2, 1, 2). Resolução: 1º Passo: Calcular u · v u · v = 1(2) + 2(1) + 2(2) = 2 + 2 + 4 = 8 2º Passo: Calcular ||u|| e ||v|| ||u|| = √(1² + 2² + 2²) = √9 = 3 ||v|| = √(2² + 1² + 2²) = √9 = 3 3º Passo: Aplicar a fórmula cos(θ) = 8 / (3 × 3) = 8/9 θ = arccos(8/9) θ ≈ 27,27°"},{type:"table",headers:["Valor de u · v","Ângulo θ","Interpretação"],rows:[["u · v > 0","0° < θ < 90°","Ângulo agudo"],["u · v = 0","θ = 90°","Vetores perpendiculares"],["u · v < 0","90° < θ < 180°","Ângulo obtuso"],["u · v = ||u|| × ||v||","θ = 0°","Vetores paralelos (mesma direção)"],["u · v = -||u|| × ||v||","θ = 180°","Vetores paralelos (direções opostas)"]]},{type:"important_note",title:"Observação Importante",content:"O ângulo entre dois vetores é sempre medido entre 0° e 180° (ou 0 e π radianos). Para vetores no plano, pode-se também considerar ângulos orientados."}]},{title:"Equação Geral do Plano",content:[{type:"definition",title:"Definição",content:"Um plano no espaço tridimensional pode ser definido por um ponto e um vetor perpendicular ao plano (vetor normal). A equação geral do plano relaciona as coordenadas de qualquer ponto do plano."},{type:"formula",title:"Equação Geral do Plano",content:"ax + by + cz + d = 0"},{type:"info",content:"Onde: • n = (a, b, c) é o vetor normal ao plano • d é uma constante real"},{type:"formula",title:"Equação do Plano através de um Ponto e Vetor Normal",content:"a(x - x₀) + b(y - y₀) + c(z - z₀) = 0"},{type:"info",content:"Se o plano passa pelo ponto P₀(x₀, y₀, z₀) e tem vetor normal n = (a, b, c), qualquer ponto P(x, y, z) do plano satisfaz esta equação."},{type:"example",title:"Exemplo 4",content:"Determine a equação do plano que passa pelo ponto P(1, 2, -1) e é perpendicular ao vetor n = (2, -3, 4). Resolução: Usando a fórmula: a(x - x₀) + b(y - y₀) + c(z - z₀) = 0 2(x - 1) + (-3)(y - 2) + 4(z - (-1)) = 0 2x - 2 - 3y + 6 + 4z + 4 = 0 2x - 3y + 4z + 8 = 0"},{type:"table",headers:["Caso Especial","Equação","Característica"],rows:[["Plano paralelo a xy","z = k","Normal: n = (0, 0, 1)"],["Plano paralelo a xz","y = k","Normal: n = (0, 1, 0)"],["Plano paralelo a yz","x = k","Normal: n = (1, 0, 0)"],["Plano passa pela origem","ax + by + cz = 0","d = 0"]]},{type:"important_note",title:"Planos Paralelos e Perpendiculares",content:"• Dois planos são paralelos se os seus vetores normais são paralelos (proporcionais) • Dois planos são perpendiculares se o produto escalar dos seus vetores normais é zero: n₁ · n₂ = 0"},{type:"formula",title:"Distância de um Ponto a um Plano",content:"d(P,π) = |ax₀ + by₀ + cz₀ + d| / √(a² + b² + c²)"},{type:"info",content:"Esta fórmula calcula a distância perpendicular entre um ponto P₀(x₀, y₀, z₀) e o plano π: ax + by + cz + d = 0"}]}]},{id:16,title:"MAPA MENTAL DA MATÉRIA",subtopics:[{title:"Visão Global do Programa de Matemática A - 12º Ano",content:[{type:"info",content:"Este mapa mental apresenta uma síntese estruturada de todos os conteúdos abordados ao longo do ano letivo, organizados por grandes temas e suas inter-relações."}]},{title:"I. ANÁLISE COMBINATÓRIA E PROBABILIDADES",content:[{type:"definition",title:"Análise Combinatória",content:"Triângulo de Pascal e suas propriedades Binómio de Newton e desenvolvimento de (a+b)ⁿ Coeficientes binomiais e aplicações Arranjos, permutações e combinações"},{type:"definition",title:"Cálculo de Probabilidades",content:"Experiências aleatórias e espaço de resultados Acontecimentos e operações com acontecimentos Lei de Laplace e propriedades da probabilidade Probabilidade condicionada Acontecimentos independentes"}]},{title:"II. FUNÇÕES E ANÁLISE",content:[{type:"definition",title:"Funções Exponenciais e Logarítmicas",content:"Função exponencial: f(x) = aˣ Propriedades e gráficos Função logarítmica: f(x) = logₐ(x) Propriedades dos logaritmos Equações e inequações exponenciais e logarítmicas"},{type:"definition",title:"Limites e Continuidade",content:"Noção intuitiva de limite Cálculo de limites (finitos e infinitos) Limites notáveis Indeterminações e sua resolução Continuidade de funções Assíntotas (verticais, horizontais e oblíquas)"}]},{title:"III. CÁLCULO DIFERENCIAL",content:[{type:"definition",title:"Derivadas",content:"Taxa média de variação e taxa instantânea Definição de derivada Interpretação geométrica (reta tangente) Regras de derivação (soma, produto, quociente) Derivada da função composta (regra da cadeia) Derivadas de funções elementares"},{type:"definition",title:"Aplicações das Derivadas",content:"Estudo da monotonia (crescimento e decrescimento) Extremos relativos e absolutos Segunda derivada e concavidades Pontos de inflexão Otimização e problemas de aplicação"}]},{title:"IV. TRIGONOMETRIA",content:[{type:"definition",title:"Funções Trigonométricas",content:"Funções seno, cosseno e tangente Domínio, contradomínio e período Gráficos e transformações Identidades trigonométricas fundamentais Equações trigonométricas"},{type:"definition",title:"Fórmulas Trigonométricas",content:"Fórmulas de adição e subtração Fórmulas de duplicação Fórmulas de bissecção Transformação de produtos em somas"}]},{title:"V. NÚMEROS COMPLEXOS",content:[{type:"definition",title:"Conceitos Fundamentais",content:"Unidade imaginária i e potências de i Forma algébrica: z = a + bi Parte real e parte imaginária Operações (adição, subtração, multiplicação, divisão) Conjugado e suas propriedades"},{type:"definition",title:"Representação Geométrica",content:"Plano complexo (diagrama de Argand) Módulo e argumento Forma trigonométrica: z = r(cos θ + i sin θ) Fórmula de De Moivre Raízes de números complexos"}]},{title:"VI. GEOMETRIA ANALÍTICA",content:[{type:"definition",title:"Geometria no Plano",content:"Equações da reta (reduzida, vetorial, paramétricas) Declive e posições relativas de retas Distância entre pontos Ponto médio de um segmento Equação da circunferência Inequação do círculo"},{type:"definition",title:"Geometria no Espaço",content:"Vetores no espaço (coordenadas, operações) Produto escalar e suas aplicações Ângulo entre vetores Equações da reta no espaço Equação da superfície esférica Inequação da esfera Equação geral do plano Distância entre pontos no espaço"}]},{title:"Conexões entre Temas",content:[{type:"table",headers:["Tema Principal","Relaciona-se com","Aplicação/Conexão"],rows:[["Análise Combinatória","Probabilidades","Contagem de casos possíveis e favoráveis"],["Funções Exponenciais","Limites e Derivadas","Comportamento assintótico e taxas de variação"],["Trigonometria","Números Complexos","Forma trigonométrica e fórmula de Euler"],["Derivadas","Geometria","Retas tangentes e vetores direção"],["Vetores","Geometria Plano/Espaço","Equações de retas e planos"],["Produto Escalar","Ângulos e Distâncias","Cálculo de ângulos entre vetores e retas"]]}]},{title:"Estratégias de Estudo",content:[{type:"example",title:"Metodologia Recomendada",content:"Compreensão Conceptual: Entender os conceitos antes de memorizar fórmulas Prática Regular: Resolver exercícios variados de cada tema Conexões: Identificar relações entre diferentes tópicos Visualização: Usar gráficos e representações geométricas Revisão Sistemática: Rever periodicamente os conteúdos anteriores"}]},{title:"Fórmulas Essenciais - Resumo",content:[{type:"formula",title:"Análise Combinatória",content:"C(n,k) = n! / (k!(n-k)!) (a+b)ⁿ = Σ C(n,k) × aⁿ⁻ᵏ × bᵏ"},{type:"formula",title:"Derivadas Fundamentais",content:"(xⁿ)' = n×xⁿ⁻¹ (eˣ)' = eˣ (ln x)' = 1/x (sin x)' = cos x (cos x)' = -sin x"},{type:"formula",title:"Geometria",content:"d(A,B) = √[(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²] u · v = ||u|| × ||v|| × cos θ Equação plano: ax + by + cz + d = 0"},{type:"formula",title:"Números Complexos",content:"|z| = √(a² + b²) z × z̄ = |z|² zⁿ = rⁿ(cos nθ + i sin nθ)"}]}]}],ct={topics:rt},lt=()=>{const{t:o,language:t}=j(),[a,i]=r.useState(""),[s,c]=r.useState(!1),[p,x]=r.useState(new Set),[b,A]=r.useState(new Set),[I,P]=r.useState(new Set),C=ct.topics;r.useEffect(()=>{localStorage.getItem("mathTheme")==="dark"&&c(!0);const u=localStorage.getItem("mathProgress");u&&x(new Set(JSON.parse(u))),A(new Set(C.map(q=>q.id)))},[]),r.useEffect(()=>{localStorage.setItem("mathTheme",s?"dark":"light")},[s]),r.useEffect(()=>{localStorage.setItem("mathProgress",JSON.stringify([...p]))},[p]);const w=()=>{c(!s)},T=m=>{const u=new Set(b);u.has(m)?u.delete(m):u.add(m),A(u)},ae=m=>{const u=new Set(I);u.has(m)?u.delete(m):u.add(m),P(u)},_=m=>{const u=new Set(p);u.has(m)?u.delete(m):u.add(m),x(u)},te=()=>{A(new Set),P(new Set)},L=()=>{A(new Set(C.map(u=>u.id)));const m=[];C.forEach(u=>{u.subtopics.forEach((q,z)=>{m.push(`${u.id}-${z}`)})}),P(new Set(m))},G=C.filter(m=>{var K;if(!a)return!0;const u=a.toLowerCase(),q=m.title.toLowerCase().includes(u),z=m.subtopics.some(B=>B.title.toLowerCase().includes(u)||B.content.some(U=>U.content&&U.content.toLowerCase().includes(u)||U.title&&U.title.toLowerCase().includes(u))),J=(K=m.exercises)==null?void 0:K.some(B=>B.question.toLowerCase().includes(u)||B.answer.toLowerCase().includes(u));return q||z||J}),se=p.size/C.length*100;return e.jsxs(e.Fragment,{children:[e.jsxs(Z,{children:[e.jsxs("title",{children:[o("math.pageTitle")," | Ricardo Rouco"]}),e.jsx("meta",{name:"description",content:o("math.pageDescription")}),e.jsx("meta",{name:"keywords",content:"matemática 12 ano, matemática A 12º ano, resumos matemática Portugal, estudo matemática 12 ano, Ricardo Rouco matemática, exercícios matemática 12 ano, plataforma matemática gratuita"}),e.jsx("meta",{name:"robots",content:"index, follow, max-image-preview:large, max-snippet:300"}),e.jsx("link",{rel:"canonical",href:"https://ricardodsr.github.io/matematica-12ano"}),e.jsx("meta",{property:"og:type",content:"website"}),e.jsx("meta",{property:"og:url",content:"https://ricardodsr.github.io/matematica-12ano"}),e.jsx("meta",{property:"og:title",content:`${o("math.pageTitle")} | Ricardo Rouco`}),e.jsx("meta",{property:"og:description",content:o("math.pageDescription")}),e.jsx("meta",{property:"og:image",content:"https://ricardodsr.github.io/og-image.png"}),e.jsx("meta",{property:"og:image:width",content:"1200"}),e.jsx("meta",{property:"og:image:height",content:"630"}),e.jsx("meta",{property:"og:image:alt",content:"Matemática 12º Ano — Plataforma Interativa por Ricardo Rouco"}),e.jsx("meta",{property:"og:site_name",content:"Ricardo Rouco"}),e.jsx("meta",{property:"og:locale",content:"pt_PT"}),e.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),e.jsx("meta",{name:"twitter:site",content:"@ricardodsr"}),e.jsx("meta",{name:"twitter:creator",content:"@ricardodsr"}),e.jsx("meta",{name:"twitter:title",content:`${o("math.pageTitle")} | Ricardo Rouco`}),e.jsx("meta",{name:"twitter:description",content:o("math.pageDescription")}),e.jsx("meta",{name:"twitter:image",content:"https://ricardodsr.github.io/og-image.png"}),e.jsx("script",{type:"application/ld+json",children:`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "EducationalOccupationalProgram",
                "@id": "https://ricardodsr.github.io/matematica-12ano#course",
                "name": "Matemática A — 12º Ano",
                "description": "Plataforma interativa gratuita com o programa completo de Matemática A do 12º ano do ensino secundário português. Inclui resumos, exercícios práticos e acompanhamento de progresso.",
                "url": "https://ricardodsr.github.io/matematica-12ano",
                "provider": {
                  "@type": "Person",
                  "@id": "https://ricardodsr.github.io/#person",
                  "name": "Ricardo Rouco"
                },
                "educationalCredentialAwarded": "Preparação para Exame Nacional de Matemática A",
                "occupationalCategory": "Secondary Education",
                "timeToComplete": "P1Y",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "EUR",
                  "availability": "https://schema.org/InStock"
                },
                "inLanguage": "pt",
                "educationalLevel": "12th Grade / Ensino Secundário",
                "teaches": [
                  "Geometria no Plano e no Espaço",
                  "Funções e Sucessões",
                  "Probabilidades e Combinatória",
                  "Cálculo Diferencial",
                  "Trigonometria"
                ],
                "isAccessibleForFree": true,
                "keywords": "matemática 12 ano, matemática A, ensino secundário, Portugal, exame nacional"
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://ricardodsr.github.io/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Matemática 12º Ano",
                    "item": "https://ricardodsr.github.io/matematica-12ano"
                  }
                ]
              },
              {
                "@type": "WebPage",
                "@id": "https://ricardodsr.github.io/matematica-12ano#webpage",
                "url": "https://ricardodsr.github.io/matematica-12ano",
                "name": "Matemática A 12º Ano — Plataforma Interativa Gratuita | Ricardo Rouco",
                "description": "Plataforma gratuita com o programa completo de Matemática A 12º Ano. Resumos, exercícios e acompanhamento de progresso para alunos portugueses.",
                "isPartOf": {
                  "@id": "https://ricardodsr.github.io/#website"
                },
                "author": {
                  "@id": "https://ricardodsr.github.io/#person"
                },
                "inLanguage": "pt",
                "dateModified": "${new Date().toISOString()}"
              }
            ]
          }
        `})]}),e.jsxs("div",{className:`min-h-screen transition-colors duration-300 ${s?"bg-gray-900":"bg-gray-50"}`,children:[e.jsx(ee,{}),e.jsxs("div",{className:"container mx-auto px-4 py-8 max-w-6xl mt-20",children:[e.jsx("div",{className:`${s?"bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700":"bg-gradient-to-br from-primary via-secondary to-vibrantBlue"} text-white rounded-2xl p-6 sm:p-8 md:p-10 mb-6 shadow-2xl`,children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold mb-2",children:["📐 ",o("math.title")]}),e.jsx("p",{className:"text-sm sm:text-base md:text-lg opacity-90 mb-1",children:o("math.subtitle")}),e.jsx("p",{className:"text-xs sm:text-sm opacity-80",children:o("math.author")})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{onClick:w,className:"px-4 py-2 bg-white/20 hover:bg-white/30 border border-white/30 rounded-lg transition-all font-semibold text-sm flex items-center gap-2",title:s?"Tema Claro":"Tema Escuro",children:s?e.jsx(ta,{className:"w-4 h-4"}):e.jsx(sa,{className:"w-4 h-4"})}),e.jsx("button",{onClick:te,className:"px-4 py-2 bg-white/20 hover:bg-white/30 border border-white/30 rounded-lg transition-all font-semibold text-sm hidden sm:block",children:o("math.expandAll")}),e.jsx("button",{onClick:L,className:"px-4 py-2 bg-white/20 hover:bg-white/30 border border-white/30 rounded-lg transition-all font-semibold text-sm hidden sm:block",children:o("math.collapseAll")})]})]})}),e.jsxs("div",{className:`${s?"bg-gray-800 border-gray-700":"bg-white border-gray-200"} rounded-2xl p-4 sm:p-6 mb-6 shadow-lg border`,children:[e.jsxs("div",{className:"relative mb-4",children:[e.jsx(ia,{className:`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${s?"text-gray-400":"text-gray-500"}`}),e.jsx("input",{type:"text",placeholder:o("math.searchPlaceholder"),value:a,onChange:m=>i(m.target.value),className:`w-full pl-11 pr-4 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base ${s?"bg-gray-700 text-white border-gray-600 placeholder-gray-400":"bg-gray-50 text-gray-900 border-gray-300 placeholder-gray-500"} border-2 focus:border-primary focus:outline-none transition-all`})]}),a&&e.jsxs("p",{className:`text-xs sm:text-sm mb-3 ${s?"text-gray-300":"text-gray-600"}`,children:[G.length," ",o("math.topicsFound")]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("span",{className:`text-sm font-semibold ${s?"text-white":"text-gray-900"}`,children:o("math.progress")}),e.jsxs("span",{className:`text-xs sm:text-sm font-bold ${s?"text-white":"text-gray-900"}`,children:[p.size," / ",C.length]})]}),e.jsx("div",{className:`h-2.5 rounded-full overflow-hidden ${s?"bg-gray-700":"bg-gray-200"}`,children:e.jsx("div",{className:"h-full bg-gradient-to-r from-primary to-green-500 transition-all duration-500 rounded-full",style:{width:`${se}%`}})})]})]}),e.jsx("div",{className:"space-y-4",children:G.length===0?e.jsx("div",{className:`${s?"bg-gray-800 text-gray-300":"bg-white text-gray-600"} rounded-2xl p-8 text-center shadow-lg`,children:e.jsx("p",{className:"text-lg",children:"Nenhum tópico encontrado"})}):G.map(m=>e.jsxs("div",{id:`topic-${m.id}`,className:`${s?"bg-gray-800 border-gray-700":"bg-white border-gray-200"} rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border ${p.has(m.id)?"ring-2 ring-green-500 ring-offset-2":""}`,children:[e.jsxs("div",{onClick:u=>{u.target.type!=="checkbox"&&T(m.id)},className:`flex items-center justify-between p-4 sm:p-5 cursor-pointer ${s?"hover:bg-blue-900/20":"hover:bg-blue-50"} transition-colors rounded-t-xl`,children:[e.jsxs("div",{className:"flex items-center gap-3 sm:gap-4 flex-1 min-w-0",children:[e.jsx("input",{type:"checkbox",checked:p.has(m.id),onChange:()=>_(m.id),className:"w-5 h-5 sm:w-6 sm:h-6 accent-green-500 cursor-pointer flex-shrink-0",onClick:u=>u.stopPropagation()}),e.jsxs("h2",{className:`text-base sm:text-lg md:text-xl font-semibold ${s?"text-white":"text-gray-900"} truncate sm:whitespace-normal`,children:[e.jsxs("span",{className:"text-primary font-bold",children:[m.id,"."]})," ",e.jsx("span",{className:"text-sm sm:text-base md:text-lg",children:m.title})]})]}),e.jsx("button",{onClick:u=>{u.stopPropagation(),T(m.id)},className:`text-primary transition-transform duration-300 flex-shrink-0 ${b.has(m.id)?"-rotate-90":"rotate-0"}`,children:e.jsx(O,{className:"w-5 h-5 sm:w-6 sm:h-6"})})]}),!b.has(m.id)&&e.jsxs("div",{className:`p-4 sm:p-5 pt-0 ${s?"border-t border-gray-700":"border-t border-gray-100"}`,children:[e.jsx("div",{className:"space-y-4",children:m.subtopics.map((u,q)=>{const z=`${m.id}-${q}`;return e.jsxs("div",{className:`${s?"bg-gray-900/50":"bg-gray-50"} rounded-lg overflow-hidden`,children:[e.jsxs("button",{onClick:()=>ae(z),className:`w-full flex items-center justify-between p-3 sm:p-4 ${s?"hover:bg-gray-900/80":"hover:bg-gray-100"} transition-colors`,children:[e.jsx("h3",{className:`text-sm sm:text-base font-semibold text-left ${s?"text-blue-400":"text-primary"}`,children:u.title}),e.jsx(O,{className:`w-5 h-5 flex-shrink-0 transition-transform ${I.has(z)?"-rotate-90":""} ${s?"text-blue-400":"text-primary"}`})]}),!I.has(z)&&e.jsx("div",{className:"p-3 sm:p-4 pt-0",children:e.jsx(tt,{items:u.content,isDark:s})})]},q)})}),m.exercises&&m.exercises.length>0&&e.jsx(nt,{exercises:m.exercises,isDark:s})]})]},m.id))}),G.length>5&&e.jsx("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"fixed bottom-6 right-6 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-2xl z-50 flex items-center justify-center hover:scale-110 transition-transform",title:"Voltar ao topo",children:e.jsx(O,{className:"w-6 h-6 rotate-180"})})]}),e.jsx(oe,{})]})]})},ue=r.forwardRef(({className:o,...t},a)=>e.jsx("div",{ref:a,className:f("rounded-lg border bg-card text-card-foreground shadow-sm",o),...t}));ue.displayName="Card";const pe=r.forwardRef(({className:o,...t},a)=>e.jsx("div",{ref:a,className:f("flex flex-col space-y-1.5 p-6",o),...t}));pe.displayName="CardHeader";const xe=r.forwardRef(({className:o,...t},a)=>e.jsx("h3",{ref:a,className:f("text-2xl font-semibold leading-none tracking-tight",o),...t}));xe.displayName="CardTitle";const ge=r.forwardRef(({className:o,...t},a)=>e.jsx("p",{ref:a,className:f("text-sm text-muted-foreground",o),...t}));ge.displayName="CardDescription";const dt=r.forwardRef(({className:o,...t},a)=>e.jsx("div",{ref:a,className:f("p-6 pt-0",o),...t}));dt.displayName="CardContent";const mt=r.forwardRef(({className:o,...t},a)=>e.jsx("div",{ref:a,className:f("flex items-center p-6 pt-0",o),...t}));mt.displayName="CardFooter";const fe=r.forwardRef(({className:o,...t},a)=>e.jsx(Ye,{className:f("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",o),...t,ref:a,children:e.jsx(na,{className:f("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})}));fe.displayName=Ye.displayName;const ut=la,pt=ra,fo=r.forwardRef(({className:o,...t},a)=>e.jsx(Xe,{ref:a,className:f("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",o),...t}));fo.displayName=Xe.displayName;const bo=r.forwardRef(({className:o,children:t,...a},i)=>e.jsxs(pt,{children:[e.jsx(fo,{}),e.jsxs(Ze,{ref:i,className:f("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",o),...a,children:[t,e.jsxs(ca,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[e.jsx($,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));bo.displayName=Ze.displayName;const ho=({className:o,...t})=>e.jsx("div",{className:f("flex flex-col space-y-1.5 text-center sm:text-left",o),...t});ho.displayName="DialogHeader";const yo=r.forwardRef(({className:o,...t},a)=>e.jsx(eo,{ref:a,className:f("text-lg font-semibold leading-none tracking-tight",o),...t}));yo.displayName=eo.displayName;const vo=r.forwardRef(({className:o,...t},a)=>e.jsx(oo,{ref:a,className:f("text-sm text-muted-foreground",o),...t}));vo.displayName=oo.displayName;const xt=()=>{const{t:o}=j(),[t,a]=r.useState(!1),[i,s]=r.useState(!1),[c,p]=r.useState({essential:!0,analytics:!0});r.useEffect(()=>{const w=localStorage.getItem("cookie-consent");if(!w)a(!0);else{const T=JSON.parse(w);p(T),x(T)}},[]);const x=w=>{typeof window.gtag=="function"&&window.gtag("consent","update",{analytics_storage:w.analytics?"granted":"denied",ad_storage:"denied",functionality_storage:"granted",security_storage:"granted"})},b=()=>{const w={essential:!0,analytics:!0};p(w),localStorage.setItem("cookie-consent",JSON.stringify(w)),x(w),a(!1),s(!1)},A=()=>{const w={essential:!0,analytics:!1};p(w),localStorage.setItem("cookie-consent",JSON.stringify(w)),x(w),a(!1),s(!1)},I=()=>{localStorage.setItem("cookie-consent",JSON.stringify(c)),x(c),a(!1),s(!1)},P=()=>{s(!0)},C=()=>{a(!1)};return t?e.jsxs(e.Fragment,{children:[!i&&e.jsx("div",{className:"fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-sm border-t shadow-lg animate-in slide-in-from-bottom",children:e.jsx("div",{className:"max-w-6xl mx-auto",children:e.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center gap-4",children:[e.jsxs("div",{className:"flex items-start gap-3 flex-1",children:[e.jsx(M,{className:"h-5 w-5 text-vibrantBlue mt-0.5 flex-shrink-0"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-sm font-medium text-darkBlue mb-1",children:o("cookies.title")}),e.jsxs("p",{className:"text-sm text-gray-600 leading-relaxed",children:[o("cookies.description")," ",e.jsx("a",{href:"/privacy-policy",className:"underline text-vibrantBlue hover:text-mediumBlue",children:o("cookies.privacyPolicy")})]})]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 w-full sm:w-auto",children:[e.jsxs(v,{variant:"outline",size:"sm",onClick:P,className:"w-full sm:w-auto",children:[e.jsx(me,{className:"h-4 w-4 mr-2"}),o("cookies.customize")]}),e.jsx(v,{variant:"outline",size:"sm",onClick:A,className:"w-full sm:w-auto",children:o("cookies.reject")}),e.jsx(v,{size:"sm",onClick:b,className:"w-full sm:w-auto bg-vibrantBlue hover:bg-mediumBlue",children:o("cookies.accept")})]}),e.jsx(v,{variant:"ghost",size:"sm",onClick:C,className:"self-start sm:self-center",children:e.jsx($,{className:"h-4 w-4"})})]})})}),e.jsx(ut,{open:i,onOpenChange:s,children:e.jsxs(bo,{className:"max-w-md",children:[e.jsxs(ho,{children:[e.jsxs(yo,{className:"flex items-center gap-2",children:[e.jsx(me,{className:"h-5 w-5"}),o("cookies.title")]}),e.jsx(vo,{children:o("cookies.description")})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(ue,{children:e.jsxs(pe,{className:"pb-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(M,{className:"h-4 w-4 text-green-500"}),e.jsx(xe,{className:"text-sm",children:"Essential Cookies"})]}),e.jsx(fe,{checked:c.essential,disabled:!0,className:"opacity-50"})]}),e.jsx(ge,{className:"text-xs",children:o("cookies.essential")})]})}),e.jsx(ue,{children:e.jsxs(pe,{className:"pb-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(da,{className:"h-4 w-4 text-vibrantBlue"}),e.jsx(xe,{className:"text-sm",children:"Analytics Cookies"})]}),e.jsx(fe,{checked:c.analytics,onCheckedChange:w=>p(T=>({...T,analytics:w}))})]}),e.jsx(ge,{className:"text-xs",children:o("cookies.analytics")})]})})]}),e.jsxs("div",{className:"flex gap-2 pt-4",children:[e.jsx(v,{variant:"outline",onClick:A,className:"flex-1",children:o("cookies.reject")}),e.jsx(v,{onClick:I,className:"flex-1 bg-vibrantBlue hover:bg-mediumBlue",children:o("cookies.save")})]})]})})]}):null},gt=new ma,ft=()=>e.jsx(ua,{client:gt,children:e.jsx(pa,{children:e.jsx(Sa,{children:e.jsxs(Pa,{children:[e.jsx(Na,{}),e.jsx(Ia,{}),e.jsx(xt,{}),e.jsx(xa,{children:e.jsxs(ga,{children:[e.jsx(H,{path:"/",element:e.jsx(Qa,{})}),e.jsx(H,{path:"/privacy-policy",element:e.jsx(_a,{})}),e.jsx(H,{path:"/terms-of-service",element:e.jsx(Ja,{})}),e.jsx(H,{path:"/matematica-12ano",element:e.jsx(lt,{})}),e.jsx(H,{path:"*",element:e.jsx($a,{})})]})})]})})})});fa(document.getElementById("root")).render(e.jsx(ft,{}));
