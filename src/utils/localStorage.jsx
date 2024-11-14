const employees = [
  {
    id: 1,
    firstName: "Rajesh",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Complete project documentation",
        description:
          "Write and finalize the documentation for the current project.",
        date: "2024-11-12",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Attend team meeting",
        description: "Participate in the monthly team meeting for updates.",
        date: "2024-11-10",
        category: "Meeting",
      },
    ],  
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Client feedback review",
        description:
          "Review feedback from client and make necessary adjustments.",
        date: "2024-11-14",
        category: "Client Work",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Database backup",
        description: "Perform a backup of the database for safety.",
        date: "2024-11-08",
        category: "Maintenance",
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    firstName: "Anil",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Prepare budget report",
        description: "Compile the financial report for budget allocation.",
        date: "2024-11-15",
        category: "Finance",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Organize files",
        description: "Sort and organize project files for archiving.",
        date: "2024-11-09",
        category: "Admin",
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 4,
    firstName: "Deepa",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Code review",
        description: "Review code for the new feature module.",
        date: "2024-11-13",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix login bug",
        description:
          "Identify and fix the bug affecting the login functionality.",
        date: "2024-11-11",
        category: "Bug Fix",
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1,
    },
  },
  {
    id: 5,
    firstName: "Sneha",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design new layout",
        description: "Create a layout design for the upcoming website project.",
        date: "2024-11-16",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Submit project proposal",
        description: "Submit the proposal for the new project to management.",
        date: "2024-11-10",
        category: "Management",
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
//   console.log(employees, admin)
  return {employees, admin}
};
