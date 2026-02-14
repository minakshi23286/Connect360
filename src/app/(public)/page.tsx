import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { LeadForm } from "@/components/forms/LeadForm";
import { CheckCircle2, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Who We Are</h2>
            <p className="text-lg text-muted-foreground">
              Connect 360 Advisory is your strategic partner for corporate excellence and business growth in the UAE and GCC region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-muted/30 p-8 rounded-xl shadow-sm border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with comprehensive, tailored corporate solutions that facilitate seamless market entry, operational efficiency, and sustainable growth. We strive to be the bridge that connects our clients to opportunities in the dynamic GCC market.
              </p>
            </div>
            <div className="bg-muted/30 p-8 rounded-xl shadow-sm border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the premier corporate services advisory firm in the region, recognized for our integrity, expertise, and unwavering commitment to client success.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Integrity", desc: "Highest ethical standards, transparency, and trust." },
              { title: "Excellence", desc: "Superior results through continuous improvement and expertise." },
              { title: "Partnership", desc: "Building long-term collaborative relationships for shared success." }
            ].map((value, i) => (
              <div key={i} className="text-center p-6 bg-card rounded-lg border shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section (Simplified inline) */}
      <section id="industries" className="py-20 bg-primary text-primary-foreground scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Our expertise spans across diverse sectors, delivering specialized solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {["Real Estate", "Healthcare", "Technology", "Retail", "Manufacturing", "Hospitality", "Finance", "Construction"].map((industry, i) => (
              <div key={i} className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm">
                <span className="font-semibold">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesGrid />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to transform your business? Contact us today for a consultation.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Our Office</h3>
                    <p className="text-muted-foreground">BC-888898, 26th Floor, Amber Gem Tower, Ajman, UAE</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+971 54 389 5382</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">shrimalveminakshi@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Hours</h3>
                    <p className="text-muted-foreground">Mon-Fri: 9am - 6pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-xl border shadow-sm">
              <h3 className="text-xl font-bold mb-4">Send us a message</h3>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-muted grayscale">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.326286782074!2d55.45974051086053!3d25.327244977553966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f5f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sAmber%20Gem%20Tower!5e0!3m2!1sen!2sae!4v1707900000000!5m2!1sen!2sae"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        />
      </section>
    </main>
  );
}
