[![Run tests](https://github.com/Armin-Paisen/BS-WDIO-sample/actions/workflows/main.yml/badge.svg)](https://github.com/Armin-Paisen/BS-WDIO-sample/actions/workflows/main.yml)


# WebdriverIO App Testing in BrowserStack
![WebdriverIO](https://img.shields.io/badge/WebdriverIO-EA5906?logo=webdriverio&logoColor=white)
[![BrowserStack](https://img.shields.io/badge/BrowserStack-FF6C37?logo=browserstack&logoColor=white)](https://www.browserstack.com/)
[![Appium](https://img.shields.io/badge/Appium-662D91?logo=appium&logoColor=white)](https://appium.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Mocha](https://img.shields.io/badge/Mocha-8D6748?logo=mocha&logoColor=white)](https://mochajs.org/)

A small-scale WebdriverIO E2E test automation framework for native apps. These tests run on real smartphone devices in the BrowserStack App Automate cloud. The architecture is designed to be robust, easy to maintain, scalable, and stable.

I used this architecture and methods in a previous project to reduce the flakiness rate from 30% to less than 4%, speed up test runs by 25% without adding more parallelization, and cut time spent on fixing by 30%.

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
🔸 Cross-device and parallel test-runs.   
🔸 Includes a lightweight CTRF report integrated into GitHub.  

##  💭 How can it be improved?
For a larger-scale project:

🔹 Add API and performance testing to complement E2E coverage and speed up feedback.  
🔹 Add Mocha test tags for targeted execution like `@smoke`, `@regression`, `@critical`, well as platform and feature tags.  
🔹 Tag unstable tests with `@flaky` and group them into a non-blocking (allowed-to-fail) suite, so they’re tracked without blocking merges.  
🔹 Split and standardize configs by environment, platform, and suite to avoid a single oversized config file.  
🔹 Set up a scheduled nightly regression run.  
🔹 Expand test data management with fixtures and data builders/factories to keep tests clean and scalable.  
🔹 Introduce a clear folder structure to improve reuse and maintainability, for example:  

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

You need a BrowserStack account to run this project (a free trial version is available).

### Local

1. Clone the repository to your local machine.  
2. Run `npm install` in the project directory to install the required dependencies.  
3. Rename `.env.example` to `.env` and add your BrowserStack key and username (further explanation is included in the `.env.example` comments).  
4. Download the Android `.apk` file from here: https://github.com/webdriverio/native-demo-app/releases (v1.0.8)  
5. Upload the `.apk` file to BrowserStack, then copy the uploaded app URL. It will look like this: `bs://ad373fa0173ef2b43b9e947d1df28cebf78c91ab`  
6. In `wdio.conf.ts`, add that link to the capabilities under `"appium:app"`.  
7. Run `npm run wdio` to start the tests.  

### Via GitHub

1. In GitHub Secrets, add: `BROWSERSTACK_ACCESS_KEY` and `BROWSERSTACK_USERNAME` using your BrowserStack key and username values.  
3. In GitHub go to Actions → Run tests → Run workflow.  
4. Optionally provide an input like "smoke" to run only a subset of tests  



## 🍿 Video
This video demonstrates the login tests and verifies:  
  
🔸 Errors for empty inputs  
🔸 Errors for incorrect credentials  
🔸 Only the email error when the email is invalid but the password is valid  
🔸 A success message for valid credentials, and that it can be closed  
  
You can find the details of the test script in: `/test/specs/login.ts`  
  
https://github.com/user-attachments/assets/6ff83c4f-4c8d-48f4-b291-79bb4a066e60  
  

## 🙌 Credits
This project uses the WebdriverIO Native Demo App (https://github.com/webdriverio/native-demo-app) for demonstration purposes.  
The app and related assets are owned by their respective authors and are provided under the terms of their original license.  
All other third-party tools and libraries are provided under their respective licenses.
