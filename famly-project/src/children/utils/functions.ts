import { Child } from "./types";

export const getCurrentTimeIn24HourFormat = (): string => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

export const sortChildrenByBoolean = (
  children: Child[],
  property: keyof Child,
  order: string
): Child[] => {
  return children.slice().sort((a, b) => {
    const aValue = a[property] ? 1 : 0;
    const bValue = b[property] ? 1 : 0;
    return order === "asc" ? aValue - bValue : bValue - aValue;
  });
};

export const sortChildrenString = (
  children: Child[],
  order: string
): Child[] => {
  return children.slice().sort((a, b) => {
    return order === "asc"
      ? a.name.fullName.localeCompare(b.name.fullName)
      : b.name.fullName.localeCompare(a.name.fullName);
  });
};
