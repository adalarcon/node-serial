const SerialPort  = require('serialport');

const PORT        = 'COM13';
const BAUD_RATE   = 57600;

const Readline    = SerialPort.parsers.Readline;
const port        = new SerialPort(PORT, { baudRate: BAUD_RATE });
const parser      = new Readline();

//  Available ports
SerialPort.list().then(ports => {
  console.log("******************");
  console.log("[serial] Available Ports");
  for (var i = 0; i < ports.length; i++) {
    console.log("[serial] port: ", ports[i].comName);
  }
  console.log("******************");
});

// Serial Parser
port.pipe(parser);

// on get data from port
parser.on('data', (data) => {
  console.log("[serial] imput: ", data);
});
