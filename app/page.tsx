"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* NAV */}
      <nav>
        <div className="nav-logo">
          <Image src="/logo-gold.png" alt="Premier Elite Coaching" width={160} height={52} style={{ height: 52, width: "auto" }} />
        </div>
        <ul className="nav-links">
          <li><a href="#why">Why Specialize</a></li>
          <li><a href="#framework">Framework</a></li>
          <li><a href="#about">About Jessica</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Work With Jessica</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <div className="hero-eyebrow fade-up">Real Estate Coaching</div>
          <h1 className="fade-up delay-1">
            Stop Competing.<br />
            Start <em>Commanding.</em>
          </h1>
          <p className="hero-sub fade-up delay-2">
            Premier Elite Coaching helps real estate professionals break out of the generalist cycle and step into niche markets — luxury, land, equestrian, waterfront — where authority lives and deals are won.
          </p>
          <div className="hero-actions fade-up delay-3">
            <a href="#contact" className="btn-primary">Apply to Work With Jessica</a>
            <a href="#framework" className="btn-ghost">See the Framework</a>
          </div>
        </div>
        <div className="hero-image fade-up delay-2">
          <div className="hero-image-frame">
            <Image src="/jessica-headshot.jpg" alt="Coach Jessica" fill style={{ objectFit: "cover", objectPosition: "top" }} priority />
            <div className="hero-credential">
              <span className="num">12+</span>
              <span className="label">Years Real Estate<br />Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS DIVIDER */}
      <div className="divider">
        <div className="divider-item"><span className="divider-dot"></span>John Maxwell Certified Trainer</div>
        <div className="divider-sep"></div>
        <div className="divider-item"><span className="divider-dot"></span>Certified EQ Practitioner</div>
        <div className="divider-sep"></div>
        <div className="divider-item"><span className="divider-dot"></span>High-Level Negotiation Trained</div>
        <div className="divider-sep"></div>
        <div className="divider-item"><span className="divider-dot"></span>EVP, 400 North Board of REALTORS®</div>
      </div>

      {/* WHY SPECIALIZATION */}
      <section className="section" id="why">
        <div className="why-grid">
          <div className="why-left">
            <div className="section-label">The Shift</div>
            <h2 className="section-title">Why Specialization<br /><em>Changes Everything</em></h2>
            <p>Most agents stay stuck because they try to be everything to everyone. The result? More competition, constant price pressure, and a business built on chasing instead of attracting.</p>
            <p>Specialists play a different game. They don&apos;t compete on volume — they compete on expertise, positioning, and authority. Instead of fighting for deals, they become the agent people seek out.</p>
            <p>Being a specialist isn&apos;t about limiting your business. It&apos;s about elevating it.</p>
          </div>
          <div className="why-right">
            <div className="why-stat">
              <div className="why-stat-icon">◈</div>
              <h4>Higher Price Points</h4>
              <p>Niche markets command premium fees and attract higher-caliber clients.</p>
            </div>
            <div className="why-stat">
              <div className="why-stat-icon">◈</div>
              <h4>Stronger Leverage</h4>
              <p>Specialist authority translates directly to negotiation power.</p>
            </div>
            <div className="why-stat">
              <div className="why-stat-icon">◈</div>
              <h4>Fewer Competitors</h4>
              <p>Operate in lanes most agents never even know exist.</p>
            </div>
            <div className="why-stat">
              <div className="why-stat-icon">◈</div>
              <h4>Better-Quality Clients</h4>
              <p>Attract instead of chase. Trust builds faster at the top.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FRAMEWORK */}
      <section className="framework" id="framework">
        <div className="framework-inner">
          <div className="section-label">The System</div>
          <h2 className="section-title">The Premier Elite<br /><em>Framework™</em></h2>
          <div className="framework-steps">
            <div className="framework-step">
              <span className="step-num">01</span>
              <span className="step-tag">Step One</span>
              <h3>Position Like an Authority</h3>
            </div>
            <div className="framework-step">
              <span className="step-num">02</span>
              <span className="step-tag">Step Two</span>
              <h3>Build a Power Network</h3>
            </div>
            <div className="framework-step">
              <span className="step-num">03</span>
              <span className="step-tag">Step Three</span>
              <h3>Master Negotiation &amp; Influence</h3>
            </div>
            <div className="framework-step">
              <span className="step-num">04</span>
              <span className="step-tag">Step Four</span>
              <h3>Execute at an Elite Level</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-grid">
          <div className="about-image-wrap">
            <div className="about-gold-line"></div>
            <Image className="about-img" src="/jessica-headshot.jpg" alt="Coach Jessica" width={400} height={533} style={{ width: "100%", height: "auto" }} />
          </div>
          <div className="about-text">
            <div className="section-label">Meet Your Coach</div>
            <h2 className="section-title">Coach Jessica<br /><em>Founder, Premier Elite Coaching</em></h2>
            <p>Coach Jessica is not in the business of creating average agents — and she doesn&apos;t apologize for it. A Georgia native with over a decade of coaching experience and 12+ years in real estate, she has coached hundreds of agents inside one of the largest real estate environments in the country.</p>
            <p>Her specialty? Teaching agents how to move into premier and niche property categories — luxury, land, equestrian, waterfront, and beyond — where fewer competitors operate and higher-level deals are won.</p>
            <p>Beyond strategy, Jessica brings direct access to a deep network across Metro Atlanta: lenders, attorneys, inspectors, and specialty vendors who strengthen her clients&apos; credibility and open doors most agents never find.</p>
            <div className="about-credentials">
              <span className="credential-tag">John Maxwell Certified</span>
              <span className="credential-tag">EQ Practitioner</span>
              <span className="credential-tag">Negotiation Specialist</span>
              <span className="credential-tag">EVP, 400 North Board of REALTORS®</span>
              <span className="credential-tag">Metro Atlanta Network</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="section-label">Get Started</div>
          <h2 className="section-title">Ready to Think<br /><em>Bigger?</em></h2>
          <p>This coaching is not for those looking to &quot;try harder.&quot; It&apos;s for agents ready to think bigger, operate smarter, and build a business that commands attention.</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Tell Jessica About Your Business</label>
              <textarea id="message" name="message" placeholder="Where are you now, and where do you want to go?" required></textarea>
            </div>
            <button
              type="submit"
              className="form-submit"
              disabled={submitted}
              style={submitted ? { background: "rgba(184,150,46,0.3)", color: "var(--gold-light)" } : {}}
            >
              {submitted ? "Submitted — We'll Be in Touch" : "Send My Application →"}
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <Image src="/logo-gold.png" alt="Premier Elite Coaching" width={120} height={36} style={{ height: 36, width: "auto", opacity: 0.7 }} />
        <p>© 2026 Premier Elite Coaching. All rights reserved.</p>
      </footer>
    </>
  );
}
