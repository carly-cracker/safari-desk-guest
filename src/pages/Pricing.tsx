
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as Lucide from 'lucide-react';
import Header from '@/components/layout/Header';

// Pricing data interfaces
interface Feature {
  id: number;
  name: string;
  isAvailable: boolean;
}

interface SupportTier {
  id: string;
  tier_name: string;
  totalPrice: number;
  features: string[];
}

interface PricingPlan {
  id: string | number;
  package_name: string;
  basePrice?: number;
  price?: number;
  pricePerAgent?: number;
  trial_day: number;
  isRecommended: boolean;
  features: Feature[];
  supportTiers?: SupportTier[];
}

interface PricingData {
  saas: {
    monthly: PricingPlan[];
    yearly: PricingPlan[];
  };
  onPrem: PricingPlan[];
}

// Pricing data from AgencyDigital
const data: { pricing: PricingData } = {
  pricing: {
    saas: {
      monthly: [
        {
          id: 1,
          package_name: 'Freelance',
          pricePerAgent: 5,
          basePrice: 29,
          trial_day: 15,
          isRecommended: false,
          features: [
            { id: 1, name: 'Unlimited storage', isAvailable: true },
            { id: 2, name: 'All core features', isAvailable: true },
            { id: 3, name: 'iOS/Android apps', isAvailable: true },
            { id: 4, name: 'Custom domain', isAvailable: true },
            { id: 5, name: 'Downloadable backup', isAvailable: false },
            { id: 6, name: 'Hide "powered by SafariDesk"', isAvailable: false },
            { id: 7, name: 'Expedited support', isAvailable: false },
            { id: 8, name: 'HIPAA compliance, BAA', isAvailable: false },
          ]
        },
        {
          id: 2,
          package_name: 'Startup Pack',
          basePrice: 69,
          pricePerAgent: 5,
          trial_day: 30,
          isRecommended: true,
          features: [
            { id: 1, name: 'Unlimited storage', isAvailable: true },
            { id: 2, name: 'All core features', isAvailable: true },
            { id: 3, name: 'iOS/Android apps', isAvailable: true },
            { id: 4, name: 'Custom domain', isAvailable: true },
            { id: 5, name: 'Downloadable backup', isAvailable: false },
            { id: 6, name: 'Hide "powered by SafariDesk"', isAvailable: false },
            { id: 7, name: 'Expedited support', isAvailable: false },
            { id: 8, name: 'HIPAA compliance, BAA', isAvailable: false },
          ]
        },
        {
          id: 3,
          package_name: 'Company Pack',
          basePrice: 129,
          pricePerAgent: 5,
          trial_day: 30,
          isRecommended: false,
          features: [
            { id: 1, name: 'Unlimited storage', isAvailable: true },
            { id: 2, name: 'All core features', isAvailable: true },
            { id: 3, name: 'iOS/Android apps', isAvailable: true },
            { id: 4, name: 'Custom domain', isAvailable: true },
            { id: 5, name: 'Downloadable backup', isAvailable: true },
            { id: 6, name: 'Hide "powered by SafariDesk"', isAvailable: false },
            { id: 7, name: 'Expedited support', isAvailable: false },
            { id: 8, name: 'HIPAA compliance, BAA', isAvailable: false },
          ]
        },
        {
          id: 4,
          package_name: 'Enterprise Pack',
          basePrice: 249,
          pricePerAgent: 5,
          trial_day: 45,
          isRecommended: false,
          features: [
            { id: 1, name: 'Unlimited storage', isAvailable: true },
            { id: 2, name: 'All core features', isAvailable: true },
            { id: 3, name: 'iOS/Android apps', isAvailable: true },
            { id: 4, name: 'Custom domain', isAvailable: true },
            { id: 5, name: 'Downloadable backup', isAvailable: true },
            { id: 6, name: 'Hide "powered by SafariDesk"', isAvailable: true },
            { id: 7, name: 'Expedited support', isAvailable: true },
            { id: 8, name: 'HIPAA compliance, BAA', isAvailable: true },
          ]
        },
      ],
      yearly: [
        {
          id: 1,
          package_name: 'Freelance',
          basePrice: 100,
          pricePerAgent: 3,
          trial_day: 15,
          isRecommended: false,
          features: [
            { id: 1, name: 'Unlimited storage', isAvailable: true },
            { id: 2, name: 'All core features', isAvailable: true },
            { id: 3, name: 'iOS/Android apps', isAvailable: true },
            { id: 4, name: 'Custom domain', isAvailable: true },
            { id: 5, name: 'Downloadable backup', isAvailable: false },
            { id: 6, name: 'Hide "powered by SafariDesk"', isAvailable: false },
            { id: 7, name: 'Expedited support', isAvailable: false },
            { id: 8, name: 'HIPAA compliance, BAA', isAvailable: false },
          ]
        },
        {
          id: 2,
          package_name: 'Startup Pack',
          basePrice: 200,
          pricePerAgent: 3,
          trial_day: 30,
          isRecommended: true,
          features: [
            { id: 1, name: 'Unlimited storage', isAvailable: true },
            { id: 2, name: 'All core features', isAvailable: true },
            { id: 3, name: 'iOS/Android apps', isAvailable: true },
            { id: 4, name: 'Custom domain', isAvailable: true },
            { id: 5, name: 'Downloadable backup', isAvailable: true },
            { id: 6, name: 'Hide "powered by SafariDesk"', isAvailable: false },
            { id: 7, name: 'Expedited support', isAvailable: false },
            { id: 8, name: 'HIPAA compliance, BAA', isAvailable: false },
          ]
        },
        {
          id: 3,
          package_name: 'Company Pack',
          basePrice: 300,
          pricePerAgent: 3,
          trial_day: 30,
          isRecommended: false,
          features: [
            { id: 1, name: 'Unlimited storage', isAvailable: true },
            { id: 2, name: 'All core features', isAvailable: true },
            { id: 3, name: 'iOS/Android apps', isAvailable: true },
            { id: 4, name: 'Custom domain', isAvailable: true },
            { id: 5, name: 'Downloadable backup', isAvailable: true },
            { id: 6, name: 'Hide "powered by SafariDesk"', isAvailable: false },
            { id: 7, name: 'Expedited support', isAvailable: false },
            { id: 8, name: 'HIPAA compliance, BAA', isAvailable: false },
          ]
        },
        {
          id: 4,
          package_name: 'Enterprise Pack',
          basePrice: 400,
          pricePerAgent: 3,
          trial_day: 45,
          isRecommended: false,
          features: [
            { id: 1, name: 'Unlimited storage', isAvailable: true },
            { id: 2, name: 'All core features', isAvailable: true },
            { id: 3, name: 'iOS/Android apps', isAvailable: true },
            { id: 4, name: 'Custom domain', isAvailable: true },
            { id: 5, name: 'Downloadable backup', isAvailable: true },
            { id: 6, name: 'Hide "powered by SafariDesk"', isAvailable: true },
            { id: 7, name: 'Expedited support', isAvailable: true },
            { id: 8, name: 'HIPAA compliance, BAA', isAvailable: true },
          ]
        },
      ]
    },
    onPrem: [
      {
        id: 'onprem-base',
        package_name: 'On-Premise Base License',
        price: 999,
        isRecommended: true,
        features: [
          { id: 1, name: 'Full software installation package', isAvailable: true },
          { id: 2, name: 'Unlimited internal users/agents', isAvailable: true },
          { id: 3, name: 'Self-hosted on customer servers', isAvailable: true },
          { id: 4, name: 'Basic documentation & setup guides', isAvailable: true },
          { id: 5, name: 'Security updates & bug fixes', isAvailable: true },
          { id: 6, name: 'Standard email support (48-hour response)', isAvailable: true },
        ],
        trial_day: 0,
        supportTiers: [
          {
            id: 'tier-basic',
            tier_name: '🥉 Basic Support',
            totalPrice: 0,
            features: [
              'Email support (48-hour response)',
              'Online documentation & knowledge base',
              'Community forum access',
              'Software updates & security patches',
              'Basic installation guide',
            ],
          },
          {
            id: 'tier-pro',
            tier_name: '🥈 Professional Support',
            totalPrice: 499,
            features: [
              'Priority email support (24-hour response)',
              'Phone support (business hours)',
              'Live chat support',
              'Installation assistance (remote)',
              'Configuration guidance',
              'Monthly check-in calls',
              'Access to video tutorials',
            ],
          },
          {
            id: 'tier-enterprise',
            tier_name: '🥇 Enterprise Support',
            totalPrice: 999,
            features: [
              '24/7 phone & email support (4-hour response)',
              'Dedicated support representative',
              'Remote installation & configuration',
              'Custom integration assistance',
              'Priority feature requests',
              'Quarterly business reviews',
              'Training sessions for your team',
              'Direct access to engineering team',
            ],
          },
          {
            id: 'tier-platinum',
            tier_name: '🏆 Platinum Support',
            totalPrice: 1499,
            features: [
              '24/7 priority support (1-hour response)',
              'Dedicated customer success manager',
              'On-site installation & training (travel costs separate)',
              'Custom development consultations',
              'Proactive monitoring recommendations',
              'Annual health check & optimization',
              'Direct escalation to CTO',
              'Unlimited training sessions',
            ],
          },
        ],
      },
    ]
  }
};

const Pricing: React.FC = () => {
  const [isSaaS, setIsSaaS] = useState<boolean>(true);
  const [isMonthly, setIsMonthly] = useState<boolean>(true);
  const [agentCount, setAgentCount] = useState<number>(1);

  const currentPlans: PricingPlan[] = isSaaS
    ? (isMonthly ? data.pricing.saas.monthly : data.pricing.saas.yearly)
    : data.pricing.onPrem;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>

      <section className="py-40 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Find your perfect plan</h1>
            <p className="text-gray-600 mb-8">
              Streamline your workflow, manage projects, and empower your team with 
              SafariDesk, the all-in-one task management solution.
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">SaaS</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={!isSaaS}
                    onChange={() => setIsSaaS((prev) => !prev)}
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                </label>
                <span className="text-sm font-medium">On-Prem</span>
              </div>
              {isSaaS && (
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-medium px-3 py-1 rounded ${isMonthly ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                    Monthly
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={!isMonthly}
                      onChange={() => setIsMonthly((prev) => !prev)}
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600"></div>
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                  </label>
                  <span className={`text-sm font-medium px-3 py-1 rounded ${!isMonthly ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                    Annually
                  </span>
                </div>
              )}
            </div>
            <div className="text-center mt-4 text-sm font-medium text-gray-600">
              {isSaaS
                ? 'Flexible SaaS plans charged per agent + fixed platform fee.'
                : 'Annual license fee with optional support tiers.'}
            </div>
          </div>

          {isSaaS && (
            <div className="max-w-md mx-auto mb-8">
              <label className="block text-sm font-medium mb-2">Agents: {agentCount}</label>
              <input
                type="range"
                min={1}
                max={50}
                value={agentCount}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAgentCount(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {currentPlans.map((plan) => {
              const basePrice: number = plan.basePrice ?? plan.price ?? 0;
              const pricePerAgent: number = plan.pricePerAgent ?? 0;
              const agentsPrice: number = agentCount * pricePerAgent;

              return (
                <div
                  key={plan.id}
                  className={`relative bg-white rounded-lg shadow-md p-6 ${plan.isRecommended ? 'border-2 border-blue-600' : ''}`}
                >
                  {plan.isRecommended && (
                    <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">POPULAR</span>
                  )}
                  <div className="text-center">
                    <h3 className="text-lg font-semibold">{plan.package_name}</h3>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">
                        ${isSaaS ? basePrice + agentsPrice : basePrice}
                      </span>
                      <span className="text-gray-600">
                        /{isSaaS ? (isMonthly ? 'per month' : 'per year') : 'license'}
                      </span>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature.id} className="flex items-center">
                        <Lucide.Check className={`w-4 h-4 mr-2 ${feature.isAvailable ? 'text-green-500' : 'text-gray-300'}`} />
                        <span>{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`mt-6 w-full py-2 rounded ${plan.isRecommended ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} hover:opacity-90`}
                  >
                    Select Plan
                  </button>
                  <p className="text-center text-sm text-gray-600 mt-4">
                    {plan.trial_day} days free trial
                  </p>
                </div>
              );
            })}
          </div>

          {!isSaaS && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-center mb-8">Support Tiers</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {currentPlans.flatMap((plan) =>
                  plan.supportTiers?.map((tier) => (
                    <div key={tier.id} className="bg-white rounded-lg shadow-md p-6">
                      <div className="text-center">
                        <h3 className="text-lg font-semibold">{tier.tier_name}</h3>
                        <div className="mt-4">
                          <span className="text-3xl font-bold">
                            {tier.totalPrice === 0 ? 'Included' : `$${tier.totalPrice}`}
                          </span>
                          <span className="text-gray-600">/year</span>
                        </div>
                      </div>
                      <ul className="mt-6 space-y-3">
                        {tier.features.map((feat, i) => (
                          <li key={i} className="flex items-center">
                            <Lucide.Check className="w-4 h-4 mr-2 text-green-500" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        className="mt-6 w-full py-2 bg-gray-200 text-gray-800 rounded hover:opacity-90"
                      >
                        Select Support
                      </button>
                    </div>
                  )) || []
                )}
              </div>
            </div>
          )}

          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-8">Trusted by product companies</h2>
            <div className="max-w-md mx-auto p-6 bg-slate-900 text-white rounded-lg">
              <div className="text-3xl font-bold mb-2">90%</div>
              <p className="text-sm mb-4">
                of our customers love our services and recommend SafariDesk to their colleagues
              </p>
              <div className="text-2xl font-bold mb-2">4.9/5</div>
              <p className="text-sm">Average customer satisfaction score based on 2,000+ reviews</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2025 SafariDesk. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
