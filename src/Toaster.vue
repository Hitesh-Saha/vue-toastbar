<template>
    <div class="toaster" :class="toast.class, props.position" v-if="isToastEnabled">
      <div class="message-block">
        <i :class="toast.icon" class="base-icon"></i>
        <span>{{ toast.message }}
          <span :class="toast.state === 'ongoing' ? 'animated-dots' : 'unanimated-dots'">...</span>
        </span>
      </div>
      <div class="btn" @click="closeToast" v-if="props.enableActions">✕</div>
    </div>
</template>
  
<script lang="ts" setup>
import { ref, reactive } from "vue";
import EventBus from "./EventBus";
import type { ToasterList, Toast, ToastPayload, ToasterPosition } from "./toaster.types";

const props = defineProps({
  position : {
    type: String as () => ToasterPosition,
    default: "bottom-right",
  },
  enableActions: {
    type: Boolean,
    default: true,
  },
});

const isToastEnabled = ref(false);
const toast = reactive<Toast>({
  message: "",
  class: "",
  type: "",
  icon: "",
  state: "",
});
const toastList: ToasterList[] = [
  {
    type: "success",
    class: "toaster-success",
    icon: "fa fa-check-circle success-icon",
  },
  {
    type: "error",
    class: "toaster-error",
    icon: "fa fa-exclamation-circle error-icon",
  },
  {
    type: "warning",
    class: "toaster-warning",
    icon: "fa fa-exclamation-triangle warning-icon",
  },
  {
    type: "info",
    class: "toaster-info",
    icon: "fas fa-info-circle info-icon",
  },
];


const closeToast = () => {
  isToastEnabled.value = false;
};

EventBus.on("openToast", (data) => {
  const { type, message, state } = data as ToastPayload;
  isToastEnabled.value = true;
  toastList.forEach((item: ToasterList) => {
    if (item.type === type) {
      toast.message = message;
      toast.type = type;
      toast.class = item.class;
      toast.icon = item.icon;
      toast.state = state;
    }
  });
});

EventBus.on("closeToast", () => {
  isToastEnabled.value = false;
});

</script>
  
<style>
.toaster {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: absolute;
  width: max-content;
  z-index: 1000;
  padding: 1rem;
  border-bottom: 1px solid grey;
  border-right: 1px solid grey;
  border-radius: 0.5rem;
  background-color: var(--color-base);
  color: white
}

.bottom-right {
  bottom: 0.5rem;
  right: 0.5rem;
}

.bottom-left {
  bottom: 0.5rem;
  left: 0.5rem;
}

.top-right {
  top: 0.5rem;
  right: 0.5rem;
}

.top-left {
  top: 0.5rem;
  left: 0.5rem;
}

.top {
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
}

.bottom {
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
}

.left {
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
}

.right {
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
}

.toaster-success {
  border-left: 2px solid var(--color-success) !important;
  border-top: 1px solid var(--color-success) !important;
}

.toaster-error {
  border-left: 2px solid var(--color-error) !important;
  border-top: 1px solid var(--color-error) !important;
}

.toaster-warning {
  border-left: 2px solid var(--color-warning) !important;
  border-top: 1px solid var(--color-warning) !important;
}
  
.toaster-info {
  border-left: 2px solid var(--color-info) !important;
  border-top: 1px solid var(--color-info) !important;
}

.message-block {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem !important;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
}

.base-icon {
  font-size: 1.6rem;
}
  
.success-icon {
  color: var(--color-success);
}

.error-icon {
  color: var(--color-error);
}

.warning-icon {
  color: var(--color-warning);
}

.info-icon {
  color: var(--color-info);
}

.btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  color: white;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-weight: bold;
  font-family: monospace;
}
  
.unanimated-dots {
  display: none;
}

.animated-dots {
  font-weight: bold;
  display: inline-block;
  font-family: monospace;
  font-size: 1.5rem;
  clip-path: inset(0 3ch 0 0);
  animation: animateDots 1s steps(4) infinite;
}

@keyframes animateDots {
  to {
    clip-path: inset(0 -1ch 0 0);
  }
}
</style>
  