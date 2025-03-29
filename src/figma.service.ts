import axios from "axios";

export async function fetchFigmaData(apiKey: string, fileId: string) {
  const response = await axios.get(`https://api.figma.com/v1/files/${fileId}`, {
    headers: {
      "X-Figma-Token": apiKey,
    },
  });
  return response.data;
}
