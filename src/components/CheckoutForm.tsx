
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, Lock } from 'lucide-react';
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js';
import Button from '@/components/Button';

const CheckoutForm = () => {
  const { toast } = useToast();
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  const cardElementStyle = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet
      return;
    }
    
    setProcessing(true);
    
    try {
      // Get a reference to the CardNumberElement
      const cardNumberElement = elements.getElement(CardNumberElement);
      
      if (!cardNumberElement) {
        throw new Error("Card element not found");
      }

      // Create payment method using the card element
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardNumberElement,
        billing_details: {
          name: formData.fullName,
          email: formData.email,
        },
      });

      if (error) {
        throw error;
      }

      // In a real implementation, you would send the payment method ID to your server
      // to complete the payment on the backend
      console.log('PaymentMethod created:', paymentMethod);
      
      // Simulate successful payment
      toast({
        title: "Payment Successful",
        description: "We've sent purchase instructions to your email.",
      });
      
      // In a real implementation, you would redirect to a confirmation page
      // window.location.href = "/confirmation";
    } catch (error: any) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Failed",
        description: error.message || "An error occurred during payment processing.",
        variant: "destructive",
      });
    } finally {
      setProcessing(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-xl font-medium">Your Information</h3>
        
        {/* Full Name Field */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-bold mb-1">
            Full Name*
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="E.g. John Doe"
            className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>
        
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-bold mb-1">
            Email Address*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E.g. john@example.com"
            className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <p className="mt-1 text-xs text-muted-foreground">
            We'll send purchase instructions to this email
          </p>
        </div>
      </div>
      
      {/* Credit Card Section */}
      <div className="pt-6 border-t border-border">
        <label className="block text-sm font-bold mb-3">
          Credit / Debit Card
        </label>
        
        <div className="space-y-4">
          {/* Card Number */}
          <div className="p-4 border border-input rounded-md">
            <label htmlFor="cardNumber" className="block text-sm mb-1 text-muted-foreground">
              Card Number
            </label>
            <CardNumberElement 
              id="cardNumber"
              options={cardElementStyle} 
              className="w-full py-2"
            />
          </div>
          
          {/* Card Expiry and CVC */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-input rounded-md">
              <label htmlFor="cardExpiry" className="block text-sm mb-1 text-muted-foreground">
                Expiration Date
              </label>
              <CardExpiryElement 
                id="cardExpiry"
                options={cardElementStyle} 
                className="w-full py-2"
              />
            </div>
            <div className="p-4 border border-input rounded-md">
              <label htmlFor="cardCvc" className="block text-sm mb-1 text-muted-foreground">
                CVC
              </label>
              <CardCvcElement 
                id="cardCvc"
                options={cardElementStyle} 
                className="w-full py-2"
              />
            </div>
          </div>
        </div>
        
        <Button 
          variant="primary"
          size="lg"
          fullWidth
          type="submit"
          disabled={processing || !stripe}
          icon={processing ? undefined : <CreditCard size={18} />}
          iconPosition="left"
          className="relative overflow-hidden bg-[#0570DE] mt-4"
        >
          {processing ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            "Order Now"
          )}
        </Button>
        
        <div className="mt-3 flex justify-center items-center text-xs text-muted-foreground">
          <Lock size={14} className="mr-1" />
          Secure payment processing
        </div>
        
        <p className="mt-4 text-xs text-center text-muted-foreground">
          By placing your order, you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </form>
  );
};

export default CheckoutForm;
