import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Home,
  Users,
  Building,
  Globe,
  Briefcase,
  FileText,
  Calculator,
  CreditCard,
  Shield,
  FileCheck,
  Plane,
} from "lucide-react";

const Page = () => {
  const pages = [
    {
      path: "/",
      title: "Home",
      description: "Main landing page with company overview and services",
      icon: Home,
      category: "Main",
    },
    {
      path: "/aboutus",
      title: "About Us",
      description: "Learn about our company, mission, and team",
      icon: Users,
      category: "Company",
    },
    {
      path: "/business-setup/mainland-company-formation-in-dubai",
      title: "Mainland Company",
      description: "Mainland company formation services in UAE",
      icon: Building,
      category: "Company Formation",
    },
    {
      path: "/business-setup/freezone-company-formation-in-dubai",
      title: "Free Zone",
      description: "Free zone company setup and benefits",
      icon: Globe,
      category: "Company Formation",
    },
    {
      path: "/business-setup/offshore-company-formation-in-dubai",
      title: "Offshore Company",
      description: "Offshore company formation and advantages",
      icon: Briefcase,
      category: "Company Formation",
    },
    {
      path: "/business-setup/sme-company-formation-in-dubai/",
      title: "SME Company",
      description: "Small and medium enterprise company services",
      icon: Building,
      category: "Company Formation",
    },
    {
      path: "/business-setup/tarakhees-company-formation-in-dubai",
      title: "Tarakhees",
      description: "Tarakhees company formation services",
      icon: FileText,
      category: "Company Formation",
    },
    {
      path: "/legal-document-services",
      title: "Legal Document Services",
      description: "Professional legal document preparation and processing",
      icon: FileText,
      category: "Legal Services",
    },
    {
      path: "/document-legal-service",
      title: "Document Legal Service",
      description: "Legal document services and processing",
      icon: FileCheck,
      category: "Legal Services",
    },
    {
      path: "/financial-advisory",
      title: "Financial Advisory",
      description: "Expert financial consulting and advisory services",
      icon: Calculator,
      category: "Financial Services",
    },
    {
      path: "/tax",
      title: "Tax Services",
      description: "Tax planning, filing, and compliance services",
      icon: CreditCard,
      category: "Financial Services",
    },
    {
      path: "/brand-register",
      title: "Brand Register",
      description: "Trademark and brand registration services",
      icon: Shield,
      category: "Legal Services",
    },
    {
      path: "/visa-immigration",
      title: "Visa & Immigration",
      description: "Visa processing and immigration services",
      icon: Plane,
      category: "Immigration Services",
    },
    {
      path: "/office-space",
      title: "Office Space",
      description: "Office space solutions and workspace services",
      icon: Building,
      category: "Business Services",
    },
    {
      path: "/additional-service",
      title: "Additional Services",
      description: "Additional business services and support",
      icon: Briefcase,
      category: "Business Services",
    },
  ];

  const categories = pages.reduce((acc, page) => {
    if (!acc[page.category]) {
      acc[page.category] = [];
    }
    acc[page.category].push(page);
    return acc;
  }, {} as Record<string, typeof pages>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            All Pages Directory
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Navigate through all available pages in our application. Each page
            is organized by category for easy browsing.
          </p>
        </div>

        <div className="grid gap-8">
          {Object.entries(categories).map(([category, categoryPages]) => (
            <div key={category} className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryPages.map((page) => {
                  const IconComponent = page.icon;
                  return (
                    <Card
                      key={page.path}
                      className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <IconComponent className="h-5 w-5 text-blue-600" />
                          </div>
                          <CardTitle className="text-lg font-semibold text-gray-900">
                            {page.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <CardDescription className="text-gray-600 mb-4">
                          {page.description}
                        </CardDescription>
                        <div className="flex items-center justify-between">
                          <code className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-700">
                            {page.path}
                          </code>
                          <Button
                            asChild
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            <Link
                              to={page.path}
                              className="flex items-center space-x-1"
                            >
                              <span>Visit</span>
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Quick Navigation</h3>
              <p className="text-blue-100 mb-6">
                Use this page as a reference to quickly navigate to any section
                of our website.
              </p>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Link to="/" className="flex items-center space-x-2">
                  <Home className="h-5 w-5" />
                  <span>Back to Home</span>
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;
