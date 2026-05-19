import React, { useState } from "react";
import {
    ShieldCheck, Tag, Truck, Headphones, Search, MessageCircle,
    Heart, Target, Users, CheckCircle, ArrowRight, MapPin,
    Phone, Mail, Clock, Plus, Menu, X, ChevronRight
} from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

// ─── Navbar Component (Tailwind Version) ─────────────────────────
function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3 cursor-pointer">
                    <div className="text-emerald-800 flex">
                        <Plus size={36} strokeWidth={4} />
                    </div>
                    <div className="leading-none">
                        <div className="font-extrabold text-2xl text-emerald-900 tracking-tight font-serif">MAA</div>
                        <div className="text-[10px] font-bold text-gray-800 tracking-wider">MEDICAL & GENERAL STORES</div>
                    </div>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {["Home", "About Us", "Medicines", "Services", "Contact Us"].map((link, i) => (
                        <a key={link} href="#" className={`font-semibold text-[15px] pb-1 transition-colors ${i === 1 ? "text-emerald-600 border-b-2 border-emerald-600" : "text-gray-700 hover:text-emerald-600"
                            }`}>
                            {link}
                        </a>
                    ))}
                </div>

                {/* WhatsApp Button */}
                <a href="https://wa.me/919XXXXXXXXX" className="hidden md:flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                    <FaWhatsapp size={18} /> WhatsApp Us
                </a>

                {/* Mobile Toggle */}
                <button className="md:hidden text-emerald-900" onClick={() => setOpen(!open)}>
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
        </nav>
    );
}

// ─── Footer Component (Tailwind Version) ─────────────────────────
function Footer() {
    return (
        <footer className="bg-emerald-950 text-white pt-16 pb-6">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-8">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-11 h-11 bg-emerald-500 rounded-xl flex items-center justify-center">
                                <Plus size={28} strokeWidth={3} />
                            </div>
                            <div className="leading-tight">
                                <div className="font-serif font-extrabold text-2xl">MAA Medical</div>
                                <div className="text-[9px] font-bold tracking-widest text-emerald-400">& GENERAL STORES</div>
                            </div>
                        </div>
                        <p className="text-emerald-100/70 text-sm leading-relaxed mb-6">
                            Your trusted partner for all medicines and healthcare needs. Serving Telangana with genuine medicines since 2018.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-transform"><FaWhatsapp size={20} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 transition-transform"><FaFacebook size={20} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#E1306C] flex items-center justify-center hover:scale-110 transition-transform"><FaInstagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-sm tracking-wider mb-6">QUICK LINKS</h4>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Medicines', 'Order Now', 'Contact'].map(link => (
                                <li key={link}>
                                    <a href="#" className="text-emerald-100/80 hover:text-white flex items-center gap-2 text-sm transition-colors">
                                        <ChevronRight size={14} className="text-emerald-500" /> {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-sm tracking-wider mb-6">OUR SERVICES</h4>
                        <ul className="space-y-4">
                            {['Medicine Home Delivery', 'Order Medicines', 'Health Products', 'Customer Support'].map(link => (
                                <li key={link}>
                                    <a href="#" className="text-emerald-100/80 hover:text-white flex items-center gap-2 text-sm transition-colors">
                                        <ChevronRight size={14} className="text-emerald-500" /> {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-sm tracking-wider mb-6">CONTACT</h4>
                        <ul className="space-y-5 text-sm text-emerald-100/90">
                            <li className="flex items-center gap-3"><Phone size={18} className="text-emerald-500" /> +91 9XXXXXXXXX</li>
                            <li className="flex items-center gap-3"><FaWhatsapp size={18} className="text-emerald-500" /> WhatsApp Us</li>
                            <li className="flex items-center gap-3"><Clock size={18} className="text-emerald-500" /> Mon–Sun: 8AM–10PM</li>
                            <li className="flex items-start gap-3"><MapPin size={18} className="text-emerald-500 shrink-0 mt-0.5" /> Sirpur-Kaghaznagar, TG</li>
                        </ul>
                    </div>

                </div>

                <div className="text-center text-xs font-medium text-emerald-100/50">
                    © 2024 MAA Medical & General Stores. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}

// ─── Main About Us Page Component ────────────────────────────────
export default function AboutUs() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
            <Navbar />

            {/* 1. Hero Section */}
            <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-emerald-50">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1586942425654-9fa19eddf084?auto=format&fit=crop&w=2000&q=80"
                        alt="Pharmacy Background"
                        className="w-full h-full object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/90 to-teal-50/90 mix-blend-multiply" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <span className="inline-block py-1 px-4 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs mb-6 tracking-widest uppercase shadow-sm border border-emerald-200">
                        About MAA Medical & General Stores
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight font-serif">
                        Your Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Healthcare Partner</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                        Dedicated to providing genuine medicines, healthcare products, and exceptional customer service to our local community since day one.
                    </p>
                    <button className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1">
                        Contact Us <ArrowRight size={20} />
                    </button>
                </div>
            </section>

            {/* 2. About Company Section */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Image */}
                        <div className="relative group">
                            <div className="absolute -inset-3 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-[2rem] transform rotate-2 group-hover:rotate-1 transition-transform duration-500"></div>
                            <img
                                src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1000&q=80"
                                alt="Inside MAA Medical Store"
                                className="relative rounded-3xl shadow-xl w-full object-cover h-[450px] z-10 transition-transform duration-500 group-hover:scale-[1.01]"
                            />
                        </div>

                        {/* Right: Content */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 font-serif">A Neighborhood Pharmacy You Can Rely On</h2>
                                <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-8"></div>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    MAA Medical & General Stores is a trusted neighborhood medical store dedicated to providing genuine medicines, healthcare products, and quality customer service.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    We focus on making healthcare accessible, affordable, and convenient for everyone through trusted medicines, fast support, and home delivery services. Your health is not just our business—it's our commitment.
                                </p>
                            </div>

                            <ul className="space-y-4 pt-4 border-t border-slate-100">
                                {['Verified Authentic Medicines', 'Expert Pharmacist Guidance', 'Fast & Secure Home Delivery'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-slate-800 font-semibold text-lg">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                            <CheckCircle size={18} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Mission & Vision Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                        {/* Mission Card */}
                        <div className="group bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-2 border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500 text-emerald-900">
                                <Target size={120} />
                            </div>
                            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-emerald-100">
                                <Target size={32} />
                            </div>
                            <h3 className="text-2xl font-extrabold text-slate-900 mb-4 font-serif">Our Mission</h3>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Our mission is to provide reliable healthcare products and quality medical services with customer satisfaction as our top priority. We strive to be the bridge between you and better health.
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="group bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-2 border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500 text-teal-900">
                                <Heart size={120} />
                            </div>
                            <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-teal-100">
                                <Heart size={32} />
                            </div>
                            <h3 className="text-2xl font-extrabold text-slate-900 mb-4 font-serif">Our Vision</h3>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Our vision is to become the most trusted and customer-friendly medical store in the local community. We aim to innovate local pharmacy services to make healing seamless and stress-free.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. Why Choose Us Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 font-serif">Why Choose Us?</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Experience healthcare shopping that puts your needs first, combining quality, affordability, and convenience.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {[
                            { icon: <ShieldCheck size={28} />, title: "Genuine Medicines", desc: "100% authentic products sourced directly from trusted manufacturers." },
                            { icon: <Tag size={28} />, title: "Affordable Prices", desc: "Competitive pricing and regular discounts to make healthcare affordable." },
                            { icon: <Truck size={28} />, title: "Fast Home Delivery", desc: "Quick, secure, and hassle-free doorstep delivery for your convenience." },
                            { icon: <Headphones size={28} />, title: "Trusted Customer Support", desc: "Dedicated team ready to assist you with any healthcare queries instantly." },
                            { icon: <Search size={28} />, title: "Availability Check", desc: "Easily verify medicine stock before you step out of your house." },
                            { icon: <MessageCircle size={28} />, title: "Easy WhatsApp Ordering", desc: "Just send us your prescription on WhatsApp and we do the rest." },
                        ].map((feature, idx) => (
                            <div key={idx} className="p-8 rounded-[2rem] bg-slate-50 hover:bg-emerald-50/50 border border-slate-100 hover:border-emerald-200 transition-all duration-300 group hover:shadow-lg hover:shadow-emerald-100">
                                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-100">
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                                <p className="text-slate-600 leading-relaxed text-sm lg:text-base">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Store Highlights Section */}
            <section className="py-20 bg-emerald-900 relative overflow-hidden">
                {/* Decorative background blur */}
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-600 rounded-full blur-[100px] opacity-40"></div>
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-teal-600 rounded-full blur-[100px] opacity-40"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {[
                            { value: "1000+", label: "Happy Customers" },
                            { value: "100%", label: "Genuine Medicines" },
                            { value: "10 Min", label: "Fast Delivery Setup" },
                            { value: "24/7", label: "Customer Support" },
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
                                <div className="text-4xl lg:text-5xl font-extrabold text-white mb-3 font-serif">{stat.value}</div>
                                <div className="text-emerald-200 font-semibold tracking-wide text-sm uppercase">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Team/Support Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        <div className="order-2 lg:order-1 space-y-8">
                            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 font-serif">Expert Care & Professional Support</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                Behind MAA Medical is a team of dedicated professionals who care about your wellbeing. Whether you need help understanding a prescription or finding a rare medicine, we are here to assist.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: "Friendly Customer Assistance", desc: "A welcoming team that treats you like family." },
                                    { title: "Quick Response Support", desc: "No long waits. Get your answers instantly." },
                                    { title: "Experienced Healthcare Guidance", desc: "Rely on our knowledgeable staff for health-related queries." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5 p-5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-600">
                                                <Users size={24} />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <img
                                src="https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&w=1000&q=80"
                                alt="Medical Support Team"
                                className="rounded-[2.5rem] shadow-2xl object-cover h-[550px] w-full"
                            />
                            {/* Floating Badge */}
                            <div className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce hover:animate-none">
                                <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366]">
                                    <FaWhatsapp size={24} />
                                </div>
                                <div className="pr-2">
                                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Need Help?</div>
                                    <div className="text-base font-extrabold text-slate-900">We're Online</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 7. Call To Action Section */}
            <section className="pb-24 bg-white">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 rounded-[3rem] p-12 lg:p-16 text-center shadow-2xl shadow-emerald-900/20 relative overflow-hidden">
                        {/* Background design elements */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 font-serif tracking-tight">Need Medicines or Healthcare Support?</h2>
                            <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto font-medium">
                                Don't hesitate to reach out. We are just a message or a call away, ready to deliver health directly to your doorstep.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6">
                                <button className="bg-white text-emerald-800 hover:bg-slate-50 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    Contact Us
                                </button>
                                <a href="https://wa.me/919XXXXXXXXX" className="bg-[#25D366] text-white hover:bg-[#20bd5a] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2">
                                    <FaWhatsapp size={22} /> WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}