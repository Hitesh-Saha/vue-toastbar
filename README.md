# 📦 vue-toaster

A customizable, lightweight Vue 3 toaster library built with TypeScript, and TailwindCSS.

## 🔥 Features

* 📦 Tiny & tree-shakable

* 🌈 Pre-styled with TailwindCSS

* ⏱️ Auto-dismiss with progress

* 🧠 Promise-based toasts

* 🎯 Fully typed (TypeScript support)

---

## 🚀 Installation

```
npm install vue-toaster
# or
yarn add vue-toaster
```

> 🧩 This package uses TailwindCSS — you must configure that in your app.

---

## 🛠️ TailwindCSS Setup

If your app doesn't already use Tailwind:

```
npm install tailwindcss @tailwindcss/vite
```

Update your `vite.config.ts`:

```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(), 
    tailwindcss()
    ],
})
```

Add in your global CSS:

```
@import "tailwindcss";
```

---

## 📦 Usage

1. Import and mount the Toaster component

In `App.vue` or your root layout:

```
<script setup lang="ts">
import { Toaster } from 'vue-toaster';
import 'vue-toaster/dist/vue-toaster.css'
</script>

<template>
  <Toaster />
  <router-view />
</template>
```

2. Trigger a toast

In any component:

```
import { toast, APIToast} from 'vue-toaster';

toast.success('This is a success message!');
toast.error('This is an error message!');
toast.warning('This is a warning message!');
toast.info('This is an info message!');
```

3. Async toasts (for API Calling)

```
await APIToast(
    yourAPICallFunction, 
    'API Data Loaded Successfully!', 
    { progress: 'Loading Data' }
);
```

4. Optional: If any module declaration error occurs

Add in your `vite-env.d.ts`:

```
declare module 'vue-toaster' 
```

---

## ✨ API Reference

`toast.type(message: string, options?: {duration?: number})`

Shows a simple toast.

`APIToast(promise, successMessage: string, options?: {progress?: string, error?: string, duration?: number})`

Displays an "in-progress" toast that updates based on the promise outcome.

---

## 🔒 License

MIT © Hitesh Saha
