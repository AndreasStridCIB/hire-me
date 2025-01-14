import { Child } from "../utils/types";

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
const institutionId = "dc4bd858-9e9c-4df7-9386-0d91e42280eb";
const groupId = "86413ecf-01a1-44da-ba73-1aeda212a196";

export const getChildren = async (): Promise<Child[]> => {
  const response = await fetch(
    `https://app.famly.co/api/daycare/tablet/group?accessToken=${accessToken}&groupId=${groupId}&institutionId=${institutionId}`,
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data.children;
};

export const checkInChild = async (
  childId: string,
  pickupTime: string
): Promise<void> => {
  const response = await fetch(
    `https://app.famly.co/api/v2/children/${childId}/checkins`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        accessToken,
        pickupTime,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  console.log("Check-in response:", data);
};

export const checkOutChild = async (childId: string): Promise<void> => {
  const response = await fetch(
    `https://app.famly.co/api/v2/children/${childId}/checkout`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        accessToken,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  console.log("Check-out response:", data);
};
