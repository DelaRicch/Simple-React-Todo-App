import React from "react";


const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#bcf75c] to-[#45f345]`
}

function App() {
  return (
    <section className={style.bg}>
      <div className={style.container}>
        <h2 className={style.heading}>Todo App</h2>
      </div>
    </section>
  );
}

export default App;
