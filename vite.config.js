import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@mui/icons-material/Call', '@mui/icons-material/FacebookRounded', '@mui/icons-material/Language']
    }
  }
}
