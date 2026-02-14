import { LeadForm } from "@/components/forms/LeadForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-24 min-h-screen">
            <section className="bg-primary text-primary-foreground py-16">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                        Get in touch with our team for expert advice and support.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                            <p className="text-muted-foreground mb-12">
                                Whether you have a question about our services, need assistance with business setup, or want to discuss a partnership, we are here to help.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Our Office</h3>
                                        <p className="text-muted-foreground">
                                            BC-888898, 26th Floor<br />
                                            Amber Gem Tower, Ajman, UAE
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Phone Number</h3>
                                        <p className="text-muted-foreground">
                                            <a href="tel:+971543895382" className="hover:text-primary transition-colors">
                                                +971 54 389 5382
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Email Address</h3>
                                        <p className="text-muted-foreground">
                                            <a href="mailto:shrimalveminakshi@gmail.com" className="hover:text-primary transition-colors">
                                                shrimalveminakshi@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                                        <Clock className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                                        <p className="text-muted-foreground">
                                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                                            Saturday - Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div>
                            <LeadForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[400px] w-full bg-muted">
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
                {/* Note: The embed URL is a generic placeholder for Amber Gem Tower coordinate approximation or generic search result. Real embed URL requires exact place ID usually. */}
            </section>
        </div>
    );
}
