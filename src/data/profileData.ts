
// data/profileData.ts

export interface Profile {
  name: string;
  profilePicture: string;
  company: string;
  category: string;
}

export interface Category {
  id: string;
  title: string;
  color: string;
  description: string;
}
export const categories: Category[] = [
  {
    id: "core-team",
    title: "Core Team Members",
    color: "#ff6820",  // 1st color
    description: "Learn from professionals with years of experience in leading tech companies."
  },
  {
    id: "data-specialist",
    title: "Data Specialist",
    color: "#07038d",  // 2nd color
    description: "Learn from professionals with years of experience in leading tech companies."
  },
  {
    id: "ai-tool-expert",
    title: "AI Tools Expert",
    color: "#046a38",  // 3rd color
    description: "Connect with technical leaders who shape the industry."
  },
  {
    id: "ai-model-trainer",
    title: "AI Model Trainer",
    color: "#ff6820",  // 1st color
    description: "Meet the innovators who drive technological advancement."
  },
  {
    id: "data-center-expert",
    title: "Data Center Expert",
    color: "#07038d",  // 2nd color
    description: "Meet the innovators who drive technological advancement."
  },
  {
    id: "solar-energy-advisor",
    title: "Solar Energy Advisor",
    color: "#046a38",  // 3rd color
    description: "Meet the innovators who drive technological advancement."
  },
  {
    id: "solar-energy-advisor",
    title: "Networking Specialist",
    color: "#ff6820",  // 1st color
    description: "Meet the innovators who drive technological advancement."
  },
  {
    id: "cooling-system-innovator",
    title: "Cooling System Innovator",
    color: "#07038d",  // 2nd color
    description: "Meet the innovators who drive technological advancement."
  },
  {
    id: "proposal-&-documentaion-expert",
    title: "Proposal & Documentation Expert",
    color: "#046a38",  // 3rd color
    description: "Meet the innovators who drive technological advancement."
  },
  {
    id: "pitch-deck-creator",
    title: "Pitch Deck Creator",
    color: "#ff6820",  // 1st color
    description: "Meet the innovators who drive technological advancement."
  },
  {
    id: "sponsorship-&-fundraising-manager",
    title: "Sponsorship & Fundraising Manager",
    color: "#07038d",  // 2nd color
    description: "Meet the innovators who drive technological advancement."
  },
  {
    id: "social-media-manager",
    title: "Social Media Manager",
    color: "#046a38",  // 3rd color
    description: "Meet the innovators who drive technological advancement."
  },
  {
    id: "content-writer",
    title: "Content Writer",
    color: "#ff6820",  // 1st color
    description: "Meet the innovators who drive technological advancement."
  },
  {
    id: "video-editor",
    title: "Video Editor",
    color: "#07038d",  // 2nd color
    description: "Meet the innovators who drive technological advancement."
  },
  {
    id: "data-scrapping-team",
    title: "Data Scrapping Team",
    color: "#046a38",  // 3rd color
    description: "Meet the innovators who drive technological advancement."
  }
];
export const profileData: Profile[] = [
  // Data Specialist
  {
    name: "Vaibhav Sarkar",
    profilePicture: "https://media.licdn.com/dms/image/v2/D5635AQFarJixbGWYIA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1731416197695?e=1741075200&v=beta&t=0TWpRJwET2aiICaqSPvBo6JCCgkiH0HDzWc3meJKBTg",
    company: "Jagannath University",
    category: "data-specialist"
  },
  {
    name: "Darshit Srivastava",
    profilePicture: "https://media.licdn.com/dms/image/v2/C4E03AQGNEiIK_Hdp1A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1663585351751?e=1746057600&v=beta&t=EIU_wWMMO45ODd_toGDsql3OPh9fSVVPUsU0HOpKDKM",
    company: "ABES Engineering College",
    category: "data-specialist"
  },
  {
    name: "Rahul Kumar",
    profilePicture: "https://media.licdn.com/dms/image/v2/D4D03AQGHjtaIvvsaNQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695575644606?e=1746057600&v=beta&t=7jBQPOqmYR-Q8hsZ4r2UMsNJ2yPniXUv9BqqfPGLxVU",
    company: "Outreach Integrated Services",
    category: "data-specialist"
  },
  {
    name: "Surendiran S",
    profilePicture: "/assets/Collabrote/surendiran - Surendiran S.jpg",
    company: "TCS",
    category: "data-specialist"
  },
  {
    name: "Vaibhav Jain",
    profilePicture: "https://media.licdn.com/dms/image/v2/D4D03AQEAOan6KE2Arw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1670820791314?e=1746057600&v=beta&t=t8gSIYvswbkCfFFW953EzgOWWly6alCZQkkio1Ge2HA",
    company: "UKG",
    category: "data-specialist"
  },

  // AI Tools Expert
  {
    name: "Amish Agarwal",
    profilePicture: "https://media.licdn.com/dms/image/v2/D5635AQENsoHoFIbJSw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1710400296916?e=1741075200&v=beta&t=__n7bDMCfnfho2H4rD7meLq4bBU-V_3NZIJEteAXkvs",
    company: "Jodhpur Institute ",
    category: "ai-tool-expert"
  },
  {
    name: "Shubham Jawale",
    profilePicture: "https://media.licdn.com/dms/image/v2/D4D35AQEmTKq1PlmJrw/profile-framedphoto-shrink_800_800/B4DZU4HZENGkAo-/0/1740403217004?e=1741075200&v=beta&t=5aT0N2QIFAvm0lwTgKokIqxXaLGOuW240ehhshYvUCQ",
    company: "ALLIANZ TECHNOLOGY SE",
    category: "ai-tool-expert"
},{
  name: "Anish Mishra",
  profilePicture: "/assets/Collabrote/Anish Mishra.jpg", 
  company: "Wipro",
  category: "ai-tool-expert"
},{
  name: "Harvinder Singh",
  profilePicture: "https://media.licdn.com/dms/image/v2/D5635AQE9LIF5v8rRJw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1735738339169?e=1741075200&v=beta&t=uKQOVESWSjg6wQmjAr3p1bECmBYNfOB2wrv4yYpkYPk",
  company: "Self",
  category: "ai-tool-expert"
},
  // AI Model Trainer
  {
    name: "Bhavya Sharma",
    profilePicture: "https://media.licdn.com/dms/image/v2/D4D03AQHD6G7OIaAWOA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1701109331010?e=1746057600&v=beta&t=gWgaoRxAY9ACqU8fRGb8oL-CaesSLNDzN5QWIh4hmpI",
    company: "Mahaveer College",
    category: "ai-model-trainer"
  },
  
{
  name: "Sahil Rakhaiya",
  profilePicture: "https://media.licdn.com/dms/image/v2/D4D03AQE9ijmVIF2vLg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730110647432?e=1746057600&v=beta&t=rbg2aZ7gHhWn80G8SD0SMWuP-Iz92-fp0QvkZMlhMXc",
  company: "Marwadi University",
  category: "ai-model-trainer"
},

{
  name: "Jeeya Agrawal",
  profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQEKbwztA4IgzQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731760078957?e=1746057600&v=beta&t=DkQf3ZuIlEACXZv5RX_Icgwm7y3r7o9fsCDcc4xveAU",
  company: "Vision Institute of Technology",
  category: "ai-model-trainer"
},

{
  name: "Soumen Bhunia",
  profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQEdlf4PBpP9Mg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723874969891?e=1746057600&v=beta&t=gJZhhzAxzpcMpfcmkuLB8IpOfV-gUEgQ1Xv0L8RzAto",
  company: "BRAINWARE UNIVERSITY",
  category: "ai-model-trainer"
},



// data center expert
{
  name: "Anand Kumar",
  profilePicture: "https://media.licdn.com/dms/image/v2/D5635AQHFS-YzemPF4g/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1715078135641?e=1741075200&v=beta&t=V2S2hDysipYLkWKY4UXmfJOFG2WMwFpNVnDv0ykVQmg",
  company: "Infinite Computer Solutions",
  category: "data-center-expert"
},

{
  name: "Rohit Khapre",
  profilePicture: "https://media.licdn.com/dms/image/v2/D4D03AQFZOkBTNajpoQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1698177448028?e=1746057600&v=beta&t=w-me26LE06G_cKVPnRsKr0vN7coscQQiRoA2mp2sGW0",
  company: "Atrina Technologies",
  category: "data-center-expert"
},

{
  name: "Krishan Antil",
  profilePicture: "/assets/Collabrote/Krishan_Antil - krishan antil.jpg",
  company: "Mahindra",
  category: "data-center-expert"
},

// networking specialist 

{
  name: "Atharv Bharadwaj",
  profilePicture: "", // No LinkedIn profile picture available in Column 9
  company: "GLA UNIVERSITY",
  category: "networking-specialist"
},

{
  name: "Vishal Sharma",
  profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQERzifyqgxsrg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723282016908?e=1746057600&v=beta&t=sBR-Wwsl4pBjtWkpwUFI7xky5tkqIp3OC7URyq4Rvh0",
  company: "Mercer",
  category: "networking-specialist"
},


// cooling system innovator

{
  name: "Dinesh Ajmera",
  profilePicture: "https://media.licdn.com/dms/image/v2/D5635AQFfOMSNzy6Vaw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1723474421068?e=1741075200&v=beta&t=08OHGBPauP3-jYvleSQjoVrIM0gmYK_8QzxdjJXF7lo",
  company: "Arya Institute of Engineering",
  category: "cooling-system-innovator"
},
  // Social Media Manager
  {
    name: "Sayantan Samanta",
    profilePicture: "https://media.licdn.com/dms/image/v2/D4D03AQFMUB-gK3bhXw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1680722905923?e=1746057600&v=beta&t=LxiWZXlZ0aG1x3JLzwNa-Zz51ZZZJ130Dv3DQeRbmBw",
    company: "GCETT-Berhampore",
    category: "social-media-manager"
  },

  // Data Scrapping Team
  {
    name: "Aravind Reddy",
    profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQGxzLHts8o1Rw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724022449925?e=1746057600&v=beta&t=GVwZRYqhQ8AwO7DZnPGI87qafWnB1nXPHMjiMt6O3MA",
    company: "CGI",
    category: "data-scrapping-team"
},

{
    name: "Sharan Hiremani",
    profilePicture: "/assets/Collabrote/Sharan Hiremani.jpg", // Base64 placeholder image
    company: "KLS GIT",
    category: "data-scrapping-team"
},

{
    name: "Tanisha Banik",
    profilePicture: "https://media.licdn.com/dms/image/v2/C5603AQFZNRHZrS_Eow/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1627069540511?e=1746057600&v=beta&t=0yn9Kx20uxwO_D_F03nZSY4Y4xAx-MkDgNTNC3qlKQU",
    company: "Juniper Networks",
    category: "data-scrapping-team"
},

{
    name: "Nikhil",
    profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQF2hTQeH6YoIw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731132380817?e=1746057600&v=beta&t=hHMISOilo59ZLHhaUPbffB7LLhila3TU21AgMQQP6rw",
    company: "TITS",
    category: "ai-tool-expert"
}
];
// Export the categorized data directly
export const categorizedProfiles = categories.map(category => ({
  ...category,
  profiles: profileData.filter(profile => profile.category === category.id)
}));