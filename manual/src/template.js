export default (body, data) =>
  `<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body><div id="app">${body}</div><script>window.data=${JSON.stringify(
    data
  )}</script><script src="/bundle.js" ></script></body></html>`;
