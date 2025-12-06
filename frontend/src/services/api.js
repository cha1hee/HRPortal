const BASE_URL = "http://localhost:3000";

// ---- ONBOARD ----
export async function onboardCall(email, name, role) {
  const res = await fetch(`${BASE_URL}/onboard`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, name, role }),
  });

  return res.json();
}

// ---- SIGNUP ----
export async function signupCall(email, name, password) {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, name, password }),
  });

  return res.json();
}

// ---- LOGIN ----
export async function loginCall(email, password) {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  return res.json();
}

export async function getProfiles() {
  const res = await fetch(`${BASE_URL}/profiles`);
  if (!res.ok) {
    throw new Error(`Failed to fetch profiles: ${res.status}`);
  }
  return await res.json();
}
