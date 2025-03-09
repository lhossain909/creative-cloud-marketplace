
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is included in the Creative Cloud subscription?",
    answer: "Your Adobe Creative Cloud subscription includes access to over 20 desktop and mobile apps including Photoshop, Illustrator, InDesign, Premiere Pro, and more. You also get 100GB of cloud storage, thousands of Adobe fonts, Adobe Portfolio, Adobe Behance, and premium templates and assets."
  },
  {
    question: "How long is the subscription valid?",
    answer: "The subscription we offer is valid for 1 year (12 months) from the date of purchase. After the initial year, it will automatically renew at the then-current rate unless canceled."
  },
  {
    question: "Can I use the apps on multiple devices?",
    answer: "Yes, you can install and use the Creative Cloud apps on up to two computers (Mac or PC) and also use the companion mobile apps on your tablets and smartphones."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes, we offer a 14-day money-back guarantee. If you're not satisfied with your purchase, you can request a full refund within 14 days of your purchase."
  },
  {
    question: "How do I install the apps after purchase?",
    answer: "After completing your purchase, you'll receive an email with activation instructions. You'll need to sign in with your Adobe ID (or create one), redeem your code, and then download the Creative Cloud desktop app, which will manage the installation of all your Adobe apps."
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, you can cancel your subscription at any time. If you cancel within the first year, you'll still have access until the end of your paid subscription period. After that, it will not automatically renew."
  }
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our Adobe Creative Cloud subscription offer.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border py-2">
              <AccordionTrigger className="text-left font-medium hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-10 text-center">
          <p className="text-muted-foreground">
            Still have questions? <a href="mailto:support@example.com" className="text-primary font-medium underline-offset-4 hover:underline">Contact our support team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
