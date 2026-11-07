import './styles.css';

const getBaseUrl = () => {
  // Works with any repo name, custom domain, or local file preview
  return './';
};
const base = getBaseUrl();

const logo = `${base}brand-logo-transparent.png`;
const headerLogo = `${base}brand-logo-header-transparent.png`;

// Spa imagery (Local Luvi facility photos & High-Res curated treatment visuals)
const aboutProductsImage = `${base}images/about-organic-products.jpg`;
const aboutProductVideo = `${base}images/spa-product-animation.mp4`;

const facilityReception = `${base}images/reception-hero.png`;
const facilityTreatment = `${base}images/treatment-bed.png`;
const facilityDoorVideo = `${base}images/wooden-door-opening.mp4`;

// Professional, Authentic Luxury Spa Vector Icons
const icon = (name: 'arrow' | 'phone' | 'mail' | 'whatsapp' | 'whatsapp-official' | 'clock' | 'pin' | 'close' | 'menu' | 'branch' | 'hot-stones' | 'lotus' | 'mortar' | 'care' | 'skincare' | 'herbal-compress') => {
  const shared = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" width="22" height="22"';
  const paths: Record<string, string> = {
    arrow: '<path d="M5 12h14M13 5l7 7-7 7"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    whatsapp: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
    'whatsapp-official': '<path fill="currentColor" stroke="none" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.838 11.838 0 005.71 1.47h.005c6.554 0 11.89-5.335 11.893-11.894a11.82 11.82 0 00-3.468-8.438" />',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    pin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
    menu: '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
    // Authentic Organic Botanical Branch
    branch: '<path d="M3 21C11 21 16 14 18 3"/><path d="M12.5 13C16 12 18.5 9 19 6C16 6.5 13 9 12.5 13Z"/><path d="M8 17.5C11 17 13 14.5 13.5 12C11 12.5 8.5 14.5 8 17.5Z"/><path d="M16 8C19 7 21 4 21 2C18 2 15 4 16 8Z"/>',
    // Authentic Hot Basalt Massage Therapy Stones with Rising Steam
    'hot-stones': '<ellipse cx="12" cy="18" rx="8" ry="3.5"/><ellipse cx="12" cy="12" rx="5.5" ry="2.8"/><path d="M9 6.5c1-1 1-2 0-3M12 6.5c1-1 1-2 0-3M15 6.5c1-1 1-2 0-3"/>',
    // Authentic Blooming Sacred Lotus Flower
    lotus: '<path d="M12 3.5c-1.8 3.2-2.8 6.5-2.8 9.5 0 3 1.2 5 2.8 7.5 1.6-2.5 2.8-4.5 2.8-7.5 0-3-1-6.3-2.8-9.5z"/><path d="M12 13c-3-1.8-6.5-1.8-9.2 0 1.8 2.8 4.2 4.2 7.2 4.7"/><path d="M12 13c3-1.8 6.5-1.8 9.2 0-1.8 2.8-4.2 4.2-7.2 4.7"/><path d="M12 17c-2 1.3-4.2 1.7-6.5 1.7 1.8 1.4 3.8 1.8 5.5 2"/><path d="M12 17c2 1.3 4.2 1.7 6.5 1.7-1.8 1.4-3.8 1.8-5.5 2"/>',
    // Authentic Organic Mortar & Pestle
    mortar: '<path d="M4 11.5c0 5 3.6 9 8 9s8-4 8-9H4z"/><path d="M3 11.5h18"/><path d="m14.5 3.5-3.5 8"/><path d="M8.5 20.5h7"/>',
    // Authentic Gentle Caring Touch / Heart in Balance
    care: '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>',
    // Authentic Skincare Elixir Dropper Bottle with Pure Droplet
    skincare: '<rect x="6" y="9" width="12" height="12" rx="3"/><path d="M9 9V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v3"/><path d="M12 2.5v2"/><path d="M12 13.5c-1 0-1.8.8-1.8 1.8 0 1.2 1.8 2.7 1.8 2.7s1.8-1.5 1.8-2.7c0-1-.8-1.8-1.8-1.8z"/>',
    // Authentic Thai Herbal Compress Ball (Prakhop) & Sea Salt Scrub
    'herbal-compress': '<path d="M12 2.5v5.5"/><path d="M9.5 4h5"/><path d="M8.5 8h7l2 3.5c.8 1.8.6 3.8-.4 5.2-1.4 2-3.8 2.8-5.1 2.8s-3.7-.8-5.1-2.8c-1-1.4-1.2-3.4-.4-5.2l2-3.5z"/><path d="M9 13.5c1.8 1.2 4.2 1.2 6 0"/>'
  };
  return `<svg ${shared}>${paths[name]}</svg>`;
};

// Services Data (Strictly ZERO Prices, exactly the 6 treatments performed in Luvi Spa)
const services = [
  {
    id: 'deep-tissue',
    tag: 'Muscle Recovery',
    title: 'Deep Tissue / Deep Muscle Recovery Massage',
    desc: 'Targeted deep neuromuscular pressure to dissolve persistent tension knots, relieve shoulder stiffness, and restore full bodily mobility.',
    image: `${base}images/service-deep-tissue.jpg`,
    badge: 'Therapeutic Relief',
    iconName: 'hot-stones' as const
  },
  {
    id: 'hot-stone',
    tag: 'Heated Basalt',
    title: 'Hot Stone Therapy (Heated Basalt Stones)',
    desc: 'Smooth volcanic basalt stones warmed to soothing temperatures, placed along energy pathways to melt away fatigue and promote deep healing.',
    image: `${base}images/service-hot-stone.jpg`,
    badge: 'Deep Warmth',
    iconName: 'hot-stones' as const
  },
  {
    id: 'aromatherapy',
    tag: 'Aromatic Healing',
    title: 'Aromatherapy Massage',
    desc: 'Custom-blended cold-pressed essential botanical oils smoothed with rhythmic strokes to calm the nervous system and restore mental tranquility.',
    image: `${base}images/service-aromatherapy.jpg`,
    badge: 'Pure Botanicals',
    iconName: 'branch' as const
  },
  {
    id: 'body-scrub',
    tag: 'Skin Renewal',
    title: 'Aromatic Mineral Body Scrub',
    desc: 'Pure sea mineral crystals and nourishing botanical elixirs buff away dull surface cells, leaving skin velvety soft, purified, and glowing.',
    image: `${base}images/service-body-scrub.jpg`,
    badge: 'Exfoliating Glow',
    iconName: 'herbal-compress' as const
  },
  {
    id: 'head-scalp',
    tag: 'Tension Release',
    title: 'Stress-Relief Head & Scalp Massage',
    desc: 'Focused acupressure across the temples, crown, and neck to soothe digital eye fatigue, alleviate headaches, and induce profound peace.',
    image: `${base}images/service-head-scalp.jpg`,
    badge: 'Mental Calm',
    iconName: 'lotus' as const
  },
  {
    id: 'foot-reflexology',
    tag: 'Whole-Body Balance',
    title: 'Foot Reflexology',
    desc: 'Traditional stimulation of vital reflex zones in the soles and lower legs to balance internal body energy and revitalize tired, aching feet.',
    image: `${base}images/service-foot-reflexology.jpg`,
    badge: 'Acupressure',
    iconName: 'mortar' as const
  }
];

// Dedicated "Signature Rituals in Motion" Data (Staff in Luvi Uniforms performing authentic therapies)
const signatureRituals = [
  {
    id: 'shirodhara-3d',
    title: 'Ayurvedic Shirodhara Revival',
    tag: 'Mind & Scalp Sanctuary',
    desc: 'An ancient restorative therapy where a rhythmic stream of warm medicated herbal oil is poured gently over the third-eye chakra, releasing chronic mental fatigue and inducing meditative peace.',
    image: `${base}images/ritual-shirodhara-3d.jpg`,
    badge: '3D Pop-Out Frame',
    therapist: 'Certified Ayurvedic Specialist',
    highlights: ['Ajna Chakra Stream', 'Deep Scalp Tension Release', 'Warm Medicated Herbal Oil']
  },
  {
    id: 'hot-stone-3d',
    title: 'Volcanic Basalt Stone Therapy',
    tag: 'Deep Thermal Relief',
    desc: 'Hand-selected volcanic basalt stones heated to thermal perfection and placed along energy meridians to dissolve deep muscle spasms, stimulate micro-circulation, and restore vital bodily warmth.',
    image: `${base}images/ritual-hot-stone-3d.jpg`,
    badge: '3D Pop-Out Frame',
    therapist: 'Certified Massage Therapist',
    highlights: ['Heated Basalt Stones', 'Deep Muscular Release', 'Aromatic Oil Nourishment']
  },
  {
    id: 'four-hands',
    title: 'Royal Four-Hands Synchronized Massage',
    tag: 'Dual-Therapist Harmony',
    desc: 'Two certified therapists working in complete synchronized choreography to provide an immersive full-body massage that balances both brain hemispheres and delivers intense restorative relaxation.',
    image: `${base}images/ritual-four-hands.jpg`,
    badge: 'Signature Royal Ritual',
    therapist: 'Dual-Therapist Team',
    highlights: ['Choreographed Strokes', 'Full-Body Rebalance', 'Traditional Brass Diyas']
  },
  {
    id: 'shirodhara-droni',
    title: 'Traditional Droni Table Ritual',
    tag: 'Authentic Ayurvedic Setup',
    desc: 'Conducted on a traditional handcrafted wooden Droni bed with continuous warm botanical oil infusions, purifying internal energy channels and dissolving deep-seated physical stress.',
    image: `${base}images/ritual-shirodhara-droni.jpg`,
    badge: 'Ayurvedic Droni Suite',
    therapist: 'Holistic Wellness Master',
    highlights: ['Handcrafted Wooden Droni', 'Continuous Warm Infusion', 'Holistic Mind Detox']
  }
];

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('App root element not found');

app.innerHTML = `
  <!-- Luxury Dark Header with Seamless Banner Blend & Centered Transparent Logo -->
  <header class="site-header">
    <div class="nav-bar-container">
      <!-- Left Spacer for Perfect Center Balancing -->
      <div class="nav-spacer-left" aria-hidden="true"></div>

      <!-- Center Unit: Left Navigation Links + Transparent Centered Logo + Right Navigation Links -->
      <nav class="nav-center-unit" aria-label="Primary navigation">
        <div class="nav-links-left">
          <a href="#hero" class="nav-link">Home</a>
          <a href="#about" class="nav-link">About</a>
          <a href="#services" class="nav-link">Services</a>
        </div>

        <!-- Center: Transparent Brand Logo -->
        <div class="nav-center-logo">
          <a href="#hero" aria-label="Luvi Unisex Saloon & Spa Home">
            <img 
              src="${headerLogo}" 
              alt="Luvi Unisex Saloon & Spa" 
              class="nav-brand-logo" 
              onerror="this.src='${logo}'" 
            />
          </a>
        </div>

        <div class="nav-links-right">
          <a href="#rituals" class="nav-link">Rituals</a>
          <a href="#atmosphere" class="nav-link">Atmosphere</a>
          <a href="#footer-contact" class="nav-link">Visit Us</a>
        </div>
      </nav>

      <!-- Far Right: Separated Small "Book Appointment" Button -->
      <div class="nav-right-actions">
        <!-- Header Book Appointment removed per user request -->
        <button type="button" class="nav-hamburger-btn js-toggle-drawer" aria-label="Open mobile menu">
          ${icon('menu')}
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Navigation Drawer -->
  <div class="mobile-drawer" id="mobile-drawer" aria-hidden="true">
    <div class="drawer-panel">
      <div class="drawer-header">
        <img src="${logo}" alt="Luvi Spa" style="height: 44px; width: auto; background: transparent; mix-blend-mode: screen;" />
        <button type="button" class="modal-close-btn js-close-drawer" aria-label="Close drawer">
          ${icon('close')}
        </button>
      </div>
      <div class="drawer-links">
        <a href="#hero" class="drawer-link js-close-drawer">Home</a>
        <a href="#about" class="drawer-link js-close-drawer">About Sanctuary</a>
        <a href="#services" class="drawer-link js-close-drawer">Spa Services</a>
        <a href="#rituals" class="drawer-link js-close-drawer">Signature Rituals</a>
        <a href="#atmosphere" class="drawer-link js-close-drawer">Atmosphere</a>
        <a href="#footer-contact" class="drawer-link js-close-drawer">Visit & Contact</a>
      </div>
      <button type="button" class="btn-primary-pill js-open-booking js-close-drawer" style="width: 100%; justify-content: center; margin-top: auto;">
        Book Appointment
      </button>
    </div>
  </div>

  <main>
    <!-- 1. Hero Section (Home) with Fitted Luxury Spa Backdrop -->
    <section class="hero-section" id="hero" style="--hero-bg-url: url('${base}images/hero-sanctuary-bg.jpg');">
      <div class="hero-container-fluid">
        <div class="hero-grid">
          <!-- Hero Left Content (Placed Cleanly with High-Contrast Scrim) -->
          <div class="hero-content">
            <div class="luxury-title-wrap">
              <span class="luxury-serif-eyebrow slide-reveal-text"><span class="eyebrow-sparkle">✦</span> Natural Beauty, A Calmer You <span class="eyebrow-sparkle">✦</span></span>
            </div>
            <h1 class="hero-title hero-slide-reveal">
              <span class="slide-line"><span class="slide-inner">Relax. Recharge.</span></span>
              <span class="slide-line"><span class="slide-inner italic-flair">Be You Again.</span></span>
            </h1>
            <p class="hero-subtitle">
              Holistic spa & wellness treatments designed to restore balance, renew your energy, and bring out your natural glow right here in Horamavu.
            </p>
            <div class="hero-cta-group">
              <button type="button" class="btn-primary-pill js-open-booking" data-service="Spa Experience">
                Book Your Experience ${icon('arrow')}
              </button>
              <a href="#about" class="btn-outline-pill">
                About Us
              </a>
            </div>
            <!-- Authentic Spa Trust Badges with Real Vector Emblems -->
            <div class="hero-trust-badges">
              <div class="trust-badge-item">
                <div class="trust-badge-icon">${icon('branch')}</div>
                <span>Natural Products</span>
              </div>
              <div class="trust-badge-item">
                <div class="trust-badge-icon">${icon('hot-stones')}</div>
                <span>Expert Therapists</span>
              </div>
              <div class="trust-badge-item">
                <div class="trust-badge-icon">${icon('lotus')}</div>
                <span>A Healthier Happier You</span>
              </div>
            </div>
          </div>

          <!-- Hero Right Ambient Space (Allows Background Candle & Steaming Frangipani Basin to Radiate) -->
          <div class="hero-ambient-spacer"></div>
        </div>
      </div>
    </section>

    <!-- Slim Luxury Single-Line Services Marquee (Directly Below Home) -->
    <div class="hero-services-marquee" aria-label="Signature Spa Rituals">
      <div class="marquee-track">
        <div class="marquee-group">
          <span class="marquee-item">Deep Tissue / Deep Muscle Recovery Massage</span>
          <span class="marquee-sep">✦</span>
          <span class="marquee-item">Hot Stone Therapy (Heated Basalt Stones)</span>
          <span class="marquee-sep">✦</span>
          <span class="marquee-item">Aromatherapy Massage</span>
          <span class="marquee-sep">✦</span>
          <span class="marquee-item">Aromatic Mineral Body Scrub</span>
          <span class="marquee-sep">✦</span>
          <span class="marquee-item">Stress-Relief Head & Scalp Massage</span>
          <span class="marquee-sep">✦</span>
          <span class="marquee-item">Foot Reflexology</span>
          <span class="marquee-sep">✦</span>
        </div>
        <div class="marquee-group" aria-hidden="true">
          <span class="marquee-item">Deep Tissue / Deep Muscle Recovery Massage</span>
          <span class="marquee-sep">✦</span>
          <span class="marquee-item">Hot Stone Therapy (Heated Basalt Stones)</span>
          <span class="marquee-sep">✦</span>
          <span class="marquee-item">Aromatherapy Massage</span>
          <span class="marquee-sep">✦</span>
          <span class="marquee-item">Aromatic Mineral Body Scrub</span>
          <span class="marquee-sep">✦</span>
          <span class="marquee-item">Stress-Relief Head & Scalp Massage</span>
          <span class="marquee-sep">✦</span>
          <span class="marquee-item">Foot Reflexology</span>
          <span class="marquee-sep">✦</span>
        </div>
      </div>
    </div>

    <!-- 2. About Us Section (Unified Blended Sanctuary Suite) -->
    <section class="about-section" id="about">
      <div class="section-container">
        <!-- Top Left Eyebrow -->
        <div class="about-top-left-header reveal-on-scroll">
          <div class="luxury-title-wrap">
            <span class="luxury-serif-eyebrow"><span class="eyebrow-sparkle">✦</span> The Philosophy <span class="eyebrow-sparkle">✦</span></span>
          </div>
        </div>

        <div class="about-blended-card reveal-on-scroll">
          <!-- Left: Video Visual Window (Integrated, 100% Clean & Visible) -->
          <div class="about-poster-overlay-bg" aria-hidden="true">SANCTUARY</div>
          <div class="about-visual-panel reveal-on-scroll">
            <div class="about-media-window video-frame">
              <video
                src="${aboutProductVideo}"
                autoplay
                loop
                muted
                playsinline
                poster="${aboutProductsImage}"
                preload="auto" class="about-product-video"
              ></video>
            </div>
          </div>

          <!-- Right: Narrative (Seamlessly Flowing within the Same Sanctuary Suite) -->
          <div class="about-story-panel">
            <h2 class="section-title about-poster-heading">A Sanctuary for Body, Mind &amp; Soul</h2>
            <p class="about-desc reveal-on-scroll">
              We believe true beauty comes from within. Luvi Unisex Saloon &amp; Spa is a peaceful sanctuary where modern wellness meets ancient healing traditions, helping you feel your best inside and out. Every ritual is conducted in private, sanitized suites with gentle aromatics and compassionate care.
            </p>

            <div class="about-badges-grid">
              <div class="about-badge-card">
                <div class="about-badge-icon">${icon('lotus')}</div>
                <div class="about-badge-label">Holistic Approach</div>
              </div>
              <div class="about-badge-card">
                <div class="about-badge-icon">${icon('mortar')}</div>
                <div class="about-badge-label">Organic Products</div>
              </div>
              <div class="about-badge-card">
                <div class="about-badge-icon">${icon('care')}</div>
                <div class="about-badge-label">Personalized Care</div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Our Services Section (6 Authentic Spa Ritual Cards Matching the Marquee) -->
    <section class="services-section" id="services">
      <div class="section-container">
        <div class="section-header-center reveal-on-scroll">
          <div class="luxury-title-wrap center">
            <span class="luxury-serif-eyebrow reveal-on-scroll"><span class="eyebrow-sparkle">✦</span> Signature Spa Rituals <span class="eyebrow-sparkle">✦</span></span>
          </div>
          <h2 class="section-title reveal-on-scroll">Therapies Crafted for Deep Rest</h2>
          <p class="section-subtitle reveal-on-scroll">
            Authentic healing therapies tailored to your body's needs in private, sound-softened suites.
          </p>
        </div>

        <div class="services-grid-6">
          ${services.map((item) => `
            <article class="service-card reveal-on-scroll" id="service-${item.id}">
              <div class="service-card-media">
                <img src="${item.image}" alt="${item.title}" loading="lazy" />
                <span class="service-badge-pill">${item.badge}</span>
              </div>
              <div class="service-card-body">
                <div class="service-card-icon-circle">
                  ${icon(item.iconName)}
                </div>
                <h3 class="service-card-title">${item.title}</h3>
                <p class="service-card-desc">${item.desc}</p>
                <button type="button" class="service-card-link js-open-booking" data-service="${item.title}">
                  Book Ritual ${icon('arrow')}
                </button>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 4. Dedicated "Signature Rituals in Motion" Animated Showcase -->
    <section class="rituals-showcase-section" id="rituals">
      <div class="section-container">
        <div class="section-header-center reveal-on-scroll">
          <div class="luxury-title-wrap center">
            <span class="luxury-serif-eyebrow reveal-on-scroll"><span class="eyebrow-sparkle">✦</span> Signature Rituals In Motion <span class="eyebrow-sparkle">✦</span></span>
          </div>
          <h2 class="section-title reveal-on-scroll">Authentic Wellness in Frame</h2>
          <p class="section-subtitle reveal-on-scroll">
            Witness our certified therapists in Luvi uniforms performing time-honored healing therapies in private, sound-softened suites.
          </p>
        </div>

        <div class="showcase-stage-grid reveal-on-scroll">
          <!-- Left: 3D Animated Frame Container -->
          <div class="showcase-frame-container" id="showcase-frame">
            
            <button type="button" class="showcase-nav-btn prev" id="btn-ritual-prev" aria-label="Previous ritual">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button type="button" class="showcase-nav-btn next" id="btn-ritual-next" aria-label="Next ritual">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M9 18l6-6-6-6"/></svg>
            </button>

            <div class="showcase-slides-wrap">
              ${signatureRituals.map((r, i) => `
                <div class="showcase-slide ${i === 0 ? 'active' : ''}" data-index="${i}">
                  <img src="${r.image}" alt="${r.title} - Luvi Unisex Spa" loading="${i === 0 ? 'eager' : 'lazy'}" />
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Right: Details & Booking Panel -->
          <div class="showcase-info-panel">
            <div class="showcase-counter">
              <span id="ritual-current-num">01</span> / 04
            </div>
            <span class="showcase-tag-pill" id="ritual-tag">${signatureRituals[0].tag}</span>
            <h3 class="showcase-ritual-title" id="ritual-title">${signatureRituals[0].title}</h3>
            <p class="showcase-ritual-desc" id="ritual-desc">${signatureRituals[0].desc}</p>
            
            <ul class="showcase-highlights-list" id="ritual-highlights">
              ${signatureRituals[0].highlights.map(h => `
                <li class="showcase-highlight-item"><span class="highlight-bullet">✦</span> ${h}</li>
              `).join('')}
            </ul>

            <div>
              <button type="button" class="btn-primary-pill js-open-booking" id="ritual-book-btn" data-service="${signatureRituals[0].title}">
                Book This Ritual ${icon('arrow')}
              </button>
            </div>
          </div>
        </div>

        <!-- Minimalist Indicator Dots -->
        <div class="showcase-dots-bar" id="showcase-dots" aria-label="Ritual slides">
          ${signatureRituals.map((_, i) => `
            <span class="showcase-dot ${i === 0 ? 'active' : ''}" data-index="${i}" role="button" tabindex="0" aria-label="Go to ritual ${i + 1}"></span>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 5. Stats & Trust Counter Ribbon (Dark Surface & Gold Figures) -->
    <section class="stats-bar-section" aria-label="Key Milestones">
      <div class="section-container">
        <div class="stats-grid" id="stats-counter-section">
          <div class="stat-item reveal-on-scroll">
            <div class="stat-number js-counter" data-target="5000" data-format="k+" data-val="5K+">0</div>
            <div class="stat-label">Happy Clients</div>
          </div>
          <div class="stat-item reveal-on-scroll">
            <div class="stat-number js-counter" data-target="10" data-format="+" data-val="10+">0</div>
            <div class="stat-label">Years Experience</div>
          </div>
          <div class="stat-item reveal-on-scroll">
            <div class="stat-number js-counter" data-target="20" data-format="+" data-val="20+">0</div>
            <div class="stat-label">Signature Treatments</div>
          </div>
          <div class="stat-item reveal-on-scroll">
            <div class="stat-number js-counter" data-target="98" data-format="%" data-val="98%">0</div>
            <div class="stat-label">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Atmosphere & Sanctuary Gallery (Luvi Facility Photos) -->
    <section class="atmosphere-section" id="atmosphere">
      <div class="section-container">
        <div class="section-header-center reveal-on-scroll">
          <div class="luxury-title-wrap center">
            <span class="luxury-serif-eyebrow reveal-on-scroll"><span class="eyebrow-sparkle">✦</span> Horamavu Sanctuary <span class="eyebrow-sparkle">✦</span></span>
          </div>
          <h2 class="section-title reveal-on-scroll">Step Inside Luvi</h2>
          <p class="section-subtitle reveal-on-scroll">
            Warm ambient lighting, sanitized private rooms, and an atmosphere crafted purely for deep rest.
          </p>
        </div>

        <div class="atmosphere-grid-3">
          <!-- Card 1: Reception Desk (Museum-Grade Passe-Partout Photo Frame) -->
          <div class="atmosphere-card reveal-on-scroll photo-frame">
            <div class="atmosphere-photo-mat">
              <div class="atmosphere-img-wrap">
                <img src="${facilityReception}" alt="Luvi Spa Reception & Welcome Desk" loading="lazy" />
              </div>
            </div>
            <div class="atmosphere-caption">
              <div class="atmosphere-caption-title">Tranquil Welcome Desk</div>
              <div class="atmosphere-caption-sub">Warm ambient lighting & private consultation</div>
            </div>
          </div>

          <!-- Card 2: Suite Walkthrough (Cinematic Glowing Screen Video Frame) -->
          <div class="atmosphere-card reveal-on-scroll video-frame">
            <div class="atmosphere-video-screen">
              <video
                src="${facilityDoorVideo}"
                autoplay
                loop
                muted
                playsinline
                poster="${facilityTreatment}"
                preload="auto" class="atmosphere-video"
              ></video>
            </div>
            <div class="atmosphere-caption">
              <div class="atmosphere-caption-title">Private Suite Entrance</div>
              <div class="atmosphere-caption-sub">Opening the doors into your quiet wellness sanctuary</div>
            </div>
          </div>

          <!-- Card 3: Treatment Bed Suite (Museum-Grade Passe-Partout Photo Frame) -->
          <div class="atmosphere-card reveal-on-scroll photo-frame">
            <div class="atmosphere-photo-mat">
              <div class="atmosphere-img-wrap">
                <img src="${facilityTreatment}" alt="Private Luvi Treatment Bed" loading="lazy" />
              </div>
            </div>
            <div class="atmosphere-caption">
              <div class="atmosphere-caption-title">Private Therapy Suites</div>
              <div class="atmosphere-caption-sub">Sound-softened rooms for complete relaxation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Reduced, Short & Clean Compact Footer -->
  <footer class="site-footer-compact" id="footer-contact">
    <div class="section-container">
      <div class="footer-compact-inner">
        <a href="#hero" aria-label="Luvi Unisex Saloon & Spa">
          <img src="${headerLogo}" alt="Luvi Unisex Spa" class="footer-compact-logo" onerror="this.src='${logo}'" />
        </a>
        <div class="footer-compact-contact">
          No.46/2, Banjara Layout, 2nd Floor, Above Ramdev Medical, Near Horamavu BBMP Office, Bengaluru &bull; 
          <a href="tel:+919900677879">+91 99006 77879</a>
        </div>
        <div class="footer-compact-hours">
          Visiting Hours: Monday – Sunday: 9:00 AM – 9:00 PM
        </div>
        <div class="footer-compact-copy">
          &copy; 2026 Luvi Unisex Saloon & Spa. All rights reserved.
        </div>
      </div>
    </div>
  </footer>

  <!-- Single Floating WhatsApp Button in Authentic WhatsApp Theme -->
  <div class="concierge-dock" aria-label="Quick WhatsApp Concierge">
    <a 
      href="https://wa.me/919900677879?text=Hello%20Luvi%20Spa,%20I%20would%20like%20to%20inquire%20and%20book%20an%20appointment" 
      target="_blank" 
      rel="noopener noreferrer" 
      class="concierge-whatsapp-btn" 
      aria-label="Chat with Luvi Spa on WhatsApp"
    >
      ${icon('whatsapp-official')}
      <span class="dock-tooltip">Chat with us on WhatsApp</span>
    </a>
  </div>

  <!-- Interactive Booking Modal -->
  <div class="modal-overlay" id="booking-modal" aria-hidden="true">
    <div class="modal-card">
      <button type="button" class="modal-close-btn js-close-modal" aria-label="Close dialog">
        ${icon('close')}
      </button>
      <div class="modal-header">
        <h3 class="modal-title">Reserve Your Ritual</h3>
        <p class="modal-sub">Tell us your preferred service and schedule. Our concierge responds promptly.</p>
      </div>
      <form class="booking-form" id="booking-form">
        <div class="form-group">
          <label for="booking-service">Selected Treatment</label>
          <select id="booking-service" class="form-control">
            <option value="Ayurvedic Shirodhara Revival">Ayurvedic Shirodhara Revival (Signature)</option>
            <option value="Volcanic Basalt Stone Therapy">Volcanic Basalt Stone Therapy (Signature)</option>
            <option value="Royal Four-Hands Synchronized Massage">Royal Four-Hands Synchronized Massage (Signature)</option>
            <option value="Traditional Droni Table Ritual">Traditional Droni Table Ritual (Signature)</option>
            <option value="Deep Tissue / Deep Muscle Recovery Massage">Deep Tissue / Deep Muscle Recovery Massage</option>
            <option value="Hot Stone Therapy (Heated Basalt Stones)">Hot Stone Therapy (Heated Basalt Stones)</option>
            <option value="Aromatherapy Massage">Aromatherapy Massage</option>
            <option value="Aromatic Mineral Body Scrub">Aromatic Mineral Body Scrub</option>
            <option value="Stress-Relief Head & Scalp Massage">Stress-Relief Head & Scalp Massage</option>
            <option value="Foot Reflexology">Foot Reflexology</option>
            <option value="General Sanctuary Inquiry">General Sanctuary Inquiry</option>
          </select>
        </div>
        <div class="form-group">
          <label for="booking-date">Preferred Date</label>
          <input type="date" id="booking-date" class="form-control" />
        </div>
        <div class="form-group">
          <label for="booking-time">Preferred Time</label>
          <select id="booking-time" class="form-control">
            <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
            <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
            <option value="Evening (4:00 PM - 9:00 PM)">Evening (4:00 PM - 9:00 PM)</option>
          </select>
        </div>
        <div class="modal-actions">
          <button type="button" class="btn-modal-wa" id="btn-submit-wa">
            ${icon('whatsapp')} Book via WhatsApp
          </button>
          <a href="tel:+919900677879" class="btn-modal-call">
            ${icon('phone')} Call Reception
          </a>
        </div>
      </form>
    </div>
  </div>
`;

// Modal & Mobile Drawer Logic
const modal = document.querySelector<HTMLDivElement>('#booking-modal');
const serviceSelect = document.querySelector<HTMLSelectElement>('#booking-service');
const dateInput = document.querySelector<HTMLInputElement>('#booking-date');
const timeSelect = document.querySelector<HTMLSelectElement>('#booking-time');
const mobileDrawer = document.querySelector<HTMLDivElement>('#mobile-drawer');

// Set default date to today
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.value = today;
  dateInput.min = today;
}

// Open booking modal
document.querySelectorAll('.js-open-booking').forEach((button) => {
  button.addEventListener('click', (e) => {
    const target = e.currentTarget as HTMLElement;
    const serviceName = target.getAttribute('data-service');
    if (serviceSelect && serviceName) {
      for (let i = 0; i < serviceSelect.options.length; i++) {
        if (serviceSelect.options[i].value.includes(serviceName) || serviceName.includes(serviceSelect.options[i].value)) {
          serviceSelect.selectedIndex = i;
          break;
        }
      }
    }
    if (modal) {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
    }
  });
});

// Close booking modal
document.querySelectorAll('.js-close-modal').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    }
  });
});

if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    }
  });
}

// Mobile drawer toggle
document.querySelectorAll('.js-toggle-drawer').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (mobileDrawer) {
      mobileDrawer.classList.toggle('active');
      mobileDrawer.setAttribute('aria-hidden', mobileDrawer.classList.contains('active') ? 'false' : 'true');
    }
  });
});

document.querySelectorAll('.js-close-drawer').forEach((el) => {
  el.addEventListener('click', () => {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('active');
      mobileDrawer.setAttribute('aria-hidden', 'true');
    }
  });
});

// WhatsApp Booking Submit
const waBtn = document.querySelector<HTMLButtonElement>('#btn-submit-wa');
if (waBtn) {
  waBtn.addEventListener('click', () => {
    const selectedService = serviceSelect?.value || 'Spa Ritual';
    const selectedDate = dateInput?.value || 'Soon';
    const selectedTime = timeSelect?.value || 'Anytime';
    const text = encodeURIComponent(`Hello Luvi Unisex Spa, I would like to book an appointment for ${selectedService} on ${selectedDate} around ${selectedTime}.`);
    window.open(`https://wa.me/919900677879?text=${text}`, '_blank');
  });
}

// ==========================================================================
// Signature Rituals in Motion - Smooth Continuous Auto-Slide Controller
// ==========================================================================
let currentRitualIdx = 0;
let ritualTimer: number | null = null;

function showRitual(index: number) {
  const slides = document.querySelectorAll<HTMLElement>('.showcase-slide');
  const dots = document.querySelectorAll<HTMLElement>('.showcase-dot');
  const counter = document.getElementById('ritual-current-num');
  const tag = document.getElementById('ritual-tag');
  const title = document.getElementById('ritual-title');
  const desc = document.getElementById('ritual-desc');
  const highlights = document.getElementById('ritual-highlights');
  const bookBtn = document.getElementById('ritual-book-btn');
  const panel = document.querySelector<HTMLElement>('.showcase-info-panel');

  if (index < 0) index = signatureRituals.length - 1;
  if (index >= signatureRituals.length) index = 0;
  currentRitualIdx = index;

  const data = signatureRituals[index];

  slides.forEach((s) => {
    const idx = Number(s.getAttribute('data-index'));
    s.classList.toggle('active', idx === index);
  });
  dots.forEach((d) => {
    const idx = Number(d.getAttribute('data-index'));
    d.classList.toggle('active', idx === index);
  });

  if (panel) panel.style.opacity = '0.35';
  setTimeout(() => {
    if (counter) counter.textContent = `0${index + 1}`;
    if (tag) tag.textContent = data.tag;
    if (title) title.textContent = data.title;
    if (desc) desc.textContent = data.desc;
    if (highlights) {
      highlights.innerHTML = data.highlights
        .map((h) => `<li class="showcase-highlight-item"><span class="highlight-bullet">✦</span> ${h}</li>`)
        .join('');
    }
    if (bookBtn) {
      bookBtn.setAttribute('data-service', data.title);
    }
    if (panel) panel.style.opacity = '1';
  }, 160);
}

function startRitualAutoPlay() {
  stopRitualAutoPlay();
  ritualTimer = window.setInterval(() => {
    showRitual(currentRitualIdx + 1);
  }, 4000);
}

function stopRitualAutoPlay() {
  if (ritualTimer) {
    clearInterval(ritualTimer);
    ritualTimer = null;
  }
}

// Next / Prev button triggers
document.getElementById('btn-ritual-prev')?.addEventListener('click', (e) => {
  e.stopPropagation();
  showRitual(currentRitualIdx - 1);
  startRitualAutoPlay();
});

document.getElementById('btn-ritual-next')?.addEventListener('click', (e) => {
  e.stopPropagation();
  showRitual(currentRitualIdx + 1);
  startRitualAutoPlay();
});

// Clickable dot triggers
document.querySelectorAll('.showcase-dot').forEach((dot) => {
  dot.addEventListener('click', (e) => {
    const target = e.currentTarget as HTMLElement;
    const idx = Number(target.getAttribute('data-index'));
    if (!isNaN(idx)) {
      showRitual(idx);
      startRitualAutoPlay();
    }
  });
});

// Start initial autoplay (smooth continuous auto-slide)
startRitualAutoPlay();


// ==========================================================================
// SCROLL REVEAL & STATS COUNTER ANIMATIONS
// ==========================================================================

// ==========================================================================
// SCROLL REVEAL & STATS COUNTER ANIMATIONS
// ==========================================================================

function initScrollReveal() {
  const revealElements = document.querySelectorAll<HTMLElement>('.reveal-on-scroll');
  if (!revealElements.length) return;

  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
  );

  revealElements.forEach((el, index) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      // Element is visible on load: trigger with visible staggered entrance
      setTimeout(() => el.classList.add('is-revealed'), 120 + (index % 5) * 80);
    } else {
      if (el.classList.contains('service-card') || el.classList.contains('atmosphere-card') || el.classList.contains('stat-item')) {
        const delay = (index % 6) * 0.12;
        el.style.transitionDelay = `${delay}s`;
      }
      revealObserver.observe(el);
    }
  });
}

function initStatsCounters() {
  const counterElements = document.querySelectorAll<HTMLElement>('.js-counter');
  if (!counterElements.length) return;

  const counterObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const target = parseFloat(el.getAttribute('data-target') || '0');
          const format = el.getAttribute('data-format') || '';
          const finalVal = el.getAttribute('data-val') || `${target}${format}`;
          const duration = 2200; // 2.2 seconds smooth luxury count
          const startTime = performance.now();

          const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Smooth easeOutExpo formula
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = Math.floor(ease * target);

            if (format === 'k+') {
              if (progress >= 1) {
                el.textContent = '5K+';
              } else {
                const kFloat = (current / 1000).toFixed(1);
                el.textContent = `${kFloat.endsWith('.0') ? kFloat.slice(0, -2) : kFloat}K+`;
              }
            } else if (format === '+') {
              el.textContent = progress >= 1 ? finalVal : `${current}+`;
            } else if (format === '%') {
              el.textContent = progress >= 1 ? finalVal : `${current}%`;
            } else {
              el.textContent = `${current}`;
            }

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              el.classList.add('counter-finished');
            }
          };

          requestAnimationFrame(step);
          obs.unobserve(el);
        }
      });
    },
    { threshold: 0.35 }
  );

  counterElements.forEach((c) => counterObserver.observe(c));
}

// Initialize scroll reveal and counter animations
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initStatsCounters();
  });
} else {
  initScrollReveal();
  initStatsCounters();
}
