class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
          <style>
          .search-container {
            max-width: 800px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            padding: 16px;
            border-radius: 5px;
            display: flex;
            position: sticky;
            top: 10px;
            background-color: #d3756b;
            margin: 32px auto;
            border-radius: 50vh;
          }
          
          .search-container > input {
            width: 75%;
            padding: 16px;
            border: 1px solid #a75d5d;
            font-weight: bold;
            border-radius: 50vh;
            background-color: #ffc3a1;
            color: black;
          }
          
          .search-container > input:focus {
            outline: 0;
            border: 2px solid black;
          }
          
          .search-container > input:focus::placeholder {
            font-weight: bold;
          }
          
          .search-container >  input::placeholder {
            color: black;
            font-weight: normal;
          }
          
          .search-container > button {
            width: 25%;
            cursor: pointer;
            margin-left: 5px;
            padding: 16px;
            background-color: #a75d5d;
            color: black;
            border: 0;
            border-radius: 50vh;
          }
          
          </style>
          
          <div id="search-container" class="search-container">
            <input placeholder="Search Foods" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
          </div>
        `;

    this.shadowDOM
      .querySelector("#searchButtonElement")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
