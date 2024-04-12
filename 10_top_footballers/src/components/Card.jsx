import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Card({ people, handleOnDragEnd }) {
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="characters">
        {(provided) => (
          <div className="characters" {...provided.droppableProps} ref={provided.innerRef}>
            {people.map((human, ind) => {
              const { id, name, image } = human;
              return (
                <Draggable key={id} draggableId={String(id)} index={ind}>
                  {(provided) => (
                    <article className="person" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <img src={image} alt={name} />
                      <div>
                        <h2>{name}</h2>
                      </div>
                    </article>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Card;
