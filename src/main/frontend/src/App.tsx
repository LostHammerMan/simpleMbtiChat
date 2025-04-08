
export default function App() {
  return (
    <div className="text-4xl font-extrabold m-2 p-3 bg-green-500">
      hello world!
      <MyButton/>
    </div>
  );
}

function MyButton(){
  return (
    <button>
      클릭해봐
    </button>
  );
}

