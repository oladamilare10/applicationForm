# 🔑 Getting Your Gemini API Key

Follow these steps to get your API key and start using the AI Assistant:

## Step-by-Step Guide

### 1. Go to Google AI Studio
- Visit: https://aistudio.google.com/app/apikey
- You'll need a Google account (personal Gmail is fine)

### 2. Create API Key
- Click **"Create API Key"** button
- Select **"Create API key in new project"** or existing project
- The key will be generated automatically

### 3. Copy Your Key
- Click the copy icon next to your API key
- Keep it safe and never share it

### 4. Add to .env File
- Open `.env` file in the project root
- Replace `your_gemini_api_key_here` with your actual key:

```
REACT_APP_GEMINI_API_KEY=AIzaSyDxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 5. Restart Development Server
```bash
npm start
```

## ✅ What to Expect

After adding the API key:
- The purple chat button will be functional
- You can send messages and get AI responses
- The AI will answer about company info, positions, and form help
- Response time: ~1-2 seconds typically

## 🚀 Testing the Connection

Once configured:
1. Open your app (usually http://localhost:3000)
2. Look for the purple chat button (bottom-right)
3. Click to open the chat
4. Type a test message: "Hello!"
5. You should get a response from Gemini AI

## ⚠️ Important Security Notes

### DO:
✅ Keep API key in `.env` file
✅ Add `.env` to `.gitignore`
✅ Use environment variables for all sensitive data
✅ Rotate keys periodically

### DON'T:
❌ Commit `.env` file to Git
❌ Share API key publicly
❌ Expose key in client-side code
❌ Use in production without backend proxy

## 📊 API Quotas & Pricing

- **Free Tier**: 15 requests/minute limit
- **Premium**: Pay-as-you-go pricing
- No credit card required for free tier

Check your usage: https://aistudio.google.com/app/usage

## 🔧 Troubleshooting

### "API Key not valid"
- Double-check the key is copied correctly
- Restart the dev server: `npm start`
- Check `.env` file has correct syntax

### "403 Forbidden Error"
- Key might not have proper permissions
- Try creating a new key

### No Response from AI
- Check internet connection
- Look at browser console (F12) for errors
- Verify API quota hasn't been exceeded

### Rate Limit Exceeded
- Free tier: max 15 requests/minute
- Wait a minute and try again
- Consider upgrading plan if needed

## 📚 Resources

- **API Documentation**: https://ai.google.dev/
- **Gemini Models**: https://ai.google.dev/models
- **Pricing Calculator**: https://ai.google.dev/pricing

## 💡 Pro Tips

1. **Test with Short Prompts**: Start with simple questions
2. **Monitor Logs**: Check browser console for API responses
3. **Set Spending Limits**: Enable budget alerts in Google Cloud Console
4. **Use Browser DevTools**: F12 → Network tab to see API requests

---

Need help? Check the [Implementation Summary](IMPLEMENTATION_SUMMARY.md) or [Setup Guide](AI_ASSISTANT_SETUP.md)
