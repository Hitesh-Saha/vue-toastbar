# 📦 vue-toastbar

A modern, customizable Vue 3 toaster library built with TypeScript and TailwindCSS.

## 🔥 Features

* 📦 Tiny & tree-shakable
* 🌈 Pre-styled with TailwindCSS
* 🧠 Promise-based toasts
* 🎯 Full TypeScript support
* 📱 Responsive design
* 🔧 Easy to configure
* 🚀 Zero dependencies (except Vue 3 and TailwindCSS)

## 🚀 Installation

```bash
npm install vue-toastbar
# or using yarn
yarn add vue-toastbar
# or using pnpm
pnpm add vue-toastbar
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

```vue
<script setup lang="ts">
import { Toaster } from 'vue-toastbar'
import 'vue-toastbar/dist/vue-toaster.css'
</script>

<template>
  <Toaster />
  <router-view />
</template>
```

2. Trigger a toast

```typescript
import { toast } from 'vue-toastbar'

// Success toast
toast.success('Operation completed successfully!')

// Error toast
toast.error('Something went wrong!')

// Info toast
toast.info('Did you know?')

// Warning toast
toast.warning('Please be careful!')
```

3. Async Toasts (For API Calling)

```typescript
// Promise-based toast
const promise = async () => {
  // Your async operation
}

await APIToast(
    promise, 
    'API Data Loaded Successfully!', 
    { progress: 'Loading Data' }
);
```

4. Optional: If any module declaration error occurs

Add in your `vite-env.d.ts`:

```typescript
declare module 'vue-toastbar'
```

---

## 🔧 API Reference

### Toast Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| duration | number | 4000 | Toast duration in milliseconds |

### APIToast Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| duration | number | 4000 | Toast duration in milliseconds |
| progress | string | Loading | Loading message while api calling |
| error | string | An error occurred | error message to display if any error occurs |

### Toaster Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| position | string | bottom-right | Toaster position in application |
| enableActions| boolean | true | Enabled or disabled the toaster close button |

### Toast Methods

- `toast.success(message, options?)`
- `toast.error(message, options?)`
- `toast.info(message, options?)`
- `toast.warning(message, options?)`
- `APIToast(promise, messages, options?)`

## 🎨 Customization

You can customize the toaster by disabling actions or change the toaster position or even add styling using TailwindCSS classes:

```vue
<Toaster 
  :position="top"
  :enableActions=false
/>
```

## 📝 License

MIT License - see the [LICENSE](LICENSE) file for details
