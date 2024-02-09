async function removeItem(path) {
  await fetch(path, {
    method: 'DELETE', // Change method to DELETE
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export default removeItem