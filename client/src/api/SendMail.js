export async function SendMail(url, data, setSuccess) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  if (response.status !== 200) {
    setSuccess(false);
  }
}
