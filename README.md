# 📄 Curriculum Maker

A web application to generate minimalist and professional resumes in PDF format based on user-provided data.

## 📝 Overview

**Curriculum Maker** enables users to build a complete resume directly in the browser and download it as a clean, well-formatted PDF. The frontend is built with **React**, **TypeScript**, **Styled Components**, **React Icons**, and communicates with a backend built in **Java** using **Spring Boot**.

## ✨ Features

- ✅ Dynamic form to input personal information, education, skills, and professional experience  
- 📤 Export resume to PDF with a clean and responsive layout  
- ⚡ Fast and lightweight interface for an optimal user experience

## 🛠️ Tech Stack

- React  
- TypeScript  
- Styled Components  
- Axios  
- React Icons 
- React Toastify 

## Access on Vercel

You can access the deployed app by clicking here: [Curriculum Maker](https://curriculum-maker.vercel.app/)


## 🚀 How to Run Locally

Follow these steps to run the project locally:

1.Clone the repository
```bash
git clone https://github.com/thiagodeas/curriculum-maker.git
cd curriculum-maker
```

2.Install dependencies
```bash
npm install
```

3.Configuration

Create a `.env` file in the root directory of the project with the following content:

VITE_API_URL=https://your-backend-url/api

Replace `https://your-backend-url/api` with your actual backend API URL.

4.Running the app
```bash
npm run dev
```
The application will be available at http://localhost:5173 by default.