#  FinTrack Dashboard

A full-stack personal finance management application to help users track their transactions, manage budgets, and gain insights into their spending patterns through interactive data visualizations.


##  Features

-  **Interactive Charts**: Visualize your income, expenses, and savings with pie and bar charts powered by Chart.js.
-  **Transaction Management**: Add, edit, and delete income and expense entries.
-  **Budget Tracking**: Set monthly budgets and monitor your progress.
-  **Secure Authentication**: JWT-based user login and session management.
-  **Fast & Scalable**: Optimized REST APIs ensure smooth data flow between frontend and backend.

## 🛠 Tech Stack

### Frontend
- React.js
- TypeScript
- Chart.js
- TailwindCSS (or your styling method)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication
  
##  Folder Structure
```bash
/client # React Frontend
/server # Express Backend
└── models
└── routes
└── controllers
└── middleware
```


##  Installation

1. **Clone the repository**

```bash
git clone https://github.com/alankar25/Personal_Finance_Dashboard.git
cd Personal_Finance_Dashboard
```
2. **Start the backend**
```bash
cd server
npm install
npm run dev
```

4. **Start the frontend**
```bash
cd ../client
npm install
npm start
```


