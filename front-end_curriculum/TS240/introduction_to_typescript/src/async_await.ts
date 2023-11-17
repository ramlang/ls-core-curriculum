// function getData(url) {
//   return fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

// Convert the getData function to TypeScript by adding proper types. Additionally, rewrite the function using the async/await syntax.

async function getData(url: string): Promise<void> {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}

// async function getData(url: string): Promise<void> {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// }

// =======

async function getData(url: string): Promise<void> {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch(e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
    } else {
      console.log("Unknown error occurred");
    }
  }
}