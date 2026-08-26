# James Ash's React Deployment Assessment

This project is a React application created with Vite and deployed using GitHub Pages. The application demonstrates basic React functionality through an interactive counter.

## Live Application

https://ash-school-42.github.io/react-deployment-assessment/

## Deployment Platform

GitHub Pages

## Technologies Used

- React
- JavaScript
- Vite
- ESLint
- GitHub Actions
- GitHub Pages

## Running the Application Locally

Install the required dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment Configuration

The application uses `vite.config.js` to configure the base path required for deployment to the GitHub Pages project URL.

Deployment is automated using the `.github/workflows/deploy.yml` GitHub Actions workflow. When changes are pushed to the `main` branch, GitHub Actions builds the React application and deploys the production files to GitHub Pages.

## Functionality

The application includes an interactive button that uses React state to track and display the number of times the button has been clicked.

## Testing

## Testing

The application was tested locally in both development and production builds. The deployed application was tested in Google Chrome and Microsoft Edge. It was also tested using a mobile device viewport to verify that the layout remains responsive and that the interactive counter functions correctly across different screen sizes.
