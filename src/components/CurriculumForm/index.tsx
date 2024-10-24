import React, { useState } from "react";
import { UserProfile } from "../../models/UserProfile";
import { StyledBorderBox, StyledButton, StyledButtonContainer, StyledContainer, StyledForm, StyledInput, StyledLabel, StyledLabelAA, StyledLabelGeneric, StyledMainContainer, StyledTextArea } from "./CurriculumForm.style";
import axios, { AxiosResponse } from "axios";

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
    frontEndKnowledge: "",
    backEndKnowledge: "",
    databaseKnowledge: "",
    cloudKnowledge: "",
    othersKnowledge: "",
    education: [{ course: "", institution: "", year: "" }],
    projects: [{ title: "", description: "" }],
    additionalActivities: [{ description: "" }],
  });
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response: AxiosResponse = await axios.post('http://localhost:8080/api/curriculum/generate', userProfile
      );

      if (response.status === 200) {
        setPdfUrl(response.data);
      }
  } catch (error) {
    console.error("Erro ao gerar o currículo:", error);
    if (axios.isAxiosError(error)) {
      console.error("Resposta do Servidor:", error.response?.data);
    }
  };
};

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
        { course: "", institution: "", year: "" },
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
    <StyledMainContainer>
      <StyledForm onSubmit={handleSubmit}>
      <StyledBorderBox>
      <StyledLabel htmlFor="personalData">Dados Pessoais e Conhecimentos</StyledLabel>
        <StyledLabelGeneric htmlFor="fullName">Nome Completo</StyledLabelGeneric>
        <StyledInput
          id="fullName"
          name="fullName"
          value={userProfile.fullName}
          onChange={handleChange}
        />

        <StyledLabelGeneric htmlFor="jobTitle">Título profissional</StyledLabelGeneric>
        <StyledInput
          id="jobTitle"
          name="jobTitle"
          value={userProfile.jobTitle}
          onChange={handleChange}
        />

        <StyledLabelGeneric htmlFor="nationality">Nacionalidade</StyledLabelGeneric>
        <StyledInput
          id="nationality"
          name="nationality"
          value={userProfile.nationality}
          onChange={handleChange}
        />

        <StyledLabelGeneric htmlFor="maritalStatus">Estado Civil</StyledLabelGeneric>
        <StyledInput
          id="maritalStatus"
          name="maritalStatus"
          value={userProfile.maritalStatus}
          onChange={handleChange}
        />

        <StyledLabelGeneric htmlFor="city">Cidade</StyledLabelGeneric>
        <StyledInput
          id="city"
          name="city"
          value={userProfile.city}
          onChange={handleChange}
        />

        <StyledLabelGeneric htmlFor="state">Estado (UF)</StyledLabelGeneric>
        <StyledInput
          id="state"
          name="state"
          value={userProfile.state}
          onChange={handleChange}
        />

        <StyledLabelGeneric htmlFor="country">País</StyledLabelGeneric>
        <StyledInput
          id="country"
          name="country"
          value={userProfile.country}
          onChange={handleChange}
        />

        <StyledLabelGeneric htmlFor="phone">Telefone</StyledLabelGeneric>
        <StyledInput
          id="phone"
          name="phone"
          value={userProfile.phone}
          onChange={handleChange}
        />

        <StyledLabelGeneric htmlFor="email">Email</StyledLabelGeneric>
        <StyledInput
          id="email"
          name="email"
          value={userProfile.email}
          onChange={handleChange}
        />

        <StyledLabelGeneric htmlFor="linkedin">LinkedIn</StyledLabelGeneric>
        <StyledInput
          id="linkedin"
          name="linkedin"
          value={userProfile.linkedin}
          onChange={handleChange}
        />

        <StyledLabelGeneric htmlFor="github">GitHub</StyledLabelGeneric>
        <StyledInput
          id="github"
          name="github"
          value={userProfile.github}
          onChange={handleChange}
        />

        <StyledLabelGeneric htmlFor="aboutMe">Sobre</StyledLabelGeneric>
        <StyledTextArea
          id="aboutMe"
          name="aboutMe"
          value={userProfile.aboutMe}
          onChange={handleChange}
        />

        <StyledLabelGeneric htmlFor="frontEndKnowledge">Conhecimentos em FrontEnd</StyledLabelGeneric>
        <StyledInput
          id="frontEndKnowledge"
          name="frontEndKnowledge"
          value={userProfile.frontEndKnowledge}
          onChange={handleChange}
        />

        <StyledLabelGeneric htmlFor="backEndKnowledge">Conhecimentos em BackEnd</StyledLabelGeneric>
        <StyledInput
          id="backEndKnowledge"
          name="backEndKnowledge"
          value={userProfile.backEndKnowledge}
          onChange={handleChange}
        />

        <StyledLabelGeneric htmlFor="databaseKnowledge">Conhecimentos em Banco de Dados</StyledLabelGeneric>
        <StyledInput
          id="databaseKnowledge"
          name="databaseKnowledge"
          value={userProfile.databaseKnowledge}
          onChange={handleChange}
        />

        <StyledLabelGeneric htmlFor="cloudKnowledge">Conhecimentos em Nuvem</StyledLabelGeneric>
        <StyledInput
          id="cloudKnowledge"
          name="cloudKnowledge"
          value={userProfile.cloudKnowledge}
          onChange={handleChange}
        />

        <StyledLabelGeneric htmlFor="othersKnowledge">Outros Conhecimentos</StyledLabelGeneric>
        <StyledInput
          id="othersKnowledge"
          name="othersKnowledge"
          value={userProfile.othersKnowledge}
          onChange={handleChange}
        />
        </ StyledBorderBox>

        <StyledBorderBox>

        <StyledLabel htmlFor="education">Educação</StyledLabel>

        {userProfile.education.map((edu, index) => (
          <StyledContainer key={index}>
            <StyledLabelGeneric htmlFor={`course-${index}`}>Curso</StyledLabelGeneric>
            <StyledInput
              id={`course-${index}`}
              name="course"
              value={edu.course}
              onChange={(e) => handleEducationChange(index, e)}
            />

            <StyledLabelGeneric htmlFor={`institution-${index}`}>Instituição</StyledLabelGeneric>
            <StyledInput
              id={`institution-${index}`}
              name="institution"
              value={edu.institution}
              onChange={(e) => handleEducationChange(index, e)}
            />

            <StyledLabelGeneric htmlFor={`year-${index}`}>Ano</StyledLabelGeneric>
            <StyledInput
              id={`year-${index}`}
              name="year"
              value={edu.year}
              onChange={(e) => handleEducationChange(index, e)}
            />
          </StyledContainer>
        ))}

        <StyledButtonContainer>
          <StyledButton type="button" onClick={addEducationField}>
            Adicionar Formação
          </StyledButton>
        </StyledButtonContainer>

        </StyledBorderBox>

        <StyledBorderBox>


        <StyledLabel htmlFor="projects">Projetos</StyledLabel>

        {userProfile.projects.map((project, index) => (
          <StyledContainer key={index}>
            <StyledLabelGeneric htmlFor={`title-${index}`}>Título do Projeto</StyledLabelGeneric>
            <StyledInput
              id={`title-${index}`}
              name="title"
              value={project.title}
              onChange={(e) => handleProjectChange(index, e)}
            />

            <StyledLabelGeneric htmlFor={`description-${index}`}>Descrição do Projeto</StyledLabelGeneric>
            <StyledTextArea
              id={`description-${index}`}
              name="description"
              value={project.description}
              onChange={(e) => handleProjectChange(index, e)}
            />
          </StyledContainer>
        ))}

        <StyledButtonContainer>
        <StyledButton type="button" onClick={addProjectField}>
          Adicionar Projeto
        </StyledButton>
        </StyledButtonContainer>

        </StyledBorderBox>
        
        <StyledBorderBox>
          
        <StyledLabelAA htmlFor="additionalActivities">Atividades Adicionais</StyledLabelAA>

        {userProfile.additionalActivities.map((activity, index) => (
          <StyledContainer key={index}>
            <StyledLabelGeneric htmlFor={`description-${index}`}>Descrição</StyledLabelGeneric>
            <StyledTextArea
              id={`description-${index}`}
              name="description"
              value={activity.description}
              onChange={(e) => handleAdditionalActivityChange(index, e)}
            />
          </StyledContainer>
        ))}

        <StyledButtonContainer>
          <StyledButton type="button" onClick={addAdditionalActivityField}>
            Adicionar Atividade
          </StyledButton>
        </StyledButtonContainer>
        
        </StyledBorderBox>
        <StyledButtonContainer>
          <StyledButton type="submit">Gerar Currículo</StyledButton>
        </StyledButtonContainer>
        {pdfUrl && (
  <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
    Baixar Currículo
  </a>
)}

      </StyledForm>
    </StyledMainContainer>
  );
};
