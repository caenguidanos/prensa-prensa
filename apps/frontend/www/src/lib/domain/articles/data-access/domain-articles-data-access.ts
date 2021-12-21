import type { Article } from "articles";

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
const authorization = "Bearer 1234...";

export async function queryArticles(signal: AbortSignal): Promise<Article.QueryDTO[]> {
   let url = `${baseUrl}/articles`;

   const response = await fetch(url, { signal });

   if (response.ok) {
      return response.json();
   }

   throw new Error(`${response.status}`);
}

export async function queryArticlesOnlyNew(signal: AbortSignal): Promise<Article.QueryDTO[]> {
   let url = `${baseUrl}/articles?new=true`;

   const response = await fetch(url, { signal });

   if (response.ok) {
      return response.json();
   }

   throw new Error(`${response.status}`);
}

export async function queryArticlesOnlyArchived(signal: AbortSignal): Promise<Article.QueryDTO[]> {
   let url = `${baseUrl}/articles?new=false`;

   const response = await fetch(url, { signal });

   if (response.ok) {
      return response.json();
   }

   throw new Error(`${response.status}`);
}

export async function queryArticleByID(id: string, signal: AbortSignal): Promise<Article.QueryDTO> {
   const url = `${baseUrl}/articles/${id}`;

   const response = await fetch(url, { signal });

   if (response.ok) {
      return response.json();
   }

   throw new Error(`${response.status}`);
}

export async function commandCreateArticle(
   payload: Article.CommandCreatePayload,
   signal: AbortSignal
): Promise<Article.QueryDTO> {
   const url = `${baseUrl}/articles`;

   const response = await fetch(url, {
      method: "POST",
      signal,
      body: JSON.stringify(payload),
      headers: {
         authorization
      }
   });

   if (response.ok) {
      return response.json();
   }

   throw new Error(`${response.status}`);
}

export async function commandUpdateArticleByID(
   id: string,
   payload: Article.CommandUpdatePayload,
   signal: AbortSignal
): Promise<Article.QueryDTO> {
   const url = `${baseUrl}/articles/${id}`;

   const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(payload),
      signal,
      headers: {
         authorization
      }
   });

   if (response.ok) {
      return response.json();
   }

   throw new Error(`${response.status}`);
}

export async function commandDeleteArticleByID(
   id: string,
   signal: AbortSignal
): Promise<Article.QueryDTO> {
   const url = `${baseUrl}/articles/${id}`;

   const response = await fetch(url, {
      method: "DELETE",
      signal,
      headers: {
         authorization
      }
   });

   if (response.ok) {
      return response.json();
   }

   throw new Error(`${response.status}`);
}
