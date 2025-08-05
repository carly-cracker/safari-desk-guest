import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, Users, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function RequestDemo() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    phoneNumber: '',
    companySize: '',
    industry: '',
    useCase: '',
    preferredDate: '',
    preferredTime: '',
    additionalNotes: '',
    agreeToTerms: false,
    subscribeToUpdates: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo request submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              See SafariDesk in Action
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Schedule a personalized demo and discover how SafariDesk can transform your team's productivity. 
              Our experts will show you exactly how our platform can solve your specific challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-blue-100">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>30-minute session</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Personalized walkthrough</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>No commitment required</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Demo Request Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Request Your Demo</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Work Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="phoneNumber">Phone Number</Label>
                        <Input
                          id="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                        />
                      </div>

                      {/* Company Information */}
                      <div className="border-t pt-6">
                        <h3 className="text-lg font-semibold mb-4">Company Information</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="company">Company Name *</Label>
                            <Input
                              id="company"
                              value={formData.company}
                              onChange={(e) => handleInputChange('company', e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="jobTitle">Job Title *</Label>
                            <Input
                              id="jobTitle"
                              value={formData.jobTitle}
                              onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                          <div>
                            <Label htmlFor="companySize">Company Size</Label>
                            <Select onValueChange={(value) => handleInputChange('companySize', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select company size" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1-10">1-10 employees</SelectItem>
                                <SelectItem value="11-50">11-50 employees</SelectItem>
                                <SelectItem value="51-200">51-200 employees</SelectItem>
                                <SelectItem value="201-500">201-500 employees</SelectItem>
                                <SelectItem value="501-1000">501-1000 employees</SelectItem>
                                <SelectItem value="1000+">1000+ employees</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="industry">Industry</Label>
                            <Select onValueChange={(value) => handleInputChange('industry', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select industry" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="technology">Technology</SelectItem>
                                <SelectItem value="finance">Finance</SelectItem>
                                <SelectItem value="healthcare">Healthcare</SelectItem>
                                <SelectItem value="education">Education</SelectItem>
                                <SelectItem value="retail">Retail</SelectItem>
                                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                                <SelectItem value="consulting">Consulting</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      {/* Demo Preferences */}
                      <div className="border-t pt-6">
                        <h3 className="text-lg font-semibold mb-4">Demo Preferences</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="preferredDate">Preferred Date</Label>
                            <Input
                              id="preferredDate"
                              type="date"
                              value={formData.preferredDate}
                              onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="preferredTime">Preferred Time</Label>
                            <Select onValueChange={(value) => handleInputChange('preferredTime', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select time" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                                <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                                <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                                <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                                <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                                <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="mt-4">
                          <Label htmlFor="useCase">What's your primary use case?</Label>
                          <Textarea
                            id="useCase"
                            placeholder="Tell us about your current challenges and what you're hoping to achieve with SafariDesk..."
                            value={formData.useCase}
                            onChange={(e) => handleInputChange('useCase', e.target.value)}
                            rows={3}
                          />
                        </div>

                        <div className="mt-4">
                          <Label htmlFor="additionalNotes">Additional Notes</Label>
                          <Textarea
                            id="additionalNotes"
                            placeholder="Any specific features you'd like to see or questions you have?"
                            value={formData.additionalNotes}
                            onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                            rows={2}
                          />
                        </div>
                      </div>

                      {/* Agreements */}
                      <div className="border-t pt-6 space-y-4">
                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
                          />
                          <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                            I agree to the{' '}
                            <a href="/terms" className="text-blue-600 hover:underline">
                              Terms of Service
                            </a>{' '}
                            and{' '}
                            <a href="/privacy" className="text-blue-600 hover:underline">
                              Privacy Policy
                            </a>
                            *
                          </label>
                        </div>

                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="subscribeToUpdates"
                            checked={formData.subscribeToUpdates}
                            onCheckedChange={(checked) => handleInputChange('subscribeToUpdates', checked as boolean)}
                          />
                          <label htmlFor="subscribeToUpdates" className="text-sm text-gray-600">
                            I'd like to receive product updates and tips via email
                          </label>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        disabled={!formData.agreeToTerms}
                      >
                        Schedule My Demo
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Demo Information Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* What to Expect */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">What to Expect</h3>
                      <ul className="space-y-3 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Personalized demo based on your needs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Live Q&A with product experts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Custom pricing discussion</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Implementation roadmap</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Free trial access</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Contact Information */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Phone className="h-4 w-4" />
                          <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Mail className="h-4 w-4" />
                          <span>demo@safariDesk.com</span>
                        </div>
                        <div className="flex items-start gap-2 text-gray-600">
                          <MapPin className="h-4 w-4 mt-0.5" />
                          <span>Available Monday-Friday<br />9 AM - 6 PM PST</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Popular Times */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Popular Demo Times</h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Tuesday 10 AM</span>
                          <span className="text-orange-500">High demand</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Wednesday 2 PM</span>
                          <span className="text-green-500">Available</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Thursday 11 AM</span>
                          <span className="text-orange-500">High demand</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Friday 3 PM</span>
                          <span className="text-green-500">Available</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Preview Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What You'll See in Your Demo</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our product experts will walk you through these key features and show you how they can 
                solve your specific challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Team Collaboration</h3>
                <p className="text-gray-600 text-sm">
                  See how teams work together seamlessly with real-time collaboration tools.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Project Management</h3>
                <p className="text-gray-600 text-sm">
                  Discover how to plan, track, and deliver projects on time and within budget.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Automation</h3>
                <p className="text-gray-600 text-sm">
                  Learn how to automate repetitive tasks and streamline your workflows.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
