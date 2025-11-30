
import React from 'react';
import { Zap, DollarSign, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-900">Listbridge</span>
          </div>
          <Button onClick={onGetStarted} variant="outline">Sign In</Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-gray-900 mb-6">
            Sell Everywhere,<br />Manage in One Place
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            List your items across eBay, Facebook Marketplace, Craigslist, OfferUp, and Mercari with AI-powered descriptions and smart pricing.
          </p>
          <Button onClick={onGetStarted} size="lg" className="gap-2">
            <Sparkles className="w-5 h-5" />
            Get Started Free
          </Button>
          <p className="text-sm text-gray-500 mt-4">3 free listings per month • No credit card required</p>
        </div>

        {/* Features */}
        <div className="max-w-5xl mx-auto mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-gray-900 mb-2">AI-Powered Listings</h3>
            <p className="text-gray-600">Take a photo and let AI create compelling descriptions instantly.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-gray-900 mb-2">Smart Pricing</h3>
            <p className="text-gray-600">Get AI-suggested prices based on market trends and comparables.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-gray-900 mb-2">Multi-Platform</h3>
            <p className="text-gray-600">Publish to 5+ marketplaces from a single dashboard.</p>
          </div>
        </div>

        {/* Pricing */}
        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-center text-gray-900 mb-12">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-gray-200">
              <h3 className="text-gray-900 mb-2">Free</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$0</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-600">✓ 3 listings per month</li>
                <li className="text-gray-600">✓ AI descriptions</li>
                <li className="text-gray-600">✓ Smart pricing</li>
                <li className="text-gray-600">✓ All platforms</li>
              </ul>
              <Button onClick={onGetStarted} variant="outline" className="w-full">Start Free</Button>
            </div>
            <div className="bg-indigo-600 p-8 rounded-xl shadow-lg border-2 border-indigo-700">
              <h3 className="text-white mb-2">Pro</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$19.99</span>
                <span className="text-indigo-200">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="text-white">✓ Unlimited listings</li>
                <li className="text-white">✓ Priority AI processing</li>
                <li className="text-white">✓ Advanced analytics</li>
                <li className="text-white">✓ Priority support</li>
              </ul>
              <Button onClick={onGetStarted} variant="secondary" className="w-full bg-white text-indigo-600 hover:bg-indigo-50">Start Pro Trial</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

