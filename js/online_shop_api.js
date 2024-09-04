const baseUrl = "https://v2.api.noroff.dev";

async function authorize() {
  try {
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "erlhal01002@stud.noroff.no",
        password: "fisketur123",
      }),
    });

    if (response.ok) {
      console.log("Registration successful");
    } else {
      const errorData = await response.json(); // Parse the error response
      console.error("Registration failed:", errorData);
    }
  } catch (error) {
    console.error("Network error:", error);
  }
}

authorize();
