export default function TermsPage() {
    return (
        <div className="pt-24 min-h-screen pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <h1 className="text-3xl md:text-5xl font-bold mb-8">Terms of Service</h1>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                    <p>
                        Please read these Terms of Service ("Terms") carefully before using the Connect 360 Advisory website.
                    </p>
                    <h2>Acceptance of Terms</h2>
                    <p>
                        By accessing or using our website and services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, do not use our services.
                    </p>
                    <h2>Services</h2>
                    <p>
                        Connect 360 Advisory provides commercial brokerage and corporate services. All services are subject to a separate agreement between you and Connect 360 Advisory.
                    </p>
                    <h2>Intellectual Property</h2>
                    <p>
                        The content, features, and functionality of this website are owned by Connect 360 Advisory and are protected by international copyright, trademark, and other intellectual property laws.
                    </p>
                    <h2>Limitation of Liability</h2>
                    <p>
                        To the fullest extent permitted by law, Connect 360 Advisory shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website.
                    </p>
                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us at shrimalveminakshi@gmail.com.
                    </p>
                </div>
            </div>
        </div>
    );
}
