# Hokify Job Application E2E Test

This repository contains an end-to-end (E2E) test for simulating a candidate applying for a job on the Hokify platform. The test is implemented using **Playwright (JavaScript/TypeScript)** and covers the entire job application process, from navigating to the job detail page to submitting the application and verifying the confirmation screen.

---

## Table of Contents

1. [Test Planning](#1-test-planning)
   - [Scope of the E2E Test](#scope-of-the-e2e-test)
   - [Key User Flows and Scenarios](#key-user-flows-and-scenarios)
   - [Test Data](#test-data)
   - [Potential Challenges](#potential-challenges)
2. [Test Implementation](#2-test-implementation)
   - [Playwright Code Overview](#playwright-code-overview)
3. [Challenge Documentation](#3-challenge-documentation)
   - [Challenges Encountered](#challenges-encountered)
   - [Selector Strategy](#selector-strategy)
4. [Submitting Your Challenge](#4-submitting-your-challenge)

---

## 1. Test Planning

### Scope of the E2E Test
The end-to-end (E2E) test will simulate a candidate applying for a job on the Hokify platform. The test will cover:
1. Navigating to the job detail page.
2. Starting the application process.
3. Creating a fake account.
4. Filling out the application form (education, experience, skills).
5. Submitting the application and verifying the confirmation screen.

---

### Key User Flows and Scenarios

#### Job Application Flow
1. Navigate to the job detail page.
2. Click **"Jetzt bewerben"** (Apply Now).
3. Accept cookies (if a modal appears).
4. Start the application process.

#### Account Creation Flow
1. Fill in fake email and password.
2. Accept privacy policy.
3. Submit the form to create an account.

#### Application Form Flow
1. Fill in education details (e.g., school, degree, start date).
2. Fill in work experience (e.g., job title, company, description).
3. Add skills (e.g., languages, IT skills, driving license).
4. Submit the application.

#### Confirmation Flow
1. Verify the application is submitted successfully.
2. Check for a confirmation message or screen.

## Challenges Faced

1. **Dynamic Selectors** - Elements had changing attributes, so stable selectors were used.
2. **Session Handling** - Ensured test stability by using fresh login sessions.
3. **CAPTCHA Issues** - If encountered, manual intervention might be required.
4. **Date Picker Issues** - The date picker component was difficult to interact with as it required multiple steps to open and select a date.
5. **Missing Valid Selectors** - Many elements did not have valid `id` attributes or unique selectors, requiring alternative ways like `data-cy`, `XPath`, or text-based locators.

---

### Test Data

#### Fake Account
- **Email**: `mikimikic9555@gmail.com`
- **Password**: `Administrator9`
