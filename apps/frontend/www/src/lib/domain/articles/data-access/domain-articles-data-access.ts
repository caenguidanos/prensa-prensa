import type {
   ArticleCommandCreatePayload,
   ArticleCommandUpdatePayload,
   ArticleQueryDTO
} from "../entity/domain-articles-entity";

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
const authorization = "Bearer 1234...";

export async function queryArticles(signal: AbortSignal): Promise<ArticleQueryDTO[]> {
   let url = `${baseUrl}/articles`;

   const response = await fetch(url, { signal });

   if (response.ok) {
      return response.json();
   }

   throw new Error(`${response.status}`);
}

export async function queryArticlesOnlyNew(signal: AbortSignal): Promise<ArticleQueryDTO[]> {
   let url = `${baseUrl}/articles/derived/new`;

   const response = await fetch(url, { signal });

   if (response.ok) {
      return response.json();
   }

   throw new Error(`${response.status}`);
}

export async function queryArticlesOnlyArchived(signal: AbortSignal): Promise<ArticleQueryDTO[]> {
   let url = `${baseUrl}/articles/derived/archive`;

   const response = await fetch(url, { signal });

   if (response.ok) {
      return response.json();
   }

   throw new Error(`${response.status}`);
}

export async function queryArticleByID(id: string, signal: AbortSignal): Promise<ArticleQueryDTO> {
   const url = `${baseUrl}/articles/${id}`;

   const response = await fetch(url, { signal });

   if (response.ok) {
      return response.json();
   }

   throw new Error(`${response.status}`);
}

export async function commandCreateArticle(
   payload: ArticleCommandCreatePayload,
   signal: AbortSignal
): Promise<ArticleQueryDTO> {
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
   payload: ArticleCommandUpdatePayload,
   signal: AbortSignal
): Promise<ArticleQueryDTO> {
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
): Promise<ArticleQueryDTO> {
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
