const locations = [
  {
    "name": "Fredericton Bouldering Co-op",
    "url": "https://www-fbcwall-com.filesusr.com/html/bb2cb5_bdcb73d65866709cca12d01626707581.html"
  },
  {
    "name": "Rock Climb Fairfield",
    "url": "https://portal.rockgympro.com/portal/public/4b219910d46057f5c66eac0f777669f6/occupancy?fId=1121"
  },
  {
    "name": "Seven Bays Bouldering (North End)",
    "url": "https://portal.rockgympro.com/portal/public/da1bdc14b9e219e81de152ec2576d858/occupancy?fId=1347"
  },
  {
    "name": "Seven Bays Bouldering (Bayers Lake)",
    "url": "https://portal.rockgympro.com/portal/public/da1bdc14b9e219e81de152ec2576d858/occupancy?fId=1899"
  },
];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ locations });
});
