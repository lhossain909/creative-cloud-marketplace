
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedImage from '@/components/AnimatedImage';
import { ArrowLeft, Check } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
} from '@stripe/react-stripe-js';
import CheckoutForm from '@/components/CheckoutForm';

// Replace this with your actual Stripe publishable key from your Stripe dashboard
// It will look something like: pk_live_xxxxxxxxxxxxxxxxxxxxxxxx or pk_test_xxxxxxxxxxxxxxxxxxxxxxxx
const stripePromise = loadStripe('pk_live_51R0YeN2Ujsmhhv6TbUY6GO58la5MgUatHAXck3Bp9enJlbLee4QWTSkxo2eXU9EFftGyenMDXDDKn5ZV0DJ7jHJ400KPkTpMjA');

const PurchasePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="py-6 px-4 border-b border-border">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="inline-flex items-center space-x-2">
            <div className="w-8 h-8 bg-adobe-red rounded-md flex items-center justify-center">
              <span className="text-white text-xs font-display font-bold">CC</span>
            </div>
            <span className="text-xl font-bold hidden sm:inline-block">Creative Cloud</span>
          </Link>
          
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center">
            <ArrowLeft size={16} className="mr-1" />
            Back to home
          </Link>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl font-bold mb-6">Complete Your Purchase</h1>
            
            <div className="mb-8 p-4 bg-muted rounded-lg border border-border">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-medium">Adobe Creative Cloud</h3>
                  <p className="text-sm text-muted-foreground">Complete plan - 1 year subscription</p>
                </div>
                <span className="font-medium">$479.88</span>
              </div>
              <div className="text-sm text-muted-foreground pb-3 border-b border-border">
                Includes all Creative Cloud apps and services
              </div>
              <div className="pt-3 flex justify-between">
                <span className="font-medium">Total</span>
                <span className="font-bold">$479.88</span>
              </div>
            </div>
            
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="sticky top-10 bg-muted/30 p-6 rounded-xl border border-border">
              <h3 className="text-xl font-medium mb-4">What You'll Get</h3>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Access to all 20+ Creative Cloud apps for desktop and mobile</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>100GB of cloud storage to keep your files safe and accessible</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Thousands of Adobe fonts for all your projects</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Premium templates and assets to accelerate your workflow</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Adobe Portfolio to showcase your work professionally</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Adobe Behance to connect with the creative community</span>
                </li>
              </ul>
              
              <div className="relative rounded-lg overflow-hidden mb-6">
                <AnimatedImage
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Person using Adobe Creative Cloud"
                  animation="fade-in"
                  className="rounded-lg"
                />
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p className="mb-2">
                  <strong>14-day money-back guarantee.</strong> Not satisfied? Get a full refund within 14 days of purchase.
                </p>
                <p>
                  <strong>Automatic renewal.</strong> Your subscription will automatically renew after 1 year. You can cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
<script src="https://js.stripe.com/v3/"></script>

export default PurchasePage;
