// components/KrutrimProducts.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const KrutrimProducts = () => {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-xl md:text-4xl text-[#000080] font-bold mb-4">Available AI Infrastructure in India </h1>
      {/* <p className="text-gray-600 mb-4">
        Explore Krutrim's host of offerings across a comprehensive AI stack.
      </p> */}

      <div className="flex flex-col gap-8">
        {/* First Row - Full Width Card */}
        <Card className="w-full border rounded-lg overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">National Supercomputing Mission (NSM) Resources </h3>
                <ul className="text-gray-600 pl-4 list-disc mb-2">
                  <li><span  className="font-bold">PARAM Siddhi-AI:</span> India’s fastest AI-ready supercomputer. </li>
                  <li><span  className="font-bold">Project AUM:</span> India’s first indigenous HPC processor. </li>
                </ul>
                <Button variant="outline" className="text-green-600  border-green-600 hover:bg-green-50">
                  Learn more →
                </Button>
              </div>
              <div className="flex-1">
                <img 
                  src="/assets/KrutrimProducts/National_Supercomputing.jpeg" 
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
              <h3 className="text-xl font-semibold mb-2">AI4Bharat: A Key Collaborator </h3>
              <p className="text-gray-600 mb-4">
                
Developed by <span className="font-bold">IIT Madras</span>, specializes in Indian language AI models. 
              </p>
              <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                Learn more →
              </Button>
              <div className="mt-6">
                <img 
                  src="/assets/AIInfrastructure/A_futuristic.jpeg" 
                  alt="Krutrim Spectre"
                  className="w-full h-auto"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border rounded-lg overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Private-Sector Collaboration </h3>
              <ul className="text-gray-600 mb-4 list-disc pl-4">
                <li><span className="font-bold">Reliance & Tata's Partnership with NVIDIA</span> to scale AI compute capacity. </li>
<li><span className="font-bold">Infosys AI Model Training Initiatives</span> for enterprise solutions. </li>
              </ul>
              <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                Learn more →
              </Button>
              <div className="mt-6">
                <img 
                  src="/assets/AIInfrastructure/partnership.jpeg" 
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
                <h3 className="text-xl font-semibold mb-2">India is READY for a Hybrid CPU-GPU AI training model today!</h3>
                {/* <p className="text-gray-600 mb-4">
                  Use our powerful mapping tools: real-time navigation, dynamic maps, precise routing and advanced location search.
                </p> */}
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