import React, { useEffect } from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";
import CollapseItem from "../../components/collapseitem";
import "./style.scss";

function Faq() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header></Header>
      <div className="faq app-container">
        <div className="faq-title">FAQs</div>
        <CollapseItem title="What can I ask my Fashionista?">
          <p>
            You can ask Fashionista any general questions which can be answered
            through an online communication channel like video and voice call .
          </p>
        </CollapseItem>
        <CollapseItem title="What is the benefit of a fashion consultation? Why not just go to a shop?">
          <p>
            We aim to give you quick and easy fashion consultation through
            personal interactions over the phone.
          </p>
        </CollapseItem>
        <CollapseItem title="How do I find the right Fashionista?">
          <p>
            Users give ratings back to Fashionista for every consultation they
            did over our platform . So you can take this as reference to choose
            the best one for you.
          </p>
        </CollapseItem>
        <CollapseItem title="For what kind of occasions I can have a fashion consultation?">
          <p>
            You can consult for a number of occasions like for weddings, meeting
            new partners, having important meets etc or even small things like
            you need a makeover at home with available resources. Occasions are
            countless.
          </p>
        </CollapseItem>
        <CollapseItem title="Can I book the same Fashionista again?">
          <p>
            Yes, you are free to book the same fashionista again . We promote
            this continuing booking also as they become your fashion friend
            after having their first consultation.
          </p>
        </CollapseItem>
        <CollapseItem title="What happens if I don't like the new look?">
          <p>
            You can always write us mail at help@fashone.com . We try to solve
            your problem in the best possible way.
          </p>
        </CollapseItem>
        <CollapseItem title="Can I first „try“ a Fashionista before booking?">
          <p>
            No, you cannot try a fashionista before booking. But certainly you
            can book special 15 min appointments with any fashionista of your
            choice to know them briefly.
          </p>
        </CollapseItem>
        <CollapseItem title="How do I find cheaper consultations?">
          <p>
            You can go to the Fashionista listing window in android & ios app
            ,on top right there is a filter button where you can set filters to
            pick you cheaper consultations.
          </p>
        </CollapseItem>
        <CollapseItem title="How do I know the quality of fashion consultation/ How do I know that's a professional consultation/ Fashionista?">
          <p>
            We are closely monitoring the performance of fashionistas , we
            analyse and tend to keep only the best ones in our platform so that
            quality of fashion consultation remains high.
          </p>
        </CollapseItem>
        <CollapseItem title="Can I give Fashion consultings too?">
          <p>
            Yes, anybody can be a fashionista on our platform . But your success
            depends on your fashion knowledge and user experiences.
          </p>
        </CollapseItem>
        <CollapseItem title="How do I become a Fashionista?">
          <p>
            Just go to your Profile , you can find the Switch to Fashionista
            button and please fill in some details and then you should be a
            fashionista immediately.
          </p>
        </CollapseItem>
        <CollapseItem title="How do I attract more Users?">
          <p>
            You can self promote yourself in any media with our brand and we
            also do promotions for you so that you can get more users.
          </p>
        </CollapseItem>
        <CollapseItem title="How can I optimize my Profile?">
          <p>
            Make your profile photo expressive and have gallery photos to let
            people know your fashion experience. We encourage you to also write
            a bio which clearly mentions your experience and ability.
          </p>
        </CollapseItem>
        <CollapseItem title="Can I show advertisements of other brands on my profile?">
          <p>
            No, If you want to promote any external brands or commercials you
            need to inform us. Not informing us of any external branding or
            advertising may lead to account suspension.
          </p>
        </CollapseItem>
        <CollapseItem title="Can I promote myself/ my studio with Fashone?">
          <p>
            Yes, you can promote yourself with our brand name in such a way that
            it should not hurt our reputation.
          </p>
        </CollapseItem>
        <CollapseItem title="Can I link my Instagram profile with Fashone?">
          <p>
            Yes you can link any personal or business social media link to your
            bio section
          </p>
        </CollapseItem>
        <CollapseItem title="How can I lower/rise my credits?">
          <p>
            You can go to Profile tab on your android or ios device , click on
            Settings button and you will find a Credits per hour option to edit
            instantly.
          </p>
        </CollapseItem>
        <CollapseItem title="How do I get money from credits?">
          <p>
            We set the credits rate and you can check instantly on your
            fashionista app . We transfer the money you own through earned
            credits after you press the paypal redeem option.
          </p>
        </CollapseItem>
        <CollapseItem title="Can I run my fashion Business just through Fashone?">
          <p>
            Yes, you can run any fashion business through our platform without
            affecting our brand image.
          </p>
        </CollapseItem>
        <CollapseItem title="Do I need WIFI to use your service?">
          <p>
            Although we do recommend you use WIFI for the best possible
            experience, it is not required to use our service. As long as your
            connection is 4G or LTE, then you should be fine. If you do
            experience connection issues, you can simply switch to audio-only,
            when connected to a doctor, and your connection will improve.
          </p>
          <p>
            If switching between WIFI and 4G/LTE it may be helpful to reboot
            your device before attempting to connect.
          </p>
        </CollapseItem>

        <div className="faq-subtitle">Credits.</div>
        <CollapseItem title="How can I purchase Credits ?">
          <p>
            Credits purchase is fast and easy to an existing account . Verify
            that you’re logged in. Click on “Buy Credits” in app
          </p>
          <ul className="page-number">
            <li>Choose a payment method</li>
            <li>Choose the desired credit package</li>
            <li>
              Complete the Credits purchase process by entering the necessary
              details
            </li>
          </ul>
        </CollapseItem>
        <CollapseItem title="What do I do if a credit purchase is unsuccessful?">
          <p>
            If you experience an unsuccessful credit purchase please check your
            registered e-mail address. Don´t forget to check Spam/Junk/Bulk
            folders as well! If you received an email from "Instafashion LTD"
            regarding the transaction, please reply to the email as soon as
            possible. Our representative will shortly contact you. If you don’t
            receive an email from Instafashion Ltd regarding the transaction,
            you may contact our customer service in the following ways:
          </p>
          <ul className="page-number">
            <li>
              1. Send a message from the email address that you registered for
              your Fashone account to{" "}
              <a href="mailto:help@fashone.com">help@fashone.com</a>.
            </li>
          </ul>
        </CollapseItem>
        <CollapseItem title="How can I check my Credit balance?">
          <p>
            In our Android or iPhone App under Credits tab you can check your
            purchased or available credits. If you any question please feel free
            to ask us at <a href="mailto:help@fashone.com">help@fashone.com</a>.
          </p>
        </CollapseItem>
        <CollapseItem title="I tried to buy Credits with a bank card but my transaction was declined, why?">
          <p>
            There could be several reasons why your card might get declined.
            Please check the available funds on your account as well as the
            card’s expiration date.{" "}
          </p>
          <p>
            Some issuing banks may also block online transactions, if they
            reoccur in an unusual frequency. Please contact your bank to clarify
            their payment policy.{" "}
          </p>
          <p>
            If the problem still exists, send an email to help@fashone.com
            describing what type of card you attempt to use. If we can’t provide
            you with a solution, we may offer other billing options.
          </p>
        </CollapseItem>

        <div className="faq-subtitle">Member Account</div>
        <CollapseItem title="I forgot my password. What can I do?">
          <p>
            If you can’t recall your password, please go to the Forgot Password
            button on Signup page. After providing your registered email address
            check your email to complete your password reset.
          </p>
        </CollapseItem>

        <div className="faq-subtitle">Billing Help</div>
        <CollapseItem title="Why haven’t I received an email sales confirmation/receipt?">
          <p>
            Please note that many email accounts are also protected by spam
            filters which may automatically place some of our emails into spam
            folders.{" "}
          </p>
          <p>
            If you happen to find your wanted email there, just mark it as a
            regular mail, not junk/trash to receive all future messages in your
            regular mailbox.
          </p>
        </CollapseItem>
        <CollapseItem title="The dates of the charges on my bank statement do not match my purchases. Why?">
          <p>
            Some of the banks do not deduct the amount at the time of the
            transaction but later when your account is totally cleared.{" "}
          </p>
          <p>
            This might cause a delay between the actual date of the charge and
            the date it appears on your bank statement.
          </p>
        </CollapseItem>

        <div className="faq-subtitle">General/Miscellaneous</div>
        <CollapseItem title="Does Fashone Team contact"></CollapseItem>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Faq;
