[![Run tests](https://github.com/Armin-Paisen/BS-WDIO-sample/actions/workflows/main.yml/badge.svg)](https://github.com/Armin-Paisen/BS-WDIO-sample/actions/workflows/main.yml)


# WebdriverIO App Testing in BrowserStack
![WebdriverIO](https://img.shields.io/badge/WebdriverIO-EA5906?logo=webdriverio&logoColor=white)
[![BrowserStack](https://img.shields.io/badge/BrowserStack-FF6C37?logo=browserstack&logoColor=white)](https://www.browserstack.com/)
[![Appium](https://img.shields.io/badge/Appium-662D91?logo=appium&logoColor=white)](https://appium.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Mocha](https://img.shields.io/badge/Mocha-8D6748?logo=mocha&logoColor=white)](https://mochajs.org/)

A small-scale WebdriverIO E2E test automation framework for native apps. These tests run on real smartphone devices in the BrowserStack App Automate cloud. The architecture is designed to be robust, easy to maintain, scalable, and stable.

I used this architecture and methods in a project to reduce the flakiness rate from 30% to less than 4%, speed up test runs by 25% without adding more parallelization, and cut time spent on fixing by 30%.

## 📦 Technologies and Methods

🔹 `WebdriverIO`  
🔹 `BrowserStack`  
🔹 `Appium`  
🔹 `TypeScript`  
🔹 `Node.js` / `npm`  
🔹 `Mocha`  
🔹 `GitHub Workflows` (CI/CD)  
🔹 `Page Object Model`  
🔹 `ESLint`  
🔹 `DRY`  

##  🦄 Features
🔸 Pipeline runs on every push/merge request and must pass before being able to merge. This ensures updates don’t break any tests.  
🔸 ESLint runs on commit and in the pipeline, ensuring consistent formatting and code quality.  
🔸 Test scripts are encapsulated and idempotent. This allows tests to be run separately in dedicated test suites without relying on other tests.  
🔸 Environment-driven configuration via a `.env` file for BrowserStack credentials and test settings.  
🔸 Prepared for suite splitting (e.g., smoke/regression) and scalable execution patterns.  
🔸 Cross-device and parallel test-run ready.  
🔸 Supports scheduled nightly test runs.  
🔸 Includes a lightweight CTRF report integrated into GitHub.  

##  💭 How can it be improved?
For a larger-scale project:

🔹 Add API and performance testing to complement E2E coverage and speed up feedback.  
🔹 Add Mocha test tags for targeted execution like `@smoke`, `@regression`, `@critical`, and platform and feature tags.  
🔹 Also tag unstable tests with `@flaky` and group them into an allowed-to-fail suite, so they are tracked without blocking merges.  
🔹 Split and standardize configs by environment, platform, and suite to avoid a single oversized config file.  
🔹 Expand test data management with fixtures and data builders/factories to keep tests clean and scalable.  
🔹 Introduce a clear folder structure for reuse and maintainability for `fixtures/`, `helpers/`, `utils/`, `services/` for example:

```
test/
  specs/  
  pageobjects/  
  fixtures/  
  helpers/  
  utils/  
  services/
  ```


##  🚦 Running the Project

### Local:
1. Clone the repository to your local machine.  
2. Run `npm install` in the project directory to install the required dependencies.  
3. Edit the `.env.example` ->  change file name and add Browserstack credentials (Further explanation inside the .env.example comments)  
4. Run `npm run wdio` to start tests.  

### Via GitHub:
1. Go to Actions → Run tests → Run workflow.  
2. Optionally provide an input like "smoke" to just run a subset of tests



## 🍿 Video


Reduce maintanance effort by 30% and flakyness by 50%:
Robust architecture
-page object model
-observability with ctrf report in Github (as example for small custom made report - browserstack has its on detailed report dashboard so not really neccesary in thsi project)


Reduce manual testing effort by 80%:
scalable framework
-cross device testing
-parallel testing
-CI/CD pipeline
-suit split smoke/regression


## 🙌 Credits
This project uses the WebdriverIO example app for demonstration purposes. The app and related assets are owned by their respective authors and are subject to their original license.
All other Third-party tools and libraries are also subject to their respective licenses.
