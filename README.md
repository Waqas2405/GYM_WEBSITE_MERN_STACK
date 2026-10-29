# 🏋️ Gym Website

Hi! This is my gym website project. I built it with the **MERN stack** to practice connecting a React frontend with a Node.js and Express backend. The site has workout sessions, pricing, a BMI calculator, and a contact form that sends the message to the gym owner's email.

**🔗 Live Demo:** [Add your live link here](https://your-live-link.com)

---

## 📸 Screenshots

### Home Page
![Home Page](screenshots/home.png)

### Workout Sessions and Bootcamps
![Workout Sessions](screenshots/workout-sessions.png)

### Pricing
![Pricing](screenshots/pricing.png)

### BMI Calculator
![BMI Calculator](screenshots/bmi-calculator.png)

### Gallery
![Gallery](screenshots/gallery.png)

### Contact Form
![Contact Form](screenshots/contact.png)

### Mobile View
<p align="center">
  <img src="screenshots/mobile-1.png" alt="Mobile view 1" width="250" />
  <img src="screenshots/mobile-2.png" alt="Mobile view 2" width="250" />
</p>

---

## ✨ What the Website Has

- Responsive layout that works on desktop and mobile
- Top workout sessions and featured bootcamps section
- Pricing section
- Photo gallery
- BMI calculator that shows a message based on the result
- Contact form that sends an email to the owner
- Toast messages for success and error
- Loading spinner while the message is sending

---

## 🛠️ Technologies I Used

**Frontend**
- React (with Vite)
- Axios
- React Toastify
- React Spinners
- CSS

**Backend**
- Node.js
- Express
- Nodemailer
- Dotenv
- CORS

---

## 📁 Folder Structure

```
GYM_MERN/
├── backend/
│   ├── utils/
│   │   └── sendEmail.js
│   ├── app.js
│   ├── config.env        (not uploaded to GitHub)
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── screenshots/
└── README.md
```

---

## 🚀 How to Run This Project

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/gym-mern.git
cd gym-mern
```

### 2. Start the backend

```bash
cd backend
npm install
```

Create a file called `config.env` inside the `backend` folder:

```env
PORT=4000
FRONTEND_URL=http://localhost:5173
SMTP_MAIL=yourgmail@gmail.com
SMTP_PASSWORD=your16characterapppassword
```

- `PORT` is the port the server runs on.
- `FRONTEND_URL` is the address of the React app. It must match exactly, with no `/` at the end.
- `SMTP_MAIL` is the Gmail address that sends the emails.
- `SMTP_PASSWORD` is a Gmail **App Password**, not your normal password. You need 2-Step Verification turned on to create one.

Then run:

```bash
npm run dev
```

If it works, you will see `Server listening at port 4000`.

### 3. Start the frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 📡 API

| Method | Endpoint | What it does |
|---|---|---|
| POST | `/send/mail` | Sends the contact form message to the owner's email |

Example request body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I want to join the gym."
}
```

---

## 📚 What I Learned

- How to connect a React frontend to an Express backend using Axios
- How to use environment variables with a `config.env` file and keep secrets out of GitHub
- How CORS works and why `FRONTEND_URL` must match the frontend address
- How to send emails from Node.js with Nodemailer and a Gmail App Password
- How to show success and error messages with React Toastify
- How to read error messages and fix them step by step

---

## 😅 Problems I Faced

- **`ERR_MODULE_NOT_FOUND` error:** In ES modules, local imports need the `.js` extension, and my file name had a small typo.
- **Form not sending:** The backend was not running, which caused `ERR_CONNECTION_REFUSED`.
- **Gmail login:** A normal password does not work. I had to create an App Password.
- **CORS errors:** The frontend URL in my env file has to match exactly.

---

## 👤 About Me

I am a junior MERN stack developer learning and building projects.

- GitHub: 
- Email: 

Feedback and suggestions are welcome!
