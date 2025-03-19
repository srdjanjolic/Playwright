const { test, expect } = require('@playwright/test');
const elementActions = require('../helperElementActions/elementAction');


test('Validate error message for invalid email', async ({ page }) => {
  // Navigate to the job page and start the application
  await elementActions.navigateToJobPage(page);
  await page.click(elementActions.okButtonInCookieModalDialog);
  await page.click('text=Jetzt bewerben');
  await page.click(elementActions.bewerbungStartenButtonInModal);
  await page.click(elementActions.profileExistsButton);

  // Fill in an invalid email
  await page.fill('input[name="email"]', 'invalid-email');
  await page.fill('input[name="password"]', elementActions.fakePassword);
  await page.click(elementActions.checkboxPrivacy);
  await page.click(elementActions.anmeldenButton);

  // Verify the error message
  await expect(page.getByText(' Bitte E-Mail-Adresse vollständig eintragen.')).toBeVisible();
});

test('Verify navigation to job page', async ({ page }) => {
  // Navigate to the job page
  await elementActions.navigateToJobPage(page);
  await page.click(elementActions.okButtonInCookieModalDialog);
  // Verify the page title
  await expect(page).toHaveTitle('Test Automation Engineer (f/m/x) bei hokify | Vollzeit | hokify');
});


test('Apply for a job on Hokify', async ({ page }) => {
    // Navigate to the job page
    await page.goto(elementActions.jobPageUrl);
    await page.mouse.move(500, 300);
    await page.bringToFront();

    // Accept cookies
    await page.waitForSelector(elementActions.okButtonInCookieModalDialog, { state: 'visible' });
    await page.click(elementActions.okButtonInCookieModalDialog);
    await page.waitForSelector('text=Jetzt bewerben', { state: 'visible' });
    await page.click('text=Jetzt bewerben');

    // Start application
    await page.waitForSelector('.v--modal-box', { state: 'visible' });
    await page.waitForSelector(elementActions.bewerbungStartenButtonInModal, { state: 'visible' });
    await page.click(elementActions.bewerbungStartenButtonInModal);
    await page.waitForTimeout(3000);

    // Log in with existing profile
    await page.waitForSelector(elementActions.profileExistsButton, { state: 'visible' });
    await page.click(elementActions.profileExistsButton);

    // Enter email, password, and check privacy checkbox
    await page.waitForSelector('input[name="email"]', { state: 'visible' });
    await page.fill('input[name="email"]', elementActions.fakeEmail);
    await page.waitForSelector('input[name="password"]', { state: 'visible' });
    await page.fill('input[name="password"]', elementActions.fakePassword);
    await page.waitForSelector(elementActions.checkboxPrivacy, { state: 'visible' });
    await page.click(elementActions.checkboxPrivacy);
    await page.waitForSelector(elementActions.anmeldenButton, { state: 'visible' });
    await page.click(elementActions.anmeldenButton);

    // Wait for verification message
    await expect(page.getByText('Eingabe wird geprüft, bitte einen Moment warten...')).toBeVisible({ timeout: 10000 });
    await expect(page.getByText('Eingabe wird geprüft, bitte einen Moment warten...')).not.toBeVisible({ timeout: 10000 });

    // Create profile manually
    await page.waitForSelector(elementActions.profilManuelErstelenButton, { state: 'visible' });
    await page.click(elementActions.profilManuelErstelenButton);
    await page.waitForTimeout(2000);

    // Fill in education details
    await page.waitForSelector('(//label[contains(@class, "p-3 flex items-center cursor-pointer")])[1]', { state: 'visible' });
    await page.click('(//label[contains(@class, "p-3 flex items-center cursor-pointer")])[1]');
    await page.click('text=Sonstige Ausbildung');
    await page.waitForSelector(elementActions.educationSchool, { state: 'visible' });
    await page.waitForTimeout(2000)
    await page.fill(elementActions.educationSchool, 'Universität Rania i nka. Fakultät für Architektur');
    await page.waitForSelector('#educationStartDate', { state: 'visible' });
    await page.click('#educationStartDate');
    await page.waitForSelector('.vdp-datepicker__calendar', { state: 'visible' });
    // Click the first enabled year
    await page.click('(//div[@class="vdp-datepicker__calendar"]//span[contains(@class, "year") and not(contains(@class, "disabled"))])[1]');
    // Click the month "February"
    await page.click('(//div[@class="vdp-datepicker__calendar"]//span[contains(@class, "cell month") and not(contains(@class, "disabled"))])[1]');
    await page.waitForSelector(elementActions.isCurrent, { state: 'visible' });
    await page.click(elementActions.isCurrent);
    await page.waitForSelector(elementActions.saveEducation, { state: 'visible' });
    await page.click(elementActions.saveEducation);
    await page.waitForTimeout(5000);

    // No further education
    await page.waitForSelector(elementActions.noFurtherEducation, { state: 'visible' });
    await page.click(elementActions.noFurtherEducation);

    // Fill in experience details
    await page.waitForSelector(elementActions.experienceTitle, { state: 'visible' });
    await page.fill(elementActions.experienceTitle, 'Software Tester');
    await page.waitForSelector(elementActions.experienceCompany, { state: 'visible' });
    await page.fill(elementActions.experienceCompany, 'Google');
    await page.waitForTimeout(2000);
    await page.click('(//label[span[contains(text(), "Branche / Fachbereich")]])[1]');
    await page.click('text=Bau');
    await page.click('(//label[span[contains(text(), "Tätigkeitsbereich ")]])[1]');
    await page.click('text=BaggerfahrerIn, Maschinist');
    await page.click('#experienceStartDate');
    await page.click('(//div[contains(@class, "vdp-datepicker__calendar")]//span[contains(@class, "cell year") and not(contains(@class, "disabled"))])[1]');
    await page.waitForTimeout(2000);
    await page.click('(//div[contains(@class, "vdp-datepicker__calendar")]//span[contains(@class, "cell month") and not(contains(@class, "disabled"))])[1]');
    await page.waitForSelector(elementActions.isCurrent, { state: 'visible' });
    await page.click(elementActions.isCurrent);
    await page.waitForSelector(elementActions.experienceDescription, { state: 'visible' });
    await page.click('#experienceDescription');
    await page.keyboard.type('I am a software tester at Google');
    await page.waitForSelector(elementActions.saveExperience, { state: 'visible' });
    await page.click(elementActions.saveExperience);

    // No further experience
    await page.waitForSelector(elementActions.noFurtherExperience, { state: 'visible' });
    await page.click(elementActions.noFurtherExperience);

    // Add skills
    await page.waitForSelector(elementActions.addSkillLanguage, { state: 'visible' });
    await page.click(elementActions.addSkillLanguage);
    await page.waitForSelector(elementActions.englishCheckbox, { state: 'visible' });
    await page.click(elementActions.englishCheckbox);
    await page.waitForSelector(elementActions.skillLevelRadio, { state: 'visible' });
    await page.click(elementActions.skillLevelRadio);
    await page.waitForSelector(elementActions.saveSkill, { state: 'visible' });
    await page.click(elementActions.saveSkill);
    await page.waitForSelector(elementActions.likeButton, { state: 'visible' });
    await page.click(elementActions.likeButton);

    await page.waitForSelector(elementActions.addSkillEdvIt, { state: 'visible' });
    await page.click(elementActions.addSkillEdvIt);
    await page.waitForSelector(elementActions.macCheckbox, { state: 'visible' });
    await page.click(elementActions.macCheckbox);
    await page.waitForSelector(elementActions.skillLevelRadio, { state: 'visible' });
    await page.click(elementActions.skillLevelRadio);
    await page.waitForSelector(elementActions.saveSkill, { state: 'visible' });
    await page.click(elementActions.saveSkill);
    await page.waitForSelector(elementActions.likeButton, { state: 'visible' });
    await page.click(elementActions.likeButton);

    await page.waitForSelector(elementActions.addSkillDrivingLicense, { state: 'visible' });
    await page.click(elementActions.addSkillDrivingLicense);
    await page.waitForSelector(elementActions.drivingLicenseB, { state: 'visible' });
    await page.click(elementActions.drivingLicenseB);
    await page.waitForSelector(elementActions.likeButton, { state: 'visible' });
    await page.click(elementActions.likeButton);

    // Save all skills and CV design
    await page.waitForSelector(elementActions.saveAllSkills, { state: 'visible' });
    await page.click(elementActions.saveAllSkills);
    await page.waitForSelector(elementActions.saveCvDesign, { state: 'visible' });
    await page.click(elementActions.saveCvDesign);
});