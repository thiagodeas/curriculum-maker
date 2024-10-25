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
    frontEndKnowledge: string;
    backEndKnowledge: string;
    databaseKnowledge: string;
    cloudKnowledge: string;
    othersKnowledge: string;
    education: Array<{
        course: string;
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