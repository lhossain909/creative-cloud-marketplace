
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import AnimatedImage from '@/components/AnimatedImage';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Check, CreditCard, Lock } from 'lucide-react';

const PurchasePage: React.FC = () => {
  const { toast } = useToast();
  const [processing, setProcessing] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    prefix: '',
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    // Credit card fields will be handled by Stripe or similar in a real implementation
    cardNumber: '',
    cardExpiry: '',
    cardCvc: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      toast({
        title: "Order Received",
        description: "We've sent purchase instructions to your email.",
      });
      setProcessing(false);
      
      // In a real implementation, you would redirect to a confirmation page
      // window.location.href = "https://pandaflow.shop/order-confirmed-2/";
    }, 1500);
  };
  
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
            
            <form onSubmit={handleSubmit} className="space-y-6" id="wrapper-7879-4983">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Your Information</h3>
                
                {/* Name Fields Section */}
                <div className="space-y-4">
                  <div className="mb-2">
                    <label htmlFor="name-fields" className="block text-sm font-bold mb-1">
                      Name
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="prefix" className="block text-xs text-muted-foreground mb-1">
                          Prefix
                        </label>
                        <select 
                          id="prefix"
                          name="prefix"
                          className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                          value={formData.prefix}
                          onChange={(e) => setFormData(prev => ({ ...prev, prefix: e.target.value }))}
                        >
                          <option value="">Select</option>
                          <option value="Mr.">Mr.</option>
                          <option value="Mrs.">Mrs.</option>
                          <option value="Ms.">Ms.</option>
                          <option value="Dr.">Dr.</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="firstName" className="block text-xs text-muted-foreground mb-1">
                          First Name*
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          placeholder="E.g. John"
                          className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="middleName" className="block text-xs text-muted-foreground mb-1">
                        Middle Name
                      </label>
                      <input
                        type="text"
                        id="middleName"
                        name="middleName"
                        placeholder="E.g. Smith"
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        value={formData.middleName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-xs text-muted-foreground mb-1">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="E.g. Doe"
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                
                {/* Email Field */}
                <div id="wrapper-4446-2937">
                  <label htmlFor="email" className="block text-sm font-bold mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E.g. john@doe.com"
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
              <div id="wrapper-3871-4460" className="pt-6 border-t border-border">
                <label htmlFor="card-element" className="block text-sm font-bold mb-3">
                  Credit / Debit Card
                </label>
                
                <div className="space-y-4 mb-4">
                  <div>
                    <label htmlFor="cardNumber" className="block text-xs text-muted-foreground mb-1">
                      Card Number*
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        className="w-full pl-4 pr-10 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required
                      />
                      <CreditCard size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cardExpiry" className="block text-xs text-muted-foreground mb-1">
                        Expiration Date*
                      </label>
                      <input
                        type="text"
                        id="cardExpiry"
                        name="cardExpiry"
                        placeholder="MM/YY"
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        value={formData.cardExpiry}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="cardCvc" className="block text-xs text-muted-foreground mb-1">
                        Security Code (CVC)*
                      </label>
                      <input
                        type="text"
                        id="cardCvc"
                        name="cardCvc"
                        placeholder="123"
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        value={formData.cardCvc}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="primary"
                  size="lg"
                  fullWidth
                  type="submit"
                  disabled={processing}
                  icon={processing ? undefined : <CreditCard size={18} />}
                  iconPosition="left"
                  className="relative overflow-hidden bg-[#0570DE]"
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

export default PurchasePage;
