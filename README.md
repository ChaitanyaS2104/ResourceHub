# 📚 ResourceHub

**ResourceHub** is a dynamic and responsive platform where users can share and organize collections of useful resources related to **anything** — from coding, food, and travel, to podcasts and tutorials. Think of it like your personal or community-powered digital bookshelf.

## 🌟 Features

- 🔐 **Google Authentication** – Secure sign-in via Google OAuth.
- 🗂️ **Resource Books** – Create collections (e.g., a "Python Book") filled with individual resources like:
  - YouTube videos
  - Website links
  - Articles
  - Podcasts
- 🏷️ **Tag-Based Organization** – Add custom tags to each Resource Book to easily categorize and filter them.
- 🔍 **Powerful Search** – Search across:
  - Resource Book titles and descriptions
  - Tags
  - Creator usernames
- 🖊️ **Full CRUD Support** – Create, Read, Update, and Delete operations supported for both Resource Books and their individual resources.
- 💡 **Responsive Design** – Built using **Tailwind CSS** to ensure a beautiful UI across all devices and screen sizes.

## 📸 Screenshots
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/bb244083-cc88-4f36-9465-a0a647ee8a1e" />
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/d8d5be7e-efba-426a-bb51-87f06ee1ba74" />
<img width="414" alt="image" src="https://github.com/user-attachments/assets/41f2d97e-3a3c-4292-8e60-91237e4f9f20" />
<img width="414" alt="image" src="https://github.com/user-attachments/assets/7c02b90a-6ce6-4dd8-822f-d9397080ce3b" />

## 🚀 Tech Stack

- **Frontend**: React / Next.js
- **Styling**: Tailwind CSS
- **Authentication**: Google OAuth (NextAuth.js)
- **Backend/API**: App Route handlers in Next.js
- **Database**: MongoDB

## 🧠 Why ResourceHub?

Whether you're a developer collecting tutorials, a traveler bookmarking places, or a food enthusiast curating recipes, ResourceHub gives you a structured way to organize and revisit them — all in one place.

## 🛠️ Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/resourcehub.git
   cd resourcehub
2. Install dependencies:
    ```bash
    npm install
3. Set up your .env file for Google Auth and Database configuration:
   ```bash
   GOOGLE_CLIENT_ID=your_client_id
   GOOGLE_CLIENT_SECRET=your_client_secret
   NEXTAUTH_URL=http://localhost:3000
   MONGODB_URI=your_mongodb_connection_string
4. Run the development server:
   ```bash
   npm run dev
5. Open http://localhost:3000 to view it in the browser.

 Future Improvements

Bookmark or favorite feature
- Social sharing and public resource books
- User profiles with activity history
- Import/export of resource books (JSON or markdown)

## 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

Made by Chaitanya S
