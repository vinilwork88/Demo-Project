import React, { useState } from "react";
import {
    MapPin, Clock, Search, ShoppingCart,
    Check, Phone, ChevronRight, Plus, Menu, X, MessageCircle, Zap, Bike
} from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

// ─── Theme Colors ──────────────────────────────────────────────────
const C = {
    primary: "#064E3B",    // Deep dark green (Footer, Headings)
    accent: "#10B981",     // Bright vibrant green (Buttons, Checkmarks)
    lightGreen: "#ECFDF5", // Very pale green (Contact cards background)
    textDark: "#1F2937",   // Dark gray text
    textGray: "#6B7280",   // Medium gray text
    white: "#FFFFFF",
};

// ─── High-Quality Dummy Images ─────────────────────────────────────
const IMAGES = {
    heroBg: "/images/background.png",
    basket: "https://images.unsplash.com/photo-1584308666744-24d5e4a8108a?auto=format&fit=crop&w=800&q=80",
};

// ─── Navbar ────────────────────────────────────────────────────────
function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav style={{ background: C.white, borderBottom: "1px solid #E5E7EB", position: "sticky", top: 0, zIndex: 100 }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

                {/* Logo */}
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ color: C.primary, display: "flex" }}><Plus size={36} strokeWidth={4} /></div>
                    <div style={{ lineHeight: 1.1 }}>
                        <div style={{ fontWeight: 800, fontSize: 24, color: C.primary, letterSpacing: "-0.5px" }}>MAA</div>
                        <div style={{ fontSize: 10, color: C.textDark, fontWeight: 700, letterSpacing: "0.5px" }}>MEDICAL & GENERAL STORES</div>
                    </div>
                </div>

                {/* Links */}
                <div className="nav-links" style={{ display: "flex", gap: 40, alignItems: "center" }}>
                    {["Home", "About Us", "Services"].map((link, i) => (
                        <a key={link} href="#" style={{
                            textDecoration: "none", color: i === 0 ? C.accent : C.textDark,
                            fontWeight: i === 0 ? 700 : 500, fontSize: 15,
                            borderBottom: i === 0 ? `2px solid ${C.accent}` : "none", paddingBottom: 4
                        }}>
                            {link}
                        </a>
                    ))}
                </div>

                {/* WhatsApp Button */}
                <button className="btn-hover hide-mobile" style={{
                    display: "flex", alignItems: "center", gap: 8, background: "#10B981", color: C.white,
                    padding: "10px 24px", borderRadius: "8px", border: "none", fontWeight: 600, fontSize: 15, cursor: "pointer"
                }}>
                    <FaWhatsapp size={18} /> WhatsApp Us
                </button>

                {/* Mobile Menu Toggle */}
                <button className="mobile-menu-btn" onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", color: C.primary }}>
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Inter', sans-serif; }
        h1, h2, h3, .serif-text { font-family: 'Playfair Display', serif; }
        
        @media (max-width: 900px) {
          .nav-links, .hide-mobile { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .hero-flex, .contact-grid, .footer-grid { flex-direction: column !important; grid-template-columns: 1fr !important; }
          .hero-image { display: none; }
        }
        
        .btn-hover { transition: all 0.2s ease; }
        .btn-hover:hover { opacity: 0.9; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        
        /* Grid pattern for the map card */
        .grid-pattern {
          background-color: ${C.lightGreen};
          background-image: 
            linear-gradient(to right, rgba(5, 150, 105, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(5, 150, 105, 0.08) 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>
        </nav>
    );
}

// ─── Hero Section ──────────────────────────────────────────────────
function Hero() {
    return (
        <section style={{
            padding: "80px 24px 120px",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#F4FBF9",
            backgroundImage: `linear-gradient(90deg, #F4FBF9 0%, #F4FBF9 50%, rgba(244, 251, 249, 0.8) 70%, rgba(244, 251, 249, 0) 100%), url('${IMAGES.heroBg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
        }}>
            <div className="hero-flex" style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 40, position: "relative", zIndex: 1 }}>

                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
                    <h1 style={{ fontSize: "clamp(44px, 5vw, 64px)", fontWeight: 800, color: C.primary, lineHeight: 1.1, marginBottom: 20, letterSpacing: "-1px" }}>
                        Your Health,<br />Our Priority
                    </h1>
                    <p style={{ fontSize: 16, color: C.textGray, lineHeight: 1.6, marginBottom: 32, maxWidth: 450 }}>
                        MAA Medical & General Stores is your trusted partner for all your medicines and healthcare needs.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
                        {["Genuine Medicines", "Best Prices", "Fast Home Delivery"].map(item => (
                            <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, color: C.textDark, fontWeight: 700, fontSize: 15 }}>
                                <div style={{ width: 24, height: 24, borderRadius: "50%", background: C.accent, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Check size={16} color={C.white} strokeWidth={3} />
                                </div>
                                {item}
                            </div>
                        ))}
                    </div>

                    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                        <button className="btn-hover" style={{ background: C.white, color: C.accent, padding: "14px 28px", borderRadius: 8, border: `2px solid ${C.accent}`, fontWeight: 700, fontSize: 16, display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                            <FaWhatsapp size={18} color={C.accent} /> WhatsApp Us
                        </button>
                    </div>
                </div>

                <div className="hero-image" style={{ flex: 1.2, display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                    <img src="/images/basket.png" alt="Medicines Basket" style={{ maxWidth: "600px", width: "100%", height: "auto", objectFit: "contain", dropShadow: "0 20px 40px rgba(0,0,0,0.1)" }} />
                </div>
            </div>
        </section>
    );
}

// ─── WhatsApp Delivery Section ─────────────────────────────────────
function WhatsAppDeliverySection() {
    const steps = [
        {
            icon: <MessageCircle size={24} color={C.accent} />,
            title: "1. Send a Message",
            desc: "Drop us a text with your medicine names or a photo of your prescription."
        },
        {
            icon: <MapPin size={24} color={C.accent} />,
            title: "2. Share Address",
            desc: "Send your delivery address or share your location directly in the chat."
        },
        {
            icon: <Zap size={24} color={C.accent} />,
            title: "3. Instant Packing",
            desc: "We check our shelves, confirm the price with you, and pack it instantly."
        },
        {
            icon: <Bike size={24} color={C.accent} />,
            title: "4. 10-Min Delivery",
            desc: "Our rider heads out immediately, reaching your doorstep in 10 minutes flat."
        }
    ];

    return (
        <section style={{ padding: "80px 24px", background: C.white, fontFamily: "'Inter', sans-serif" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>

                {/* Top Section: The 4 Cards */}
                <div style={{ textAlign: "center", marginBottom: 60 }}>
                    <div style={{ color: C.accent, fontSize: 11, fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 16 }}>
                        Direct & Fast
                    </div>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 42px)", color: C.primary, fontWeight: 800 }}>
                        Skip the App. Just WhatsApp Us.
                    </h2>
                </div>

                <div className="cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginBottom: 80 }}>
                    {steps.map((step, i) => (
                        <div key={i} style={{
                            background: C.white, borderRadius: "16px", padding: "32px 24px",
                            textAlign: "center", border: "1px solid #E5E7EB",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                            transition: "transform 0.2s ease"
                        }} className="card-hover">
                            <div style={{
                                width: 60, height: 60, borderRadius: "16px", background: C.lightGreen,
                                display: "flex", alignItems: "center", justifyContent: "center",
                                margin: "0 auto 20px"
                            }}>
                                {step.icon}
                            </div>
                            <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 800, color: C.primary, marginBottom: 12 }}>
                                {step.title}
                            </h4>
                            <p style={{ fontSize: 13, color: C.textGray, lineHeight: 1.6 }}>
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Section: The Dark Green Banner */}
                <div style={{
                    background: C.primary, borderRadius: "24px", padding: "50px 60px",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    position: "relative", overflow: "hidden", flexWrap: "wrap", gap: 40
                }}>

                    {/* Background Decorative Circles to match the image */}
                    <div style={{ position: "absolute", right: "-10%", top: "-40%", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(255,255,255,0.03)" }} />
                    <div style={{ position: "absolute", right: "15%", bottom: "-30%", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(255,255,255,0.03)" }} />

                    {/* Left Side Content */}
                    <div style={{ position: "relative", zIndex: 1, maxWidth: "500px" }}>
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: 8,
                            background: "rgba(255,255,255,0.15)", color: C.white,
                            padding: "6px 16px", borderRadius: "50px", fontSize: 12, fontWeight: 600, marginBottom: 24
                        }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.accent }} />
                            Active Now for Local Delivery
                        </div>

                        <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.white, fontSize: "clamp(36px, 4vw, 48px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 20 }}>
                            Message Your List.<br />
                            <span style={{ color: C.accent }}>Delivered in 10 Mins.</span>
                        </h2>

                        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, lineHeight: 1.6, marginBottom: 32 }}>
                            No carts to fill, no apps to download. Tell us what you need on WhatsApp and drop your address. We will confirm your items and be at your door in 10 minutes.
                        </p>

                        {/* Direct WhatsApp CTA */}
                        <a href="https://wa.me/919XXXXXXXXX" style={{
                            display: "inline-flex", alignItems: "center", gap: 10,
                            background: C.white, color: C.primary, padding: "14px 32px",
                            borderRadius: "50px", textDecoration: "none", fontWeight: 800, fontSize: 16,
                            transition: "transform 0.2s ease", cursor: "pointer"
                        }} className="btn-hover">
                            <FaWhatsapp size={20} color="#25D366" /> Chat on WhatsApp
                        </a>
                    </div>

                    {/* Right Side Graphic (The Bike Circle from the image) */}
                    <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "center", alignItems: "center", minWidth: "200px" }}>
                        <div style={{
                            width: 160, height: 160, borderRadius: "50%",
                            background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)",
                            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                            backdropFilter: "blur(4px)"
                        }}>
                            <Bike size={48} color={C.accent} style={{ marginBottom: 12 }} />
                            <span style={{ color: C.white, fontSize: 13, fontWeight: 800, letterSpacing: "1px" }}>10 MINS</span>
                        </div>
                    </div>

                </div>

            </div>

            <style>{`
        @media (max-width: 900px) {
          .cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .cards-grid { grid-template-columns: 1fr !important; }
        }
        .card-hover:hover { transform: translateY(-4px); border-color: ${C.accent}; }
        .btn-hover:hover { transform: scale(1.02); }
      `}</style>
        </section>
    );
}

// ─── Contact / Visit Our Store CTA ─────────────────────────────────
function ContactCTA() {
    const contactDetails = [
        {
            icon: <MapPin size={20} color={C.accent} />,
            title: "STORE ADDRESS",
            text: "MAA Medical & General Stores\nBeside Main Road, Sirpur-Kaghaznagar,\nTelangana - 504296"
        },
        {
            icon: <Phone size={20} color={C.accent} />,
            title: "PHONE",
            text: "8523819516"
        },
        {
            icon: <FaWhatsapp size={20} color={C.accent} />,
            title: "WHATSAPP",
            text: "Chat with us on WhatsApp",
            isLink: true
        },
        {
            icon: <Clock size={20} color={C.accent} />,
            title: "WORKING HOURS",
            text: "Monday - Sunday\n8:00 AM - 10:00 PM"
        }
    ];

    return (
        <section style={{ padding: "80px 24px", backgroundColor: C.white }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
                <div style={{ color: C.accent, fontSize: 12, fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12 }}>Find Us</div>
                <h2 style={{ fontSize: "clamp(32px, 4vw, 42px)", color: C.primary, fontWeight: 800 }}>Visit Our Store</h2>
            </div>

            <div className="contact-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>

                {/* Left Column: Info Cards */}
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {contactDetails.map((item, i) => (
                        <div key={i} style={{
                            background: C.lightGreen, borderRadius: "16px", padding: "24px",
                            display: "flex", alignItems: "flex-start", gap: 20
                        }}>
                            <div style={{
                                width: 48, height: 48, background: C.white, borderRadius: "12px",
                                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                                boxShadow: "0 4px 10px rgba(5, 150, 105, 0.1)"
                            }}>
                                {item.icon}
                            </div>
                            <div>
                                <h4 style={{ fontSize: 12, fontWeight: 800, color: C.accent, letterSpacing: "1px", marginBottom: 8, textTransform: "uppercase" }}>{item.title}</h4>
                                {item.isLink ? (
                                    <a href="#" style={{ color: C.accent, fontSize: 15, fontWeight: 700, textDecoration: "none" }}>{item.text}</a>
                                ) : (
                                    <p style={{ color: C.textDark, fontSize: 15, lineHeight: 1.6, whiteSpace: "pre-line", fontWeight: 500 }}>{item.text}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Column: Map Card with Grid Pattern */}
                <div className="grid-pattern" style={{
                    borderRadius: "24px", border: `1px solid ${C.lightGreen}`,
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                    padding: "40px", textAlign: "center", minHeight: "400px"
                }}>
                    <div style={{
                        width: 80, height: 80, borderRadius: "50%", background: C.accent,
                        display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24,
                        boxShadow: `0 0 0 8px rgba(5, 150, 105, 0.2)`
                    }}>
                        <MapPin size={32} color={C.white} />
                    </div>

                    <h3 className="serif-text" style={{ fontSize: 24, color: C.primary, fontWeight: 800, marginBottom: 8 }}>MAA Medical Store</h3>
                    <p style={{ color: C.textGray, fontSize: 15, marginBottom: 32 }}>Sirpur-Kaghaznagar, Telangana</p>

                    <a className="btn-hover"
                        href="https://www.google.com/maps/place/MAA+MEDICAL+AND+GENERAL+STORES/@19.3467824,79.4810301,17z/data=!3m1!4b1!4m6!3m5!1s0x3a2d571609cfaa8d:0x37e30f184e57e06d!8m2!3d19.3467774!4d79.483605!16s%2Fg%2F11h4cnb_k6?authuser=0&entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            background: C.accent, color: C.white, padding: "12px 28px", borderRadius: "50px",
                            border: "none", fontWeight: 700, fontSize: 15, display: "flex", alignItems: "center", gap: 8, cursor: "pointer", textDecoration: "none"
                        }}>
                        <MapPin size={16} /> View on Google Maps
                    </a>
                </div>

            </div>
        </section >
    );
}

// ─── Footer Section ────────────────────────────────────────────────
function Footer() {
    return (
        <footer style={{ background: C.primary, color: C.white, padding: "60px 24px 20px" }}>
            <div className="footer-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 40, borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 40, marginBottom: 20 }}>

                {/* Column 1: Brand & Socials */}
                <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                        <div style={{ width: 44, height: 44, background: C.accent, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Plus size={28} color={C.white} strokeWidth={3} />
                        </div>
                        <div style={{ lineHeight: 1.1 }}>
                            <div className="serif-text" style={{ fontWeight: 800, fontSize: 22 }}>MAA Medical</div>
                            <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.5px", color: C.accent }}>& GENERAL STORES</div>
                        </div>
                    </div>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: 32, maxWidth: 280 }}>
                        Your trusted partner for all medicines and healthcare needs. Serving Telangana with genuine medicines since 2018.
                    </p>
                    <div style={{ display: "flex", gap: 12 }}>
                        <a href="#" className="btn-hover" style={{ width: 40, height: 40, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", color: C.white }}><FaWhatsapp size={20} /></a>
                        <a href="#" className="btn-hover" style={{ width: 40, height: 40, borderRadius: "50%", background: "#1877F2", display: "flex", alignItems: "center", justifyContent: "center", color: C.white }}><FaFacebook size={20} /></a>
                        <a href="#" className="btn-hover" style={{ width: 40, height: 40, borderRadius: "50%", background: "#E1306C", display: "flex", alignItems: "center", justifyContent: "center", color: C.white }}><FaInstagram size={20} /></a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h4 style={{ fontSize: 15, fontWeight: 800, marginBottom: 24, letterSpacing: "0.5px" }}>QUICK LINKS</h4>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
                        {["Home", "About Us", "Contact"].map(link => (
                            <li key={link}>
                                <a href="#" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: 14, display: "flex", alignItems: "center", gap: 8, transition: "color 0.2s" }} onMouseOver={e => e.target.style.color = C.white} onMouseOut={e => e.target.style.color = "rgba(255,255,255,0.8)"}>
                                    <ChevronRight size={14} color={C.accent} /> {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Our Services */}
                <div>
                    <h4 style={{ fontSize: 15, fontWeight: 800, marginBottom: 24, letterSpacing: "0.5px" }}>OUR SERVICES</h4>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
                        {["Medicine Home Delivery", "Health Products", "Customer Support"].map(link => (
                            <li key={link}>
                                <a href="#" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: 14, display: "flex", alignItems: "center", gap: 8, transition: "color 0.2s" }} onMouseOver={e => e.target.style.color = C.white} onMouseOut={e => e.target.style.color = "rgba(255,255,255,0.8)"}>
                                    <ChevronRight size={14} color={C.accent} /> {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 4: Contact */}
                <div>
                    <h4 style={{ fontSize: 15, fontWeight: 800, marginBottom: 24, letterSpacing: "0.5px" }}>CONTACT</h4>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 20 }}>
                        <li style={{ display: "flex", alignItems: "center", gap: 12, color: "rgba(255,255,255,0.9)", fontSize: 14 }}><Phone size={18} color={C.accent} /> 8523819516</li>
                        <li style={{ display: "flex", alignItems: "center", gap: 12, color: "rgba(255,255,255,0.9)", fontSize: 14 }}><FaWhatsapp size={18} color={C.accent} /> WhatsApp Us</li>
                        <li style={{ display: "flex", alignItems: "center", gap: 12, color: "rgba(255,255,255,0.9)", fontSize: 14 }}><Clock size={18} color={C.accent} /> Mon–Sun: 8AM–10PM</li>
                        <li style={{ display: "flex", alignItems: "flex-start", gap: 12, color: "rgba(255,255,255,0.9)", fontSize: 14 }}><MapPin size={18} color={C.accent} style={{ flexShrink: 0, marginTop: 2 }} /> Sirpur-Kaghaznagar, TG</li>
                    </ul>
                </div>

            </div>

            <div style={{ textAlign: "center", fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>
                © 2024 MAA Medical & General Stores. All Rights Reserved.
            </div>
        </footer>
    );
}

// ─── Main App Layout ───────────────────────────────────────────────
export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <WhatsAppDeliverySection />
            <ContactCTA />
            <Footer />
        </div>
    );
}