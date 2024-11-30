# Magic Cooker

## Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/Krysthecoder/magicooker
```

### 2. Navigate to the project directory and install dependencies

```bash
cd magiccooker && npm install
```

### 3. Configure environment variables

Create a `.env` file based on the provided `.env.example`. Adjust the values as needed.

### 4. Start the development server

```bash
npm run dev
```

You're all set! The project should now be running on your local environment.

## Running Storybooks on Local Environment

### 1. Run the following command to run storybooks

```bash
npm run storybook
```

### 2. Run this command to get a quick look at storybooks(optional)

```bash
npm run storybook dev -p 6006 --initial-path=/onboarding --quiet
```

### 3. Go the following url in your browser to navigate to the storybooks sections

```
http://localhost:6006/
```

---

## Branch Naming Convention

We follow a Contextual Abbreviated Naming convention to ensure clarity and consistency in branch names. The format is:

```
<project><module><ticket-number><keywords><description>
```

### Explanation:

> **<project>:** Abbreviation of the project name (e.g., mcp for MagiCooker Project).
> **<module>:** The module being worked on, e.g., fe for Frontend.
> **<ticket-number>:** The assigned ticket or task number (e.g., `t86b2zxhh6` ).
> **<keywords>:** A brief descriptor for the task type (e.g., feat for feature, fix for bug fixes, etc.).
> **<description>:** A concise description of the branch purpose (e.g., `add-login-screen-base-components`).

**Example:**
For adding login screen base components in ticket `t86b2zxhh6`:

```
mcp-fe-t86b2zxhh6-feat-add-login-screen-base-components
```

This structure promotes better organization and makes it easier to understand the purpose of a branch at a glance.

---

## Contributing to MagiCooker

To contribute to this project, please follow these steps:
**Clone the repository:**

```bash
git clone git@github.com:Krysthecoder/magicooker.git
```

**Switch to the develop branch:**

```bash
git checkout develop
```

**Create a new branch:**

```bash
git checkout -b <new-branch-name>
```

**Make your changes and commit them.**

```bash
git add .
git commit -m "Your Message following our existing commitlint standards"
```

**Push your branch:**

```bash
git push origin <new-branch-name>
```

**Open a pull request:**
Create a pull request targeting the develop branch.
Your changes will be reviewed, and if approved, they will be merged into develop.

---

**Branch Naming Convention**
We follow a Contextual Abbreviated Naming convention for branch names. The format is:

```
<project><module><ticket-number><keywords><description>
```

For example, to add login screen base components for ticket t86b2zxhh6 :

```
mcp-fe-t86b2zxhh6-feat-add-login-screen-base-components
```

Refer to the Branch Naming Convention section above for details. Thank you for your contributions!
