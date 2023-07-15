
# Image Annotation
![App Screenshot](https://moodyboles.com/wp-content/uploads/2023/07/Screenshot-2023-07-15-at-01.46.08.png)

## Tech Stack
**Client:** React, Next.js, TailwindCSS

**Server:** none

## Run Locally

1. Install dependencies
```bash
npm install
```
2. Build frontend
```bash
npm run dev
```
3. Start JSON server
```bash
json-server --watch storage/db.json
```
***Note:** the server will start on port `3009` to avoid conflicts. If you prefer using a different port, update `json-server.json` and `components/PredictModal.jsx`*

## Folders
- `config` - Contains app configuration files
- `pages` - App pages
- `components` - React components
- `elements` - React reusable elements
- `storage` - Contains sample database
- `public` - Public files/images
- `styles` - Contains CSS files

## Authors
- [@MoodyBoles](https://www.moodyboles.com/)

## License
[MIT](https://choosealicense.com/licenses/mit/)