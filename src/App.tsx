import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import {Sidebar} from "./components/Sidebar"
import {TaskInput} from "./components/TaskInput"
import {TaskCard} from "./components/TaskCard"
import type { TaskCardProps } from "./libs/types"

function App() {
  const Taskcards: TaskCardProps[] = [
    {id: 1,title: "Read a book", description: "Vite + React + Bootstrap + TS",isDone: false},
    {id: 2,title: "Write code", description: "Finish project for class",isDone: false},
    {id: 3,title: "Deploy app", description: "Push project to GitHub Pages",isDone: false},
  ];

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header>
        {/*Header ด้านบน*/}
      </Header>
      <div className="d-flex flex-grow-1">
      {/*SideBar ด้านซ้าย*/}
      <Sidebar userName="Natpakan Kanthasorn" type="admin"></Sidebar>
        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            <div className="col-12 m-2 p-0">
            <TaskInput />
            {/* input ด้านบน*/}
            <TaskCard {...Taskcards[0]} />
            <TaskCard {...Taskcards[1]} />
            <TaskCard {...Taskcards[2]} />
            </div>
            {/* Card รายการ */}
            
          </main>
        </div>
      </div>

      {/* Footer ด้านล่าง */}
        <Footer year="2026" fullName="Natpakan Kanthasorn" studentId="670610689"></Footer>
    </div>
  );
}

export default App;
