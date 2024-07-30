import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

function App() {
  const posts = [
    {
      id: 1,
      auhtor: {
        avatarUrl: "https://github.com/marcosparreiras.png",
        name: "Marcos Parreiras",
        role: "student",
      },
      publishedAt: new Date(),
      content: [
        { type: "paragraph", content: "Lorem ipsum dolor sit amet." },
        {
          type: "paragraph",
          content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur dicta ea provident, aliquam odio sunt vero adipisci a quos maiores exercitationem labore perferendis hic debitis.",
        },
        {
          type: "link",
          content: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
        },
        { type: "paragraph", content: "Lorem, ipsum dolor." },
      ],
    },
    {
      id: 2,
      auhtor: {
        avatarUrl: "https://github.com/marcosparreiras.png",
        name: "Marcos Parreiras",
        role: "student",
      },
      publishedAt: new Date(),
      content: [
        { type: "paragraph", content: "Lorem ipsum dolor sit amet." },
        {
          type: "paragraph",
          content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur dicta ea provident, aliquam odio sunt vero adipisci a quos maiores exercitationem labore perferendis hic debitis.",
        },
        {
          type: "link",
          content: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
        },
        { type: "paragraph", content: "Lorem, ipsum dolor." },
      ],
    },
  ];

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.length > 0 &&
            posts.map((post) => (
              <Post
                key={post.id}
                auhtor={post.auhtor}
                publishedAt={post.publishedAt}
                content={post.content}
              />
            ))}
        </main>
      </div>
    </>
  );
}

export default App;
