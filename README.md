# user-adminitration-admin

Lets build a user adminitration admin that allows the user to: 
- Invite users by email, name and specify a list of tuples defines by both a role and service (as user might have several of these)
- Trigger an account recovery proces for a given usr
- Delete / Remove user
- Edit a user (email, and role/service tuples)
- Add a separate page for view usage statistics (like iiam page of google cloud), you should be able to see things like nummber of logisn per userand request made to each service in graphs

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/user-adminitration-admin.git
cd user-adminitration-admin
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
