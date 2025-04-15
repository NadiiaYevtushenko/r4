# 📬 React Optimistic Messages + Suspense Users App

This project is a hands-on React + TypeScript solution focused on:

- Using the experimental `use()` hook with `Suspense` to fetch a list of users.
- Applying `useOptimistic()` for instant message display before the request is confirmed.
- Modular component structure using CSS Modules.

---

## 🧩 Features

### 🔄 Optimistic UI
- A message appears in the interface immediately after clicking "Send", before the request completes.
- After the request completes, the message is confirmed and marked accordingly.

### 👥 Suspense-based User Loading
- Users are fetched from the API: [jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
- While the data is loading, `Suspense` displays a fallback loading indicator.

### 🎨 Modular Styles
- Styling is handled through `OptimisticMessages.module.css`
- Each component has its own scoped style.

### 🧠 TypeScript
- Strongly typed using interfaces like `UserInterface` and `MessageInterface`.
- Ensures reliability and better developer experience.

---

## 🗂️ Project Structure

```
my-react-app/
├── src/
│   ├── components/
│   │   ├── OptimisticMessages.tsx         # form component
│   │   ├── OptimisticMessages.module.css  # styles for form
│   │   └── UsersComponent.tsx             # user list with use()
│
│   ├── utils/
│   │   ├── sendMessage.ts                 # simulates API request
│   │   └── createMessage.ts               # builds message object
│
│   ├── types/
│   │   ├── User.interface.ts
│   │   └── Message.interface.ts
│
│   ├── App.tsx                           # main component
│   ├── main.tsx                          # entry point
│   └── index.css                         # global styles
├── public/
│   └── index.html
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## 🚀 How to Run Locally

### 🔧 Install dependencies
```bash
npm install
```

### ▶️ Start the dev server
```bash
npm run dev
```

Then open your browser at:  
**http://localhost:5173**

---

## 🧪 Logic Flow

1. The user list is fetched and displayed via `use()` and `Suspense`.
2. The message form appears below the user list.
3. User types a message and clicks "Send".
4. `useOptimistic()` updates the UI immediately with the pending message.
5. After 1 second, `sendMessage()` confirms the message and marks it as completed.
6. The final message list is saved in `useState`.

---

## 🌐 Deployment

This project is ideal for deployment on **Vercel** or **Netlify**.

```bash
npm install -g vercel
vercel
```

---

## 🧠 Technologies Used

- ⚛️ React
- 🔠 TypeScript
- 💅 CSS Modules
- ⚡ Vite
- 🧪 useOptimistic
- 🧵 use()
- ☁️ Axios
- 🛠 UUID

---

## 👉 Demo Link

**Live Deployment:**  
[Vercel Project](https://r4-nadiias-projects-dc6d9292.vercel.app/)
