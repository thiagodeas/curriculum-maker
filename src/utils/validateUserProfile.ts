import { UserProfile } from "../models/UserProfile";

export const validateUserProfile = (profile: UserProfile): string[] => {
  const { email, phone, linkedin, github, experience, education } = profile;
  const errors: string[] = [];

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
  const urlRegex = /^(https?:\/\/)?([\w.-]+)+\.[a-z]{2,}([\/\w .-]*)*\/?$/i;

  const periodRegex = /^(0[1-9]|1[0-2])\/\d{4}\s-\s((0[1-9]|1[0-2])\/\d{4}|Atualmente)$/;

  const yearRegex = /^\d{4}$/;

  if (!emailRegex.test(email)) {
    errors.push("Email inválido.");
  }

  if (!phoneRegex.test(phone)) {
    errors.push("Telefone inválido. Use o formato (DDD) 00000-0000.");
  }

  if (!urlRegex.test(linkedin) || !linkedin.includes("linkedin.com")) {
    errors.push("URL do LinkedIn inválida.");
  }

  if (!urlRegex.test(github) || !github.includes("github.com")) {
    errors.push("URL do GitHub inválida.");
  }

  if (experience && Array.isArray(experience)) {
    experience.forEach((exp, index) => {
      if (!periodRegex.test(exp.period)) {
        errors.push(`Período inválido na experiência #${index + 1}. Use o formato MM/AAAA - MM/AAAA ou MM/AAAA - Atualmente.`);
      } else if (!exp.period.includes("Atualmente")) {
        const match = exp.period.match(/^(0[1-9]|1[0-2])\/(\d{4})\s-\s(0[1-9]|1[0-2])\/(\d{4})$/);
        if (match) {
          const [, startMonth, startYear, endMonth, endYear] = match;
          const startDate = new Date(Number(startYear), Number(startMonth) - 1);
          const endDate = new Date(Number(endYear), Number(endMonth) - 1);
          if (endDate < startDate) {
            errors.push(`Data final menor que data inicial na experiência #${index + 1}.`);
          }
        }
      }
    });
  }

  if (education && Array.isArray(education)) {
    education.forEach((edu, index) => {
      if (edu.year && !yearRegex.test(edu.year)) {
        errors.push(`Ano inválido na educação #${index + 1}. Deve ter 4 dígitos.`);
      }
    });
  }

  return errors;
};
