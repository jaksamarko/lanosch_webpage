function jsonFetch(url: string, callback: (response: any) => void) {
  fetch(`${(import.meta as any).env.VITE_BACKEND}${url}`)
    .then((res) => res.json())
    .then((response) => {
      callback(response);
    });
}

export default jsonFetch;
