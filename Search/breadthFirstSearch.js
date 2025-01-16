// - Для решения задач поиска оптимального пути.
// - Из-за характера распространения, похожего на волну, алгоритм еще называют волновым.
// Object(V+E) - V-количество вершин  E- количество ребер

const bfs = (graph, start) => {
  let visited = [];
  let needVisit = [];
  needVisit.push(start);

  while (needVisit.length !== 0) {
    let node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);

      const tmp = !graph[node] ? [] : graph[node];
      needVisit = [...needVisit, ...tmp];
    }
  }
  return visited.join(" ");
};
