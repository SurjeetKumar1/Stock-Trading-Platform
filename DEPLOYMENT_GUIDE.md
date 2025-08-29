# Deployment Guide for Zerodha Clone

## Issues Fixed

### Backend Issues:
1. **CORS Configuration**: Fixed CORS to properly handle production domains
2. **Environment Variables**: Added proper environment variable handling
3. **Cookie Security**: Updated cookie settings for production vs development
4. **Error Handling**: Improved error handling and logging
5. **Database Connection**: Better database connection error handling

### Frontend Issues:
1. **Environment Configuration**: Dynamic backend URL based on environment
2. **Error Handling**: Better error messages and user feedback
3. **Form Validation**: Added client-side validation
4. **Loading States**: Improved loading states and user experience
5. **Debugging**: Added console logs for troubleshooting

## Environment Variables Required

### Backend (.env):
```bash
MONGO_URL=your_mongodb_connection_string
PORT=3002
NODE_ENV=production
SECRET_KEY=your_secret_key_here
```

### Frontend (.env.production):
```bash
REACT_APP_BACKEND_URL=https://your-backend-url.com
NODE_ENV=production
```

## Vercel Deployment Steps

### 1. Backend Deployment (Render/Heroku):
1. Push code to GitHub
2. Connect repository to Render/Heroku
3. Set environment variables
4. Deploy

### 2. Frontend Deployment (Vercel):
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard:
   - `REACT_APP_BACKEND_URL`: Your backend URL
4. Deploy

## Common Issues and Solutions

### 1. CORS Errors:
- Ensure backend CORS includes your Vercel domain
- Check that `withCredentials: true` is set in axios requests

### 2. Environment Variables:
- Frontend environment variables must start with `REACT_APP_`
- Set them in Vercel dashboard, not in code

### 3. Cookie Issues:
- Backend cookies now adapt to production/development
- Production uses `sameSite: "none"` for cross-origin

### 4. Database Connection:
- Ensure MongoDB connection string is correct
- Check if database is accessible from deployment platform

## Testing

### Local Testing:
```bash
# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm start
```

### Production Testing:
1. Test signup with valid data
2. Check browser console for errors
3. Verify backend logs for requests
4. Test database connection

## Troubleshooting

### Check Browser Console:
- Look for CORS errors
- Check network requests
- Verify environment variables

### Check Backend Logs:
- Database connection status
- Request/response logs
- Error messages

### Common Fixes:
1. **CORS**: Update backend CORS origins
2. **Environment**: Verify all environment variables are set
3. **Database**: Check MongoDB connection string
4. **Cookies**: Verify cookie settings for production
