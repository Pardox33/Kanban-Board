export function useDragDropDnd(columns, setColumns) {
  const onDragEnd = ({ source, destination, type }) => {
    if (!destination) return;

    if (type === "column") {
      const newCols = [...columns];
      const [moved] = newCols.splice(source.index, 1);
      newCols.splice(destination.index, 0, moved);
      setColumns(newCols);
      return;
    }

    if (type === "task") {
      const newCols = columns.map((col) => ({ ...col, tasks: [...col.tasks] }));

      const fromCol = newCols.find((col) => col.id === source.droppableId);
      const toCol = newCols.find((col) => col.id === destination.droppableId);

      const [movedTask] = fromCol.tasks.splice(source.index, 1);
      toCol.tasks.splice(destination.index, 0, movedTask);

      setColumns(newCols);
    }
  };

  return { onDragEnd };
}
