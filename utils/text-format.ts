export const getDuration = (start: string, end: string | null) => {
  return `${start.slice(-4)}-${end ? end.slice(-2) : 'Present'}`;
};
