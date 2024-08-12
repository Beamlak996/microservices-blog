import { PostCreate } from "./components/post/post-create";
import { PostList } from "./components/post/post-list";

function App() {
  return (
    <div className="flex flex-col min-h-screen mt-12 gap-8 items-center">
        <PostCreate />
      <div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-xl text-center">Posts</h1>
          <PostList />
        </div>
      </div>
    </div>
  );
}

export default App;
