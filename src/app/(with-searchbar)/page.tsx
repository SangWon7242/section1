import ClientComponent from "./client-component";
import ServerComponent from "./server-components";

export default function Home() {
  return (
    <div>
      <h1>메인페이지</h1>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
