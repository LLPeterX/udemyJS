// GET
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json));

  // POST
  fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: JSON.stringify(
      {
        title: 'Тест',
        body: 'Однажды в студеную змнюю пору я изх лесу вышел. Был сильный мороз...',
        userId: 1
      }
    ),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json));
// {title: "Тест", body: "Однажды в студеную змнюю пору я изх лесу вышел. Был сильный мороз...", userId: 1, id: 101}