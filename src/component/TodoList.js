import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../slice/todoListSlice";

export default function TodoList() {
  const [task, setTask] = useState('');
  const inputRef = useRef(null);

  const { tasks } = useSelector( (state) => state.todoList );
  const dispatch = useDispatch();

  function addTask() {
    if('' !== task.trim()) {
      dispatch( add({ task }) ) // { task } => { task: task }
      setTask('');
      inputRef.current.focus();
    }
  }

  function keyboardEvent(e) {
    if( "Enter" === e.code ) {
      addTask();
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-3">
          <div className="list-group">
            {
              tasks.map( (task, index) => (
                <button className="list-group-item list-group-item-action" key={index} onClick={ () => dispatch( remove({ index }) ) }>
                  {task}</button>
              ))
            }
          </div>
        </div>

        <div className="col-9">

          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Ajouter une tache" ref={inputRef}
              value={task} onChange={(e) => { setTask(e.target.value); }} onKeyDown={ keyboardEvent }  />
            <button className="btn btn-outline-secondary" type="button" onClick={ addTask }>
              Ajouter</button>
          </div>
        </div>
      </div>
    </>
  )
}
// https://github.com/ToNnNo/APIStatic