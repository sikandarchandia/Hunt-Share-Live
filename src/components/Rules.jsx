import React from "react";

export default function Rules() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-16">
      {/* Title */}
      <h1 className="text-center text-3xl font-extrabold text-[#8944F5] my-6">
        Hunt Share Live – Rules & Policy
      </h1>

      {/* Scrollable Content */}
      <div className="max-w-6xl mx-auto bg-[#0c0c0c] rounded-2xl shadow-lg p-2 md:p-12 overflow-y-auto max-h-[75vh] custom-scroll">
        <p className="mb-2 leading-relaxed text-gray-300 text-lg text-[#7736d4]">
          1. Original Data
        </p>
        <p className="text-sm">
          All information provided during registration must be your own and
          accurate.
        </p>
        <p className="mb-2 leading-relaxed text-gray-300 text-lg text-[#7736d4]">
          2. Email & Mobile Number Ownership
        </p>
        <p className="text-sm">
          You must use an email address and mobile number that belong to you.
        </p>
        <p className="mb-2 leading-relaxed text-gray-300 text-lg text-[#7736d4]">
          3. No Abuse
        </p>
        <p className="text-sm">
          Abusive language, harassment, or disrespectful behavior is strictly
          prohibited.
        </p>
        <p className="mb-2 leading-relaxed text-gray-300 text-lg text-[#7736d4]">
          4. Misuse of Data
        </p>
        <p className="text-sm">
          Using another person’s data or engaging in abusive activities will
          lead to account suspension.
        </p>
        <p className="mb-2 leading-relaxed text-gray-300 text-lg text-[#7736d4]">
          5. Suspension Responsibility
        </p>
        <p className="text-sm">
          If your account is suspended, the company will not be responsible for
          any loss.
        </p>
        <p className="mb-2 leading-relaxed text-gray-300 text-lg text-[#7736d4]">
          6. No Harmful Content
        </p>
        <p className="text-sm">
          Posting harmful, dangerous, or illegal content is not allowed.
        </p>
        <p className="mb-2 leading-relaxed text-gray-300 text-lg text-[#7736d4]">
          7. No Adult or Sexual Content
        </p>
        <p className="text-sm">
          Adult, sexual, or explicit content of any kind is strictly prohibited.
        </p>
        <p className="mb-2 leading-relaxed text-gray-300 text-lg text-[#7736d4]">
          8. Reports & Suspension
        </p>
        <p className="text-sm">
          If your account receives more than 5 user reports, it may be
          suspended.
        </p>
        <p className="mb-2 leading-relaxed text-gray-300 text-lg text-[#7736d4]">
          9. Withdrawal Processing Time
        </p>
        <p className="text-sm">
          Withdrawals will be processed after a 7-day waiting period.
        </p>
        <p className="mb-2 leading-relaxed text-gray-300 text-lg text-[#7736d4]">
          10. Recharge Processing Time
        </p>
        <p className="text-sm">
          Recharges may take up to 10 minutes to reflect in your account.
        </p>
        <p className="mb-2 leading-relaxed text-gray-300 text-lg text-[#7736d4]">
          11. Level & Agency Eligibility
        </p>
        <p className="text-sm">
          Upon reaching Level 15, you can apply to become an Agent or open an
          Agency
        </p>
        <p className="mb-2 leading-relaxed text-gray-300 text-lg text-[#7736d4]">
          12. Diamond Price
        </p>
        <p className="text-sm">$1 = 70 Diamonds</p>
        <p className="mb-2 leading-relaxed text-gray-300 text-lg text-[#7736d4]">
          13. Beans Price
        </p>
        <p className="text-sm">200 Beans = $1</p>
        <p className="mb-2 leading-relaxed text-gray-300 text-lg text-[#7736d4]">
          14. Level Rewards
        </p>
        <p className="text-sm">
          Increasing your level will unlock additional rewards
        </p>
        <p className="mb-2 leading-relaxed text-gray-300 text-lg text-[#7736d4]">
          15. Contact Us
        </p>
        <p className="text-sm">
          You can contact the company through the Contact Form or via email:
          <br />
          📧info@huntsharelive.combr
          <br />
          📧 livehuntshare@gmail.com
          <br />
        </p>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-[#8944F5] hover:bg-[#7736d4] text-white px-4 py-2 rounded-full shadow-md hover:shadow-[#8944F5]/50 transition-all duration-300"
      >
        ↑ Top
      </button>
    </section>
  );
}
