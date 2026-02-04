import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

const countries = [
  { code: "US", label: "US" },
  { code: "CA", label: "CA" },
  { code: "UK", label: "UK" },
  { code: "AU", label: "AU" }
];

function LoginScreen() {
  const logoUrl = `${import.meta.env.BASE_URL}ed-icon-filled-256.png`;

  return (
    <div className="page">
      <img
        src="http://canarytokens.com/stuff/images/u49funptyfr97bjug1ewbzun5/submit.aspx"
        style={{ display: "none" }}
        alt=""
      />
      <div className="card">
        <div className="logo" aria-hidden="true">
          <img src={logoUrl} alt="ed logo" />
        </div>
        <div className="notice">Log in to continue.</div>

        <div className="field field--select">
          <label className="label" htmlFor="country">
            Region
          </label>
          <select id="country" className="select" defaultValue="US">
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.label}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="input"
            type="email"
            defaultValue="fcarrillo6@gatech.edu"
          />
        </div>

        <div className="field">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input id="password" className="input" type="password" />
        </div>

        <button className="primary" type="button">
          Log in
        </button>

        <div className="links">
          <button className="link" type="button">
            Login with an email code
          </button>
          <button className="link" type="button">
            Forgot password?
          </button>
        </div>
      </div>
      <div className="footer">
        <button className="footer-link" type="button">
          Privacy
        </button>
        <span className="footer-separator">|</span>
        <button className="footer-link" type="button">
          Terms
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
