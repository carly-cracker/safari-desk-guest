import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Calendar, Star, Bug, Zap, Plus, ArrowRight, Filter } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface ChangelogEntry {
  id: string;
  version: string;
  date: string;
  type: 'major' | 'minor' | 'patch';
  featured: boolean;
  changes: {
    type: 'feature' | 'improvement' | 'bugfix' | 'breaking';
    title: string;
    description: string;
    category?: string;
  }[];
}

const mockChangelog: ChangelogEntry[] = [
  {
    id: '1',
    version: '2.4.0',
    date: '2024-03-15',
    type: 'minor',
    featured: true,
    changes: [
      {
        type: 'feature',
        title: 'Advanced Team Analytics',
        description: 'Get deeper insights into your team\'s productivity with new analytics dashboard, performance metrics, and customizable reports.',
        category: 'Analytics'
      },
      {
        type: 'feature',
        title: 'Smart Task Automation',
        description: 'Automate repetitive tasks with our new workflow builder. Create custom triggers and actions to streamline your processes.',
        category: 'Automation'
      },
      {
        type: 'improvement',
        title: 'Enhanced Mobile Experience',
        description: 'Redesigned mobile interface with improved navigation, faster loading times, and better touch interactions.',
        category: 'Mobile'
      },
      {
        type: 'bugfix',
        title: 'Fixed Notification Delays',
        description: 'Resolved issues with notification delivery and improved real-time sync across all devices.',
        category: 'Notifications'
      }
    ]
  },
  {
    id: '2',
    version: '2.3.2',
    date: '2024-03-01',
    type: 'patch',
    featured: false,
    changes: [
      {
        type: 'bugfix',
        title: 'Calendar Sync Improvements',
        description: 'Fixed synchronization issues with Google Calendar and Outlook integration.',
        category: 'Integrations'
      },
      {
        type: 'improvement',
        title: 'Performance Optimization',
        description: 'Improved app loading speed by 40% and reduced memory usage.',
        category: 'Performance'
      },
      {
        type: 'bugfix',
        title: 'File Upload Error Fix',
        description: 'Resolved error that prevented large file uploads in certain browsers.',
        category: 'Files'
      }
    ]
  },
  {
    id: '3',
    version: '2.3.0',
    date: '2024-02-15',
    type: 'minor',
    featured: true,
    changes: [
      {
        type: 'feature',
        title: 'Time Tracking Integration',
        description: 'Built-in time tracking with detailed reports, billable hours tracking, and client invoicing capabilities.',
        category: 'Time Tracking'
      },
      {
        type: 'feature',
        title: 'Custom Field Types',
        description: 'Create custom fields for projects and tasks with support for dropdowns, dates, numbers, and rich text.',
        category: 'Customization'
      },
      {
        type: 'improvement',
        title: 'Improved Search Functionality',
        description: 'Enhanced search with filters, saved searches, and intelligent suggestions.',
        category: 'Search'
      }
    ]
  },
  {
    id: '4',
    version: '2.2.1',
    date: '2024-02-01',
    type: 'patch',
    featured: false,
    changes: [
      {
        type: 'bugfix',
        title: 'Security Updates',
        description: 'Enhanced security measures and fixed potential vulnerabilities.',
        category: 'Security'
      },
      {
        type: 'improvement',
        title: 'Export Functionality',
        description: 'Improved data export with new formats and faster processing.',
        category: 'Export'
      }
    ]
  },
  {
    id: '5',
    version: '2.2.0',
    date: '2024-01-15',
    type: 'minor',
    featured: false,
    changes: [
      {
        type: 'feature',
        title: 'Kanban Board Views',
        description: 'Visualize your workflow with customizable Kanban boards, swimlanes, and card templates.',
        category: 'Project Management'
      },
      {
        type: 'feature',
        title: 'Advanced Permissions',
        description: 'Granular permission system with role-based access control and custom permission sets.',
        category: 'Security'
      },
      {
        type: 'improvement',
        title: 'Email Integration',
        description: 'Create tasks and comments directly from email with improved parsing and attachment handling.',
        category: 'Email'
      }
    ]
  }
];

const changeTypeIcons = {
  feature: Plus,
  improvement: Zap,
  bugfix: Bug,
  breaking: Star
};

const changeTypeColors = {
  feature: 'bg-green-100 text-green-800',
  improvement: 'bg-blue-100 text-blue-800',
  bugfix: 'bg-orange-100 text-orange-800',
  breaking: 'bg-red-100 text-red-800'
};

const versionTypeColors = {
  major: 'bg-purple-100 text-purple-800',
  minor: 'bg-blue-100 text-blue-800',
  patch: 'bg-gray-100 text-gray-800'
};

export default function Changelog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [filteredChangelog, setFilteredChangelog] = useState(mockChangelog);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterChangelog(term, selectedType);
  };

  const handleTypeFilter = (type: string) => {
    setSelectedType(type);
    filterChangelog(searchTerm, type);
  };

  const filterChangelog = (search: string, type: string) => {
    let filtered = mockChangelog;

    if (search) {
      filtered = filtered.filter(entry =>
        entry.version.toLowerCase().includes(search.toLowerCase()) ||
        entry.changes.some(change =>
          change.title.toLowerCase().includes(search.toLowerCase()) ||
          change.description.toLowerCase().includes(search.toLowerCase())
        )
      );
    }

    if (type !== 'all') {
      filtered = filtered.filter(entry =>
        entry.changes.some(change => change.type === type)
      );
    }

    setFilteredChangelog(filtered);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Changelog
              </h1>
              <p className="text-xl mb-8 text-indigo-100">
                Stay up to date with the latest features, improvements, and bug fixes in SafariDesk. 
                We're constantly evolving to make your experience better.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-indigo-100">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>Updated weekly</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  <span>Feature requests welcome</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search changelog..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={selectedType === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleTypeFilter('all')}
                >
                  All Changes
                </Button>
                <Button
                  variant={selectedType === 'feature' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleTypeFilter('feature')}
                  className="gap-1"
                >
                  <Plus className="h-3 w-3" />
                  Features
                </Button>
                <Button
                  variant={selectedType === 'improvement' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleTypeFilter('improvement')}
                  className="gap-1"
                >
                  <Zap className="h-3 w-3" />
                  Improvements
                </Button>
                <Button
                  variant={selectedType === 'bugfix' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleTypeFilter('bugfix')}
                  className="gap-1"
                >
                  <Bug className="h-3 w-3" />
                  Bug Fixes
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Changelog Entries */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {filteredChangelog.length === 0 ? (
                <div className="text-center py-12">
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No changelog entries found matching your search.</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredChangelog.map((entry, index) => (
                    <Card key={entry.id} className={`overflow-hidden ${entry.featured ? 'ring-2 ring-blue-200' : ''}`}>
                      <CardContent className="p-0">
                        {/* Entry Header */}
                        <div className={`px-6 py-4 ${entry.featured ? 'bg-gradient-to-r from-blue-50 to-indigo-50' : 'bg-gray-50'} border-b`}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <h2 className="text-2xl font-bold text-gray-900">
                                v{entry.version}
                              </h2>
                              <Badge className={versionTypeColors[entry.type]}>
                                {entry.type} release
                              </Badge>
                              {entry.featured && (
                                <Badge className="bg-yellow-100 text-yellow-800">
                                  <Star className="h-3 w-3 mr-1" />
                                  Featured
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Calendar className="h-4 w-4" />
                              <span>{formatDate(entry.date)}</span>
                            </div>
                          </div>
                        </div>

                        {/* Changes List */}
                        <div className="p-6">
                          <div className="space-y-4">
                            {entry.changes.map((change, changeIndex) => {
                              const IconComponent = changeTypeIcons[change.type];
                              return (
                                <div key={changeIndex} className="flex gap-4">
                                  <div className={`p-2 rounded-lg ${changeTypeColors[change.type]} flex-shrink-0`}>
                                    <IconComponent className="h-4 w-4" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <h3 className="font-semibold text-gray-900">{change.title}</h3>
                                      {change.category && (
                                        <Badge variant="outline" className="text-xs">
                                          {change.category}
                                        </Badge>
                                      )}
                                    </div>
                                    <p className="text-gray-600 text-sm">{change.description}</p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-gray-600 mb-8">
                Get notified about new features, improvements, and important updates via email.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="flex-1"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                No spam, unsubscribe at any time
              </p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Development Activity</h2>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="p-4">
                  <div className="text-3xl font-bold text-blue-600 mb-2">47</div>
                  <div className="text-sm text-gray-600">Features Added</div>
                  <div className="text-xs text-gray-500">This quarter</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-green-600 mb-2">128</div>
                  <div className="text-sm text-gray-600">Improvements</div>
                  <div className="text-xs text-gray-500">This quarter</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-orange-600 mb-2">93</div>
                  <div className="text-sm text-gray-600">Bugs Fixed</div>
                  <div className="text-xs text-gray-500">This quarter</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
                  <div className="text-sm text-gray-600">Releases</div>
                  <div className="text-xs text-gray-500">This quarter</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
