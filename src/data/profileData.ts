// data/profileData.ts

// Define the type for profile data
interface Profile {
    name: string;
    profilePicture: string;
    company: string;
    linkedin?: string;
  }
  
  // Main profile data array
  export const profileData: Profile[] = [
    {
      name: "Vaibhav Jain",
      profilePicture: "https://media.licdn.com/dms/image/v2/D4D03AQEAOan6KE2Arw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1670820791314?e=1746057600&v=beta&t=t8gSIYvswbkCfFFW953EzgOWWly6alCZQkkio1Ge2HA",
      company: "Lead Engineer @ UKG",
      linkedin: "https://www.linkedin.com/in/vaibhav-jain-a923a0110?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      name: "Rahul Kumar Sarraf",
      profilePicture: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      company: "IT Administrator",
      linkedin: "https://media.licdn.com/dms/image/v2/D4D03AQGHjtaIvvsaNQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695575644606?e=1746057600&v=beta&t=7jBQPOqmYR-Q8hsZ4r2UMsNJ2yPniXUv9BqqfPGLxVU"
    },
    {
      name: "Rutwik Kshirsagar",
      profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQGCTF-Ry4NQIQ/profile-displayphoto-shrink_800_800/0/1731481253639?e=1742428800&v=beta&t=nPM-rH4YAQc8X3pgXXv9AaiixVA0toqOsl9S35vxuA8",
      company: "DevOps Engineer @ Yatra Online Ltd.",
    },
    {
      name: "Arpit Jindal",
      profilePicture: "https://media.licdn.com/dms/image/v2/D4D35AQG6DADB1Gb6vw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1718213596436?e=1737788400&v=beta&t=KkeqzNM6cUIXcjjaFeI878938fwkppXGyZLhRp1BZaA",
      company: "Senior DevOps Engineer @ BayOne Solutions",
    },
    {
      name: "Parth Patel",
      profilePicture: "https://media.licdn.com/dms/image/v2/D4D35AQEv_ZlwzjmqKw/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1724050111078?e=1737788400&v=beta&t=VqwD7FaJbakcWBWS3P4k5KWylYJQ7HN0s1RWN5nI9ig",
      company: "DevOps Engineer @ Jio",
    },
    {
      name: "Sheetal Agarwal",
      profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQF2q5vCUsgq-w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711353133970?e=1742428800&v=beta&t=Q69lCp1gKVIR3iSxy3xt9gTcxJR-WpR3QlybSVZwfjI",
      company: "DevOps Engineer @ Twimbit",
    },
    {
      name: "Rohit Jain",
      profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQHoW9sesrA6Lw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731653281849?e=1742428800&v=beta&t=73B0xmXPH3Sx7y2VXTREKEBphalErLoqpvRWIOqktGI",
      company: "DevOps Engineer @ Cloud Ambassadors",
    },
    {
      name: "Rahul Prajapati",
      profilePicture: "https://media.licdn.com/dms/image/v2/C4E03AQE-cOf4ySceJw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1618117471060?e=1742428800&v=beta&t=sUElwfxIzen9Lrx-kx1rPX0N58pyPWqcKfiB4BTgTpM",
      company: "DevOps Engineer @ Alteryx",
    },
    {
      name: "Laveena Jethani",
      profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQHiOkUsnxxITg/profile-displayphoto-shrink_800_800/B56ZPP_UsEGkAc-/0/1734361305412?e=1742428800&v=beta&t=rhmxWGoHHFZmYetQKiV7T609StsYb3rt_s1viHg_mcY",
      company: "DevOps Engineer @ RedHat",
    },
    {
      name: "Adil Ansari",
      profilePicture: "https://media.licdn.com/dms/image/v2/C4E03AQGMJIlo7lEWrA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1638083798521?e=1742428800&v=beta&t=DPbsRnaGBIuARXGTlioIa9ohpNEHENv9fzEQpTu5res",
      company: "Associate Software Engineer @ IGT Solutions",
    },
    {
      name: "Sarthak Agarwal",
      profilePicture: "https://media.licdn.com/dms/image/v2/D5603AQETlu2-4tVbMw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721056218487?e=1742428800&v=beta&t=iNxZ7nACna327CjSj9qMVc6yy21PIXKW5um2TpG1m1M",
      company: "Software Engineer @ Integraate Innovations",
    },
    {
      name: "Nishant Saini",
      profilePicture: "https://media.licdn.com/dms/image/v2/D5635AQFnOXjUV_FV0Q/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1724154848871?e=1737792000&v=beta&t=TGy_NEr383EhjyHXKGe6rwtmeuptpwMsCDaH0H0Sc6E",
      company: "DevOps Engineer @ The Modern Data Company",
    },
    {
      name: "Vikash Kaushik",
      profilePicture: "https://media.licdn.com/dms/image/v2/D4D03AQHpcQu9pIwmnQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711965805598?e=1742428800&v=beta&t=7-TD3sOfocIWlD0AO-bybNttjm6cSZKFOEhCg_8qQt8",
      company: "DevOps Engineer @ Nirmata",
    },
    {
      name: "Rupesh Jha",
      profilePicture: "https://media.licdn.com/dms/image/v2/D4D03AQEeqg_ffYQ2FA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1680794576122?e=1742428800&v=beta&t=Lf2Gqbejk_btN-svH7iMzJakjAvu64zfJmpOV0IBhXs",
      company: "DevOps Engineer @ Winjit Technologies",
    },
    {
      name: "Manmohan",
      profilePicture: "https://media.licdn.com/dms/image/v2/D4D03AQEOgNHipHqfQw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709959290844?e=1742428800&v=beta&t=PL0HqfoPCFF-LhrhKy6CGM73yzoJWrS18buQc3PZrwY",
      company: "Sr.Executive DevOps Engineer @ Ventura",
    },
    {
      name: "Digambar Nandrekar",
      profilePicture: "https://media.licdn.com/dms/image/v2/D4D03AQHbLN1-UmIitQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725520504028?e=1742428800&v=beta&t=yyso7gJIeQlk4Vlww4Hjh0Ou2PCzcGUxIqcsXYiOgRw",
      company: "Sr. DevSecOps Engineer @ Globant",
    },
    {
      name: "Saurabh Agarwal",
      profilePicture: "https://media.licdn.com/dms/image/v2/C4E03AQErEtNzKlwG_A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1639724024037?e=1742428800&v=beta&t=NLe0rq3cYiVEXhWmKx7X9S4RgEz_BWAJN4ibAl5OzQM",
      company: "Software Engineer @ Redhat",
    },
  ];
  
  // Split data for different rows
  export const firstRowData = profileData.slice(0, 6);
  export const secondRowData = profileData.slice(6, 12);
  export const thirdRowData = profileData.slice(12);
  
  // Export all data
  export default profileData;