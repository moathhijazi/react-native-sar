import { PortalHost } from "@rn-primitives/portal";
import { Stack } from "expo-router";
import "~/global.css";
import { ToastProvider } from "../global/context/toast-message-context";
import { GlobalDialogProvider } from "../global/context/dialog-context";
export default function _layout() {
  return (
    <GlobalDialogProvider className="w-[100%]">
      <ToastProvider>
        {/* Remove the wrapping View - let providers handle the layout */}
        <Stack />
        {/* PortalHost must be at root level */}
        <PortalHost />
      </ToastProvider>
    </GlobalDialogProvider>
  );
}
