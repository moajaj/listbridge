
import React, { useState } from 'react';
import { Plus, Home, List, MessageCircle, User, Zap, Package, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

interface DashboardProps {
  onLogout: () => void;
}

export function Dashboard({ onLogout }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<'home' | 'listings' | 'ai' | 'profile'>('home');

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">Listbridge</span>
          </div>
          <Button onClick={onLogout} variant="ghost" size="sm">Logout</Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-6 max-w-7xl mx-auto">
        {activeTab === 'home' && (
          <div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Package className="w-5 h-5 text-indigo-600" />
                  <span className="text-sm text-gray-600">Active Listings</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">Total Views</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">847</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-gray-900 mb-4">Quick Actions</h3>
              <Button className="w-full gap-2 mb-3">
                <Plus className="w-5 h-5" />
                Create New Listing
              </Button>
              <Button variant="outline" className="w-full gap-2">
                <Zap className="w-5 h-5" />
                Use AI Assistant
              </Button>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Package className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900">Vintage Camera Listed</p>
                    <p className="text-sm text-gray-500">Posted to 3 platforms • 2h ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900">Mountain Bike - New Views</p>
                    <p className="text-sm text-gray-500">45 views today • 5h ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'listings' && (
          <div>
            <h2 className="text-gray-900 mb-6">My Listings</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <Package className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600 mb-4">Your listings will appear here</p>
              <Button>Create Your First Listing</Button>
            </div>
          </div>
        )}

        {activeTab === 'ai' && (
          <div>
            <h2 className="text-gray-900 mb-6">AI Assistant</h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-gray-900">How can I help you today?</h3>
                  <p className="text-sm text-gray-500">Generate descriptions, suggest prices, or get tips</p>
                </div>
              </div>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  Generate product description
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Suggest optimal pricing
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Get selling tips
                </Button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div>
            <h2 className="text-gray-900 mb-6">Profile</h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900">Free Plan</h3>
                  <p className="text-sm text-gray-500">2 of 3 listings used this month</p>
                </div>
              </div>
              <Button className="w-full mb-3">Upgrade to Pro</Button>
              <Button variant="outline" className="w-full" onClick={onLogout}>Sign Out</Button>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
        <div className="max-w-lg mx-auto flex justify-around items-center">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-indigo-600' : 'text-gray-400'}`}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </button>
          <button
            onClick={() => setActiveTab('listings')}
            className={`flex flex-col items-center gap-1 ${activeTab === 'listings' ? 'text-indigo-600' : 'text-gray-400'}`}
          >
            <List className="w-6 h-6" />
            <span className="text-xs">Listings</span>
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`flex flex-col items-center gap-1 ${activeTab === 'ai' ? 'text-indigo-600' : 'text-gray-400'}`}
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-xs">AI</span>
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center gap-1 ${activeTab === 'profile' ? 'text-indigo-600' : 'text-gray-400'}`}
          >
            <User className="w-6 h-6" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

