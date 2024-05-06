// LIBRARIES
import { useMutation } from "@tanstack/react-query";

// STYLES
import toast from "react-hot-toast";

// SERVICES
import { generateChatResponse } from "@/services/apiChats";

export const useCreateMessage = () => {
  const { mutate: createMessage, isPending } = useMutation({
    mutationFn: (message: string) => generateChatResponse(message),
    onSuccess: data => {
      if (!data) return toast.error("Something went wrong...");
    },
  });

  return { createMessage, isPending };
};
