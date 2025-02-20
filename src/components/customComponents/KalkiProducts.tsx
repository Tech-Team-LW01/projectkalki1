// components/KrutrimProducts.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const KrutrimProducts = () => {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-2">Discover Krutrim</h1>
      <p className="text-gray-600 mb-4">
        Explore Krutrim's host of offerings across a comprehensive AI stack.
      </p>

      <div className="flex flex-col gap-8">
        {/* First Row - Full Width Card */}
        <Card className="w-full border rounded-lg overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Cloud Infrastructure</h3>
                <p className="text-gray-600 mb-4">
                  High-performance GPU solutions for AI training with flexibility and power for efficient enterprise scale
                </p>
                <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                  Learn more →
                </Button>
              </div>
              <div className="flex-1">
                <img 
                  src="/cloud-infrastructure.png" 
                  alt="Cloud Infrastructure"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Second Row - Two Half Width Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border rounded-lg overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Krutrim AI Studio</h3>
              <p className="text-gray-600 mb-4">
                Build, select, customize and orchestrate AI models for your specific needs. Comprehensive model catalog.
              </p>
              <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                Learn more →
              </Button>
              <div className="mt-6">
                <img 
                  src="/krutrim-spectre.png" 
                  alt="Krutrim Spectre"
                  className="w-full h-auto"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border rounded-lg overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">AI Customer Care</h3>
              <p className="text-gray-600 mb-4">
                Customer support and service experience by leveraging agents across use-cases, automating supporting tasks.
              </p>
              <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                Learn more →
              </Button>
              <div className="mt-6">
                <img 
                  src="/customer-support.png" 
                  alt="Customer Support Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Third Row - Full Width Card */}
        <Card className="w-full border rounded-lg overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Comprehensive Mapping Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Use our powerful mapping tools: real-time navigation, dynamic maps, precise routing and advanced location search.
                </p>
                <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                  Learn more →
                </Button>
              </div>
              <div className="flex-1">
                <img 
                  src="/mapping-solution.png" 
                  alt="Mapping Solution"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KrutrimProducts;