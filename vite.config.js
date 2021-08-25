
import path from 'path';
module.exports = {
  server: {
    proxy: {
      // Using the proxy instance
      '/api': {
        target: 'http://localhost:3030',
        changeOrigin: true,
        secure: false,
      }
    }
  },
}
