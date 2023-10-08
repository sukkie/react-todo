import { useAuth } from "./security/AuthContext";

export default function FooterComponent() {
  const authContext = useAuth();
  console.log(`Footer component - ${authContext.number}`);
  return (
    <footer className='footer'>
      <div className='container'>Your Footer</div>
    </footer>
  );
}
