import React from "react";
import Image from "next/image";
import { FaCertificate, FaShareAlt, FaUserTie, FaSuitcase } from "react-icons/fa";

// Hardcoded certification features data
const certificationFeatures = [
  {
    icon: <FaCertificate className="text-white text-xl" />,
    title: "Official and Verified",
    description:
      "Receive an instructor-signed certificate with the institution's logo to verify your achievements and increase your job prospects.",
  },
  {
    icon: <FaShareAlt className="text-white text-xl" />,
    title: "Easily Shareable",
    description:
      "Add the certificate to your CV or Resume, or post it directly on LinkedIn, Instagram, and Twitter.",
  },
  {
    icon: <FaUserTie className="text-white text-xl" />,
    title: "Enhances Credibility",
    description:
      "Use your certificate to enhance your professional credibility and stand out among your peers as an expert.",
  },
  {
    icon: <FaSuitcase className="text-white text-xl" />,
    title: "Increase Opportunities",
    description:
      "Showcase your achieved skill set using your certificate to attract employers for desired job opportunities.",
  },
];

interface CertificateDetailsProps {
  course: {
    title: string;
    certificateImage: string;
  };
}

const defaultCertificate = "/assets/devops2.jpg";

const CertificateDisplay: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 via-white to-[#000080] py-6 sm:py-8 px-3">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl md:text-3xl font-bold mb-2 text-[#000080] ">
            Get Certified
          </h1>
          <p className="text-sm md:text-base text-gray-700 px-4">
            Earn your{" "}
            <span className="text-[#000080] font-semibold">certification</span> upon
            completing the required tasks.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          {/* Features Grid */}
          <div className="w-full md:w-2/3 order-2 md:order-1">
            <div className="grid sm:grid-cols-2 gap-4">
              {certificationFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col space-y-2">
                    <div className="p-2 bg-[#000080] rounded-full w-fit">
                      {feature.icon}
                    </div>
                    <h3 className="text-base font-bold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificate Image */}
          <div className="w-full md:w-1/3 order-1 md:order-2 flex justify-center">
            <div className="w-[180px] sm:w-[220px] md:w-full max-w-[300px]">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#000080] to-red-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white rounded-lg overflow-hidden">
                  <Image
                    src={ defaultCertificate}
                    alt={` Certificate`}
                    width={300}
                    height={400}
                    className="object-cover w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateDisplay;
