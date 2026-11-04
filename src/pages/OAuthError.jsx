import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { CircleAlert } from "lucide-react";
import AuthShell from "../components/Auth/AuthShell";

function OAuthError() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const message = searchParams.get("message")?.trim() || "Something went wrong with Google sign-in. Please try again.";

  return (
    <AuthShell
      title="Google sign-in didn’t finish"
      note="Your account was not connected."
      onClick={() => navigate("/")}
      showSteps={false}
      panelLabel="Google sign-in error"
    >
      <div className="auth-state auth-state--error" role="alert">
        <span className="auth-state__mark">
          <CircleAlert size={20} aria-hidden="true" />
        </span>
        <h2 className="auth-state__title">Google sign-in error</h2>
        <p className="auth-state__text">{message}</p>
        <Link to="/login" className="auth-primary">Back to login</Link>
        <Link to="/support" className="auth-link">Contact support</Link>
      </div>
    </AuthShell>
  );
}

export default OAuthError;
