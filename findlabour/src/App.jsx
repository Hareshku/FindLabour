import { AuthProvider } from './context/AuthContext.jsx';
import AppRoutes from './router/AppRoutes';

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
