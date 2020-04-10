# Loan application using ReactJS

## Description:

Simple React.js website that allows the candidate to go through a
loan application (doesn’t have to contain too many fields, but at least
“amount required” and “loan term”). All the loans will be assumed to have a
“weekly” repayment frequency.
After the loan is approved the user must be able to submit the weekly loan
repayments. It can be a simple repay button, which won’t need to check if
the dates are correct, but will just set the weekly amount to be repaid. The app should use an API architecture, where dummy data can be
returned from the APIs directly within the React.js code.

## Dependacies Used:

- Material UI library for UI design
  - @material-ui/core, @material-ui/icons
- URL formatting utility
  - url
- Fake REST apis for backend
  - json-server

## Steps to run applications:

1. npm install -g json-server
2. npm install in project directory
3. Open another terminal => npm run jsonserver
4. Open another terminal => npm start

## Notes:

- json-server is running at port 3000
- react app is running at port 3005

## User Login:

There are two types of login:

1. Loan Requester
2. Loan Approver

#### Loan Requester: (Loan requester can request for loan, and repay his existing loan)

    Username: a@c.com
    Password: 1

#### Loan Approver(admin): (Loan Approver, approves the loan application)

    Username: admin
    Password: admin
