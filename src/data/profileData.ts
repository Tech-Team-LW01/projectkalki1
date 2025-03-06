
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
    id: "Management Team",
    title: "Management Team",
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
  // {
  //   id: "pitch-deck-creator",
  //   title: "Pitch Deck Creator",
  //   color: "#ff6820",  // 1st color
  //   description: "Meet the innovators who drive technological advancement."
  // },
  // {
  //   id: "sponsorship-&-fundraising-manager",
  //   title: "Sponsorship & Fundraising Manager",
  //   color: "#07038d",  // 2nd color
  //   description: "Meet the innovators who drive technological advancement."
  // },
  {
    id: "social-media-manager",
    title: "Social Media Manager",
    color: "#046a38",  // 3rd color
    description: "Meet the innovators who drive technological advancement."
  },
  // {
  //   id: "content-writer",
  //   title: "Content Writer",
  //   color: "#ff6820",  // 1st color
  //   description: "Meet the innovators who drive technological advancement."
  // },
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
  },
  {
    id: "Support Team",
    title: "LW India Support Team",
    color: "#ff6820",  // 1st color
    description: "Learn from professionals with years of experience in leading tech companies."
  },
];
export const profileData: Profile[] = [
  
  // Data Specialist

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
  {
    name: "Harshit Gupta",
    profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQFz8-VPn-4vJQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1707321514557?e=2147483647&v=beta&t=c6VwjBASbRVnMDm9HvG44LBCA6AOCyJRFSNshdOD_gs",
    company: "Harman India",
    category: "data-specialist"
  },
  {
    name: "Astha Goel",
    profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQE1eYXr8Vbd2w/profile-displayphoto-shrink_200_200/B56ZSJBGN0HoAc-/0/1737465555751?e=2147483647&v=beta&t=0xlnSyWYeYHb032cXzXHX85bGwUpU_RhTDupk2isN7Y",
    company: "Girikon Solutions ",
    category: "data-specialist"
  },
  {
    name: "Ishank Agarwal",
    profilePicture: "/assets/Collabrote/IshankAgrwal copy.jpeg",
    company: "Upwork ",
    category: "data-specialist"
  },
  {
    name: "Shreyash Baghel",
    profilePicture: "https://media.licdn.com/dms/image/v2/D5635AQG2dwQCgxRyhw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1734427946133?e=1741161600&v=beta&t=IryJrE1WLninGA_BGuOe3s-m2k9rvV-eUA2CtWBFVCg",
    company: "Quantiphi ",
    category: "data-specialist"
  },
 
  {
    name: "Akash Dey",
    profilePicture: "https://media.licdn.com/dms/image/v2/D5635AQG8UMqvvx3I9Q/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1736619173432?e=1741424400&v=beta&t=mKK5f2IIAJsBJK3jep1k1_9YlTp19Ab8aU9SUHmiYoY",
    company: "Sanico India Group",
    category: "data-specialist"
  },
  {
    name: "Urmil",
    profilePicture: "https://media.licdn.com/dms/image/v2/D4D03AQHnzEzmou82Bg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1685143396730?e=1746057600&v=beta&t=7kYGFoanCV1kGdgHlrtQR_E2u_LZEEbX6dnMT_pfZFQ",
    company: "accenture- DevSecOpss",
    category: "data-specialist"
  },
  {
    name: "Vaibhav Sarkar",
    profilePicture: "https://media.licdn.com/dms/image/v2/D5635AQFarJixbGWYIA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1731416197695?e=1741075200&v=beta&t=0TWpRJwET2aiICaqSPvBo6JCCgkiH0HDzWc3meJKBTg",
    company: "AI Enthusiast",
    category: "data-specialist"
  },
  {
    name: "Darshit Srivastava",
    profilePicture: "https://media.licdn.com/dms/image/v2/C4E03AQGNEiIK_Hdp1A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1663585351751?e=1746057600&v=beta&t=EIU_wWMMO45ODd_toGDsql3OPh9fSVVPUsU0HOpKDKM",
    company: "AI Enthusiast",
    category: "data-specialist"
  },
  {
    name: "Jayasurya Charugndla",
    profilePicture: "https://media.licdn.com/dms/image/v2/D5635AQFRdpAWPqL28g/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1730728468925?e=1741424400&v=beta&t=-geIQkzB3gDxDo9R9ZU-xw0tmK6NBwiyVh2OBWwBOVs",
    company: "AI Enthusiast",
    category: "data-specialist"
  },
  {
    name: "Priyam Sanodiya",
    profilePicture: "https://media.licdn.com/dms/image/v2/D4D03AQFA-EfmMxpK-Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721656769897?e=1746662400&v=beta&t=_RFm_1mCV1-b0LxyC7G1rS84XCbvtYhX_evh_YpDNf0",
    company: "AI Enthusiast",
    category: "data-specialist"
  },
  
  // AI Tools Expert
 
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
},

{
name: "Tanmay Agarwal",
profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQFXTTr4YmNrSw/profile-displayphoto-shrink_400_400/B56ZRmSL9AGsAg-/0/1736882831629?e=1746057600&v=beta&t=1Rk-xuR1vZENb3m8_fhnvp_UGgOGByfPiDaP7qG39vA",
company: "Okta",
category: "ai-tool-expert"
},
{
name: "Rahul Bharuka,",
profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQHsco_gb7JIDw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696185408620?e=1746057600&v=beta&t=biNEo2r3z5XCR54wm4xa36dpLl0uEyTZT6xiv6JQIas",
company: "Dentrils ",
category: "ai-tool-expert"
},
{
name: "Puru Sharma",
profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQGlge4hPijydg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709662571114?e=1746057600&v=beta&t=e4oyvOyc_2nesNWoZctj1eNjzExVrUGfcFDOxnUxczI",
company: "Edurigo Technologies",
category: "ai-tool-expert"
},
{
name: "Urmil",
profilePicture: "https://media.licdn.com/dms/image/v2/D4D03AQHnzEzmou82Bg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1685143396730?e=1746057600&v=beta&t=7kYGFoanCV1kGdgHlrtQR_E2u_LZEEbX6dnMT_pfZFQ",
company: "accenture- DevSecOpss",
category: "ai-tool-expert"
},
{
  name: "Harvinder Singh",
  profilePicture: "https://media.licdn.com/dms/image/v2/D5635AQE9LIF5v8rRJw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1735738339169?e=1741075200&v=beta&t=uKQOVESWSjg6wQmjAr3p1bECmBYNfOB2wrv4yYpkYPk",
  company: "AI Enthusiast",
  category: "ai-tool-expert"
},
{
  name: "Amish Agarwal",
  profilePicture: "https://media.licdn.com/dms/image/v2/D5635AQENsoHoFIbJSw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1710400296916?e=1741075200&v=beta&t=__n7bDMCfnfho2H4rD7meLq4bBU-V_3NZIJEteAXkvs",
  company: "AI Enthusiast ",
  category: "ai-tool-expert"
},
{
  name: "Nikhil",
  profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQF2hTQeH6YoIw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731132380817?e=1746057600&v=beta&t=hHMISOilo59ZLHhaUPbffB7LLhila3TU21AgMQQP6rw",
  company: "AI Enthusiast",
  category: "ai-tool-expert"
},
  // AI Model Trainer
  
{
  name: "Vineet Negi",
  profilePicture: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  company: "Cloudthat",
  category: "ai-model-trainer"
},
{
  name: "Manish Thapa",
  profilePicture: "https://media.licdn.com/dms/image/v2/C5103AQH2BVbMVBUqqg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1581600315910?e=1746662400&v=beta&t=L0Uw1P9S3zeruseMAajWlMARq36x7LwAyX170Z-TGjg",
  company: "Bluetris Technology Pvt Ltd",
  category: "ai-model-trainer"
  },
{
  name: "Soumen Bhunia",
  profilePicture: "https://media.licdn.com/dms/image/v2/D5635AQGXW0U7XhrOLA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1660002772504?e=1741431600&v=beta&t=sE7qjAT3JWYidoGJz8y2zViC7nkOyW3BinFsS3WGpdc",
  company: "AI Enthusiast",
  category: "ai-model-trainer"
},
{
  name: "Srashti Gupta",
  profilePicture: "https://media.licdn.com/dms/image/v2/D5635AQGXW0U7XhrOLA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1660002772504?e=1741431600&v=beta&t=sE7qjAT3JWYidoGJz8y2zViC7nkOyW3BinFsS3WGpdc",
  company: "AI Enthusiast",
  category: "ai-model-trainer"
},
{
  name: "Bhavya Sharma",
  profilePicture: "https://media.licdn.com/dms/image/v2/D4D03AQHD6G7OIaAWOA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1701109331010?e=1746057600&v=beta&t=gWgaoRxAY9ACqU8fRGb8oL-CaesSLNDzN5QWIh4hmpI",
  company: "AI Enthusiast",
  category: "ai-model-trainer"
},

{
name: "Sahil Rakhaiya",
profilePicture: "https://media.licdn.com/dms/image/v2/D4D03AQE9ijmVIF2vLg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730110647432?e=1746057600&v=beta&t=rbg2aZ7gHhWn80G8SD0SMWuP-Iz92-fp0QvkZMlhMXc",
company: "AI Enthusiast",
category: "ai-model-trainer"
},

{
name: "Jeeya Agrawal",
profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQEKbwztA4IgzQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731760078957?e=1746057600&v=beta&t=DkQf3ZuIlEACXZv5RX_Icgwm7y3r7o9fsCDcc4xveAU",
company: "AI Enthusiast",
category: "ai-model-trainer"
},

{
name: "Soumen Bhunia",
profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQEdlf4PBpP9Mg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723874969891?e=1746057600&v=beta&t=gJZhhzAxzpcMpfcmkuLB8IpOfV-gUEgQ1Xv0L8RzAto",
company: "AI Enthusiast",
category: "ai-model-trainer"
},

  {
    name: "Alok Tamrakar ",
    profilePicture: "https://media.licdn.com/dms/image/v2/D5635AQH1kPshYMfNCg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1728542201560?e=1741777200&v=beta&t=fTyDO5OBG2_WRiieOL29xg1herUQHN0qCnPGK4FgAdg",
    company: "AI Enthusiast",
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
{
  name: "DIWAKAR SHARMA",
  profilePicture: "/assets/Collabrote/DIWAKAR SHARMA.jpg",
  company: "JAD GLOBAL TRADERS",
  category: "data-center-expert"
},
{
  name: "Payal Gurunani",
  profilePicture: "/assets/Collabrote/Payal Gurunani.jpg",
  company: "AI Enthusiast",
  category: "data-center-expert"
},




// networking specialist 



{
  name: "Vishal Sharma",
  profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQERzifyqgxsrg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723282016908?e=1746057600&v=beta&t=sBR-Wwsl4pBjtWkpwUFI7xky5tkqIp3OC7URyq4Rvh0",
  company: "Mercer",
  category: "solar-energy-advisor"
},
{
  name: "Ajit Yadav",
  profilePicture: "https://media.licdn.com/dms/image/v2/D4D03AQG7UzDVYP8nvw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722675163369?e=1746662400&v=beta&t=MlbH3KPFzVC7r6ANVLBs7h-yUNlo1c08UPOXs-A5CBA",
  company: "F5 Networks ",
  category: "solar-energy-advisor"
},
{
  name: "Jakkala Varaprasad",
  profilePicture: "https://media.licdn.com/dms/image/v2/D5635AQFYWPXZ0_jq5Q/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1718220505322?e=1741431600&v=beta&t=msXWhOoGVTd4QpMCDxEa6MOxvwNufyypt5rnYsfh0tE",
  company: "AI Enthusiast",
  category: "solar-energy-advisor"
},
{
  name: "Deepali Pateriya",
  profilePicture: "https://media.licdn.com/dms/image/v2/D4D35AQELQMXoOdjasQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1732347243635?e=1741431600&v=beta&t=u8jpEZU5c4Za3Rcr3HnSpPi3l85kO6EEKqoYFnCrmJw",
  company: "AI Enthusiast",
  category: "solar-energy-advisor"
},
{
  name: "Ritik kumar sahu",
  profilePicture: "https://media.licdn.com/dms/image/v2/D4D03AQHCWuUkP54Otw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722094955997?e=1746057600&v=beta&t=oGV25M9Z10hUqi6jqtcdCmWM0ApoVDnDdT5AYGooA0M",
  company: "AI Enthusiast",
  category: "solar-energy-advisor"
},
{
  name: "Atharv Bharadwaj",
  profilePicture: "", // No LinkedIn profile picture available in Column 9
  company: "AI Enthusiast",
  category: "solar-energy-advisor"
},


// cooling system innovator


{
  name: "Dayasagar Barre",
  profilePicture: "https://media.licdn.com/dms/image/v2/D5635AQH4J5i3RwolaQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1672766567423?e=1741431600&v=beta&t=Z2nyI33Yk5FV_4w2V0p1eu0af4wOEhS8a-ejX-gJtaA",
  company: "Edugenius",
  category: "cooling-system-innovator"
},
  // Social Media Manager
  {
    name: "Sayantan Samanta",
    profilePicture: "https://media.licdn.com/dms/image/v2/D4D03AQFMUB-gK3bhXw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1680722905923?e=1746057600&v=beta&t=LxiWZXlZ0aG1x3JLzwNa-Zz51ZZZJ130Dv3DQeRbmBw",
    company: "AI Enthusiast",
    category: "social-media-manager"
  },
  {
    name: "Suhani thakur",
    profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQGtOK9OFfnNXA/profile-displayphoto-shrink_400_400/B56ZUzdymRGQAg-/0/1740325203831?e=1746057600&v=beta&t=COSVxRnzFNnrXI0yHN_4RyHsFsHcea_kA4cHDxxR2yM",
    company: "AI Enthusiast",
    category: "social-media-manager"
  },
  //video-editor
  {
    name: "Ajay kumar shah",
    profilePicture: "https://drive.google.com/open?id=182caBNl8J5FTQk9Ssc9Ovi23T15y75cw",
    company: "AI Enthusiast",
    category: "video-editor"
  },
  {
    name: "Raghav Tiwari",
    profilePicture: "https://media.licdn.com/dms/image/v2/D4D03AQHdZRPEWvku2g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702651390564?e=1746057600&v=beta&t=9Qu3vqf0XyDDEB8g8rTOzbPaX4SmBcx4bR0GPxCzY5g",
    company: "AI Enthusiast",
    category: "video-editor"
  },
  {
    name: "Dinesh Ajmera",
    profilePicture: "https://media.licdn.com/dms/image/v2/D5635AQFfOMSNzy6Vaw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1723474421068?e=1741075200&v=beta&t=08OHGBPauP3-jYvleSQjoVrIM0gmYK_8QzxdjJXF7lo",
    company: "AI Enthusiast",
    category: "cooling-system-innovator"
  },

  // Data Scrapping Team
 

{
    name: "Tanisha Banik",
    profilePicture: "https://media.licdn.com/dms/image/v2/C5603AQFZNRHZrS_Eow/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1627069540511?e=1746057600&v=beta&t=0yn9Kx20uxwO_D_F03nZSY4Y4xAx-MkDgNTNC3qlKQU",
    company: "Juniper Networks",
    category: "data-scrapping-team"
},

{
  name: "Pawan S",
  profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQGX9v1hKkZwRw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1692765389853?e=1746662400&v=beta&t=R1F7T5I29-KuFsPwr5VhguQn4-bJQADa2oB-tfcvPc4",
  company: "Beamteq",
  category: "data-scrapping-team"
},


{
  name: "Soniya Jain",
  profilePicture: "https://media.licdn.com/dms/image/v2/D5635AQFAj_r_8bAmMw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1737740536584?e=1741431600&v=beta&t=i-GkD-KvHavXREp-ZjLCImL-_N-Vic6-hsAcizNIRPk",
  company: "Globallogic",
  category: "data-scrapping-team"
},

{
  name: "Sanskruti Shimple",
  profilePicture: "https://media.licdn.com/dms/image/v2/D4D03AQH6qMBJ-vwCwQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1688194789299?e=1746057600&v=beta&t=P8mpHFNRaGKiNxeBSTKLtvadANqip7IYWwUJewsRgdE",
  company: "Accenture",
  category: "data-scrapping-team"
},
{
  name: "Manyata Gupta",
  profilePicture: "https://media.licdn.com/dms/image/v2/D5635AQGHSSjVSEgyLA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1722880391954?e=1741431600&v=beta&t=w_l_MJVGUltgclIVaxNUnxS0LUB-jyoWhvXCVBpmhKc",
  company: "AI Enthusiast",
  category: "data-scrapping-team"
},
{
  name: "Bhawana Sharma",
  profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQHRhY0KoNSrIA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728725470145?e=1746057600&v=beta&t=gKLsty1Z1ejktZlryGYol9ZkvQjtjWvpAjLERzRwnEQ",
  company: "AI Enthusiast",
  category: "data-scrapping-team"
},
{
  name: "Aravind Reddy",
  profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQGxzLHts8o1Rw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724022449925?e=1746057600&v=beta&t=GVwZRYqhQ8AwO7DZnPGI87qafWnB1nXPHMjiMt6O3MA",
  company: "AI Enthusiast",
  category: "data-scrapping-team"
},

{
  name: "Sharan Hiremani",
  profilePicture: "/assets/Collabrote/Sharan Hiremani.jpg", // Base64 placeholder image
  company: "AI Enthusiast",
  category: "data-scrapping-team"
},
{
  name: "Gaurav kamble",
  profilePicture: "https://media.licdn.com/dms/image/v2/D4D35AQHaDXX1RDjF8w/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1738701225003?e=1741431600&v=beta&t=c3nfltoGatWyUzY-TZ36qNrzuMJY-enYNGG87Izg0Bg",
  company: "AI Enthusiast",
  category: "data-scrapping-team"
},
{
  name: "Bhawana Sharma ",
  profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQHRhY0KoNSrIA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728725470145?e=1746057600&v=beta&t=gKLsty1Z1ejktZlryGYol9ZkvQjtjWvpAjLERzRwnEQ",
  company: "AI Enthusiast ",
  category: "ai-tool-expert"
},
//"Proposal & Documentation Team"
{
  name: "Nikhil Garhwal",
  profilePicture: "https://media.licdn.com/dms/image/v2/D4E03AQGIG_VmAAqXPQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719942448318?e=1746057600&v=beta&t=z19srmSFcf3AQRgYlNnG17Y8NmeeFtT5L4o7Jbklsw0",
  company: "AI Enthusiast",
  category: "proposal-&-documentaion-expert"
},
{
  name: "Hardesh Chaudhary",
  profilePicture: "https://media.licdn.com/dms/image/v2/C4E03AQFGD9bc9MqG6Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1597590974440?e=1746057600&v=beta&t=YTb2Cj1pfi_ynjNE4p_AeIAo5OMdHV9iZsjGXjIWx1U",
  company: "AI Enthusiast",
  category: "proposal-&-documentaion-expert"
},
{
  name: "Devesh Panwar",
  profilePicture: "https://media.licdn.com/dms/image/v2/D4D03AQGKwaSSw2iCYg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714066687277?e=1746057600&v=beta&t=J1MEotIbgbXECwFfiIqeSuRqvfXyOyLi4zZEyCb-2Cc",
  company: "AI Enthusiast",
  category: "proposal-&-documentaion-expert"
},

//Support team
{
  name: "Preeti Chandak",
  profilePicture: "/assets/Collabrote/DSC_1023.JPG",
  company: "LW India",
  category: "Support Team"
},
{
  name: "Ajay Meena",
  profilePicture: "/assets/Collabrote/Ajay.jpg",
  company: "LW India",
  category: "Support Team"
},
{
  name: "Sharwan Singh",
  profilePicture: "/assets/Collabrote/Shrwan.jpeg",
  company: "LW India",
  category: "Support Team"
},
{
  name: "Mona Jain",
  profilePicture: "/assets/Collabrote/IMG-20250226-WA0003.jpg",
  company: "LW India",
  category: "Support Team"
},
{
  name: "Syed Jibbran Ali",
  profilePicture: "/assets/Collabrote/Jibbran.jpeg",
  company: "LW India",
  category: "Support Team"
},
{
  name: "Priyanka Arora",
  profilePicture: "/assets/Collabrote/Priyanka.jpg",
  company: "LW India",
  category: "Support Team"
},
{
  name: "Arti Bansal",
  profilePicture: "/assets/Collabrote/Aarti.jpeg",
  company: "LW India",
  category: "Support Team"
},
{
  name: "Kirtan khuswaha",
  profilePicture: "https://media.licdn.com/dms/image/v2/D4D03AQFSrc8hAj_4HA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1732614295929?e=1746057600&v=beta&t=NAAuhQl4GD8EU4B6LB5H-HKZ5R1TVo0P4rjGrZQnnCo",
  company: "LW India",
  category: "Support Team"
},
{
  name: "Bhupesh Choudhary",
  profilePicture: "/assets/Collabrote/Bhupesh.png",
  company: "LW India",
  category: "Support Team"
},
{
  name: "Sumit Pal",
  profilePicture: "/assets/Collabrote/Sumit.jpg",
  company: "LW India",
  category: "Support Team"
},
{
  name: "Syeed Firoz",
  profilePicture: "/assets/Collabrote/sayeed.jpg",
  company: "LW India",
  category: "Support Team"
},
{
  name: "Dilip Jarwal",
  profilePicture: "/assets/Collabrote/Dilip2.jpg",
  company: "LW India",
  category: "Support Team"
},
{
  name: "Anshu Raghav",
  profilePicture: "/assets/Collabrote/Anshu.jpg",
  company: "LW India",
  category: "Support Team"
},
{
  name: "Priyanka Poonia",
  profilePicture: "/assets/Collabrote/PP.jpg",
  company: "LW India",
  category: "Support Team"
},
{
  name: "Tamanna Prajapati",
  profilePicture: "/assets/Collabrote/Tamanna.jpg",
  company: "LW India",
  category: "Support Team"
},
{
  name: "Aashana Sancheti",
  profilePicture: "/assets/Collabrote/AAShana.jpg",
  company: "LW India",
  category: "Support Team"
},

//Management Team

  {
    name: "Pavan Sai Punna",
    profilePicture: "https://media.licdn.com/dms/image/v2/D5635AQGDYuG_VfDaxw/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1703042389486?e=1741420800&v=beta&t=1UusL2uo7E5HdV2QfDdcYsRkq68fj9B1foJtaByzHjk",
    company: "Sreyas",
    category: "Management Team"
  },
  {
    name: "Arman Mishra ",
    profilePicture: "/assets/Collabrote/_DSC4426a.jpg",
    company: "Ai Enthausist",
    category: "Management Team"
  },
  {
    name: "Ram Prasad Pokhrel ",
    profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQHwzEgGbLdVhQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715440870395?e=1746662400&v=beta&t=OKYOoMPPEXDEx8yAEHOwk1bQUYZJZCim0-H2Ys0e3Bs",
    company: "Ai Enthausist",
    category: "Management Team"
  },
  {
    name: "Kamal Kishor ",
    profilePicture: "https://media.licdn.com/dms/image/v2/D5635AQFhA5UHV5UQiQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1738123248805?e=1741845600&v=beta&t=Cl__pIkWBAvKvAPaR9OgvT_vbst8ddmIAIXHMgkkbO8",
    company: "Ai Enthausist",
    category: "Management Team"
  },
  {
    name: "Shreya Singh",
    profilePicture: "https://media.licdn.com/dms/image/v2/D4D03AQHDN5DJm-U4WA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711444494283?e=1746662400&v=beta&t=OgbeDCH_bIy3EV4gFNblB56M9lz8sdGsVIIR6KlAgJI",
    company: "Ai Enthausist",
    category: "Management Team"
  },
  {
    name: "Surinder Jungral ",
    profilePicture: "https://media.licdn.com/dms/image/v2/D4D35AQGmXwzo56pLYQ/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1735728465395?e=1741420800&v=beta&t=2XtIZQ_U3VO71cwzA_veC2GZlV26icl3cRlGMApfRB0",
    company: "Ai Enthausist",
    category: "Management Team"
  },
  {
    name: "Parv Agarwal",
    profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQEZqdWgpdsMWQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724757447120?e=1746662400&v=beta&t=a15W5ChTZLXl9yg0gVmax4GwHzjavJ_Cnyy5BMBeAMQ",
    company: "Ai Enthausist",
    category: "Management Team"
  },
  
];
// Export the categorized data directly
export const categorizedProfiles = categories.map(category => ({
  ...category,
  profiles: profileData.filter(profile => profile.category === category.id)
}));