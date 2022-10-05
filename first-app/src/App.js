import './App.css';

function App() {
  return (
    <div className="form-group">
      <form>
        <div className="form-group">
          <label htmlFor="formControlRange">Example Range input</label>
          <input type="range" className="form-control-range" id="formControlRange" />
        </div>
      </form>
    </div>
  );
}

export default App;
