# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
## REACT 19 NEW FEATURES
✅ React Compiler
✅ Transitions
✅ Actions
✅ New Hooks
✅ use() and Async Functions
✅ Refs
✅ Other Features


## React Compiler : 
هست React Compiler بهینه سازی خودکار کد ها معرفی 
بهینه سازی هایی که باید قبلا به صورت دستی  توسط توسعه دهنده ها انجام میشد رو
به صورت خودکار انجام میده
در ری اکت های ورژن قبل مثلا برای جلوگیری از رندر های ضروری 
استفاده میکردیم useMemo , ReactMemo باید از ابزار هایی مثل 
اما به لطف اپدیت جدید نیازی به استفاده از این ابزار ها نداریم


## Transitions : 
در ری اکت 18 این مفهوم معرفی شد که برای مدیریت رندر های الویت دار
و یا کم اهمیت تر طراحی شده بود


## Actions : 
 مدیریت ساده تر تغییرات داده ها
 اکشن ها روشی جدید هستن برای مدیریت تغییرات داده ها یا میوتیشن ها


 ## New Hooks :
 هوک های جدید که در ری اکت 19 معرفی شده که مدیریت بهتری برای
 استیت ها و اکشن ها به توسعه دهنده ها میده
 این هوک ها به طور خاص برای حل مشکلات رایجی که 
 برای توسعه دهنده ها پیش می اومد طراحی شدن
  optemestic برسی مدیریت فرم ها و انجام بروز رسانی های 
   در ری اکت از کار برد های مهم این هوک ها هستندasync و ساده سازی فرایند های 



 ## use() and Async Functions : 
  کاربا پرومیس ها و داده های ای سینک رو راحت میکنه


  ## Refs :
 در پروژه ها Refs  بهبود انقال 