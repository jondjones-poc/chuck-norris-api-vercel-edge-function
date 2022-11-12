
const API_ENDPOINT = "https://api.chucknorris.io/jokes/random";

// turn it into an edge function
export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req, res) {

  const response  = await fetch(API_ENDPOINT);
  const body =  await response.json();

  console.log(body)

  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': "*"
    }
  })
};

