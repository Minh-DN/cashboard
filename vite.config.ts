import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  build: {
    outDir: 'dist',
    //@ts-ignore
    base: '/',
    rollupOptions: {
      input: '/src/index.tsx', // Change this to your app's entry point
    },
  },
});
