import LeftSidebar from "./left-sidebar";
import Content from "./content";
import Rightsidebar from "./right-sidebar";

export default function Main({posts}) {
  return (
    <div className="xl:container mx-auto p-4 custom-main">
      <LeftSidebar />
      <Content posts={posts} />
      <Rightsidebar />
    </div>
  );
}
