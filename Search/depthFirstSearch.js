// В отличие от алгоритма BFS, поиск в глубину ищет не самый короткий, а случайный путь.
// Классическая реализация DFS — рекурсивная.

const dfs = (graph, start) => {
  let visited = [];
  let needVisit = [];
  needVisit.push(start);

  while (needVisit.length !== 0) {
    let node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);

      const tmp = !graph[node] ? [] : graph[node];
      needVisit = [...tmp, ...needVisit];
    }
  }
  return visited.join(" ");
};
