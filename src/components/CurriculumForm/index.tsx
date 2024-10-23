import { useState } from "react";
import { UserProfile } from "../../models/UserProfile";
import { StyledContainer, StyledForm } from "./CurriculumForm.style";

export const CurriculumForm = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    fullName: "",
    jobTitle: "",
    nationality: "",
    maritalStatus: "",
    city: "",
    state: "",
    country: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    aboutMe: "",
    frontEndSkills: "",
    backEndSkills: "",
    databaseSkills: "",
    cloudSkills: "",
    otherSkills: "",
    education: [{ courseName: "", institution: "", year: "" }],
    projects: [{ title: "", description: "" }],
    additionalActivities: [{ description: "" }],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleEducationChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const updatedEducation = userProfile.education.map((edu, i) =>
      i === index ? { ...edu, [name]: value } : edu
    );
    setUserProfile({ ...userProfile, education: updatedEducation });
  };

  const addEducationField = () => {
    setUserProfile({
      ...userProfile,
      education: [
        ...userProfile.education,
        { courseName: "", institution: "", year: "" },
      ],
    });
  };

  const handleProjectChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updatedProjects = userProfile.projects.map((project, i) =>
      i === index ? { ...project, [name]: value } : project
    );
    setUserProfile({ ...userProfile, projects: updatedProjects });
  };

  const addProjectField = () => {
    setUserProfile({
      ...userProfile,
      projects: [...userProfile.projects, { title: "", description: "" }],
    });
  };

  const handleAdditionalActivityChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    const updatedActivities = userProfile.additionalActivities.map(
      (activity, i) => (i === index ? { description: value } : activity)
    );
    setUserProfile({ ...userProfile, additionalActivities: updatedActivities });
  };

  const addAdditionalActivityField = () => {
    setUserProfile({
      ...userProfile,
      additionalActivities: [
        ...userProfile.additionalActivities,
        { description: "" },
      ],
    });
  };

  return (
    <StyledContainer>
      <StyledForm>
        <label htmlFor="fullName">Nome Completo</label>
        <input
          id="fullName"
          name="fullName"
          value={userProfile.fullName}
          onChange={handleChange}
        />

        <label htmlFor="jobTitle">Título profissional</label>
        <input
          id="jobTitle"
          name="jobTitle"
          value={userProfile.jobTitle}
          onChange={handleChange}
        />

        <label htmlFor="nationality">Nacionalidade</label>
        <input
          id="nationality"
          name="nationality"
          value={userProfile.nationality}
          onChange={handleChange}
        />

        <label htmlFor="maritalStatus">Estado Civil</label>
        <input
          id="maritalStatus"
          name="maritalStatus"
          value={userProfile.maritalStatus}
          onChange={handleChange}
        />

        <label htmlFor="city">Cidade</label>
        <input
          id="city"
          name="city"
          value={userProfile.city}
          onChange={handleChange}
        />

        <label htmlFor="state">Estado(UF)</label>
        <input
          id="state"
          name="state"
          value={userProfile.state}
          onChange={handleChange}
        />

        <label htmlFor="country">País</label>
        <input
          id="country"
          name="country"
          value={userProfile.country}
          onChange={handleChange}
        />

        <label htmlFor="phone">Telefone</label>
        <input
          id="phone"
          name="phone"
          value={userProfile.phone}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={userProfile.email}
          onChange={handleChange}
        />

        <label htmlFor="linkedin">LinkedIn</label>
        <input
          id="linkedin"
          name="linkedin"
          value={userProfile.linkedin}
          onChange={handleChange}
        />

        <label htmlFor="github">GitHub</label>
        <input
          id="github"
          name="github"
          value={userProfile.github}
          onChange={handleChange}
        />

        <label htmlFor="aboutMe">Sobre</label>
        <textarea
          id="aboutMe"
          name="aboutMe"
          value={userProfile.aboutMe}
          onChange={handleChange}
        />

        <label htmlFor="frontEndSkills">Habilidades FrontEnd</label>
        <input
          id="frontEndSkills"
          name="frontEndSkills"
          value={userProfile.frontEndSkills}
          onChange={handleChange}
        />

        <label htmlFor="backEndSkills">Habilidades BackEnd</label>
        <input
          id="backEndSkills"
          name="backEndSkills"
          value={userProfile.backEndSkills}
          onChange={handleChange}
        />

        <label htmlFor="databaseSkills">Habilidades Banco de Dados</label>
        <input
          id="databaseSkills"
          name="databaseSkills"
          value={userProfile.databaseSkills}
          onChange={handleChange}
        />

        <label htmlFor="cloudSkills">Habilidades Nuvem</label>
        <input
          id="cloudSkills"
          name="cloudSkills"
          value={userProfile.cloudSkills}
          onChange={handleChange}
        />

        <label htmlFor="otherSkills">Outras Habilidades</label>
        <input
          id="otherSkills"
          name="otherSkills"
          value={userProfile.otherSkills}
          onChange={handleChange}
        />

        <label htmlFor="education">Educação</label>

        {userProfile.education.map((edu, index) => (
          <div key={index}>
            <label htmlFor={`courseName-${index}`}>Nome do Curso</label>
            <input
              id={`courseName-${index}`}
              name="courseName"
              value={edu.courseName}
              onChange={(e) => handleEducationChange(index, e)}
            />

            <label htmlFor={`institution-${index}`}>Instituição</label>
            <input
              id={`institution-${index}`}
              name="institution"
              value={edu.institution}
              onChange={(e) => handleEducationChange(index, e)}
            />

            <label htmlFor={`year-${index}`}>Ano</label>
            <input
              id={`year-${index}`}
              name="year"
              value={edu.year}
              onChange={(e) => handleEducationChange(index, e)}
            />
          </div>
        ))}

        <button type="button" onClick={addEducationField}>
          Adicionar Formação
        </button>

        <label htmlFor="projects">Projetos</label>

        {userProfile.projects.map((project, index) => (
          <div key={index}>
            <label htmlFor={`title-${index}`}>Título do Projeto</label>
            <input
              id={`title-${index}`}
              name="title"
              value={project.title}
              onChange={(e) => handleProjectChange(index, e)}
            />

            <label htmlFor={`description-${index}`}>Descrição do Projeto</label>
            <textarea
              id={`description-${index}`}
              name="description"
              value={project.description}
              onChange={(e) => handleProjectChange(index, e)}
            />
          </div>
        ))}

        <button type="button" onClick={addProjectField}>
          Adicionar Projeto
        </button>

        <label htmlFor="additionalActivities">Atividades Adicionais</label>

        {userProfile.additionalActivities.map((activity, index) => (
          <div key={index}>
            <label htmlFor={`description-${index}`}>Descrição</label>
            <textarea
              id={`description-${index}`}
              name="description"
              value={activity.description}
              onChange={(e) => handleAdditionalActivityChange(index, e)}
            />
          </div>
        ))}

        <button type="button" onClick={addAdditionalActivityField}>
          Adicionar Atividade
        </button>
      </StyledForm>
    </StyledContainer>
  );
};
