// Importe as bibliotecas necessárias
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Dados iniciais para as colunas
const initialData = {
  todo: { id: 'todo', title: 'A fazer', items: ['Tarefa 1', 'Tarefa 2', 'Tarefa 3'] },
  inProgress: { id: 'inProgress', title: 'Em andamento', items: [] },
  done: { id: 'done', title: 'Finalizado', items: [] },
};

const Kanban = () => {
  const [columns, setColumns] = useState(initialData);

  // Função para lidar com a reordenação dos itens ao arrastar e soltar
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination, draggableId } = result;

    // Verifica se o item foi movido para uma coluna diferente
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destinationColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destinationItems = [...destinationColumn.items];

      // Remove o item da coluna de origem
      sourceItems.splice(source.index, 1);

      // Adiciona o item na coluna de destino
      destinationItems.splice(destination.index, 0, draggableId);

      // Atualiza o estado com as colunas modificadas
      setColumns({
        ...columns,
        [source.droppableId]: { ...sourceColumn, items: sourceItems },
        [destination.droppableId]: { ...destinationColumn, items: destinationItems },
      });
    } else {
      // Movimenta o item dentro da mesma coluna
      const column = columns[source.droppableId];
      const newItems = [...column.items];
      newItems.splice(source.index, 1);
      newItems.splice(destination.index, 0, draggableId);

      // Atualiza o estado com a coluna modificada
      setColumns({
        ...columns,
        [source.droppableId]: { ...column, items: newItems },
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {Object.keys(columns).map((columnId) => {
        const column = columns[columnId];
        return (
          <div key={columnId} style={{ margin: 8 }}>
            <h2>{column.title}</h2>
            <Droppable droppableId={columnId} key={columnId}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} style={{ minHeight: 100, backgroundColor: '#eee', padding: 8 }}>
                  {column.items.map((item, index) => (
                    <Draggable key={item} draggableId={item} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            userSelect: 'none',
                            padding: 16,
                            margin: '0 0 8px 0',
                            minHeight: '50px',
                            backgroundColor: '#fff',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            ...provided.draggableProps.style,
                          }}
                        >
                          {item}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        );
      })}
    </DragDropContext>
  );
};

export default Kanban;
