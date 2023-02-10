import React, { useRef } from 'react';
import { useDrag } from 'react-dnd';

const BoardItem = ({ id, children }) => {
  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    type: 'column',
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(ref);
  return (
    <div ref={ref} style={{ opacity: isDragging ? 0.2 : 1 }}>
      {children}
    </div>
  );
};

export default BoardItem;
