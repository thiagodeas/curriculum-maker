export interface UserProfile {
  fullName: string;
  jobTitle: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  aboutMe: string;

  experience?: Array<{
    position: string;
    company: string;
    period: string;
    description: string;
  }>;

  knowledgeByCategory: Array<{
    categoryName: string;
    skills: Array<string>;
  }>;

  education: Array<{
    name: string;
    institution: string;
    year: string;
  }>;

  projects: Array<{
    title: string;
    description: string;
  }>;

  additionalActivities?: Array<{
    description: string;
  }>;
}
