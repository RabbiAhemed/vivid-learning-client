import React from "react";
import "./Faq.css";
const Faq = () => {
  return (
    <div>
      <h2 className="text-center">Frequently Asked Questions</h2>
      <div className="w-100 p-5">
        <div className="single-faq">
          <h4>Refund Status:</h4>
          <p>
            Eligible course purchases can be refunded within 30 days after the
            purchase. Below are answers to some of the most common questions we
            receive regarding refunds, and how long the process takes.
          </p>
        </div>
        <div className="single-faq">
          <h4>Payment Methods on Vivid Learning</h4>
          <p>
            Currently, Vivid Learning supports several different payment
            methods, depending on your account country and location.such as
            Paypal,Mastercard etc.
          </p>
        </div>
        <div className="single-faq">
          <h4>Lifetime Access</h4>
          <p>
            One of the best things about Vivid Learning is that you can login to
            your account from virtually anywhere, whenever you want, and access
            your courses easily! We strongly believe that students will benefit
            from the limitless educational possibilities this feature presents.
          </p>
          <p>
            Once you purchase a course, you'll have access for life, provided
            that your account is in good standing and Vivid Learning continues
            to have a license to that course.
          </p>
        </div>
        <div className="single-faq">
          <h4>How to Refund a Course</h4>
          <p>
            We want you to be satisfied, so all eligible courses purchased on
            Vivid Learning can be refunded within 30 days. For whatever reason,
            if you are unhappy with a course, you can request a refund, provided
            the request meets the guidelines in our refund policy. Most refunds
            are returned via the original payment method. Please note that
            certain restrictions may apply and some purchases may only be
            eligible for credit refunds. Learn more about our refund policy.
            Refund requests cannot be submitted in the Vivid Learning mobile app
            (please see the Requesting a refund on a mobile device section
            below).
          </p>
        </div>
        <div className="single-faq">
          <h4>Downloading Course Resources</h4>
          <p>
            Many instructors add supplemental resources to their lectures, like
            PDFs, design templates or source code, as a means to enhance the
            learning experience of the course. These resources can quickly be
            downloaded to your computer and viewed.{" "}
          </p>
        </div>
        <div className="single-faq">
          <h4>Learning With Vivid Learning</h4>
          <p>
            Vivid Learning's mission is to create new possibilities for people
            and organizations everywhere. Our global marketplace features an
            extensive, multi-language library, which includes thousands of
            courses taught by real-world experts. You can take courses across a
            wide range of categories, some of which include: business &
            entrepreneurship, programming, academics, the arts, health &
            fitness, language, music and much more!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
