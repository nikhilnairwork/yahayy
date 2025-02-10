import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-8">
    <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>

    <section className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p className="text-gray-700">
          At Excited Digital Solutions, we specialize in providing comprehensive gifting
          services designed to delight and engage recipients. We are committed to protecting your
          privacy and ensuring a safe online experience. This Privacy Policy outlines how we collect,
          use, disclose, and safeguard your information when you visit our website{" "}
          <a href="https://eexcited.com" className="text-blue-500 underline">
            eexcited.com
          </a>{" "}
          or use our services. By using our services, you agree to the terms outlined in this
          Privacy Policy.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
        <p className="text-gray-700">
          We may collect the following types of information:
        </p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>
            <strong>Personal Information:</strong> Your name, email address, phone number, and
            payment details when you create an account or purchase vouchers.
          </li>
          <li>
            <strong>Transaction Information:</strong> Details of the vouchers purchased or
            redeemed, including the date and time of transactions.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about how you use our website, including IP
            address, browser type, and pages visited.
          </li>
          <li>
            <strong>Technical Data:</strong> Device type, operating system, and browser type.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
        <p className="text-gray-700">We use your information for various purposes, including:</p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Processing transactions like voucher purchases and redemptions.</li>
          <li>
            Communicating with you through order confirmations, newsletters, and promotional
            offers.
          </li>
          <li>Improving our website and services through usage analysis.</li>
          <li>Ensuring the security of our services and preventing fraud.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">4. Sharing Your Information</h2>
        <p className="text-gray-700">
          We do not sell or rent your personal information to third parties. However, we may share
          your information in the following cases:
        </p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>
            <strong>With Service Providers:</strong> Trusted third parties assisting us in
            operating our website and services.
          </li>
          <li>
            <strong>For Legal Reasons:</strong> If required by law or to protect our rights and
            safety.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
        <p className="text-gray-700">
          We implement reasonable measures to protect your information but cannot guarantee
          absolute security due to the nature of internet-based systems.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
        <p className="text-gray-700">Depending on your location, you may have the right to:</p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Access the personal information we hold about you.</li>
          <li>Request corrections to inaccurate information.</li>
          <li>Request deletion of your personal data.</li>
          <li>
            Opt-out of promotional communications by following unsubscribe instructions or
            contacting us.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">7. Cookies and Tracking Technologies</h2>
        <p className="text-gray-700">
          We use cookies to enhance your experience. Manage cookie preferences through your
          browser settings.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">8. Changes to This Privacy Policy</h2>
        <p className="text-gray-700">
          We may update this policy periodically. Significant changes will be notified on our
          website. Continued use of our services implies acceptance of the revised policy.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions, reach out to us:
          <br />
          Email:{" "}
          <a href="mailto:eexcitedops@eexcited.com" className="text-blue-500 underline">
            eexcitedops@eexcited.com
          </a>
          <br />
          Phone: +91-8953235831
        </p>
      </div>
    </section>
  </div>
  )
}