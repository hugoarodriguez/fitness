import React from "react";

import './styles/kanban_card.scss';
import AddButton from "./AddButton";

const KanbanCard = ({task}) => {

    return(
        <div className="card">
            {task.title}
        </div>
    );
}

export default KanbanCard;