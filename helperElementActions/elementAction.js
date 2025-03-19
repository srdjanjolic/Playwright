class ElementActions {
    constructor() {
        // Constants
        this.jobPageUrl = 'https://hokify.at/job/25602863';
        this.fakeEmail = 'mikimikic9555@gmail.com';
        this.fakePassword = 'Administrator9';

        // Selectors
        this.okButtonInCookieModalDialog = '//button[contains(text(), "OK")]';
        this.bewerbungStartenButtonInModal = '//button[text()="Bewerbung starten!"]';
        this.profileExistsButton = '[data-cy="profile-exists"]';
        this.checkboxPrivacy = 'input[name="privacy_user_register"]';
        this.anmeldenButton = 'button[type="submit"]';
        this.telefonnummerInput = 'input[name="phone"]';
        this.weiterBewerbungButton = '#interview-button-next';
        this.profilManuelErstelenButton = '//div[@data-name="create"]';
        this.educationSchool = '#education-school';
        this.educationStartDate = '#experienceStartDate';
        this.isCurrent = '#isCurrent';
        this.saveEducation = 'button[data-cy="save-education"]';
        this.noFurtherEducation = 'button[data-cy="no-further-education"]';
        this.experienceTitle = '#experience-title';
        this.experienceCompany = '#experience-company';
        this.experienceDescription = '#experienceDescription';
        this.saveExperience = 'button[data-cy="save-experience"]';
        this.noFurtherExperience = 'button.inline-flex.border.bg-color-transparent.text-color-main';
        this.addSkillLanguage = "//button[@data-cy='add-skill-language']";
        this.englishCheckbox = "//label[@data-cy='checkboxLabel-default' and text()='Englisch']";
        this.skillLevelRadio = 'input[value="2"]';
        this.saveSkill = "//button[@data-cy='save-skill']";
        this.likeButton = '[data-cy="button-round"]';
        this.addSkillEdvIt = "//button[@data-cy='add-skill-edv-and-it']";
        this.macCheckbox = "//label[text()='Mac']";
        this.addSkillDrivingLicense = "//button[@data-cy='add-skill-driving-license']";
        this.drivingLicenseB = "//label[text()='B']";
        this.saveAllSkills = '[data-cy="save-all-skills"]';
        this.saveCvDesign = '[data-cy="save-cv-design"]';
    }
    //Fills an input field with the specified text.
    async fillInput(page, selector, text) {
        await page.fill(selector, text);
    }

    // Selects an option from a dropdown by clicking it.
    async selectDropdownOption(page, dropdownSelector, optionText) {
        await this.waitAndClick(page, dropdownSelector);
        await this.waitAndClick(page, `text=${optionText}`);
    }
    async navigateToJobPage(page) {
        try {
            // Navigate to the job page
            await page.goto(this.jobPageUrl);
    
            // Move the mouse to a specific position (optional, for interaction simulation)
            await page.mouse.move(500, 300);
    
            // Bring the page to the front (useful for multi-tab scenarios)
            await page.bringToFront();
    
            console.log('Navigated to the job page successfully.');
        } catch (error) {
            console.error(`Error navigating to the job page: ${error.message}`);
            throw error; // Re-throw the error to fail the test
        }
    }
}

module.exports = new ElementActions();