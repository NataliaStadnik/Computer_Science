// - Для решения задач поиска оптимального пути.
// - Из-за характера распространения, похожего на волну, алгоритм еще называют волновым.
// Object(V+E) - V-количество вершин  E- количество ребер

function bfs(graph, start) {
  const queue = [start];
  const visited = new Set();
  const result = [];

  while (queue.length) {
    const vertex = queue.shift();

    if (!visited.has(vertex)) {
      visited.add(vertex);
      result.push(vertex);

      for (const neighbor of graph[vertex]) {
        queue.push(neighbor);
      }
    }
  }

  return result;
}
