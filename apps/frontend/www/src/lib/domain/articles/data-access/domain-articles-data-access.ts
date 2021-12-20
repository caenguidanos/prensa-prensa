import type {
   CommandCreateArticlePayload,
   CommandUpdateArticlePayload,
   QueryArticlesDTO
} from "../entity/domain-articles-entity";

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
const authorization = "Bearer 1234...";

export async function queryArticles(): Promise<QueryArticlesDTO[]> {
   const url = `${baseUrl}/articles`;

   const response = await fetch(url);

   if (response.ok) {
      return response.json();
   }

   throw new Error(`${response.status}`);
}

export async function queryArticleByID(id: string): Promise<QueryArticlesDTO> {
   const url = `${baseUrl}/articles/${id}`;

   const response = await fetch(url);

   if (response.ok) {
      return response.json();
   }

   throw new Error(`${response.status}`);
}

export async function commandCreateArticle(
   payload: CommandCreateArticlePayload
): Promise<QueryArticlesDTO> {
   const url = `${baseUrl}/articles`;

   const response = await fetch(url, {
      method: "POST",
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
   payload: CommandUpdateArticlePayload
): Promise<QueryArticlesDTO> {
   const url = `${baseUrl}/articles/${id}`;

   const response = await fetch(url, {
      method: "PATCH",
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

export async function commandDeleteArticleByID(id: string): Promise<QueryArticlesDTO> {
   const url = `${baseUrl}/articles/${id}`;

   const response = await fetch(url, {
      method: "DELETE",
      headers: {
         authorization
      }
   });

   if (response.ok) {
      return response.json();
   }

   throw new Error(`${response.status}`);
}
