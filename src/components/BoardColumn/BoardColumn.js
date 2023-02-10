import React, { useRef } from 'react';
import { useDrop } from 'react-dnd';

const BoardColumn = ({ status, replaceTicketStatus, children }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: 'column',
    drop: (item) => {
      replaceTicketStatus(item.id, status);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  drop(ref);
  return <div ref={ref}>{children}</div>;
};

export default BoardColumn;
