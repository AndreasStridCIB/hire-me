import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getChildren,
  postCheckInChild,
  postCheckOutChild,
} from "../api/children";
import { Child } from "../utils/types";
import { getCurrentTimeIn24HourFormat } from "../utils/functions";

export const useChildren = () => {
  const queryClient = useQueryClient();
  const {
    data: children,
    status,
    isLoading,
  } = useQuery<Child[], Error>({
    queryKey: ["getChildren"],
    queryFn: getChildren,
  });

  const { mutateAsync: checkInChild } = useMutation<void, Error, string>({
    mutationFn: (childId: string) => {
      return postCheckInChild(childId, getCurrentTimeIn24HourFormat());
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getChildren"] });
    },

    onError: (error) => {
      console.error("Error checking in child:", error);
    },
  });

  const { mutateAsync: checkOutChild } = useMutation<void, Error, string>({
    mutationFn: (childId: string) => {
      return postCheckOutChild(childId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getChildren"] });
    },
    onError: (error) => {
      console.error("Error checking out child:", error);
    },
  });

  return { children, status, isLoading, checkInChild, checkOutChild };
};
