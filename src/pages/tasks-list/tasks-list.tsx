import "./tasks-list.css";
import CreateTaskForm from "./components/create-task/create-task";
function TasksList() {

    return(
       <main className="tasks__page">
            <h1 className="tasks__page-header">Tasks Board</h1>
            <section className="tasks__list-create-container">
               <CreateTaskForm />
            </section>
       </main>
    )

}
export default TasksList;