import { Child } from "../utils/types";
import axios from "axios";

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
const institutionId = "dc4bd858-9e9c-4df7-9386-0d91e42280eb";
const groupId = "86413ecf-01a1-44da-ba73-1aeda212a196";

export const getChildren = async (): Promise<Child[]> => {
  try {
    const response = await axios.get(
      `https://app.famly.co/api/daycare/tablet/group`,
      {
        params: {
          accessToken,
          groupId,
          institutionId,
        },
      }
    );

    return response.data.children;
  } catch (error) {
    console.log("Error fetching children:", error);
    throw new Error("Network response was not ok");
  }
};

export const postCheckInChild = async (
  childId: string,
  pickupTime: string
): Promise<void> => {
  try {
    const response = await axios.post(
      `https://app.famly.co/api/v2/children/${childId}/checkins`,
      {
        accessToken,
        pickupTime,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Check-in response:", response.data);
  } catch (error) {
    console.log("Error postCheckInChild:", error);
    throw new Error("Network response was not ok");
  }
};

export const postCheckOutChild = async (childId: string): Promise<void> => {
  try {
    const response = await axios.post(
      `https://app.famly.co/api/v2/children/${childId}/checkout`,
      {
        accessToken,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Check-out response:", response.data);
  } catch (error) {
    console.error("Error checking out child:", error);
    throw new Error("Network response was not ok");
  }
};
