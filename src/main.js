import './style.css'

var gl;
var shaderProgram;

initGL();
createShaders();
draw();

function initGL() {
  var canvas = document.getElementById("canvas");
  gl = canvas.getContext("webgl");
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(0, 0, 1, 1);
}

function createShaders() {
  var vs = "";
  vs += "void main() {";
  vs += "  gl_Position = vec4(0, 0, 0, 1);";
  vs += "  gl_PointSize = 10.0;"; // Set point size
  vs += "}";

  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vs);
  gl.compileShader(vertexShader);

  var fs =  "";
  fs += "void main() {";
  fs += "  gl_FragColor = vec4(1, 0, 0, 1);";
  fs += "}";

  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fs);
  gl.compileShader(fragmentShader);

  shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);
  gl.useProgram(shaderProgram);
}

function draw() {
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.POINTS, 0, 1);
}