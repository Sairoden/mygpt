// LIBRARIES
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

// COMPONENTS
import { Chat } from "@/components";

export default function ChatPage() {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary>
      <Chat />
    </HydrationBoundary>
  );
}
