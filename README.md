# Hokify Job Application E2E Test

This repository contains an end-to-end (E2E) test for simulating a candidate applying for a job on the Hokify platform. The test is implemented using **Playwright (JavaScript/TypeScript)** and covers the entire job application process, from navigating to the job detail page to submitting the application and verifying the confirmation screen.

---

##  Table of Contents
- [Test Planning](#test-planning)
  - [Scope of the E2E Test](#scope-of-the-e2e-test)
  - [Key User Flows and Scenarios](#key-user-flows-and-scenarios)
  - [Test Data](#test-data)
  - [Potential Challenges](#challenges-faced)
- [Test Implementation](#test-implementation)
  - [Playwright Code Overview](#playwright-code-overview)
- [Installation & Setup](#installation--setup)
- [Running the Test](#running-the-test)
- [Folder Structure](#folder-structure)
- [Reporting & Logging](#reporting--logging)
- [Future Improvements](#future-improvements)
- [Submitting Your Challenge](#submitting-your-challenge)

---

##  Test Planning

###  Scope of the E2E Test
The end-to-end (E2E) test simulates a candidate applying for a job on the Hokify platform. The test covers:

 Navigating to the job detail page.  
 Starting the application process.  
 Creating a fake account.  
 Filling out the application form (education, experience, skills).  
 Submitting the application and verifying the confirmation screen.  

---

###  Key User Flows and Scenarios

#### **1 Job Application Flow**
- Navigate to the job detail page.
- Click **"Jetzt bewerben"** (Apply Now).
- Accept cookies (if a modal appears).
- Start the application process.

#### **2️ Account Creation Flow**
- Fill in **fake email and password**.
- Accept privacy policy.
- Submit the form to create an account.

#### **3️ Application Form Flow**
- Fill in **education details** (e.g., school, degree, start date).
- Fill in **work experience** (e.g., job title, company, description).
- Add **skills** (e.g., languages, IT skills, driving license).
- Submit the application.

#### **4️ Confirmation Flow**
- Verify the **application is submitted successfully**.
- Check for a **confirmation message or screen**.

---

##  Challenges Faced

1. **Dynamic Selectors** - Elements had changing attributes, so stable selectors were used.  
2. **Session Handling** - Ensured test stability by using fresh login sessions.  
3. **CAPTCHA Issues** - If encountered, manual intervention might be required.  
4. **Date Picker Issues** - The date picker component was difficult to interact with as it required multiple steps to open and select a date.  
5. **Missing Valid Selectors** - Many elements did not have valid `id` attributes or unique selectors, requiring alternative ways like `data-cy`, `XPath`, or text-based locators.  

---

##  Test Data

### ** Fake Account**
- **Email:** mikimikic9555@gmail.com  
- **Password:** Administrator9  

>  **Note:** Do **not** use this account for real applications. It was created for testing purposes only.

---

## Test Implementation

### 📌 Playwright Code Overview
The test uses **Playwright (JavaScript/TypeScript)** and follows a structured approach:
- **Test files** are located in the `tests/` folder.
- **Reusable helper functions** (e.g., clicking buttons, filling inputs) are in `helpers/`.

---

## Installation & Setup

### **Prerequisites**
- Node.js installed ([Download here](https://nodejs.org/))
- Playwright installed via npm

### **1️ Clone the repository**
```sh
git clone  https://github.com/srdjanjolic/Playwright.git
cd hokify-test
