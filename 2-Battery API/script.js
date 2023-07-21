const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(
  ".batteryDisChargingTime"
);

// Battery API

const battery = () => {
  if('getBattery' in navigator){
    navigator.getBattery().then((battery)=> {
      function updateAllBatteryDetails(){
        updateCharginInfo();
        updateLevelChange();
        updateDischargingTimeInfo();
        updateChargingTimeChangeInfo();
      };

      updateAllBatteryDetails();
     
      // Battery Chargin change
      battery.addEventListener('chargingchange', ()=>{
        updateCharginInfo();
      });

      function updateCharginInfo(){
        const isCharging = battery.charging ? 'Yes':'No';
        batteryCharging.innerHTML = isCharging;
      };

      // Battery chargin time
      battery.addEventListener('chargingtimechange', ()=>{
        updateChargingTimeChangeInfo();
      });

      function updateChargingTimeChangeInfo(){
        batteryChargingTime.innerHTML = battery.chargingTime + " seconds";
      }
      // Battery discharging time
      battery.addEventListener('dischargingtimechange', ()=>{
        update.updateDischargingTimeInfo();
      });

      function updateDischargingTimeInfo(){
        
        batteryDisChargingTime.innerHTML = battery.dischargingTime + " seconds";
      };
      // Battery level change
      battery.addEventListener('levelchange',() =>{
        updateLevelChange();
      });

      function updateLevelChange (){
        const level = battery.level * 100 + "%";
        batteryLevel.innerHTML = level;
      }
      // Battery status


    });
  };
};

battery();