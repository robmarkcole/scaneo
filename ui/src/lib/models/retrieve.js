import { PUBLIC_API_URL } from "$env/static/public";
import { fetcher } from "$lib/utils/fetcher";

export async function retrieveModels() {
  const url = `${PUBLIC_API_URL}/models`;
  return fetcher(url);
}

export async function retrieveOneModel(model) {
  const url = `${PUBLIC_API_URL}/models/${model}`;
  return fetcher(url);
}