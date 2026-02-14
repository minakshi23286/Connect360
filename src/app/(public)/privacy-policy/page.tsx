export default function PrivacyPolicyPage() {
    return (
        <div className="pt-24 min-h-screen pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <h1 className="text-3xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                    <p>
                        Connect 360 Advisory FZE LLC ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you visit our website or use our services.
                    </p>
                    <h2>Information We Collect</h2>
                    <p>
                        We collect information you provide directly to us, such as when you fill out a contact form, request a consultation, or communicate with us via email. This information may include your name, email address, phone number, company name, and any other details you choose to provide.
                    </p>
                    <h2>How We Use Your Information</h2>
                    <p>
                        We use the information we collect to:
                    </p>
                    <ul>
                        <li>Provide, maintain, and improve our services.</li>
                        <li>Respond to your comments, questions, and requests.</li>
                        <li>Communicate with you about services, offers, and events.</li>
                        <li>Comply with legal obligations.</li>
                    </ul>
                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at shrimalveminakshi@gmail.com.
                    </p>
                </div>
            </div>
        </div>
    );
}
