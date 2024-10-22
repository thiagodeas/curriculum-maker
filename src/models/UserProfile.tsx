export interface UserProfile {
    fullName: string;
    jobTitle: string;
    nationality: string;
    maritalStatus: string;
    city: string;
    state: string;
    country: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    aboutMe: string;
    frontEndSkills: string;
    backEndSkills: string;
    databaseSkills: string;
    cloudSkills: string;
    otherSkills: string;
    education: Array<{
        courseName: string;
        institution: string;
        year: string;
    }>;
    projects: Array<{
        title: string;
        description: string;
    }>;
    additionalActivities: Array<{
        description: string;
    }>;
};