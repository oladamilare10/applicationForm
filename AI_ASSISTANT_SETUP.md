# AI Assistant Implementation Guide

## Features Implemented

✅ **Fixed Position Widget** - Bottom-right corner of the screen  
✅ **Always Visible** - Floating button that users can click anytime  
✅ **Gemini 2.5 Flash Integration** - Latest Google AI model  
✅ **Company Information** - Provides details about your company  
✅ **Position Details** - Information about 3 available roles:
- Software Developer
- UI/UX Designer
- Business Analyst

✅ **Application Form Assistance** - Helps users fill out forms  
✅ **Responsive Design** - Works on desktop and mobile  
✅ **Beautiful UI** - Modern chat interface with animations  

## Setup Instructions

### 1. Get Your Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Click "Create API Key"
3. Copy your API key

### 2. Configure Environment Variable

Open `.env` file in the project root and replace the placeholder:

```
REACT_APP_GEMINI_API_KEY=your_actual_api_key_here
```

### 3. Required Dependencies

The following packages are already installed:
- `@google/generative-ai` - Gemini API client
- `react-icons` - For UI icons
- `react` & `react-dom` - Core React libraries

If you need to reinstall:
```bash
npm install @google/generative-ai react-icons
```

## How It Works

### AI Assistant Widget

- **Toggle Button**: Purple gradient button in bottom-right corner
- **Chat Interface**: Displays conversation history
- **Input Field**: Type questions about:
  - Company information
  - Available positions (Software Developer, UI/UX Designer, Business Analyst)
  - Application form help
  - General recruitment questions

### Key Features

1. **Persistent State**: Chat remains available on both Home and Form pages
2. **Message History**: Keeps track of the conversation
3. **Loading State**: Shows spinner while waiting for AI response
4. **Scroll Auto-Focus**: New messages automatically scroll into view
5. **Error Handling**: Graceful fallback if API fails
6. **Mobile Responsive**: Full-screen chat on mobile devices

## Customization

### Update Company Information

Edit [src/components/AiChat.jsx](src/components/AiChat.jsx#L30) and modify the `companyContext` variable:

```javascript
const companyContext = `
  // Add your company details here
  COMPANY INFORMATION:
  - Your company description
  
  AVAILABLE POSITIONS:
  1. Position Name
     - Experience requirements
     - Responsibilities
     - Required skills
`
```

### Customize Styling

Edit [src/components/AiChat.css](src/components/AiChat.css) to change:
- Colors (currently purple gradient: #667eea → #764ba2)
- Size of widget and chat box
- Font styling
- Animation effects

### Change Model

To use a different Gemini model, edit [src/components/AiChat.jsx](src/components/AiChat.jsx#L81):

```javascript
const model = genAI.current.getGenerativeModel({ 
  model: 'gemini-2.5-flash' // Change this
})
```

Available models:
- `gemini-2.5-flash` (recommended - fastest)
- `gemini-2.0-flash`
- `gemini-1.5-pro` (more powerful, slower)

## Testing the AI Assistant

1. Start the development server:
```bash
npm start
```

2. Look for the purple chat button in the bottom-right corner
3. Click the button to open the chat interface
4. Try asking:
   - "Tell me about your company"
   - "What positions are available?"
   - "How do I apply for the Software Developer role?"
   - "Can you help me fill the form?"

## File Structure

```
src/
├── components/
│   ├── AiChat.jsx          # Main AI assistant component
│   └── AiChat.css          # Styling for the widget
├── App.js                  # App root (AiChat added here)
└── Home.jsx               # Home page (AiChat removed)
.env                       # Environment variables
```

## Troubleshooting

### API Key Not Working
- Verify the key is correct in `.env`
- Check that you're using the Browser API key, not a Service Account key
- Ensure `REACT_APP_` prefix is used for environment variables
- Restart the dev server after changing `.env`

### Chat Not Appearing
- Check browser console (F12) for errors
- Ensure CSS file is imported correctly
- Verify the component is added to App.js

### No API Response
- Check internet connection
- Verify API key has proper permissions
- Check Google Cloud console for quota limits
- Look for API error messages in browser console

## Security Notes

⚠️ **Important**: Never commit your API key to version control!
- Add `.env` to `.gitignore` if not already there
- Use environment variables for sensitive data
- Consider backend API proxy for production

## Next Steps

1. ✅ Add more company context to AI responses
2. ✅ Integrate form data pre-filling from AI suggestions
3. ✅ Add conversation history persistence (localStorage)
4. ✅ Implement typing indicators
5. ✅ Add suggested questions quick-reply buttons

---

For questions or issues with the Gemini API, visit [Google AI Documentation](https://ai.google.dev/)
