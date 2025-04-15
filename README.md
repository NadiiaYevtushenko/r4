# 🎯 React 18 Suspense + use() + Axios + TypeScript

Цей проєкт демонструє використання експериментального хуку `use()` в React для роботи з асинхронними запитами. Реалізовано завантаження списку користувачів із API через `axios`, контроль стану завантаження через `Suspense`, типізацію через TypeScript і сучасне стилізоване відображення інтерфейсу.

---

## ✅ Особливості

- 📥 Асинхронне отримання даних з API `https://jsonplaceholder.typicode.com/users`
- 🧠 Хук `use()` — автоматичне очікування завершення Promise
- ⏳ `<Suspense>` — керування відображенням під час завантаження
- 📦 Структура на TypeScript з чіткими типами (`UserInterface`)
- 🎨 Сучасне оформлення списку користувачів через CSS Modules
- ⚡ Побудовано з Vite

---

## 📁 Структура проекту

```
my-react-app/
├── src/
│   ├── components/
│   │   ├── UsersComponent.tsx
│   │   └── UsersComponent.module.css
│   ├── types/
│   │   └── User.interface.ts
│   ├── utils/
│   │   └── fetchUsers.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
```

---

## 🚀 Запуск проекту

### ✅ Попередні вимоги

Переконайтесь, що встановлено:

```bash
node -v
npm -v
```

### ✅ Інсталяція та запуск

```bash
git clone https://github.com/yourusername/react-use-suspense-users.git
cd react-use-suspense-users

npm install
npm run dev
```

Після запуску відкрий у браузері:  
🔗 http://localhost:5173

---

## 🌐 Деплой на Vercel

```bash
npm install -g vercel
vercel login
vercel
```

🔹 Вкажіть директорію: `dist`



## 📌 Примітки

- Фокус зроблено на демонстрацію `Suspense` + `use()` + async API

---

## 🔗 Демо

****

---

