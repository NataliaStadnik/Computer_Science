// В отличие от алгоритма BFS, поиск в глубину ищет не самый короткий, а случайный путь.
// Классическая реализация DFS — рекурсивная.

function dfs(graph, start) {
  const stack = [start];
  const visited = new Set();
  const result = [];

  while (stack.length) {
    const vertex = stack.pop();

    if (!visited.has(vertex)) {
      visited.add(vertex);
      result.push(vertex);

      for (const neighbor of graph[vertex]) {
        stack.push(neighbor);
      }
    }
  }

  return result;
}
