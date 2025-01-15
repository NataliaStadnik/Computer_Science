// Алгоритм Дейкстры
// это метод, который находит кратчайший путь от одной вершины графа к другой.

// - работает для графов, у которых нет ребер с отрицательным весом
// - ищет оптимальный маршрут от одной заданной вершины ко всем остальным. Попутно он высчитывает длину пути
// Сначала выбирается точка, от которой будут отсчитываться пути. Затем алгоритм поочередно ищет самые
// короткие маршруты из исходной точки в другие. Вершины, где он уже побывал, отмечает посещенными.

const dijkstra = (graph, start) => {
  const parents = {};
  const costs = {};
  const queue = [];

  for (let vert in graph) {
    if (vert === start) {
      costs[vert] = 0;
      queue.push([vert, 0]);
    } else {
      costs[vert] = Infinity;
      queue.push([vert, Infinity]);
    }
    parents[vert] = null;
  }

  while (queue.length) {
    const node = getLowestCostNode(queue);
    let [vert, value] = node;
    const cost = costs[vert];

    if (node || value !== Infinity) {
      for (let subNode in graph[vert]) {
        const nextSubNodeValue = graph[vert][subNode];
        const newCost = cost + nextSubNodeValue;
        if (costs[subNode] > newCost) {
          costs[subNode] = newCost;
          parents[subNode] = vert;
          queue.push([subNode, newCost]);
        }
      }
    }
  }
};

const getLowestCostNode = (queue) => {
  let min = Infinity;
  let lowIndex;

  for (let i = 0; i < queue.length; i++) {
    const [, value] = queue[i];
    if (value < min) {
      min = value;
      lowIndex = i;
    }
  }

  const lowestNode = queue.splice(lowIndex, 1)[0];
  return lowestNode;
};
