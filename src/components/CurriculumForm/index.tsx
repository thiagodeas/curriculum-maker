import React, { useState } from "react";
import { UserProfile } from "../../models/UserProfile";
import {
  StyledBorderBox,
  StyledButton,
  StyledButtonContainer,
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledLabelAA,
  StyledLabelGeneric,
  StyledMainContainer,
  StyledTextArea,
} from "./CurriculumForm.style";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response: AxiosResponse = await axios.post(
        "https://api-curriculum-maker-production.up.railway.app/api/curriculum/generate",
        userProfile,
        { responseType: "blob" }
      );

      const pdfBlob = new Blob([response.data], { type: "application/pdf" });
      const pdfUrl = URL.createObjectURL(pdfBlob);

      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "Curriculum-Maker.pdf";
      link.click();

      URL.revokeObjectURL(pdfUrl);
    } catch (error) {
      console.error("Erro ao gerar o currículo:", error);
    }
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
          <StyledLabel htmlFor="personalData">
            Dados Pessoais e Conhecimentos
          </StyledLabel>
          <StyledLabelGeneric htmlFor="fullName">
            Nome Completo
          </StyledLabelGeneric>
          <StyledInput
            id="fullName"
            name="fullName"
            value={userProfile.fullName}
            onChange={handleChange}
            placeholder="Digite seu nome completo"
            required
          />

          <StyledLabelGeneric htmlFor="jobTitle">
            Título profissional
          </StyledLabelGeneric>
          <StyledInput
            id="jobTitle"
            name="jobTitle"
            value={userProfile.jobTitle}
            onChange={handleChange}
            placeholder="Ex: FullStack Developer"
            required
          />

          <StyledLabelGeneric htmlFor="nationality">
            Nacionalidade
          </StyledLabelGeneric>
          <StyledInput
            id="nationality"
            name="nationality"
            value={userProfile.nationality}
            onChange={handleChange}
            placeholder="Ex: Brasileiro"
            required
          />

          <StyledLabelGeneric htmlFor="maritalStatus">
            Estado Civil
          </StyledLabelGeneric>
          <StyledInput
            id="maritalStatus"
            name="maritalStatus"
            value={userProfile.maritalStatus}
            onChange={handleChange}
            placeholder="Ex: Casado"
            required
          />

          <StyledLabelGeneric htmlFor="city">Cidade</StyledLabelGeneric>
          <StyledInput
            id="city"
            name="city"
            value={userProfile.city}
            onChange={handleChange}
            placeholder="Ex: Fortaleza"
            required
          />

          <StyledLabelGeneric htmlFor="state">Estado (UF)</StyledLabelGeneric>
          <StyledInput
            id="state"
            name="state"
            value={userProfile.state}
            onChange={handleChange}
            placeholder="Ex: CE"
            required
          />

          <StyledLabelGeneric htmlFor="country">País</StyledLabelGeneric>
          <StyledInput
            id="country"
            name="country"
            value={userProfile.country}
            onChange={handleChange}
            placeholder="Ex: Brasil"
            required
          />

          <StyledLabelGeneric htmlFor="phone">Telefone</StyledLabelGeneric>
          <StyledInput
            id="phone"
            name="phone"
            value={userProfile.phone}
            onChange={handleChange}
            placeholder="(DDD) 00000-0000"
            required
          />

          <StyledLabelGeneric htmlFor="email">Email</StyledLabelGeneric>
          <StyledInput
            id="email"
            name="email"
            value={userProfile.email}
            onChange={handleChange}
            placeholder="Digite seu email"
            required
          />

          <StyledLabelGeneric htmlFor="linkedin">LinkedIn</StyledLabelGeneric>
          <StyledInput
            id="linkedin"
            name="linkedin"
            value={userProfile.linkedin}
            onChange={handleChange}
            placeholder="Digite a URL do seu Perfil"
            required
          />

          <StyledLabelGeneric htmlFor="github">GitHub</StyledLabelGeneric>
          <StyledInput
            id="github"
            name="github"
            value={userProfile.github}
            onChange={handleChange}
            placeholder="Digite a URL do seu Perfil"
            required
          />

          <StyledLabelGeneric htmlFor="aboutMe">Sobre</StyledLabelGeneric>
          <StyledTextArea
            id="aboutMe"
            name="aboutMe"
            value={userProfile.aboutMe}
            onChange={handleChange}
            placeholder="Resumo do seu perfil profissional"
            required
          />

          <StyledLabelGeneric htmlFor="frontEndKnowledge">
            Conhecimentos em FrontEnd
          </StyledLabelGeneric>
          <StyledInput
            id="frontEndKnowledge"
            name="frontEndKnowledge"
            value={userProfile.frontEndKnowledge}
            onChange={handleChange}
            placeholder="Ex: JavaScript, TypeScript"
            required
          />

          <StyledLabelGeneric htmlFor="backEndKnowledge">
            Conhecimentos em BackEnd
          </StyledLabelGeneric>
          <StyledInput
            id="backEndKnowledge"
            name="backEndKnowledge"
            value={userProfile.backEndKnowledge}
            onChange={handleChange}
            placeholder="Ex: Java, Spring Boot"
            required
          />

          <StyledLabelGeneric htmlFor="databaseKnowledge">
            Conhecimentos em Banco de Dados
          </StyledLabelGeneric>
          <StyledInput
            id="databaseKnowledge"
            name="databaseKnowledge"
            value={userProfile.databaseKnowledge}
            onChange={handleChange}
            placeholder="Ex: MySQL, PostgreSQL"
            required
          />

          <StyledLabelGeneric htmlFor="cloudKnowledge">
            Conhecimentos em Nuvem
          </StyledLabelGeneric>
          <StyledInput
            id="cloudKnowledge"
            name="cloudKnowledge"
            value={userProfile.cloudKnowledge}
            onChange={handleChange}
            placeholder="Ex: AWS"
            required
          />

          <StyledLabelGeneric htmlFor="othersKnowledge">
            Outros Conhecimentos
          </StyledLabelGeneric>
          <StyledInput
            id="othersKnowledge"
            name="othersKnowledge"
            value={userProfile.othersKnowledge}
            onChange={handleChange}
            placeholder="Ex: Git, GitHub, Postman"
            required
          />
        </StyledBorderBox>

        <StyledBorderBox>
          <StyledLabel htmlFor="education">Educação</StyledLabel>

          {userProfile.education.map((edu, index) => (
            <StyledContainer key={index}>
              <StyledLabelGeneric htmlFor={`course-${index}`}>
                Curso
              </StyledLabelGeneric>
              <StyledInput
                id={`course-${index}`}
                name="course"
                value={edu.course}
                onChange={(e) => handleEducationChange(index, e)}
                placeholder="Ex: Curso de React"
                required
              />

              <StyledLabelGeneric htmlFor={`institution-${index}`}>
                Instituição
              </StyledLabelGeneric>
              <StyledInput
                id={`institution-${index}`}
                name="institution"
                value={edu.institution}
                onChange={(e) => handleEducationChange(index, e)}
                placeholder="Nome da instituição do curso"
                required
              />

              <StyledLabelGeneric htmlFor={`year-${index}`}>
                Ano
              </StyledLabelGeneric>
              <StyledInput
                id={`year-${index}`}
                name="year"
                value={edu.year}
                onChange={(e) => handleEducationChange(index, e)}
                placeholder="Ano de Conclusão/Previsão"
                required
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
              <StyledLabelGeneric htmlFor={`title-${index}`}>
                Título do Projeto
              </StyledLabelGeneric>
              <StyledInput
                id={`title-${index}`}
                name="title"
                value={project.title}
                onChange={(e) => handleProjectChange(index, e)}
                placeholder="Digite o título do projeto"
                required
              />

              <StyledLabelGeneric htmlFor={`description-${index}`}>
                Descrição do Projeto
              </StyledLabelGeneric>
              <StyledTextArea
                id={`description-${index}`}
                name="description"
                value={project.description}
                onChange={(e) => handleProjectChange(index, e)}
                placeholder="Breve descrição do projeto"
                required
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
          <StyledLabelAA htmlFor="additionalActivities">
            Atividades Adicionais
          </StyledLabelAA>

          {userProfile.additionalActivities.map((activity, index) => (
            <StyledContainer key={index}>
              <StyledLabelGeneric htmlFor={`description-${index}`}>
                Descrição
              </StyledLabelGeneric>
              <StyledTextArea
                id={`description-${index}`}
                name="description"
                value={activity.description}
                onChange={(e) => handleAdditionalActivityChange(index, e)}
                placeholder="Eventos, Mentorias, Voluntariado, etc"
                required
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
      </StyledForm>
    </StyledMainContainer>
  );
};
