# Cosmocloud CRUD [Live Website](https://cosmocloud-employee-crud.vercel.app/)

## Clone the repository

```bash
git clone https://github.com/Harsh3341/Cosmocloud-Employee-CRUD.git
cd Cosmocloud-Employee-CRUD
```

## Install the dependencies

```bash
npm install
```

## Environment Variables

Create a .env file in the root directory and add the following variables

Refer to the [cosmocloud](https://docs.cosmocloud.io/) to get the API_URL, PROJECT_ID, ENVIRONMENT_ID

```bash
API_URL=
PROJECT_ID=
ENVIRONMENT_ID=
```

## Start the server

```bash
npm run dev
```

## Open the browser and go to http://localhost:3000

## API Endpoints

- GET / (list all employees)
- GET /employee/:id (get employee by id)
- POST /employee/create (create a new employee)
