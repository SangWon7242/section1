import ClientComponent from "../../components/client-component";
import ServerComponent from "../../components/server-components";

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
