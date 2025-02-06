type NestedMessages = {
  [key: string]: string | NestedMessages;
};

function flattenMessages(
  nestedMessages: NestedMessages,
  prefix = ""
): Record<string, string> {
  return Object.keys(nestedMessages).reduce((acc, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "object" && value !== null) {
      Object.assign(acc, flattenMessages(value as NestedMessages, prefixedKey));
    } else {
      acc[prefixedKey] = value as string;
    }

    return acc;
  }, {} as Record<string, string>);
}

export default flattenMessages;
