import './Column.scss';
import Task from '../Task/Task.js';

const Column = () => {
    return (
        <>
            <div className="column">
                <header>Brainstorm</header>
                    <ul className="task-list">
                        < Task/>
                        
                        <li className="task-item">second</li>
                        <li className="task-item">third</li>
                        <li className="task-item">fourth</li>
                        <li className="task-item">fifth</li>
                        <li className="task-item">sixth</li>
                        <li className="task-item">seventh</li>
                        <li className="task-item">eighth</li>
                        <li className="task-item">ninth</li>
                        <li className="task-item">tenth</li>
                        <li className="task-item">eleventh</li>
                    </ul>
                <footer>Add another card</footer>
            </div>
        </>
    )
}

export default Column;