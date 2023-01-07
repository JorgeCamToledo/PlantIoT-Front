import img1 from '../../img/descarga.jpg';
import img2 from '../../img/esp32.jpg';
import img3 from '../../img/sensor1.jpg';
import img4 from '../../img/sensor2.jpg';
import img5 from '../../img/bomba.jpg';
import img6 from '../../img/reley.jpg';
import img7 from '../../img/lcd.jpg';
import img8 from '../../img/dht11.jpg';
import "./Circuito.css";
import NavBarExample from '../NavBar';
function Circuito() {


    
  return (
    <div>
                    <div className="contains-nav">
 <NavBarExample/>
        </div>
        <div class= "losmasvistos">
            <div>
                <img src={img1} alt=""/> <br/>
                <b>Arduino Uno </b><br/>
                Umbrella Academy   
            </div>

            <div>
                <img src={img2} alt=""/><br/>
                <b>ESP32</b><br/><br/>
                Umbrella Academy   
            </div>
            <div>
                <img src={img3} alt=""/><br/>
                <b>Sensor Ultrasonico HC-SR04 </b> <br/>
                Umbrella Academy 
            </div>
            <div>
                <img src={img4} alt=""/><br/>
                <b>Sensor de humedad de suelo FC28 </b> <br/>
                Umbrella Academy   
            </div>
            <div>
                <img src={img5} alt=""/><br/>
                <b>Bomba sumergible 5V </b><br/>
                Umbrella Academy   
            </div>
            <div>
                <img src={img6} alt=""/><br/>
                <b>RELAY 5V </b><br/>
                Umbrella Academy   
            </div>
            <div>
                <img src={img7} alt=""/><br/>
                <b>LCD 16X2 </b> <br/>
                Umbrella Academy   
            </div>
            <div>
                <img src={img8} alt=""/><br/>
                <b> Sensor de humedad DHT11</b> <br/>
                Umbrella Academy   
            </div>
        </div>
    </div>

  );


}


export default Circuito;