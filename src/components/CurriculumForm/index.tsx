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
  StyledLabelGeneric,
  StyledMainContainer,
  StyledTextArea,
} from "./CurriculumForm.style";
import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";

export const CurriculumForm = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    fullName: "",
    jobTitle: "",
    city: "",
    state: "",
    country: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    aboutMe: "",
    experience: [],
    skillCategories: [{ categoryName: "", skills: [""] }],
    education: [{ name: "", institution: "", year: "" }],
    projects: [],
    additionalActivities: [],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const API_URL = import.meta.env.VITE_API_URL;

    try {
      const response: AxiosResponse = await axios.post(
        `${API_URL}/curriculum/generate`,
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

      let userMessage =
        "Erro ao gerar o currículo. Tente novamente mais tarde.";

      if (axios.isAxiosError(error)) {
        const status = error.response?.status;

        if (status === 400) {
          userMessage =
            "Dados inválidos. Verifique as informações e tente novamente.";
        } else if (status === 500) {
          userMessage = "Erro interno do servidor. Tente novamente mais tarde.";
        } else if (status) {
          userMessage = "Não foi possível gerar o currículo.";
        }
      }

      toast.error(userMessage);
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

  const handleExperienceChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const updatedExperiences = userProfile.experience?.map((exp, i) =>
      i === index ? { ...exp, [name]: value } : exp
    );

    setUserProfile({ ...userProfile, experience: updatedExperiences });
  };

  const addExperienceField = () => {
    setUserProfile({
      ...userProfile,
      experience: [
        ...(userProfile.experience ?? []),
        { position: "", company: "", period: "", description: "" },
      ],
    });
  };

  const removeExperienceField = (index: number) => {
    setUserProfile((prev) => ({
      ...prev,
      experience: prev.experience?.filter((_, i) => i !== index),
    }));
  };

  const handleCategoryChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const updated = [...userProfile.skillCategories];

    if (name === "categoryName") {
      updated[index].categoryName = value;
    } else if (name === "skills") {
      updated[index].skills = value.split(",").map((skill) => skill.trim());
    }

    setUserProfile({ ...userProfile, skillCategories: updated });
  };

  const addSkillCategory = () => {
    setUserProfile((prev) => ({
      ...prev,
      skillCategories: [
        ...prev.skillCategories,
        { categoryName: "", skills: [""] },
      ],
    }));
  };

  const removeSkillCategory = (index: number) => {
    setUserProfile((prev) => ({
      ...prev,
      skillCategories: prev.skillCategories.filter((_, i) => i !== index),
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
        { name: "", institution: "", year: "" },
      ],
    });
  };

  const removeEducationField = (index: number) => {
    if (userProfile.education.length > 1) {
      setUserProfile((prev) => ({
        ...prev,
        education: prev.education.filter((_, i) => i !== index),
      }));
    }
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

  const removeProjectField = (index: number) => {
    setUserProfile((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }));
  };

  const handleAdditionalActivityChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updatedActivities = userProfile.additionalActivities?.map(
      (activity, i) => (i === index ? { ...activity, [name]: value } : activity)
    );
    setUserProfile({ ...userProfile, additionalActivities: updatedActivities });
  };

  const addAdditionalActivityField = () => {
    setUserProfile({
      ...userProfile,
      additionalActivities: [
        ...(userProfile.additionalActivities ?? []),
        { description: "" },
      ],
    });
  };

  const removeAdditionalActivityField = (index: number) => {
    setUserProfile((prev) => ({
      ...prev,
      additionalActivities: prev.additionalActivities?.filter(
        (_, i) => i !== index
      ),
    }));
  };

  return (
    <StyledMainContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledBorderBox>
          <StyledLabel htmlFor="personalData">Dados Pessoais</StyledLabel>
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
            placeholder="Ex: Full Stack Developer"
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
        </StyledBorderBox>

        <StyledBorderBox>
          <StyledLabel>Experiência Profissional</StyledLabel>

          {userProfile.experience?.map((exp, index) => (
            <StyledContainer key={index}>
              <StyledLabelGeneric>Cargo</StyledLabelGeneric>
              <StyledInput
                id={`position-${index}`}
                name="position"
                value={exp.position}
                onChange={(e) => handleExperienceChange(index, e)}
                placeholder="Ex: Desenvolvedor Backend Junior"
              />

              <StyledLabelGeneric>Empresa</StyledLabelGeneric>
              <StyledInput
                id={`company-${index}`}
                name="company"
                value={exp.company}
                onChange={(e) => handleExperienceChange(index, e)}
                placeholder="Nome da empresa"
              />

              <StyledLabelGeneric>Período</StyledLabelGeneric>
              <StyledInput
                id={`period-${index}`}
                name="period"
                value={exp.period}
                onChange={(e) => handleExperienceChange(index, e)}
                placeholder="05/2022 - 10/2024"
              />

              <StyledLabelGeneric>Descrição</StyledLabelGeneric>
              <StyledInput
                id={`description-${index}`}
                name="description"
                value={exp.description}
                onChange={(e) => handleExperienceChange(index, e)}
                placeholder="Descrição das atividades"
              />

              <StyledButtonContainer>
                <StyledButton
                  type="button"
                  onClick={() => removeExperienceField(index)}
                >
                  Remover Experiência
                </StyledButton>
              </StyledButtonContainer>
            </StyledContainer>
          ))}

          <StyledButtonContainer>
            <StyledButton type="button" onClick={addExperienceField}>
              Adicionar Experiência
            </StyledButton>
          </StyledButtonContainer>
        </StyledBorderBox>

        <StyledBorderBox>
          <StyledLabel htmlFor="skills">Conhecimentos</StyledLabel>

          {userProfile.skillCategories.map((category, index) => (
            <StyledContainer key={index}>
              <StyledLabelGeneric htmlFor={`category-${index}`}>
                Categoria
              </StyledLabelGeneric>
              <StyledInput
                id={`category-${index}`}
                name="categoryName"
                value={category.categoryName}
                onChange={(e) => handleCategoryChange(index, e)}
                placeholder="Ex: Frontend, Backend, Database"
                required
              />

              <StyledLabelGeneric htmlFor={`skills-${index}`}>
                Habilidades
              </StyledLabelGeneric>
              <StyledInput
                id={`skills-${index}`}
                name="skills"
                value={category.skills.join(", ")}
                onChange={(e) => handleCategoryChange(index, e)}
                placeholder="Ex: React, Vue, Angular"
                required
              />

              {userProfile.skillCategories.length > 1 && (
                <StyledButtonContainer>
                  <StyledButton
                    type="button"
                    onClick={() => removeSkillCategory(index)}
                  >
                    Remover Categoria
                  </StyledButton>
                </StyledButtonContainer>
              )}
            </StyledContainer>
          ))}

          <StyledButtonContainer>
            <StyledButton type="button" onClick={addSkillCategory}>
              Adicionar Categoria
            </StyledButton>
          </StyledButtonContainer>
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
                name="name"
                value={edu.name}
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

              {userProfile.education.length > 1 && (
                <StyledButtonContainer>
                  <StyledButton
                    type="button"
                    onClick={() => removeEducationField(index)}
                  >
                    Remover Formação
                  </StyledButton>
                </StyledButtonContainer>
              )}
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

              <StyledButtonContainer>
                <StyledButton
                  type="button"
                  onClick={() => removeProjectField(index)}
                >
                  Remover Projeto
                </StyledButton>
              </StyledButtonContainer>
            </StyledContainer>
          ))}

          <StyledButtonContainer>
            <StyledButton type="button" onClick={addProjectField}>
              Adicionar Projeto
            </StyledButton>
          </StyledButtonContainer>
        </StyledBorderBox>

        <StyledBorderBox>
          <StyledLabel htmlFor="additionalActivities">
            Atividades Adicionais
          </StyledLabel>

          {userProfile.additionalActivities?.map((activity, index) => (
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

              <StyledButtonContainer>
                <StyledButton
                  type="button"
                  onClick={() => removeAdditionalActivityField(index)}
                >
                  Remover Atividade
                </StyledButton>
              </StyledButtonContainer>
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
