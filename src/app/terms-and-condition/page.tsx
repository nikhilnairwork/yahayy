import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div className="p-6 bg-gray-50 text-gray-800">
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-8">
      <h1 className="text-3xl font-bold text-center mb-6 ">
        Terms and Conditions
      </h1>
      <p className="mb-4">
        Welcome to <strong>Excited Digital Solutions</strong>. These Terms and
        Conditions (“Terms”) govern your use of our website, services, and any
        transactions related to voucher gifting. By accessing or using our website or
        services, you agree to comply with and be bound by these Terms. If you do not
        agree with these Terms, please do not use our website or services.
      </p>
      <h2 className="text-2xl font-semibold mb-4 ">1. Introduction</h2>
      <p className="mb-4">
        These Terms govern your use of our website and services. By accessing or
        using our platform, you agree to these Terms.
      </p>

      <h2 className="text-2xl font-semibold mb-4 ">2. Eligibility</h2>
      <p className="mb-4">
        You must be at least 18 years old to use our services. By using our services,
        you represent and warrant that you meet this age requirement and have the
        legal capacity to enter into binding agreements.
      </p>

      <h2 className="text-2xl font-semibold mb-4 ">3. Account Registration</h2>
      <p className="mb-4">
        To purchase or redeem vouchers, you may need to create an account. You agree
        to provide accurate and complete information during the registration process
        and to update your information as necessary. You are responsible for
        maintaining the confidentiality of your account credentials and for all
        activities that occur under your account.
      </p>

      <h2 className="text-2xl font-semibold mb-4 ">4. Voucher Purchases</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>Payment:</strong> All purchases must be paid for using the available
          payment methods.
        </li>
        <li>
          <strong>Voucher Delivery:</strong> Vouchers will be delivered electronically
          to the email address you provide.
        </li>
        <li>
          <strong>Voucher Expiry:</strong> Vouchers may have an expiration date as
          indicated at the time of purchase.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 ">5. Voucher Redemption</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>Terms of Use:</strong> Each voucher is subject to the terms and
          conditions specified by the issuing merchant.
        </li>
        <li>
          <strong>Restrictions:</strong> Some vouchers may be subject to restrictions,
          such as blackout dates or minimum purchase requirements.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 ">
        6. Refunds and Cancellations
      </h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>Refunds:</strong> All voucher purchases are final and non-refundable
          unless required by law or otherwise specified.
        </li>
        <li>
          <strong>Cancellations:</strong> You may not cancel or modify a voucher
          purchase once the transaction is complete.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 ">7. User Conduct</h2>
      <p className="mb-4">
        You agree not to use our website or services for any unlawful or unauthorized
        purpose or interfere with the operation of our website or services.
      </p>

      <h2 className="text-2xl font-semibold mb-4 ">8. Intellectual Property</h2>
      <p className="mb-4">
        All content on our website is the property of Excited Digital Solutions or its
        licensors. You may not use, reproduce, or distribute any content without our
        express written permission.
      </p>

      <h2 className="text-2xl font-semibold mb-4 ">9. Changes to Terms</h2>
      <p className="mb-4">
        We may update these Terms from time to time. Your continued use of our
        services after such changes constitutes your acceptance of the revised Terms.
      </p>

      <h2 className="text-2xl font-semibold mb-4 ">10. Governing Law</h2>
      <p className="mb-4">
        These Terms shall be governed by and construed in accordance with the laws of
        Pune Jurisdiction, without regard to conflict of law principles.
      </p>

      <h2 className="text-2xl font-semibold mb-4 ">11. Contact Us</h2>
      <p>
        If you have any questions or concerns, contact us at:
      </p>
      <ul className="list-disc pl-6">
        <li>Email: <a href="mailto:eexcitedops@eexcited.com" className="text-blue-500">eexcitedops@eexcited.com</a></li>
        <li>Phone: <a href="tel:+918953235831" className="text-blue-500">+91-8953235831</a></li>
      </ul>
    </div>
  </div>
  )
}