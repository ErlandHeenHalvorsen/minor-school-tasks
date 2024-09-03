class HelloWorld extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    const greeting = document.createElement("p");
    greeting.textContent = "Hello World";
    container.appendChild(greeting);
    shadow.appendChild(container);
  }
}
customElements.define("hello-world", HelloWorld);

class FilledCircle extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", "50");
    circle.setAttribute("cy", "50");
    circle.setAttribute("r", "40");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "4");
    circle.setAttribute("fill", this.getAttribute("color"));
    svg.appendChild(circle);
    shadow.appendChild(svg);
  }
}
customElements.define("filled-circle", FilledCircle);

class myComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = `
    div {
      font-size: 20px;
      color: red;
    }
    `;
    const div = document.createElement("div");
    div.textContent = "Hello web-component!";
    this.shadowRoot.append(style, div);
  }
}
customElements.define("my-component", myComponent);
