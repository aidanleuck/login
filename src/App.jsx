import "./App.css";

const countries = [
  { code: "US", label: "US" },
  { code: "CA", label: "CA" },
  { code: "UK", label: "UK" },
  { code: "AU", label: "AU" }
];

export default function App() {
  return (
    <div className="page">
      <div className="card">
        <div className="logo" aria-hidden="true">
          <img src="/ed-icon-filled-256.png" alt="ed logo" />
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
            defaultValue=""
          />
        </div>

        <div className="field">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className="input"
            type="password"
          />
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
    </div>
  );
}
