(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(s){if(s.ep)return;s.ep=!0;const t=i(s);fetch(s.href,t)}})();const N=()=>(typeof window<"u"?window.location.pathname:"/").includes("/luvispa")?"/luvispa/":"./",l=N(),O=`${l}images/hero-sanctuary-bg.jpg`,z=`${l}images/hero-sanctuary-bg-mobile.jpg`,L=`${l}brand-logo-transparent.png`,B=`${l}brand-logo-header-transparent.png`,W=`${l}images/about-organic-products.jpg`,V=`${l}images/spa-product-animation.mp4`,U=`${l}images/reception-hero.png`,T=`${l}images/treatment-bed.png`,G=`${l}images/wooden-door-opening.mp4`,n=e=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" width="22" height="22">${{arrow:'<path d="M5 12h14M13 5l7 7-7 7"/>',phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',whatsapp:'<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',"whatsapp-official":'<path fill="currentColor" stroke="none" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.838 11.838 0 005.71 1.47h.005c6.554 0 11.89-5.335 11.893-11.894a11.82 11.82 0 00-3.468-8.438" />',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',pin:'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',menu:'<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',branch:'<path d="M3 21C11 21 16 14 18 3"/><path d="M12.5 13C16 12 18.5 9 19 6C16 6.5 13 9 12.5 13Z"/><path d="M8 17.5C11 17 13 14.5 13.5 12C11 12.5 8.5 14.5 8 17.5Z"/><path d="M16 8C19 7 21 4 21 2C18 2 15 4 16 8Z"/>',"hot-stones":'<ellipse cx="12" cy="18" rx="8" ry="3.5"/><ellipse cx="12" cy="12" rx="5.5" ry="2.8"/><path d="M9 6.5c1-1 1-2 0-3M12 6.5c1-1 1-2 0-3M15 6.5c1-1 1-2 0-3"/>',lotus:'<path d="M12 3.5c-1.8 3.2-2.8 6.5-2.8 9.5 0 3 1.2 5 2.8 7.5 1.6-2.5 2.8-4.5 2.8-7.5 0-3-1-6.3-2.8-9.5z"/><path d="M12 13c-3-1.8-6.5-1.8-9.2 0 1.8 2.8 4.2 4.2 7.2 4.7"/><path d="M12 13c3-1.8 6.5-1.8 9.2 0-1.8 2.8-4.2 4.2-7.2 4.7"/><path d="M12 17c-2 1.3-4.2 1.7-6.5 1.7 1.8 1.4 3.8 1.8 5.5 2"/><path d="M12 17c2 1.3 4.2 1.7 6.5 1.7-1.8 1.4-3.8 1.8-5.5 2"/>',mortar:'<path d="M4 11.5c0 5 3.6 9 8 9s8-4 8-9H4z"/><path d="M3 11.5h18"/><path d="m14.5 3.5-3.5 8"/><path d="M8.5 20.5h7"/>',care:'<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>',skincare:'<rect x="6" y="9" width="12" height="12" rx="3"/><path d="M9 9V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v3"/><path d="M12 2.5v2"/><path d="M12 13.5c-1 0-1.8.8-1.8 1.8 0 1.2 1.8 2.7 1.8 2.7s1.8-1.5 1.8-2.7c0-1-.8-1.8-1.8-1.8z"/>',"herbal-compress":'<path d="M12 2.5v5.5"/><path d="M9.5 4h5"/><path d="M8.5 8h7l2 3.5c.8 1.8.6 3.8-.4 5.2-1.4 2-3.8 2.8-5.1 2.8s-3.7-.8-5.1-2.8c-1-1.4-1.2-3.4-.4-5.2l2-3.5z"/><path d="M9 13.5c1.8 1.2 4.2 1.2 6 0"/>'}[e]}</svg>`,Y=[{id:"deep-tissue",tag:"Muscle Recovery",title:"Deep Tissue / Deep Muscle Recovery Massage",desc:"Targeted deep neuromuscular pressure to dissolve persistent tension knots, relieve shoulder stiffness, and restore full bodily mobility.",image:`${l}images/service-deep-tissue.jpg`,badge:"Therapeutic Relief",iconName:"hot-stones"},{id:"hot-stone",tag:"Heated Basalt",title:"Hot Stone Therapy (Heated Basalt Stones)",desc:"Smooth volcanic basalt stones warmed to soothing temperatures, placed along energy pathways to melt away fatigue and promote deep healing.",image:`${l}images/service-hot-stone.jpg`,badge:"Deep Warmth",iconName:"hot-stones"},{id:"aromatherapy",tag:"Aromatic Healing",title:"Aromatherapy Massage",desc:"Custom-blended cold-pressed essential botanical oils smoothed with rhythmic strokes to calm the nervous system and restore mental tranquility.",image:`${l}images/service-aromatherapy.jpg`,badge:"Pure Botanicals",iconName:"branch"},{id:"body-scrub",tag:"Skin Renewal",title:"Aromatic Mineral Body Scrub",desc:"Pure sea mineral crystals and nourishing botanical elixirs buff away dull surface cells, leaving skin velvety soft, purified, and glowing.",image:`${l}images/service-body-scrub.jpg`,badge:"Exfoliating Glow",iconName:"herbal-compress"},{id:"head-scalp",tag:"Tension Release",title:"Stress-Relief Head & Scalp Massage",desc:"Focused acupressure across the temples, crown, and neck to soothe digital eye fatigue, alleviate headaches, and induce profound peace.",image:`${l}images/service-head-scalp.jpg`,badge:"Mental Calm",iconName:"lotus"},{id:"foot-reflexology",tag:"Whole-Body Balance",title:"Foot Reflexology",desc:"Traditional stimulation of vital reflex zones in the soles and lower legs to balance internal body energy and revitalize tired, aching feet.",image:`${l}images/service-foot-reflexology.jpg`,badge:"Acupressure",iconName:"mortar"}],u=[{id:"shirodhara-3d",title:"Ayurvedic Shirodhara Revival",tag:"Mind & Scalp Sanctuary",desc:"An ancient restorative therapy where a rhythmic stream of warm medicated herbal oil is poured gently over the third-eye chakra, releasing chronic mental fatigue and inducing meditative peace.",image:`${l}images/ritual-shirodhara-3d.jpg`,badge:"3D Pop-Out Frame",therapist:"Certified Ayurvedic Specialist",highlights:["Ajna Chakra Stream","Deep Scalp Tension Release","Warm Medicated Herbal Oil"]},{id:"hot-stone-3d",title:"Volcanic Basalt Stone Therapy",tag:"Deep Thermal Relief",desc:"Hand-selected volcanic basalt stones heated to thermal perfection and placed along energy meridians to dissolve deep muscle spasms, stimulate micro-circulation, and restore vital bodily warmth.",image:`${l}images/ritual-hot-stone-3d.jpg`,badge:"3D Pop-Out Frame",therapist:"Certified Massage Therapist",highlights:["Heated Basalt Stones","Deep Muscular Release","Aromatic Oil Nourishment"]},{id:"four-hands",title:"Royal Four-Hands Synchronized Massage",tag:"Dual-Therapist Harmony",desc:"Two certified therapists working in complete synchronized choreography to provide an immersive full-body massage that balances both brain hemispheres and delivers intense restorative relaxation.",image:`${l}images/ritual-four-hands.jpg`,badge:"Signature Royal Ritual",therapist:"Dual-Therapist Team",highlights:["Choreographed Strokes","Full-Body Rebalance","Traditional Brass Diyas"]},{id:"shirodhara-droni",title:"Traditional Droni Table Ritual",tag:"Authentic Ayurvedic Setup",desc:"Conducted on a traditional handcrafted wooden Droni bed with continuous warm botanical oil infusions, purifying internal energy channels and dissolving deep-seated physical stress.",image:`${l}images/ritual-shirodhara-droni.jpg`,badge:"Ayurvedic Droni Suite",therapist:"Holistic Wellness Master",highlights:["Handcrafted Wooden Droni","Continuous Warm Infusion","Holistic Mind Detox"]}],R=[{id:"massage",name:"Massage Therapies",subtitle:"Authentic therapeutic bodywork conducted in private sanitized suites with warm herbal oils.",iconName:"hot-stones",items:[{id:"deep-tissue",name:"Deep Tissue Massage",desc:"Focused neuromuscular pressure to dissolve chronic tension knots, shoulder stiffness, and postural fatigue.",tag:"Most Popular",prices:[{duration:"60 Min",price:2e3},{duration:"90 Min",price:3e3}]},{id:"swedish",name:"Swedish Relaxation Massage",desc:"Classic European rhythmic long gliding strokes to enhance lymphatic circulation, soothe nerves, and induce peace.",prices:[{duration:"60 Min",price:1800},{duration:"90 Min",price:2500}]},{id:"aroma",name:"Aromatherapy Healing Massage",desc:"Pure cold-pressed botanical essential elixirs warmed and smoothed across tension points for deep mental tranquility.",tag:"Botanical",prices:[{duration:"60 Min",price:1800},{duration:"90 Min",price:3e3}]},{id:"lomi-lomi",name:"Lomi Lomi Hawaiian Massage",desc:"Continuous wave-like rhythmic forearm motions balancing energy flow and delivering whole-body release.",prices:[{duration:"60 Min",price:2e3},{duration:"90 Min",price:3e3}]},{id:"balinese",name:"Balinese / Gentle Relaxing Massage",desc:"Holistic fusion of gentle acupressure, gentle stretching, and soothing warm floral aroma oils.",prices:[{duration:"60 Min",price:2e3},{duration:"90 Min",price:3e3}]},{id:"basic-massage",name:"Basic Full Body Massage",desc:"Essential full-body relaxation therapy targeting daily muscular stiffness and everyday stress.",prices:[{duration:"60 Min",price:1800},{duration:"90 Min",price:3e3}]},{id:"body-polish",name:"Body Polish Revival",desc:"Complete full-body gentle exfoliation and intense botanical hydration, leaving skin radiant and silky smooth.",tag:"Skin Glow",prices:[{duration:"Full Session",price:3e3}]},{id:"body-scrub",name:"Aromatic Mineral Body Scrub",desc:"Pure sea mineral crystals and Himalayan rose salts buffing away dead cells and restoring cellular vitality.",prices:[{duration:"Full Session",price:2e3}]}]},{id:"hair-spa",name:"Hair Spa & Care",subtitle:"Nourishing salon scalp treatments, deep cream baths, and professional blow dry styling.",iconName:"branch",items:[{id:"basic-hair-spa",name:"Basic Nourishing Hair Spa",desc:"Deep-conditioning herbal cream massage, scalp steam infusion, and vitalizing rinse for soft, radiant hair.",prices:[{duration:"Session",price:1e3}]},{id:"hair-treatment",name:"Intense Hair & Scalp Treatment",desc:"Specialized therapy repairing split ends, severe frizz, and dry scalp while strengthening hair follicles.",tag:"Deep Repair",prices:[{duration:"Therapy",price:2e3}]},{id:"wash-blowing",name:"Hair Wash & Blow Dry / Styling",desc:"Relaxing botanical shampoo cleanse followed by professional blow dry, volume lift, and finishing gloss.",prices:[{duration:"Styling",price:1e3}]},{id:"only-wash",name:"Quick Botanical Hair Wash",desc:"Fast refreshing scalp cleanse with premium salon botanical shampoo and gentle conditioning.",prices:[{duration:"Express",price:300}]}]},{id:"gents-haircut",name:"Gents Grooming",subtitle:"Precision scissor styling, facial beard detailing, and clean luxury traditional shaves.",iconName:"care",items:[{id:"hair-cut",name:"Gents Hair Cut & Styling",desc:"Custom scissor & clipper precision haircut sculpted to your personal facial structure by senior stylists.",tag:"Signature",prices:[{duration:"Cut & Style",price:150}]},{id:"beard",name:"Beard Trimming & Shaping",desc:"Sharp jawline symmetry, razor line detailing, and nourishing beard oil finish.",prices:[{duration:"Sculpting",price:100}]},{id:"shaving",name:"Hot Towel Luxury Shave",desc:"Classic barbershop shave with warm steam prep, rich protective cream lather, and cooling aftershave balm.",prices:[{duration:"Shave",price:150}]},{id:"clean-shave",name:"Quick Clean Shave",desc:"Smooth, clean single-pass razor shave for a fresh, polished daily appearance.",prices:[{duration:"Express",price:100}]}]}],D=document.querySelector("#app");if(!D)throw new Error("App root element not found");D.innerHTML=`
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
          <a href="#menu" class="nav-link">Menu &amp; Tariffs</a>
        </div>

        <!-- Center: Transparent Brand Logo -->
        <div class="nav-center-logo">
          <a href="#hero" aria-label="Luvi Unisex Saloon & Spa Home">
            <img 
              src="${B}" 
              alt="Luvi Unisex Saloon & Spa" 
              class="nav-brand-logo" 
              onerror="this.src='${L}'" 
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
          ${n("menu")}
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Navigation Drawer -->
  <div class="mobile-drawer" id="mobile-drawer" aria-hidden="true">
    <div class="drawer-panel">
      <div class="drawer-header">
        <img src="${L}" alt="Luvi Spa" style="height: 44px; width: auto; background: transparent; mix-blend-mode: screen;" />
        <button type="button" class="modal-close-btn js-close-drawer" aria-label="Close drawer">
          ${n("close")}
        </button>
      </div>
      <div class="drawer-links">
        <a href="#hero" class="drawer-link js-close-drawer">Home</a>
        <a href="#about" class="drawer-link js-close-drawer">About Sanctuary</a>
        <a href="#services" class="drawer-link js-close-drawer">Spa Services</a>
        <a href="#menu" class="drawer-link js-close-drawer">Treatment Menu &amp; Pricing</a>
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
    <section class="hero-section" id="hero">
      <!-- Dedicated High-Visibility Hero Background Layer -->
      <div class="hero-bg-layer" aria-hidden="true">
        <picture class="hero-bg-picture">
          <source media="(max-width: 768px)" srcset="${z}" />
          <img 
            src="${O}" 
            class="hero-bg-image" 
            alt="Luvi Spa Sanctuary" 
            loading="eager"
            onerror="this.src='./images/hero-sanctuary-bg.jpg'" 
          />
        </picture>
        <div class="hero-bg-overlay"></div>
      </div>
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
                Book Your Experience ${n("arrow")}
              </button>
              <a href="#about" class="btn-outline-pill">
                About Us
              </a>
            </div>
            <!-- Authentic Spa Trust Badges with Real Vector Emblems -->
            <div class="hero-trust-badges">
              <div class="trust-badge-item">
                <div class="trust-badge-icon">${n("branch")}</div>
                <span>Natural Products</span>
              </div>
              <div class="trust-badge-item">
                <div class="trust-badge-icon">${n("hot-stones")}</div>
                <span>Expert Therapists</span>
              </div>
              <div class="trust-badge-item">
                <div class="trust-badge-icon">${n("lotus")}</div>
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
                src="${V}"
                autoplay
                loop
                muted
                playsinline
                webkit-playsinline
                poster="${W}"
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
                <div class="about-badge-icon">${n("lotus")}</div>
                <div class="about-badge-label">Holistic Approach</div>
              </div>
              <div class="about-badge-card">
                <div class="about-badge-icon">${n("mortar")}</div>
                <div class="about-badge-label">Organic Products</div>
              </div>
              <div class="about-badge-card">
                <div class="about-badge-icon">${n("care")}</div>
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
          ${Y.map(e=>`
            <article class="service-card reveal-on-scroll" id="service-${e.id}">
              <div class="service-card-media">
                <img src="${e.image}" alt="${e.title}" loading="lazy" />
                <span class="service-badge-pill">${e.badge}</span>
              </div>
              <div class="service-card-body">
                <div class="service-card-icon-circle">
                  ${n(e.iconName)}
                </div>
                <h3 class="service-card-title">${e.title}</h3>
                <p class="service-card-desc">${e.desc}</p>
                <button type="button" class="service-card-link js-open-booking" data-service="${e.title}">
                  Book Ritual ${n("arrow")}
                </button>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- 3.5 Treatment Menu & Tariffs (Client Official Rate Card & Salon Services) -->
    <section class="menu-tariffs-section" id="menu">
      <div class="section-container">
        <div class="section-header-center reveal-on-scroll">
          <div class="luxury-title-wrap center">
            <span class="luxury-serif-eyebrow reveal-on-scroll"><span class="eyebrow-sparkle">✦</span> Treatment Menu &amp; Tariffs <span class="eyebrow-sparkle">✦</span></span>
          </div>
          <h2 class="section-title reveal-on-scroll">Spa &amp; Salon Price List</h2>
          <p class="section-subtitle reveal-on-scroll">
            Transparent pricing for authentic therapeutic bodywork, revitalizing hair spa, and precision grooming in Horamavu.
          </p>
        </div>

        <!-- Luxury Interactive Tab Switcher -->
        <div class="tariff-tabs-nav reveal-on-scroll" role="tablist">
          ${R.map((e,r)=>`
            <button 
              type="button" 
              class="tariff-tab-btn ${r===0?"active":""}" 
              data-tab="${e.id}" 
              role="tab" 
              aria-selected="${r===0?"true":"false"}"
            >
              <span class="tab-btn-icon">${n(e.iconName)}</span>
              <span class="tab-btn-text">${e.name}</span>
            </button>
          `).join("")}
        </div>

        <!-- Tariff Card Container (Compact & Contained in Single Screen) -->
        <div class="tariff-panels-container reveal-on-scroll">
          ${R.map((e,r)=>`
            <div class="tariff-category-panel ${r===0?"active":""}" id="panel-${e.id}" role="tabpanel">
              <div class="tariff-panel-header">
                <div class="tariff-panel-badge">${n(e.iconName)} ${e.name}</div>
                <div class="tariff-panel-subtitle">${e.subtitle}</div>
              </div>

              <div class="tariff-items-list">
                ${e.items.map(i=>`
                  <div class="tariff-item-row">
                    <div class="tariff-item-info">
                      <div class="tariff-item-title-wrap">
                        <h3 class="tariff-item-title">${i.name}</h3>
                        ${i.tag?`<span class="tariff-tag-badge">${i.tag}</span>`:""}
                      </div>
                      <p class="tariff-item-desc">${i.desc}</p>
                    </div>

                    <div class="tariff-pricing-group">
                      ${i.prices.map(a=>`
                        <div class="tariff-price-chip">
                          <span class="price-chip-duration">${a.duration}</span>
                          <span class="price-chip-val">₹${a.price.toLocaleString("en-IN")}</span>
                        </div>
                      `).join("")}
                      <button 
                        type="button" 
                        class="btn-tariff-book js-open-booking" 
                        data-service="${i.name}"
                        aria-label="Book ${i.name}"
                      >
                        Book ${n("arrow")}
                      </button>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          `).join("")}
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
              ${u.map((e,r)=>`
                <div class="showcase-slide ${r===0?"active":""}" data-index="${r}">
                  <img src="${e.image}" alt="${e.title} - Luvi Unisex Spa" loading="${r===0?"eager":"lazy"}" />
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Right: Details & Booking Panel -->
          <div class="showcase-info-panel">
            <div class="showcase-counter">
              <span id="ritual-current-num">01</span> / 04
            </div>
            <span class="showcase-tag-pill" id="ritual-tag">${u[0].tag}</span>
            <h3 class="showcase-ritual-title" id="ritual-title">${u[0].title}</h3>
            <p class="showcase-ritual-desc" id="ritual-desc">${u[0].desc}</p>
            
            <ul class="showcase-highlights-list" id="ritual-highlights">
              ${u[0].highlights.map(e=>`
                <li class="showcase-highlight-item"><span class="highlight-bullet">✦</span> ${e}</li>
              `).join("")}
            </ul>

            <div>
              <button type="button" class="btn-primary-pill js-open-booking" id="ritual-book-btn" data-service="${u[0].title}">
                Book This Ritual ${n("arrow")}
              </button>
            </div>
          </div>
        </div>

        <!-- Minimalist Indicator Dots -->
        <div class="showcase-dots-bar" id="showcase-dots" aria-label="Ritual slides">
          ${u.map((e,r)=>`
            <span class="showcase-dot ${r===0?"active":""}" data-index="${r}" role="button" tabindex="0" aria-label="Go to ritual ${r+1}"></span>
          `).join("")}
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
                <img src="${U}" alt="Luvi Spa Reception & Welcome Desk" loading="lazy" />
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
                src="${G}"
                autoplay
                loop
                muted
                playsinline
                poster="${T}"
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
                <img src="${T}" alt="Private Luvi Treatment Bed" loading="lazy" />
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
          <img src="${B}" alt="Luvi Unisex Spa" class="footer-compact-logo" onerror="this.src='${L}'" />
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
      ${n("whatsapp-official")}
      <span class="dock-tooltip">Chat with us on WhatsApp</span>
    </a>
  </div>

  <!-- Interactive Booking Modal -->
  <div class="modal-overlay" id="booking-modal" aria-hidden="true">
    <div class="modal-card">
      <button type="button" class="modal-close-btn js-close-modal" aria-label="Close dialog">
        ${n("close")}
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
            ${n("whatsapp")} Book via WhatsApp
          </button>
          <a href="tel:+919900677879" class="btn-modal-call">
            ${n("phone")} Call Reception
          </a>
        </div>
      </form>
    </div>
  </div>
`;const c=document.querySelector("#booking-modal"),p=document.querySelector("#booking-service"),f=document.querySelector("#booking-date"),C=document.querySelector("#booking-time"),m=document.querySelector("#mobile-drawer");if(f){const e=new Date().toISOString().split("T")[0];f.value=e,f.min=e}document.querySelectorAll(".js-open-booking").forEach(e=>{e.addEventListener("click",r=>{const a=r.currentTarget.getAttribute("data-service");if(p&&a){for(let s=0;s<p.options.length;s++)if(p.options[s].value.includes(a)||a.includes(p.options[s].value)){p.selectedIndex=s;break}}c&&(c.classList.add("active"),c.setAttribute("aria-hidden","false"))})});document.querySelectorAll(".js-close-modal").forEach(e=>{e.addEventListener("click",()=>{c&&(c.classList.remove("active"),c.setAttribute("aria-hidden","true"))})});c&&c.addEventListener("click",e=>{e.target===c&&(c.classList.remove("active"),c.setAttribute("aria-hidden","true"))});document.querySelectorAll(".js-toggle-drawer").forEach(e=>{e.addEventListener("click",()=>{m&&(m.classList.toggle("active"),m.setAttribute("aria-hidden",m.classList.contains("active")?"false":"true"))})});document.querySelectorAll(".js-close-drawer").forEach(e=>{e.addEventListener("click",()=>{m&&(m.classList.remove("active"),m.setAttribute("aria-hidden","true"))})});const q=document.querySelector("#btn-submit-wa");q&&q.addEventListener("click",()=>{const e=(p==null?void 0:p.value)||"Spa Ritual",r=(f==null?void 0:f.value)||"Soon",i=(C==null?void 0:C.value)||"Anytime",a=encodeURIComponent(`Hello Luvi Unisex Spa, I would like to book an appointment for ${e} on ${r} around ${i}.`);window.open(`https://wa.me/919900677879?text=${a}`,"_blank")});let k=0,M=null;function $(e){const r=document.querySelectorAll(".showcase-slide"),i=document.querySelectorAll(".showcase-dot"),a=document.getElementById("ritual-current-num"),s=document.getElementById("ritual-tag"),t=document.getElementById("ritual-title"),o=document.getElementById("ritual-desc"),v=document.getElementById("ritual-highlights"),y=document.getElementById("ritual-book-btn"),g=document.querySelector(".showcase-info-panel");e<0&&(e=u.length-1),e>=u.length&&(e=0),k=e;const h=u[e];r.forEach(d=>{const w=Number(d.getAttribute("data-index"));d.classList.toggle("active",w===e)}),i.forEach(d=>{const w=Number(d.getAttribute("data-index"));d.classList.toggle("active",w===e)}),g&&(g.style.opacity="0.35"),setTimeout(()=>{a&&(a.textContent=`0${e+1}`),s&&(s.textContent=h.tag),t&&(t.textContent=h.title),o&&(o.textContent=h.desc),v&&(v.innerHTML=h.highlights.map(d=>`<li class="showcase-highlight-item"><span class="highlight-bullet">✦</span> ${d}</li>`).join("")),y&&y.setAttribute("data-service",h.title),g&&(g.style.opacity="1")},160)}function A(){K(),M=window.setInterval(()=>{$(k+1)},4e3)}function K(){M&&(clearInterval(M),M=null)}var P;(P=document.getElementById("btn-ritual-prev"))==null||P.addEventListener("click",e=>{e.stopPropagation(),$(k-1),A()});var j;(j=document.getElementById("btn-ritual-next"))==null||j.addEventListener("click",e=>{e.stopPropagation(),$(k+1),A()});document.querySelectorAll(".showcase-dot").forEach(e=>{e.addEventListener("click",r=>{const i=r.currentTarget,a=Number(i.getAttribute("data-index"));isNaN(a)||($(a),A())})});A();function H(){const e=document.querySelector(".hero-section");e&&setTimeout(()=>e.classList.add("hero-visible"),180);const r=document.querySelectorAll(".reveal-on-scroll");if(!r.length)return;const i=new IntersectionObserver((a,s)=>{a.forEach(t=>{t.isIntersecting&&(t.target.classList.add("is-revealed"),s.unobserve(t.target))})},{threshold:.15,rootMargin:"0px 0px -40px 0px"});r.forEach((a,s)=>{const t=a.getBoundingClientRect();if(t.top>=0&&t.top<300)setTimeout(()=>a.classList.add("is-revealed"),250);else{if(a.classList.contains("service-card")||a.classList.contains("atmosphere-card")||a.classList.contains("stat-item")){const o=s%6*.1;a.style.transitionDelay=`${o}s`}i.observe(a)}})}function E(){const e=document.querySelectorAll(".js-counter");if(!e.length)return;const r=new IntersectionObserver((i,a)=>{i.forEach(s=>{if(s.isIntersecting){const t=s.target,o=parseFloat(t.getAttribute("data-target")||"0"),v=t.getAttribute("data-format")||"",y=t.getAttribute("data-val")||`${o}${v}`,g=2200,h=performance.now(),d=w=>{const I=w-h,b=Math.min(I/g,1),F=b===1?1:1-Math.pow(2,-10*b),S=Math.floor(F*o);if(v==="k+")if(b>=1)t.textContent="5K+";else{const x=(S/1e3).toFixed(1);t.textContent=`${x.endsWith(".0")?x.slice(0,-2):x}K+`}else v==="+"?t.textContent=b>=1?y:`${S}+`:v==="%"?t.textContent=b>=1?y:`${S}%`:t.textContent=`${S}`;b<1?requestAnimationFrame(d):t.classList.add("counter-finished")};requestAnimationFrame(d),a.unobserve(t)}})},{threshold:.35});e.forEach(i=>r.observe(i))}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".tariff-tab-btn"),r=document.querySelectorAll(".tariff-category-panel");e.forEach(a=>{a.addEventListener("click",()=>{const s=a.getAttribute("data-tab");if(!s)return;e.forEach(o=>{o.classList.remove("active"),o.setAttribute("aria-selected","false")}),a.classList.add("active"),a.setAttribute("aria-selected","true"),r.forEach(o=>{o.classList.remove("active")});const t=document.querySelector(`#panel-${s}`);t&&t.classList.add("active")})});const i=document.querySelector(".about-product-video");if(i){i.muted=!0,i.playsInline=!0;const a=()=>{i.paused&&i.play().catch(()=>{})};a(),document.addEventListener("touchstart",a,{once:!0,passive:!0}),document.addEventListener("click",a,{once:!0,passive:!0}),"IntersectionObserver"in window&&new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&a()})},{threshold:.15}).observe(i)}H(),E()});else{const e=document.querySelectorAll(".tariff-tab-btn"),r=document.querySelectorAll(".tariff-category-panel");e.forEach(a=>{a.addEventListener("click",()=>{const s=a.getAttribute("data-tab");if(!s)return;e.forEach(o=>{o.classList.remove("active"),o.setAttribute("aria-selected","false")}),a.classList.add("active"),a.setAttribute("aria-selected","true"),r.forEach(o=>{o.classList.remove("active")});const t=document.querySelector(`#panel-${s}`);t&&t.classList.add("active")})});const i=document.querySelector(".about-product-video");if(i){i.muted=!0,i.playsInline=!0;const a=()=>{i.paused&&i.play().catch(()=>{})};a(),document.addEventListener("touchstart",a,{once:!0,passive:!0}),document.addEventListener("click",a,{once:!0,passive:!0}),"IntersectionObserver"in window&&new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&a()})},{threshold:.15}).observe(i)}H(),E()}
