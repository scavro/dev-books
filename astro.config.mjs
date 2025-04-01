// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';


// https://astro.build/config
export default defineConfig({
  env:{
    schema: {
      SHOW_BUY_BUTTON: envField.boolean ({ default:true , context:'server', access: 'public' }),
      SCORE_API_ENDPOINT: envField.string({ context:'client', access: 'public' }),
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});




