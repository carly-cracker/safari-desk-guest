// pricing.ts
export interface Feature {
  id: number;
  name: string;
  isAvailable: boolean;
}

export interface SaaSPlan {
  id: number;
  package_name: string;
  pricePerAgent: number;
  basePrice: number;
  trial_day: number;
  isRecommended: boolean;
  features: Feature[];
}

export interface SupportTier {
  id: string;
  tier_name: string;
  totalPrice: number;
  features: string[];
}

export interface OnPremPlan {
  id: string;
  package_name: string;
  price: number;
  isRecommended: boolean;
  features: Feature[];
  trial_day: number;
  supportTiers: SupportTier[];
}

export interface PricingData {
  saas: {
    monthly: SaaSPlan[];
    yearly: SaaSPlan[];
  };
  onPrem: OnPremPlan[];
}

export const data = {
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
};

export default data;
