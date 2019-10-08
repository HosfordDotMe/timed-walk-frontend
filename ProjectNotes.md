# Timed-walk

### 🧐 To begin the challenge, I researched what a 10 meter timed walk test entailed.

- There are two methods to measure the gait speed. The results for both methods are notated as meters/second.
  - One method is to mark a 10 meter area and have the patient start a couple meters before and end a couple of meters after. The timed section is 10 meters and the total time is divided by 10.
  - The second method using 10 meters, but also has timing marks at the 2 and 8 meter distances. The timer starts and ends at these additional markers and is divided by six.
- Depending on the source of information, there may be multiple tests performed and then averaged.
- There may also be additional information captured about performance that includes assistance level, which I saw recorded on a scale of 1-7 with 7 being completely unassisted.

![](https://lh3.googleusercontent.com/ktPqrGYC3o7wL5dT1zv8z3Ej9yZHIbDhLyLaNbRa9ydzo1NXvPqEkwDifWs5z943HpKEGpHzbHbSddhPxow10nrbyN34_VXxlCd6UsZhbUrwVdMny8EjSTtGgrail_MI_KPvaDlUmufDw0kwOH-EFx6sb7TEfAY5hsabMJR8DBWlA5uFf2l_MECQHw_tt_JUGQ1IIyFlZ2GuFD_ho5ckOXhWs2I205GrX49YyMjoRva3IMqeF2Ng5Hf4QszhE536uN5_SYOpn_LYMxRS8cqFPfA0YJC46snY0YbfbVIkSzTLURwem_XOr0miRcPqY-3u3YDJD8JLeMDQRvhN9_OsxNnxfA3_HF8NgkS19VnjdA820xl6ZSOTPISxZsmIb7sMOXYKwa17QCNDh3d2dH7w6w2i53bEb0cMom8SxvtVygQhNaer3cO-DCfXauObNyhFr3yV0vPRM6DcWbGsj7NO1XeIlV5ZWcvsmfYQWDIiFRS3OPlXZdmZ0PvnlRJ5pTdpljwVyaXJQQqtMpuYy7HLmE-2yEMVBMPGYn86aDWfhlqY53OlQnBu24DWIbyn7onx5V6O9fwCdX1YtwAOHAC2MzdLgdUUPZvfV2ACYS6HZWFDkhWzp-Puj_LEk9RJU-rTd3wNzKBzUTHenq8Z9zLYiG_uWa9bDsmNOhj2QhUP8IPkVkL28vQ3r1eO4OjRm1ts_ZJaAQP805D31qiQmBCq2suGB3ceUj46EkDz1Awa-bcLS4-2sw=w1422-h1896-no)
### 🏷️ I also started working on what information I would expect to capture during use.

The following fields were some that I considered...

General Info
1. Patient Name
2. Patient Id
3. Physician Name
4. Date
5. Time of Day
6. Notes
7. Device Type

Timed Walk
1. Total Time
2. Timed Distance
3. Test #
4. Notes

### 📐 I mocked up an idea of making the workflow of adding new entry through a guided wizard as opposed as a large form.

![](https://lh3.googleusercontent.com/8X3eK7KPIPsSDqOBa7KzycMY0yqoa5B2QKv0eaAhb_rSLP0UJTTFp7eA1wuJodZnz08N7ev0YJrkLrBr9gdszqoZ-aX3SMlbz2ucHuMFs3d0Q8j5aMbInO7Led13fUZcHyDP0g6cKfZHYjM4W_7qpVmRMp8pPmU9_wuG3RtPZTMJSttQZg-s3UPlAWL-690ff1-k6qTzkeuXnHULQeiBHfxGXQAI53A-ut2eF0loseTWTiDSfOiIoePqBEFHHUobTfBlHZ4srJSnEmI15waajhalFRbpXfNfbfkmO8Ix3BeElGFiSDXUyCoB4fPRODbzIk7Fb3WdGDpkl5JMNJhBAd8bqIGWCBjzM3dUnbGs_JIj0LTc2Ch-0PwyEkJnGhCPnYaLvmUg6lp3xeMnC1MtdEOB5mpBZbeEsw26P5vHoj6Gf1T9nyMXoDrSsTrn8Bl3RRpehVtmJSkmVwTZItLT6CRTXJ6OTgzhwcdEQ8Ob5p_xBh6TzEBVfn_jpcTCcTEgfMvzKrrI77R6Itc6qq33mOsalUDOXajn22dSCdlUQ8HJc7VfUnXk-vakK_CKUxOwtzd3DhDxb91L74X7MGtQUoTUQwDk_HR6dvkPmsMOYOglVV99fNGgk_kZvGfSEWp5ewuVJ_OSH2hZGVkKr2rhoJ7HQkWQxzu-pcQbLWtOexWj98ulmefZCyStBVWk3l7fO_-CddlzqNJ98qjEHv19g8D0XZ8_U8iLLpm4Ji5eTKyoNd47eA=w263-h351-no)

### 🏗️ I started the creating the frontend of the app by using [Create React App](https://github.com/facebook/create-react-app).

I do not have a large amout of experience with forms in React and had leveraged Salesforce/Pardot for forms in my most recent Gatsby project so I focused initial research on controlled/uncontrolled forms. This led to the discovery of the [Formik](https://github.com/jaredpalmer/formik) form library which I decided to leverage in the wizard.

### 🧱 After getting a form created, I started working on setting up a backend.

Previously, I had used [MongoDB](https://www.mongodb.com/), [Express](https://expressjs.com/), and [NodeJS](https://nodejs.org/en/) to create an API. I had tossed around the idea of using local storage as a way to save entries, but decided on a database to make the possibilty of performing the initial entry during a test using a mobile device then later copying the data into the the Electronic Medical Record System at another location. This decision would require more research to be used in a production environment in order to protect information with HIPAA and authentication in mind.

### 🧪 I then began the process of setting up end to end testing.

Although [Jest](https://jestjs.io) is included with CRA, but I chose to utilize [cypress.io](https://www.cypress.io/) to test due to some familiarity and because I enjoy the tooling.

### 🎨 For the design, I went with a very simple [Bootstrap](https://getbootstrap.com/) design.

The views were created to be functional on small screens to allow for data entry during a test session and then expand to larger screens when copying data into the EMRS.

### 🤳 Post project reflections

I enjoyed creating this project and feel I gained more knowledge in the process. I ran into a few roadblocks in some areas including how to expose and use a Location header with a 201 response when creating a record. There are a number of items that can be expanded with the application...

1. Add a timer?
2. More styling
3. Authentication/Privacy research
4. Refine required fields
5. More/Better validations
6. Success/Error prompts
7. Continued refactoring
8. Settings to allow formatting of text statement
9. Single test view improvemnts
10. More tests
11. Assistance level
12. and more

### 🚀 Installation

Backend
1. Clone https://github.com/HosfordDotMe/timed-walk-backend
2. Use `yarn install` to install the node modules
3. Copy the `config/dev.example.js` to `/config/dev.js` and add the connection string to mongoURI
4. `yarn dev` can be used to start the development server
5. Go to  http://localhost:5000/ in a browser to test that the server is running

Frontend
1. Clone https://github.com/HosfordDotMe/timed-walk-frontend
2. Use `yarn install` to install the node modules
3. The default api for the frontend is setup to use a Heroku instance. If you want to use the local instance change the REACT_APP_API_URI in .env.development file to `http://localhost:5000/api`
4. `yarn dev` can be used to start the development server
5. Go to  http://localhost:3000/ in a browser to test that the server is running
