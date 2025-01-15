# Running the App

To run the app, follow these steps:

1. **Install dependencies**:
   You can use either `npm` or `yarn` to install the required dependencies.

Using npm:

```sh
npm install
```

Using yarn:

```sh
yarn install
```

2. **Create an `.env` file**:
   Create a file named `.env` in the root directory of the project and add your access key.

!!! OTHERWISE API CALLS WONT WORK !!!

Example:

```env
VITE_ACCESS_TOKEN=your_access_key_here
```

3. **Run the development server**:
   You can use either `npm` or `yarn` to start the development server.

Using npm:

```sh
npm run dev
```

Using yarn:

```sh
yarn dev
```

## Todo List

- [ ] Make it able to select multiple children in Table
- [ ] Make possible to check in & out multiple children
- [ ] Make CSS Statuses look better with ex Icons instead of Sleeping Yes & No
- [ ] Better CSS color choices
- [ ] When no child is selected create Skeleton component instead of No child selected
- [ ] Make SelectedChild.tsx display information in a better way.
- [ ] Write unit for functions in functions.ts
- [ ] Write E2E to see in checking in & out children works
- [ ] Deploy to production
