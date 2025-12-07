[![Run tests](https://github.com/Armin-Paisen/BS-WDIO-sample/actions/workflows/main.yml/badge.svg)](https://github.com/Armin-Paisen/BS-WDIO-sample/actions/workflows/main.yml)


# WebdriverIO App Testing in BrowserStack

A small-scale WebdriverIO E2E test automation framework for native apps. These tests run on real smartphone devices in the BrowserStack App Automate cloud. The architecture is designed to be robust, easy to maintain, scalable, and stable.

I used this architecture and methods in a project to reduce the flakiness rate from 30% to less than 4%, speed up test runs by 25% without adding more parallelization, and cut time spent on repairs by 30%.

## 📦 Technologies and Methods

🔹 `WebdriverIO`  
🔹 `BrowserStack`  
🔹 `TypeScript`  
🔹 `Mocha`  
🔹 `GitHub Workflows` (CI/CD)  
🔹 `Page Object Model`  
🔹 `ESLint`  
🔹 `DRY`  

##  🦄 Features
🔸 Pipeline runs on every push/merge request and must pass before being able to merge. This ensures updates don’t break any tests.  
🔸 ESLint check is run on commit and in the pipeline, ensuring code format and quality are set to a standard.  
🔸 Test scripts are encapsulated and idempotent. This allows tests to be run separately in dedicated test suites without relying on other tests.  


##  💭 How can it be improved?
Thinking ahead using it for larger scale project:

- Add API testing


##  🚦 Running the Project

1. **Clone the repo**

   ```bash
   git clone https://github.com/Armin-Paisen/BS-WDIO-sample
   cd BS-WDIO-sample
   npm install
   

To be able to run this project with browserstack you need to edit the .env.example. Open the .env.example file and follow the insturctions (comments in the file) 

2. **Run the tests**
    npx wdio run wdio.conf.ts


Tests can also be run manually in GitHub or be started by another pipeline form another repository (requires some additional work)

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


mark tests as flaky
.env
