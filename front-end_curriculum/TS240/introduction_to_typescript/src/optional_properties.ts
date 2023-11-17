interface UserInfo {
  name: string;
  email?: string;
  age?: number;
}

// Implement a function displayUserInfo that takes a UserInfo object and returns a formatted string containing the user's information. For optional properties, display a default value (use "N/A" for email and "unknown" for age) if they are not provided.

function displayUserInfo(userInfo: UserInfo): string {
  return `${userInfo.name} ${userInfo.email || "N/A"} ${userInfo.age || "unknown"}`;
}
