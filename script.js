var dataset= {
  ['FIFA 2018','13049069','78'],
  ['Call of Duty: WWII','11459994','80'],
  ['Super Mario Odyssey','7766369','97'],
  ['The Legend of Zelda: Breath of the Wild','7491214','97'],
  ['Mario Kart 8 Deluxe','6442403','92'],
  ['Grand Theft Auto V','5361537','97'],
  ['Pokemon: Ultra Sun and Moon','5308897','84'],
  ['Destiny 2','5214350','86'],
  ["Assassin's Creed Origins",'5148351','83'],
  ['Star Wars Battlefront II (2017)','4909810','67'],
  ['Horizon: Zero Dawn','4624409','89'],
  ['NBA 2K18','4363165','80'],
  ["Tom Clancy's Ghost Recon Wildlands",'4310599','73'],
  ['Splatoon 2','4125237','73'],
  ['Madden NFL 18','3867769','82'],
  ['Crash Bandicoot N. Sane Trilogy','3529436','80'],
  ['Resident Evil VII: Biohazard','3469063','83'],
  ['Dragon Quest XI','3206377','N/A'],
  ['For Honor','3150072','79'],
  ['Gran Turismo Sport','3034084','75']
}

function changevideogame(){
  val = document.getElementById("videogameselector").value;

  document.getElementById("globalsales").innerHTML = dataset[val][1];
  document.getElementById("avgreview").innerHTML = dataset[val][2];

}
